import type { Metadata } from "next";
import { Fraunces, Geist } from "next/font/google";
import { site } from "@/lib/site";
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
  title: {
    default: `${site.name} | PG near Udyog Vihar, ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: `${site.tagline}. Furnished single, double and triple sharing rooms with meals, Wi-Fi, housekeeping and 24×7 security.`,
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
      </body>
    </html>
  );
}
