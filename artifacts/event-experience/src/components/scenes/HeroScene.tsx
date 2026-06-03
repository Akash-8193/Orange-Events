import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";
import heroBg from "@assets/generated_images/oe-hero-bg.png";

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

      {/* 3D layer on top of image (particles / floating shapes) */}
      {webglOk !== null && (
        <div className="absolute inset-0 z-[1] opacity-30 pointer-events-none">
          {webglOk ? (
            <Suspense fallback={null}>
              <Hero3DCanvas />
            </Suspense>
          ) : null}
        </div>
      )}

      {/* Text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="text-center px-8 md:px-16 py-12 rounded-3xl bg-black/30 backdrop-blur-md border border-white/20 shadow-2xl"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 2, delay: 2.6 }}
            className="text-xs md:text-sm font-semibold uppercase text-white mb-6 tracking-[0.35em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
          >
            Welcome to
          </motion.p>
          <h1
            className="text-5xl md:text-7xl lg:text-9xl font-serif text-white tracking-widest mb-3"
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
          >
            ORANGE EVENTS
          </h1>
          <p className="text-sm md:text-base font-semibold tracking-[0.25em] uppercase text-white mb-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            &amp; Conferences Pvt. Ltd.
          </p>
          <div className="w-16 h-[2px] bg-primary mx-auto mb-5 shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
          <p className="text-base md:text-xl font-medium tracking-[0.1em] text-white/90 italic font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            A good life is a collection of happy moments.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
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
