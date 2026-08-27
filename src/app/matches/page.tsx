"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Calendar, Clock, Play, Trophy } from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";

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
}

const MATCHES_DATA: Match[] = [
  {
    id: "match-1",
    opponent: "TEAM MAX",
    opponentLogo: "/images/team-max-logo.png",
    event: "GEG 2026 MYANMAR QUALIFIER",
    stage: "UPPER BRACKET FINALS",
    date: "MAY 24, 2026",
    time: "4:00 PM (MMT)",
    format: "BEST OF 5 (BO5)",
    status: "UPCOMING",
  },
  {
    id: "match-2",
    opponent: "AI ESPORTS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 PLAYOFFS",
    stage: "SEMI FINALS",
    date: "MAY 18, 2026",
    time: "2:00 PM (MMT)",
    format: "BEST OF 5 (BO5)",
    status: "COMPLETED",
    score: "3 - 1 (VICTORY)",
    vodUrl: "https://youtube.com",
    mvp: "JUSTIN (Ling - 12/1/8)",
  },
  {
    id: "match-3",
    opponent: "FALCON ESPORTS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 REGULAR SEASON",
    stage: "WEEK 6 DAY 2",
    date: "MAY 12, 2026",
    time: "6:00 PM (MMT)",
    format: "BEST OF 3 (BO3)",
    status: "COMPLETED",
    score: "2 - 0 (VICTORY)",
    vodUrl: "https://youtube.com",
    mvp: "GALAXY (Paquito - 8/0/9)",
  },
  {
    id: "match-4",
    opponent: "BURMESE GHOULS",
    opponentLogo: "/images/team-max-logo.png",
    event: "MSL SEASON 4 REGULAR SEASON",
    stage: "WEEK 5 DAY 1",
    date: "MAY 05, 2026",
    time: "4:00 PM (MMT)",
    format: "BEST OF 3 (BO3)",
    status: "COMPLETED",
    score: "2 - 1 (VICTORY)",
    vodUrl: "https://youtube.com",
    mvp: "ZIPPY (Claude - 14/2/6)",
  },
];

const STANDINGS = [
  { rank: 1, team: "MYTHIC SEAL", logo: "/images/logo.png", mp: 12, w: 11, l: 1, pts: 32, status: "UPPER BRACKET" },
  { rank: 2, team: "TEAM MAX", logo: "/images/team-max-logo.png", mp: 12, w: 10, l: 2, pts: 29, status: "UPPER BRACKET" },
  { rank: 3, team: "AI ESPORTS", logo: "/images/team-max-logo.png", mp: 12, w: 8, l: 4, pts: 24, status: "LOWER BRACKET" },
  { rank: 4, team: "FALCON ESPORTS", logo: "/images/team-max-logo.png", mp: 12, w: 7, l: 5, pts: 21, status: "LOWER BRACKET" },
  { rank: 5, team: "BURMESE GHOULS", logo: "/images/team-max-logo.png", mp: 12, w: 5, l: 7, pts: 16, status: "ELIMINATED" },
];

export default function MatchesPage() {
  const [activeTab, setActiveTab] = useState<"ALL" | "UPCOMING" | "RESULTS" | "STANDINGS">("ALL");

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
        
        {/* Standardized Breadcrumb Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#FFC107] transition-colors font-medium">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FFC107] font-bold">MATCH CENTER</span>
          </div>
        </div>

        {/* Header Section */}
        <section className="relative pb-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.3em] mb-2 block">
              {"// COMPETITIVE TOURNAMENT SCHEDULE"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              MATCH <span className="text-[#FFC107]">CENTER</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-3 font-medium">
              Track live tournament broadcasts, upcoming matchups, official VOD replays, and championship league standings.
            </p>

            {/* Navigation Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 mt-8 flex-wrap justify-center">
              {(["ALL", "UPCOMING", "RESULTS", "STANDINGS"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveTab(tab);
                  }}
                  className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === tab
                      ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.5)] scale-105"
                      : "bg-[#081026] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Content Section */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          
          {activeTab !== "STANDINGS" ? (
            <div className="space-y-6">
              {filteredMatches.map((match) => (
                <div
                  key={match.id}
                  className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/60 transition-all grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-lg"
                >
                  
                  {/* Event & Format Details (Left 4 Cols) */}
                  <div className="lg:col-span-4 space-y-1.5 border-b border-slate-800 lg:border-b-0 pb-4 lg:pb-0">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                          match.status === "UPCOMING"
                            ? "bg-amber-500/20 text-[#FFC107] border border-amber-500/40"
                            : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                        }`}
                      >
                        {match.status}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        {match.format}
                      </span>
                    </div>

                    <h3 className="text-base font-black text-white uppercase tracking-wide">
                      {match.event}
                    </h3>
                    <span className="text-xs text-cyan-400 font-bold block">
                      {match.stage}
                    </span>

                    <div className="flex items-center gap-3 text-xs text-slate-400 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" /> {match.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {match.time}
                      </span>
                    </div>
                  </div>

                  {/* Matchup Duel (Center 5 Cols) */}
                  <div className="lg:col-span-5 flex items-center justify-around sm:justify-center sm:gap-8 py-2">
                    
                    {/* Mythic SEAL */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-amber-500/80 bg-black shadow-[0_0_15px_rgba(255,193,7,0.3)]">
                        <Image src="/images/logo.png" alt="Mythic SEAL" fill className="object-cover" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        MYTHIC SEAL
                      </span>
                    </div>

                    {/* Score or VS */}
                    <div className="text-center px-4">
                      {match.score ? (
                        <div className="text-lg sm:text-xl font-black text-[#FFC107] font-mono tracking-wider">
                          {match.score}
                        </div>
                      ) : (
                        <span className="text-2xl font-black text-cyan-400 tracking-wider drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]">
                          VS
                        </span>
                      )}
                    </div>

                    {/* Opponent */}
                    <div className="flex flex-col items-center space-y-2">
                      <div className="relative w-14 h-14 rounded-full overflow-hidden border border-slate-700 bg-[#081026] p-1 shadow">
                        <Image src={match.opponentLogo} alt={match.opponent} fill className="object-contain" />
                      </div>
                      <span className="text-xs font-bold text-white uppercase tracking-wider">
                        {match.opponent}
                      </span>
                    </div>

                  </div>

                  {/* CTA & Actions (Right 3 Cols) */}
                  <div className="lg:col-span-3 flex flex-col items-end justify-center space-y-2 border-t border-slate-800 lg:border-t-0 pt-4 lg:pt-0">
                    {match.status === "UPCOMING" ? (
                      <div className="space-y-2 w-full sm:w-auto">
                        <span className="text-[10px] text-slate-400 uppercase font-bold block text-right">
                          BROADCAST CHANNELS
                        </span>
                        <div className="flex items-center gap-2 justify-end">
                          <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded bg-red-600/20 border border-red-500/40 text-red-400 hover:bg-red-600 hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
                          >
                            ▶ YouTube
                          </a>
                          <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3 py-1 rounded bg-blue-600/20 border border-blue-500/40 text-blue-400 hover:bg-blue-600 hover:text-white transition-colors text-xs font-bold flex items-center gap-1"
                          >
                            f Facebook
                          </a>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1.5 text-right w-full">
                        {match.mvp && (
                          <span className="text-[11px] text-[#FFC107] font-bold block">
                            MVP: {match.mvp}
                          </span>
                        )}
                        <a
                          href={match.vodUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-scifi-primary !py-2 !px-4 text-xs inline-flex items-center gap-1.5"
                        >
                          <Play className="w-3.5 h-3.5 fill-black" />
                          <span>WATCH REPLAY</span>
                        </a>
                      </div>
                    )}
                  </div>

                </div>
              ))}
            </div>
          ) : (
            /* Standings Table */
            <div className="rounded-sm bg-[#050b1d] border border-slate-800/90 overflow-x-auto shadow-xl">
              <div className="p-6 border-b border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Trophy className="w-5 h-5 text-[#FFC107]" />
                  <h3 className="text-lg font-black uppercase text-white tracking-wider">
                    MSL SEASON 4 OFFICIAL LEAGUE STANDINGS
                  </h3>
                </div>
                <span className="text-xs font-mono text-cyan-400 font-bold">
                  REGULAR SEASON WEEK 6
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
                    <th className="py-3.5 px-6 text-center">POINTS</th>
                    <th className="py-3.5 px-6 text-right">STATUS</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 font-medium">
                  {STANDINGS.map((row) => (
                    <tr
                      key={row.rank}
                      className={row.rank === 1 ? "bg-amber-500/10 font-bold text-white" : "hover:bg-slate-900/50 text-slate-300"}
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
                      <td className="py-4 px-6 text-center font-mono text-cyan-400 font-bold text-base">{row.pts}</td>
                      <td className="py-4 px-6 text-right">
                        <span
                          className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider ${
                            row.status === "UPPER BRACKET"
                              ? "bg-amber-500/20 text-[#FFC107] border border-amber-500/40"
                              : row.status === "LOWER BRACKET"
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
