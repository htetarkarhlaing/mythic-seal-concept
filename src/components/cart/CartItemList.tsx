"use client";

import React from "react";
import { ShoppingBag } from "lucide-react";
import { CartItem } from "@/store/useCartStore";
import { CartItemRow } from "./CartItemRow";

interface CartItemListProps {
  items: CartItem[];
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemove: (itemId: string) => void;
  onClose: () => void;
}

/**
 * CartItemList Component
 *
 * Handles rendering the collection of cart items or a high-converting empty state.
 * Implements accessible list markup (`role="list"`) for screen readers.
 */
export function CartItemList({
  items,
  onUpdateQuantity,
  onRemove,
  onClose,
}: CartItemListProps) {
  if (items.length === 0) {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-16 px-4">
        <div className="w-16 h-16 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <div className="space-y-1">
          <p className="font-['Rajdhani',sans-serif] text-base font-bold text-white uppercase tracking-wider">
            YOUR CART IS EMPTY
          </p>
          <p className="text-xs text-slate-400 max-w-xs">
            Grab official Mythic SEAL jerseys, flags, sleeves, and supporter gear.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="btn-scifi-secondary text-xs px-5 py-2 mt-2"
        >
          EXPLORE MERCH
        </button>
      </div>
    );
  }

  return (
    <div
      role="list"
      aria-label="Shopping Cart Items"
      className="flex-1 overflow-y-auto p-4 space-y-3"
    >
      {items.map((item) => (
        <CartItemRow
          key={item.id}
          item={item}
          onUpdateQuantity={onUpdateQuantity}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
}
