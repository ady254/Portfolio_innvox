
import type { Metadata } from "next";
import Projects from "@/components/Projects";

export const metadata: Metadata = {
  title: "Case Studies & Client Projects",
  description:
    "Explore our portfolio of web platforms, e-commerce applications, and AI automation systems built for clients across India and the GCC.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Case Studies & Projects | InnVox",
    description:
      "Real client projects, custom web platforms, e-commerce stores, and AI automations built by InnVox.",
    url: "https://innvox.in/projects",
  },
};

const ProjectsPage = () => {
  return <Projects variant="full" />;
};

export default ProjectsPage;
