"use client";

import { motion } from "framer-motion";
import { content } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";
import { HeroBanner } from "./HeroBanner";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[85svh] md:min-h-[90vh] items-center overflow-hidden pt-24 pb-16 md:pt-28"
    >
      <HeroBanner className="absolute inset-0" />

      <div className="relative z-10 mx-auto max-w-5xl px-5 md:px-8 text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-white/70 backdrop-blur-md"
        >
          {content.hero.eyebrow}
        </motion.p>

        <h1 className="text-[clamp(2.1rem,4.6vw,3.75rem)] font-bold tracking-[-0.03em] leading-[1.15] text-white text-balance">
          {content.hero.headlineGroups.map((group, gi) => (
            <span key={gi} className="block whitespace-normal sm:whitespace-nowrap">
              {group.map((word, wi) => (
                <motion.span
                  key={wi}
                  initial={{ opacity: 0, y: 14, filter: "blur(4px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.6,
                    delay: gi * 0.25 + wi * 0.06,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.22em]"
                >
                  {word}
                </motion.span>
              ))}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-6 text-base md:text-lg text-white/60 max-w-xl mx-auto"
        >
          {content.hero.subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-9 flex justify-center"
        >
          <WhatsAppButton location="hero" size="lg" className="w-full sm:w-auto">
            {content.hero.ctaLabel}
          </WhatsAppButton>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-7 text-xs uppercase tracking-[0.2em] text-white/40"
        >
          {content.hero.marketplacesLine}
        </motion.p>
      </div>
    </section>
  );
}
