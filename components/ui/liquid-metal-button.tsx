"use client";

// Solid red "premium" CTA button. This replaces an earlier version that used
// the @paper-design/shaders-react LiquidMetal shader — on a small pill button
// that shader's stripe/distortion pattern read as blotchy abstract shapes
// and white blobs instead of a clean metal sheen, so the shader was dropped
// entirely in favor of a plain layered gradient. Only lightweight CSS effects
// remain: a soft outer glow, an inner top highlight, hover scale/glow, a
// press state and a click ripple.

import { useRef, useState, type MouseEvent, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const boxSizeClasses = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-7 py-4 text-base",
  lg: "px-6 py-4 text-base sm:px-9 sm:py-5 sm:text-lg md:text-xl text-center sm:whitespace-nowrap",
};

const gapSizeClasses = {
  sm: "gap-2",
  md: "gap-2.5",
  lg: "gap-2 sm:gap-3",
};

export interface LiquidMetalButtonProps {
  children: ReactNode;
  href?: string;
  target?: string;
  rel?: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  type?: "button" | "submit";
  ariaLabel?: string;
}

export function LiquidMetalButton({
  children,
  href,
  target,
  rel,
  onClick,
  className,
  size = "md",
  fullWidth = false,
  type = "button",
  ariaLabel,
}: LiquidMetalButtonProps) {
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  const rippleId = useRef(0);

  const spawnRipple = (event: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const ripple = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
      id: rippleId.current++,
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
    }, 600);
  };

  const handleClick = (event: MouseEvent<HTMLAnchorElement & HTMLButtonElement>) => {
    spawnRipple(event);
    onClick?.(event);
  };

  const sharedClassName = cn(
    "group relative inline-flex items-center justify-center overflow-hidden rounded-xl",
    "font-bold uppercase tracking-wide text-white",
    // solid red gradient — clean, uniform, no shader/texture
    "bg-[linear-gradient(180deg,#ff2a2a_0%,#e00000_55%,#b50000_100%)]",
    "border border-white/15",
    "shadow-[0_0_20px_rgba(255,0,0,0.20),inset_0_1px_0_rgba(255,255,255,0.18)]",
    "transition-[transform,box-shadow,filter] duration-200 ease-[var(--easing)]",
    "hover:scale-[1.02] hover:brightness-[1.06] hover:shadow-[0_0_32px_rgba(255,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.22)]",
    "active:scale-[0.98] active:brightness-95",
    "min-h-12",
    boxSizeClasses[size],
    fullWidth && "w-full",
    className,
  );

  const inner = (
    <>
      {ripples.map((r) => (
        <span
          key={r.id}
          aria-hidden
          className="pointer-events-none absolute size-5 rounded-full bg-white/35"
          style={{
            left: r.x,
            top: r.y,
            animation: "liquid-metal-ripple 0.6s ease-out",
          }}
        />
      ))}

      <span className={cn("relative z-10 inline-flex items-center", gapSizeClasses[size])}>
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        onClick={handleClick}
        className={sharedClassName}
      >
        {inner}
      </a>
    );
  }

  return (
    <button type={type} aria-label={ariaLabel} onClick={handleClick} className={sharedClassName}>
      {inner}
    </button>
  );
}
