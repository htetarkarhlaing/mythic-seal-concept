import { describe, it, expect, beforeEach } from "vitest";
import { useAppStore } from "../useAppStore";

describe("useAppStore (Slices Pattern Architecture)", () => {
  beforeEach(() => {
    useAppStore.getState().clearCart();
    useAppStore.getState().setIsCartOpen(false);
    useAppStore.getState().setIsVideoModalOpen(false);
  });

  it("should update and isolate UI slice states", () => {
    expect(useAppStore.getState().isCartOpen).toBe(false);
    expect(useAppStore.getState().isVideoModalOpen).toBe(false);

    useAppStore.getState().setIsCartOpen(true);
    expect(useAppStore.getState().isCartOpen).toBe(true);

    useAppStore.getState().setIsVideoModalOpen(true);
    expect(useAppStore.getState().isVideoModalOpen).toBe(true);

    useAppStore.getState().setActivePlayerId("galaxy");
    expect(useAppStore.getState().activePlayerId).toBe("galaxy");
  });
});
