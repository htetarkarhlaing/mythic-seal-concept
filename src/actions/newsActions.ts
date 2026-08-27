"use server";

import { NEWS_ARTICLES, NewsArticle } from "@/data/news";

export async function getLatestNewsAction(limit: number = 3): Promise<NewsArticle[]> {
  // Server action simulating async backend retrieval
  await new Promise((resolve) => setTimeout(resolve, 60));
  return Array.from(NEWS_ARTICLES.slice(0, limit));
}

export async function getNewsArticleByIdAction(id: string): Promise<NewsArticle | null> {
  await new Promise((resolve) => setTimeout(resolve, 40));
  const article = NEWS_ARTICLES.find((a) => a.id.toLowerCase() === id.toLowerCase());
  return article ? { ...article } : null;
}
