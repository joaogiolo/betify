"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL, type CTALocation } from "@/lib/config";
import { trackWhatsAppClick } from "@/lib/tracking";
import { cn } from "@/lib/utils";

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
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm gap-2",
    md: "px-7 py-4 text-base gap-2.5",
    lg: "px-6 py-4 text-base sm:px-9 sm:py-5 sm:text-lg md:text-xl gap-2 sm:gap-3 text-center sm:whitespace-nowrap",
  };

  const variantClasses = {
    solid: "bg-accent text-white hover:bg-[#ff1a10] shadow-[0_0_24px_-4px_var(--accent-glow)]",
    outline:
      "bg-transparent text-text border border-[var(--line)] hover:border-accent hover:text-accent",
  };

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(location)}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-xl font-[var(--font-manrope)] font-semibold uppercase tracking-wide transition-all duration-200 ease-[var(--easing)] hover:-translate-y-px active:translate-y-0 min-h-12",
        sizeClasses[size],
        variantClasses[variant],
        className
      )}
    >
      <MessageCircle
        className={size === "sm" ? "size-4" : "size-5"}
        strokeWidth={2.5}
      />
      <span className="relative z-10">{children}</span>
      <ArrowRight
        className={cn(
          "transition-transform duration-300 group-hover:translate-x-1",
          size === "sm" ? "size-4" : "size-5"
        )}
        strokeWidth={2.5}
      />
    </a>
  );
}
