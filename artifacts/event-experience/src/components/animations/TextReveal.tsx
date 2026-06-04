import { useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

type Variant = "word" | "character" | "hero";

interface TextRevealProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  delay?: number;
}

export function TextReveal({ children, variant = "word", className = "", delay = 0 }: TextRevealProps) {
  const hiddenRef = useRef<HTMLDivElement>(null);
  const visibleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!hiddenRef.current || !visibleRef.current) return;

    // Copy the original HTML to the visible container
    visibleRef.current.innerHTML = hiddenRef.current.innerHTML;

    const ctx = gsap.context(() => {
      // Wrap the text in SplitType targeting the visible container
      const split = new SplitType(visibleRef.current!, {
        types: "lines,words,chars",
        tagName: "span",
      });

      // We need to style the lines with overflow hidden for certain reveals
      if (split.lines) {
        split.lines.forEach(line => {
          line.style.overflow = 'hidden';
          line.style.paddingTop = '10px';
          line.style.marginTop = '-10px';
          line.style.paddingBottom = '10px';
          line.style.marginBottom = '-10px';
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: visibleRef.current,
          start: "top 85%",
          toggleActions: "play none none none"
        },
        delay: delay
      });

      if (variant === "word" && split.words) {
        tl.fromTo(
          split.words,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.05, ease: "power2.out" }
        );
      } else if (variant === "character" && split.chars) {
        tl.fromTo(
          split.chars,
          { x: 20, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, stagger: 0.03, ease: "power2.out" }
        );
      } else if (variant === "hero" && split.chars) {
        tl.fromTo(
          split.chars,
          { opacity: 0, x: 50, rotateX: -90 },
          { opacity: 1, x: 0, rotateX: 0, duration: 1, stagger: 0.02, ease: "back.out(1.7)" }
        );
      }

      // We don't strictly need to revert SplitType because the visible container is destroyed and recreated
      // But we can clean it up for good measure if needed, though React doesn't manage its children anyway.
    });

    return () => ctx.revert();
  }, [variant, delay, children]);

  return (
    <div className={`will-change-[transform,opacity] ${className}`}>
      {/* Hidden container for React to manage safely */}
      <div ref={hiddenRef} style={{ display: "none" }}>
        {children}
      </div>
      {/* Visible container for SplitType to mutate */}
      <div ref={visibleRef} />
    </div>
  );
}
