"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MythicRosterCard from "@/components/ui/MythicRosterCard";
import { ROSTER } from "@/data/roster";
import { Shield, Target, Users, ArrowRight } from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";

export default function RosterPage() {
  const [activeRole, setActiveRole] = useState<string>("ALL");

  const roles = ["ALL", "EXP LANE", "JUNGLER", "MID LANE", "GOLD LANE", "ROAMER"];

  const filteredPlayers =
    activeRole === "ALL"
      ? ROSTER
      : ROSTER.filter((p) => p.role.includes(activeRole));

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
            <span className="text-[#FFC107] font-bold">ROSTER LINEUP</span>
          </div>
        </div>

        {/* Roster Header */}
        <section className="relative pb-12 sm:pb-16 border-b border-slate-800/80 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.3em] mb-2 block">
              {"// ACTIVE TOURNAMENT SQUAD"}
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-tight">
              MEET THE <span className="text-[#FFC107]">CHAMPIONS</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base max-w-xl mt-3 font-medium">
              Myanmar’s premier MLBB lineup. Click on any athlete to read their profile summary, join date, total matches with the squad, and personal speech.
            </p>

            {/* Role Filter Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 mt-8 flex-wrap justify-center">
              {roles.map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    cyberAudio.playClick();
                    setActiveRole(role);
                  }}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeRole === role
                      ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.5)] scale-105"
                      : "bg-[#081026] text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Player Cards Grid */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {filteredPlayers.map((player, index) => (
              <Link key={player.id} href={`/roster/${player.id}`} className="block">
                <MythicRosterCard
                  id={player.id}
                  name={player.name}
                  role={player.role}
                  image={player.image}
                  number={player.number}
                  priority={index < 2}
                />
              </Link>
            ))}
          </div>

          {/* Roster Structure & Culture Info */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-[#FFC107]">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                TACTICAL HARMONY
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Our starting five train together daily at the Yangon pro bootcamp facility, building unbreakable in-game communication and trust.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded bg-cyan-500/10 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Target className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                CHAMPIONSHIP MENTALITY
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Backed by veteran head coach Min Thu Hein and dedicated data analysts to prepare personalized counter-strategies for every matchup.
              </p>
            </div>

            <div className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-3 shadow-lg">
              <div className="w-10 h-10 rounded bg-purple-500/10 border border-purple-500/40 flex items-center justify-center text-purple-400">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="text-base font-black text-white uppercase tracking-wider">
                MYTHIC ACADEMY PIPELINE
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-medium">
                Continuous talent scouting across Myanmar ensures our active lineup is constantly supported by hungry, high-potential trainees.
              </p>
            </div>
          </div>

          {/* Tryouts / Recruitment Banner */}
          <div className="mt-8 p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#0e1b4d] via-[#091232] to-[#050b1d] border border-amber-500/60 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-widest block">
                TALENT RECRUITMENT
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white uppercase">
                THINK YOU HAVE WHAT IT TAKES TO JOIN?
              </h3>
              <p className="text-xs text-slate-300 max-w-lg">
                Mythic SEAL scouts top Mythical Immortal players in Myanmar for our academy and competitive bootcamp rosters.
              </p>
            </div>

            <a
              href="mailto:scout@mythicseal.com"
              className="btn-scifi-primary whitespace-nowrap text-xs !py-3 !px-6"
            >
              <span>SUBMIT SCOUT APPLICATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </section>

      </main>

      <Footer />
    </div>
  );
}
