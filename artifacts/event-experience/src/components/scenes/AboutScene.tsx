import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import aboutBg from "@assets/generated_images/oe-about-bg.png";

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
              start: "top 85%",
              end: "bottom 65%",
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-background"
    >
      {/* Full-width image banner */}
      <div className="relative h-[55vh] w-full overflow-hidden">
        <img
          src={aboutBg}
          alt="Orange Events professional team"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-transparent" />

        <div className="absolute inset-0 flex items-center justify-start px-10 md:px-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
          >
            <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3">Who We Are</p>
            <h2 className="text-4xl md:text-6xl font-serif text-foreground max-w-xl leading-tight">
              Delhi's Premier<br />
              <span className="italic text-primary">Event Creators</span>
            </h2>
          </motion.div>
        </div>
      </div>

      {/* Text content */}
      <div className="py-20 px-6 relative">
        <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 relative">
          <div
            ref={(el) => (textRefs.current[0] = el)}
            className="space-y-6"
          >
            <p className="text-2xl md:text-3xl font-serif text-foreground/80 leading-relaxed">
              We are one of the best event management companies in Delhi, run by experienced and
              talented professionals passionate about{" "}
              <span className="text-primary italic">flawless execution.</span>
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Orange Events &amp; Entertainment trains and motivates its team to think innovatively
              and provide creative solutions. The constant pursuit for perfection and attention to
              detail is what makes us one of the best Delhi-based event management companies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We are an event organizer trusted by many of India's biggest brands — from Cargill
              and LG India to Fortis Hospital and CNH Industrials.
            </p>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-block mt-4 px-8 py-4 border border-primary text-primary text-sm uppercase tracking-widest hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover-target"
            >
              Contact Us
            </a>
          </div>

          <div
            ref={(el) => (textRefs.current[1] = el)}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "15+", label: "Years of Excellence" },
              { number: "500+", label: "Events Delivered" },
              { number: "100+", label: "Corporate Clients" },
              { number: "50+", label: "Cities Covered" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass-card rounded-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-serif text-primary mb-2">{stat.number}</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
