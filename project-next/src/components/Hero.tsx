"use client";

import React, { useEffect, useState } from "react";
// import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const rotatingWords = ["Agentic AI.", "Smart Automation.", "Web Platforms.", "Workflow AI.", "Revenue Growth."];

const Hero: React.FC = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08, delayChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const headlineWords = ["Engineering", "High-Performance", "Digital", "Systems", "&"];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-60" />

      {/* Floating gradient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 blur-xl md:blur-3xl animate-orb-1 pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-sky-300/15 to-blue-500/10 blur-xl md:blur-3xl animate-orb-2 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[30%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/10 to-blue-200/15 blur-xl md:blur-3xl animate-orb-3 pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1.5 h-1.5 rounded-full bg-blue-400/30 animate-particle pointer-events-none"
          style={{
            top: `${15 + i * 13}%`,
            left: `${10 + i * 15}%`,
            animationDelay: `${i * 0.8}s`,
          }}
        />
      ))}

      {/* Decorative lines */}
      <motion.div
        className="absolute top-20 right-12 w-px h-32 bg-gradient-to-b from-transparent via-blue-300/40 to-transparent hidden lg:block"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1 }}
      />
      <motion.div
        className="absolute bottom-20 left-16 w-24 h-px bg-gradient-to-r from-transparent via-blue-300/40 to-transparent hidden lg:block"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.2, delay: 1.3 }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20 md:py-28 flex flex-col items-center justify-center w-full">
        {/* Hero text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 text-center w-full"
        >
          {/* Pre-header tag */}
          <motion.p
            variants={wordVariants}
            className="text-xs sm:text-sm font-semibold uppercase tracking-[0.22em] text-blue-500 drop-shadow-[0_0_10px_rgba(59,130,246,0.35)]"
          >
            ⚡ Next-Gen Digital Engineering Agency
          </motion.p>

          {/* Headline with word-by-word reveal + rotating word */}
          <div className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900">
            <div className="overflow-hidden">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                  custom={i}
                >
                  {word}
                </motion.span>
              ))}
            </div>

            {/* Animated rotating word */}
            <div className="h-[1.2em] relative overflow-hidden mt-1">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[currentWordIndex]}
                  initial={{ y: 50, opacity: 0, rotateX: -45 }}
                  animate={{ y: 0, opacity: 1, rotateX: 0 }}
                  exit={{ y: -50, opacity: 0, rotateX: 45 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 right-0 w-full text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 animate-gradient-text"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Subtext */}
          <motion.p
            variants={wordVariants}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            We partner with ambitious brands across India and the GCC to build custom web
            platforms, automate workflows with AI, and scale revenue through precision
            marketing.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row justify-center gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-blue-500 text-white font-bold rounded-full hover:bg-blue-400 hover:scale-105 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 min-w-[220px]"
            >
              Book a Strategy Call
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>

            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-blue-600 font-bold rounded-full border border-blue-300 hover:border-blue-500 hover:bg-blue-50 hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              Explore Our Capabilities
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-10 pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-[0.22em] text-gray-400 font-medium">
          Scroll
        </span>
        <div className="w-6 h-9 rounded-full border-[1.5px] border-gray-300 flex justify-center pt-1.5">
          <motion.div
            className="w-1 h-1.5 rounded-full bg-blue-500"
            animate={{ y: [0, 12, 0], opacity: [1, 0.25, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
