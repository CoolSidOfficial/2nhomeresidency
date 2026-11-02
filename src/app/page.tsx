import EnquiryForm from "./EnquiryForm";
import { amenities, faqs, rooms, rules, site } from "@/lib/site";

const nav = [
  { href: "#rooms", label: "Rooms" },
  { href: "#amenities", label: "Amenities" },
  { href: "#rules", label: "House rules" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

const rupee = (n: number) => `₹${n.toLocaleString("en-IN")}`;

function Check() {
  return (
    <svg viewBox="0 0 20 20" className="mt-0.5 h-5 w-5 shrink-0 text-brand" aria-hidden>
      <path
        fill="currentColor"
        d="M8.1 13.6 4.5 10l-1.1 1.1 4.7 4.7 9-9-1.1-1.1z"
      />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, text }: { eyebrow: string; title: string; text?: string }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-sm font-semibold uppercase tracking-widest text-brand">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-muted">{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-20 border-b border-line bg-bg/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="font-display text-xl font-semibold">
            2nd<span className="text-brand">Home</span> Residency
          </a>
          <nav className="hidden gap-7 text-sm font-medium text-muted md:flex">
            {nav.map((n) => (
              <a key={n.href} href={n.href} className="transition hover:text-ink">
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="rounded-full bg-brand px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Call now
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="inline-block rounded-full bg-soft px-4 py-1.5 text-sm font-medium text-brand">
                PG for students & working professionals · {site.city}
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-6xl">
                {site.tagline}.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-muted">
                Fully furnished rooms, home-cooked meals, fast Wi-Fi and round-the-clock
                security. Just bring your bags.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
                >
                  Book a visit
                </a>
                <a
                  href="#rooms"
                  className="rounded-full border border-line bg-surface px-7 py-3 font-semibold transition hover:border-brand"
                >
                  See rooms & prices
                </a>
              </div>
              <dl className="mt-12 grid max-w-md grid-cols-3 gap-6">
                {[
                  ["From", rupee(Math.min(...rooms.map((r) => r.price)))],
                  ["Meals", "2/day"],
                  ["Security", "24×7"],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="text-sm text-muted">{k}</dt>
                    <dd className="font-display text-2xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Decorative illustration: replace with a real photo via next/image */}
            <div className="relative mx-auto aspect-square w-full max-w-md">
              <div className="absolute inset-0 rotate-3 rounded-[2.5rem] bg-soft" />
              <div className="absolute inset-0 -rotate-2 overflow-hidden rounded-[2.5rem] border border-line bg-surface shadow-xl">
                <svg viewBox="0 0 400 400" className="h-full w-full" aria-hidden>
                  <rect width="400" height="400" fill="var(--soft)" />
                  <path d="M80 200 200 100l120 100v150H80z" fill="var(--surface)" stroke="var(--brand)" strokeWidth="6" strokeLinejoin="round" />
                  <path d="M60 215 200 95l140 120" fill="none" stroke="var(--brand)" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                  <rect x="175" y="270" width="50" height="80" rx="6" fill="var(--brand)" />
                  <rect x="110" y="220" width="45" height="40" rx="4" fill="var(--soft)" stroke="var(--brand)" strokeWidth="4" />
                  <rect x="245" y="220" width="45" height="40" rx="4" fill="var(--soft)" stroke="var(--brand)" strokeWidth="4" />
                  <circle cx="200" cy="175" r="16" fill="var(--soft)" stroke="var(--brand)" strokeWidth="4" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Rooms */}
        <section id="rooms" className="border-t border-line bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Rooms & pricing"
              title="Pick the room that suits you"
              text="Monthly rent per person. Meals, Wi-Fi, housekeeping and electricity (up to fair usage) included."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {rooms.map((room) => (
                <article
                  key={room.name}
                  className={`relative flex flex-col rounded-2xl border p-8 ${
                    room.popular ? "border-brand shadow-lg" : "border-line"
                  } bg-bg`}
                >
                  {room.popular && (
                    <span className="absolute -top-3 left-8 rounded-full bg-brand px-3 py-1 text-xs font-semibold text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-semibold">{room.name}</h3>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-semibold">{rupee(room.price)}</span>
                    <span className="text-muted"> / month</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {room.features.map((f) => (
                      <li key={f} className="flex gap-2">
                        <Check />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#contact"
                    className={`mt-8 rounded-full px-6 py-3 text-center font-semibold transition ${
                      room.popular
                        ? "bg-brand text-white hover:bg-brand-dark"
                        : "border border-line hover:border-brand"
                    }`}
                  >
                    Enquire
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Amenities"
              title="Everything you need, already taken care of"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((a) => (
                <div key={a.title} className="rounded-2xl border border-line bg-surface p-6">
                  <div className="mb-4 h-10 w-10 rounded-xl bg-soft p-2.5">
                    <Check />
                  </div>
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rules */}
        <section id="rules" className="border-y border-line bg-soft py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">House rules</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                A few simple rules keep everyone comfortable
              </h2>
              <p className="mt-4 text-lg text-muted">
                We keep things friendly and fair, so you can focus on studies and work.
              </p>
            </div>
            <ul className="space-y-3">
              {rules.map((r) => (
                <li key={r} className="flex gap-3 rounded-xl bg-surface p-4">
                  <Check />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <SectionHeading eyebrow="FAQ" title="Questions people usually ask" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details
                  key={f.q}
                  className="group rounded-xl border border-line bg-surface p-5 open:shadow-sm"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {f.q}
                    <span className="ml-4 text-xl text-brand transition group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-line bg-surface py-20">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-brand">Contact</p>
              <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
                Come see it for yourself
              </h2>
              <p className="mt-4 text-lg text-muted">
                Visits any day, 10 AM to 7 PM. Send an enquiry and we&apos;ll get back within a few hours.
              </p>
              <dl className="mt-8 space-y-5">
                <div>
                  <dt className="text-sm text-muted">Address</dt>
                  <dd className="font-medium">{site.address}</dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Phone</dt>
                  <dd>
                    <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="font-medium hover:text-brand">
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-sm text-muted">Email</dt>
                  <dd>
                    <a href={`mailto:${site.email}`} className="font-medium hover:text-brand">
                      {site.email}
                    </a>
                  </dd>
                </div>
              </dl>
              {site.mapEmbedUrl && (
                <iframe
                  src={site.mapEmbedUrl}
                  title="Map"
                  loading="lazy"
                  className="mt-8 h-64 w-full rounded-2xl border border-line"
                />
              )}
            </div>
            <div className="rounded-2xl border border-line bg-bg p-6 sm:p-8 lg:col-span-3">
              <h3 className="mb-6 font-display text-2xl font-semibold">Send an enquiry</h3>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 text-sm text-muted sm:flex-row sm:px-6">
          <p>© {site.name}</p>
          <p>{site.address}</p>
        </div>
      </footer>

      {/* Floating WhatsApp button */}
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
