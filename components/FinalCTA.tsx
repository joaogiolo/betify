import { content } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
import { LogoMonogramDecorative } from "./Logo";

export function FinalCTA() {
  return (
    <section
      data-final-cta
      className="relative py-28 md:py-40 overflow-hidden bg-bg-elevated"
    >
      <div className="absolute inset-0 grid-bg" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, var(--accent-glow), transparent 60%)",
          opacity: 0.5,
        }}
        aria-hidden
      />
      <LogoMonogramDecorative
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[42rem] leading-none select-none pointer-events-none"
        style={{
          WebkitTextStroke: "1px rgba(255,255,255,0.06)",
          color: "transparent",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-5 md:px-8 text-center">
        <Reveal>
          <h2 className="text-[clamp(2.4rem,6vw,5rem)] font-extrabold text-balance">
            {content.finalCta.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-7 text-lg text-text-muted max-w-xl mx-auto">
            {content.finalCta.text}
          </p>

          <div className="mt-11 flex flex-col items-center gap-4">
            <WhatsAppButton location="final" size="lg" className="w-full sm:w-auto">
              {content.finalCta.ctaLabel}
            </WhatsAppButton>
            <p className="text-sm text-text-muted">{content.finalCta.microcopy}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
