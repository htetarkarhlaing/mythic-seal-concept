"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { NEWS_ARTICLES } from "@/data/news";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function NewsSection() {
  const containerRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      gsap.from(".news-card", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="news"
      className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800/80">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 bg-[#FFC107] rotate-45 shadow-[0_0_8px_#FFC107]" />
          <h2 className="font-['Rajdhani',sans-serif] text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
            LATEST <span className="text-[#FFC107]">NEWS</span>
          </h2>
        </div>

        <Link
          href="/news"
          className="text-xs font-bold tracking-widest text-slate-400 hover:text-[#FFC107] transition-colors uppercase"
        >
          VIEW ALL DISPATCHES ➔
        </Link>
      </div>

      {/* News Cards Grid with GSAP Entrance */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {NEWS_ARTICLES.slice(0, 3).map((item) => (
          <Link
            key={item.id}
            href={`/news/${item.id}`}
            className="news-card rounded-sm overflow-hidden border border-slate-800/90 hover:border-amber-500/80 bg-[#050b1d] group transition-all duration-300 hover:-translate-y-1.5 shadow-lg flex flex-col justify-between"
          >
            <div>
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[280/175] overflow-hidden bg-slate-950">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/50 text-[#FFC107] font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow">
                  {item.category}
                </div>
              </div>

              {/* Text Body */}
              <div className="p-5 space-y-2.5">
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                  <span>{item.date}</span>
                  <span>•</span>
                  <span>{item.readTime}</span>
                </div>

                <h3 className="font-['Rajdhani',sans-serif] text-base font-bold text-white group-hover:text-[#FFC107] transition-colors leading-snug line-clamp-2 uppercase">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-medium">
                  {item.summary}
                </p>
              </div>
            </div>

            {/* Sci-Fi Card Footer UI */}
            <div className="px-5 py-3.5 bg-[#030612]/90 border-t border-slate-800/90 group-hover:border-amber-500/50 group-hover:bg-[#070e28] transition-all flex items-center justify-between mt-2">
              <span className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-[#FFC107] group-hover:text-white transition-colors">
                READ ARTICLE
              </span>

              <div className="w-6 h-6 rounded-sm bg-amber-500/10 border border-amber-500/40 group-hover:bg-[#FFC107] group-hover:text-black text-[#FFC107] transition-all flex items-center justify-center shadow">
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
