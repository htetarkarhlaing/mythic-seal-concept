import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import VideoModal from "../VideoModal";

describe("VideoModal Component", () => {
  it("should not render when isOpen is false", () => {
    const { container } = render(
      <VideoModal isOpen={false} onClose={vi.fn()} />
    );
    expect(container.firstChild).toBeNull();
  });

  it("should render modal content when isOpen is true and trigger onClose when dismissed", () => {
    const handleClose = vi.fn();
    render(<VideoModal isOpen={true} onClose={handleClose} />);

    expect(screen.getByText(/DESTINED FOR GLORY/i)).toBeInTheDocument();
    expect(screen.getByText(/WATCH FULL ON YOUTUBE/i)).toBeInTheDocument();

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });
});
