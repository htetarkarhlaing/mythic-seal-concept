import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";
import { JerseyCustomizerPreview } from "../JerseyCustomizerPreview";

describe("JerseyCustomizerPreview", () => {
  it("should project custom athlete name and squad number onto vector canvas", () => {
    render(<JerseyCustomizerPreview customName="JUSTIN" customNumber="11" />);

    expect(screen.getByText("JUSTIN")).toBeInTheDocument();
    expect(screen.getByText("11")).toBeInTheDocument();
    expect(screen.getByText("MYTHIC SEAL ESPORTS")).toBeInTheDocument();
  });

  it("should default to fallback placeholders when empty strings are provided", () => {
    render(<JerseyCustomizerPreview customName="" customNumber="" />);

    expect(screen.getByText("PLAYER")).toBeInTheDocument();
    expect(screen.getByText("00")).toBeInTheDocument();
  });
});
