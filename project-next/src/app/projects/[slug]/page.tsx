import type { Metadata } from "next";
import { PROJECT_DB } from "./projectData";
import ProjectSlugClient from "./ProjectSlugClient";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECT_DB[slug];

  if (!project) {
    return {
      title: "Project Not Found",
      description: "The requested InnVox case study could not be found.",
    };
  }

  return {
    title: `${project.title} - ${project.industry} Case Study`,
    description: `${project.tagline}. Learn how InnVox engineered a custom ${project.industry} web application and growth system.`,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.title} | InnVox Case Study`,
      description: project.tagline,
      url: `https://innvox.in/projects/${slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | InnVox Case Study`,
      description: project.tagline,
    },
  };
}

import JsonLd from "@/components/JsonLd";

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = PROJECT_DB[slug];

  const projectJsonLd = project
    ? {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": project.title,
        "headline": project.tagline,
        "description": project.solution,
        "genre": project.industry,
        "author": { "@id": "https://innvox.in/#organization" },
        "url": `https://innvox.in/projects/${slug}`,
        "keywords": project.stack.join(", "),
        ...(project.testimonial && {
          "review": {
            "@type": "Review",
            "reviewBody": project.testimonial.quote,
            "author": {
              "@type": "Person",
              "name": project.testimonial.author,
              "jobTitle": project.testimonial.role,
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
          },
        }),
      }
    : null;

  return (
    <>
      {projectJsonLd && <JsonLd data={projectJsonLd} />}
      <ProjectSlugClient slug={slug} />
    </>
  );
}
