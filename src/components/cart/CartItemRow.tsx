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

export function CartItemRow({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemRowProps) {
  const { id, product, size, customName, customNumber, quantity } = item;
  const itemTotal = product.price * quantity;

  return (
    <div className="p-4 rounded-lg bg-[#070d22]/90 border border-slate-800/90 hover:border-slate-700 transition-all flex gap-4 items-start group">
      {/* Product Image Thumbnail */}
      <div className="relative w-20 h-20 rounded-md bg-slate-950 border border-slate-800 flex-shrink-0 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="80px"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Item Info */}
      <div className="flex-1 min-w-0 flex flex-col justify-between h-20">
        <div>
          <div className="flex items-start justify-between gap-2">
            <h4 className="text-xs sm:text-sm font-bold text-white truncate uppercase tracking-tight">
              {product.name}
            </h4>
            <button
              type="button"
              onClick={() => onRemove(id)}
              aria-label={`Remove ${product.name} from cart`}
              className="text-slate-500 hover:text-red-400 p-0.5 rounded transition-colors"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Size and Customizer Tags */}
          <div className="flex flex-wrap items-center gap-1.5 mt-1 text-[10px]">
            <span className="px-2 py-0.5 rounded bg-slate-900 text-slate-300 font-semibold border border-slate-800 font-mono">
              SIZE: {size}
            </span>
            {customName && (
              <span className="px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-mono font-bold border border-amber-500/30">
                #{customNumber || "00"} {customName}
              </span>
            )}
          </div>
        </div>

        {/* Price & Quantity Stepper */}
        <div className="flex items-center justify-between mt-auto">
          <span className="text-xs sm:text-sm font-black text-amber-400 font-mono">
            {itemTotal.toLocaleString()} MMK
          </span>

          {/* Minimalist Pill Stepper */}
          <div className="flex items-center bg-black/60 rounded border border-slate-800">
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, -1)}
              aria-label={`Decrease quantity for ${product.name}`}
              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors disabled:opacity-30 cursor-pointer"
              disabled={quantity <= 1}
            >
              <Minus className="w-2.5 h-2.5" />
            </button>
            <span className="text-xs font-mono font-bold w-6 text-center text-white">
              {quantity}
            </span>
            <button
              type="button"
              onClick={() => onUpdateQuantity(id, 1)}
              aria-label={`Increase quantity for ${product.name}`}
              className="w-6 h-6 flex items-center justify-center text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <Plus className="w-2.5 h-2.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
