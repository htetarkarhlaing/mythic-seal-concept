"use client";

import React, { createContext, useContext, useSyncExternalStore } from "react";
import {
  useCartStore,
  selectTotalCount,
  selectSubtotal,
  selectDiscount,
  CartItem,
} from "@/store/useCartStore";
import { ShopProduct } from "@/data/shop";

export type { CartItem };

interface CartContextType {
  items: CartItem[];
  addItem: (
    product: ShopProduct,
    size: string,
    quantity?: number,
    customName?: string,
    customNumber?: string
  ) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, delta: number) => void;
  clearCart: () => void;
  totalCount: number;
  subtotal: number;
  discount: number;
  appliedPromo: string | null;
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const emptySubscribe = () => () => {};

export function CartProvider({ children }: { children: React.ReactNode }) {
  // Bridge Zustand store to React Context for backwards compatibility
  const store = useCartStore();
  const totalCount = useCartStore(selectTotalCount);
  const subtotal = useCartStore(selectSubtotal);
  const discount = useCartStore(selectDiscount);

  // Hydration-safe client check without setState in effects
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  return (
    <CartContext.Provider
      value={{
        items: isClient ? store.items : [],
        addItem: store.addItem,
        removeItem: store.removeItem,
        updateQuantity: store.updateQuantity,
        clearCart: store.clearCart,
        totalCount: isClient ? totalCount : 0,
        subtotal: isClient ? subtotal : 0,
        discount: isClient ? discount : 0,
        appliedPromo: store.appliedPromo,
        applyPromo: store.applyPromo,
        removePromo: store.removePromo,
        isCartOpen: store.isCartOpen,
        setIsCartOpen: store.setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
