import Image from "next/image";
import { hasFullLogo, hasMarkLogo } from "@/lib/assets";
import { cn } from "@/lib/utils";
import { LogoWordmark } from "./Logo";

export function LogoFull({ className }: { className?: string }) {
  if (hasFullLogo) {
    return (
      <Image
        src="/images/logo-betini-full.png"
        alt="Betini Academy"
        width={220}
        height={64}
        className={cn("h-8 w-auto object-contain", className)}
        priority
      />
    );
  }

  return <LogoWordmark className={className} />;
}

export function LogoMark({ className }: { className?: string }) {
  if (hasMarkLogo) {
    return (
      <Image
        src="/images/logo-betini-mark.png"
        alt="Betini Academy"
        width={64}
        height={64}
        className={cn("h-8 w-auto object-contain", className)}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-[var(--font-unbounded)] font-extrabold text-2xl leading-none",
        className
      )}
      aria-hidden
    >
      B
    </span>
  );
}
