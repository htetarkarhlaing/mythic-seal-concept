"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, Send, Trophy } from "lucide-react";

const PARTNERS = [
  {
    id: "atom",
    name: "ATOM",
    role: "OFFICIAL 5G TELECOM & NETWORK PARTNER",
    logo: "/images/partners/atom-logo.png",
    desc: "Powering Mythic SEAL's bootcamp and tournament live streams with ultra-low latency 5G connectivity across Myanmar.",
    initiatives: ["Ultra-Low Ping Gaming Fiber", "Fan Data Bundles & Rewards", "Community LAN Tournaments"],
    since: "2024",
    stat: "15ms Ultra-Low Ping",
  },
  {
    id: "kbzpay",
    name: "KBZ PAY",
    role: "OFFICIAL DIGITAL WALLET & COMMERCE PARTNER",
    logo: "/images/partners/kbzpay-logo.png",
    desc: "Seamless 1-tap merchandise checkout, fan membership ticketing, and exclusive team cashback promotions.",
    initiatives: ["Exclusive Fan Cashback 'KBZPAY10'", "Official Storefront Payment Gateway", "VIP Meet & Greet Passes"],
    since: "2025",
    stat: "10% Cashback Voucher",
  },
  {
    id: "royald",
    name: "ROYAL-D",
    role: "OFFICIAL HYDRATION & ELECTROLYTE PARTNER",
    logo: "/images/partners/royald-logo.png",
    desc: "Fueling peak cognitive reaction times and stamina for our 5 athletes during grueling 5-game championship series.",
    initiatives: ["Tournament Matchday Energy Fuel", "Athlete Hydration Science", "Esports Fitness Bootcamp"],
    since: "2024",
    stat: "Matchday Energy Fuel",
  },
  {
    id: "balance",
    name: "BALANCE FITNESS",
    role: "OFFICIAL ATHLETIC TRAINING & GYM PARTNER",
    logo: "/images/partners/balance-logo.png",
    desc: "Comprehensive physical conditioning, posture optimization, and injury prevention at state-of-the-art gyms in Yangon.",
    initiatives: ["Pro Athlete Ergonomics", "Custom Esports Fitness Regime", "Mental Clarity & Recovery Sessions"],
    since: "2025",
    stat: "Pro Physical Conditioning",
  },
];

const SPONSORSHIP_TIERS = [
  {
    tier: "TITLE PARTNER",
    badge: "TIER 1 • EXCLUSIVE",
    highlight: true,
    features: [
      "Prominent Main Jersey Chest Real Estate",
      "Full Broadcast Overlay & Stream Naming Rights",
      "Dedicated Social Media Brand Integration Campaigns",
      "VIP Fan Meet & Greet Activations & Booth Rights",
      "Exclusive Commercial Product Endorsements",
    ],
  },
  {
    tier: "OFFICIAL JERSEY PARTNER",
    badge: "TIER 2 • HIGH IMPACT",
    highlight: false,
    features: [
      "Jersey Shoulder & Sleeve Logo Placement",
      "Official Press Backdrop & Interview Logo",
      "Social Media Co-Branded Content & Giveaways",
      "Official Storefront Payment / Product Integration",
      "Event Ticket & VIP Hospitality Access",
    ],
  },
  {
    tier: "COMMERCIAL ALLIANCE",
    badge: "TIER 3 • DIGITAL REACH",
    highlight: false,
    features: [
      "Official Website & Storefront Brand Listing",
      "Matchday VOD Replay & Highlight Sponorship",
      "Community Tournament Naming Segments",
      "Fan Club Newsletter Brand Banner",
      "Player Social Media Mentions & Shoutouts",
    ],
  },
];

const AUDIENCE_METRICS = [
  { label: "MONTHLY DIGITAL IMPRESSIONS", value: "1.2M+", sub: "Across Facebook, YouTube & TikTok" },
  { label: "GEN-Z & YOUTH DEMOGRAPHIC", value: "86%", sub: "Age 16 - 32 Active Gamers" },
  { label: "PEAK TOURNAMENT BROADCAST", value: "85K+", sub: "Concurrent Live Viewers" },
  { label: "FAN ENGAGEMENT RATE", value: "14.2%", sub: "Industry-leading interaction in MM" },
];

export default function PartnersPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    tier: "TITLE PARTNER",
    budget: "$10,000 - $25,000",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Standardized Breadcrumb Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#FFC107] transition-colors font-medium">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FFC107] font-bold">PARTNERSHIPS</span>
          </div>
        </div>

        {/* 1. Partners Hero */}
        <section className="relative pb-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden text-center flex flex-col items-center">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
            
            <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.3em] mb-2 block">
              {"// STRATEGIC & COMMERCIAL ALLIANCES"}
            </span>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight max-w-3xl">
              POWERING THE <span className="text-[#FFC107]">DYNASTY</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mt-4 font-medium leading-relaxed">
              We partner with industry-leading brands to fuel championship victories and connect directly with Myanmar’s fastest-growing youth and esports demographic.
            </p>

            {/* Impact Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 w-full max-w-4xl">
              {AUDIENCE_METRICS.map((metric, i) => (
                <div key={i} className="p-4 sm:p-5 rounded-sm bg-[#050b1d] border border-slate-800 text-center space-y-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#FFC107] block font-mono">
                    {metric.value}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-200 font-bold uppercase tracking-wider block">
                    {metric.label}
                  </span>
                  <span className="text-[10px] text-slate-400 block font-normal">
                    {metric.sub}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 2. Official Partners Showcase Cards */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              OFFICIAL TEAM <span className="text-[#FFC107]">PARTNERS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-6 sm:p-8 rounded-sm bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/80 transition-all space-y-5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4 mb-4">
                    <div className="relative h-10 w-32">
                      <Image src={partner.logo} alt={partner.name} fill className="object-contain object-left" />
                    </div>
                    <span className="font-mono text-xs text-[#FFC107] font-bold px-2.5 py-0.5 rounded bg-black/60 border border-amber-500/40">
                      {partner.stat}
                    </span>
                  </div>

                  <span className="text-xs font-bold text-[#FFC107] tracking-wider uppercase block">
                    {partner.role}
                  </span>

                  <h3 className="text-xl font-black text-white uppercase tracking-wide mt-1">
                    {partner.name}
                  </h3>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                    {partner.desc}
                  </p>
                </div>

                {/* Key Initiatives */}
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">
                    CO-BRANDED ACTIVATIONS
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {partner.initiatives.map((item, i) => (
                      <div
                        key={i}
                        className="p-2 rounded bg-black/50 border border-slate-800 text-[11px] text-slate-300 font-medium"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 3. Sponsorship Tiers & Package Comparison */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-8 pb-3 border-b border-slate-800">
            <h2 className="text-xl sm:text-2xl font-black tracking-[0.2em] text-white uppercase">
              SPONSORSHIP <span className="text-[#FFC107]">PACKAGES & TIERS</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPONSORSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-sm border transition-all flex flex-col justify-between ${
                  tier.highlight
                    ? "bg-[#09153a] border-amber-500/80 shadow-[0_0_35px_rgba(255,193,7,0.3)]"
                    : "bg-[#050b1d] border-slate-800/90 hover:border-slate-700"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-widest px-2.5 py-0.5 rounded bg-black/60 border border-amber-500/40">
                      {tier.badge}
                    </span>
                    {tier.highlight && <Trophy className="w-5 h-5 text-[#FFC107]" />}
                  </div>

                  <h3 className="text-2xl font-black text-white uppercase tracking-wide">
                    {tier.tier}
                  </h3>

                  <ul className="space-y-2.5 pt-2 border-t border-slate-800/80 text-xs text-slate-300">
                    {tier.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <a
                    href="#inquiry"
                    className={tier.highlight ? "btn-scifi-primary w-full text-center block" : "btn-scifi-secondary w-full text-center block"}
                  >
                    SELECT {tier.tier}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. Sponsorship Inquiry Form */}
        <section id="inquiry" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.25em] block">
                  {"// COMMERCIAL PROPOSALS"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight">
                  PARTNER WITH <span className="text-[#FFC107]">MYTHIC SEAL</span>
                </h2>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Elevate your brand presence across Myanmar and Southeast Asia. Submit your commercial objectives and our sponsorship director will send you our complete 2026 Media Deck within 24 hours.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                  <span>Guaranteed 100K+ Matchday Broadcast Impressions</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                  <span>Custom Retail Cashback & Merchant Activations</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0" />
                  <span>Pro Athlete Endorsement Content & Photo Shoots</span>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-sm bg-[#050b1d] border border-slate-800/90 shadow-2xl">
              {submitted ? (
                <div className="p-8 text-center space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-[#FFC107] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-bold text-white uppercase">INQUIRY RECEIVED</h3>
                  <p className="text-xs text-slate-300 max-w-sm mx-auto">
                    Thank you. Our commercial partnerships executive will contact you at {formData.email} within 24 hours with our complete 2026 Sponsorship Deck.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        COMPANY / BRAND NAME
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Acme Corporation"
                        className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        CONTACT PERSON
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        BUSINESS EMAIL
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="partner@company.com"
                        className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        PARTNERSHIP TIER
                      </label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFC107]"
                      >
                        <option>TITLE PARTNER (MAIN JERSEY CHEST)</option>
                        <option>OFFICIAL JERSEY PARTNER (SLEEVES)</option>
                        <option>COMMERCIAL ALLIANCE (DIGITAL & STREAM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      ESTIMATED ANNUAL BUDGET (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFC107]"
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+ (Title Sponsor)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      PROPOSAL NOTES / OBJECTIVES
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your target audience and sponsorship goals..."
                      className="w-full bg-[#081026] border border-slate-700/80 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-scifi-primary w-full !py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT SPONSORSHIP INQUIRY</span>
                  </button>
                </form>
              )}
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
