"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does it take to build a website or web app?",
    a: "Most projects are delivered within 2 to 4 weeks, depending on scope and complexity. A standard business website can be live in under 2 weeks. Custom web apps with integrations, dashboards, or e-commerce typically take 3 to 4 weeks. We agree on a timeline before starting, so there are no surprises.",
  },
  {
    q: "How much does a website cost?",
    a: "Pricing depends on your requirements, features, and scale. We provide a transparent quote after a free brainstorming session where we understand your goals. There are no hidden fees. Whether you need a landing page or a full-scale platform, we scope the work and agree on a fixed price before any code is written.",
  },
  {
    q: "What happens in the brainstorming session?",
    a: "The brainstorming session is a free 30-minute call where we discuss your business goals, target audience, required features, and timeline. We ask the right questions to understand exactly what you need, then provide a clear proposal with scope, timeline, and pricing. No commitment required.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Yes. We serve ambitious brands across India and the entire GCC region, including the UAE, Saudi Arabia, Qatar, Bahrain, and Oman. Our remote-first process makes it easy to collaborate across time zones.",
  },
  {
    q: "What tech stack do you use?",
    a: "We build with modern, scalable technologies — primarily Next.js, React, and TypeScript for frontend. For backend and databases we use Node.js, Supabase, and PostgreSQL. We also integrate AI automations, WhatsApp workflows, and payment gateways depending on the project.",
  },
  {
    q: "Do you provide support after launch?",
    a: "Yes. Every project includes a post-launch support period. We handle bug fixes, performance tuning, and minor updates. For ongoing maintenance and feature additions, we offer flexible retainer plans tailored to your needs.",
  },
  {
    q: "What types of businesses do you work with?",
    a: "We work with startups, agencies, clinics, gyms, real estate firms, e-commerce brands, and service businesses. If you need a high-performance digital platform that drives revenue, we can build it. Our focus is on outcome-driven solutions, not just design.",
  },
  {
    q: "Can you build AI-powered features like chatbots or voice agents?",
    a: "Yes. We build intelligent chatbots, WhatsApp bots, voice agents, and AI automation workflows. These systems handle customer queries, qualify leads, and run 24/7. Our upcoming V3 platform will take conversational AI calling to the next level.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent">
            Frequently asked questions
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-lg font-medium">
            Everything you need to know before working with us.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="group w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-800 dark:text-gray-200 text-[17px] tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:via-purple-500 group-hover:to-pink-500 transition-all duration-300">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 text-gray-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
