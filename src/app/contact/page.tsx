import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PaletteMark } from "@/components/PaletteMark";

export const metadata: Metadata = {
  title: "Contact | Ina Slein",
  description:
    "Inquire about a portrait commission or private virtual art instruction with Ina Slein.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-10 py-20">
      <div className="flex items-center gap-4 mb-4">
        <PaletteMark size={22} />
        <h1 className="label-caps text-xs text-ink-soft">Contact</h1>
      </div>
      <h2 className="font-display text-3xl sm:text-4xl max-w-md mb-4">
        Let&rsquo;s talk about a portrait, or a lesson.
      </h2>
      <p className="text-ink-soft max-w-md mb-12 leading-relaxed">
        Based in West Palm Beach, Florida. Portrait commissions and private
        instruction are available in person or by video call.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <ContactForm />

        <div className="label-caps text-xs text-ink-soft space-y-6">
          <div>
            <p className="text-ink mb-1">Email</p>
            <a
              href="mailto:info@inaslein.com"
              className="normal-case tracking-normal text-ink-soft hover:text-venetian transition-colors"
            >
              info@inaslein.com
            </a>
          </div>
          <div>
            <p className="text-ink mb-1">Location</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=West+Palm+Beach+FL"
              target="_blank"
              rel="noopener noreferrer"
              className="normal-case tracking-normal text-ink-soft hover:text-venetian transition-colors"
            >
              West Palm Beach, Florida — Get directions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
