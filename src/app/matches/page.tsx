"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Calendar,
  Clock,
  Play,
  Trophy,
  Flame,
  Tv,
} from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";
import { useCountdownTimer } from "@/hooks/useCountdownTimer";

interface Match {
  id: string;
  opponent: string;
  opponentLogo: string;
  event: string;
  stage: string;
  date: string;
  time: string;
  format: string;
  status: "UPCOMING" | "LIVE" | "COMPLETED";
  score?: string;
  vodUrl?: string;
  mvp?: string;
  mvpHero?: string;
}

const MATCHES_DATA: Match[] = [
  {
    id: "match-1",
    opponent: "TEAM MAX",
    opponentLogo: "/images/team-max-logo.png",
    event: "GEG 2026 MYANMAR QUALIFIER",
    stage: "Upper Bracket Grand Final",
    date: "MAY 24, 2026",
    time: "4:00 PM (MMT)",
    format: "Best of 5 (BO5)",
    status: "UPCOMING",
  },
  {
    id: "match-2",
    opponent: "AI ESPORTS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 PLAYOFFS",
    stage: "Semi Finals",
    date: "MAY 18, 2026",
    time: "2:00 PM (MMT)",
    format: "Best of 5 (BO5)",
    status: "COMPLETED",
    score: "3 - 1",
    vodUrl: "https://youtube.com",
    mvp: "JUSTIN",
    mvpHero: "Ling (12/1/8 KDA)",
  },
  {
    id: "match-3",
    opponent: "FALCON ESPORTS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 REGULAR SEASON",
    stage: "Week 6 Day 2",
    date: "MAY 12, 2026",
    time: "6:00 PM (MMT)",
    format: "Best of 3 (BO3)",
    status: "COMPLETED",
    score: "2 - 0",
    vodUrl: "https://youtube.com",
    mvp: "GALAXY",
    mvpHero: "Paquito (8/0/9 KDA)",
  },
  {
    id: "match-4",
    opponent: "BURMESE GHOULS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 REGULAR SEASON",
    stage: "Week 5 Day 1",
    date: "MAY 05, 2026",
    time: "4:00 PM (MMT)",
    format: "Best of 3 (BO3)",
    status: "COMPLETED",
    score: "2 - 1",
    vodUrl: "https://youtube.com",
    mvp: "ZIPPY",
    mvpHero: "Claude (14/2/6 KDA)",
  },
  {
    id: "match-5",
    opponent: "SEE YOU SOON",
    opponentLogo: "/images/team-max-logo.png",
    event: "MPL INVITATIONAL SHOWDOWN",
    stage: "Group Stage",
    date: "APR 28, 2026",
    time: "7:30 PM (MMT)",
    format: "Best of 3 (BO3)",
    status: "COMPLETED",
    score: "2 - 0",
    vodUrl: "https://youtube.com",
    mvp: "KENN",
    mvpHero: "Faramis (4/1/15 KDA)",
  },
];

const STANDINGS = [
  { rank: 1, team: "MYTHIC SEAL", logo: "/images/logo.png", mp: 12, w: 11, l: 1, streak: "W6", pts: 32, status: "UPPER BRACKET SEED #1" },
  { rank: 2, team: "TEAM MAX", logo: "/images/team-max-logo.png", mp: 12, w: 10, l: 2, streak: "W3", pts: 29, status: "UPPER BRACKET SEED #2" },
  { rank: 3, team: "AI ESPORTS", logo: "/images/team-max-logo.png", mp: 12, w: 8, l: 4, streak: "L1", pts: 24, status: "LOWER BRACKET" },
  { rank: 4, team: "FALCON ESPORTS", logo: "/images/team-max-logo.png", mp: 12, w: 7, l: 5, streak: "W1", pts: 21, status: "LOWER BRACKET" },
  { rank: 5, team: "BURMESE GHOULS", logo: "/images/team-max-logo.png", mp: 12, w: 5, l: 7, streak: "L2", pts: 16, status: "ELIMINATED" },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<"ALL" | "UPCOMING" | "RESULTS" | "STANDINGS">("ALL");
  const { days, hours, minutes, seconds } = useCountdownTimer("2026-05-24T16:00:00+06:30");

  const filteredMatches =
    activeTab === "ALL"
      ? MATCHES_DATA
      : activeTab === "UPCOMING"
      ? MATCHES_DATA.filter((m) => m.status === "UPCOMING")
      : activeTab === "RESULTS"
      ? MATCHES_DATA.filter((m) => m.status === "COMPLETED")
      : [];

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Navigation Breadcrumb */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 pb-4 border-b border-slate-800">
            <Link href="/" className="hover:text-[#FFC107] transition-colors font-medium">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FFC107] font-bold uppercase">MATCH CENTER & TOURNAMENT SCHEDULE</span>
          </div>
        </div>

        {/* 1. Premier Featured Match Showcase (Hero Duel Banner) */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <div className="p-6 sm:p-10 rounded-lg bg-gradient-to-b from-[#09153c] via-[#050b1e] to-[#040716] border-2 border-amber-500/80 shadow-[0_0_50px_rgba(255,193,7,0.2)] relative overflow-hidden">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              
              {/* Match Header Info */}
              <div className="space-y-3 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-amber-500/10 border border-amber-500/40 text-[#FFC107] text-xs font-mono font-bold uppercase">
                  <Flame className="w-3.5 h-3.5" />
                  <span>NEXT CHAMPIONSHIP CLASH</span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black uppercase text-white leading-tight">
                  MATCH <span className="text-[#FFC107]">CENTER</span> • GEG 2026 FINALS
                </h1>

                <p className="text-xs sm:text-sm text-slate-300 max-w-md font-medium">
                  Mythic SEAL battles Team MAX for the #1 Myanmar seed and national championship trophy.
                </p>

                {/* Countdown Timer HUD */}
                <div className="pt-2 flex items-center justify-center lg:justify-start gap-2">
                  <div className="p-2.5 rounded bg-black/60 border border-amber-500/30 text-center min-w-[54px]">
                    <span className="text-lg font-black text-[#FFC107] font-mono block leading-none">
                      {String(days).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">DAYS</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-amber-500/30 text-center min-w-[54px]">
                    <span className="text-lg font-black text-[#FFC107] font-mono block leading-none">
                      {String(hours).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">HOURS</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-amber-500/30 text-center min-w-[54px]">
                    <span className="text-lg font-black text-[#FFC107] font-mono block leading-none">
                      {String(minutes).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">MINS</span>
                  </div>
                  <div className="p-2.5 rounded bg-black/60 border border-amber-500/30 text-center min-w-[54px]">
                    <span className="text-lg font-black text-cyan-400 font-mono block leading-none">
                      {String(seconds).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] text-slate-400 font-bold uppercase">SECS</span>
                  </div>
                </div>
              </div>

              {/* Center Matchup Logos */}
              <div className="flex items-center gap-6 sm:gap-10">
                {/* Team 1 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-amber-500 bg-black shadow-[0_0_25px_rgba(255,193,7,0.4)]">
                    <Image src="/images/logo.png" alt="Mythic SEAL" fill className="object-cover" />
                  </div>
                  <span className="text-sm font-black text-white uppercase tracking-wider">
                    MYTHIC SEAL
                  </span>
                </div>

                <div className="text-center">
                  <span className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono tracking-wider drop-shadow-[0_0_12px_rgba(0,240,255,0.8)]">
                    VS
                  </span>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block mt-1">
                    BEST OF 5
                  </span>
                </div>

                {/* Team 2 */}
                <div className="flex flex-col items-center space-y-2">
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-slate-700 bg-[#081026] p-2 shadow-lg">
                    <Image src="/images/team-max-logo.png" alt="Team MAX" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-black text-white uppercase tracking-wider">
                    TEAM MAX
                  </span>
                </div>
              </div>

              {/* Match Details & Broadcast Channels */}
              <div className="p-5 rounded-lg bg-black/50 border border-slate-800 space-y-3 min-w-[220px] text-center lg:text-left">
                <div className="space-y-1 text-xs">
                  <div className="flex items-center gap-1.5 text-slate-300 justify-center lg:justify-start">
                    <Calendar className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>MAY 24, 2026</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-300 justify-center lg:justify-start">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" />
                    <span>4:00 PM MMT</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                    OFFICIAL BROADCAST:
                  </span>
                  <div className="flex gap-2 justify-center lg:justify-start">
                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600 hover:text-white text-xs font-bold transition-colors"
                    >
                      YouTube Live
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-bold transition-colors"
                    >
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* 2. Navigation Tabs (Schedule vs Results vs Standings) */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-8">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 flex-wrap gap-4">
            <div className="flex items-center gap-2">
              {(["ALL", "UPCOMING", "RESULTS", "STANDINGS"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveTab(tab);
                  }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.4)]"
                      : "bg-[#081026] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <span className="text-xs text-slate-400 font-mono">
              2026 COMPETITIVE SEASON • MLBB
            </span>
          </div>
        </section>

        {/* 3. Match List Cards Grid */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab !== "STANDINGS" ? (
            <div className="space-y-4">
              {filteredMatches.map((match) => (
                <div
                  key={match.id}
                  className="p-5 sm:p-6 rounded-lg bg-[#050b1d] border border-slate-800 hover:border-slate-700 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-lg"
                >
                  
                  {/* Match Event & Stage (4 Cols) */}
                  <div className="lg:col-span-4 space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          match.status === "UPCOMING"
                            ? "bg-amber-500/15 text-[#FFC107] border border-amber-500/40"
                            : "bg-emerald-500/15 text-emerald-400 border border-emerald-500/40"
                        }`}
                      >
                        {match.status}
                      </span>
                      <span className="text-xs text-slate-400 font-mono font-bold">
                        {match.format}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white uppercase tracking-wide">
                      {match.event}
                    </h3>
                    <span className="text-xs text-cyan-400 font-bold block">
                      {match.stage}
                    </span>

                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-1 font-mono">
                      <span>{match.date}</span>
                      <span>•</span>
                      <span>{match.time}</span>
                    </div>
                  </div>

                  {/* Teams Showdown (5 Cols) */}
                  <div className="lg:col-span-5 flex items-center justify-around sm:justify-center sm:gap-8 py-2">
                    {/* Mythic SEAL */}
                    <div className="flex items-center gap-3">
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500 bg-black">
                        <Image src="/images/logo.png" alt="Mythic SEAL" fill className="object-cover" />
                      </div>
                      <span className="text-xs sm:text-sm font-black text-white uppercase">
                        MYTHIC SEAL
                      </span>
                    </div>

                    {/* Score / VS Badge */}
                    <div className="text-center px-4">
                      {match.score ? (
                        <span className="text-base sm:text-lg font-black text-[#FFC107] font-mono px-3 py-1 rounded bg-black/60 border border-amber-500/30">
                          {match.score}
                        </span>
                      ) : (
                        <span className="text-xs font-black text-cyan-400 font-mono px-2.5 py-1 rounded bg-black/60 border border-cyan-500/30">
                          VS
                        </span>
                      )}
                    </div>

                    {/* Opponent */}
                    <div className="flex items-center gap-3">
                      <span className="text-xs sm:text-sm font-black text-white uppercase">
                        {match.opponent}
                      </span>
                      <div className="relative w-10 h-10 rounded-full overflow-hidden border border-slate-700 bg-[#081026] p-1">
                        <Image src={match.opponentLogo} alt={match.opponent} fill className="object-contain" />
                      </div>
                    </div>
                  </div>

                  {/* Actions & VODs (3 Cols) */}
                  <div className="lg:col-span-3 flex flex-col items-end justify-center">
                    {match.status === "UPCOMING" ? (
                      <div className="flex items-center gap-2">
                        <a
                          href="https://youtube.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-scifi-primary text-xs !py-2 !px-3 inline-flex items-center gap-1.5"
                        >
                          <Tv className="w-3.5 h-3.5" />
                          <span>STREAM CHANNELS</span>
                        </a>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-right">
                        {match.mvp && (
                          <span className="text-[11px] text-[#FFC107] font-bold block">
                            MVP: {match.mvp} ({match.mvpHero})
                          </span>
                        )}
                        <a
                          href={match.vodUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1.5 rounded bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-amber-400 text-[#FFC107] text-xs font-bold uppercase transition-colors inline-flex items-center gap-1.5"
                        >
                          <Play className="w-3 h-3 fill-[#FFC107]" />
                          <span>WATCH VOD</span>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Standings Table */
            <div className="rounded-lg bg-[#050b1d] border border-slate-800 overflow-x-auto shadow-2xl">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-[#FFC107]" />
                  <h3 className="text-lg font-black uppercase text-white tracking-wider">
                    MSL SEASON 4 OFFICIAL LEAGUE STANDINGS
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  UPDATED AFTER WEEK 6
                </span>
              </div>

              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-slate-800 bg-[#070e24] text-slate-400 font-bold uppercase tracking-wider">
                    <th className="py-3.5 px-6">RANK</th>
                    <th className="py-3.5 px-6">TEAM</th>
                    <th className="py-3.5 px-6 text-center">MATCHES</th>
                    <th className="py-3.5 px-6 text-center">WINS</th>
                    <th className="py-3.5 px-6 text-center">LOSSES</th>
                    <th className="py-3.5 px-6 text-center">STREAK</th>
                    <th className="py-3.5 px-6 text-center">POINTS</th>
                    <th className="py-3.5 px-6 text-right">SEED / STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {STANDINGS.map((row) => (
                    <tr
                      key={row.rank}
                      className={
                        row.rank === 1
                          ? "bg-amber-500/10 font-bold text-white"
                          : "hover:bg-slate-900/50 text-slate-300"
                      }
                    >
                      <td className="py-4 px-6 font-mono font-bold text-[#FFC107]">#{row.rank}</td>
                      <td className="py-4 px-6 flex items-center gap-3">
                        <div className="relative w-7 h-7 rounded-full overflow-hidden border border-slate-700 bg-black">
                          <Image src={row.logo} alt={row.team} fill className="object-cover" />
                        </div>
                        <span className="font-black uppercase tracking-wider">{row.team}</span>
                      </td>
                      <td className="py-4 px-6 text-center font-mono">{row.mp}</td>
                      <td className="py-4 px-6 text-center font-mono text-emerald-400 font-bold">{row.w}</td>
                      <td className="py-4 px-6 text-center font-mono text-rose-400 font-bold">{row.l}</td>
                      <td className="py-4 px-6 text-center font-mono text-amber-400 font-bold">{row.streak}</td>
                      <td className="py-4 px-6 text-center font-mono text-cyan-400 font-bold text-base">{row.pts}</td>
                      <td className="py-4 px-6 text-right">
                        <span
                          className={`text-[10px] font-bold px-2.5 py-1 rounded uppercase tracking-wider font-mono ${
                            row.rank <= 2
                              ? "bg-amber-500/20 text-[#FFC107] border border-amber-500/40"
                              : row.rank <= 4
                              ? "bg-blue-500/20 text-blue-400 border border-blue-500/40"
                              : "bg-slate-800 text-slate-400"
                          }`}
                        >
                          {row.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>

      </main>

      <Footer />
    </div>
  );
}
