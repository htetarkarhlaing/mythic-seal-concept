"use client";

import React, { Component, ErrorInfo, ReactNode } from "react";
import { AlertTriangle, RotateCcw } from "lucide-react";

interface Props {
  children: ReactNode;
  fallbackTitle?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (process.env.NODE_ENV !== "production") {
      console.error("ErrorBoundary caught an error:", error, errorInfo);
    }
  }

  private handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="w-full p-6 my-4 bg-[#080d24] border border-amber-500/40 rounded-sm text-center flex flex-col items-center justify-center space-y-3 font-['Rajdhani',sans-serif]">
          <AlertTriangle className="w-8 h-8 text-[#FFC107] animate-pulse" />
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">
            {this.props.fallbackTitle || "MODULE TEMPORARILY UNAVAILABLE"}
          </h3>
          <p className="text-xs text-slate-400 max-w-md font-mono">
            {this.state.error?.message || "An unexpected error occurred while rendering this section."}
          </p>
          <button
            type="button"
            onClick={this.handleReset}
            className="mt-2 px-4 py-2 bg-amber-500/20 hover:bg-[#FFC107] text-[#FFC107] hover:text-black border border-amber-500/60 rounded-sm text-xs font-bold uppercase transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>RETRY MODULE</span>
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
