"use client";

import React from "react";
import Image from "next/image";

interface MythicRosterCardProps {
  id: string;
  name: string;
  role: string;
  image: string;
  number?: string;
  onClick?: () => void;
  className?: string;
}

export default function MythicRosterCard({
  name,
  role,
  image,
  onClick,
  className = "",
}: MythicRosterCardProps) {
  return (
    <div
      onClick={onClick}
      className={`relative cursor-pointer group transition-all duration-400 hover:-translate-y-2.5 select-none ${className}`}
    >
      {/* Outer Card with Clean Asymmetrical Sci-Fi Silhouette */}
      <div
        className="relative w-full aspect-[3/4.6] bg-[#030717] overflow-hidden rounded-sm shadow-[0_10px_35px_rgba(0,0,0,0.9)] group-hover:shadow-[0_0_35px_rgba(255,193,7,0.5)] transition-all duration-400"
        style={{
          clipPath:
            "polygon(0 16px, 16px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 16px), calc(100% - 16px) 100%, 12px 100%, 0 calc(100% - 12px))",
        }}
      >
        {/* Full-Height Studio Portrait */}
        <Image
          src={image}
          alt={name}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />

        {/* Clean Wrapping Sci-Fi Perimeter Vector Frame */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-30"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Main Gold Perimeter Border */}
          <polygon
            points="0,6.5 6.5,0 95,0 100,5 100,93.5 93.5,100 5,100 0,95"
            fill="none"
            stroke="#FFC107"
            strokeWidth="1.8"
            vectorEffect="non-scaling-stroke"
          />

          {/* Left Side Clean Rail */}
          <line
            x1="2.5"
            y1="12"
            x2="2.5"
            y2="88"
            stroke="#FFC107"
            strokeWidth="1"
            strokeOpacity="0.4"
            vectorEffect="non-scaling-stroke"
          />

          {/* Right Side Segmented Track */}
          <line
            x1="97.5"
            y1="10"
            x2="97.5"
            y2="90"
            stroke="#FFC107"
            strokeWidth="1.2"
            strokeDasharray="16, 4, 24, 4"
            strokeOpacity="0.6"
            vectorEffect="non-scaling-stroke"
          />
        </svg>

        {/* 20% Bottom Name Overlay (Smooth Blur Gradient) */}
        <div className="absolute inset-x-0 bottom-0 h-[21%] z-20 flex flex-col justify-end pb-3 px-3 bg-gradient-to-t from-[#02050f]/90 via-[#040817]/60 via-40% via-[#040817]/20 via-75% to-transparent backdrop-blur-[3px] text-center">
          
          {/* Centered Gold Accent Line */}
          <div className="w-8 h-[1.5px] mx-auto mb-1.5 bg-gradient-to-r from-transparent via-[#FFC107] to-transparent shadow-[0_0_6px_#FFC107]" />

          {/* Player IGN */}
          <h3 className="font-['Rajdhani',sans-serif] text-base sm:text-lg font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-[#FFDB4D] to-[#FFC107] uppercase tracking-[0.14em] drop-shadow-[0_2px_8px_rgba(255,193,7,0.7)] group-hover:drop-shadow-[0_2px_14px_rgba(255,219,77,0.95)] transition-all leading-tight">
            {name}
          </h3>

          {/* Role Subtitle */}
          <span className="font-['Rajdhani',sans-serif] text-[9px] sm:text-[10px] font-bold text-slate-200 uppercase tracking-widest block mt-0.5 drop-shadow leading-none">
            {role}
          </span>
        </div>

      </div>
    </div>
  );
}
