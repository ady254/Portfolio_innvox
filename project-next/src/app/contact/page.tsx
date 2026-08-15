import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Book a Strategy Call & Contact Us",
  description:
    "Get in touch with InnVox to discuss your web application, AI automation, or WhatsApp marketing strategy. Serving clients in India & the GCC.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Book a Strategy Call | InnVox",
    description:
      "Schedule a consultation or reach out to InnVox for web development, AI agents, and automation.",
    url: "https://innvox.in/contact",
  },
};

const Contact = () => {
  return (
    <div className="pt-8">
      <ContactSection />
    </div>
  );
};

export default Contact;
