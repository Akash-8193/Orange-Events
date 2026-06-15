import { useEffect, ReactNode } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  useEffect(() => {
    // Set native smooth scrolling
    document.documentElement.style.scrollBehavior = "smooth";

    // Refresh GSAP when fonts are loaded to fix height miscalculations
    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return <>{children}</>;
}
