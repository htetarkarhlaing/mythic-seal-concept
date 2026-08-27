import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useSearchWorker } from "../useSearchWorker";

const mockProducts = [
  {
    id: "1",
    name: "Pro Jersey 2026",
    description: "Official team jersey",
    category: "JERSEYS",
    price: 45000,
    rating: 5,
  },
  {
    id: "2",
    name: "Championship Cap",
    description: "Embroidered hat",
    category: "HEADWEAR",
    price: 15000,
    rating: 4,
  },
  {
    id: "3",
    name: "Pro Hoodie",
    description: "Team jacket outerwear",
    category: "OUTERWEAR",
    price: 65000,
    rating: 4.8,
  },
];

describe("useSearchWorker Hook", () => {
  it("should filter items by category and sort by price low to high", () => {
    const { result } = renderHook(() =>
      useSearchWorker(mockProducts, "", "ALL", "LOW_HIGH")
    );

    expect(result.current.results.length).toBe(3);
    expect(result.current.results[0]?.name).toBe("Championship Cap"); // 15,000 MMK
    expect(result.current.results[2]?.name).toBe("Pro Hoodie"); // 65,000 MMK
  });

  it("should filter items by text search query", () => {
    const { result } = renderHook(() =>
      useSearchWorker(mockProducts, "jersey", "ALL", "FEATURED")
    );

    expect(result.current.results.length).toBe(1);
    expect(result.current.results[0]?.name).toBe("Pro Jersey 2026");
  });
});
