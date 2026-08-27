"use client";

import React from "react";
import Image from "next/image";
import { Plus, Minus, Trash2 } from "lucide-react";
import { CartItem } from "@/store/useCartStore";

interface CartItemRowProps {
  item: CartItem;
  onUpdateQuantity: (itemId: string, delta: number) => void;
  onRemove: (itemId: string) => void;
}

/**
 * CartItemRow Component
 *
 * Renders an individual line item within the cart drawer.
 * Follows atomic design principles and isolates item-level mutations.
 *
 * @param item - The serialized cart item containing product metadata, selected size, and quantity.
 * @param onUpdateQuantity - Dispatcher to increment or decrement the item quantity.
 * @param onRemove - Dispatcher to delete the line item from the store.
 */
export function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const { id, product, size, customName, customNumber, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="relative p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700/80 transition-colors flex gap-3.5 items-center group">
      {/* Product Image Thumbnail with Next.js Image Optimization */}
      <div className="relative w-16 h-16 rounded-lg bg-slate-950 border border-slate-800 flex-shrink-0 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="64px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Item Metadata */}
      <div className="flex-1 min-w-0">
        <h4 className="text-xs font-bold text-white truncate font-['Rajdhani',sans-serif] tracking-wider uppercase">
          {product.name}
        </h4>

        {/* Size and Customization Badges */}
        <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[10px] text-slate-400 font-mono">
          <span className="px-1.5 py-0.5 rounded bg-slate-800 text-amber-400 font-bold border border-slate-700">
            SIZE: {size}
          </span>
          {customName && (
            <span className="px-1.5 py-0.5 rounded bg-blue-950/80 text-blue-400 border border-blue-800/60">
              #{customNumber || "00"} {customName}
            </span>
          )}
        </div>

        {/* Price and Quantity Stepper */}
        <div className="flex items-center justify-between mt-2.5">
          <span className="text-xs font-bold text-amber-400 font-mono">
            {itemTotal.toLocaleString()} MMK
          </span>

          {/* Accessible Stepper Controls */}
          <div className="flex items-center gap-1.5 bg-slate-950/90 rounded-md border border-slate-800 p-0.5">
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, -1)}
              aria-label={`Decrease quantity for ${product.name}`}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors disabled:opacity-30"
              disabled={quantity <= 1}
            >
              <Minus className="w-3 h-3" />
            </button>
            <span className="text-[11px] font-mono font-bold w-5 text-center text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, 1)}
              aria-label={`Increase quantity for ${product.name}`}
              className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <Plus className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      {/* Remove Line Item Button */}
      <button
        type="button"
        onClick={() => onRemove(id)}
        aria-label={`Remove ${product.name} from cart`}
        className="p-1.5 text-slate-500 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}
