export function MuseumLabel({
  title,
  medium,
  dimensions,
  year,
  caption,
  className = "",
}: {
  title: string;
  medium?: string;
  dimensions?: string;
  year?: string;
  caption?: string;
  className?: string;
}) {
  const details = [medium, dimensions, year].filter(Boolean).join(" · ");

  return (
    <div className={className}>
      <p className="font-display italic text-lg text-ink">{title}</p>
      {details && (
        <p className="label-caps text-[0.65rem] text-ink-soft mt-1">
          {details}
        </p>
      )}
      {caption && (
        <p className="text-sm text-ink-soft mt-1 leading-snug">{caption}</p>
      )}
    </div>
  );
}
