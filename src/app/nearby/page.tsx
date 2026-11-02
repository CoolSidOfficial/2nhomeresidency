import { pageMetadata } from "@/lib/metadata";
import { area, nearby, nearbyHighlights, nearbySearches, site } from "@/lib/site";
import { CallToAction, PageIntro } from "../ui";

export const metadata = pageMetadata("nearby", "/nearby");

const isWalk = (d: string) => /walking|next door/i.test(d);

const mapsSearch = (what: string) =>
  `https://www.google.com/maps/search/${encodeURIComponent(`${what} near ${site.address}`)}`;

export default function NearbyPage() {
  return (
    <>
      <PageIntro
        eyebrow="Places nearby"
        title={`Right next to Udyog Vihar, ${site.city}`}
        text="Hospitals, Vishal Mega Mart, the local market and Udyog Vihar Phase 1 offices are all a short walk away. Cyber City and the airport are a quick ride."
      />

      <section className="border-b border-line bg-surface">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:px-6 lg:grid-cols-4">
          {nearbyHighlights.map((h) => (
            <div key={h.label}>
              <dt className="sr-only">{h.label}</dt>
              <dd>
                <span className="block font-display text-3xl font-semibold text-brand">{h.value}</span>
                <span className="text-sm text-muted">{h.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
          {nearby.map((group) => (
            <article key={group.category} className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="font-display text-xl font-semibold">{group.category}</h2>
              <ul className="mt-5 divide-y divide-line">
                {group.places.map((p) => (
                  <li key={p.name} className="flex items-start justify-between gap-4 py-3">
                    <span className="font-medium">{p.name}</span>
                    <span className="shrink-0 text-right">
                      {isWalk(p.distance) ? (
                        <span className="inline-block rounded-full bg-soft px-2.5 py-0.5 text-xs font-semibold text-brand">
                          🚶 {p.distance}
                        </span>
                      ) : (
                        <span className="block font-semibold text-brand">{p.distance}</span>
                      )}
                      {p.time && <span className="block text-xs text-muted">{p.time}</span>}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <p className="mx-auto mt-8 max-w-6xl px-4 text-sm text-muted sm:px-6">
          Distances are approximate and may vary with route and traffic.
        </p>
      </section>

      <section className="border-y border-line bg-surface py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand">On the map</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Explore the area</h2>
            <p className="mt-4 text-lg text-muted">
              Find anything else around {area} on Google Maps.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {nearbySearches.map((s) => (
                <a
                  key={s}
                  href={mapsSearch(s)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium transition hover:border-brand hover:text-brand"
                >
                  {s} ↗
                </a>
              ))}
            </div>
          </div>
          <div className="min-h-96 overflow-hidden rounded-2xl border border-line lg:col-span-3">
            <iframe
              src={
                site.mapEmbedUrl ||
                `https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`
              }
              title={`Map of the area around ${site.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-96 w-full"
            />
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
}
