import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { CartProvider } from "@/context/CartContext";

describe("Navbar Component", () => {
  it("should render team branding and navigation links", () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    );

    expect(screen.getByText("MYTHIC")).toBeInTheDocument();
    expect(screen.getByText("SEAL")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
    expect(screen.getByText("ROSTER")).toBeInTheDocument();
    expect(screen.getByText("SHOP")).toBeInTheDocument();
  });
});
