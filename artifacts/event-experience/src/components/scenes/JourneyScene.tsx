import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Lightbulb, CalendarDays, PenTool, Hammer, PartyPopper } from "lucide-react";

const steps = [
  { icon: Lightbulb, title: "The Idea", desc: "We begin by understanding your vision, dreaming without limits." },
  { icon: CalendarDays, title: "Planning", desc: "Meticulous logistics ensure every detail is accounted for." },
  { icon: PenTool, title: "Design", desc: "Crafting the visual identity, textures, and atmosphere of the event." },
  { icon: Hammer, title: "Production", desc: "Our artisan teams build the physical reality of the dream." },
  { icon: PartyPopper, title: "Celebration", desc: "The flawless execution of an unforgettable experience." },
];

export function JourneyScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Animate line drawing
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { height: "0%" },
          {
            height: "100%",
            ease: "none",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 60%",
              end: "bottom 80%",
              scrub: true,
            },
          }
        );
      }

      // Animate items fading in
      itemsRef.current.forEach((item, index) => {
        if (!item) return;
        
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="journey" className="py-32 bg-background relative" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-serif mb-4">The Creation Journey</h2>
          <p className="text-muted-foreground uppercase tracking-widest text-sm">From concept to reality</p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border -translate-x-1/2 hidden md:block" />
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-primary -translate-x-1/2 origin-top hidden md:block" ref={lineRef} />

          <div className="space-y-16 md:space-y-24 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div 
                  key={index}
                  ref={(el) => itemsRef.current[index] = el}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  <div className={`md:w-1/2 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} ml-12 md:ml-0`}>
                    <h3 className="text-2xl font-serif mb-3 text-foreground">{step.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>
                  
                  {/* Icon Node */}
                  <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-10 h-10 md:w-14 md:h-14 rounded-full bg-background border-2 border-primary flex items-center justify-center shadow-[0_0_20px_rgba(201,169,110,0.3)]">
                    <Icon className="w-4 h-4 md:w-6 md:h-6 text-primary" />
                  </div>
                  
                  <div className="md:w-1/2 hidden md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
