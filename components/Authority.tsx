import { content } from "@/lib/config";
import { Reveal } from "./Reveal";
import { NumberTicker } from "./ui/number-ticker";

export function Authority() {
  return (
    <section id={content.authority.id} className="py-24 md:py-32">
      <div className="mx-auto max-w-2xl px-5 md:px-8 flex flex-col items-center text-center gap-6">
        <Reveal>
          <span className="eyebrow mb-5 inline-flex justify-center">
            {content.authority.eyebrow}
          </span>

          <p className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] text-accent leading-tight whitespace-nowrap">
            {content.authority.statPrefix}
            <NumberTicker
              value={content.authority.statValue}
              startValue={content.authority.statStartValue}
              decimalPlaces={2}
              className="text-accent"
            />
            {content.authority.statSuffix}
          </p>
          <p className="text-text-muted mt-1">{content.authority.statSubtitle}</p>

          <p className="mt-6 text-xl md:text-2xl font-bold tracking-[-0.02em] max-w-md mx-auto">
            {content.authority.title}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
