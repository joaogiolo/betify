import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { MarketplaceSlider } from "@/components/MarketplaceSlider";
import { HowItWorks } from "@/components/HowItWorks";
import { Authority } from "@/components/Authority";
import { ProofResults } from "@/components/ProofResults";
import { FinalCTA } from "@/components/FinalCTA";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { MobileStickyCTA } from "@/components/MobileStickyCTA";

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
