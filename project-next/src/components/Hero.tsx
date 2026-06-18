"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Hero: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <section className="w-full bg-white pt-12 pb-16 md:pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
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
     className="w-[420px] pointer-events-none select-none"
/>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.1] text-gray-900"
          >
            We Build the Digital Systems 
            <br />
            That Grow Your
            <br />

             <span className="text-blue-600">
              
    <TypeAnimation
      sequence={[
        "Business.",
        2000,
        "Sales.",
        2000,
        "Leads.",
        2000,
        "Automation.",
        2000,
        "Revenue.",
        2000,
      ]}
      wrapper="span"
      speed={40}
      repeat={Infinity}
    />
  </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            InnVox is a digital agency specializing in AI automation, web
            development, and marketing — for businesses that want to move faster
            than their competition.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 pt-2"
          >
            <Link
              href="/contact"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-black text-white rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[220px]"
            >
              <span className="font-bold text-lg">Start a Project</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </Link>

            <Link
              href="/projects"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-gray-100 text-gray-900 rounded-full hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              <span className="font-bold text-lg">See Our Work</span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                <ArrowUpRight className="text-black w-5 h-5" />
              </div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-end"
        >
          <img
            src="/blob.webp"
            alt="Innvox"
            className="w-[420px] animate-float pointer-events-none select-none"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
