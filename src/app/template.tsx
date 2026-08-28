"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export default function Template({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (prefersReducedMotion || !containerRef.current) return;

      // Senior Animation Designer: Silky 60fps cinematic page entrance
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 18,
          scale: 0.995,
          filter: "blur(4px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 0.42,
          ease: "power2.out",
          clearProps: "all",
        }
      );
    },
    { scope: containerRef, dependencies: [prefersReducedMotion] }
  );

  return (
    <div ref={containerRef} className="flex-grow flex flex-col w-full">
      {children}
    </div>
  );
}
