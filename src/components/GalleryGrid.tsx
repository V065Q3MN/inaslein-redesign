import Image from "next/image";
import { MuseumLabel } from "./MuseumLabel";
import type { Artwork } from "@/lib/artworks";

export function GalleryGrid({ artworks }: { artworks: Artwork[] }) {
  return (
    <div className="columns-1 sm:columns-2 gap-8 [&>*]:mb-14">
      {artworks.map((art) => (
        <figure key={art.slug} className="break-inside-avoid">
          <Image
            src={art.image}
            alt={art.caption ?? art.title}
            width={art.width}
            height={art.height}
            sizes="(min-width: 640px) 50vw, 100vw"
            className="w-full h-auto"
          />
          <figcaption className="mt-4">
            <MuseumLabel
              title={art.title}
              medium={art.medium}
              dimensions={art.dimensions}
              year={art.year}
              caption={art.caption}
            />
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
