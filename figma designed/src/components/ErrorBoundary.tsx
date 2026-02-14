import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false,
        error: null,
        errorInfo: null,
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error, errorInfo: null };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-red-50 text-red-900">
                    <h1 className="text-3xl font-bold mb-4">Something went wrong.</h1>
                    <div className="bg-white p-6 rounded shadow-lg max-w-3xl w-full overflow-auto">
                        <h2 className="text-xl font-semibold mb-2">{this.state.error?.toString()}</h2>
                        <details className="whitespace-pre-wrap font-mono text-sm text-gray-700">
                            {this.state.errorInfo?.componentStack}
                        </details>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
