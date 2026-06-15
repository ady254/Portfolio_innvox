import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const Hero: React.FC = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
    }
  };

  const stagger: Variants = {
    visible: {
      transition: { staggerChildren: 0.1 }
    }
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900 pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* MOBILE BLOB (shows only on mobile for better UX) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center md:hidden"
        >
          <img
            src="/blob.webp"
            alt="Hero Blob"
            className="w-[80%] max-w-[360px] animate-float"
          />
        </motion.div>

        {/* TEXT SECTION */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="space-y-6 text-center md:text-left"
        >
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900 dark:text-white break-words"
          >
            Your Business.<br className="hidden md:block" />
            One Subscription.<br className="hidden md:block" />

            <span className="text-blue-600 block mt-2 min-h-[60px] md:min-h-auto">
              <Typewriter
                words={[
                  "Website • Ads • WhatsApp Automation",
                  "Website • CRM • AI Chatbots • AI Automation",
                  "Website • Branding • Automation",
                ]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={60}
                deleteSpeed={40}
                delaySpeed={1500}
              />
            </span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0"
          >
            Get a modern website, full maintenance, Meta advertising, and automated WhatsApp campaigns —
            all under one affordable monthly subscription.
          </motion.p>

          {/* CTA BUTTONS */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center md:justify-start gap-6 pt-5"
          >
            {/* Primary Button */}
            <Link
              to="/contact"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl min-w-[220px]"
            >
              <span className="font-bold text-lg">Start Your Project</span>
              <div className="w-10 h-10 bg-white dark:bg-black rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                <ArrowUpRight className="text-black dark:text-white w-5 h-5 block" />
              </div>
            </Link>

            {/* Secondary Button */}
            <Link
              to="/ai-solutions"
              className="group flex items-center justify-between gap-4 pl-6 pr-2 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full hover:scale-105 transition-all duration-300 min-w-[220px]"
            >
              <span className="font-bold text-lg">Explore AI Solutions</span>
              <div className="w-10 h-10 bg-white dark:bg-gray-700 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-sm">
                <ArrowUpRight className="text-black dark:text-white w-5 h-5 block" />
              </div>
            </Link>
          </motion.div>

          {/* TRUST ELEMENT */}
          <motion.div
            variants={fadeInUp}
            className="pt-5 text-sm text-gray-500 dark:text-gray-400 text-center md:text-left"
          >
            {/* <div className="flex items-center justify-center md:justify-start gap-2">
              <img src="/google.png" className="h-5 opacity-80" alt="Google Logo" />
              <span>Rated <b>4.9/5</b> by 50+ businesses</span>
            </div> */}
            {/*  <p className="text-blue-600 mt-1">
              “InnVox helped us get 4x more leads — amazing”
            </p> */}
          </motion.div>
        </motion.div>

        {/* DESKTOP BLOB IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="hidden md:flex justify-end"
        >
          <img
            src="/blob.webp"
            alt="Hero Blob"
            className="w-[420px] animate-float pointer-events-none select-none"
          />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
