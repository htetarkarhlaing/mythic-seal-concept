"use client";

import React, { useState } from "react";
import { Tag, CheckCircle2, X } from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";

interface CartPromoSectionProps {
  appliedPromo: string | null;
  onApplyPromo: (code: string) => boolean;
  onRemovePromo: () => void;
}

export function CartPromoSection({
  appliedPromo,
  onApplyPromo,
  onRemovePromo,
}: CartPromoSectionProps) {
  const [promoInput, setPromoInput] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput.trim()) return;

    const success = onApplyPromo(promoInput);
    if (!success) {
      setErrorMessage("Invalid promo code. Try SEAL2026 or KBZPAY10");
      setTimeout(() => setErrorMessage(null), 3000);
    } else {
      cyberAudio.playSuccess();
      setPromoInput("");
      setErrorMessage(null);
    }
  };

  return (
    <div className="px-5 py-3 border-t border-slate-800/80 bg-[#050a1c]/60">
      {appliedPromo ? (
        <div className="flex items-center justify-between p-2.5 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
            <div className="text-xs font-mono">
              <span className="font-bold uppercase tracking-wider">
                {appliedPromo}
              </span>{" "}
              <span>APPLIED</span>
            </div>
          </div>
          <button
            type="button"
            onClick={() => {
              cyberAudio.playClick();
              onRemovePromo();
            }}
            aria-label="Remove promo code"
            className="p-1 text-slate-400 hover:text-white rounded transition-colors"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-1.5">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Tag className="w-3.5 h-3.5 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="PROMO CODE (e.g. SEAL2026)"
                value={promoInput}
                onChange={(e) => setPromoInput(e.target.value.toUpperCase())}
                className="w-full bg-[#081026] border border-slate-800 rounded pl-8 pr-3 py-2 text-xs font-mono uppercase text-white placeholder:text-slate-600 focus:outline-none focus:border-amber-400 transition-colors"
              />
            </div>
            <button
              type="submit"
              disabled={!promoInput.trim()}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 text-amber-400 text-xs font-bold uppercase tracking-wider rounded transition-colors cursor-pointer"
            >
              APPLY
            </button>
          </div>
          {errorMessage && (
            <p className="text-[11px] text-red-400 pl-1 font-mono">
              {errorMessage}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
