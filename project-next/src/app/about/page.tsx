import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us & Engineering Vision",
  description:
    "InnVox helps businesses turn websites into lead machines and automate the rest. Learn about our team, our approach, and why we're the digital engineering partner for India & GCC.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us | InnVox Digital Engineering Agency",
    description:
      "We turn websites into lead machines and automate the rest. Digital engineering for India & GCC businesses.",
    url: "https://innvox.in/about",
  },
};

export default function AboutPage() {
  return <AboutClient />;
}
