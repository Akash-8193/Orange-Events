import { useEffect, useState } from "react";
import { gsap } from "gsap";

export function PagePreloader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Wait for the window to load
    const handleLoad = () => {
      gsap.to(".page-preloader", {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => setIsVisible(false)
      });
    };

    // If document is already complete, run immediately
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // Fallback in case load event takes too long
      setTimeout(handleLoad, 3000); 
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="page-preloader fixed inset-0 z-[9999] bg-[#0a1128] flex items-center justify-center">
      <div className="flex flex-col items-center">
        <span className="text-4xl md:text-6xl font-serif font-bold text-white tracking-[0.2em] animate-pulse">
          ORANGE EVENTS
        </span>
        <span className="text-primary text-sm mt-4 tracking-[0.3em] uppercase">Loading Experience...</span>
      </div>
    </div>
  );
}
