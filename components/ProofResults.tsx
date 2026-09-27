"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { content } from "@/lib/config";
import { Reveal } from "./Reveal";
import { ImageAutoSlider, type ImageAutoSliderItem } from "./ui/image-auto-slider";
import { TextReveal } from "./ui/text-reveal";

const IMG_BASE = "/images/proof";

// order = foto1 .. foto6
const IMAGES: ImageAutoSliderItem[] = [
  { src: `${IMG_BASE}/foto1.webp`, alt: "Resultado 1" },
  { src: `${IMG_BASE}/foto2.webp`, alt: "Resultado 2" },
  { src: `${IMG_BASE}/foto3.webp`, alt: "Resultado 3" },
  { src: `${IMG_BASE}/foto4.webp`, alt: "Resultado 4" },
  { src: `${IMG_BASE}/foto5.webp`, alt: "Resultado 5" },
  { src: `${IMG_BASE}/foto6.webp`, alt: "Resultado 6" },
];

export function ProofResults() {
  const copyRef = useRef<HTMLDivElement>(null);
  const inView = useInView(copyRef, { once: true, amount: 0.4 });

  return (
    <section id={content.proof.id} className="py-24 md:py-32 overflow-hidden">
      <div ref={copyRef} className="mx-auto max-w-2xl px-5 md:px-8 text-center mb-14">
        <TextReveal
          as="h2"
          per="line"
          preset="fade-in-blur"
          trigger={inView}
          speedReveal={1.4}
          className="text-3xl md:text-5xl font-bold tracking-[-0.03em]"
        >
          {content.proof.title}
        </TextReveal>
        <TextReveal
          as="p"
          per="word"
          preset="fade-in-blur"
          trigger={inView}
          delay={0.4}
          speedReveal={2.2}
          className="mt-4 text-text-muted text-base md:text-lg"
        >
          {content.proof.subtitle}
        </TextReveal>
      </div>

      <Reveal delay={0.1}>
        <ImageAutoSlider images={IMAGES} durationSeconds={24} />
      </Reveal>
    </section>
  );
}
