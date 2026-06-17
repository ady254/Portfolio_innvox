"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const stats = [
  { value: "30+", label: "Projects delivered" },
  { value: "5+", label: "Years team experience" },
  { value: "5", label: "Countries served" },
  { value: "2019", label: "Founded" },
];

const countries = ["India", "UAE", "Saudi Arabia", "Qatar", "Bahrain"];

const WhoWeAre = () => {
  return (
    <section className="py-20 md:py-28 bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-14 md:mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400 mb-4">
            Section 3 · Who we are
          </p>
          <div className="space-y-5 text-gray-300 text-lg leading-relaxed">
            <p>
              We&apos;re InnVox — a team of developers, designers, and AI
              specialists. We work with founders and growing businesses who need
              a strong digital foundation, built fast, and built right.
            </p>
            <p>
              We don&apos;t just build websites or run ads. We build systems —
              ones that work while you sleep.
            </p>
            <p className="text-white font-semibold">Founded in 2019.</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-gray-800 bg-gray-900/60 p-6 md:p-8 hover:border-gray-700 transition-colors"
            >
              <p className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3"
        >
          {countries.map((country) => (
            <span
              key={country}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-700 bg-gray-900/40 text-sm text-gray-300"
            >
              <MapPin className="w-3.5 h-3.5 text-blue-400" />
              {country}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
