import Image from "next/image";

export function HeroBanner({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden>
      <Image
        src="/images/hero-banner.webp"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-[68%_12%] brightness-[0.85] contrast-100"
      />

      {/* Dark toward the left/center where the headline sits, fading out
          on the right so his face stays clearly visible there. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(5,5,5,0.97) 0%, rgba(5,5,5,0.9) 35%, rgba(5,5,5,0.55) 60%, rgba(5,5,5,0.15) 85%)",
        }}
      />
      {/* Top/bottom fade so the banner blends into the header and the
          section below instead of cutting off sharply. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.75) 0%, transparent 20%, transparent 65%, rgba(5,5,5,0.95) 100%)",
        }}
      />
    </div>
  );
}
