import { lazy, Suspense, useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    >
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${80 + i * 40}px`,
            height: `${80 + i * 40}px`,
            left: `${10 + i * 14}%`,
            top: `${15 + (i % 3) * 22}%`,
            background:
              i % 2 === 0
                ? "radial-gradient(circle, rgba(201,169,110,0.15) 0%, rgba(245,230,224,0.05) 100%)"
                : "radial-gradient(circle, rgba(232,228,240,0.2) 0%, rgba(245,230,224,0.05) 100%)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(201,169,110,0.12)",
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 15, 0],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4 + i * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}
    </motion.div>
  );
}

export function HeroScene() {
  const [webglOk, setWebglOk] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglOk(isWebGLAvailable());
  }, []);

  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden bg-background">
      <div className="absolute inset-0 z-0">
        {webglOk === null ? (
          <div className="w-full h-full" style={{ background: "#fafaf8" }} />
        ) : webglOk ? (
          <Suspense fallback={<HeroFallback />}>
            <Hero3DCanvas />
          </Suspense>
        ) : (
          <HeroFallback />
        )}
      </div>

      <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 2.8 }}
          className="text-center px-4"
        >
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-serif text-foreground tracking-widest mb-4"
            style={{ textShadow: "0 0 80px rgba(201,169,110,0.35)" }}
          >
            AURA
          </h1>
          <p className="text-lg md:text-xl font-light tracking-[0.3em] uppercase text-foreground/70">
            Extraordinary Experiences
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none z-20"
      >
        <span className="text-xs uppercase tracking-widest text-foreground/50">
          Scroll to explore
        </span>
        <div className="w-[1px] h-12 bg-foreground/20 overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            className="w-full h-full bg-foreground/60"
          />
        </div>
      </motion.div>
    </section>
  );
}
