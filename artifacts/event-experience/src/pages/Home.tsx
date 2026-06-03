import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroScene } from "@/components/scenes/HeroScene";
import { MarqueeScene } from "@/components/scenes/MarqueeScene";
import { AboutScene } from "@/components/scenes/AboutScene";
import { ServicesScene } from "@/components/scenes/ServicesScene";
import { ProcessScene } from "@/components/scenes/ProcessScene";
import { StatsScene } from "@/components/scenes/StatsScene";
import { PortfolioScene } from "@/components/scenes/PortfolioScene";
import { TestimonialsScene } from "@/components/scenes/TestimonialsScene";
import { ClientsScene } from "@/components/scenes/ClientsScene";
import { FAQScene } from "@/components/scenes/FAQScene";
import { ContactScene } from "@/components/scenes/ContactScene";
import { LoadingScreen } from "@/components/LoadingScreen";
import { CustomCursor } from "@/components/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <CustomCursor />
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <main className="bg-background min-h-screen">
          <Navigation />
          <HeroScene />
          <MarqueeScene />
          <AboutScene />
          <ServicesScene />
          <ProcessScene />
          <StatsScene />
          <PortfolioScene />
          <TestimonialsScene />
          <ClientsScene />
          <FAQScene />
          <ContactScene />
        </main>
      )}
    </>
  );
}
