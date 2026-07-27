import Link from "next/link";
import { ArtworkCanvas } from "@/components/ArtworkCanvas";
import { MuseumLabel } from "@/components/MuseumLabel";
import { PaletteMark } from "@/components/PaletteMark";
import { CATEGORY_INFO } from "@/lib/artworks";

const CATEGORIES = ["portraits", "family", "animals"] as const;

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative">
        <ArtworkCanvas seed="hero-mind-float" className="h-[70svh] min-h-[420px] w-full" />
        <div className="absolute inset-0 flex flex-col justify-end">
          <div className="mx-auto w-full max-w-6xl px-6 sm:px-10 pb-10">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl leading-[1.1] max-w-2xl">
              Painted likenesses, held a little longer than a photograph.
            </h1>
            <p className="label-caps text-xs sm:text-sm text-ink-soft mt-5">
              Portrait · Landscape · Still Life · Collage
            </p>
          </div>
        </div>
      </section>

      {/* Featured work / artist statement excerpt */}
      <section className="mx-auto max-w-6xl px-6 sm:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div>
          <ArtworkCanvas seed="mind-float" className="aspect-[4/3] w-full" />
          <MuseumLabel
            title="Mind Float"
            medium="Acrylic on canvas"
            dimensions="36 × 48 in."
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
            {CATEGORIES.map((cat) => {
              const info = CATEGORY_INFO[cat];
              return (
                <Link key={cat} href={`/gallery/${cat}`} className="group block">
                  <ArtworkCanvas
                    seed={`teaser-${cat}`}
                    className="aspect-[4/5] w-full"
                  />
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
