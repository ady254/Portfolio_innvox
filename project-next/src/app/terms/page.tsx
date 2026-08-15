import type { Metadata } from "next";
import TermsClient from "./TermsClient";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "InnVox Terms & Conditions governing , AI Automations, and Software Development agreements.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}
