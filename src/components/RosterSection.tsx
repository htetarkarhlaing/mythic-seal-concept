"use client";

import React from "react";
import Link from "next/link";
import MythicRosterCard from "@/components/ui/MythicRosterCard";
import { TiltCard } from "@/components/ui/TiltCard";
import { ROSTER } from "@/data/roster";

export default function RosterSection() {
  return (
    <section id="roster" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
        <h2 className="font-['Rajdhani',sans-serif] text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
          OUR <span className="text-[#FFC107]">ROSTER</span>
        </h2>

        <Link
          href="/roster"
          className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#FFC107] transition-colors uppercase"
        >
          VIEW FULL ROSTER ➔
        </Link>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {ROSTER.map((player) => (
          <TiltCard key={player.id} maxTilt={10} scale={1.04} className="h-full">
            <Link href={`/roster/${player.id}`} className="block h-full">
              <MythicRosterCard
                id={player.id}
                name={player.name}
                role={player.role}
                image={player.image}
              />
            </Link>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
