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
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/20 to-background/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 via-transparent to-transparent" />
      </div>

      {/* 3D layer on top of image (particles / floating shapes) */}
      {webglOk !== null && (
        <div className="absolute inset-0 z-[1] opacity-60 pointer-events-none">
          {webglOk ? (
            <Suspense fallback={null}>
              <Hero3DCanvas />
            </Suspense>
          ) : null}
        </div>
      )}

      {/* Text overlay */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="text-center px-4"
        >
          <motion.p
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            animate={{ opacity: 1, letterSpacing: "0.35em" }}
            transition={{ duration: 2, delay: 2.6 }}
            className="text-xs md:text-sm font-light uppercase text-white/70 mb-6 tracking-[0.35em]"
          >
            Welcome to
          </motion.p>
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest mb-3 drop-shadow-2xl"
            style={{ textShadow: "0 4px 40px rgba(0,0,0,0.5), 0 0 80px rgba(201,169,110,0.3)" }}
          >
            ORANGE EVENTS
          </h1>
          <p className="text-sm md:text-base font-light tracking-[0.25em] uppercase text-white/70 mb-5">
            &amp; Conferences Pvt. Ltd.
          </p>
          <div className="w-16 h-[1px] bg-primary mx-auto mb-5" />
          <p className="text-base md:text-lg font-light tracking-[0.1em] text-white/60 italic font-serif">
            A good life is a collection of happy moments.
          </p>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
      >
        <span className="text-xs uppercase tracking-widest text-white/50">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-white/20 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-white/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
