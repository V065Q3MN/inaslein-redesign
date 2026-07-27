import { PaletteMark } from "./PaletteMark";
import { BUSINESS } from "@/lib/business";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-wall-deep">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 py-14 flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-center gap-3">
          <PaletteMark size={18} />
          <span className="font-display text-lg">{BUSINESS.name}</span>
        </div>

        <div className="label-caps text-[0.7rem] text-ink-soft space-y-2">
          <p>{BUSINESS.cityDisplay}</p>
          <a
            href={`tel:${BUSINESS.telephone}`}
            className="block hover:text-venetian transition-colors"
          >
            {BUSINESS.telephoneDisplay}
          </a>
          <a
            href={`mailto:${BUSINESS.email}`}
            className="block hover:text-venetian transition-colors"
          >
            {BUSINESS.email}
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(BUSINESS.city + " " + BUSINESS.state)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-venetian transition-colors"
          >
            Get directions
          </a>
        </div>

        <p className="text-xs text-ink-soft normal-case sm:text-right">
          © {new Date().getFullYear()} Ina Slein. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
