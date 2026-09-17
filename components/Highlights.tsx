import { content } from "@/lib/config";
import { Reveal, RevealGroup, RevealItem } from "./Reveal";

export function Highlights() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <Reveal>
          <RevealGroup className="grid grid-cols-2 lg:grid-cols-4 rounded-[var(--radius)] border border-[var(--line)] divide-x divide-y divide-[var(--line)] lg:divide-y-0 overflow-hidden">
            {content.highlights.map((item) => (
              <RevealItem key={item.value}>
                <div className="h-full px-6 py-9 text-center">
                  <p className="text-xl md:text-2xl font-extrabold font-[var(--font-unbounded)] text-accent">
                    {item.value}
                  </p>
                  <p className="mt-2 text-xs md:text-sm text-text-muted">{item.label}</p>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}
