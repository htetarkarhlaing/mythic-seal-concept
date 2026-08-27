"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Play, ChevronRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

import { useAppStore } from "@/store/useAppStore";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface HeroSectionProps {
  onWatchNow?: () => void;
  onExploreJourney?: () => void;
}

export default function HeroSection({
  onWatchNow,
  onExploreJourney,
}: HeroSectionProps = {}) {
  const containerRef = useRef<HTMLElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const setIsVideoModalOpen = useAppStore((state) => state.setIsVideoModalOpen);

  const handleWatchNow = onWatchNow || (() => setIsVideoModalOpen(true));
  const handleExploreJourney =
    onExploreJourney ||
    (() => {
      const el = document.getElementById("roster");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    });

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-tag", {
        opacity: 0,
        y: -20,
        duration: 0.8,
        delay: 0.2,
      })
        .from(
          ".hero-title-line-1",
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
            skewY: 3,
          },
          "-=0.5"
        )
        .from(
          ".hero-title-line-2",
          {
            opacity: 0,
            y: 40,
            duration: 0.9,
            skewY: 3,
          },
          "-=0.7"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.6"
        )
        .from(
          ".hero-cta-group",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
            stagger: 0.1,
          },
          "-=0.5"
        )
        .from(
          ".hero-partners",
          {
            opacity: 0,
            y: 15,
            duration: 0.6,
          },
          "-=0.4"
        );

      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <section
      ref={containerRef}
      id="home"
      aria-label="Mythic SEAL Esports Arena"
      className="relative h-screen min-h-screen w-full flex items-center pt-20 sm:pt-24 pb-8 overflow-hidden"
    >
      {/* Background layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div ref={bgRef} className="relative w-full h-[120%] -top-[10%]">
          <Image
            src="/images/hero-bg.png"
            alt="Mythic SEAL Championship Arena"
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            className="object-cover object-[78%_center] sm:object-[70%_center] lg:object-right"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#060a1a] via-[#060a1a]/85 via-35% lg:via-[#060a1a]/60 lg:via-50% to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#060a1a] via-[#060a1a]/70 to-transparent z-10" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#060a1a]/80 via-[#060a1a]/40 to-transparent z-10" />
      </div>

      {/* Main hero content */}
      <div
        ref={contentRef}
        className="relative z-20 max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 w-full"
      >
        <div className="max-w-xl lg:max-w-2xl flex flex-col items-start space-y-5 sm:space-y-6">
          <span className="hero-tag font-mono text-xs font-bold tracking-[0.3em] text-[#FFC107] uppercase block">
            {"// MYTHIC SEAL ESPORTS"}
          </span>

          <div className="space-y-1">
            <h1 className="font-['Rajdhani',sans-serif] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-white uppercase leading-[0.92]">
              <span className="hero-title-line-1 block drop-shadow-[0_4px_25px_rgba(0,0,0,0.95)]">
                SEAL THE DAY.
              </span>
              <span className="hero-title-line-2 block text-transparent bg-clip-text bg-gradient-to-r from-white via-[#FFDB4D] to-[#FFC107] drop-shadow-[0_4px_30px_rgba(255,193,7,0.55)]">
                SEAL THE GLORY.
              </span>
            </h1>
          </div>

          <p className="hero-description text-slate-300 text-sm sm:text-base lg:text-lg leading-relaxed font-medium max-w-lg drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Competing at the highest level of MLBB esports.
            <br className="hidden sm:inline" />
            United as one. Driven by ruthless passion. Destined for championship glory.
          </p>

          <div className="hero-cta-group flex items-center gap-4 pt-1 flex-wrap w-full sm:w-auto">
            <button
              type="button"
              onClick={handleWatchNow}
              className="btn-scifi-primary w-full sm:w-auto text-sm sm:text-base px-6 py-3 focus-visible:ring-2 focus-visible:ring-[#FFC107]"
            >
              <span>WATCH NOW</span>
              <Play className="w-4 h-4 fill-black" />
            </button>

            <button
              type="button"
              onClick={handleExploreJourney}
              className="btn-scifi-secondary w-full sm:w-auto text-sm sm:text-base px-6 py-3 focus-visible:ring-2 focus-visible:ring-[#FFC107]"
            >
              <span>OUR JOURNEY</span>
              <ChevronRight className="w-4 h-4 text-[#FFC107]" />
            </button>
          </div>

          <div className="hero-partners pt-6 border-t border-slate-800/80 w-full max-w-md sm:max-w-lg">
            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-400 uppercase block mb-3">
              OFFICIAL TEAM PARTNERS
            </span>

            <div className="flex items-center gap-6 sm:gap-8 flex-wrap">
              <div className="h-7 relative w-24 hover:scale-105 transition-transform opacity-85 hover:opacity-100 cursor-pointer">
                <Image
                  src="/images/partners/atom-logo.png"
                  alt="ATOM Telecommunications Official Partner"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="h-7 relative w-14 hover:scale-105 transition-transform opacity-85 hover:opacity-100 cursor-pointer">
                <Image
                  src="/images/partners/kbzpay-logo.png"
                  alt="KBZ Pay Official Partner"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="h-7 relative w-20 hover:scale-105 transition-transform opacity-85 hover:opacity-100 cursor-pointer">
                <Image
                  src="/images/partners/royald-logo.png"
                  alt="Royal-D Official Partner"
                  fill
                  className="object-contain"
                />
              </div>

              <div className="h-7 relative w-24 hover:scale-105 transition-transform opacity-85 hover:opacity-100 cursor-pointer">
                <Image
                  src="/images/partners/balance-logo.png"
                  alt="Balance Fitness Official Partner"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
