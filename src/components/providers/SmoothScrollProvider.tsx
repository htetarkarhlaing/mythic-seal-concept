"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useReducedMotion } from "@/hooks/useReducedMotion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextType {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
});

export function useSmoothScroll() {
  return useContext(SmoothScrollContext);
}

interface SmoothScrollProviderProps {
  children: React.ReactNode;
}

/**
 * Enterprise Lenis + GSAP synchronization provider.
 * Synchronizes Lenis inertial physics with GSAP RAF Ticker for 60/120 FPS render loops.
 * Automatically respects WCAG prefers-reduced-motion.
 */
export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    // Connect Lenis scroll event to GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // Bind Lenis RAF to GSAP Ticker for locked-frame synchronization
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, [prefersReducedMotion]);

  return (
    <SmoothScrollContext.Provider value={{ lenis: lenisInstance }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}
