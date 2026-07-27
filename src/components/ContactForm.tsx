"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "info@inaslein.com";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = String(form.get("name") ?? "");
    const email = String(form.get("email") ?? "");
    const message = String(form.get("message") ?? "");

    const subject = encodeURIComponent(`Inquiry from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-md">
      <div>
        <label htmlFor="name" className="label-caps text-xs text-ink-soft">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 focus:outline-none focus:border-venetian"
        />
      </div>

      <div>
        <label htmlFor="email" className="label-caps text-xs text-ink-soft">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 focus:outline-none focus:border-venetian"
        />
      </div>

      <div>
        <label htmlFor="message" className="label-caps text-xs text-ink-soft">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="mt-2 w-full border-b border-ink/30 bg-transparent py-2 focus:outline-none focus:border-venetian resize-none"
        />
      </div>

      <button
        type="submit"
        className="label-caps text-xs px-7 py-4 bg-ink text-wall hover:bg-venetian transition-colors"
      >
        Send Message
      </button>

      {status === "sent" && (
        <p className="text-sm text-ink-soft">
          Opening your email client to send this to {CONTACT_EMAIL}.
        </p>
      )}
    </form>
  );
}
