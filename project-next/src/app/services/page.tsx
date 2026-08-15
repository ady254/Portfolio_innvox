import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "Digital Engineering & AI Services",
  description:
    "Explore InnVox services: Custom Web Platforms, Agentic AI Chatbots, WhatsApp Marketing & Automation, Meta Ads Management, and Maintenance.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Services & Capabilities | InnVox",
    description:
      "Custom Web Applications, Agentic AI, WhatsApp Growth Systems & Meta Ads for India and GCC businesses.",
    url: "https://innvox.in/services",
  },
};

import JsonLd from "@/components/JsonLd";

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Custom Web Application Development",
        "provider": { "@id": "https://innvox.in/#organization" },
        "description": "High-performance React/Next.js web applications, e-commerce storefronts, admin management portals, and online payment integrations.",
        "areaServed": ["India", "UAE", "Saudi Arabia", "Qatar", "Bahrain"]
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Agentic AI & Voice Automation",
        "provider": { "@id": "https://innvox.in/#organization" },
        "description": "24/7 AI Voice Agents, smart lead qualification chatbots, and custom workflow automations.",
        "areaServed": ["India", "GCC"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "WhatsApp Growth & Marketing Systems",
        "provider": { "@id": "https://innvox.in/#organization" },
        "description": "Automated WhatsApp inquiry processing, broadcast marketing, and CRM integration.",
        "areaServed": ["India", "GCC"]
      }
    }
  ]
};

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={servicesJsonLd} />
      <ServicesClient />
    </>
  );
}
