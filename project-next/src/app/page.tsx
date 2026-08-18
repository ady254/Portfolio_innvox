
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
const AIVoiceDemo = dynamic(() => import("@/components/AIVoiceDemo"));
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
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 px-6">
          <AIVoiceDemo learnMoreHref="/ai-solutions" />
        </div>
      </section>

      <ContactSection />
    </>
  );
};

export default Home;
