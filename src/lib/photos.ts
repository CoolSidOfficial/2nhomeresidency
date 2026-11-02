import fs from "node:fs";
import path from "node:path";

// Photos are read from public/photos at build time.
// - A file named hero.* (e.g. hero.jpg) becomes the big background on the top of the page.
// - A file named owner.* (e.g. owner.jpg) is the owner's photo in the welcome popup.
// - Every other image appears in the Photos section, sorted by file name.
//   Prefix names with numbers to control order: 01-front-view.jpg, 02-double-room.jpg ...
//   The caption comes from the file name: "02-double-room.jpg" → "Double room".

const DIR = path.join(process.cwd(), "public", "photos");
const IMAGE = /\.(jpe?g|png|webp|avif)$/i;

export type Photo = { src: string; caption: string };

function files(): string[] {
  try {
    return fs.readdirSync(DIR).filter((f) => IMAGE.test(f)).sort();
  } catch {
    return [];
  }
}

const isHero = (f: string) => /^hero\./i.test(f);
const isOwner = (f: string) => /^owner\./i.test(f);

function caption(file: string) {
  const words = file
    .replace(IMAGE, "")
    .replace(/^\d+[-_ ]*/, "")
    .replace(/[-_]+/g, " ")
    .trim();
  return words ? words[0].toUpperCase() + words.slice(1) : "Photo";
}

export function getGalleryPhotos(): Photo[] {
  return files()
    .filter((f) => !isHero(f) && !isOwner(f))
    .map((f) => ({ src: `/photos/${encodeURIComponent(f)}`, caption: caption(f) }));
}

export function getHeroPhoto(): string | null {
  const hero = files().find(isHero);
  return hero ? `/photos/${encodeURIComponent(hero)}` : null;
}

// owner.* (e.g. owner.jpg) is shown in the welcome popup.
export function getOwnerPhoto(): string | null {
  const owner = files().find(isOwner);
  return owner ? `/photos/${encodeURIComponent(owner)}` : null;
}
