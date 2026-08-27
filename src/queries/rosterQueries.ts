"use client";

import { useQuery } from "@tanstack/react-query";
import { ROSTER, getPlayerById, Player } from "@/data/roster";

export const rosterKeys = {
  all: ["roster"] as const,
  detail: (id: string) => [...rosterKeys.all, id] as const,
};

export function useRosterQuery() {
  return useQuery<readonly Player[]>({
    queryKey: rosterKeys.all,
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 60));
      return ROSTER;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function usePlayerDetailQuery(id: string | null) {
  return useQuery<Player | null>({
    queryKey: id ? rosterKeys.detail(id) : ["roster", "null"],
    queryFn: async () => {
      if (!id) return null;
      await new Promise((resolve) => setTimeout(resolve, 40));
      return getPlayerById(id) || null;
    },
    enabled: Boolean(id),
    staleTime: 1000 * 60 * 10,
  });
}
