"use client";

import { useState } from "react";
import { site } from "@/lib/site";

// No database: the review is sent to the owner on WhatsApp for approval,
// then the owner adds it to `reviews` in src/lib/site.ts.
export default function ReviewForm() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!rating) {
      setError("Please choose a star rating.");
      return;
    }
    const data = new FormData(e.currentTarget);
    const text = [
      `New review for ${site.name}`,
      `Rating: ${"★".repeat(rating)}${"☆".repeat(5 - rating)} (${rating}/5)`,
      `Name: ${data.get("name")}`,
      `Stayed as: ${data.get("stayedAs")}`,
      `Review: ${data.get("review")}`,
    ].join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
    e.currentTarget.reset();
    setRating(0);
  }

  const field =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  if (sent) {
    return (
      <div className="rounded-2xl bg-soft p-6 text-center">
        <p className="font-display text-xl font-semibold">Thank you! 🙏</p>
        <p className="mt-2 text-muted">
          WhatsApp opened with your review. Press send there, and it will appear here once approved.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-sm font-semibold text-brand hover:underline"
        >
          Write another review
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <fieldset>
        <legend className="mb-1.5 text-sm font-medium">Your rating</legend>
        <div className="flex gap-1" onMouseLeave={() => setHover(0)}>
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => {
                setRating(n);
                setError("");
              }}
              onMouseEnter={() => setHover(n)}
              aria-label={`${n} star${n > 1 ? "s" : ""}`}
              aria-pressed={rating === n}
              className={`text-4xl leading-none transition ${
                n <= (hover || rating) ? "text-amber-500" : "text-line"
              }`}
            >
              ★
            </button>
          ))}
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </fieldset>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-1.5 text-sm font-medium">
          Your name
          <input name="name" required maxLength={60} className={field} placeholder="e.g. Rahul S." />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          You are a
          <select name="stayedAs" className={field} defaultValue="Resident">
            <option>Resident</option>
            <option>Former resident</option>
            <option>Parent / guardian</option>
            <option>Visitor</option>
          </select>
        </label>
      </div>

      <label className="grid gap-1.5 text-sm font-medium">
        Your review
        <textarea
          name="review"
          required
          rows={4}
          maxLength={600}
          className={field}
          placeholder="How was your stay? Rooms, cleanliness, food, owner, location…"
        />
      </label>

      <button
        type="submit"
        className="justify-self-start rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
      >
        Submit review
      </button>
    </form>
  );
}
