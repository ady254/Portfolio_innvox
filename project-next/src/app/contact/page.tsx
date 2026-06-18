
import ContactSection from "@/components/ContactSection";


const Contact = () => {
  return (
    <>


      <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-black text-gray-900 mb-6">Tell us what you're building.</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            We respond within 24 hours. If it's urgent, WhatsApp us directly.
          </p>
        </div>
      </section>

      <ContactSection />

    </>
  );
};

export default Contact;
