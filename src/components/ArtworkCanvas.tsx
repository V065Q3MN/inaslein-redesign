const TINTS = ["var(--venetian)", "var(--ultramarine)", "var(--naples)"];

function hash(input: string) {
  let h = 0;
  for (let i = 0; i < input.length; i++) {
    h = (h << 5) - h + input.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

/**
 * Stands in for a photograph of an actual piece. Renders a quiet,
 * deterministic "underpainting" so the layout reads as a real gallery
 * even before photography is dropped in. Replace with next/image once
 * real artwork photos exist — see README "Adding real artwork".
 */
export function ArtworkCanvas({
  seed,
  className = "",
}: {
  seed: string;
  className?: string;
}) {
  const h = hash(seed);
  const tint = TINTS[h % TINTS.length];
  const posX = 20 + (h % 60);
  const posY = 15 + ((h >> 3) % 70);
  const angle = 100 + (h % 60);

  return (
    <div
      className={`canvas-grain relative overflow-hidden ${className}`}
      style={{
        backgroundImage: `radial-gradient(ellipse at ${posX}% ${posY}%, color-mix(in srgb, ${tint} 38%, var(--wall-deep)) 0%, var(--wall-deep) 60%), linear-gradient(${angle}deg, var(--wall-deep), color-mix(in srgb, var(--ink) 22%, var(--wall-deep)))`,
      }}
    />
  );
}
