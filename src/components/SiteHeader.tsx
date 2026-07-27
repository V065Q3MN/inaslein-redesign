"use client";

import Link from "next/link";
import { useState } from "react";
import { PaletteMark } from "./PaletteMark";

const NAV = [
  { href: "/about", label: "About" },
  { href: "/gallery/portraits", label: "Portrait Gallery" },
  { href: "/gallery/family", label: "Family Portraits" },
  { href: "/gallery/animals", label: "Animals We Love" },
  { href: "/gallery/in-progress", label: "In Progress" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-wall/95 backdrop-blur border-b border-ink/10">
      <div className="mx-auto max-w-6xl px-6 sm:px-10 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <PaletteMark size={20} />
          <span className="font-display text-xl tracking-wide">Ina Slein</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="label-caps text-[0.7rem] text-ink-soft hover:text-venetian transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="lg:hidden label-caps text-[0.7rem] text-ink-soft"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="lg:hidden border-t border-ink/10 bg-wall">
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="label-caps text-xs text-ink-soft hover:text-venetian transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
