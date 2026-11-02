import Image from "next/image";
import { pageMetadata } from "@/lib/metadata";
import { amenities, facilityGroups } from "@/lib/site";
import { CallToAction, Check, PageIntro, SectionHeading } from "../ui";

export const metadata = pageMetadata("facilities", "/facilities");

export default function FacilitiesPage() {
  return (
    <>
      <PageIntro
        eyebrow="Room facilities"
        title="Everything a room needs, already in place"
        text="Here's what you get in your room, kitchenette and bathroom, plus the shared spaces in the building."
      />

      <section className="py-20">
        <div className="mx-auto max-w-6xl space-y-20 px-4 sm:px-6">
          {facilityGroups.map((g, i) => (
            <article
              key={g.title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              <div
                className={`relative aspect-[4/3] overflow-hidden rounded-3xl bg-soft shadow-lg ${
                  i % 2 ? "lg:order-2" : ""
                }`}
              >
                <Image
                  src={g.photo}
                  alt={g.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-brand">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-3xl font-semibold">{g.title}</h2>
                <p className="mt-3 text-lg text-muted">{g.text}</p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {g.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-line bg-surface py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Included services" title="Taken care of, every day" />
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
        </div>
      </section>

      <CallToAction />
    </>
  );
}
