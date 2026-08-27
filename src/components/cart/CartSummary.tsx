"use client";

import React from "react";
import { Truck, ArrowRight, ShieldCheck } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  city: "YGN" | "MDY" | "OTHER";
  onCityChange: (city: "YGN" | "MDY" | "OTHER") => void;
  onProceedToCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 70000;

/**
 * CartSummary Component
 *
 * Renders the order financial breakdown including:
 * - Dynamic free shipping progress tracker
 * - Regional delivery destination selector
 * - Transparent discount and grand total arithmetic
 */
export function CartSummary({
  subtotal,
  discount,
  city,
  onCityChange,
  onProceedToCheckout,
}: CartSummaryProps) {
  // Shipping cost matrix
  const isFreeShipping = subtotal >= FREE_SHIPPING_THRESHOLD;
  const shippingCost = isFreeShipping
    ? 0
    : city === "YGN"
    ? 2500
    : city === "MDY"
    ? 3500
    : 4500;

  const grandTotal = Math.max(0, subtotal - discount + shippingCost);
  const progressToFreeShipping = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100
  );
  const remainingForFreeShipping = Math.max(
    0,
    FREE_SHIPPING_THRESHOLD - subtotal
  );

  return (
    <div className="p-4 bg-[#030717] border-t border-slate-800 space-y-4">
      {/* Free Shipping Progress Meter */}
      <div className="space-y-1.5 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
        <div className="flex items-center justify-between text-[11px] font-mono">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            {isFreeShipping ? (
              <span className="text-green-400 font-bold">
                QUALIFIED FOR FREE SHIPPING!
              </span>
            ) : (
              <span>
                Add{" "}
                <strong className="text-amber-400">
                  {remainingForFreeShipping.toLocaleString()} MMK
                </strong>{" "}
                for Free Delivery
              </span>
            )}
          </span>
          <span className="text-slate-500 font-bold">
            {Math.round(progressToFreeShipping)}%
          </span>
        </div>
        <div className="w-full h-1.5 bg-slate-950 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 to-amber-300 transition-all duration-500 rounded-full"
            style={{ width: `${progressToFreeShipping}%` }}
          />
        </div>
      </div>

      {/* Delivery Region Selector */}
      <div className="space-y-1.5">
        <label className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">
          Delivery Region
        </label>
        <div className="grid grid-cols-3 gap-1.5">
          {(
            [
              { key: "YGN", label: "Yangon", rate: "2,500 Ks" },
              { key: "MDY", label: "Mandalay", rate: "3,500 Ks" },
              { key: "OTHER", label: "Other States", rate: "4,500 Ks" },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => onCityChange(item.key)}
              className={`p-2 rounded-lg border text-center transition-all ${
                city === item.key
                  ? "bg-amber-500/15 border-amber-500 text-amber-400 font-bold"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              <div className="text-[11px] font-bold">{item.label}</div>
              <div className="text-[9px] font-mono text-slate-500">
                {isFreeShipping ? "FREE" : item.rate}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Financial Line Items */}
      <div className="space-y-1.5 text-xs text-slate-400 pt-1 font-mono">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-white font-bold">
            {subtotal.toLocaleString()} MMK
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-amber-400">
            <span>Voucher Discount</span>
            <span>-{discount.toLocaleString()} MMK</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Estimated Shipping</span>
          <span className={shippingCost === 0 ? "text-green-400 font-bold" : "text-white"}>
            {shippingCost === 0 ? "FREE" : `${shippingCost.toLocaleString()} MMK`}
          </span>
        </div>
        <div className="border-t border-slate-800 pt-2 flex justify-between items-baseline text-sm font-sans">
          <span className="font-bold text-white uppercase tracking-wider font-['Rajdhani',sans-serif]">
            Total Amount
          </span>
          <span className="text-base font-black text-amber-400 font-mono">
            {grandTotal.toLocaleString()} MMK
          </span>
        </div>
      </div>

      {/* Primary Checkout Action */}
      <button
        type="button"
        onClick={onProceedToCheckout}
        disabled={subtotal === 0}
        className="w-full btn-scifi-primary py-3 text-sm flex items-center justify-center gap-2 group disabled:opacity-40"
      >
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Security Reassurance */}
      <div className="flex items-center justify-center gap-1.5 text-[10px] text-slate-500 font-mono">
        <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
        <span>100% SECURE DIRECT TEAM MERCHANDISE</span>
      </div>
    </div>
  );
}
