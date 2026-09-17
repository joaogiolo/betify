"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/tracking";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("top");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { rootMargin: "-10% 0px 0px 0px" }
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsAppClick("flutuante")}
          initial={{ opacity: 0, scale: 0.6, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 20 }}
          className="hidden md:flex fixed bottom-7 right-7 z-50 items-center justify-center size-16 rounded-full bg-accent text-[#050505] shadow-[0_10px_40px_-5px_var(--accent-glow)] group"
          aria-label="Fale com a equipe no WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-30 [animation-duration:4s]" />
          <MessageCircle className="size-7 relative" strokeWidth={2.5} />
          <span className="pointer-events-none absolute right-full mr-3 whitespace-nowrap rounded-full bg-bg-card border border-[var(--line)] px-4 py-2 text-sm text-text opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
            Fale com a equipe
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
