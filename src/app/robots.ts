import type { MetadataRoute } from "next";
import { seo } from "@/lib/seo";

// Served at /robots.txt
export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${seo.siteUrl}/sitemap.xml`,
  };
}
