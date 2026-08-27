"use client";

import { useQuery } from "@tanstack/react-query";
import { TOURNAMENT_MATCHES, UPCOMING_FEATURED_MATCH, Match } from "@/data/matches";

export const matchKeys = {
  all: ["matches"] as const,
  featured: () => [...matchKeys.all, "featured"] as const,
  byStatus: (status: string) => [...matchKeys.all, "status", status] as const,
};

export function useMatchesQuery() {
  return useQuery<readonly Match[]>({
    queryKey: matchKeys.all,
    queryFn: async () => {
      // Simulate client fetch latency
      await new Promise((resolve) => setTimeout(resolve, 80));
      return TOURNAMENT_MATCHES;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useFeaturedMatchQuery() {
  return useQuery<Match>({
    queryKey: matchKeys.featured(),
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      return UPCOMING_FEATURED_MATCH;
    },
    staleTime: 1000 * 60 * 5,
  });
}
