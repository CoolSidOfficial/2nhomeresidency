import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { site } from "@/lib/site";
import { getOwnerPhoto } from "@/lib/photos";
import { businessJsonLd } from "@/lib/metadata";
import { seo } from "@/lib/seo";
import OwnerPopup from "./OwnerPopup";
import { SiteFooter, SiteHeader } from "./ui";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: {
    default: seo.pages.home.title,
    template: `%s | ${site.name} Gurugram`,
  },
  description: seo.pages.home.description,
  keywords: seo.keywords,
  applicationName: site.name,
  robots: { index: true, follow: true },
  formatDetection: { telephone: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <OwnerPopup photo={getOwnerPhoto()} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }}
        />
      </body>
    </html>
  );
}
