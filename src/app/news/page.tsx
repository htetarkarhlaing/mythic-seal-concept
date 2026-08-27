"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight } from "lucide-react";
import { NEWS_ARTICLES } from "@/data/news";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function NewsBlogPage() {
  const [selectedCat, setSelectedCat] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    "ALL",
    "TOURNAMENT",
    "TEAM UPDATE",
    "ANNOUNCEMENT",
    "COMMUNITY",
  ];

  const featuredArticle = NEWS_ARTICLES[0];

  const filteredArticles = NEWS_ARTICLES.filter((art) => {
    const matchesCat = selectedCat === "ALL" || art.category === selectedCat;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      {/* Top Fixed Navbar */}
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Breadcrumb Navigation Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-[#FFC107] transition-colors font-medium">
              HOME
            </Link>
            <span>/</span>
            <span className="text-[#FFC107] font-bold">NEWSROOM & EDITORIAL</span>
          </div>
        </div>

        {/* Blog Hero Header */}
        <section className="relative pb-10 border-b border-slate-800/80">
          <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6">
              <div className="space-y-2">
                <span className="font-mono text-xs font-bold text-[#FFC107] uppercase tracking-[0.25em] block">
                  {"// OFFICIAL NEWSROOM"}
                </span>
                <h1 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight">
                  LATEST <span className="text-[#FFC107]">DISPATCHES</span>
                </h1>
              </div>

              <div className="relative w-full md:w-72">
                <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search articles..."
                  className="w-full bg-[#081026] border border-slate-700/80 rounded-sm pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#FFC107]"
                />
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCat(cat)}
                  className={`px-4 py-2 rounded-sm text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                    selectedCat === cat
                      ? "bg-[#FFC107] text-black shadow-[0_0_15px_rgba(255,193,7,0.35)]"
                      : "bg-[#081026] text-slate-400 hover:text-white border border-slate-800"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </section>

        {/* Featured Article Stage */}
        {selectedCat === "ALL" && !searchQuery && (
          <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <Link
              href={`/news/${featuredArticle.id}`}
              className="group block p-6 sm:p-8 rounded-sm bg-[#050b1d] border border-slate-800/90 hover:border-amber-500/80 transition-all shadow-2xl"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 relative aspect-[16/9] rounded-sm overflow-hidden bg-slate-950">
                  <Image
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#FFC107] text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-sm shadow">
                    FEATURED STORY
                  </div>
                </div>

                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="text-cyan-400 font-bold uppercase">{featuredArticle.category}</span>
                    <span>•</span>
                    <span>{featuredArticle.date}</span>
                    <span>•</span>
                    <span>{featuredArticle.readTime}</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#FFC107] transition-colors leading-tight uppercase">
                    {featuredArticle.title}
                  </h2>

                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {featuredArticle.summary}
                  </p>

                  <div className="pt-2">
                    <span className="btn-scifi-primary inline-flex items-center gap-2 text-xs">
                      <span>READ FULL STORY</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </section>
        )}

        {/* Articles Grid */}
        <section className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((art) => (
              <Link
                key={art.id}
                href={`/news/${art.id}`}
                className="group rounded-sm overflow-hidden border border-slate-800/90 hover:border-amber-500/80 bg-[#050b1d] transition-all hover:shadow-[0_0_30px_rgba(255,193,7,0.25)] hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-950">
                    <Image
                      src={art.image}
                      alt={art.title}
                      fill
                      className="object-cover group-hover:scale-106 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-black/80 border border-amber-500/50 text-[#FFC107] font-mono text-[9px] font-bold uppercase px-2 py-0.5 rounded shadow">
                      {art.category}
                    </div>
                  </div>

                  <div className="p-5 space-y-3">
                    <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                      <span>{art.date}</span>
                      <span>•</span>
                      <span>{art.readTime}</span>
                    </div>

                    <h3 className="text-base font-bold text-white group-hover:text-[#FFC107] transition-colors leading-snug line-clamp-2 uppercase">
                      {art.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed font-medium">
                      {art.summary}
                    </p>
                  </div>
                </div>

                {/* Upgraded Sci-Fi Card Footer UI */}
                <div className="px-5 py-3.5 bg-[#030612]/90 border-t border-slate-800/90 group-hover:border-amber-500/50 group-hover:bg-[#070e28] transition-all flex items-center justify-between mt-2">
                  <span className="font-['Rajdhani',sans-serif] text-xs font-bold uppercase tracking-wider text-[#FFC107] group-hover:text-white transition-colors">
                    READ ARTICLE
                  </span>

                  <div className="w-6 h-6 rounded-sm bg-amber-500/10 border border-amber-500/40 group-hover:bg-[#FFC107] group-hover:text-black text-[#FFC107] transition-all flex items-center justify-center shadow">
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
