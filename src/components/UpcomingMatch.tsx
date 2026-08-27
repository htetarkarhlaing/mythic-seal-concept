"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Radio } from "lucide-react";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

export default function UpcomingMatch() {
  const { days, hours, minutes, seconds } = useCountdownTimer(
    "2026-05-24T16:00:00+06:30"
  );

  return (
    <section id="matches" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Match Section Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#FFC107] rotate-45 shadow-[0_0_8px_#FFC107]" />
          <h2 className="font-['Rajdhani',sans-serif] text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
            UPCOMING <span className="text-[#FFC107]">MATCH</span>
          </h2>
        </div>

        <Link
          href="/matches"
          className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#FFC107] transition-colors uppercase"
        >
          FULL SCHEDULE ➔
        </Link>
      </div>

      {/* Match Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-4 bg-[#050b1d] border border-slate-800/90 rounded-sm p-6 shadow-xl">
        {/* Teams Matchup (Left 7 Columns) */}
        <div className="lg:col-span-7 flex items-center justify-around sm:justify-center sm:gap-12 lg:gap-16">
          {/* Mythic SEAL */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-500/80 p-0.5 shadow-[0_0_25px_rgba(255,193,7,0.35)] bg-black">
              <Image
                src="/images/logo.png"
                alt="Mythic SEAL"
                fill
                className="object-cover rounded-full"
              />
            </div>
            <span className="font-['Rajdhani',sans-serif] text-sm sm:text-base font-bold tracking-wider text-white uppercase text-center">
              MYTHIC SEAL
            </span>
          </div>

          {/* Glowing Cyan VS & Drift-Free Live Countdown */}
          <div className="flex flex-col items-center px-2 space-y-2">
            <span className="font-['Rajdhani',sans-serif] text-2xl sm:text-4xl font-black text-[#00f0ff] tracking-wider drop-shadow-[0_0_15px_rgba(0,240,255,0.9)]">
              VS
            </span>

            {/* Live Web Worker HUD Countdown */}
            <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-amber-400 bg-black/60 px-3 py-1 rounded border border-amber-500/30">
              <span>{String(days).padStart(2, "0")}d</span>
              <span>:</span>
              <span>{String(hours).padStart(2, "0")}h</span>
              <span>:</span>
              <span>{String(minutes).padStart(2, "0")}m</span>
              <span>:</span>
              <span className="text-cyan-400">{String(seconds).padStart(2, "0")}s</span>
            </div>
          </div>

          {/* TEAM MAX */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center bg-[#081028] rounded-full border-2 border-slate-700/80 p-2 shadow-[0_0_20px_rgba(0,0,0,0.6)]">
              <div className="relative w-14 h-14 sm:w-18 sm:h-18">
                <Image
                  src="/images/team-max-logo.png"
                  alt="TEAM MAX"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <span className="font-['Rajdhani',sans-serif] text-sm sm:text-base font-bold tracking-wider text-white uppercase text-center">
              TEAM MAX
            </span>
          </div>
        </div>

        {/* Match Info (Right 5 Columns) */}
        <div className="lg:col-span-5 flex flex-col justify-center space-y-3.5 pt-6 border-t border-slate-800 lg:border-t-0 lg:border-l lg:pl-10 lg:pt-0">
          <div className="flex items-center gap-2">
            <Radio className="w-3.5 h-3.5 text-red-400 animate-pulse" />
            <span className="text-[11px] font-bold text-cyan-400 uppercase tracking-widest">
              UPPER BRACKET FINALS • BO3
            </span>
          </div>

          <h3 className="font-['Rajdhani',sans-serif] text-base sm:text-lg font-bold text-[#FFC107] uppercase tracking-wide leading-tight">
            GEG 2026 MYANMAR QUALIFIER
          </h3>

          <div className="space-y-1.5 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-medium">MAY 24, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span className="font-medium">4:00 PM (MMT)</span>
            </div>
          </div>

          {/* Live On Channels */}
          <div className="flex items-center gap-2.5 text-xs pt-1">
            <span className="text-slate-400 font-bold tracking-wider uppercase text-[11px]">
              LIVE ON:
            </span>
            <div className="flex items-center gap-2">
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600 hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
              >
                ▶ YouTube
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2.5 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
              >
                f Facebook
              </a>
            </div>
          </div>

          {/* Sci-Fi VIEW MATCHES Button */}
          <div className="pt-2">
            <Link
              href="/matches"
              className="btn-scifi-primary w-full sm:w-auto text-center"
            >
              VIEW MATCHES
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
