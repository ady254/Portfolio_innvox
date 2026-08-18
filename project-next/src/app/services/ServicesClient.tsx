"use client";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import StrategyCallModal from "@/components/StrategyCallModal";
import { useState } from "react";
import { ArrowRight, Send, Calendar, Clock, Rocket } from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const processSteps = [
    {
      step: "01",
      title: "Tell us what you need",
      description: "Fill out a quick form or hop on a WhatsApp chat. Share your goals, challenges, and timeline.",
      icon: Send,
      color: "text-blue-600 bg-blue-50",
    },
    {
      step: "02",
      title: "Free strategy call",
      description: "We hop on a 30-minute call to understand your business, your audience, and what success looks like.",
      icon: Calendar,
      color: "text-indigo-600 bg-indigo-50",
    },
    {
      step: "03",
      title: "Clear proposal & timeline",
      description: "You get a detailed scope, fixed pricing, and a realistic delivery timeline within 48 hours.",
      icon: Clock,
      color: "text-emerald-600 bg-emerald-50",
    },
    {
      step: "04",
      title: "Build, launch, grow",
      description: "We build in short sprints, share progress weekly, and launch when it's ready. Then we help you grow.",
      icon: Rocket,
      color: "text-amber-600 bg-amber-50",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">
      <StrategyCallModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* HERO — Value Proposition First */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest mb-8">
            Our Services
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            The digital systems that{" "}
            <span className="text-blue-600">grow your business</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10">
            From high-converting websites to AI that works 24/7 — we build, launch, and scale the tools your business actually needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-base transition shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919939711942?text=Hi%20InnVox%2C%20I%27d%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-full font-bold text-base transition cursor-pointer"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES — Using existing ServicesSection component */}
      <ServicesSection />

      {/* HOW IT WORKS — Process Section */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">How it works</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white">
              From first chat to <span className="text-blue-600">live product</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative"
                >
                  <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mb-5`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-bold text-gray-300 dark:text-gray-700 font-mono mb-2 block">{step.step}</span>
                  <h3 className="text-lg font-black text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Not sure which service you need?</h2>
          <p className="text-blue-100 text-lg mb-8">
            That&apos;s what the strategy call is for. We&apos;ll figure it out together — no commitment required.
          </p>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 hover:bg-blue-50 rounded-full font-bold text-base transition shadow-xl cursor-pointer"
          >
            Book a Free Strategy Call
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
