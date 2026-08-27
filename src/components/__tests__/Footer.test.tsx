import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
  it("should render branding and newsletter subscription input", () => {
    render(<Footer />);

    expect(screen.getByText("MYTHIC")).toBeInTheDocument();
    expect(screen.getByText("SEAL")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter email")).toBeInTheDocument();
  });

  it("should submit newsletter form and show confirmation message", () => {
    render(<Footer />);

    const input = screen.getByPlaceholderText("Enter email");
    fireEvent.change(input, { target: { value: "fan@mythicseal.com" } });
    fireEvent.click(screen.getByText("JOIN"));

    expect(screen.getByText("Subscribed!")).toBeInTheDocument();
  });
});
