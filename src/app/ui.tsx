import Link from "next/link";
import { site } from "@/lib/site";

export const nav = [
  { href: "/#rooms", label: "Rooms" },
  { href: "/#photos", label: "Photos" },
  { href: "/facilities", label: "Facilities" },
  { href: "/nearby", label: "Nearby" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export const tel = `tel:${site.phone.replace(/\s/g, "")}`;

export function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden>
      <path fill="currentColor" d="M8.1 13.6 4.5 10l-1.1 1.1 4.7 4.7 9-9-1.1-1.1z" />
    </svg>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}

export function PageIntro({ eyebrow, title, text }: { eyebrow: string; title: string; text: string }) {
  return (
    <section className="border-b border-line bg-soft">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{text}</p>
      </div>
    </section>
  );
}

export function CallToAction() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Like what you see?</h2>
        <p className="mt-4 text-lg text-muted">Visit any day between 10 AM and 7 PM.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={tel}
            className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
          >
            Call {site.phone}
          </a>
          <Link
            href="/#rooms"
            className="rounded-full border border-line bg-surface px-7 py-3 font-semibold transition hover:border-brand"
          >
            See rooms & prices
          </Link>
        </div>
      </div>
    </section>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <Link href="/" className="font-display text-xl font-semibold">
          2nd<span className="text-brand">Home</span> Residency
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-muted lg:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className="transition hover:text-ink">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={tel}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Call now
          </a>
          {/* Mobile menu (no JS needed) */}
          <details className="group relative lg:hidden">
            <summary
              aria-label="Menu"
              className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-line [&::-webkit-details-marker]:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M4 7h16M4 12h16M4 17h16" className="group-open:hidden" />
                <path d="M6 6l12 12M18 6 6 18" className="hidden group-open:block" />
              </svg>
            </summary>
            <nav className="absolute right-0 mt-2 w-52 rounded-2xl border border-line bg-surface p-2 shadow-xl">
              {nav.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="block rounded-xl px-4 py-2.5 font-medium hover:bg-soft"
                >
                  {n.label}
                </Link>
              ))}
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <>
      <footer className="border-t border-line py-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 text-sm text-muted sm:px-6 md:flex-row md:items-start md:justify-between">
          <div>
            <p className="font-display text-lg font-semibold text-ink">© {site.name}</p>
            <p className="mt-1">{site.address}</p>
          </div>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="hover:text-ink">
                {n.label}
              </Link>
            ))}
          </nav>
        </div>
      </footer>

      <a
        href={`https://wa.me/${site.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105"
      >
        <svg viewBox="0 0 24 24" className="h-7 w-7" fill="currentColor" aria-hidden>
          <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.5-3.9-4.7-4.1-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.1.1.3 0 .5l-.3.5-.4.4c-.1.1-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l1.9.9c.3.1.5.2.5.3.1.1.1.6-.1 1.2z" />
        </svg>
      </a>
    </>
  );
}
