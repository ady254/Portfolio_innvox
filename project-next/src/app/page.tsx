
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import JsonLd from "@/components/JsonLd";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to build a website or web app?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most projects are delivered within 2 to 4 weeks, depending on scope and complexity. A standard business website can be live in under 2 weeks. Custom web apps with integrations, dashboards, or e-commerce typically take 3 to 4 weeks."
      }
    },
    {
      "@type": "Question",
      "name": "How much does a website cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Pricing depends on your requirements, features, and scale. We provide a transparent quote after a free brainstorming session where we understand your goals. There are no hidden fees. We scope the work and agree on a fixed price before any code is written."
      }
    },
    {
      "@type": "Question",
      "name": "What happens in the brainstorming session?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The brainstorming session is a free 30-minute call where we discuss your business goals, target audience, required features, and timeline. We then provide a clear proposal with scope, timeline, and pricing. No commitment required."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with clients outside India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We serve ambitious brands across India and the entire GCC region, including the UAE, Saudi Arabia, Qatar, Bahrain, and Oman. Our remote-first process makes it easy to collaborate across time zones."
      }
    },
    {
      "@type": "Question",
      "name": "What tech stack do you use?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We build with modern, scalable technologies — primarily Next.js, React, and TypeScript for frontend. For backend and databases we use Node.js, Supabase, and PostgreSQL. We also integrate AI automations, WhatsApp workflows, and payment gateways."
      }
    },
    {
      "@type": "Question",
      "name": "Do you provide support after launch?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every project includes a post-launch support period. We handle bug fixes, performance tuning, and minor updates. For ongoing maintenance and feature additions, we offer flexible retainer plans."
      }
    },
    {
      "@type": "Question",
      "name": "What types of businesses do you work with?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We work with startups, agencies, clinics, gyms, real estate firms, e-commerce brands, and service businesses. Our focus is on outcome-driven solutions, not just design."
      }
    },
    {
      "@type": "Question",
      "name": "Can you build AI-powered features like chatbots or voice agents?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We build intelligent chatbots, WhatsApp bots, voice agents, and AI automation workflows. These systems handle customer queries, qualify leads, and run 24/7."
      }
    }
  ]
};

const WhoWeAre = dynamic(() => import("@/components/WhoWeAre"));
const ServicesSection = dynamic(() => import("@/components/ServicesSection"));
const Projects = dynamic(() => import("@/components/Projects"));
const Testimonial = dynamic(() =>
  import("@/components/ui/design-testimonial").then((m) => ({ default: m.Testimonial }))
);
const FAQSection = dynamic(() => import("@/components/FAQSection"));
const ContactSection = dynamic(() => import("@/components/ContactSection"));

const Home = () => {
  return (
    <>
      <JsonLd data={faqJsonLd} />
      <Hero />
      <LogoCarousel />
      <WhoWeAre />
      <ServicesSection variant="home" />
      <Projects variant="home" />
      <Testimonial />
      <FAQSection />

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 px-6 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-sm font-medium text-purple-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
            <span>Now building</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter">
            V3
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 font-light mb-4">
            Conversational AI Calling
          </p>
          <p className="text-gray-500 max-w-xl mx-auto mb-12">
            Real-time voice agents that handle your business calls with human-level conversations. Launching soon.
          </p>

          {/* Promo Video */}
          <div className="relative max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_80px_rgba(168,85,247,0.15)]">
            <video
              src="/V3 Promo Video.webm"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto"
              poster=""
            />
          </div>
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Home;
