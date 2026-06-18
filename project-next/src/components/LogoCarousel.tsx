"use client";

import { motion } from "framer-motion";

const techStack = [
  { name: "React", slug: "react" },
  { name: "Next.js", slug: "nextdotjs" },
  { name: "Tailwind", slug: "tailwindcss" },
  { name: "Node.js", slug: "nodedotjs" },
  { name: "TypeScript", slug: "typescript" },
  { name: "Firebase", slug: "firebase" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "OpenAI", slug: "openai" },
  { name: "Framer", slug: "framer" },
  { name: "Supabase", slug: "supabase" },
  { name: "Twilio", slug: "twilio" },
  { name: "Stripe", slug: "stripe" },
  { name: "Docker", slug: "docker" },
  { name: "AWS", slug: "amazonaws" },
  { name: "Vercel", slug: "vercel" },
];

const LogoCarousel = () => {
  // Double the array for seamless infinite loop
  const logos = [...techStack, ...techStack];

  return (
    <section className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 px-6"
      >
        <p className="text-blue-600 text-sm font-semibold tracking-wide mb-2">
          Trusted by experts.
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Built with the best.
        </h2>
      </motion.div>

      {/* Marquee container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Scrolling track */}
        <div className="flex animate-marquee w-max">
          {logos.map((tech, i) => (
            <div
              key={`${tech.slug}-${i}`}
              className="flex items-center gap-3 mx-6 md:mx-10 group cursor-default"
            >
              <div className="w-8 h-8 md:w-10 md:h-10 flex-shrink-0 grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500">
                <img
                  src={`https://cdn.simpleicons.org/${tech.slug}`}
                  alt={tech.name}
                  className="w-full h-full object-contain"
                  loading="lazy"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://cdn.simpleicons.org/react";
                    (e.target as HTMLImageElement).style.filter =
                      "grayscale(100%)";
                  }}
                />
              </div>
              <span className="text-gray-400 group-hover:text-gray-800 font-semibold text-sm md:text-base whitespace-nowrap transition-colors duration-500">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom subtle divider */}
      <div className="mt-16 max-w-5xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>
    </section>
  );
};

export default LogoCarousel;
