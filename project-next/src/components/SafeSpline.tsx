"use client";
import React, { Component, ErrorInfo, ReactNode } from "react";
import dynamic from 'next/dynamic';
const Spline = dynamic(() => import('@splinetool/react-spline'), { ssr: false });

interface Props {
    scene: string;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
}

class SafeSpline extends Component<Props, State> {
    public state: State = { hasError: false };
    private originalConsoleError: typeof console.error | null = null;

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidMount() {
        // Spline runtime calls console.error("Missing property") internally when
        // it can't parse certain timeline properties in the scene. These are
        // cosmetic parser warnings — not functional errors — but Next.js dev
        // tools intercepts console.error and shows them as overlays. Filter them.
        this.originalConsoleError = console.error;
        console.error = (...args: unknown[]) => {
            if (String(args[0] ?? '').includes('Missing property')) return;
            this.originalConsoleError!.apply(console, args);
        };
    }

    public componentWillUnmount() {
        if (this.originalConsoleError) {
            console.error = this.originalConsoleError;
        }
    }

    public componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
        // Catches thrown errors from Spline so they don't bubble up
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="w-full h-full flex items-center justify-center bg-gray-900/50 rounded-2xl text-gray-500 font-mono text-sm">
                    [ 3D Scene Unavailable ]
                </div>
            );
        }
        return <Spline scene={this.props.scene} />;
    }
}

export default SafeSpline;