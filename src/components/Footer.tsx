"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setTimeout(() => setSubscribed(false), 5000);
      setEmail("");
    }
  };

  return (
    <footer className="pt-16 pb-10 text-slate-400 bg-[#040817] border-t border-slate-900 font-['Rajdhani',sans-serif]">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 5 Column Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-12">
          
          {/* Column 1: Brand & Socials (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            
            {/* Logo + Name */}
            <Link href="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/60 p-0.5 shadow-[0_0_15px_rgba(255,193,7,0.3)] bg-black transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/images/logo.png"
                  alt="Mythic SEAL"
                  fill
                  className="object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-['Rajdhani',sans-serif] tracking-[0.2em] text-lg font-black text-white uppercase leading-none">
                  MYTHIC
                </span>
                <span className="font-['Rajdhani',sans-serif] tracking-[0.25em] text-sm font-bold text-[#FFC107] uppercase mt-0.5 leading-none">
                  SEAL
                </span>
              </div>
            </Link>

            {/* Description */}
            <p className="text-xs text-slate-400 max-w-xs leading-relaxed font-medium">
              Professional MLBB esports organization competing at the pinnacle of competitive gaming in Myanmar and Southeast Asia.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 hover:border-[#FFC107] flex items-center justify-center text-slate-300 hover:text-white text-xs font-bold transition-colors"
              >
                f
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                title="YouTube"
                className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 hover:border-red-500 flex items-center justify-center text-slate-300 hover:text-white text-[10px] transition-colors"
              >
                ▶
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                title="TikTok"
                className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 hover:border-cyan-400 flex items-center justify-center text-slate-300 hover:text-white text-[11px] font-bold transition-colors"
              >
                d
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 hover:border-purple-400 flex items-center justify-center text-slate-300 hover:text-white text-[11px] transition-colors"
              >
                📷
              </a>
              <a
                href="https://discord.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Discord"
                className="w-7 h-7 rounded-sm bg-slate-900 border border-slate-700 hover:border-indigo-400 flex items-center justify-center text-slate-300 hover:text-white text-[11px] transition-colors"
              >
                🎮
              </a>
            </div>
          </div>

          {/* Column 2: NAVIGATION (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-200">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/" className="hover:text-[#FFC107] transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-[#FFC107] transition-colors">About Us</Link></li>
              <li><Link href="/roster" className="hover:text-[#FFC107] transition-colors">Roster Lineup</Link></li>
              <li><Link href="/news" className="hover:text-[#FFC107] transition-colors">News & Blog</Link></li>
              <li><Link href="/matches" className="hover:text-[#FFC107] transition-colors">Match Center</Link></li>
              <li><Link href="/partners" className="hover:text-[#FFC107] transition-colors">Partnerships</Link></li>
              <li><Link href="/shop" className="hover:text-[#FFC107] transition-colors">Pro Store</Link></li>
            </ul>
          </div>

          {/* Column 3: COMPETITIVE (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-200">
              COMPETITIVE
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/matches" className="hover:text-[#FFC107] transition-colors">Upcoming Matches</Link></li>
              <li><Link href="/matches" className="hover:text-[#FFC107] transition-colors">League Standings</Link></li>
              <li><Link href="/matches" className="hover:text-[#FFC107] transition-colors">VOD Replays</Link></li>
              <li><Link href="/about" className="hover:text-[#FFC107] transition-colors">Trophy Room</Link></li>
            </ul>
          </div>

          {/* Column 4: COMMERCIAL (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-200">
              COMMERCIAL
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><Link href="/partners" className="hover:text-[#FFC107] transition-colors">Sponsor Us</Link></li>
              <li><Link href="/partners" className="hover:text-[#FFC107] transition-colors">Partner Deck</Link></li>
              <li><a href="mailto:contact@mythicseal.com" className="hover:text-[#FFC107] transition-colors">Media Inquiries</a></li>
              <li><Link href="/shop" className="hover:text-[#FFC107] transition-colors">Custom Jersey</Link></li>
            </ul>
          </div>

          {/* Column 5: NEWSLETTER (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-slate-200">
              SUBSCRIBE
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed font-medium">
              Subscribe for official match alerts and jersey drops.
            </p>

            {/* Clean Aligned Subscribe Bar */}
            <form onSubmit={handleSubscribe} className="flex items-stretch gap-2 pt-1">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter email"
                className="w-full bg-[#081026] border border-slate-700/80 rounded-sm px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
              />
              <button
                type="submit"
                className="btn-scifi-primary !py-2 !px-3.5 text-xs font-bold whitespace-nowrap"
              >
                <span>JOIN</span>
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-bold pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Subscribed!</span>
              </div>
            )}
          </div>

        </div>

        {/* Copyright Notice */}
        <div className="pt-8 border-t border-slate-900 text-center text-xs text-slate-500">
          <p>© 2026 Mythic SEAL Esports Organization. All Rights Reserved.</p>
        </div>

      </div>
    </footer>
  );
}
