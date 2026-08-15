import type { Metadata } from "next";
import AISolutionsClient from "./AISolutionsClient";

export const metadata: Metadata = {
  title: "AI Agents & Workflow Automation Systems",
  description:
    "Explore InnVox AI solutions: 24/7 AI Voice Agents, WhatsApp lead qualification bots, customer support agents, and custom workflow automations.",
  alternates: {
    canonical: "/ai-solutions",
  },
  openGraph: {
    title: "AI Solutions & Agentic Automation | InnVox",
    description:
      "Deploy 24/7 AI Voice Agents, WhatsApp bots, and automated lead capture workflows.",
    url: "https://innvox.in/ai-solutions",
  },
};

export default function AISolutionsPage() {
  return <AISolutionsClient />;
}
