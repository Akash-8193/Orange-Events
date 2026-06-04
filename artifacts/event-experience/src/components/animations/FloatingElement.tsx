import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";

interface FloatingElementProps {
  children: ReactNode;
  yOffset?: number;
  duration?: number;
  delay?: number;
  className?: string;
}

export function FloatingElement({ 
  children, 
  yOffset = 10, 
  duration = 3, 
  delay = 0,
  className = "" 
}: FloatingElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!elementRef.current) return;

      gsap.fromTo(
        elementRef.current,
        { y: -yOffset },
        {
          y: yOffset,
          duration: duration,
          delay: delay,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        }
      );
    }, elementRef);

    return () => ctx.revert();
  }, [yOffset, duration, delay]);

  return (
    <div ref={elementRef} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}
