// ============================================================
//  SEO SETTINGS: edit this file to change what Google sees.
// ============================================================
//
//  keywords     → search words used on EVERY page. Add or remove freely.
//  pages.*      → the title + description Google shows for each page,
//                 plus extra keywords just for that page.
//
//  Tips:
//  - Title: keep under ~60 characters. Description: ~150–160 characters.
//  - Write for people. Google shows these in search results.
//  - After changing anything, redeploy the site.

export const seo = {
  // Your live website address (no trailing slash). PLACEHOLDER: change once you buy a domain.
  siteUrl: "https://www.2ndhomeresidency.in",

  // Image shown when the site is shared on WhatsApp, Facebook, etc. (from /public)
  shareImage: "/photos/hero.jpg",

  // ---- Keywords used on every page ----
  keywords: [

    "2nd Home Residency",
    "PG in Udyog Vihar",
    "PG near Udyog Vihar Phase 1",
    "PG in Dundahera",
    "PG in Gurugram",
    "PG in Gurgaon",
    "co-living in Gurugram",
    "boys PG in Gurugram",
    "girls PG in Gurugram",
    "PG near Cyber City Gurgaon",
    "PG near Delhi Gurgaon border",
    "PG near IGI Airport",
    "furnished room for rent in Gurugram",
    "AC room PG Gurugram",
    "single room PG Gurugram",
    "double sharing PG Gurugram",
    "PG for working professionals Gurugram",
    "PG with kitchen Gurugram",
  ],

  // ---- Per-page settings ----
  pages: {
    home: {
      title: "2nd Home Residency | PG & Co-Living near Udyog Vihar, Gurugram",
      description:
        "Furnished PG & co-living for girls and boys near Udyog Vihar Phase 1, Dundahera, Gurugram. AC rooms, kitchenette, attached bathroom, Wi-Fi. Call +91 84604 74476.",
      keywords: ["PG near me", "paying guest Gurugram", "rooms for rent Udyog Vihar"],
    },
    facilities: {
      title: "Room Facilities",
      description:
        "Fully furnished rooms with bed, wardrobe, study table, AC, private kitchenette and attached bathroom with geyser at 2nd Home Residency, Gurugram.",
      keywords: ["furnished PG room", "PG with attached bathroom", "PG with AC and kitchen"],
    },
    nearby: {
      title: "Places Nearby",
      description:
        "Walking distance to hospitals, Vishal Mega Mart, the local market and Udyog Vihar Phase 1 offices. About 4 km to Cyber City and 8 km to IGI Airport.",
      keywords: ["PG near Vishal Mega Mart", "PG near hospital Gurugram", "PG walking distance Udyog Vihar"],
    },
  },
};

export type SeoPage = keyof typeof seo.pages;
