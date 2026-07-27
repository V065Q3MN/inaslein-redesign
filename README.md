# Ina Slein — Site Redesign

A rebuild of [inaslein.com](https://inaslein.com) (currently a GoDaddy-builder site) in Next.js. Ina Slein is a portrait artist in West Palm Beach, FL, painting commissioned portraits, family groups, and animal companions, and teaching private art instruction via Zoom.

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

Bio and artist-statement copy on `/` and `/about` was pulled from the live site's real content. Everything else (gallery pieces, CTA copy) is placeholder pending real material from Ina.

## Placeholder artwork

There are no real photographs of Ina's paintings yet. `src/components/ArtworkCanvas.tsx` renders a deterministic, muted gradient "underpainting" per piece (seeded by slug) so the layout reads as a real gallery instead of broken image boxes.

**Adding real artwork:**
1. Drop photos into `public/artwork/`.
2. Edit `src/lib/artworks.ts` — replace the placeholder `ARTWORKS` entries with real titles/medium/dimensions/year, and add an `image` field per piece.
3. Swap `<ArtworkCanvas seed={...} />` for `<Image src={art.image} ... />` in `src/components/GalleryGrid.tsx` and wherever else it's used (`src/app/page.tsx`, `src/app/about/page.tsx`).

## Next steps

- Real photography for the four galleries (currently 2–4 placeholder entries each — likely needs far more for Portrait Gallery especially).
- Wire the contact form to a real backend (Formspree, Resend, etc.) instead of the `mailto:` fallback in `src/components/ContactForm.tsx`.
- Confirm final copy for the home hero line and CTA band with Ina.
- Decide on a domain/hosting move off GoDaddy (Vercel is the natural fit for a Next.js app).

## Development

```bash
npm run dev     # start dev server at localhost:3000
npm run build   # production build
npm run lint    # eslint
```
