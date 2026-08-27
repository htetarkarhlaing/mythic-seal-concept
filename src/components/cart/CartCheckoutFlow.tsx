"use client";

import React, { useReducer, useState } from "react";
import {
  ArrowLeft,
  Copy,
  Check,
  ShieldCheck,
  Sparkles,
  AlertCircle,
} from "lucide-react";
import confetti from "canvas-confetti";
import { CartItem } from "@/store/useCartStore";
import {
  checkoutReducer,
  initialCheckoutState,
  PaymentMethod,
} from "@/machines/checkoutMachine";

interface CartCheckoutFlowProps {
  items: CartItem[];
  subtotal: number;
  discount: number;
  city: "YGN" | "MDY" | "OTHER";
  onBack: () => void;
  onOrderSuccess: () => void;
}

/**
 * CartCheckoutFlow Component
 *
 * Implements a strict, deterministic multi-step checkout workflow driven by a Finite State Machine (FSM).
 * State transitions: CONTACT_FORM -> PAYMENT_SELECTION -> ORDER_PLACED
 */
export function CartCheckoutFlow({
  items,
  subtotal,
  discount,
  city,
  onBack,
  onOrderSuccess,
}: CartCheckoutFlowProps) {
  const [state, dispatch] = useReducer(checkoutReducer, initialCheckoutState);
  const [copied, setCopied] = useState(false);

  const shippingCost =
    subtotal >= 70000 ? 0 : city === "YGN" ? 2500 : city === "MDY" ? 3500 : 4500;
  const grandTotal = Math.max(0, subtotal - discount + shippingCost);

  const handleCopyNumber = (num: string) => {
    navigator.clipboard.writeText(num);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "SUBMIT_CONTACT",
      data: state.contact,
    });
  };

  const handleFinalOrderSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `MS-${Math.floor(100000 + Math.random() * 900000)}`;

    dispatch({ type: "SUBMIT_ORDER", orderId });

    // Trigger celebratory confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });

    dispatch({ type: "ORDER_SUCCESS" });
  };

  // State: ORDER_PLACED (Celebration Screen)
  if (state.step === "ORDER_PLACED" && state.orderId) {
    return (
      <div className="flex-1 p-6 flex flex-col items-center justify-center text-center space-y-5 bg-[#050b1d]">
        <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="space-y-1.5">
          <span className="text-[11px] font-mono text-amber-400 tracking-widest uppercase font-bold">
            ORDER CONFIRMED #{state.orderId}
          </span>
          <h3 className="text-xl font-bold font-['Rajdhani',sans-serif] text-white uppercase">
            THANK YOU FOR YOUR SUPPORT!
          </h3>
          <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
            Our team will contact{" "}
            <strong className="text-white">{state.contact.phone}</strong> via
            SMS / Call to confirm dispatch within 24 hours.
          </p>
        </div>

        <div className="w-full bg-slate-900/90 rounded-xl p-4 border border-slate-800 text-left text-xs font-mono space-y-2">
          <div className="flex justify-between text-slate-400">
            <span>Recipient:</span>
            <span className="text-white font-bold">{state.contact.fullName}</span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Payment:</span>
            <span className="text-amber-400 font-bold">
              {state.paymentMethod}
            </span>
          </div>
          <div className="flex justify-between text-slate-400">
            <span>Total Paid:</span>
            <span className="text-white font-bold">
              {grandTotal.toLocaleString()} MMK
            </span>
          </div>
        </div>

        <button
          type="button"
          onClick={onOrderSuccess}
          className="w-full btn-scifi-primary py-3 text-xs"
        >
          RETURN TO OFFICIAL STORE
        </button>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col overflow-y-auto">
      {/* Checkout Subheader */}
      <div className="p-4 border-b border-slate-800 flex items-center gap-3 bg-slate-950/60">
        <button
          type="button"
          onClick={() => {
            if (state.step === "PAYMENT_SELECTION") {
              dispatch({ type: "BACK_TO_CONTACT" });
            } else {
              onBack();
            }
          }}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          aria-label="Return to previous step"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <div>
          <h3 className="text-xs font-bold uppercase tracking-wider text-white font-['Rajdhani',sans-serif]">
            {state.step === "PAYMENT_SELECTION"
              ? "STEP 2: PAYMENT METHOD"
              : "STEP 1: SHIPPING & CONTACT"}
          </h3>
          <p className="text-[10px] text-slate-500 font-mono">
            {items.length} item(s) • Total: {grandTotal.toLocaleString()} MMK
          </p>
        </div>
      </div>

      {state.errorMessage && (
        <div className="m-4 p-3 rounded-lg bg-red-500/10 border border-red-500/30 flex items-center gap-2 text-xs text-red-400 font-sans">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{state.errorMessage}</span>
        </div>
      )}

      {state.step === "CONTACT_FORM" && (
        <form onSubmit={handleContactSubmit} className="p-4 space-y-4 flex-1">
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-amber-400 font-mono tracking-wider uppercase">
              1. CONTACT & SHIPPING DETAILS
            </h4>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 mb-1">
                FULL NAME *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Min Thant"
                value={state.contact.fullName}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACT",
                    data: { fullName: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 mb-1">
                PHONE NUMBER (KBZPAY / VIBER) *
              </label>
              <input
                type="tel"
                required
                placeholder="09..."
                value={state.contact.phone}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACT",
                    data: { phone: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[10px] font-mono text-slate-400 mb-1">
                DETAILED STREET ADDRESS / TOWNSHIP *
              </label>
              <textarea
                required
                rows={2}
                placeholder="Street name, Ward, Township..."
                value={state.contact.address}
                onChange={(e) =>
                  dispatch({
                    type: "UPDATE_CONTACT",
                    data: { address: e.target.value },
                  })
                }
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-3 py-2 text-xs text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full btn-scifi-primary py-3 text-sm flex items-center justify-center gap-2"
            >
              <span>CONTINUE TO PAYMENT</span>
            </button>
          </div>
        </form>
      )}

      {state.step === "PAYMENT_SELECTION" && (
        <form onSubmit={handleFinalOrderSubmit} className="p-4 space-y-4 flex-1">
          <div className="space-y-3">
            <h4 className="text-[11px] font-bold text-amber-400 font-mono tracking-wider uppercase">
              2. CHOOSE PAYMENT METHOD
            </h4>

            <div className="grid grid-cols-2 gap-2">
              {(
                [
                  { id: "KBZPAY" as const, name: "KBZPay", badge: "Instant" },
                  { id: "WAVEPAY" as const, name: "WavePay", badge: "Instant" },
                  { id: "AYAPAY" as const, name: "AYA Pay", badge: "Instant" },
                  { id: "COD" as const, name: "Cash on Delivery", badge: "Yangon Only" },
                ] as const
              ).map((method) => (
                <button
                  key={method.id}
                  type="button"
                  onClick={() =>
                    dispatch({
                      type: "SELECT_PAYMENT",
                      method: method.id as PaymentMethod,
                    })
                  }
                  className={`p-2.5 rounded-lg border text-left transition-all ${
                    state.paymentMethod === method.id
                      ? "bg-amber-500/15 border-amber-500 text-amber-400 font-bold"
                      : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
                  }`}
                >
                  <div className="text-xs">{method.name}</div>
                  <div className="text-[9px] font-mono text-slate-500">
                    {method.badge}
                  </div>
                </button>
              ))}
            </div>

            {state.paymentMethod !== "COD" && (
              <div className="p-3 bg-slate-900/90 rounded-lg border border-slate-800 space-y-2 text-xs font-mono">
                <div className="text-[11px] text-slate-300">
                  Transfer{" "}
                  <strong className="text-amber-400">
                    {grandTotal.toLocaleString()} MMK
                  </strong>{" "}
                  to:
                </div>
                <div className="flex items-center justify-between bg-slate-950 p-2 rounded border border-slate-800">
                  <span className="text-white font-bold">
                    09-968-888-299 (Mythic SEAL)
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopyNumber("09968888299")}
                    className="p-1 text-slate-400 hover:text-amber-400 transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copied ? (
                      <Check className="w-3.5 h-3.5 text-green-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full btn-scifi-primary py-3 text-sm flex items-center justify-center gap-2"
            >
              <ShieldCheck className="w-4 h-4" />
              <span>CONFIRM ORDER ({grandTotal.toLocaleString()} MMK)</span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
