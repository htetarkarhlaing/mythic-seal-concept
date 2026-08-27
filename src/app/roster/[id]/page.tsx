import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MythicRosterCard from "@/components/ui/MythicRosterCard";
import { ROSTER } from "@/data/roster";
import { Calendar, Shield, ShoppingBag, ArrowLeft, Quote } from "lucide-react";

interface PlayerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return ROSTER.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: PlayerPageProps) {
  const { id } = await params;
  const player = ROSTER.find((p) => p.id === id);
  if (!player) return { title: "Player Not Found | Mythic SEAL" };

  return {
    title: `${player.ign} (${player.name}) Profile | Mythic SEAL MLBB`,
    description: `Official athlete profile and player summary for ${player.name} (${player.role}) of Mythic SEAL Esports.`,
  };
}

export default async function PlayerDossierPage({ params }: PlayerPageProps) {
  const { id } = await params;
  const player = ROSTER.find((p) => p.id === id);

  if (!player) {
    notFound();
  }

  const otherPlayers = ROSTER.filter((p) => p.id !== player.id);

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Standardized Breadcrumb Navigation Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#FFC107] transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/roster" className="hover:text-[#FFC107] transition-colors">
                ROSTER
              </Link>
              <span>/</span>
              <span className="text-[#FFC107] font-bold uppercase">{player.ign}</span>
            </div>

            <Link
              href="/roster"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#FFC107] font-bold uppercase tracking-wider transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO ROSTER</span>
            </Link>
          </div>
        </div>

        {/* Player Profile Section */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left: Enhanced Sci-Fi Player Card */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-sm">
                <MythicRosterCard
                  id={player.id}
                  name={player.ign}
                  role={player.role}
                  image={player.image}
                  number={player.number}
                />
              </div>

              {/* Order Custom Jersey CTA */}
              <div className="w-full max-w-sm mt-6 p-4 rounded-sm bg-[#050b1d] border border-amber-500/60 shadow-lg text-center space-y-3">
                <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider block">
                  SUPPORT {player.ign}
                </span>
                <p className="text-xs text-slate-300">
                  Wear the official 2026 Season tournament jersey customized with #{player.number} {player.ign}.
                </p>
                <Link
                  href="/shop"
                  className="btn-scifi-primary w-full text-center block text-xs"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>CUSTOMIZE #{player.number} {player.ign} JERSEY</span>
                </Link>
              </div>
            </div>

            {/* Right: Summary Information & Player Speech */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Header Title */}
              <div className="space-y-2 pb-4 border-b border-slate-800">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#FFC107] px-2.5 py-0.5 rounded bg-black/60 border border-amber-500/40">
                    SQUAD NUMBER #{player.number}
                  </span>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    {player.lane}
                  </span>
                  <span className="text-[10px] font-bold text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 uppercase">
                    ACTIVE ROSTER
                  </span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase text-white tracking-tight leading-none">
                  {player.name} <span className="text-[#FFC107]">[{player.ign}]</span>
                </h1>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1 font-medium">
                  {player.bio}
                </p>
              </div>

              {/* Summary Facts Cards (Join Date & Matches) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                    <Calendar className="w-4 h-4 text-[#FFC107]" />
                    <span>JOINED MYTHIC SEAL</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-white font-mono block pt-1">
                    {player.joinDate}
                  </span>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    Official Roster Sign Date
                  </span>
                </div>

                <div className="p-5 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>MATCHES WITH TEAM</span>
                  </div>
                  <span className="text-xl sm:text-2xl font-black text-[#FFC107] font-mono block pt-1">
                    {player.totalMatches}+ MATCHES
                  </span>
                  <span className="text-[11px] text-slate-400 block font-medium">
                    Official League & Tournament Games
                  </span>
                </div>
              </div>

              {/* Tournament Performance Stats Grid */}
              {player.stats && (
                <div className="p-5 rounded-sm bg-[#050b1d] border border-slate-800/90 space-y-4">
                  <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest block">
                    {"// TOURNAMENT METRICS (MSL & GEG 2026)"}
                  </span>

                  <div className="grid grid-cols-3 gap-3 text-center">
                    <div className="p-3 bg-black/40 rounded border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">SEASON KDA</span>
                      <span className="text-lg font-black text-white font-mono">{player.stats.kda}</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">WIN RATE</span>
                      <span className="text-lg font-black text-emerald-400 font-mono">{player.stats.winRate}</span>
                    </div>
                    <div className="p-3 bg-black/40 rounded border border-slate-800">
                      <span className="text-[10px] text-slate-400 font-bold block uppercase">MVPS</span>
                      <span className="text-lg font-black text-[#FFC107] font-mono">{player.stats.mvpCount}</span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[11px] text-slate-400 font-bold uppercase block mb-2">SIGNATURE HERO POOL:</span>
                    <div className="flex flex-wrap gap-2">
                      {player.stats.signatureHeroes.map((hero) => (
                        <span
                          key={hero}
                          className="px-2.5 py-1 text-xs font-bold text-slate-200 bg-slate-900 rounded border border-amber-500/30"
                        >
                          ⚔️ {hero}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Player Speech / Personal Quote */}
              <div className="p-6 sm:p-7 rounded-sm bg-[#050b1d] border border-amber-500/60 relative space-y-3 shadow-xl">
                <div className="flex items-center gap-2 text-xs font-bold text-[#FFC107] uppercase tracking-wider">
                  <Quote className="w-4 h-4" />
                  <span>WORDS FROM {player.ign}</span>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-200 leading-relaxed italic font-medium">
                  &ldquo;{player.quote}&rdquo;
                </blockquote>

                <div className="pt-2 flex items-center justify-between border-t border-slate-800 text-xs">
                  <span className="text-slate-400 font-mono">
                    {player.realName} • #{player.number}
                  </span>
                  <span className="text-[#FFC107] font-bold uppercase tracking-wider">
                    MYTHIC SEAL MLBB
                  </span>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Other Teammates Row */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-800">
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-800">
            <span className="text-xs font-bold text-white uppercase tracking-widest">
              OTHER SQUAD MEMBERS
            </span>
            <Link href="/roster" className="text-xs font-bold text-[#FFC107] hover:underline uppercase">
              VIEW FULL SQUAD ➔
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {otherPlayers.map((teammate) => (
              <Link
                key={teammate.id}
                href={`/roster/${teammate.id}`}
                className="p-3 rounded-sm bg-[#050b1d] border border-slate-800 hover:border-amber-500/70 transition-all flex items-center gap-3 group"
              >
                <div className="relative w-10 h-10 rounded-full overflow-hidden border border-amber-500/60 bg-black">
                  <Image src={teammate.image} alt={teammate.name} fill className="object-cover" />
                </div>
                <div>
                  <span className="text-xs font-black text-white group-hover:text-[#FFC107] transition-colors block uppercase">
                    {teammate.ign}
                  </span>
                  <span className="text-[10px] text-slate-400 block">{teammate.role}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
