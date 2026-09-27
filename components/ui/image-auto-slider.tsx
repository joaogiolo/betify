// Keyframes/animation live in app/globals.css (.image-auto-slider-track) —
// see the comment there for why this isn't a component-local <style> tag.

import Image from "next/image";

export interface ImageAutoSliderItem {
  src: string;
  alt: string;
  /** only for images that need a different crop focus than center */
  objectPosition?: string;
}

export interface ImageAutoSliderProps {
  images: ImageAutoSliderItem[];
  /** seconds for one full loop of the (non-duplicated) track */
  durationSeconds?: number;
}

const SIZES = "(max-width: 767px) 220px, (max-width: 1023px) 280px, 320px";

export function ImageAutoSlider({
  images,
  durationSeconds = 24,
}: ImageAutoSliderProps) {
  const duplicatedImages = [...images, ...images];

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="w-full"
        style={{
          mask: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
          WebkitMask:
            "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        }}
      >
        <div
          className="image-auto-slider-track flex w-max gap-4 md:gap-5 lg:gap-6"
          style={{ animationDuration: `${durationSeconds}s` }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              aria-hidden={index >= images.length}
              className="
                image-auto-slider-item
                relative
                flex-shrink-0
                w-[220px]
                md:w-[280px]
                lg:w-[320px]
                aspect-[4/5]
                overflow-hidden
                rounded-[var(--radius)]
                border border-[var(--line)]
                shadow-2xl shadow-black/40
                transition-transform duration-300 ease-out
                hover:scale-[1.04] hover:brightness-110
              "
            >
              {/* Below the fold: next/image already defaults to lazy
                  loading here, plus per-device responsive WebP/AVIF. */}
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={SIZES}
                draggable={false}
                className="object-cover"
                style={{ objectPosition: image.objectPosition ?? "center" }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
