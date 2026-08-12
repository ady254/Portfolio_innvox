"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Globe2, ArrowUpRight, Layers, Gauge } from "lucide-react";
import Link from "next/link";
import CoFounderPortrait from "@/components/CoFounderPortrait";

// Animated counter hook
function useCounter(end: number, duration: number = 2000, startOnView: boolean = true) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const hasStarted = useRef(false);

  useEffect(() => {
    if (startOnView && !inView) return;
    if (hasStarted.current) return;
    hasStarted.current = true;

    let startTime: number;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [end, duration, inView, startOnView]);

  return { count, ref };
}

const metrics = [
  {
    value: 100,
    prefix: "",
    suffix: "%",
    label: "Custom Architectures",
    description: "Zero templates, fully engineered",
    icon: Layers,
    color: "from-blue-500 to-blue-600",
  },
  {
    value: 5,
    prefix: "",
    suffix: "+",
    label: "Years Combined Engineering Expertise",
    description: "Across web, AI & automation",
    icon: Users,
    color: "from-indigo-500 to-indigo-600",
  },
  {
    value: 3,
    prefix: "",
    suffix: "",
    label: "Strategic Global Markets",
    description: "India, UAE, Qatar",
    icon: Globe2,
    color: "from-sky-500 to-sky-600",
  },
  {
    value: 200,
    prefix: "< ",
    suffix: "ms",
    label: "Average AI Response Time",
    description: "Low-latency agentic systems",
    icon: Gauge,
    color: "from-violet-500 to-violet-600",
  },
];



const WhoWeAre = () => {
  return (
    <section className="relative py-24 md:py-32 bg-gray-950 text-white overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="grid md:grid-cols-[1fr_auto] gap-12 md:gap-16 items-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Who we are
            </span>

            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
              Architecting the Future of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                Digital Commerce & AI Automation.
              </span>
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              InnVox is a team of developers, designers, and AI specialists. We
              work with founders and growing businesses who need a strong digital
              foundation — built fast, and built right.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex justify-center md:justify-end"
          >
            <CoFounderPortrait variant="dark" size="lg" role="Co-Founder" />
          </motion.div>
        </div>

        {/* Metrics bento grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 mb-12"
        >
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <MetricCard key={metric.label} metric={metric} index={index} Icon={Icon} />
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-end mb-12"
        >
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-bold text-sm uppercase tracking-wider transition-colors"
          >
            Learn more about us
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

// Extracted metric card component with animated counter
function MetricCard({
  metric,
  index,
  Icon,
}: {
  metric: (typeof metrics)[number];
  index: number;
  Icon: typeof Layers;
}) {
  const { count, ref } = useCounter(metric.value, 1800);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="group relative rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-8 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-500 overflow-hidden shadow-lg shadow-black/20"
    >
      {/* Hover glow */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
      />

      {/* Icon */}
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon className="w-5 h-5 text-white" />
      </div>

      {/* Animated number */}
      <p className="text-4xl md:text-5xl font-black text-white mb-1 tabular-nums">
        {metric.prefix}
        {count}
        <span className="text-blue-400">{metric.suffix}</span>
      </p>

      {/* Label */}
      <p className="text-sm font-semibold text-gray-300 mb-1">{metric.label}</p>
      <p className="text-xs text-gray-500">{metric.description}</p>

      {/* Subtle bottom accent line */}
      <div
        className={`absolute bottom-0 left-0 w-0 group-hover:w-full h-0.5 bg-gradient-to-r ${metric.color} transition-all duration-700`}
      />
    </motion.div>
  );
}

export default WhoWeAre;
