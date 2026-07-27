import type { Metadata } from "next";
import { PaletteMark } from "@/components/PaletteMark";
import { BUSINESS } from "@/lib/business";

export const metadata: Metadata = {
  title: "Contact | Ina Slein",
  description:
    "Reach Ina Slein by phone or email to inquire about a portrait commission or private virtual art instruction.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 sm:px-10 py-20">
      <div className="flex items-center gap-4 mb-4">
        <PaletteMark size={22} />
        <h1 className="label-caps text-xs text-ink-soft">Contact</h1>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl max-w-md mb-4">
        Let&rsquo;s talk about a portrait, or a lesson.
      </h2>
      <p className="text-ink-soft max-w-md mb-14 leading-relaxed">
        Based in {BUSINESS.cityDisplay}, serving the Palm Beach area.
        Portrait commissions and private instruction are available in
        person or by video call — reach out directly by phone or email.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 border-t border-ink/10 pt-10">
        <div>
          <p className="label-caps text-xs text-ink-soft mb-2">Phone</p>
          <a
            href={`tel:${BUSINESS.telephone}`}
            className="font-display text-xl text-ink hover:text-venetian transition-colors"
          >
            {BUSINESS.telephoneDisplay}
          </a>
        </div>
        <div>
          <p className="label-caps text-xs text-ink-soft mb-2">Email</p>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-display text-xl text-ink hover:text-venetian transition-colors break-all"
          >
            {BUSINESS.email}
          </a>
        </div>
        <div>
          <p className="label-caps text-xs text-ink-soft mb-2">Location</p>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.city + " " + BUSINESS.state)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xl text-ink hover:text-venetian transition-colors"
          >
            {BUSINESS.cityDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
