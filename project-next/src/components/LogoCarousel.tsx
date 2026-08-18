"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

/**
 * Client brands InnVox has built for.
 * Each entry: name, industry tag, URL, optional short result.
 */
const clients = [
  {
    name: "Minara Gifting",
    industry: "E-commerce",
    url: "https://www.minaragifting.com/",
    result: "Full store + payments",
    accent: "from-rose-500 to-pink-600",
    initial: "MG",
    image: "/minara-logo.webp",
  },
  {
    name: "Sangat Motor Centre",
    industry: "Automotive",
    url: "https://seashell-lion-595208.hostingersite.com/",
    result: "3D config + instant booking",
    accent: "from-blue-500 to-indigo-600",
    initial: "SM",
    image: "/sangat-moto.webp",
  },
  {
    name: "Al Harmain Institute",
    industry: "Education",
    url: "https://alharmainislamicinstitute.com/",
    result: "40% more enquiries",
    accent: "from-emerald-500 to-teal-600",
    initial: "AH",
    image: "/alharmainlogo.webp",
  },
  {
    name: "Hygena Official",
    industry: "E-commerce",
    url: "https://hygienaofficial.com/",
    result: "50% less cart abandonment",
    accent: "from-violet-500 to-purple-600",
    initial: "HY",
    image: "/hygiena-logo.webp",
  },



];

// Double for seamless infinite marquee
const track = [...clients, ...clients];

const LogoCarousel = () => {
  return (
    <section className="py-14 md:py-20 bg-white relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10 px-6"
      >
        <p className="text-blue-600 text-xs font-bold tracking-[0.2em] uppercase mb-2">
          Trusted by growing brands
        </p>
        <h2 className="text-2xl md:text-3xl font-black text-gray-900">
          Brands We&apos;ve{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
            Built For
          </span>
        </h2>
      </motion.div>

      {/* Marquee container */}
      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee w-max gap-4 py-2">
          {track.map((client, i) => (
            <a
              key={`${client.name}-${i}`}
              href={client.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${client.name} — ${client.industry}`}
              className="group flex items-center gap-3 px-5 py-3 rounded-2xl border border-gray-100 bg-white shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 shrink-0 cursor-pointer"
            >
              {/* Monogram avatar or Image */}
              {client.image ? (
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm overflow-hidden bg-white border border-gray-100 p-1">
                  <img src={client.image} alt={client.name} className="w-full h-full object-contain" />
                </div>
              ) : (
                <div
                  className={`w-9 h-9 rounded-xl bg-gradient-to-br ${client.accent} flex items-center justify-center text-white font-black text-xs shrink-0 shadow-sm`}
                >
                  {client.initial}
                </div>
              )}

              {/* Name + industry */}
              <div className="leading-tight">
                <p className="text-sm font-black text-gray-900 whitespace-nowrap group-hover:text-blue-600 transition-colors">
                  {client.name}
                </p>
                <p className="text-[10px] text-gray-400 font-medium whitespace-nowrap">
                  {client.industry} · {client.result}
                </p>
              </div>

              {/* External icon — appears on hover */}
              <ExternalLink className="w-3.5 h-3.5 text-gray-300 group-hover:text-blue-500 transition-colors ml-1 shrink-0" />
            </a>
          ))}
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-wrap justify-center gap-8 mt-10 px-6 text-center"
      >
        {[
          { value: "8+", label: "Brands shipped" },
          { value: "5", label: "Countries reached" },
          { value: "100%", label: "Project success rate" },
          { value: "< 4 wk", label: "Avg. delivery time" },
        ].map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <span className="text-2xl md:text-3xl font-black text-gray-900">
              {stat.value}
            </span>
            <span className="text-xs text-gray-400 font-medium mt-0.5">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="mt-12 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default LogoCarousel;
