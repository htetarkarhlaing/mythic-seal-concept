"use client";

import {
  useAppStore,
  selectTotalCount,
  selectSubtotal,
  selectDiscount,
  selectFinalTotal,
} from "./useAppStore";
import { CartItem, PROMO_CODES } from "./slices/cartSlice";

export {
  useAppStore as useCartStore,
  selectTotalCount,
  selectSubtotal,
  selectDiscount,
  selectFinalTotal,
  PROMO_CODES,
};

export type { CartItem };
