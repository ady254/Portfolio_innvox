import { MetadataRoute } from "next";
import { PROJECT_DB } from "./projects/[slug]/projectData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://innvox.in";
  const lastModified = new Date();

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ai-solutions`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/subscription`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = Object.keys(PROJECT_DB).map(
    (slug) => ({
      url: `${baseUrl}/projects/${slug}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    })
  );

  return [...staticRoutes, ...projectRoutes];
}
