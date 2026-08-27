"use client";

import React, { useRef, useState, useCallback } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  perspective?: number;
  scale?: number;
  glareOpacity?: number;
}

export function TiltCard({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  scale = 1.03,
  glareOpacity = 0.25,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const [transform, setTransform] = useState({
    rotateX: 0,
    rotateY: 0,
    scale: 1,
    glareX: 50,
    glareY: 50,
    glareAngle: 0,
    isHovered: false,
  });

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (prefersReducedMotion || !cardRef.current) return;

      const rect = cardRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;

      // Mouse position normalized [-1, 1] relative to center
      const mouseX = (e.clientX - rect.left) / width - 0.5;
      const mouseY = (e.clientY - rect.top) / height - 0.5;

      const rotateY = mouseX * (maxTilt * 2);
      const rotateX = -mouseY * (maxTilt * 2);

      const glareX = ((e.clientX - rect.left) / width) * 100;
      const glareY = ((e.clientY - rect.top) / height) * 100;

      const glareAngle =
        Math.atan2(
          e.clientY - (rect.top + height / 2),
          e.clientX - (rect.left + width / 2)
        ) *
          (180 / Math.PI) -
        90;

      setTransform({
        rotateX,
        rotateY,
        scale,
        glareX,
        glareY,
        glareAngle,
        isHovered: true,
      });
    },
    [maxTilt, scale, prefersReducedMotion]
  );

  const handleMouseLeave = useCallback(() => {
    setTransform((prev) => ({
      ...prev,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      isHovered: false,
    }));
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        perspective: `${perspective}px`,
        transformStyle: "preserve-3d",
      }}
      className={`relative ${className}`}
    >
      <div
        style={{
          transform: prefersReducedMotion
            ? undefined
            : `rotateX(${transform.rotateX.toFixed(2)}deg) rotateY(${transform.rotateY.toFixed(2)}deg) scale3d(${transform.scale}, ${transform.scale}, ${transform.scale})`,
          transition: transform.isHovered
            ? "transform 0.1s ease-out"
            : "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
          transformStyle: "preserve-3d",
        }}
        className="w-full h-full relative"
      >
        {children}

        {!prefersReducedMotion && (
          <div
            aria-hidden="true"
            style={{
              opacity: transform.isHovered ? glareOpacity : 0,
              background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 219, 77, 0.3) 25%, transparent 70%)`,
              transition: "opacity 0.3s ease-out",
            }}
            className="absolute inset-0 pointer-events-none rounded-[inherit] mix-blend-overlay z-30"
          />
        )}
      </div>
    </div>
  );
}
