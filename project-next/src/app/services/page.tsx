"use client";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";

import { Zap, Layout, Users, TrendingUp, Clock, ShieldCheck } from 'lucide-react';
import { motion } from "framer-motion";

const Services = () => {
  return (
    <div className="bg-white dark:bg-gray-950 min-h-screen transition-colors duration-300">

      {/* HERO SECTION WITH TYPEWRITER EFFECT */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-[12vw] md:text-[10rem] font-black text-gray-900 dark:text-white leading-[0.85] tracking-tighter">
              SERVICES
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                className="text-blue-600 inline-block ml-2 w-4 md:w-8 h-[10vw] md:h-[9rem] bg-blue-600 align-middle"
              ></motion.span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed font-light"
          >
            We provide comprehensive digital solutions tailored to your business needs, from high-performance websites to AI-driven automation.
          </motion.p>
        </div>
      </section>

      {/* COMPONENT SECTION */}
      <ServicesSection />

      {/* WHY CHOOSE US - REDESIGNED */}
      <section className="py-24 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">Why Partner with Us?</h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">We don't just deliver projects; we deliver results that compound over time.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Layout className="w-8 h-8 text-blue-600" />,
                title: "All-in-One Solution",
                desc: "No need to hire multiple agencies. We handle design, development, and marketing under one roof."
              },
              {
                icon: <Zap className="w-8 h-8 text-yellow-500" />,
                title: "Lightning Fast Speed",
                desc: "We optimize every line of code ensuring your digital presence loads instantly."
              },
              {
                icon: <Users className="w-8 h-8 text-purple-600" />,
                title: "Dedicated Support",
                desc: "Our team is always available to help. Get fast, human responses to your queries."
              },
              {
                icon: <TrendingUp className="w-8 h-8 text-green-600" />,
                title: "Proven Results",
                desc: "Our clients see an average 200% increase in leads and 150% growth in revenue."
              },
              {
                icon: <ShieldCheck className="w-8 h-8 text-cyan-600" />,
                title: "Latest Technology",
                desc: "We use cutting-edge tools like React, AI agents, and cloud automation to keep you ahead."
              },
              {
                icon: <Clock className="w-8 h-8 text-red-500" />,
                title: "Quick Turnaround",
                desc: "Average project delivery time is 2-4 weeks depending on complexity."
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-3xl border border-gray-100 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-gray-50 dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />

    </div>
  );
};

export default Services;
