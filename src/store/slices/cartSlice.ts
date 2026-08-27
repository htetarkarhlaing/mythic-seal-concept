import { StateCreator } from "zustand";
import { ShopProduct } from "@/data/shop";

export interface CartItem {
  id: string;
  product: ShopProduct;
  size: string;
  customName?: string;
  customNumber?: string;
  quantity: number;
}

export const PROMO_CODES: Record<string, number> = {
  KBZPAY10: 0.1,
  SEAL2026: 0.15,
  GLORY: 0.2,
};

export interface CartSlice {
  items: CartItem[];
  appliedPromo: string | null;
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
  applyPromo: (code: string) => boolean;
  removePromo: () => void;
}

export const createCartSlice: StateCreator<
  CartSlice & { setIsCartOpen: (open: boolean) => void },
  [],
  [],
  CartSlice
> = (set, get) => ({
  items: [],
  appliedPromo: null,

  addItem: (product, size, quantity = 1, customName, customNumber) => {
    const itemKey = `${product.id}-${size}-${customName || "none"}-${customNumber || "none"}`;
    const currentItems = get().items;
    const existingIndex = currentItems.findIndex((i) => i.id === itemKey);

    if (existingIndex > -1) {
      const updated = [...currentItems];
      const existing = updated[existingIndex];
      if (existing) {
        updated[existingIndex] = {
          ...existing,
          quantity: existing.quantity + quantity,
        };
      }
      set({ items: updated });
    } else {
      set({
        items: [
          ...currentItems,
          { id: itemKey, product, size, quantity, customName, customNumber },
        ],
      });
    }
    get().setIsCartOpen(true);
  },

  removeItem: (itemId) => {
    set({ items: get().items.filter((i) => i.id !== itemId) });
  },

  updateQuantity: (itemId, delta) => {
    const updated = get()
      .items.map((item) => {
        if (item.id === itemId) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : null;
        }
        return item;
      })
      .filter(Boolean) as CartItem[];

    set({ items: updated });
  },

  clearCart: () => {
    set({ items: [], appliedPromo: null });
  },

  applyPromo: (code) => {
    const clean = code.trim().toUpperCase();
    if (clean in PROMO_CODES) {
      set({ appliedPromo: clean });
      return true;
    }
    return false;
  },

  removePromo: () => {
    set({ appliedPromo: null });
  },
});
