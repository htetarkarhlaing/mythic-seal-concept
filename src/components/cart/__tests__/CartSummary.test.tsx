import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartSummary } from "../CartSummary";

describe("CartSummary Component", () => {
  it("should calculate and render subtotal, discount, and grand total correctly", () => {
    render(
      <CartSummary
        subtotal={90000}
        discount={13500}
        city="YGN"
        onCityChange={vi.fn()}
        onProceedToCheckout={vi.fn()}
      />
    );

    expect(screen.getByText("90,000 MMK")).toBeInTheDocument();
    expect(screen.getByText("-13,500 MMK")).toBeInTheDocument();
    expect(screen.getByText("QUALIFIED FOR FREE SHIPPING!")).toBeInTheDocument();
    expect(screen.getByText("76,500 MMK")).toBeInTheDocument();
  });

  it("should calculate shipping cost when below free shipping threshold", () => {
    render(
      <CartSummary
        subtotal={45000}
        discount={0}
        city="MDY"
        onCityChange={vi.fn()}
        onProceedToCheckout={vi.fn()}
      />
    );

    // 45,000 + 3,500 shipping = 48,500 MMK
    expect(screen.getByText("48,500 MMK")).toBeInTheDocument();
    expect(screen.getByText("3,500 MMK")).toBeInTheDocument();
  });

  it("should trigger onCityChange when clicking region buttons", () => {
    const handleCityChange = vi.fn();
    render(
      <CartSummary
        subtotal={45000}
        discount={0}
        city="YGN"
        onCityChange={handleCityChange}
        onProceedToCheckout={vi.fn()}
      />
    );

    fireEvent.click(screen.getByText("Mandalay"));
    expect(handleCityChange).toHaveBeenCalledWith("MDY");
  });

  it("should trigger onProceedToCheckout when clicking checkout button", () => {
    const handleCheckout = vi.fn();
    render(
      <CartSummary
        subtotal={45000}
        discount={0}
        city="YGN"
        onCityChange={vi.fn()}
        onProceedToCheckout={handleCheckout}
      />
    );

    fireEvent.click(screen.getByText("PROCEED TO CHECKOUT"));
    expect(handleCheckout).toHaveBeenCalled();
  });
});
