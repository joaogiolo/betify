import dynamic from "next/dynamic";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarketplaceSlider } from "@/components/MarketplaceSlider";
import { Authority } from "@/components/Authority";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

// Below-the-fold sections: kept server-rendered (no CLS, no SEO loss) but
// split into their own JS chunks instead of the main initial bundle, since
// this is a single-route page and these are its heaviest/most script-heavy
// sections (scroll-linked animation, an image marquee, an accordion).
const HowItWorks = dynamic(() =>
  import("@/components/HowItWorks").then((m) => m.HowItWorks),
);
const ProofResults = dynamic(() =>
  import("@/components/ProofResults").then((m) => m.ProofResults),
);
const FAQ = dynamic(() => import("@/components/FAQ").then((m) => m.FAQ));

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <MarketplaceSlider />
        <HowItWorks />
        <Authority />
        <ProofResults />
        <FinalCTA />
        <FAQ />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <MobileStickyCTA />
    </>
  );
}
