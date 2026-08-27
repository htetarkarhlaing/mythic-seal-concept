import { describe, it, expect, vi, beforeEach } from "vitest";
import { renderHook } from "@testing-library/react";
import { useReducedMotion } from "../useReducedMotion";

describe("useReducedMotion Hook", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should return false by default when reduced-motion is not requested", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(false);
  });

  it("should return true when OS prefers reduced motion", () => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: vi.fn().mockImplementation((query) => ({
        matches: query === "(prefers-reduced-motion: reduce)",
        media: query,
        onchange: null,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      })),
    });

    const { result } = renderHook(() => useReducedMotion());
    expect(result.current).toBe(true);
  });
});
