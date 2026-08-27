"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { CartSlice, createCartSlice, PROMO_CODES } from "./slices/cartSlice";
import { UiSlice, createUiSlice } from "./slices/uiSlice";

export type AppStoreState = CartSlice & UiSlice;

export const useAppStore = create<AppStoreState>()(
  persist(
    (...a) => ({
      ...createCartSlice(...a),
      ...createUiSlice(...a),
    }),
    {
      name: "mythic_seal_app_store",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
        appliedPromo: state.appliedPromo,
      }),
    }
  )
);

// High-performance memoized selectors
export const selectTotalCount = (state: AppStoreState) =>
  state.items.reduce((sum, item) => sum + item.quantity, 0);

export const selectSubtotal = (state: AppStoreState) =>
  state.items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

export const selectDiscount = (state: AppStoreState) => {
  const subtotal = selectSubtotal(state);
  const rate = state.appliedPromo ? PROMO_CODES[state.appliedPromo] ?? 0 : 0;
  return Math.round(subtotal * rate);
};

export const selectFinalTotal = (state: AppStoreState) => {
  const subtotal = selectSubtotal(state);
  const discount = selectDiscount(state);
  return Math.max(0, subtotal - discount);
};
