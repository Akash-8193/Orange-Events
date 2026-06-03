import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    subtitle: "Understanding Your Dream",
    description:
      "Every great event begins with a conversation. We listen deeply — your goals, your audience, your brand story, your budget, and the feeling you want to create. This foundation shapes everything that follows.",
    accent: "A thorough creative brief is the difference between a good event and an unforgettable one.",
  },
  {
    number: "02",
    title: "Concept & Design",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our creative team transforms insights into a complete event concept. Mood boards, theme narratives, décor concepts, technology proposals, and entertainment ideas — all crafted uniquely for you.",
    accent: "Every element is intentional. Nothing is left to chance.",
  },
  {
    number: "03",
    title: "Planning & Coordination",
    subtitle: "Building the Blueprint",
    description:
      "Venue selection, vendor negotiations, supplier briefings, timeline construction, RSVP management, logistics planning — our meticulous project management system keeps every thread connected.",
    accent: "500+ vendors. 15+ years of trusted partnerships. All working for your event.",
  },
  {
    number: "04",
    title: "Rehearsal & Preparation",
    subtitle: "Zero Surprises on the Day",
    description:
      "We run detailed walkthroughs, site visits, tech checks, crew briefings, and dry runs. When event day arrives, every team member knows exactly what to do, when, and how.",
    accent: "Our mantra: Prepare for every contingency, then deliver flawlessly.",
  },
  {
    number: "05",
    title: "Live Event Execution",
    subtitle: "Where Magic Happens",
    description:
      "On the day, our dedicated on-site team manages every moving part — from guest arrival to closing performance. You stay present and celebrate. We handle everything behind the scenes.",
    accent: "Seamless. Stress-free. Spectacular.",
  },
];

export function ProcessScene() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".process-step").forEach((step, i) => {
        gsap.fromTo(
          step,
          { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
          {
            opacity: 1,
            x: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: step,
              start: "top 80%",
            },
          }
        );
      });

      // Animated progress line
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".process-container",
            start: "top 60%",
            end: "bottom 70%",
            scrub: 1,
          },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="process" className="py-32 px-6 bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-24 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-background mb-4"
          >
            From Concept to Celebration,
            <span className="block italic text-primary">We Handle Everything</span>
          </motion.h2>
          <p className="text-white/50 max-w-xl mx-auto text-sm">
            Our proven 5-step event management process ensures every event is delivered
            on time, within budget, and beyond expectations.
          </p>
        </div>

        <div className="process-container relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <div
              className="process-line w-full bg-primary origin-top"
              style={{ height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`process-step flex flex-col lg:flex-row items-center gap-8 lg:gap-16 py-14 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div className={`lg:w-5/12 ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="text-[4rem] font-serif text-primary/20 leading-none mb-2">
                      {step.number}
                    </div>
                    <p className="text-xs uppercase tracking-widest text-primary/60 mb-2">{step.subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-serif text-background mb-4">{step.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed mb-4">{step.description}</p>
                    <p className="text-primary/80 text-xs italic">"{step.accent}"</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex w-2/12 justify-center">
                    <div className="w-4 h-4 rounded-full border-2 border-primary bg-foreground shadow-[0_0_20px_rgba(201,169,110,0.5)] flex-shrink-0" />
                  </div>

                  {/* Empty side */}
                  <div className="hidden lg:block lg:w-5/12" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
