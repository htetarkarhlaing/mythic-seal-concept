export interface PerformanceMetric {
  name: string;
  durationMs: number;
  timestamp: number;
}

export type MetricListener = (metric: PerformanceMetric) => void;

class PerformanceTelemetryService {
  private listeners: Set<MetricListener> = new Set();
  private observer: PerformanceObserver | null = null;

  constructor() {
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      try {
        this.observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (entry.duration > 50) {
              this.notify({
                name: `longtask:${entry.name || "main-thread"}`,
                durationMs: entry.duration,
                timestamp: entry.startTime,
              });
            }
          }
        });

        if (
          PerformanceObserver.supportedEntryTypes &&
          PerformanceObserver.supportedEntryTypes.includes("longtask")
        ) {
          this.observer.observe({ type: "longtask", buffered: true });
        }
      } catch {
        // Silently ignore environments lacking observer support
      }
    }
  }

  startMark(markName: string): void {
    if (typeof performance === "undefined" || !performance.mark) return;
    performance.mark(`${markName}_start`);
  }

  endMeasure(markName: string, measureName?: string): number | null {
    if (
      typeof performance === "undefined" ||
      !performance.mark ||
      !performance.measure
    ) {
      return null;
    }

    const startMark = `${markName}_start`;
    const endMark = `${markName}_end`;
    const finalMeasureName = measureName || `measure_${markName}`;

    try {
      performance.mark(endMark);
      performance.measure(finalMeasureName, startMark, endMark);

      const entries = performance.getEntriesByName(finalMeasureName);
      const latestEntry = entries[entries.length - 1];
      const durationMs = latestEntry ? latestEntry.duration : 0;

      this.notify({
        name: finalMeasureName,
        durationMs,
        timestamp: performance.now(),
      });

      performance.clearMarks(startMark);
      performance.clearMarks(endMark);
      performance.clearMeasures(finalMeasureName);

      return durationMs;
    } catch {
      return null;
    }
  }

  subscribe(listener: MetricListener): () => void {
    this.listeners.add(listener);
    return () => {
      this.listeners.delete(listener);
    };
  }

  private notify(metric: PerformanceMetric): void {
    for (const listener of this.listeners) {
      listener(metric);
    }
  }
}

export const telemetry = new PerformanceTelemetryService();
