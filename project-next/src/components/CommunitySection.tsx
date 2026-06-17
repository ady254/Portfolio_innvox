"use client";

import { motion, Variants } from "framer-motion";
import {
  Globe,
  Lightbulb,
  Trophy,
  BookOpen,
  Link2,
  Mail,
  Users,
} from "lucide-react";
import SlideButton from "./SlideButton";

const WHATSAPP_URL =
  "https://wa.me/919939711942?text=Hi%20Innvox%2C%20I%27d%20like%20to%20join%20the%20community!";

const benefits = [
  {
    icon: Globe,
    title: "Websites that impress",
    desc: "Learn what converts visitors into clients",
    accent: "from-blue-500 to-cyan-500",
  },
  {
    icon: Lightbulb,
    title: "Tech that solves problems",
    desc: "Real builds, real workflows, zero fluff",
    accent: "from-amber-500 to-orange-500",
  },
  {
    icon: Trophy,
    title: "Hackathons & challenges",
    desc: "Test skills and ship under pressure",
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: BookOpen,
    title: "Courses & events",
    desc: "Stay ahead with curated learning",
    accent: "from-emerald-500 to-teal-500",
  },
];

const rules = [
  { num: "01", title: "Bring curiosity", desc: "Ask questions, explore, experiment." },
  { num: "02", title: "Share what works", desc: "Wins, failures, and lessons welcome." },
  { num: "03", title: "Help others win", desc: "Lift peers — growth is collective." },
];

const CommunitySection = () => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const stagger: Variants = {
    visible: { transition: { staggerChildren: 0.08 } },
  };

  const handleJoin = () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-widest mb-6">
              <Users className="w-4 h-4" />
              InnVox Community
            </motion.div>

            <motion.h2
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl font-black leading-[1.05] mb-6"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                WhatsApp
              </span>
              <br />
              <span className="text-gray-900">Community</span>
            </motion.h2>

            <motion.p
              variants={fadeInUp}
              className="text-lg text-gray-600 mb-10 max-w-lg leading-relaxed"
            >
              We don&apos;t just post updates — we open doors. A private circle of
              builders, founders, and creators growing together.
            </motion.p>

            <motion.div
              variants={stagger}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
            >
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    whileHover={{ y: -4, scale: 1.02 }}
                    className="group relative p-5 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all overflow-hidden"
                  >
                    <div
                      className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.accent} scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300`}
                    />
                    <div
                      className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.accent} flex items-center justify-center mb-3 shadow-md`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.p
              variants={fadeInUp}
              className="text-gray-600 mb-6 leading-relaxed"
            >
              If growth is your goal, this is your new home. Let&apos;s innovate,
              create, and succeed — together.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 text-sm font-semibold text-gray-500 mb-8"
            >
              <a
                href="https://innvox.in"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Link2 className="w-4 h-4" /> innvox.in
              </a>
              <a
                href="mailto:info@innvox.in"
                className="inline-flex items-center gap-2 hover:text-blue-600 transition-colors"
              >
                <Mail className="w-4 h-4" /> info@innvox.in
              </a>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <SlideButton
                label="Slide to Join Community"
                successLabel="Opening WhatsApp..."
                onComplete={handleJoin}
              />
              <p className="text-xs text-gray-400 mt-3 text-center sm:text-left">
                Drag the arrow → to connect on WhatsApp
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] as const }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none lg:sticky lg:top-28"
          >
            <div className="absolute -inset-1 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-600 rounded-[2rem] blur-sm opacity-30" />
            <div className="relative bg-gray-950 text-white p-8 md:p-10 rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/20 rounded-full blur-[60px]" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-black mb-2">
                  Community <span className="text-blue-400">Rules</span>
                </h3>
                <p className="text-gray-400 text-sm mb-8 pb-6 border-b border-gray-800">
                  Keep it valuable. Keep it respectful.
                </p>

                <div className="space-y-7">
                  {rules.map((rule, i) => (
                    <motion.div
                      key={rule.num}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                      className="flex gap-5 group"
                    >
                      <span className="text-3xl md:text-4xl font-black text-gray-800 group-hover:text-blue-500/60 transition-colors shrink-0">
                        #{rule.num}
                      </span>
                      <div>
                        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-blue-300 transition-colors">
                          {rule.title}
                        </h4>
                        <p className="text-sm text-gray-400">{rule.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-6 border-t border-gray-800">
                  <p className="text-gray-300 italic text-sm leading-relaxed">
                    &ldquo;Thanks for joining — now pass the key and invite others
                    in!&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
