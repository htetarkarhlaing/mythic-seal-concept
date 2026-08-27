"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Player } from "@/data/roster";
import { X, Calendar, Shield, Quote, ShoppingBag, ArrowRight } from "lucide-react";

interface PlayerModalProps {
  player: Player | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function PlayerModal({
  player,
  isOpen,
  onClose,
}: PlayerModalProps) {
  if (!player) return null;

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-2xl translate-x-[-50%] translate-y-[-50%] bg-[#060c22] border-2 border-amber-500/80 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(255,193,7,0.35)] max-h-[90vh] flex flex-col font-['Rajdhani',sans-serif] focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/30 bg-[#040817]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 bg-[#FFC107] rotate-45 shadow-[0_0_8px_#FFC107]" />
              <Dialog.Title className="text-xs font-bold text-[#FFC107] uppercase tracking-wider">
                ATHLETE PROFILE • {player.role}
              </Dialog.Title>
            </div>

            <Dialog.Close
              aria-label="Close modal"
              className="p-1 rounded bg-slate-900 border border-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Detailed competitive statistics and biography for athlete {player.name}.
          </Dialog.Description>

          {/* Body */}
          <div className="p-6 md:p-8 overflow-y-auto space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              {/* Player Image */}
              <div className="md:col-span-5 relative aspect-[3/4] rounded-sm overflow-hidden border border-amber-500/60 bg-black shadow-lg">
                <Image
                  src={player.image}
                  alt={player.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black via-black/70 to-transparent">
                  <span className="text-xs text-cyan-400 font-bold uppercase">
                    {player.role}
                  </span>
                  <span className="text-xl font-black text-white font-mono block">
                    #{player.number} {player.ign}
                  </span>
                </div>
              </div>

              {/* Player Details */}
              <div className="md:col-span-7 space-y-4">
                <div>
                  <h3 className="text-3xl font-black text-white tracking-tight uppercase">
                    {player.name}
                  </h3>
                  <p className="text-sm font-medium text-amber-400">
                    {player.realName}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-sm">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FFC107]" />
                      <span>JOINED</span>
                    </div>
                    <span className="text-xs font-bold text-white font-mono">
                      {player.joinDate}
                    </span>
                  </div>

                  <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-sm">
                    <div className="flex items-center gap-1.5 text-slate-400 text-xs mb-1">
                      <Shield className="w-3.5 h-3.5 text-cyan-400" />
                      <span>MATCHES</span>
                    </div>
                    <span className="text-xs font-bold text-white font-mono">
                      {player.totalMatches} PRO BATTLES
                    </span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-medium">
                  {player.bio}
                </p>
              </div>
            </div>

            {/* Quote */}
            <div className="p-4 bg-amber-500/10 border-l-4 border-amber-400 rounded-r-sm flex items-start gap-3">
              <Quote className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-200 italic font-medium leading-relaxed">
                &ldquo;{player.quote}&rdquo;
              </p>
            </div>

            {/* Footer Buttons */}
            <div className="flex items-center justify-between gap-4 pt-2 border-t border-slate-800 flex-wrap sm:flex-nowrap">
              <Link
                href="/shop"
                onClick={onClose}
                className="w-full sm:w-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-white rounded-sm border border-slate-700 text-xs font-bold uppercase transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-3.5 h-3.5 text-[#FFC107]" />
                <span>BUY PLAYER JERSEY</span>
              </Link>

              <Link
                href={`/roster/${player.id}`}
                onClick={onClose}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-black font-black text-xs uppercase tracking-wider rounded-sm transition-all shadow-[0_0_20px_rgba(245,158,11,0.4)] flex items-center justify-center gap-2"
              >
                <span>VIEW FULL BIOGRAPHY</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
