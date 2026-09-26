"use client";

// Adapted from a "stacking cards" scroll effect reference for Betini
// Academy. Kept: the sticky + progressive-scale stacking mechanic
// (useScroll/useTransform/motion). Dropped:
// - the demo's ReactLenis smooth-scroll wrapper — this project has no
//   global smooth-scroll instance, and adding one here would change scroll
//   feel/timing for the whole page (headers, sticky CTAs, IntersectionObserver
//   based reveals), not just this section.
// - `motion` package import — the project already depends on `framer-motion`
//   (same API), so no second animation library was installed.
// - per-card colors, the demo intro/footer, and the "See more" link — this
//   is a content section, not a portfolio demo.

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export interface StackingCardItem {
  title: string;
  description: string;
  /** null until a real image is supplied — renders a placeholder instead */
  image: string | null;
}

interface StackingCardProps {
  i: number;
  title: string;
  description: string;
  image: string | null;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}

function StackingCard({
  i,
  title,
  description,
  image,
  progress,
  range,
  targetScale,
}: StackingCardProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-[100svh] flex items-center justify-center sticky top-0 px-5 md:px-8"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 18}px)`,
        }}
        className={cn(
          "relative flex flex-col w-[90%] md:w-[70%] max-w-4xl origin-top rounded-2xl p-6 md:p-10 md:h-[440px]",
          "bg-[#111111] border border-white/[0.08]",
          "shadow-[0_10px_40px_rgba(255,0,0,0.06)]",
        )}
      >
        <div className="flex items-center gap-3">
          <span
            aria-hidden
            className="size-1.5 rounded-full bg-accent shadow-[0_0_10px_2px_var(--accent-glow)]"
          />
          <h3 className="text-xl md:text-2xl font-bold uppercase tracking-wide text-white">
            {title}
          </h3>
        </div>
        <span
          aria-hidden
          className="mt-4 h-px w-12 bg-linear-to-r from-accent to-transparent"
        />

        <div className="flex flex-col md:flex-row h-full mt-5 gap-6 md:gap-10">
          <div className="w-full md:w-[40%] flex flex-col justify-center">
            <p className="text-[15px] md:text-base lg:text-lg leading-relaxed text-text-muted">
              {description}
            </p>
          </div>

          <div
            className={cn(
              "relative w-full md:w-[60%] aspect-[16/10] md:aspect-auto md:h-full rounded-xl overflow-hidden",
              !image && "border border-white/[0.06] bg-[#0b0b0b]",
            )}
          >
            {image ? (
              <motion.div className="absolute inset-0 h-full w-full" style={{ scale: imageScale }}>
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center border border-dashed border-white/15 rounded-xl m-1">
                <span className="text-xs md:text-sm uppercase tracking-widest text-text-muted px-4 text-center">
                  Imagem será adicionada aqui
                </span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export interface StackingCardsProps {
  items: StackingCardItem[];
  className?: string;
}

export function StackingCards({ items, className }: StackingCardsProps) {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={container} className={cn("relative w-full", className)}>
      {items.map((item, i) => {
        const targetScale = 1 - (items.length - i) * 0.05;
        return (
          <StackingCard
            key={item.title}
            i={i}
            title={item.title}
            description={item.description}
            image={item.image}
            progress={scrollYProgress}
            range={[i * (1 / items.length), 1]}
            targetScale={targetScale}
          />
        );
      })}
    </div>
  );
}
