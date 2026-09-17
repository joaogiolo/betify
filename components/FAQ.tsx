import { content } from "@/lib/config";
import { Reveal } from "./Reveal";
import { WhatsAppButton } from "./WhatsAppButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

export function FAQ() {
  const mid = Math.ceil(content.faq.items.length / 2);
  const colA = content.faq.items.slice(0, mid);
  const colB = content.faq.items.slice(mid);

  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <Reveal className="mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold">{content.faq.title}</h2>
        </Reveal>

        <Accordion type="single" collapsible className="grid md:grid-cols-2 gap-x-10">
          <Reveal>
            {colA.map((item, i) => (
              <AccordionItem key={i} value={`a-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Reveal>

          <Reveal delay={0.1}>
            {colB.map((item, i) => (
              <AccordionItem key={i} value={`b-${i}`}>
                <AccordionTrigger>{item.q}</AccordionTrigger>
                <AccordionContent>{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Reveal>
        </Accordion>

        <Reveal delay={0.15} className="mt-14 text-center">
          <p className="text-text-muted mb-5">{content.faq.ctaPrompt}</p>
          <WhatsAppButton location="faq">{content.faq.ctaLabel}</WhatsAppButton>
        </Reveal>
      </div>
    </section>
  );
}
