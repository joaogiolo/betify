"use client";

import { WHATSAPP_URL, type CTALocation } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";
import { LiquidMetalButton } from "./ui/liquid-metal-button";

export function WhatsAppButton({
  location,
  children,
  size = "md",
  variant = "solid",
  className,
}: {
  location: CTALocation;
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  variant?: "solid" | "outline";
  className?: string;
}) {
  if (variant === "outline") {
    return (
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackWhatsAppClick(location)}
        className={cn(
          "group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-xl font-[var(--font-manrope)] font-bold uppercase tracking-wide transition-all duration-200 ease-[var(--easing)] hover:-translate-y-px active:translate-y-0 min-h-12",
          "bg-transparent text-text border border-[var(--line)] hover:border-accent hover:text-accent",
          size === "sm" ? "px-5 py-2.5 text-sm" : "px-7 py-4 text-base",
          className
        )}
      >
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <LiquidMetalButton
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      size={size}
      className={cn("font-[var(--font-manrope)]", className)}
    >
      <span>{children}</span>
    </LiquidMetalButton>
  );
}
