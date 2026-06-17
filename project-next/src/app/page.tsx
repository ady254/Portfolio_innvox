
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import AIVoiceDemo from "@/components/AIVoiceDemo";
import ServicesSection from "@/components/ServicesSection";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import CommunitySection from "@/components/CommunitySection";

const Home = () => {
  return (
    <>
      <Hero />
      <WhoWeAre />

      <section className="py-24 bg-black relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[300px] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
        <div className="relative z-10 px-6">
          <AIVoiceDemo learnMoreHref="/ai-solutions" />
        </div>
      </section>

      <ServicesSection variant="home" />
      <Projects variant="home" />
      <Testimonials />
      <CommunitySection />
      <ContactSection />
    </>
  );
};

export default Home;
