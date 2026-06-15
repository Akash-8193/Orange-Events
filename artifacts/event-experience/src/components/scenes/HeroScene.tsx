import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/oe-hero-bg.png";
import { TextReveal } from "@/components/animations/TextReveal";
import { useSiteContent } from "@/hooks/useSiteContent";

function isWebGLAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

const Hero3DCanvas = lazy(() => import("./Hero3DCanvas"));

function HeroFallback() {
  return (
    <motion.div
      className="w-full h-full"
      initial={{
        background: "radial-gradient(ellipse at 30% 40%, #F5E6E0 0%, #fafaf8 40%, #E8E4F0 70%, #fafaf8 100%)",
      }}
      animate={{
        background: [
          "radial-gradient(ellipse at 30% 40%, #F5E6E0 0%, #fafaf8 40%, #E8E4F0 70%, #fafaf8 100%)",
          "radial-gradient(ellipse at 70% 60%, #E8E4F0 0%, #fafaf8 40%, #F5E6E0 70%, #fafaf8 100%)",
          "radial-gradient(ellipse at 50% 20%, #fafaf8 0%, #F5E6E0 40%, #E8E4F0 80%, #fafaf8 100%)",
          "radial-gradient(ellipse at 30% 40%, #F5E6E0 0%, #fafaf8 40%, #E8E4F0 70%, #fafaf8 100%)",
        ],
      }}
      transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
    />
  );
}

export function HeroScene() {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  const welcomeText = useSiteContent("hero_welcome", "Welcome to");
  const mainTitle = useSiteContent("hero_title", "ORANGE EVENTS");
  const subTitle = useSiteContent("hero_subtitle", "& Conferences Pvt. Ltd.");
  const tagline = useSiteContent("hero_tagline", "A good life is a collection of happy moments.");

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background">
      {/* Cinematic background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Orange Events luxury event"
          className="w-full h-full object-cover brightness-[1.15] contrast-[1.15]"
        />
        {/* Overlays removed as requested to keep the image 100% natural */}
      </div>

      {/* 3D layer removed for performance optimization */}

      {/* Text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 mt-16 md:mt-0">
        <div
          className="text-center px-4 sm:px-8 md:px-16 py-[min(2rem,4vh)] md:py-[min(3rem,6vh)] rounded-3xl bg-black/30 backdrop-blur-md border border-white/20 shadow-2xl mx-4 sm:mx-0 w-full max-w-[95vw] sm:max-w-auto"
        >
          <p
            className="text-[10px] md:text-sm font-semibold uppercase text-white mb-[min(1rem,2vh)] md:mb-[min(1.5rem,3vh)] tracking-[0.2em] md:tracking-[0.35em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            {welcomeText}
          </p>
          <TextReveal variant="hero" delay={0.8}>
            <h1
              className="font-serif text-white tracking-widest mb-[min(0.75rem,1.5vh)] whitespace-nowrap"
              style={{
                fontSize: "min(6.5vw, 15vh, 8rem)",
                textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)"
              }}
            >
              {mainTitle}
            </h1>
          </TextReveal>
          <p className="text-sm md:text-[min(1rem,2.5vh)] font-semibold tracking-[0.25em] uppercase text-white mb-[min(1.25rem,2.5vh)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {subTitle}
          </p>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-[min(1.25rem,2.5vh)] shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          <p className="text-base md:text-[min(1.25rem,3vh)] font-medium tracking-[0.1em] text-white/90 italic font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            {tagline}
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-20"
      >
        {/* Soft invisible shadow behind the text to guarantee contrast without looking like a box */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-black/60 blur-xl rounded-full -z-10" />

        <span className="text-[10px] uppercase font-semibold tracking-widest text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Scroll to explore
        </span>
        <div className="w-[1px] h-10 bg-white/20 overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
