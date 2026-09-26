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

export function ImageAutoSlider({
  images,
  durationSeconds = 24,
}: ImageAutoSliderProps) {
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes image-auto-slider-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .image-auto-slider-track {
          animation: image-auto-slider-scroll ${durationSeconds}s linear infinite;
        }

        .image-auto-slider-mask {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 10%,
            black 90%,
            transparent 100%
          );
        }

        .image-auto-slider-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        @media (hover: hover) {
          .image-auto-slider-item:hover {
            transform: scale(1.04);
            filter: brightness(1.08);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .image-auto-slider-track {
            animation: none;
          }
        }
      `}</style>

      <div className="relative w-full overflow-hidden">
        <div className="image-auto-slider-mask w-full">
          <div className="image-auto-slider-track flex w-max gap-4 md:gap-5 lg:gap-6">
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                aria-hidden={index >= images.length}
                className="
                  image-auto-slider-item
                  flex-shrink-0
                  w-[220px]
                  md:w-[280px]
                  lg:w-[320px]
                  aspect-[4/5]
                  overflow-hidden
                  rounded-[var(--radius)]
                  border border-[var(--line)]
                  shadow-2xl shadow-black/40
                "
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  draggable={false}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: image.objectPosition ?? "center" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
