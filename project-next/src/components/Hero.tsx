"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { motion, Variants, AnimatePresence } from "framer-motion";

const rotatingWords = ["Business.", "Sales.", "Leads.", "Automation.", "Revenue."];

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

  const headlineWords = ["We", "Build", "the", "Digital", "Systems"];
  const headlineWords2 = ["That", "Grow", "Your"];

  return (
    <section className="relative w-full bg-white overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated grid pattern */}
      <div className="absolute inset-0 hero-grid-pattern opacity-60" />

      {/* Floating gradient orbs */}
      <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-400/20 to-indigo-400/10 blur-3xl animate-orb-1 pointer-events-none" />
      <div className="absolute top-[30%] right-[-10%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-sky-300/15 to-blue-500/10 blur-3xl animate-orb-2 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[30%] w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-indigo-300/10 to-blue-200/15 blur-3xl animate-orb-3 pointer-events-none" />

      {/* Floating particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center w-full">
        {/* Mobile blob - shown above text on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:hidden"
        >
          <motion.img
            src="/blob.webp"
            alt="Innvox"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, 0, -5, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[320px] pointer-events-none select-none drop-shadow-2xl"
          />
        </motion.div>

        {/* Left: text content */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-6 text-center md:text-left"
        >
          {/* Badge */}
          <motion.div variants={wordVariants}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              Digital Agency — India & GCC
            </span>
          </motion.div>

          {/* Headline with word-by-word reveal */}
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
            <div className="overflow-hidden">
              {headlineWords2.map((word, i) => (
                <motion.span
                  key={word}
                  variants={wordVariants}
                  className="inline-block mr-[0.3em]"
                  custom={i + headlineWords.length}
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
                  className="absolute left-0 md:left-0 w-full md:w-auto text-center md:text-left text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-700 animate-gradient-text"
                >
                  {rotatingWords[currentWordIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>

          {/* Subtext */}
          <motion.p
            variants={wordVariants}
            className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            InnVox is a digital agency specializing in AI automation, web
            development, and marketing — for businesses that want to move faster
            than their competition.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={wordVariants}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group relative flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-gray-900 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[220px] overflow-hidden"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
              <span className="relative z-10 font-bold text-lg">Start a Project</span>
              <div className="relative z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="text-gray-900 w-5 h-5" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-gray-50 text-gray-900 rounded-full hover:scale-105 hover:bg-blue-50 transition-all duration-300 min-w-[220px] border border-gray-200"
            >
              <span className="font-bold text-lg">See Our Work</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                <ArrowUpRight className="text-gray-900 w-5 h-5" />
              </div>
            </Link>
          </motion.div>

          {/* Social proof micro-stat */}
          <motion.div
            variants={wordVariants}
            className="flex items-center justify-center md:justify-start gap-6 pt-4 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {["bg-blue-500", "bg-indigo-500", "bg-sky-500"].map((c, i) => (
                  <div key={i} className={`w-7 h-7 rounded-full ${c} border-2 border-white flex items-center justify-center text-white text-[10px] font-bold`}>
                    {["S", "A", "K"][i]}
                  </div>
                ))}
              </div>
              <span>30+ projects delivered</span>
            </div>
            <div className="hidden sm:flex items-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Available now</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: floating blob - desktop */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-end relative"
        >
          {/* Glow ring behind blob */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[350px] h-[350px] rounded-full border border-blue-200/30"
              animate={{ scale: [1, 1.08, 1], rotate: [0, 5, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              className="w-[280px] h-[280px] rounded-full border border-blue-300/20"
              animate={{ scale: [1.05, 1, 1.05], rotate: [0, -3, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            />
          </div>

          <motion.img
            src="/blob.webp"
            alt="Innvox"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 3, 0, -3, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-[420px] pointer-events-none select-none relative z-10 drop-shadow-2xl"
          />
        </motion.div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
