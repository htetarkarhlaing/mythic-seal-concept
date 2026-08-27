"use client";

import React, { useEffect, useState, Suspense } from "react";
import { usePathname, useSearchParams } from "next/navigation";

function ProgressBarInner() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let active = true;

    const startTimer = setTimeout(() => {
      if (!active) return;
      setIsVisible(true);
      setProgress(35);
    }, 0);

    const stepTimer = setTimeout(() => {
      if (!active) return;
      setProgress(75);
    }, 120);

    const completeTimer = setTimeout(() => {
      if (!active) return;
      setProgress(100);
      setTimeout(() => {
        if (!active) return;
        setIsVisible(false);
        setProgress(0);
      }, 200);
    }, 280);

    return () => {
      active = false;
      clearTimeout(startTimer);
      clearTimeout(stepTimer);
      clearTimeout(completeTimer);
    };
  }, [pathname, searchParams]);

  if (!isVisible && progress === 0) return null;

  return (
    <div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 z-[9999] h-[2.5px] pointer-events-none bg-transparent"
    >
      <div
        style={{
          width: `${progress}%`,
          transition: "width 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.2s ease-out",
          opacity: isVisible ? 1 : 0,
        }}
        className="h-full bg-gradient-to-r from-cyan-400 via-[#FFDB4D] to-[#FFC107] shadow-[0_0_12px_#FFC107,0_0_4px_#22d3ee]"
      />
    </div>
  );
}

export function RouteProgressBar() {
  return (
    <Suspense fallback={null}>
      <ProgressBarInner />
    </Suspense>
  );
}
