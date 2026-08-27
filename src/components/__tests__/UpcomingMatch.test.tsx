import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import UpcomingMatch from "../UpcomingMatch";

describe("UpcomingMatch Component", () => {
  it("should render match confrontation details and team names", () => {
    render(<UpcomingMatch />);

    expect(screen.getByText(/UPCOMING/i)).toBeInTheDocument();
    expect(screen.getByText("MATCH")).toBeInTheDocument();
    expect(screen.getByText("MYTHIC SEAL")).toBeInTheDocument();
    expect(screen.getByText("TEAM MAX")).toBeInTheDocument();
    expect(screen.getByText("VS")).toBeInTheDocument();
    expect(screen.getByText("FULL SCHEDULE ➔")).toBeInTheDocument();
  });
});
