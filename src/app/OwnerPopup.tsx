"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { owner, site } from "@/lib/site";

const SEEN_KEY = "owner-popup-seen";

// Welcome popup from the owner. Shows once per browser session, a few seconds after the page loads.
export default function OwnerPopup({ photo }: { photo: string | null }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SEEN_KEY)) return;
    } catch {}
    const t = setTimeout(() => setOpen(true), owner.delaySeconds * 1000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(SEEN_KEY, "1");
    } catch {}
  }

  if (!open) return null;

  const initials = owner.name
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="owner-popup-title"
      onClick={close}
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/50 p-4 backdrop-blur-sm sm:items-center"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[calc(100svh-2rem)] w-full max-w-sm animate-[popup-in_.35s_ease-out] overflow-y-auto rounded-3xl bg-surface text-center shadow-2xl"
      >
        <button
          type="button"
          onClick={close}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-black/30 text-xl leading-none text-white backdrop-blur transition hover:bg-black/50"
        >
          ×
        </button>

        {photo ? (
          <div className="relative aspect-[4/3] w-full bg-soft sm:aspect-square">
            <Image
              src={photo}
              alt={`${owner.name}, ${owner.role}`}
              fill
              priority
              sizes="384px"
              className="object-cover object-top"
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent" />
          </div>
        ) : (
          <>
            <div className="h-28 bg-[radial-gradient(ellipse_at_top_right,var(--brand)_0%,#2a211b_75%)]" />
            <div className="-mt-16 mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-surface bg-soft font-display text-4xl font-semibold text-brand shadow-lg">
              {initials}
            </div>
          </>
        )}

        <div className="px-6 pb-7">
          <h2 id="owner-popup-title" className="mt-2 font-display text-2xl font-semibold">
            {owner.name}
          </h2>
          <p className="text-sm font-medium text-brand">{owner.role}</p>
          <p className="mt-4 text-muted">{owner.message}</p>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <a
              href={`tel:${site.phone.replace(/\s/g, "")}`}
              className="rounded-full bg-brand px-4 py-3 font-semibold text-white transition hover:bg-brand-dark"
            >
              Call
            </a>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                `Hi ${owner.name}, I'm interested in a room at ${site.name}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#25D366] px-4 py-3 font-semibold text-white transition hover:brightness-95"
            >
              WhatsApp
            </a>
          </div>
          <p className="mt-4 text-xs text-muted">{site.phone}</p>
        </div>
      </div>
    </div>
  );
}
