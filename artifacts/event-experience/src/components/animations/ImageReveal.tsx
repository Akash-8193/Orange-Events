import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface ImageRevealProps {
  children: ReactNode;
  className?: string;
}

export function ImageReveal({ children, className = "" }: ImageRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!wrapperRef.current || !contentRef.current) return;
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapperRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        }
      });

      tl.fromTo(
        wrapperRef.current,
        { xPercent: -100 },
        { xPercent: 0, duration: 1.2, ease: "power3.out" }
      ).fromTo(
        contentRef.current,
        { xPercent: 100 },
        { xPercent: 0, duration: 1.2, ease: "power3.out" },
        "<" // Start at the same time as the wrapper animation
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className={`overflow-hidden ${className}`}>
      <div ref={wrapperRef} className="w-full h-full will-change-transform overflow-hidden">
        <div ref={contentRef} className="w-full h-full will-change-transform origin-left">
          {children}
        </div>
      </div>
    </div>
  );
}
