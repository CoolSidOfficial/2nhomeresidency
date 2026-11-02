"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Photo } from "@/lib/photos";

const AUTOPLAY_MS = 5000;

export default function Gallery({ photos }: { photos: Photo[] }) {
  const count = photos.length;
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const [paused, setPaused] = useState(false);
  const touchX = useRef<number | null>(null);
  const thumbs = useRef<HTMLDivElement>(null);

  const step = useCallback(
    (d: number) => setIndex((i) => (i + d + count) % count),
    [count],
  );

  // Autoplay, paused on hover/touch and while fullscreen is open.
  useEffect(() => {
    if (count < 2 || paused || fullscreen) return;
    const t = setTimeout(() => step(1), AUTOPLAY_MS);
    return () => clearTimeout(t);
  }, [index, paused, fullscreen, count, step]);

  // Keep the active thumbnail in view.
  useEffect(() => {
    const el = thumbs.current?.children[index] as HTMLElement | undefined;
    el?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [index]);

  // Keyboard controls + scroll lock in fullscreen.
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreen, step]);

  const swipe = {
    onTouchStart: (e: React.TouchEvent) => {
      touchX.current = e.touches[0].clientX;
      setPaused(true);
    },
    onTouchEnd: (e: React.TouchEvent) => {
      if (touchX.current === null) return;
      const dx = e.changedTouches[0].clientX - touchX.current;
      if (Math.abs(dx) > 40) step(dx < 0 ? 1 : -1);
      touchX.current = null;
    },
  };

  if (count === 0) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-line bg-surface p-10 text-center text-muted">
        Photos coming soon.
      </div>
    );
  }

  const current = photos[index];

  return (
    <>
      {/* Slider */}
      <div
        className="relative overflow-hidden rounded-3xl bg-[#1a1410] shadow-xl"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        {...swipe}
      >
        <div className="relative aspect-[4/5] sm:aspect-[16/10] lg:aspect-[16/9]">
          {photos.map((p, i) => (
            <div
              key={p.src}
              aria-hidden={i !== index}
              className={`absolute inset-0 transition-opacity duration-700 ${
                i === index ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              {/* Blurred fill so portrait photos don't leave empty bars */}
              <Image
                src={p.src}
                alt=""
                fill
                sizes="10vw"
                className="scale-110 object-cover opacity-50 blur-2xl"
              />
              <button
                type="button"
                onClick={() => setFullscreen(true)}
                aria-label={`Open ${p.caption} full screen`}
                tabIndex={i === index ? 0 : -1}
                className="absolute inset-0 cursor-zoom-in"
              >
                <Image
                  src={p.src}
                  alt={p.caption}
                  fill
                  priority={i === 0}
                  sizes="(min-width: 1152px) 1152px, 100vw"
                  className="object-contain"
                />
              </button>
            </div>
          ))}

          {count > 1 && (
            <>
              <button
                type="button"
                onClick={() => step(-1)}
                aria-label="Previous photo"
                className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur transition hover:bg-black/60 sm:left-5"
              >
                ‹
              </button>
              <button
                type="button"
                onClick={() => step(1)}
                aria-label="Next photo"
                className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-2xl text-white backdrop-blur transition hover:bg-black/60 sm:right-5"
              >
                ›
              </button>
            </>
          )}

          <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/70 to-transparent p-4 pt-16 text-white sm:p-6">
            <p className="font-display text-lg font-semibold sm:text-2xl">{current.caption}</p>
            <p className="text-sm text-white/80">
              {index + 1} / {count}
            </p>
          </div>
        </div>
      </div>

      {/* Thumbnails */}
      {count > 1 && (
        <div ref={thumbs} className="mt-4 flex gap-3 overflow-x-auto pb-2">
          {photos.map((p, i) => (
            <button
              key={p.src}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Show ${p.caption}`}
              aria-current={i === index}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl transition sm:h-20 sm:w-28 ${
                i === index
                  ? "ring-3 ring-brand ring-offset-2 ring-offset-bg"
                  : "opacity-60 hover:opacity-100"
              }`}
            >
              <Image src={p.src} alt="" fill sizes="112px" className="object-cover" />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen viewer */}
      {fullscreen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
          onClick={() => setFullscreen(false)}
          className="fixed inset-0 z-50 flex flex-col bg-black/95 text-white"
        >
          <div className="flex items-center justify-between p-4 text-sm">
            <span>
              {index + 1} / {count} · {current.caption}
            </span>
            <button
              type="button"
              onClick={() => setFullscreen(false)}
              aria-label="Close"
              className="rounded-full p-2 text-2xl leading-none hover:bg-white/10"
            >
              ×
            </button>
          </div>
          <div className="relative flex-1" onClick={(e) => e.stopPropagation()} {...swipe}>
            <Image
              key={current.src}
              src={current.src}
              alt={current.caption}
              fill
              sizes="100vw"
              className="object-contain"
            />
            {count > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous photo"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl hover:bg-white/20 sm:left-4"
                >
                  ‹
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next photo"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 px-4 py-3 text-2xl hover:bg-white/20 sm:right-4"
                >
                  ›
                </button>
              </>
            )}
          </div>
          <div className="h-6" />
        </div>
      )}
    </>
  );
}
