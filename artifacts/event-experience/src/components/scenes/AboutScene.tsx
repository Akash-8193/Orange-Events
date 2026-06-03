import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      textRefs.current.forEach((text) => {
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
    "We are one of the best event management companies in Delhi,",
    "run by passionate professionals who believe in flawless execution.",
    "The constant pursuit for perfection and attention to detail —",
    "that is what makes Orange Events extraordinary.",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-32 px-6 relative flex items-center justify-center overflow-hidden bg-background"
    >
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto z-10 space-y-12 md:space-y-20">
        {lines.map((line, index) => (
          <div
            key={index}
            ref={(el) => (textRefs.current[index] = el)}
            className={`font-serif text-3xl md:text-5xl lg:text-6xl leading-tight ${
              index === 0
                ? "text-foreground/70 text-center"
                : index === 1
                ? "text-primary text-center italic"
                : index === 2
                ? "text-foreground text-center"
                : "text-foreground text-center font-bold"
            }`}
          >
            {line}
          </div>
        ))}

        <div
          ref={(el) => (textRefs.current[4] = el)}
          className="text-center pt-8"
        >
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Orange Events &amp; Entertainment trains and motivates its team to think innovatively
            and provide creative solutions. We are an event organizer trusted by many of India's
            biggest brands.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block mt-10 px-8 py-4 border border-primary text-primary text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover-target"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
}
