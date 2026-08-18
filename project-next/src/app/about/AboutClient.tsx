"use client";

import ContactSection from "@/components/ContactSection";
import CoFounderPortrait from "@/components/CoFounderPortrait";
import StrategyCallModal from "@/components/StrategyCallModal";
import { useState } from "react";
import { ArrowRight, Globe2, Zap, TrendingUp, Users, Code2, MessageCircle } from "lucide-react";

export default function AboutClient() {
  const [modalOpen, setModalOpen] = useState(false);

  const impactStats = [
    { number: "40+", label: "Projects Delivered", icon: Code2, color: "text-blue-600 bg-blue-50" },
    { number: "3x", label: "Avg. Lead Increase", icon: TrendingUp, color: "text-emerald-600 bg-emerald-50" },
    { number: "95%", label: "Client Retention", icon: Users, color: "text-violet-600 bg-violet-50" },
    { number: "24h", label: "Response Time", icon: MessageCircle, color: "text-amber-600 bg-amber-50" },
  ];

  const differentiators = [
    {
      title: "Outcome-driven, not output-driven",
      desc: "We don't just build websites. We build systems that generate leads, close sales, and save your team hours every week.",
    },
    {
      title: "Full-stack, not freelancers",
      desc: "Strategy, design, development, AI automation, and growth — all under one roof. No juggling 5 different vendors.",
    },
    {
      title: "Built for India & GCC",
      desc: "We understand the market, the buyers, and the business culture. From New Delhi to Dubai, we build for how you actually sell.",
    },
  ];

  const team = [
    { name: "InnVox Strategy Team", role: "Client discovery, project planning, and growth systems", initial: "S" },
    { name: "InnVox Build Team", role: "Web development, automation, integrations, and QA", initial: "B" },
    { name: "InnVox AI Team", role: "Chatbots, voice agents, and workflow automation", initial: "A" },
  ];

  const values = [
    { title: "Ship fast", desc: "We keep projects moving with clear timelines and focused execution. No endless back-and-forth." },
    { title: "Stay honest", desc: "No vague promises. We tell you what is useful, realistic, and worth building." },
    { title: "Measure everything", desc: "Websites, ads, and automation should connect back to leads, revenue, or saved time." },
  ];

  return (
    <>
      <StrategyCallModal open={modalOpen} onClose={() => setModalOpen(false)} />

      {/* Hero Section — Value Proposition First */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-white text-gray-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Badge */}
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-bold uppercase tracking-widest">
              <Globe2 className="w-4 h-4" />
              India &amp; GCC
            </span>
          </div>

          {/* Value Proposition — The First Thing a Client Reads */}
          <div className="text-center max-w-4xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
              We turn websites into{" "}
              <span className="text-blue-600">lead machines</span>{" "}
              — and automate the rest.
            </h1>
            <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
              InnVox is a digital engineering agency building web platforms, AI automation, and growth systems for businesses across India and the GCC.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-base transition shadow-lg shadow-blue-600/20 cursor-pointer"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919939711942?text=Hi%20InnVox%2C%20I%27d%20like%20to%20start%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gray-200 hover:border-blue-500 text-gray-700 hover:text-blue-600 rounded-full font-bold text-base transition cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Impact Stats — Client-Facing Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {impactStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="text-center p-6 rounded-2xl border border-gray-100 hover:border-blue-200 hover:shadow-lg transition-all duration-300 group bg-white">
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${stat.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-4xl md:text-5xl font-black text-gray-900 mb-1">{stat.number}</p>
                  <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Social Proof — Client Logos */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs font-bold uppercase tracking-[0.2em] text-gray-400 mb-8">
            Trusted by businesses across India &amp; the GCC
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {[
              { src: "/aaysha-logo.webp", alt: "Aaysha" },
              { src: "/alharmainlogo.webp", alt: "Al Harmain" },
              { src: "/hygiena-logo.webp", alt: "Hygiena" },
              { src: "/metal-logo.webp", alt: "Metal" },
              { src: "/minara-logo.webp", alt: "Minara" },
              { src: "/sangat-moto.webp", alt: "Sangat Motors" },
            ].map((logo) => (
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                className="h-10 md:h-12 w-auto object-contain opacity-50 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Story — Why We Exist */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left: Co-founder */}
            <div className="flex items-center justify-center">
              <CoFounderPortrait size="lg" role="Co-Founder" />
            </div>

            {/* Right: Story */}
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-600 mb-4">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6">
                We saw good businesses running on broken digital tools.
              </h2>
              <p className="text-gray-500 leading-relaxed mb-4">
                Websites that weren&apos;t converting. Leads falling through the cracks. Teams doing manually what a bot could handle in seconds.
              </p>
              <p className="text-gray-500 leading-relaxed mb-6">
                So in 2025, we built InnVox — a team of engineers, strategists, and AI specialists who care about one thing: making your digital presence actually work for your business.
              </p>
              <p className="text-gray-500 leading-relaxed">
                Our team has 5+ years of combined experience across web development, AI, and digital marketing. We work with startups, clinics, agencies, real estate firms, and e-commerce brands across India and the GCC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why InnVox — Differentiators */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Why InnVox</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              What makes us different from <span className="text-blue-600">every other agency</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {differentiators.map((item) => (
              <div key={item.title} className="p-8 bg-white border border-gray-200 rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <h3 className="text-xl font-black text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Built by Focused Teams */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">The people behind the systems</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Built by focused teams
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {team.map((person) => (
              <div key={person.name} className="p-8 border border-gray-200 bg-white rounded-2xl hover:border-blue-500 hover:shadow-lg transition-all duration-300">
                <div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-black text-lg mb-6">
                  {person.initial}
                </div>
                <h3 className="font-black text-lg text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">How we work</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">Our values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => (
              <div key={value.title} className="p-8 bg-white border border-gray-200 rounded-2xl">
                <h3 className="text-xl font-black text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack — Repositioned as credibility, not feature list */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-400 mb-3">Our toolkit</p>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900">
              Modern tech, <span className="text-blue-600">proven results</span>
            </h2>
          </div>

          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-5 gap-4 md:gap-6 max-w-3xl mx-auto">
            {[
              { name: "React", slug: "react" },
              { name: "Next.js", slug: "nextdotjs" },
              { name: "TypeScript", slug: "typescript" },
              { name: "Node.js", slug: "nodedotjs" },
              { name: "Tailwind", slug: "tailwindcss" },
              { name: "Firebase", slug: "firebase" },
              { name: "Supabase", slug: "supabase" },
              { name: "OpenAI", slug: "openai" },
              { name: "Stripe", slug: "stripe" },
              { name: "Docker", slug: "docker" },
            ].map((tech) => (
              <div
                key={tech.slug}
                className="aspect-square border border-gray-200 flex flex-col items-center justify-center p-4 hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 group bg-white rounded-xl"
              >
                <div className="w-10 h-10 mb-2 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={`https://cdn.simpleicons.org/${tech.slug}`}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = `https://cdn.simpleicons.org/react`;
                      (e.target as HTMLImageElement).style.filter = "grayscale(100%)";
                    }}
                  />
                </div>
                <span className="text-gray-600 font-medium text-xs text-center group-hover:text-blue-600 transition-colors duration-300">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — Before Contact Form */}
      <section className="py-20 bg-blue-600 text-white text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-black mb-4">Ready to build something that works?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 30-minute strategy call. No commitment. Just clarity on what your business needs.
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
    </>
  );
}
