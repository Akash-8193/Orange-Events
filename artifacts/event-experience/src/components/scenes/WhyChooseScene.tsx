import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Award, Zap, Shield, Globe, Sparkles, Clock } from "lucide-react";

const reasons = [
  {
    icon: Award,
    number: "01",
    title: "Creative Excellence",
    description:
      "We don't follow trends — we create them. Every event is an original concept, born from deep client consultation and fuelled by a team of visionary designers, storytellers, and producers.",
  },
  {
    icon: Zap,
    number: "02",
    title: "Flawless Execution",
    description:
      "From a 20-person board dinner to a 5,000-seat gala, our systems and experience ensure zero-error delivery. We obsess over timelines, logistics, and every micro-detail so you never have to.",
  },
  {
    icon: Shield,
    number: "03",
    title: "End-to-End Ownership",
    description:
      "Venue scouting, décor, catering, entertainment, technology, guest experience — we own everything from the first brief to the final applause. One team. Total accountability.",
  },
  {
    icon: Globe,
    number: "04",
    title: "Pan-India Presence",
    description:
      "With events executed across Delhi NCR, Mumbai, Bangalore, Hyderabad, and tier-2 cities, our logistics network ensures premium quality wherever your event needs to happen.",
  },
  {
    icon: Sparkles,
    number: "05",
    title: "Trusted by Leading Brands",
    description:
      "Cargill, LG India, New Holland, Fortis Hospital, CNH Industrials — India's top enterprises choose us repeatedly because we deliver results that exceed expectations, every time.",
  },
  {
    icon: Clock,
    number: "06",
    title: "15+ Years of Expertise",
    description:
      "Since 2009, we have been building a reputation built on trust, creativity, and outcomes. Our experience spans corporate, social, entertainment, and destination events across every scale.",
  },
];

export function WhyChooseScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".why-card",
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".why-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[35rem] h-[35rem] bg-primary/8 rounded-full blur-[120px]" />
        <div className="absolute top-20 right-0 w-[25rem] h-[25rem] bg-accent/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 max-w-3xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Why choose us
          </motion.p>
          <h2
            ref={headingRef}
            className="text-4xl md:text-6xl font-serif text-foreground mb-6 leading-tight"
          >
            Where Creativity Meets
            <span className="block italic text-primary">Flawless Execution</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            Choosing an event partner is one of the most important decisions you'll make.
            Here's why India's leading organisations trust Orange Events year after year.
          </p>
        </div>

        <div className="why-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <div
                key={reason.number}
                className="why-card group bg-background p-10 hover:bg-primary/5 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute top-6 right-6 text-6xl font-serif text-primary/8 leading-none select-none">
                  {reason.number}
                </div>
                <div className="mb-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                  <Icon className="text-primary w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif text-foreground mb-4">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{reason.description}</p>
                <div className="mt-8 w-8 h-[1px] bg-primary scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
