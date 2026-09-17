import { content } from "@/lib/config";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function HowItWorks() {
  return (
    <section id={content.howItWorks.id} className="py-24 md:py-32 bg-bg-elevated">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mb-14 max-w-xl">
          <span className="eyebrow mb-5 inline-flex">{content.howItWorks.eyebrow}</span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em]">
            {content.howItWorks.titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h2>
        </Reveal>

        <RevealGroup className="grid sm:grid-cols-2 divide-y divide-[var(--line)] sm:divide-y-0 sm:divide-x border-t border-[var(--line)] sm:border-t-0">
          {content.howItWorks.items.map((item) => (
            <RevealItem key={item.tag}>
              <div className="h-full py-7 px-1 sm:px-8 sm:py-2">
                <span className="text-xs font-semibold tracking-widest text-accent">
                  {item.tag}
                </span>
                <p className="mt-3 text-text-muted leading-relaxed">{item.description}</p>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
