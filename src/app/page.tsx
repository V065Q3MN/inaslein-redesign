import Image from "next/image";
import Link from "next/link";
import { MuseumLabel } from "@/components/MuseumLabel";
import { PaletteMark } from "@/components/PaletteMark";
import { CATEGORY_INFO, FEATURED_PIECE, HERO_IMAGE } from "@/lib/artworks";

const TEASERS = [
  { category: "portraits" as const, image: "/artwork/portraits/self-portrait.jpg" },
  { category: "family" as const, image: "/artwork/family/schachtel-bakery.jpg" },
  { category: "animals" as const, image: "/artwork/animals/img-0458.jpg" },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[70svh] min-h-[420px] w-full">
        <Image
          src={HERO_IMAGE.image}
          alt="Ina Slein artwork"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-ink/10 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 pb-10">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-2xl text-wall">
              Painted likenesses, held a little longer than a photograph.
            </h1>
            <p className="label-caps text-xs sm:text-sm text-wall/80 mt-5">
              Portrait · Landscape · Still Life · Collage
            </p>
          </div>
        </div>
      </section>

      {/* Featured work / artist statement excerpt */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <Image
            src={FEATURED_PIECE.image}
            alt={FEATURED_PIECE.title ?? "Painting by Ina Slein"}
            width={FEATURED_PIECE.width}
            height={FEATURED_PIECE.height}
            className="w-full h-auto"
          />
          <MuseumLabel
            title={FEATURED_PIECE.title}
            medium={FEATURED_PIECE.medium}
            dimensions={FEATURED_PIECE.dimensions}
            className="mt-4"
          />
        </div>
        <div className="lg:pt-6">
          <PaletteMark size={26} className="mb-6" />
          <p className="font-display italic text-2xl sm:text-3xl leading-snug text-ink">
            &ldquo;I slowly slipped into the pond. The water was ice cold. Its
            surface, however, was warm. I felt immediate relief from the
            summer heat. I was floating.&rdquo;
          </p>
          <p className="text-ink-soft mt-6 leading-relaxed max-w-md">
            Ina Slein studied painting in New York between 1975 and 1979 —
            at Bard College, NYU, Parsons, and the New York Studio School,
            where she trained under Mercedes Matter, Nicolas Carone, Paul
            Georges, and Sidney Geist. That studio, she says, proved
            foundational: &ldquo;We were put to work drawing and painting
            endlessly, without interruption.&rdquo;
          </p>
          <Link
            href="/about"
            className="label-caps text-xs inline-block mt-6 text-venetian hover:text-ink transition-colors"
          >
            Read the full artist statement →
          </Link>
        </div>
      </section>

      {/* Gallery teasers */}
      <section className="border-t border-ink/10 bg-wall-deep">
        <div className="mx-auto max-w-6xl px-6 sm:px-10 py-20">
          <div className="flex items-center gap-4 mb-12">
            <PaletteMark size={20} />
            <h2 className="label-caps text-xs text-ink-soft">The Galleries</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {TEASERS.map(({ category, image }) => {
              const info = CATEGORY_INFO[category];
              return (
                <Link key={category} href={`/gallery/${category}`} className="group block">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={image}
                      alt={info.label}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-display text-xl mt-4 group-hover:text-venetian transition-colors">
                    {info.label}
                  </h3>
                  <p className="text-sm text-ink-soft mt-2 leading-relaxed">
                    {info.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-24 text-center">
        <h2 className="font-display text-3xl sm:text-4xl max-w-xl mx-auto leading-tight">
          Commission a portrait, or learn to paint one yourself.
        </h2>
        <p className="text-ink-soft mt-4 max-w-lg mx-auto">
          Private art instruction is available by video call, wherever you
          are.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="label-caps text-xs px-7 py-4 bg-ink text-wall hover:bg-venetian transition-colors"
          >
            Commission a Portrait
          </Link>
          <Link
            href="/contact"
            className="label-caps text-xs px-7 py-4 border border-ink/30 text-ink hover:border-venetian hover:text-venetian transition-colors"
          >
            Book a Virtual Lesson
          </Link>
        </div>
      </section>
    </>
  );
}
