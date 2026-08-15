"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RefreshCw, Home, AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App boundary error:", error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-950 px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 bg-red-100 dark:bg-red-950/50 text-red-600 dark:text-red-400 rounded-2xl flex items-center justify-center mx-auto">
          <AlertCircle className="w-8 h-8" />
        </div>

        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Something went wrong
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          An unexpected error occurred while loading this page. Our team has been notified.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
          <button
            onClick={() => reset()}
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition shadow-lg shadow-blue-600/20 text-sm"
          >
            <RefreshCw className="w-4 h-4" /> Try Again
          </button>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition text-sm"
          >
            <Home className="w-4 h-4" /> Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}
