import type { MetadataRoute } from "next";
import { blogPosts } from "./blogs/blogPosts";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://alexcipher.xyz";

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/affiliates`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security-tips-newsletter`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/services/audit-readiness-competition-prep`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/defi-protocol-auditing`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/gambling-dapp-auditing`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services/protocol-security-incident-response`,
      lastModified: new Date("2026-03-06"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const blogPages: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [...staticPages, ...blogPages];
}
