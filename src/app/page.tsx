import Image from "next/image";
import Link from "next/link";
import Gallery from "./Gallery";
import { getGalleryPhotos, getHeroPhoto } from "@/lib/photos";
import { pageMetadata } from "@/lib/metadata";
import { Check, SectionHeading } from "./ui";
import { amenities, faqs, googleReviewUrl, reviews, rooms, rules, site } from "@/lib/site";
import ReviewForm from "./ReviewForm";

export const metadata = pageMetadata("home", "/");

const rupee =(n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function Home() {
  const hero = getHeroPhoto();
  const photos = getGalleryPhotos();

  return (
    <>
        {/* Hero */}
        <section className="relative isolate flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-[#2a211b] text-white">
          {hero ? (
            <Image
              src={hero}
              alt={`Open dining area at ${site.name}`}
              fill
              priority
              sizes="100vw"
              className="-z-20 object-cover"
            />
          ) : (
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,#b5542f_0%,#2a211b_65%)]" />
          )}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />
          <div className="mx-auto w-full max-w-6xl px-4 py-24 sm:px-6">
            <div className="max-w-2xl">
              <p className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium backdrop-blur">
                PG for working professionals & students · Near Udyog Vihar, {site.city}
              </p>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-tight sm:text-6xl">
                {site.tagline}.
              </h1>
              <p className="mt-6 max-w-lg text-lg text-white/80">
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
                  className="rounded-full border border-white/40 bg-white/10 px-7 py-3 font-semibold backdrop-blur transition hover:bg-white/20"
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
                    <dt className="text-sm text-white/70">{k}</dt>
                    <dd className="font-display text-2xl font-semibold">{v}</dd>
                  </div>
                ))}
              </dl>
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

        {/* Photos */}
        <section id="photos" className="py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Photos"
              title="Take a look around"
              text="Swipe or use the arrows to browse. Tap a photo to see it full screen."
            />
            <Gallery photos={photos} />
          </div>
        </section>

        {/* Amenities */}
        <section id="amenities" className="border-t border-line bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Amenities"
              title="Everything you need, already taken care of"
            />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {amenities.map((a) => (
                <div key={a.title} className="rounded-2xl border border-line bg-bg p-6">
                  <div className="mb-4 h-10 w-10 rounded-xl bg-soft p-2.5">
                    <Check />
                  </div>
                  <h3 className="font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm text-muted">{a.text}</p>
                </div>
              ))}
            </div>
            <p className="mt-10 text-center">
              <Link href="/facilities" className="font-semibold text-brand hover:underline">
                See all room facilities →
              </Link>
            </p>
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

        {/* Reviews */}
        <section id="reviews" className="border-t border-line bg-surface py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <SectionHeading
              eyebrow="Reviews"
              title="What our residents say"
              text={
                reviews.length
                  ? `Rated ${(reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)} out of 5 by ${reviews.length} resident${reviews.length > 1 ? "s" : ""}.`
                  : "Stayed with us? We'd love to hear about it."
              }
            />

            {reviews.length > 0 ? (
              <div className="mb-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {reviews.map((r, i) => (
                  <figure key={i} className="flex flex-col rounded-2xl border border-line bg-bg p-6">
                    <p className="text-lg tracking-wider text-amber-500" aria-label={`${r.rating} out of 5 stars`}>
                      {"★".repeat(r.rating)}
                      <span className="text-line">{"★".repeat(5 - r.rating)}</span>
                    </p>
                    <blockquote className="mt-3 flex-1 text-ink">“{r.text}”</blockquote>
                    <figcaption className="mt-5 flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-soft font-semibold text-brand">
                        {r.name[0]}
                      </span>
                      <span>
                        <span className="block font-semibold">{r.name}</span>
                        <span className="block text-xs text-muted">
                          {[r.stayedAs, r.date].filter(Boolean).join(" · ")}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            ) : (
              <p className="mx-auto mb-12 max-w-md rounded-2xl border-2 border-dashed border-line p-6 text-center text-muted">
                No reviews yet. Be the first to share your experience!
              </p>
            )}

            <div className="mx-auto max-w-2xl rounded-3xl border border-line bg-bg p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">Write a review</h3>
              <p className="mb-6 mt-1 text-sm text-muted">
                Reviews are checked before they appear on the site.
              </p>
              <ReviewForm />
              {googleReviewUrl && (
                <p className="mt-6 border-t border-line pt-5 text-sm text-muted">
                  Or{" "}
                  <a
                    href={googleReviewUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-brand hover:underline"
                  >
                    review us on Google ↗
                  </a>
                </p>
              )}
            </div>
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
                Visits any day, 10 AM to 7 PM. Call or WhatsApp us to schedule your visit.
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
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
              >
                Get directions
              </a>
            </div>
            <div className="min-h-80 overflow-hidden rounded-2xl border border-line lg:col-span-3">
              <iframe
                src={
                  site.mapEmbedUrl ||
                  `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`
                }
                title={`Map showing ${site.name}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full min-h-80 w-full"
              />
            </div>
          </div>
        </section>
    </>
  );
}
