import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us & Engineering Vision",
  description:
    "Learn about InnVox, our engineering team, co-founders, and our mission building high-performance web platforms and AI automation systems across India and the GCC.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | InnVox Digital Engineering Agency",
    description:
      "Engineers building Next-Gen Web Platforms, Agentic AI, and Automation Systems for India & GCC businesses.",
    url: "https://innvox.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
