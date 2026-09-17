"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/lib/config";
import { WhatsAppButton } from "./WhatsAppButton";

export function MobileStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    const finalCta = document.querySelector("[data-final-cta]");
    if (!hero) return;

    let pastHero = false;
    let inFinal = false;

    const update = () => setVisible(pastHero && !inFinal);

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        pastHero = !entry.isIntersecting;
        update();
      },
      { rootMargin: "-10% 0px 0px 0px" }
    );
    heroObserver.observe(hero);

    let finalObserver: IntersectionObserver | undefined;
    if (finalCta) {
      finalObserver = new IntersectionObserver(
        ([entry]) => {
          inFinal = entry.isIntersecting;
          update();
        },
        { threshold: 0.3 }
      );
      finalObserver.observe(finalCta);
    }

    return () => {
      heroObserver.disconnect();
      finalObserver?.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="md:hidden fixed bottom-0 inset-x-0 z-50 bg-[rgba(5,5,5,0.85)] backdrop-blur-xl border-t border-[var(--line)] px-4 py-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <WhatsAppButton location="sticky-mobile" className="w-full">
            {content.hero.ctaLabel}
          </WhatsAppButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
