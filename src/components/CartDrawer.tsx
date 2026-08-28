"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { ShoppingBag, X } from "lucide-react";
import {
  useCartStore,
  selectSubtotal,
  selectDiscount,
} from "@/store/useCartStore";
import { CartItemList } from "./cart/CartItemList";
import { CartPromoSection } from "./cart/CartPromoSection";
import { CartSummary } from "./cart/CartSummary";
import { CartCheckoutFlow } from "./cart/CartCheckoutFlow";
import { cyberAudio } from "@/lib/audioSynthesizer";

export default function CartDrawer() {
  const isCartOpen = useCartStore((state) => state.isCartOpen);
  const setIsCartOpen = useCartStore((state) => state.setIsCartOpen);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const clearCart = useCartStore((state) => state.clearCart);
  const appliedPromo = useCartStore((state) => state.appliedPromo);
  const applyPromo = useCartStore((state) => state.applyPromo);
  const removePromo = useCartStore((state) => state.removePromo);

  const subtotal = useCartStore(selectSubtotal);
  const discount = useCartStore(selectDiscount);

  const [city, setCity] = useState<"YGN" | "MDY" | "OTHER">("YGN");
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleOrderSuccess = () => {
    cyberAudio.playSuccess();
    clearCart();
    setIsCheckingOut(false);
    setIsCartOpen(false);
  };

  const handleOpenChange = (open: boolean) => {
    if (open) {
      cyberAudio.playDrawer();
    } else {
      cyberAudio.playClick();
    }
    setIsCartOpen(open);
  };

  return (
    <Dialog.Root open={isCartOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        {/* Accessible Backdrop Overlay */}
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 transition-opacity" />

        {/* Accessible Drawer Content with Focus Trap */}
        <Dialog.Content
          aria-describedby="cart-drawer-description"
          className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-[#050b1e] border-l border-slate-800 text-white shadow-2xl flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right duration-300 font-['Rajdhani',sans-serif]"
        >
          {/* Header Section */}
          <div className="px-5 py-4 border-b border-slate-800 bg-[#030717] flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <div>
                <Dialog.Title className="text-sm font-black uppercase tracking-wider text-white">
                  SHOPPING BAG
                </Dialog.Title>
                <span className="text-[10px] text-slate-400 font-mono block">
                  {items.length} {items.length === 1 ? "ITEM" : "ITEMS"} IN CART
                </span>
              </div>
            </div>

            <Dialog.Close
              aria-label="Close cart drawer"
              className="p-2 rounded text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors focus-visible:ring-2 focus-visible:ring-amber-400 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </Dialog.Close>
          </div>

          <Dialog.Description id="cart-drawer-description" className="sr-only">
            Review your selected Mythic SEAL esports merchandise, apply promo codes, and complete checkout.
          </Dialog.Description>

          {/* Conditional View: Cart Review vs Multi-Step Checkout */}
          {!isCheckingOut ? (
            <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
              {/* Item Collection */}
              <CartItemList
                items={items}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                onClose={() => setIsCartOpen(false)}
              />

              {/* Promo Code & Financial Summary */}
              {items.length > 0 && (
                <>
                  <CartPromoSection
                    appliedPromo={appliedPromo}
                    onApplyPromo={applyPromo}
                    onRemovePromo={removePromo}
                  />
                  <CartSummary
                    subtotal={subtotal}
                    discount={discount}
                    city={city}
                    onCityChange={setCity}
                    onProceedToCheckout={() => setIsCheckingOut(true)}
                  />
                </>
              )}
            </div>
          ) : (
            <CartCheckoutFlow
              items={items}
              subtotal={subtotal}
              discount={discount}
              city={city}
              onBack={() => setIsCheckingOut(false)}
              onOrderSuccess={handleOrderSuccess}
            />
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
