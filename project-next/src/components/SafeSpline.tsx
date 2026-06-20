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

    public static getDerivedStateFromError(_: Error): State {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Silently catch the error so it doesn't trigger Next.js error overlays
        // console.warn("Spline runtime failed to parse timeline properties.", error.message);
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