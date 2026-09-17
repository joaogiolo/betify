import Image from "next/image";
import { InfiniteSlider } from "./ui/infinite-slider";

const logos = [
  { name: "Mercado Livre", file: "mercadolivre.png", width: 200, height: 50 },
  { name: "Shopee", file: "shopee.png", width: 200, height: 64 },
  { name: "TikTok Shop", file: "tiktok.png", width: 200, height: 36 },
  { name: "Shein", file: "shein.png", width: 200, height: 42 },
];

export function MarketplaceSlider() {
  return (
    <section className="border-y border-[var(--line)] bg-[#f4f4f0] py-8 md:py-10">
      <InfiniteSlider gap={64} duration={28} durationOnHover={60} className="w-full">
        {logos.map((logo) => (
          <Image
            key={logo.file}
            src={`/images/marketplaces/${logo.file}`}
            alt={logo.name}
            width={logo.width}
            height={logo.height}
            className="h-8 md:h-10 w-auto object-contain"
          />
        ))}
      </InfiniteSlider>
    </section>
  );
}
