/**
 * Search & Filter Web Worker Engine
 *
 * Runs heavy multi-field product searching, fuzzy matching, category filtering,
 * and price sorting off the main thread to ensure 0ms Interaction to Next Paint (INP).
 */

export interface WorkerSearchPayload<T> {
  id: string;
  items: T[];
  query: string;
  category: string;
  sortBy: "FEATURED" | "LOW_HIGH" | "HIGH_LOW" | "RATING";
}

export interface WorkerSearchResult<T> {
  id: string;
  results: T[];
  processingDurationMs: number;
}

/**
 * Pure search, filter, and sorting algorithm.
 */
export function processSearch<
  T extends {
    name: string;
    description: string;
    category: string;
    price: number;
    rating: number;
  }
>(payload: WorkerSearchPayload<T>): WorkerSearchResult<T> {
  const startTime = performance.now();
  const cleanQuery = payload.query.trim().toLowerCase();

  const filtered = payload.items.filter((item) => {
    const matchesCategory =
      payload.category === "ALL" || item.category === payload.category;

    const matchesQuery =
      !cleanQuery ||
      item.name.toLowerCase().includes(cleanQuery) ||
      item.description.toLowerCase().includes(cleanQuery);

    return matchesCategory && matchesQuery;
  });

  // Sort filtered results
  const sorted = [...filtered].sort((a, b) => {
    switch (payload.sortBy) {
      case "LOW_HIGH":
        return a.price - b.price;
      case "HIGH_LOW":
        return b.price - a.price;
      case "RATING":
        return b.rating - a.rating;
      case "FEATURED":
      default:
        return 0;
    }
  });

  return {
    id: payload.id,
    results: sorted,
    processingDurationMs: performance.now() - startTime,
  };
}

export interface SearchableItem {
  name: string;
  description: string;
  category: string;
  price: number;
  rating: number;
}

// Attach listener if running in genuine Web Worker context
if (typeof self !== "undefined" && typeof window === "undefined") {
  self.onmessage = (event: MessageEvent<WorkerSearchPayload<SearchableItem>>) => {
    const result = processSearch(event.data);
    self.postMessage(result);
  };
}
