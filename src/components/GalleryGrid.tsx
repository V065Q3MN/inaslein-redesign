import { ArtworkCanvas } from "./ArtworkCanvas";
import { MuseumLabel } from "./MuseumLabel";
import type { Artwork } from "@/lib/artworks";

export function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-14">
      {artworks.map((art) => (
        <figure key={art.slug} className="group">
          <ArtworkCanvas seed={art.slug} className="aspect-[4/5] w-full" />
          <figcaption className="mt-4">
            <MuseumLabel
              title={art.title}
              medium={art.medium}
              dimensions={art.dimensions}
              year={art.year}
            />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
