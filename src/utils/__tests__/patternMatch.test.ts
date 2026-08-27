import { describe, it, expect } from "vitest";
import { match, assertNever } from "../patternMatch";
import { toMMK, toPlayerId, toOrderId } from "@/types/branded";

describe("Type-Safe Pattern Matching & Branded Types", () => {
  it("should execute corresponding pattern branch accurately", () => {
    type TournamentStage = "GROUP_STAGE" | "PLAYOFFS" | "GRAND_FINALS";

    const getStageName = (stage: TournamentStage): string => {
      return match(stage, {
        GROUP_STAGE: () => "Group Stage Match",
        PLAYOFFS: () => "Elimination Bracket",
        GRAND_FINALS: () => "Championship Decider",
      });
    };

    expect(getStageName("GROUP_STAGE")).toBe("Group Stage Match");
    expect(getStageName("GRAND_FINALS")).toBe("Championship Decider");
  });

  it("should throw if assertNever is reached at runtime with unexpected input", () => {
    expect(() => {
      // Force invalid cast to test runtime assertion
      assertNever("UNKNOWN" as never);
    }).toThrow("Unhandled discriminated union member");
  });

  it("should enforce nominal validation on branded types", () => {
    const price = toMMK(45000.7);
    expect(price).toBe(45001);

    expect(() => toMMK(-100)).toThrow("Currency amount cannot be negative");

    const player = toPlayerId(" GALAXY ");
    expect(player).toBe("galaxy");

    const orderId = toOrderId("MS-123456");
    expect(orderId).toBe("MS-123456");

    expect(() => toOrderId("INVALID")).toThrow("Invalid Order ID format");
  });
});
