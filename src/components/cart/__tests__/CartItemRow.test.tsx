import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { CartItemRow } from "../CartItemRow";
import { CartItem } from "@/store/useCartStore";

const mockItem: CartItem = {
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
  customName: "GALAXY",
  customNumber: "07",
  quantity: 2,
};

describe("CartItemRow Component", () => {
  it("should render item metadata, size, and custom player badge correctly", () => {
    render(
      <CartItemRow
        item={mockItem}
        onUpdateQuantity={vi.fn()}
        onRemove={vi.fn()}
      />
    );

    expect(screen.getByText("Official Pro Jersey 2026")).toBeInTheDocument();
    expect(screen.getByText("SIZE: L")).toBeInTheDocument();
    expect(screen.getByText("#07 GALAXY")).toBeInTheDocument();
    expect(screen.getByText("90,000 MMK")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
  });

  it("should call onUpdateQuantity when clicking plus and minus buttons", () => {
    const handleUpdate = vi.fn();
    render(
      <CartItemRow
        item={mockItem}
        onUpdateQuantity={handleUpdate}
        onRemove={vi.fn()}
      />
    );

    const plusBtn = screen.getByLabelText("Increase quantity for Official Pro Jersey 2026");
    fireEvent.click(plusBtn);
    expect(handleUpdate).toHaveBeenCalledWith("item-1", 1);

    const minusBtn = screen.getByLabelText("Decrease quantity for Official Pro Jersey 2026");
    fireEvent.click(minusBtn);
    expect(handleUpdate).toHaveBeenCalledWith("item-1", -1);
  });

  it("should call onRemove when clicking the delete button", () => {
    const handleRemove = vi.fn();
    render(
      <CartItemRow
        item={mockItem}
        onUpdateQuantity={vi.fn()}
        onRemove={handleRemove}
      />
    );

    const deleteBtn = screen.getByLabelText("Remove Official Pro Jersey 2026 from cart");
    fireEvent.click(deleteBtn);
    expect(handleRemove).toHaveBeenCalledWith("item-1");
  });
});
