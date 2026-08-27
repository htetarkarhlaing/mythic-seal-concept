import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
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
  const article = NEWS_ARTICLES.find((a) => a.id === id);
  if (!article) return { title: "Article Not Found | Mythic SEAL" };

  return {
    title: `${article.title} | Mythic SEAL MLBB`,
    description: article.summary,
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { id } = await params;
  const article = NEWS_ARTICLES.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#060a1a] text-white flex flex-col font-['Rajdhani',sans-serif]">
      <Navbar />

      {/* Article Container with proper top padding clear of navbar */}
      <main className="flex-grow pt-28 sm:pt-32 pb-16">
        
        {/* Navigation Breadcrumb Bar */}
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 mb-6">
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
              <span className="text-[#FFC107] font-bold truncate max-w-[200px] sm:max-w-xs">
                {article.title}
              </span>
            </div>

            <Link
              href="/news"
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-[#FFC107] font-bold uppercase transition-colors shrink-0 ml-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>ALL DISPATCHES</span>
            </Link>
          </div>
        </div>

        <article className="max-w-[900px] mx-auto px-4 sm:px-6 space-y-8">
          
          {/* Article Header */}
          <div className="space-y-4">
            <span className="inline-block font-mono text-xs font-bold text-cyan-400 uppercase tracking-widest px-2.5 py-1 rounded bg-[#081026] border border-cyan-500/40">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight uppercase">
              {article.title}
            </h1>

            {/* Author & Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 py-4 border-y border-slate-800 text-xs text-slate-400">
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

              {/* Engagement component */}
              <ArticleInteraction />
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative aspect-[16/9] rounded-sm overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Article Body Content */}
          <div className="space-y-6 text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
            <p className="text-base sm:text-lg font-bold text-white leading-relaxed border-l-2 border-[#FFC107] pl-4 italic">
              {article.summary}
            </p>

            <p>{article.content}</p>

            <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-wide pt-4">
              CHAMPIONSHIP MINDSET & DISCIPLINE
            </h3>

            <p>
              Under the strategic helm of Head Coach Min Thu Hein, Mythic SEAL has transformed into a well-oiled machine. Each game plan is meticulously prepared with deep analytics, studying opponent warding timings, jungle pathing inefficiencies, and power spikes.
            </p>

            {/* Quote Block */}
            <div className="p-6 rounded-sm bg-[#050b1d] border border-amber-500/50 space-y-2">
              <span className="text-xs font-bold text-[#FFC107] uppercase tracking-wider block">
                STATEMENT FROM CAPTAIN GALAXY
              </span>
              <p className="text-sm italic text-slate-200">
                &ldquo;We don&apos;t just play for individual glory; we fight for every supporter in Myanmar who believes in this shield. We will seal the day and bring home the championship.&rdquo;
              </p>
            </div>
          </div>

        </article>
      </main>

      <Footer />
    </div>
  );
}
