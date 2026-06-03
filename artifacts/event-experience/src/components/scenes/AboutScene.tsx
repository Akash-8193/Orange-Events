import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      textRefs.current.forEach((text, i) => {
        if (!text) return;
        
        gsap.fromTo(
          text,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            scrollTrigger: {
              trigger: text,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const lines = [
    "We don't just plan events.",
    "We craft experiences that live in memory forever.",
    "Every celebration is a story waiting to be told —",
    "and we are the storytellers."
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="min-h-screen py-32 px-6 relative flex items-center justify-center overflow-hidden bg-background"
    >
      {/* Decorative blurred background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 space-y-12 md:space-y-20">
        {lines.map((line, index) => (
          <div 
            key={index}
            ref={(el) => textRefs.current[index] = el}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight ${
              index === 0 ? "text-foreground/70 text-center" : 
              index === 1 ? "text-primary text-center italic" : 
              index === 2 ? "text-foreground text-center" : 
              "text-foreground text-center font-bold"
            }`}
          >
            {line}
          </div>
        ))}
      </div>
    </section>
  );
}
