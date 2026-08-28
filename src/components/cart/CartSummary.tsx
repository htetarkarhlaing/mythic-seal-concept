"use client";

import React from "react";
import { Truck, ArrowRight, ShieldCheck, CreditCard } from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";

interface CartSummaryProps {
  subtotal: number;
  discount: number;
  city: "YGN" | "MDY" | "OTHER";
  onCityChange: (city: "YGN" | "MDY" | "OTHER") => void;
  onProceedToCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 70000;

export function CartSummary({
  subtotal,
  discount,
  city,
  onCityChange,
  onProceedToCheckout,
}: CartSummaryProps) {
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
    <div className="p-5 bg-[#040817] border-t border-slate-800 space-y-4">
      
      {/* Refined Free Shipping Progress Bar */}
      <div className="space-y-1.5 p-3 rounded-lg bg-[#070e24] border border-slate-800/80">
        <div className="flex items-center justify-between text-xs">
          <div className="flex items-center gap-1.5 text-slate-300">
            <Truck className="w-3.5 h-3.5 text-amber-400" />
            {isFreeShipping ? (
              <span className="text-emerald-400 font-bold">
                QUALIFIED FOR FREE SHIPPING!
              </span>
            ) : (
              <span>
                Add <strong className="text-amber-400 font-mono">{remainingForFreeShipping.toLocaleString()} MMK</strong> for Free Shipping
              </span>
            )}
          </div>
          <span className="text-[11px] font-mono font-bold text-slate-400">
            {Math.round(progressToFreeShipping)}%
          </span>
        </div>

        <div className="w-full h-1.5 bg-black/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-amber-500 via-amber-400 to-[#FFC107] transition-all duration-500 rounded-full shadow-[0_0_8px_rgba(255,193,7,0.5)]"
            style={{ width: `${progressToFreeShipping}%` }}
          />
        </div>
      </div>

      {/* Sleek Segmented Control for Delivery Destination */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-[11px] text-slate-400">
          <span className="uppercase font-bold tracking-wider">Destination</span>
          <span className="font-mono text-slate-300">
            {isFreeShipping ? "FREE" : city === "YGN" ? "2,500 Ks" : city === "MDY" ? "3,500 Ks" : "4,500 Ks"}
          </span>
        </div>

        <div className="grid grid-cols-3 p-1 bg-black/60 rounded-lg border border-slate-800 gap-1">
          {(
            [
              { key: "YGN", label: "Yangon" },
              { key: "MDY", label: "Mandalay" },
              { key: "OTHER", label: "Other States" },
            ] as const
          ).map((item) => (
            <button
              key={item.key}
              type="button"
              onClick={() => {
                cyberAudio.playClick();
                onCityChange(item.key);
              }}
              className={`py-1.5 text-xs font-bold rounded transition-all cursor-pointer ${
                city === item.key
                  ? "bg-[#FFC107] text-black shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>

      {/* Financial Breakdown */}
      <div className="space-y-1.5 text-xs text-slate-400 pt-1 font-mono">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span className="text-white font-bold">
            {subtotal.toLocaleString()} MMK
          </span>
        </div>
        {discount > 0 && (
          <div className="flex justify-between text-amber-400 font-bold">
            <span>Promo Discount</span>
            <span>-{discount.toLocaleString()} MMK</span>
          </div>
        )}
        <div className="flex justify-between">
          <span>Shipping</span>
          <span className={shippingCost === 0 ? "text-emerald-400 font-bold" : "text-white"}>
            {shippingCost === 0 ? "FREE" : `${shippingCost.toLocaleString()} MMK`}
          </span>
        </div>

        <div className="border-t border-slate-800 pt-2.5 flex justify-between items-baseline">
          <span className="text-sm font-bold text-white uppercase tracking-wider font-['Rajdhani',sans-serif]">
            Total Amount
          </span>
          <span className="text-lg font-black text-[#FFC107] font-mono">
            {grandTotal.toLocaleString()} MMK
          </span>
        </div>
      </div>

      {/* Primary Checkout Button */}
      <button
        type="button"
        onClick={() => {
          cyberAudio.playClick();
          onProceedToCheckout();
        }}
        disabled={subtotal === 0}
        className="w-full btn-scifi-primary !py-3.5 text-sm flex items-center justify-center gap-2 group disabled:opacity-40"
      >
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </button>

      {/* Trust & Payment Channels Bar */}
      <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 font-mono pt-1">
        <div className="flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>256-Bit SSL</span>
        </div>
        <span>•</span>
        <div className="flex items-center gap-1">
          <CreditCard className="w-3.5 h-3.5 text-amber-400" />
          <span>KBZPay / WavePay / Cards</span>
        </div>
      </div>

    </div>
  );
}
