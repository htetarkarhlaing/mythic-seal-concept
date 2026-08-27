"use client";

import { useQuery } from "@tanstack/react-query";
import { NEWS_ARTICLES, NewsArticle } from "@/data/news";

export const newsKeys = {
  all: ["news"] as const,
  latest: (limit: number) => [...newsKeys.all, "latest", limit] as const,
  detail: (id: string) => [...newsKeys.all, "detail", id] as const,
};

export function useLatestNewsQuery(limit: number = 3) {
  return useQuery<NewsArticle[]>({
    queryKey: newsKeys.latest(limit),
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 60));
      return Array.from(NEWS_ARTICLES.slice(0, limit));
    },
    initialData: () => Array.from(NEWS_ARTICLES.slice(0, limit)),
    staleTime: 1000 * 60 * 5,
  });
}
