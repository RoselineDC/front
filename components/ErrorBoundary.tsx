"use client";

import { cn } from "@/lib/utils";
import { AlertTriangle, RotateCcw } from "lucide-react";
import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    };
  }

  componentDidCatch(error: Error, errorInfo: unknown) {
    console.error("ErrorBoundary caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-background p-8">
          <div className="flex w-full max-w-2xl flex-col items-center rounded-2xl border bg-card p-8 shadow-sm">
            <AlertTriangle
              size={48}
              className="mb-6 text-destructive"
            />

            <h2 className="mb-4 text-2xl font-semibold">
              An unexpected error occurred
            </h2>

            <div className="mb-6 w-full overflow-auto rounded-lg bg-muted p-4">
              <pre className="whitespace-pre-wrap text-sm text-muted-foreground">
                {this.state.error?.stack}
              </pre>
            </div>

            <button
              onClick={() => window.location.reload()}
              className={cn(
                "flex items-center gap-2 rounded-lg",
                "bg-primary px-4 py-2 text-primary-foreground",
                "transition-opacity hover:opacity-90"
              )}
            >
              <RotateCcw size={16} />
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;