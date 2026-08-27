import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartPromoSection } from "../CartPromoSection";

describe("CartPromoSection Component", () => {
  it("should render promo form when no promo is active", () => {
    render(
      <CartPromoSection
        appliedPromo={null}
        onApplyPromo={vi.fn()}
        onRemovePromo={vi.fn()}
      />
    );

    expect(
      screen.getByPlaceholderText("PROMO CODE (e.g. SEAL2026)")
    ).toBeInTheDocument();
    expect(screen.getByText("APPLY")).toBeInTheDocument();
  });

  it("should submit promo code and call onApplyPromo", () => {
    const handleApply = vi.fn().mockReturnValue(true);
    render(
      <CartPromoSection
        appliedPromo={null}
        onApplyPromo={handleApply}
        onRemovePromo={vi.fn()}
      />
    );

    const input = screen.getByPlaceholderText("PROMO CODE (e.g. SEAL2026)");
    fireEvent.change(input, { target: { value: "SEAL2026" } });
    fireEvent.click(screen.getByText("APPLY"));

    expect(handleApply).toHaveBeenCalledWith("SEAL2026");
  });

  it("should display active badge and allow removal when promo is applied", () => {
    const handleRemove = vi.fn();
    render(
      <CartPromoSection
        appliedPromo="SEAL2026"
        onApplyPromo={vi.fn()}
        onRemovePromo={handleRemove}
      />
    );

    expect(screen.getByText("SEAL2026")).toBeInTheDocument();
    expect(screen.getByText("APPLIED")).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText("Remove promo code"));
    expect(handleRemove).toHaveBeenCalled();
  });
});
