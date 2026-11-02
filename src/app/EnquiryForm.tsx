"use client";

import { useState } from "react";
import { rooms, site } from "@/lib/site";

// No backend: the form composes a WhatsApp message with the visitor's details.
export default function EnquiryForm() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const text = [
      `Hi ${site.name}, I'd like to enquire about a room.`,
      `Name: ${data.get("name")}`,
      `Phone: ${data.get("phone")}`,
      `Room: ${data.get("room")}`,
      `Move-in: ${data.get("date") || "Flexible"}`,
      data.get("message") ? `Message: ${data.get("message")}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    window.open(
      `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener",
    );
    setSent(true);
  }

  const field =
    "w-full rounded-lg border border-line bg-surface px-4 py-3 text-ink placeholder:text-muted focus:border-brand focus:outline-none focus:ring-2 focus:ring-brand/20";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      <label className="grid gap-1.5 text-sm font-medium">
        Full name
        <input name="name" required className={field} placeholder="Your name" />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Phone
        <input
          name="phone"
          type="tel"
          required
          className={field}
          placeholder="10-digit mobile"
        />
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Room type
        <select name="room" className={field} defaultValue={rooms[1].name}>
          {rooms.map((r) => (
            <option key={r.name}>{r.name}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-1.5 text-sm font-medium">
        Move-in date
        <input name="date" type="date" className={field} />
      </label>
      <label className="grid gap-1.5 text-sm font-medium sm:col-span-2">
        Message (optional)
        <textarea
          name="message"
          rows={3}
          className={field}
          placeholder="Anything we should know?"
        />
      </label>
      <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
        <button
          type="submit"
          className="rounded-full bg-brand px-7 py-3 font-semibold text-white transition hover:bg-brand-dark"
        >
          Send enquiry on WhatsApp
        </button>
        {sent && (
          <p className="text-sm text-muted">
            WhatsApp opened in a new tab. Send the message there and we&apos;ll reply soon.
          </p>
        )}
      </div>
    </form>
  );
}
