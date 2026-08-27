"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PartnersSection() {
  return (
    <section id="partners" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      {/* Flat Section Header */}
      <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-800/80">
        <h2 className="font-['Rajdhani',sans-serif] text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
          OFFICIAL TEAM <span className="text-[#FFC107]">PARTNERS</span>
        </h2>

        <Link
          href="/partners"
          className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#FFC107] transition-colors uppercase"
        >
          BECOME A PARTNER ➔
        </Link>
      </div>

      {/* Flat Partner Logos Row */}
      <div className="flex items-center justify-around sm:justify-between gap-6 sm:gap-12 flex-wrap py-4">
        
        {/* ATOM */}
        <Link href="/partners" className="h-9 relative w-28 sm:w-32 hover:scale-108 transition-all opacity-90 hover:opacity-100">
          <Image
            src="/images/partners/atom-logo.png"
            alt="ATOM"
            fill
            className="object-contain"
          />
        </Link>

        {/* KBZ Pay */}
        <Link href="/partners" className="h-9 relative w-16 sm:w-20 hover:scale-108 transition-all opacity-90 hover:opacity-100">
          <Image
            src="/images/partners/kbzpay-logo.png"
            alt="KBZ Pay"
            fill
            className="object-contain"
          />
        </Link>

        {/* Royal-D */}
        <Link href="/partners" className="h-9 relative w-24 sm:w-28 hover:scale-108 transition-all opacity-90 hover:opacity-100">
          <Image
            src="/images/partners/royald-logo.png"
            alt="Royal-D"
            fill
            className="object-contain"
          />
        </Link>

        {/* Balance Fitness */}
        <Link href="/partners" className="h-9 relative w-28 sm:w-32 hover:scale-108 transition-all opacity-90 hover:opacity-100">
          <Image
            src="/images/partners/balance-logo.png"
            alt="Balance Fitness"
            fill
            className="object-contain"
          />
        </Link>

      </div>

    </section>
  );
}
