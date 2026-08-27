"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Trophy, Swords, Calendar } from "lucide-react";
import { TOURNAMENT_MATCHES } from "@/data/matches";

interface MatchCenterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MatchCenterModal({
  isOpen,
  onClose,
}: MatchCenterModalProps) {
  const [filter, setFilter] = useState<"ALL" | "UPCOMING" | "RESULTS">("ALL");

  const filteredMatches = TOURNAMENT_MATCHES.filter((m) => {
    if (filter === "UPCOMING") return m.status === "UPCOMING" || m.status === "LIVE";
    if (filter === "RESULTS") return m.status === "COMPLETED";
    return true;
  });

  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-[94vw] max-w-4xl translate-x-[-50%] translate-y-[-50%] bg-[#060c22] border-2 border-amber-500/60 rounded-xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.3)] max-h-[90vh] flex flex-col focus:outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 font-['Rajdhani',sans-serif]">
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-amber-500/30 bg-[#040817]">
            <div className="flex items-center gap-3">
              <Trophy className="w-5 h-5 text-amber-400" />
              <Dialog.Title className="text-sm sm:text-base font-black text-white uppercase tracking-wider">
                MATCH CENTER & TOURNAMENT SCHEDULE
              </Dialog.Title>
            </div>

            <Dialog.Close
              aria-label="Close dialog"
              className="p-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-400 hover:text-white hover:border-amber-400 transition-colors"
            >
              <X className="w-5 h-5" />
            </Dialog.Close>
          </div>

          <Dialog.Description className="sr-only">
            Full tournament match schedule, live broadcasts, and past match results for Mythic SEAL.
          </Dialog.Description>

          {/* Filter Buttons */}
          <div className="px-6 py-3 bg-[#050b1d] border-b border-slate-800 flex items-center gap-2">
            {(["ALL", "UPCOMING", "RESULTS"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-4 py-1.5 rounded text-xs font-bold uppercase tracking-wider transition-colors ${
                  filter === tab
                    ? "bg-amber-500 text-black shadow"
                    : "bg-slate-900 text-slate-400 hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Match List */}
          <div className="p-6 overflow-y-auto space-y-4 max-h-[60vh]">
            {filteredMatches.map((match) => (
              <div
                key={match.id}
                className="p-4 sm:p-5 rounded-lg bg-[#040818] border border-slate-800 hover:border-amber-500/50 transition-colors flex flex-col md:flex-row items-center justify-between gap-4"
              >
                <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/40 bg-black">
                      <Image
                        src={match.teamA.logo}
                        alt={match.teamA.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-black text-sm text-white">
                      {match.teamA.name}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 font-mono text-xs text-amber-400 font-bold px-3 py-1 bg-black/50 rounded border border-amber-500/20">
                    <Swords className="w-3.5 h-3.5" />
                    <span>
                      {match.status === "COMPLETED"
                        ? `${match.teamA.score ?? 0} - ${match.teamB.score ?? 0}`
                        : "VS"}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-black">
                      <Image
                        src={match.teamB.logo}
                        alt={match.teamB.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-black text-sm text-white">
                      {match.teamB.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 text-xs text-slate-400 flex-wrap justify-center">
                  <div className="flex items-center gap-1.5 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>{match.date}</span>
                  </div>

                  <span
                    className={`px-2.5 py-0.5 rounded text-[10px] font-bold uppercase ${
                      match.status === "LIVE"
                        ? "bg-red-500/20 text-red-400 border border-red-500/40 animate-pulse"
                        : match.status === "UPCOMING"
                        ? "bg-amber-500/20 text-amber-400 border border-amber-500/40"
                        : "bg-slate-800 text-slate-400"
                    }`}
                  >
                    {match.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
