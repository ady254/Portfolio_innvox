
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
      "name": "How much does a website cost in India?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Website costs vary depending on complexity, features, and scale. We provide custom quotes after a free strategy call to ensure you get a high-performance platform tailored to your specific business needs."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build an e-commerce platform?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our average delivery time for a full-scale e-commerce platform with payment integrations is under 4 weeks. We prioritize speed without compromising on scalable architecture."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with clients in the UAE and Saudi Arabia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we actively serve ambitious brands across India and the entire GCC region, including the UAE, Saudi Arabia, Qatar, and Bahrain."
      }
    },
    {
      "@type": "Question",
      "name": "What makes InnVox different from other agencies?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We are a digital engineering agency, not just designers. We focus on outcome-driven solutions using the latest tech stacks (Next.js, React) and integrate cutting-edge AI automations and WhatsApp workflows to drive measurable revenue."
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
