
import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";

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
