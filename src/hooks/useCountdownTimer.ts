"use client";

import { useState, useEffect, useRef } from "react";
import { TimerTickPayload } from "@/workers/timerWorker";

export function useCountdownTimer(targetDateIso: string): TimerTickPayload {
  const [timeLeft, setTimeLeft] = useState<TimerTickPayload>(() => {
    const diff = Math.max(0, new Date(targetDateIso).getTime() - Date.now());
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((diff % (1000 * 60)) / 1000),
      isComplete: diff <= 0,
    };
  });

  const workerRef = useRef<Worker | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    try {
      workerRef.current = new Worker(
        new URL("../workers/timerWorker.ts", import.meta.url),
        { type: "module" }
      );

      workerRef.current.onmessage = (e: MessageEvent<TimerTickPayload>) => {
        setTimeLeft(e.data);
      };

      workerRef.current.postMessage({
        command: "START",
        targetDateIso,
      });
    } catch {
      // Fallback to setInterval if Web Workers are restricted
      const interval = setInterval(() => {
        const diff = Math.max(0, new Date(targetDateIso).getTime() - Date.now());
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((diff % (1000 * 60)) / 1000),
          isComplete: diff <= 0,
        });
      }, 1000);

      return () => clearInterval(interval);
    }

    return () => {
      if (workerRef.current) {
        workerRef.current.postMessage({ command: "STOP" });
        workerRef.current.terminate();
      }
    };
  }, [targetDateIso]);

  return timeLeft;
}
