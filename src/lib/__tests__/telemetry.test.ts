import { describe, it, expect, vi, beforeEach } from "vitest";
import { telemetry, PerformanceMetric } from "../telemetry";

describe("PerformanceTelemetryService", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should record performance marks and notify subscribers on measure", () => {
    const receivedMetrics: PerformanceMetric[] = [];
    const unsubscribe = telemetry.subscribe((metric) => {
      receivedMetrics.push(metric);
    });

    telemetry.startMark("hero_render");
    const duration = telemetry.endMeasure("hero_render", "measure_hero_render");

    expect(typeof duration === "number" || duration === null).toBe(true);
    expect(receivedMetrics.length).toBeGreaterThanOrEqual(1);
    expect(receivedMetrics[0]?.name).toBe("measure_hero_render");

    unsubscribe();
  });
});
