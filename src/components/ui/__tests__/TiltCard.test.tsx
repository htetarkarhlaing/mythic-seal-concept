import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { TiltCard } from "../TiltCard";

describe("TiltCard Physics Component", () => {
  it("should render child components inside perspective container", () => {
    render(
      <TiltCard>
        <div data-testid="card-content">Player Card Galaxy</div>
      </TiltCard>
    );

    expect(screen.getByTestId("card-content")).toBeInTheDocument();
  });

  it("should respond to mousemove and mouseleave events gracefully", () => {
    const { container } = render(
      <TiltCard>
        <div>Content</div>
      </TiltCard>
    );

    const outerContainer = container.firstChild as HTMLElement;

    fireEvent.mouseMove(outerContainer, { clientX: 100, clientY: 100 });
    fireEvent.mouseLeave(outerContainer);
  });
});
