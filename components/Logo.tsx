import { cn } from "@/lib/utils";

export function LogoWordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-[var(--font-unbounded)] font-bold tracking-tight leading-none flex flex-col",
        className
      )}
    >
      <span className="text-lg">BETINI</span>
      <span className="text-[0.5em] tracking-[0.3em] text-text-muted -mt-0.5">
        ACADEMY
      </span>
    </span>
  );
}

export function LogoMonogramDecorative({
  className,
  style,
}: {
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden
      style={style}
      className={cn(
        "pointer-events-none select-none font-[var(--font-unbounded)] font-extrabold leading-none text-text",
        className
      )}
    >
      B
    </span>
  );
}
