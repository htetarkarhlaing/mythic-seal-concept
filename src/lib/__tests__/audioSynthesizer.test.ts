import { describe, it, expect } from "vitest";
import { cyberAudio } from "../audioSynthesizer";
import { useAppStore } from "@/store/useAppStore";

describe("CyberAudioSynthesizer (Web Audio API)", () => {
  it("should safely handle play methods without throwing when AudioContext is unavailable or mocked", () => {
    expect(() => cyberAudio.playHover()).not.toThrow();
    expect(() => cyberAudio.playClick()).not.toThrow();
    expect(() => cyberAudio.playSuccess()).not.toThrow();
    expect(() => cyberAudio.playDrawer()).not.toThrow();
  });

  it("should respect isSoundEnabled state from useAppStore", () => {
    useAppStore.getState().setIsSoundEnabled(false);
    expect(useAppStore.getState().isSoundEnabled).toBe(false);
    expect(() => cyberAudio.playClick()).not.toThrow();

    useAppStore.getState().setIsSoundEnabled(true);
    expect(useAppStore.getState().isSoundEnabled).toBe(true);
  });
});
