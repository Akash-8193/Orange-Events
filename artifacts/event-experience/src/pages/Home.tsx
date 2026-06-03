import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { HeroScene } from "@/components/scenes/HeroScene";
import { AboutScene } from "@/components/scenes/AboutScene";
import { ServicesScene } from "@/components/scenes/ServicesScene";
import { PortfolioScene } from "@/components/scenes/PortfolioScene";
import { JourneyScene } from "@/components/scenes/JourneyScene";
import { TestimonialsScene } from "@/components/scenes/TestimonialsScene";
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
          <AboutScene />
          <ServicesScene />
          <PortfolioScene />
          <JourneyScene />
          <TestimonialsScene />
          <ContactScene />
        </main>
      )}
    </>
  );
}
