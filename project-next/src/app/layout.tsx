import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://innvox.in"),
  title: {
    default: "InnVox - Web, AI Automation & Digital Growth Agency",
    template: "%s | InnVox",
  },
  description:
    "InnVox engineers custom web applications, agentic AI automations, WhatsApp growth systems, and precision digital marketing for businesses across India and the GCC.",
  keywords: [
    "InnVox",
    "Web Development Agency",
    "AI Automation Agency",
    "Agentic AI",
    "E-commerce Web Applications",
    "WhatsApp Automation",
    "India Agency",
    "GCC Tech Agency",
    "Dubai Web Development",
    "Custom Software Engineering",
  ],
  authors: [{ name: "InnVox Team", url: "https://innvox.in" }],
  creator: "InnVox",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "InnVox - Web, AI Automation & Digital Growth",
    description:
      "High-performance websites, AI agents, WhatsApp automation, and digital growth systems across India & the GCC.",
    url: "https://innvox.in",
    siteName: "InnVox",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innvox.in/og-image.png",
        width: 1200,
        height: 630,
        alt: "InnVox - Digital Engineering Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "InnVox - Web, AI Automation & Digital Growth",
    description:
      "High-performance websites, AI agents, WhatsApp automation, and digital growth systems across India & the GCC.",
    images: ["https://innvox.in/og-image.png"],
  },
};

import JsonLd from "@/components/JsonLd";

const rootJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://innvox.in/#organization",
      "name": "InnVox",
      "url": "https://innvox.in",
      "logo": {
        "@type": "ImageObject",
        "url": "https://innvox.in/innvox-favicon.svg",
      },
      "description":
        "Next-Gen Digital Engineering Agency specializing in web applications, agentic AI, WhatsApp automation, and digital growth across India and the GCC.",
      "email": "innvox.in.official@gmail.com",
      "telephone": "+919939711942",
      "sameAs": [
        "https://www.minaragifting.com/",
        "https://alharmainislamicinstitute.com/",
      ],
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://innvox.in/#service",
      "name": "InnVox Digital Agency",
      "url": "https://innvox.in",
      "priceRange": "$$",
      "image": "https://innvox.in/innvox-favicon.svg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressCountry": "IN",
      },
      "areaServed": [
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Bahrain" },
      ],
      "knowsAbout": [
        "Web Application Development",
        "Agentic AI",
        "AI Voice Agents",
        "WhatsApp Automation",
        "E-commerce Platforms",
        "Meta Ads Management",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-gray-900">
        <JsonLd data={rootJsonLd} />
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
