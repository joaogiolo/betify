import { content } from "@/lib/config";
import { Reveal } from "./Reveal";
import { StackingCards } from "./ui/stacking-card";

export function HowItWorks() {
  return (
    <section id={content.howItWorks.id} className="py-24 md:py-32 bg-bg-elevated">
      <Reveal className="mx-auto max-w-2xl px-5 md:px-8 text-center mb-16">
        <span className="eyebrow mb-5 inline-flex justify-center">{content.howItWorks.eyebrow}</span>
        <h2 className="text-3xl md:text-5xl font-bold tracking-[-0.03em]">
          {content.howItWorks.title}
        </h2>
        <p className="mt-4 text-text-muted text-base md:text-lg">
          {content.howItWorks.subtitle}
        </p>
      </Reveal>

      <StackingCards items={content.howItWorks.items.map((item) => ({
        title: item.tag,
        description: item.description,
        image: item.image,
      }))} />
    </section>
  );
}
