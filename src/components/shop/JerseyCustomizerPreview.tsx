"use client";

import React from "react";

interface JerseyCustomizerPreviewProps {
  customName?: string;
  customNumber?: string;
  className?: string;
}

export function JerseyCustomizerPreview({
  customName = "GALAXY",
  customNumber = "07",
  className = "",
}: JerseyCustomizerPreviewProps) {
  const displayName = (customName.trim() || "PLAYER").toUpperCase();
  const displayNumber = (customNumber.trim() || "00").toUpperCase();

  return (
    <div
      className={`relative flex flex-col items-center justify-center p-4 bg-gradient-to-b from-[#060b1c] to-[#02050f] rounded-lg border border-amber-500/40 shadow-[0_0_40px_rgba(255,193,7,0.15)] ${className}`}
    >
      <div className="text-[10px] font-mono font-bold tracking-[0.25em] text-[#FFC107] uppercase mb-2">
        {"// LIVE 3D PROJECTION"}
      </div>

      <svg
        viewBox="0 0 400 480"
        className="w-full max-w-[280px] h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.8)]"
      >
        <defs>
          {/* Gold metallic gradient */}
          <linearGradient id="goldMetallic" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="30%" stopColor="#FFDB4D" />
            <stop offset="70%" stopColor="#FFC107" />
            <stop offset="100%" stopColor="#B38600" />
          </linearGradient>

          {/* Cyber fabric pattern */}
          <pattern
            id="cyberFabric"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0h8v8H0z"
              fill="#060a1a"
            />
            <circle cx="4" cy="4" r="0.8" fill="#141e3d" />
          </pattern>
        </defs>

        {/* Jersey Silhouette Back View */}
        <path
          d="M130 40 Q200 65 270 40 L370 120 L320 180 L290 150 L290 440 L110 440 L110 150 L80 180 L30 120 Z"
          fill="url(#cyberFabric)"
          stroke="#1e293b"
          strokeWidth="2"
        />

        {/* Gold Trim Accents */}
        {/* Collar trim */}
        <path
          d="M130 40 Q200 65 270 40"
          fill="none"
          stroke="url(#goldMetallic)"
          strokeWidth="6"
        />
        {/* Side Stripes */}
        <path
          d="M110 160 L110 440"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
          strokeDasharray="12 4"
        />
        <path
          d="M290 160 L290 440"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
          strokeDasharray="12 4"
        />

        {/* Sleeve Bands */}
        <path
          d="M30 120 L80 180"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
        />
        <path
          d="M370 120 L320 180"
          stroke="url(#goldMetallic)"
          strokeWidth="4"
        />

        {/* Sponsor Banner (Upper Back) */}
        <text
          x="200"
          y="105"
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="10"
          fontFamily="'Rajdhani', sans-serif"
          fontWeight="bold"
          letterSpacing="4"
        >
          MYTHIC SEAL ESPORTS
        </text>

        {/* Player Custom Name */}
        <text
          x="200"
          y="155"
          textAnchor="middle"
          fill="url(#goldMetallic)"
          fontSize={displayName.length > 8 ? "20" : "24"}
          fontFamily="'Rajdhani', sans-serif"
          fontWeight="900"
          letterSpacing="3"
        >
          {displayName}
        </text>

        {/* Player Custom Number */}
        <text
          x="200"
          y="280"
          textAnchor="middle"
          fill="url(#goldMetallic)"
          fontSize="110"
          fontFamily="'Rajdhani', sans-serif"
          fontWeight="900"
          letterSpacing="-2"
        >
          {displayNumber}
        </text>

        {/* Lower Seal Motto */}
        <text
          x="200"
          y="370"
          textAnchor="middle"
          fill="#64748b"
          fontSize="9"
          fontFamily="'Rajdhani', sans-serif"
          fontWeight="bold"
          letterSpacing="3"
        >
          SEAL THE GLORY • 2026
        </text>
      </svg>
    </div>
  );
}
