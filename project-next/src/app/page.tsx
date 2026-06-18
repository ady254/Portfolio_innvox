
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import AIVoiceDemo from "@/components/AIVoiceDemo";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />
      <ServicesSection variant="home" />
      <Projects variant="home" />
      <Testimonials />

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
