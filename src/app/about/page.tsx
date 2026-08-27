import React from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "About Us & Legacy | Mythic SEAL MLBB Esports",
  description:
    "Explore the history, tournament milestones, championship memories, and vision of Mythic SEAL — Myanmar's premier Mobile Legends esports organization.",
};

const TIMELINE_EVENTS = [
  {
    year: "2019",
    tag: "INCEPTION",
    title: "FOUNDATION OF MYTHIC SEAL",
    desc: "Formed in Yangon by passionate grassroots MLBB competitors with an uncompromising dream to reach the global stage.",
    milestone: "Established competitive squad",
  },
  {
    year: "2021",
    tag: "FIRST TITLE",
    title: "NATIONAL ESPORTS CHAMPIONS",
    desc: "Clinched the Myanmar National Games Championship with an undefeated 12-0 match record.",
    milestone: "Gold Medal Winner",
  },
  {
    year: "2023",
    tag: "EXPANSION",
    title: "PRO BOOTCAMP & ACADEMY LAUNCH",
    desc: "Established our premier Yangon gaming facility and youth academy to scout and train top Myanmar talents.",
    milestone: "Full-Time Pro Facility",
  },
  {
    year: "2025",
    tag: "INTERNATIONAL SEED",
    title: "GEG MYANMAR GOLD & MSC RUNNER-UP",
    desc: "Represented Myanmar at the Global Esports Games and secured silver at the MSC Myanmar Qualifiers.",
    milestone: "MSC International Contender",
  },
  {
    year: "2026",
    tag: "DYNASTY",
    title: "MSL SEASON 4 CHAMPIONS",
    desc: "Crowned champions of the Mobile Legends Super League, solidifying our reign as the undisputed #1 team in Myanmar.",
    milestone: "MSL Season 4 Championship",
  },
];

const MEMORIES = [
  {
    title: "MSL S4 SQUAD ANNOUNCEMENT",
    caption: "Official Season 4 championship lineup reveal.",
    image: "/images/about/memory-5.jpg",
    tag: "ROSTER REVEAL",
  },
  {
    title: "PRO JERSEY REVEAL",
    caption: "Captain Galaxy & Justin showcasing the 2026 pro kit.",
    image: "/images/about/memory-3.jpg",
    tag: "APPAREL LAUNCH",
  },
  {
    title: "GEG 2026 QUALIFIER RUN",
    caption: "Relentless matchday run at the Global Esports Games qualifiers.",
    image: "/images/about/memory-4.jpg",
    tag: "TOURNAMENT MATCHDAY",
  },
  {
    title: "ARENA STAGE DOMINANCE",
    caption: "The starting 5 looking over the championship stadium arena.",
    image: "/images/hero-bg.png",
    tag: "STADIUM MEMORY",
  },
];

const ACHIEVEMENTS = [
  {
    year: "2026",
    title: "MSL SEASON 4 CHAMPIONS",
    event: "Mobile Legends Super League",
    record: "11W - 1L (84% Game WR)",
    prize: "Champion Trophy & MSC Seed",
    badge: "MAJOR TITLE",
  },
  {
    year: "2025",
    title: "GEG MYANMAR QUALIFIERS",
    event: "Global Esports Games Myanmar",
    record: "1st Place Gold Finalist",
    prize: "Gold Medal & International Berth",
    badge: "GOLD MEDAL",
  },
  {
    year: "2025",
    title: "MSC MYANMAR FINALS",
    event: "MLBB Mid Season Cup Qualifier",
    record: "Grand Finalist (Silver)",
    prize: "Runner-Up Podium",
    badge: "PODIUM",
  },
  {
    year: "2024",
    title: "MYANMAR NATIONAL GAMES",
    event: "National Esports Championship",
    record: "Undefeated 12-0 Run",
    prize: "National Gold Trophy",
    badge: "GOLD TROPHY",
  },
];

const LEADERSHIP = [
  {
    name: "AUNG KO KO",
    role: "FOUNDER & CEO",
    ign: "SEAL-ONE",
    image: "/images/players/player-1.png",
    bio: "Pioneering Myanmar esports since 2019, building the nation's premier competitive gaming ecosystem.",
  },
  {
    name: "MIN THU HEIN",
    role: "HEAD COACH",
    ign: "COACH-ZERO",
    image: "/images/players/player-1.png",
    bio: "Former professional captain with over 6 years of draft expertise and international tournament coaching.",
  },
  {
    name: "KYAW ZIN",
    role: "CHIEF PERFORMANCE ANALYST",
    ign: "DATA-SEAL",
    image: "/images/players/player-1.png",
    bio: "Specializing in macro pathing analysis, draft probability models, and opponent telemetry.",
  },
];

export default function AboutPage() {
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
            <span className="text-[#FFC107] font-bold">ABOUT US</span>
          </div>
        </div>

        {/* 1. About Hero Section */}
        <section className="relative pb-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.3em] mb-2 block">
              {"// ORGANIZATION DOSSIER & HERITAGE"}
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl">
              FORGED IN BATTLE.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFDB4D] to-[#FFC107] drop-shadow-[0_4px_25px_rgba(255,193,7,0.5)]">
                DESTINED FOR GLORY.
              </span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mt-4 leading-relaxed font-medium">
              Founded with an uncompromising ambition to represent Myanmar at the highest tier of global esports, Mythic SEAL is more than a team — it is a movement of elite competitors and devoted fans.
            </p>

            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 w-full max-w-3xl">
              <div className="p-4 rounded-sm bg-[#050b1d] border border-slate-800 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#FFC107] block font-mono">2019</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">FOUNDED</span>
              </div>
              <div className="p-4 rounded-sm bg-[#050b1d] border border-slate-800 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#00f0ff] block font-mono">14+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">TITLES & MEDALS</span>
              </div>
              <div className="p-4 rounded-sm bg-[#050b1d] border border-slate-800 text-center">
                <span className="text-2xl sm:text-3xl font-black text-[#FFC107] block font-mono">1.2M+</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">COMMUNITY FANS</span>
              </div>
              <div className="p-4 rounded-sm bg-[#050b1d] border border-slate-800 text-center">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 block font-mono">78.8%</span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider">CAREER WIN RATE</span>
              </div>
            </div>

          </div>
        </section>

        {/* 2. Photo Memories & Matchday Showcase */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              MEMORIES & <span className="text-[#FFC107]">MATCHDAY SHOWCASE</span>
            </h2>
            <span className="text-xs font-mono text-slate-400 uppercase hidden sm:inline">
              OFFICIAL TEAM ARCHIVES
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMORIES.map((memory, idx) => (
              <div
                key={idx}
                className="group rounded-sm overflow-hidden border border-slate-800/90 hover:border-amber-500/80 bg-[#050b1d] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Photo Aspect Stage */}
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-950">
                  <Image
                    src={memory.image}
                    alt={memory.title}
                    fill
                    className="object-cover group-hover:scale-108 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050b1d] via-transparent to-transparent" />
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/50 text-[#FFC107] font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow">
                    {memory.tag}
                  </div>
                </div>

                {/* Caption */}
                <div className="p-4 space-y-1">
                  <h3 className="text-sm sm:text-base font-black text-white group-hover:text-[#FFC107] transition-colors uppercase leading-snug">
                    {memory.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium leading-relaxed">
                    {memory.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. Interactive Chronological Timeline UI */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-10 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              ORGANIZATION <span className="text-[#FFC107]">TIMELINE</span> (2019 - 2026)
            </h2>
          </div>

          <div className="relative border-l-2 border-amber-500/40 ml-4 sm:ml-8 space-y-10 py-2">
            {TIMELINE_EVENTS.map((event, idx) => (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node */}
                <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#060a1a] border-2 border-amber-400 group-hover:bg-[#FFC107] group-hover:shadow-[0_0_12px_#FFC107] transition-all" />

                {/* Timeline Card */}
                <div className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/70 transition-all space-y-2 max-w-3xl shadow-lg">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-mono text-sm font-black text-[#FFC107] px-2.5 py-0.5 rounded bg-black/60 border border-amber-500/50">
                      {event.year}
                    </span>
                    <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest">
                      {event.tag}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-wide">
                    {event.title}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-medium">
                    {event.desc}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-xs font-bold text-[#FFC107]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{event.milestone}</span>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 4. Achievements & Trophy Showcase UI */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              MAJOR <span className="text-[#FFC107]">ACHIEVEMENTS</span> & TROPHIES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ACHIEVEMENTS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/80 transition-all space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-3">
                    <span className="font-mono text-sm font-black text-[#FFC107]">{item.year}</span>
                    <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest px-2 py-0.5 rounded bg-amber-500/10 border border-amber-500/30">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-black text-white uppercase tracking-wide leading-tight">
                    {item.title}
                  </h3>

                  <span className="text-xs text-slate-400 block mt-1.5 font-medium">
                    {item.event}
                  </span>
                </div>

                <div className="pt-4 border-t border-slate-800/80 space-y-1">
                  <span className="text-[11px] text-slate-400 block">
                    Tournament Record: <span className="text-white font-mono font-bold">{item.record}</span>
                  </span>
                  <span className="text-xs font-bold text-cyan-400 block">
                    {item.prize}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Executive & Coaching Staff */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              EXECUTIVE & <span className="text-[#FFC107]">COACHING STAFF</span>
            </h2>
            <Link
              href="/roster"
              className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#FFC107] transition-colors uppercase"
            >
              VIEW PLAYERS ➔
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEADERSHIP.map((staff, idx) => (
              <div
                key={idx}
                className="p-6 rounded-sm bg-[#050b1d] border border-slate-800 hover:border-amber-500/60 transition-colors space-y-4 shadow-lg"
              >
                <div className="flex items-center gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-amber-500/80 bg-black">
                    <Image
                      src={staff.image}
                      alt={staff.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-[#FFC107] tracking-wider uppercase block">
                      {staff.role}
                    </span>
                    <h3 className="text-base font-black text-white uppercase">
                      {staff.name}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      IGN: {staff.ign}
                    </span>
                  </div>
                </div>

                <p className="text-slate-300 text-xs leading-relaxed border-t border-slate-800/80 pt-3">
                  {staff.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
