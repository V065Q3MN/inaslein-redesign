import type { Metadata } from "next";
import { GalleryGrid } from "@/components/GalleryGrid";
import { PaletteMark } from "@/components/PaletteMark";
import { artworksByCategory, CATEGORY_INFO } from "@/lib/artworks";

const category = "in-progress" as const;
const info = CATEGORY_INFO[category];

export const metadata: Metadata = {
  title: `${info.label} | Ina Slein`,
  description: info.description,
};

export default function InProgressGalleryPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-10 py-20">
      <div className="flex items-center gap-4 mb-4">
        <PaletteMark size={22} />
        <h1 className="label-caps text-xs text-ink-soft">{info.label}</h1>
      </div>
      <p className="text-ink-soft max-w-md mb-14 leading-relaxed">
        {info.description}
      </p>
      <GalleryGrid artworks={artworksByCategory(category)} />
    </section>
  );
}
