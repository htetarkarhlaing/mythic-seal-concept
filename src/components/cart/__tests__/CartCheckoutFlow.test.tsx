import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartCheckoutFlow } from "../CartCheckoutFlow";
import { CartItem } from "@/store/useCartStore";

// Mock canvas-confetti
vi.mock("canvas-confetti", () => ({
  default: vi.fn(),
}));

const mockItems: CartItem[] = [
  {
    id: "item-1",
    product: {
      id: "jersey-pro",
      name: "Official Pro Jersey 2026",
      slug: "official-pro-jersey-2026",
      price: 45000,
      category: "JERSEYS",
      image: "/images/shop/jersey-pro-black.png",
      gallery: ["/images/shop/jersey-pro-black.png"],
      description: "Official jersey",
      features: [],
      inStock: true,
      stockCount: 10,
      rating: 5,
      reviewCount: 1,
      reviews: [],
    },
    size: "L",
    quantity: 1,
  },
];

describe("CartCheckoutFlow Component (FSM Architecture)", () => {
  it("should render Step 1 contact and address inputs", () => {
    render(
      <CartCheckoutFlow
        items={mockItems}
        subtotal={45000}
        discount={0}
        city="YGN"
        onBack={vi.fn()}
        onOrderSuccess={vi.fn()}
      />
    );

    expect(screen.getByText("STEP 1: SHIPPING & CONTACT")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("e.g. Min Thant")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("09...")).toBeInTheDocument();
    expect(screen.getByText("CONTINUE TO PAYMENT")).toBeInTheDocument();
  });

  it("should transition through Step 1 to Step 2 and confirm order", () => {
    const handleOrderSuccess = vi.fn();
    render(
      <CartCheckoutFlow
        items={mockItems}
        subtotal={45000}
        discount={0}
        city="YGN"
        onBack={vi.fn()}
        onOrderSuccess={handleOrderSuccess}
      />
    );

    // Step 1: Fill Contact Information
    fireEvent.change(screen.getByPlaceholderText("e.g. Min Thant"), {
      target: { value: "Min Thant" },
    });
    fireEvent.change(screen.getByPlaceholderText("09..."), {
      target: { value: "09968888299" },
    });
    fireEvent.change(
      screen.getByPlaceholderText("Street name, Ward, Township..."),
      {
        target: { value: "Kamayut, Yangon" },
      }
    );

    // Transition to Step 2
    fireEvent.click(screen.getByText("CONTINUE TO PAYMENT"));

    // Step 2: Verify Payment Step
    expect(screen.getByText("STEP 2: PAYMENT METHOD")).toBeInTheDocument();
    expect(screen.getByText("KBZPay")).toBeInTheDocument();
    expect(screen.getByText("WavePay")).toBeInTheDocument();

    // Confirm Order
    fireEvent.click(
      screen.getByRole("button", { name: /CONFIRM ORDER/i })
    );

    // Order Placed View
    expect(
      screen.getByText("THANK YOU FOR YOUR SUPPORT!")
    ).toBeInTheDocument();
    expect(screen.getByText("Min Thant")).toBeInTheDocument();

    fireEvent.click(screen.getByText("RETURN TO OFFICIAL STORE"));
    expect(handleOrderSuccess).toHaveBeenCalled();
  });
});
