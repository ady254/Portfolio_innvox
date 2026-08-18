"use client";

import { motion } from "framer-motion";
import { Bot, Sparkles, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AISolutionsClient() {
  return (
    <div className="bg-black min-h-screen overflow-hidden relative flex flex-col items-center justify-center text-center px-6">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-black to-black -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] -z-10 animate-pulse" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay opacity-20 z-0 pointer-events-none"></div>

      <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 flex justify-center"
        >
          <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl flex items-center justify-center shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/30 to-purple-500/30"></div>
            <Bot className="w-12 h-12 text-white relative z-10" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-blue-300 mb-6 mx-auto">
            <Sparkles className="w-4 h-4" />
            <span>Something extraordinary is brewing</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-tight">
            AI Solutions<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">Coming Soon.</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto mb-12">
            We are fine-tuning our autonomous agents and smart automation workflows. Prepare to revolutionize your business operations very soon.
          </p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.3)] mx-auto"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Home
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
