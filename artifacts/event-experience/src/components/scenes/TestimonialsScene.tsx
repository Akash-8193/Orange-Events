import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    quote: "AURA didn't just plan our wedding; they orchestrated a masterpiece. Every guest felt they had stepped into another realm.",
    name: "Eleanor & James Sterling",
    event: "Lake Como Wedding"
  },
  {
    quote: "The brand launch exceeded every expectation. The attention to detail and cinematic atmospheric design was flawless.",
    name: "Victoria Vanguard",
    event: "Vanguard Tech Launch"
  },
  {
    quote: "An unparalleled level of luxury and sophistication. They took our vague ideas and spun them into gold.",
    name: "The Harrison Family",
    event: "50th Anniversary Gala"
  }
];

export function TestimonialsScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // Simple slow horizontal scroll effect
    const ctx = gsap.context(() => {
      gsap.to(".testimonial-track", {
        x: "-50%",
        ease: "none",
        duration: 20,
        repeat: -1
      });
    }, containerRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Echoes of Delight</h2>
      </div>

      {/* Marquee Container */}
      <div className="flex overflow-hidden w-full py-10 pointer-events-none">
        <div className="testimonial-track flex gap-8 px-4 w-[200vw] min-w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div 
              key={i} 
              className="glass-card w-[85vw] md:w-[400px] flex-shrink-0 p-10 rounded-2xl relative"
            >
              <Quote className="text-primary/20 w-16 h-16 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-lg md:text-xl font-serif leading-relaxed mb-8 pt-4">"{t.quote}"</p>
                <div>
                  <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
