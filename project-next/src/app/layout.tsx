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
  title: "InnVox - Web, AI Automation & Digital Growth",
  description:
    "InnVox builds websites, AI automation, WhatsApp systems, and digital marketing for growing businesses across India and the GCC.",
  openGraph: {
    title: "InnVox - Web, AI Automation & Digital Growth",
    description:
      "Websites, AI agents, WhatsApp automation, and marketing systems for businesses across India and the GCC.",
    url: "https://innvox.in",
    siteName: "InnVox",
    type: "website",
  },
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
        <Navbar />
        <main className="flex-grow pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
