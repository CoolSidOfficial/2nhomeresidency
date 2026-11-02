// Turns the settings in seo.ts into Next.js metadata. You normally don't need to edit this file.
import type { Metadata } from "next";
import { seo, type SeoPage } from "./seo";
import { site } from "./site";

export function pageMetadata(page: SeoPage, path: string): Metadata {
  const p = seo.pages[page];
  const title = page === "home" ? { absolute: p.title } : p.title;
  return {
    title,
    description: p.description,
    keywords: [...seo.keywords, ...p.keywords],
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "en_IN",
      siteName: site.name,
      url: path,
      title: p.title,
      description: p.description,
      images: [{ url: seo.shareImage, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: p.title,
      description: p.description,
      images: [seo.shareImage],
    },
  };
}

// Business details for Google (shown in rich results / Maps).
export function businessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: site.name,
    description: seo.pages.home.description,
    url: seo.siteUrl,
    image: `${seo.siteUrl}${seo.shareImage}`,
    telephone: site.phone.replace(/\s/g, ""),
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "H. No. 104, Street No. 11, near Shiv Mandir, Dundahera",
      addressLocality: "Gurugram",
      addressRegion: "Haryana",
      postalCode: "122016",
      addressCountry: "IN",
    },
    areaServed: ["Udyog Vihar", "Dundahera", "Cyber City", "Gurugram"],
    priceRange: "₹₹",
  };
}
