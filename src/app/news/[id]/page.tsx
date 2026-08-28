import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Tag,
  Flame,
} from "lucide-react";
import { NEWS_ARTICLES } from "@/data/news";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArticleInteraction from "@/components/ArticleInteraction";

interface ArticlePageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return NEWS_ARTICLES.map((a) => ({ id: a.id }));
}

export async function generateMetadata({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = NEWS_ARTICLES.find((a) => a.id.toLowerCase() === id.toLowerCase());
  if (!article) return { title: "Article Not Found | Mythic SEAL" };

  return {
    title: `${article.title} | Mythic SEAL MLBB News`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = NEWS_ARTICLES.find((a) => a.id.toLowerCase() === id.toLowerCase());

  if (!article) {
    notFound();
  }

  const relatedArticles = NEWS_ARTICLES.filter((a) => a.id !== article.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <div className="flex items-center justify-between pb-4 text-xs text-slate-400 border-b border-slate-800">
            <div className="flex items-center gap-2">
              <Link href="/" className="hover:text-[#FFC107] transition-colors">
                HOME
              </Link>
              <span>/</span>
              <Link href="/news" className="hover:text-[#FFC107] transition-colors">
                NEWSROOM
              </Link>
              <span>/</span>
              <span className="text-[#FFC107] font-bold uppercase truncate max-w-[200px] sm:max-w-md">
                {article.title}
              </span>
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#FFC107] font-bold uppercase transition-colors shrink-0 ml-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>BACK TO NEWS</span>
            </Link>
          </div>
        </div>

        {/* 2-Column Editorial Grid Layout */}
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            
            {/* Left 8 Columns: Main Article */}
            <article className="lg:col-span-8 space-y-6">
              
              {/* Category & Title Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-0.5 rounded bg-[#081026] border border-cyan-500/40">
                    {article.category}
                  </span>
                  <span className="text-xs font-mono text-[#FFC107] font-bold">
                    OFFICIAL PRESS RELEASE
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase tracking-tight">
                  {article.title}
                </h1>

                {/* Author & Timestamp Row */}
                <div className="flex flex-wrap items-center justify-between gap-4 py-3 border-y border-slate-800 text-xs text-slate-400">
                  <div className="flex items-center gap-4 flex-wrap">
                    <span className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-[#FFC107]" />
                      <span className="font-bold text-slate-300">{article.author}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.date}</span>
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      <span>{article.readTime}</span>
                    </span>
                  </div>

                  <ArticleInteraction />
                </div>
              </div>

              {/* High-Resolution Hero Banner */}
              <div className="relative aspect-[16/9] w-full rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  priority
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060a1a] via-transparent to-transparent opacity-40" />
              </div>

              {/* Lead Summary Callout */}
              <div className="p-5 rounded-sm bg-[#050b1d] border-l-4 border-[#FFC107] border-y border-r border-slate-800 shadow-md">
                <p className="text-sm sm:text-base font-semibold text-white leading-relaxed italic">
                  &ldquo;{article.summary}&rdquo;
                </p>
              </div>

              {/* Formatted Article Body Paragraphs */}
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                {article.content.map((paragraph, index) => (
                  <p key={index} className="text-slate-200">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Tags Cloud */}
              {article.tags && article.tags.length > 0 && (
                <div className="pt-6 border-t border-slate-800 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase">
                    <Tag className="w-3.5 h-3.5 text-[#FFC107]" />
                    <span>TOPICS & TAGS:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-bold text-slate-300 bg-[#081026] rounded border border-slate-700 hover:border-amber-400 transition-colors"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Next/Previous Article Footer Bar */}
              <div className="p-6 rounded-sm bg-[#050b1d] border border-slate-800 flex items-center justify-between gap-4 mt-8">
                <Link
                  href="/news"
                  className="text-xs font-bold text-slate-400 hover:text-white uppercase transition-colors"
                >
                  ← ALL NEWSROOM DISPATCHES
                </Link>
                <Link
                  href="/matches"
                  className="text-xs font-bold text-[#FFC107] hover:underline uppercase transition-colors"
                >
                  VIEW MATCH SCHEDULE →
                </Link>
              </div>

            </article>

            {/* Right 4 Columns: Sticky Editorial Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
              
              {/* Author & Media Desk Card */}
              <div className="p-5 rounded-sm bg-[#050b1d] border border-slate-800 space-y-3 shadow-lg">
                <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-widest block font-mono">
                  {"// PUBLISHER"}
                </span>
                <div className="flex items-center gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/60 bg-black">
                    <Image src="/images/logo.png" alt="Mythic SEAL" fill className="object-cover" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white uppercase">
                      MYTHIC SEAL MEDIA
                    </h4>
                    <span className="text-xs text-slate-400 block">Official Press & Comms</span>
                  </div>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed font-medium">
                  Official dispatches, tournament reports, roster announcements, and corporate partnership news.
                </p>
              </div>

              {/* Related Recent Dispatches */}
              <div className="p-5 rounded-sm bg-[#050b1d] border border-slate-800 space-y-4 shadow-lg">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-4 h-4 text-[#FFC107]" />
                    <span className="text-xs font-bold text-white uppercase tracking-wider">
                      LATEST STORIES
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  {relatedArticles.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/news/${rel.id}`}
                      className="group block space-y-1 p-2 rounded hover:bg-slate-900/60 transition-colors"
                    >
                      <span className="text-[10px] font-mono font-bold text-cyan-400 uppercase block">
                        {rel.category} • {rel.date}
                      </span>
                      <h5 className="text-xs font-bold text-slate-200 group-hover:text-[#FFC107] transition-colors leading-snug line-clamp-2 uppercase">
                        {rel.title}
                      </h5>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Tournament CTA Card */}
              <div className="p-5 rounded-sm bg-gradient-to-br from-[#0c1844] to-[#050b1d] border border-amber-500/60 space-y-3 shadow-xl">
                <span className="text-[10px] font-bold text-[#FFC107] uppercase tracking-wider block font-mono">
                  UPCOMING CLASH
                </span>
                <h4 className="text-base font-black text-white uppercase">
                  GEG 2026 UPPER BRACKET FINALS
                </h4>
                <p className="text-xs text-slate-300">
                  Mythic SEAL faces Team MAX this weekend. Catch the live stream and cheer for the squad.
                </p>
                <Link href="/matches" className="btn-scifi-primary w-full text-center block text-xs !py-2.5">
                  <span>VIEW MATCH CENTER</span>
                </Link>
              </div>

            </aside>

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
