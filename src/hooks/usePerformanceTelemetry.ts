"use client";

import { useEffect, useRef } from "react";
import { telemetry } from "@/lib/telemetry";

/**
 * Hook to automatically instrument component mount and lifecycle render latencies.
 *
 * @param componentName - Identifier for the instrumented component in telemetry metrics.
 */
export function usePerformanceTelemetry(componentName: string) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    const markName = `mount_${componentName}`;

    if (isInitialMount.current) {
      telemetry.startMark(markName);
      isInitialMount.current = false;

      // Complete measurement after paint frame
      requestAnimationFrame(() => {
        telemetry.endMeasure(markName, `render_${componentName}`);
      });
    }
  }, [componentName]);

  return {
    measureAction: (actionName: string, actionFn: () => void) => {
      const markName = `action_${componentName}_${actionName}`;
      telemetry.startMark(markName);
      try {
        actionFn();
      } finally {
        telemetry.endMeasure(markName);
      }
    },
  };
}
