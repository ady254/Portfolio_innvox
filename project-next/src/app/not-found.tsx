import Link from "next/link";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white dark:bg-slate-950 px-6 py-24">
      <div className="max-w-lg w-full text-center space-y-6">
        <div className="text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 tracking-tighter">
          404
        </div>

        <h1 className="text-3xl font-black text-slate-900 dark:text-white">
          Page Not Found
        </h1>

        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed max-w-md mx-auto">
          The page you are looking for might have been moved, renamed, or doesn&apos;t exist in the InnVox ecosystem.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition shadow-lg shadow-blue-600/20 text-sm"
          >
            <Home className="w-4 h-4" /> Go to Homepage
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-bold rounded-full hover:bg-slate-50 dark:hover:bg-slate-900 transition text-sm"
          >
            <Compass className="w-4 h-4" /> Explore Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
