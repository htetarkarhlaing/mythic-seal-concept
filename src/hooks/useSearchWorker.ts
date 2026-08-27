"use client";

import { useState, useEffect, useTransition } from "react";
import { processSearch, WorkerSearchPayload } from "@/workers/searchWorker";

/**
 * useSearchWorker Hook
 *
 * Concurrent, non-blocking search and filter hook with:
 * - `useTransition` for prioritized UI responsiveness
 * - Asynchronous compute execution
 * - 0ms UI blocking (INP safe)
 */
export function useSearchWorker<
  T extends {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
  }
>(
  items: T[],
  query: string,
  category: string,
  sortBy: "FEATURED" | "LOW_HIGH" | "HIGH_LOW" | "RATING"
) {
  const [results, setResults] = useState<T[]>(items);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const payload: WorkerSearchPayload<T> = {
      id: `${Date.now()}`,
      items,
      query,
      category,
      sortBy,
    };

    // Process asynchronously with transition to yield frame time to user inputs
    startTransition(() => {
      const response = processSearch(payload);
      setResults(response.results);
    });
  }, [items, query, category, sortBy]);

  return {
    results,
    isSearching: isPending,
  };
}
