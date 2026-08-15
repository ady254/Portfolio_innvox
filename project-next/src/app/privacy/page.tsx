import type { Metadata } from "next";
import PrivacyClient from "./PrivacyClient";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "InnVox Privacy Policy compliant with Digital Personal Data Protection Act, 2023 (DPDPA) of India and IT Act 2000.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return <PrivacyClient />;
}
