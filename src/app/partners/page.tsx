"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CheckCircle2,
  Send,
  Trophy,
  Building2,
  Mail,
  Sparkles,
  TrendingUp,
  Tv,
  Users2,
} from "lucide-react";
import { cyberAudio } from "@/lib/audioSynthesizer";

const CURRENT_PARTNERS = [
  {
    id: "atom",
    name: "ATOM MYANMAR",
    category: "Official 5G & Telecommunications Partner",
    logo: "/images/partners/atom-logo.png",
    description:
      "Powering Mythic SEAL with dedicated ultra-low latency 5G connectivity for official tournament broadcasts and daily training bootcamps.",
    since: "2024",
    statBadge: "15ms Bootcamp Ping",
    activations: [
      "Dedicated 5G Tournament Arena Uplink",
      "Nationwide Fan Mobile Data Bundles",
      "Community Grassroots MLBB Cups",
    ],
  },
  {
    id: "kbzpay",
    name: "KBZPAY",
    category: "Official Digital Payment & Fintech Partner",
    logo: "/images/partners/kbzpay-logo.png",
    description:
      "Empowering seamless official merchandise commerce, digital fan club ticketing, and exclusive cashback vouchers for supporters.",
    since: "2025",
    statBadge: "10% Fan Cashback",
    activations: [
      "1-Tap Official Armory Storefront Checkout",
      "Exclusive Matchday Discount 'KBZPAY10'",
      "VIP Fan Meet & Greet Priority Access",
    ],
  },
  {
    id: "royald",
    name: "ROYAL-D",
    category: "Official Performance Hydration Partner",
    logo: "/images/partners/royald-logo.png",
    description:
      "Providing scientific electrolyte balance and hydration fueling lightning-fast cognitive reflexes during grueling Best-of-5 championship matches.",
    since: "2024",
    statBadge: "Championship Hydration",
    activations: [
      "Official Stage Matchday Hydration",
      "Athlete Endurance & Stamina Training",
      "Fan Booth Refreshment Zones",
    ],
  },
  {
    id: "balance",
    name: "BALANCE FITNESS",
    category: "Official Athletic & Ergonomics Partner",
    logo: "/images/partners/balance-logo.png",
    description:
      "Delivering world-class physical conditioning, posture optimization, and injury prevention programs across state-of-the-art Yangon training centers.",
    since: "2025",
    statBadge: "Pro Conditioning",
    activations: [
      "Personalized Esports Ergonomics",
      "Cardiovascular Stamina Sessions",
      "Mental Focus & Recovery Workshops",
    ],
  },
];

const SPONSORSHIP_TIERS = [
  {
    tier: "TITLE PARTNER",
    subtitle: "Exclusive Headline Naming & Main Jersey Chest",
    featured: true,
    deliverables: [
      "Prominent Front-and-Center Pro Jersey Chest Branding",
      "Official Team Co-Branding ('Mythic SEAL presented by [Brand]')",
      "Broadcast Stream Overlays & Matchday In-Game HUD Real Estate",
      "Full Commercial Exclusivity in Category (Telecom / Banking / Tech)",
      "VIP Fan Booth Activations & LAN Meet-and-Greet Title Rights",
      "Dedicated Social Media Production Campaigns (1.2M+ Reach)",
    ],
  },
  {
    tier: "OFFICIAL KIT PARTNER",
    subtitle: "High-Visibility Jersey Sleeve & Media Backdrop",
    featured: false,
    deliverables: [
      "Pro Jersey Shoulder & Upper Sleeve Logo Placements",
      "Official Press Conference & Post-Match Interview Backdrop",
      "Official Storefront Product & Payment Gateway Integration",
      "Co-Branded Match Day Highlight Video Sponsorship",
      "VIP Tournament Hospitality & Finals Stage Access Tickets",
      "Athlete Social Media Endorsements & Product Placements",
    ],
  },
  {
    tier: "COMMERCIAL ALLIANCE",
    subtitle: "Digital Reach & Fan Community Integrations",
    featured: false,
    deliverables: [
      "Official Website & Armory Storefront Brand Partner Listing",
      "VOD Replay Naming Rights ('Play of the Game sponsored by [Brand]')",
      "Community Weekly Tournament Segment Integration",
      "Direct Brand Promos in Official Fan Newsletter & Discord",
      "Custom Co-Branded Digital Giveaways & Merchant Rewards",
    ],
  },
];

const AUDIENCE_STATS = [
  {
    icon: Users2,
    stat: "1,200,000+",
    label: "Monthly Digital Impressions",
    detail: "High-engagement reach across Facebook, TikTok & YouTube",
  },
  {
    icon: TrendingUp,
    stat: "86%",
    label: "Gen-Z & Millennial Audience",
    detail: "Ages 16–32 active gamers and digital consumers",
  },
  {
    icon: Tv,
    stat: "85,000+",
    label: "Peak Live Broadcast Viewers",
    detail: "Concurrent viewership during MSL and regional finals",
  },
  {
    icon: Sparkles,
    stat: "14.2%",
    label: "Average Interaction Rate",
    detail: "Top-tier community loyalty and social engagement",
  },
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
    cyberAudio.playSuccess();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Navigation Breadcrumbs */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400 pb-4 border-b border-slate-800">
            <Link href="/" className="hover:text-[#FFC107] transition-colors font-medium">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FFC107] font-bold">PARTNERSHIPS & ALLIANCES</span>
          </div>
        </div>

        {/* 1. Executive Hero Section */}
        <section className="relative pb-14 sm:pb-20 border-b border-slate-800/80 overflow-hidden">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-[#FFC107] text-xs font-mono font-bold uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>COMMERCIAL PARTNERSHIP PORTAL 2026</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tight text-white leading-tight max-w-4xl">
              POWERING MYANMAR’S <span className="text-[#FFC107]">ESPORTS DYNASTY</span>
            </h1>

            <p className="text-slate-300 text-sm sm:text-base lg:text-lg max-w-2xl mt-4 font-medium leading-relaxed">
              We collaborate with visionary brands to elevate professional esports in Southeast Asia, connecting directly with millions of passionate gamers through authentic digital storytelling and championship performances.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <a
                href="#inquiry"
                onClick={() => cyberAudio.playClick()}
                className="btn-scifi-primary !py-3 !px-6 text-xs"
              >
                <span>BECOME A PARTNER</span>
              </a>
              <a
                href="#tiers"
                onClick={() => cyberAudio.playClick()}
                className="px-6 py-3 rounded-sm bg-[#081026] border border-slate-700 hover:border-amber-400 text-white text-xs font-bold uppercase tracking-wider transition-colors"
              >
                VIEW PACKAGES
              </a>
            </div>

          </div>
        </section>

        {/* 2. Key Audience Demographics & Reach */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest block">
              {"// PROVEN DIGITAL REACH"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              AUDIENCE & ENGAGEMENT METRICS
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Direct access to Myanmar’s most engaged youth and digital consumer demographic.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AUDIENCE_STATS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-lg bg-[#050b1d] border border-slate-800 hover:border-amber-500/50 transition-all space-y-3 shadow-lg"
                >
                  <div className="w-10 h-10 rounded-md bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-3xl font-black text-white font-mono block">
                      {item.stat}
                    </span>
                    <h3 className="text-xs font-bold text-[#FFC107] uppercase tracking-wider mt-1">
                      {item.label}
                    </h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed font-medium">
                    {item.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 3. Official Brand Partners Showcase */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="flex items-center justify-between mb-10 pb-3 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest block">
                {"// VERIFIED COMMERCIAL ALLIANCES"}
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
                OUR PROUD PARTNERS
              </h2>
            </div>
            <span className="text-xs font-bold text-slate-400 font-mono hidden sm:block">
              2026 COMPETITIVE SEASON
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CURRENT_PARTNERS.map((partner) => (
              <div
                key={partner.id}
                className="p-6 sm:p-8 rounded-lg bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/80 transition-all flex flex-col justify-between shadow-xl group"
              >
                <div className="space-y-4">
                  {/* Top Bar: Logo & Stat Badge */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                    <div className="relative h-10 w-32">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain object-left"
                      />
                    </div>
                    <span className="px-2.5 py-1 rounded bg-black/60 border border-amber-500/40 text-[#FFC107] font-mono text-xs font-bold">
                      {partner.statBadge}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider block">
                      {partner.category}
                    </span>
                    <h3 className="text-xl font-black text-white uppercase tracking-wide mt-1">
                      {partner.name}
                    </h3>
                    <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mt-2 font-medium">
                      {partner.description}
                    </p>
                  </div>
                </div>

                {/* Activations List */}
                <div className="pt-5 mt-5 border-t border-slate-800 space-y-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block font-mono">
                    CO-BRANDED ACTIVATIONS:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {partner.activations.map((act, i) => (
                      <div
                        key={i}
                        className="p-2 rounded bg-black/40 border border-slate-800/80 text-[11px] text-slate-300 font-medium leading-snug"
                      >
                        ✓ {act}
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </section>

        {/* 4. Sponsorship Tiers & Deliverables */}
        <section id="tiers" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-slate-800/80">
          <div className="text-center max-w-xl mx-auto mb-12">
            <span className="text-xs font-mono font-bold text-[#FFC107] uppercase tracking-widest block">
              {"// COMMERCIAL DELIVERABLES"}
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase mt-1">
              SPONSORSHIP TIERS & PACKAGES
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Flexible partnership tiers designed to meet your brand’s marketing and commercial goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            {SPONSORSHIP_TIERS.map((tier, idx) => (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-lg border transition-all flex flex-col justify-between ${
                  tier.featured
                    ? "bg-gradient-to-b from-[#0d1c4a] to-[#050b1e] border-amber-500/80 shadow-[0_0_40px_rgba(255,193,7,0.25)] relative"
                    : "bg-[#050b1d] border-slate-800/90 hover:border-slate-700"
                }`}
              >
                {tier.featured && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFC107] text-black text-[10px] font-black uppercase px-3 py-0.5 rounded-full shadow">
                    PREMIER EXCLUSIVE
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase tracking-tight">
                        {tier.tier}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1">
                        {tier.subtitle}
                      </p>
                    </div>
                    {tier.featured && <Trophy className="w-6 h-6 text-[#FFC107]" />}
                  </div>

                  <ul className="space-y-2.5 pt-4 border-t border-slate-800/80 text-xs text-slate-300 font-medium">
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#FFC107] shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800/80">
                  <a
                    href="#inquiry"
                    onClick={() => {
                      cyberAudio.playClick();
                      setFormData((prev) => ({ ...prev, tier: tier.tier }));
                    }}
                    className={
                      tier.featured
                        ? "btn-scifi-primary w-full text-center block"
                        : "w-full py-2.5 rounded-sm bg-[#081026] border border-slate-700 hover:border-amber-400 text-white text-xs font-bold uppercase tracking-wider transition-colors text-center block"
                    }
                  >
                    INQUIRE ABOUT {tier.tier}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. Executive Inquiry Portal */}
        <section id="inquiry" className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Contact Info & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.25em] block">
                  {"// COMMERCIAL DESK"}
                </span>
                <h2 className="text-3xl sm:text-4xl font-black uppercase text-white tracking-tight mt-1">
                  LET’S BUILD A <span className="text-[#FFC107]">WINNING ALLIANCE</span>
                </h2>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed font-medium">
                Our commercial team works closely with partners to build custom activations that resonate with Myanmar’s esports community. Submit your inquiry below to receive our confidential 2026 Commercial Deck.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 p-3 rounded bg-[#050b1d] border border-slate-800 text-xs text-slate-300">
                  <Mail className="w-4 h-4 text-[#FFC107]" />
                  <span>Direct Commercial Email: <strong>partnerships@mythicseal.gg</strong></span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded bg-[#050b1d] border border-slate-800 text-xs text-slate-300">
                  <Building2 className="w-4 h-4 text-cyan-400" />
                  <span>Headquarters: <strong>Yangon Gaming Center, Myanmar</strong></span>
                </div>
              </div>
            </div>

            {/* Right: Clean B2B Form */}
            <div className="lg:col-span-7 p-6 sm:p-8 rounded-lg bg-[#050b1e] border border-slate-800 shadow-2xl">
              {submitted ? (
                <div className="p-8 text-center space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-[#FFC107] mx-auto animate-bounce" />
                  <h3 className="text-2xl font-black text-white uppercase">
                    PROPOSAL RECEIVED
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-sm mx-auto">
                    Thank you, {formData.contactName || "partner"}. Our commercial director will contact you at <strong>{formData.email}</strong> within 24 hours with our complete Media Deck.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="btn-scifi-secondary text-xs !py-2 !px-4"
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        COMPANY / BRAND NAME *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. ATOM Myanmar"
                        className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        CONTACT PERSON *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactName}
                        onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                        placeholder="Your full name"
                        className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107] transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        OFFICIAL BUSINESS EMAIL *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="partner@company.com"
                        className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107] transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                        TARGET PARTNERSHIP TIER
                      </label>
                      <select
                        value={formData.tier}
                        onChange={(e) => setFormData({ ...formData, tier: e.target.value })}
                        className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                      >
                        <option value="TITLE PARTNER">TITLE PARTNER (MAIN JERSEY CHEST)</option>
                        <option value="OFFICIAL KIT PARTNER">OFFICIAL KIT PARTNER (SLEEVES)</option>
                        <option value="COMMERCIAL ALLIANCE">COMMERCIAL ALLIANCE (DIGITAL)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      ANNUAL PARTNERSHIP BUDGET (USD)
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2.5 text-xs text-white focus:outline-none focus:border-[#FFC107] transition-colors"
                    >
                      <option>$5,000 - $10,000</option>
                      <option>$10,000 - $25,000</option>
                      <option>$25,000 - $50,000</option>
                      <option>$50,000+ (Premier Title Sponsor)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1">
                      COMMERCIAL OBJECTIVES & NOTES
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share your brand objectives, timeline, or specific activation ideas..."
                      className="w-full bg-[#081026] border border-slate-800 rounded px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107] transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-scifi-primary w-full !py-3.5"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT SPONSORSHIP PROPOSAL</span>
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
