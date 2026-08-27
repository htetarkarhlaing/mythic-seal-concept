"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ShoppingBag, Volume2, VolumeX } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useAppStore } from "@/store/useAppStore";
import { cyberAudio } from "@/lib/audioSynthesizer";

export default function Navbar() {
  const { totalCount, setIsCartOpen } = useCart();
  const isSoundEnabled = useAppStore((s) => s.isSoundEnabled);
  const setIsSoundEnabled = useAppStore((s) => s.setIsSoundEnabled);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleAudio = () => {
    const nextState = !isSoundEnabled;
    setIsSoundEnabled(nextState);
    if (nextState) {
      cyberAudio.playSuccess();
    }
  };

  const links = [
    { label: "HOME", href: "/" },
    { label: "ABOUT", href: "/about" },
    { label: "ROSTER", href: "/roster" },
    { label: "NEWS", href: "/news" },
    { label: "MATCHES", href: "/matches" },
    { label: "PARTNERS", href: "/partners" },
    { label: "SHOP", href: "/shop" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 w-full z-50 bg-[#060a1a]/90 backdrop-blur-lg border-b border-slate-800/80">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo & Wordmark (Left) */}
        <Link href="/" className="flex items-center gap-3.5 group">
          <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/80 shadow-[0_0_20px_rgba(255,193,7,0.35)] bg-black transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/images/logo.png"
              alt="Mythic SEAL"
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-['Rajdhani',sans-serif] tracking-[0.2em] text-lg sm:text-xl font-black text-white uppercase leading-none">
              MYTHIC
            </span>
            <span className="font-['Rajdhani',sans-serif] tracking-[0.25em] text-xs font-bold text-[#FFC107] uppercase mt-0.5 leading-none">
              SEAL
            </span>
          </div>
        </Link>

        {/* Center Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-9">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-xs font-['Rajdhani',sans-serif] font-bold tracking-widest text-slate-300 hover:text-[#FFC107] uppercase transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Controls: Audio Toggle & Cart Button */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Audio FX Toggle Button */}
          <button
            onClick={toggleAudio}
            className="p-2.5 rounded bg-slate-900/90 border border-slate-800 hover:border-amber-500/60 text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
            title={isSoundEnabled ? "Sound Effects Enabled (Click to Mute)" : "Sound Effects Muted (Click to Enable)"}
            aria-label="Toggle Sound Effects"
          >
            {isSoundEnabled ? (
              <Volume2 className="w-4 h-4 text-[#FFC107]" />
            ) : (
              <VolumeX className="w-4 h-4 text-slate-500" />
            )}
          </button>

          {/* Cart Drawer Button */}
          <button
            onClick={() => setIsCartOpen(true)}
            className="relative p-2.5 rounded bg-slate-900/90 border border-slate-700 hover:border-amber-500 text-slate-300 hover:text-[#FFC107] transition-all cursor-pointer shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center gap-2 px-3.5"
            title="Open Shopping Cart"
          >
            <ShoppingBag className="w-4 h-4 text-[#FFC107]" />
            <span className="font-['Rajdhani',sans-serif] text-xs font-bold tracking-wider text-slate-200 uppercase">
              CART
            </span>
            {totalCount > 0 && (
              <span className="bg-[#FFC107] text-black font-['Rajdhani',sans-serif] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center shadow ml-0.5">
                {totalCount}
              </span>
            )}
          </button>
        </div>

        {/* Mobile menu and controls */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={toggleAudio}
            className="p-2 text-slate-400 hover:text-amber-400"
            aria-label="Toggle Sound Effects"
          >
            {isSoundEnabled ? (
              <Volume2 className="w-5 h-5 text-[#FFC107]" />
            ) : (
              <VolumeX className="w-5 h-5 text-slate-500" />
            )}
          </button>
          <button
            onClick={() => setIsCartOpen(true)}
            className="p-2 text-amber-400 relative"
            aria-label="Open Shopping Cart"
          >
            <ShoppingBag className="w-5 h-5" />
            {totalCount > 0 && (
              <span className="absolute top-0 right-0 bg-[#FFC107] text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                {totalCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-amber-400"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#040817]/95 border-b border-amber-500/30 px-6 py-4 space-y-3 backdrop-blur-xl">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-slate-200 hover:text-amber-400 uppercase py-1"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
