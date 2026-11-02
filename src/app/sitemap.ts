import type { MetadataRoute } from "next";
import { seo } from "@/lib/seo";

// Served at /sitemap.xml. Add new pages here when you create them.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${seo.siteUrl}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${seo.siteUrl}/facilities`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${seo.siteUrl}/nearby`, changeFrequency: "monthly", priority: 0.8 },
  ];
}
