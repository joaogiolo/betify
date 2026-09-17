"use client";

import { useEffect, useState } from "react";
import { MeshGradient } from "@paper-design/shaders-react";

/**
 * Animated black + red mesh-gradient background for the hero.
 *
 * Perf/robustness notes:
 * - Respects `prefers-reduced-motion`: renders the static CSS fallback only.
 * - Skips the secondary (wireframe) gradient layer on small viewports —
 *   one shader layer is enough there and it keeps mobile FPS stable.
 * - The static radial-gradient fallback is always painted first (as a CSS
 *   background), so there's never a blank/white flash if WebGL is
 *   unavailable or the shader hasn't mounted yet.
 */
export function ShaderHeroBackground({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sizeQuery = window.matchMedia("(max-width: 768px)");

    const updateMotion = () => setReducedMotion(motionQuery.matches);
    const updateSize = () => setIsCompact(sizeQuery.matches);

    updateMotion();
    updateSize();

    const raf = requestAnimationFrame(() => setMounted(true));

    motionQuery.addEventListener("change", updateMotion);
    sizeQuery.addEventListener("change", updateSize);

    return () => {
      cancelAnimationFrame(raf);
      motionQuery.removeEventListener("change", updateMotion);
      sizeQuery.removeEventListener("change", updateSize);
    };
  }, []);

  const showShader = mounted && !reducedMotion;

  return (
    <div
      className={className}
      style={{
        position: "absolute",
        inset: 0,
        background:
          "radial-gradient(circle at 50% 30%, #420000 0%, #120000 30%, #000000 70%)",
      }}
      aria-hidden
    >
      {showShader && (
        <>
          <MeshGradient
            className="absolute inset-0 h-full w-full"
            colors={["#000000", "#090000", "#1a0000", "#3b0000", "#7a0000"]}
            speed={isCompact ? 0.14 : 0.22}
          />
          {!isCompact && (
            <MeshGradient
              className="absolute inset-0 h-full w-full opacity-30"
              colors={["#000000", "#220000", "#5c0000", "#a30000"]}
              speed={0.12}
            />
          )}
        </>
      )}

      {/* Vignette + overlay to keep the shader as ambient movement, never
          competing with the headline for attention. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, transparent 0%, rgba(5,5,5,0.55) 65%, rgba(5,5,5,0.92) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-bg/30" />
    </div>
  );
}
