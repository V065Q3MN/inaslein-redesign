import type { Metadata } from "next";
import { ArtworkCanvas } from "@/components/ArtworkCanvas";
import { MuseumLabel } from "@/components/MuseumLabel";
import { PaletteMark } from "@/components/PaletteMark";

export const metadata: Metadata = {
  title: "About | Ina Slein",
  description:
    "Ina Slein's training at the New York Studio School and her approach to portrait painting.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 sm:px-10 py-20">
      <div className="flex items-center gap-4 mb-10">
        <PaletteMark size={22} />
        <h1 className="label-caps text-xs text-ink-soft">About the Artist</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl leading-tight max-w-md">
            Trained in New York. Working in West Palm Beach.
          </h2>
          <div className="mt-8 space-y-5 text-ink-soft leading-relaxed max-w-md">
            <p>
              Ina Slein studied painting in New York City between 1975 and
              1979, across Bard College, NYU, Parsons School of Design, and
              the New York Studio School.
            </p>
            <p>
              It was the Studio School that proved foundational. There, she
              trained under Mercedes Matter, Nicolas Carone, Paul Georges,
              and Sidney Geist — a program built on relentless practice.
              &ldquo;We were put to work drawing and painting endlessly,
              without interruption,&rdquo; she recalls.
            </p>
            <p>
              That discipline still shapes the way she paints portraits
              today: closely observed, built up in sessions, and unhurried.
            </p>
          </div>

          <div className="mt-10 border-t border-ink/10 pt-8 max-w-md">
            <h3 className="font-display text-xl">Virtual Instruction</h3>
            <p className="text-ink-soft mt-3 leading-relaxed">
              Private art instruction is available via Zoom, for students at
              any level who want focused, one-on-one feedback from a
              working painter.
            </p>
          </div>
        </div>

        <div>
          <ArtworkCanvas seed="mind-float" className="aspect-[4/3] w-full" />
          <MuseumLabel
            title="Mind Float"
            medium="Acrylic on canvas"
            dimensions="36 × 48 in."
            className="mt-4"
          />
          <p className="text-ink-soft mt-6 leading-relaxed italic font-display text-lg">
            &ldquo;I slowly slipped into the pond. The water was ice cold.
            Its surface, however, was warm. I felt immediate relief from the
            summer heat. I was floating&rdquo; — thoughts drifting &ldquo;out
            of the pond, beyond mountains and into the sky.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
