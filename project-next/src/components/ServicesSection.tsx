"use client";
import {
  CheckCircle2,
  Globe,
  Megaphone,
  MessageCircle,
  Wrench,
  Code,
  Bot,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

interface ServicesSectionProps {
  variant?: "home" | "page";
}

const ServicesSection = ({ variant = "page" }: ServicesSectionProps) => {
  const services = [
    {
      id: "website",
      title: "Website as a Service",
      description:
        "Launch a premium website without massive upfront costs. We design, build, host, and maintain it for you.",
      points: ["Modern UI/UX", "Mobile-friendly", "Fast & secure"],
      link: "/services#website",
      color: "from-blue-500 to-blue-700",
      icon: Globe,
    },
    {
      id: "ads",
      title: "Meta Ads Management",
      description:
        "Turn ad spend into qualified leads with data-driven campaigns, creatives, and conversion tracking.",
      points: ["Campaign setup", "Creatives", "Lead tracking"],
      link: "/services#ads",
      color: "from-purple-500 to-purple-700",
      icon: Megaphone,
    },
    {
      id: "whatsapp",
      title: "WhatsApp Automation",
      description:
        "Engage customers instantly with broadcasts, automated replies, and API-powered workflows.",
      points: ["Broadcasts", "Automation", "API setup"],
      link: "/services#whatsapp",
      color: "from-cyan-500 to-blue-600",
      icon: MessageCircle,
    },
    {
      id: "maintenance",
      title: "Maintenance & Support",
      description:
        "Stay online and secure with proactive updates, bug fixes, and reliable hosting support.",
      points: ["Monthly updates", "Bug fixes", "Hosting support"],
      link: "/services#maintenance",
      color: "from-emerald-500 to-emerald-700",
      icon: Wrench,
    },
    {
      id: "development",
      title: "Custom Development",
      description:
        "Build dashboards, backends, and APIs tailored to how your business actually operates.",
      points: ["Backend systems", "Dashboard", "APIs"],
      link: "/services#development",
      color: "from-orange-500 to-red-600",
      icon: Code,
    },
    {
      id: "chatbots",
      title: "AI Chatbots & Voice Agents",
      description:
        "Qualify leads, answer FAQs, and handle calls 24/7 with AI trained on your business.",
      points: ["Lead qualification", "FAQ answers", "24/7 support"],
      link: "/ai-solutions",
      color: "from-indigo-500 to-indigo-700",
      icon: Bot,
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1 },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  const isHome = variant === "home";

  return (
    <section
      className={`overflow-hidden transition-colors duration-300 ${
        isHome
          ? "py-24 bg-gray-50 dark:bg-gray-950"
          : "py-24 bg-white dark:bg-gray-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {isHome && (
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-bold uppercase tracking-widest mb-6">
              <Sparkles className="w-4 h-4" /> Our Services
            </span>
          )}
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight mb-4">
            Everything Your Business Needs—
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              Under One Roof
            </span>
          </h2>
          {isHome && (
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Preview what we deliver on the homepage. Tap learn more to explore
              full details, pricing, and how each service fits your goals.
            </p>
          )}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                id={service.id}
                variants={cardVariants}
                className="relative group rounded-2xl p-[2px] scroll-mt-28"
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-60 blur-xl group-hover:opacity-100 transition-all duration-500`}
                />

                <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-lg group-hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 shadow-lg`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {service.title}
                  </h3>

                  {isHome && (
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5">
                      {service.description}
                    </p>
                  )}

                  <ul className="space-y-3 flex-grow">
                    {service.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 dark:text-gray-300 font-medium text-sm">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={service.link}
                    className="mt-6 inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-wider group/link hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {isHome && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-bold rounded-2xl hover:scale-105 transition-transform shadow-xl"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
