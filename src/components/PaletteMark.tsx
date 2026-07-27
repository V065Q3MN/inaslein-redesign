const DABS = [
  { color: "var(--venetian)", x: 0, y: 0, size: 1 },
  { color: "var(--ultramarine)", x: 7, y: -3, size: 0.85 },
  { color: "var(--naples)", x: 3, y: 6, size: 0.7 },
];

export function PaletteMark({
  size = 22,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <span
      aria-hidden
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      {DABS.map((dab, i) => {
        const dotSize = size * 0.42 * dab.size;
        return (
          <span
            key={i}
            className="absolute rounded-full"
            style={{
              width: dotSize,
              height: dotSize,
              backgroundColor: dab.color,
              left: `calc(50% + ${dab.x}%)`,
              top: `calc(50% + ${dab.y}%)`,
              transform: "translate(-50%, -50%)",
            }}
          />
        );
      })}
    </span>
  );
}
