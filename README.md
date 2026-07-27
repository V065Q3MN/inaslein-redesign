# Ina Slein — Site Redesign

A rebuild of [inaslein.com](https://inaslein.com) (currently a GoDaddy-builder site) in Next.js. Ina Slein is a portrait artist based in Lake Worth, FL, serving the Palm Beach area — painting commissioned portraits, family groups, and animal companions, and teaching private art instruction via Zoom.

## NAP / local SEO

Confirmed business name/address/phone lives in one place: `src/lib/business.ts`. It feeds the visible footer/contact info, the site's title/meta description, and the `LocalBusiness` JSON-LD schema (`src/components/LocalBusinessSchema.tsx`, rendered in `layout.tsx`). The full street address is real but intentionally **not** shown as visible page text — this is a home studio, so the address is schema-only (for GBP verification), while the public site just shows the city. See `LOCAL-SEO-ANALYSIS-inaslein.com.md` for the full local-SEO audit this was based on.

## Design direction

The site is styled as a **gallery wall**, not a generic portfolio template: a warm, neutral "gallery" background, ink-black text, and a recurring three-dot "palette" mark (venetian red / ultramarine / Naples yellow) as the one signature flourish. Every piece gets real museum-label typography (title, medium, dimensions, year). See `src/components/PaletteMark.tsx` and `src/components/MuseumLabel.tsx`.

Typography: [Fraunces](https://fonts.google.com/specimen/Fraunces) (display/italic) paired with [Inter](https://fonts.google.com/specimen/Inter) (body/labels), loaded via `next/font/google` in `src/app/layout.tsx`.

Color tokens live in `src/app/globals.css` as CSS custom properties (`--wall`, `--ink`, `--venetian`, `--ultramarine`, `--naples`) wired into Tailwind v4 via `@theme inline`.

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, featured piece + artist statement excerpt, gallery teasers, commission/lesson CTA |
| `/about` | Bio, training, artist statement, virtual instruction blurb |
| `/gallery/portraits` | Portrait Gallery |
| `/gallery/family` | Family Portraits |
| `/gallery/animals` | Animals We Love |
| `/gallery/in-progress` | In Progress (work still on the easel) |
| `/contact` | Contact form (opens a pre-filled `mailto:`) + email/location |

Bio and artist-statement copy on `/` and `/about` was pulled from the live site's real content.

## Artwork photos

All photos are real, pulled directly from the live inaslein.com (hosted on `img1.wsimg.com`/`isteam.wsimg.com`, GoDaddy's Website Builder image store) and saved locally under `public/artwork/`. `download-artwork.sh` is the exact script used to fetch them — re-run it (after updating the URL list) if Ina adds or replaces photos on the live site before this redesign ships.

Gallery pieces are listed in `src/lib/artworks.ts`, each with its real `width`/`height` (so `next/image` can lay them out without shift) and, where actually known, a `title`/`caption`/`medium`/`dimensions`/`year`. Most pieces only have a filename to go on, so they're labeled `"Untitled"` rather than inventing details — **do not guess at medium/size/year; get them from Ina and fill in `artworks.ts` directly.** The Family Portraits page carries real captions (the Schachtel family/bakery story, Newark NJ) pulled from the live site's image alt text.

`GalleryGrid` (`src/components/GalleryGrid.tsx`) lays pieces out as a CSS-columns masonry so each photo keeps its true aspect ratio, since real paintings don't share one crop ratio the way the old placeholder tiles did.

## Next steps

- Get real title/medium/dimensions/year for the `"Untitled"` pieces in `src/lib/artworks.ts` from Ina.
- Wire the contact form to a real backend (Formspree, Resend, etc.) instead of the `mailto:` fallback in `src/components/ContactForm.tsx`.
- Confirm final copy for the home hero line and CTA band with Ina.
- Decide on a domain/hosting move off GoDaddy (Vercel is the natural fit for a Next.js app).
- Consider compressing/re-encoding `public/artwork/` (currently ~20MB of source JPEGs) for production.

## Development

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build
npm run lint    # eslint
```
