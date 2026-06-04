import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface RevealAnimationProps {
  children: ReactNode;
  y?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function RevealAnimation({ 
  children, 
  y = 50, 
  duration = 1, 
  delay = 0,
  className = "" 
}: RevealAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;
      
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: elementRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [y, duration, delay]);

  return (
    <div ref={elementRef} className={`will-change-[transform,opacity] ${className}`}>
      {children}
    </div>
  );
}
