import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import imgStep1 from "../../assets/gallery/Lotus-Court-1080X1080-1024x1024.webp";
import imgStep2 from "../../assets/gallery/WhatsApp-Image-2024-11-02-at-12.19.32-1024x768.jpeg";
import imgStep3 from "../../assets/gallery/WhatsApp-Image-2025-02-12-at-19.56.14-1-768x1024.jpeg";
import imgStep4 from "../../assets/gallery/WhatsApp-Image-2025-02-15-at-10.16.56-768x1024.jpeg";
import imgStep5 from "../../assets/gallery/WhatsApp-Image-2025-07-18-at-1.28.24-PM.jpeg";

const steps = [
  {
    number: "01",
    title: "Discovery & Vision",
    subtitle: "Understanding Your Dream",
    description:
      "Every great event begins with a conversation. We listen deeply — your goals, your audience, your brand story, your budget, and the feeling you want to create. This foundation shapes everything that follows.",
    accent: "A thorough creative brief is the difference between a good event and an unforgettable one.",
    image: imgStep1,
  },
  {
    number: "02",
    title: "Concept & Design",
    subtitle: "Bringing Ideas to Life",
    description:
      "Our creative team transforms insights into a complete event concept. Mood boards, theme narratives, décor concepts, technology proposals, and entertainment ideas — all crafted uniquely for you.",
    accent: "Every element is intentional. Nothing is left to chance.",
    image: imgStep2,
  },
  {
    number: "03",
    title: "Planning & Coordination",
    subtitle: "Building the Blueprint",
    description:
      "Venue selection, vendor negotiations, supplier briefings, timeline construction, RSVP management, logistics planning — our meticulous project management system keeps every thread connected.",
    accent: "500+ vendors. 15+ years of trusted partnerships. All working for your event.",
    image: imgStep3,
  },
  {
    number: "04",
    title: "Rehearsal & Preparation",
    subtitle: "Zero Surprises on the Day",
    description:
      "We run detailed walkthroughs, site visits, tech checks, crew briefings, and dry runs. When event day arrives, every team member knows exactly what to do, when, and how.",
    accent: "Our mantra: Prepare for every contingency, then deliver flawlessly.",
    image: imgStep4,
  },
  {
    number: "05",
    title: "Live Event Execution",
    subtitle: "Where Magic Happens",
    description:
      "On the day, our dedicated on-site team manages every moving part — from guest arrival to closing performance. You stay present and celebrate. We handle everything behind the scenes.",
    accent: "Seamless. Stress-free. Spectacular.",
    image: imgStep5,
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
    <section ref={sectionRef} id="process" className="py-32 px-6 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[30rem] h-[30rem] bg-primary/5 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-[90rem] mx-auto px-4 md:px-8 relative z-10">
        <div className="mb-24 text-center relative flex flex-col items-center justify-center">
          {/* Massive Watermark Text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 w-full text-center overflow-hidden">
            <span className="text-[11rem] md:text-[16rem] lg:text-[18rem] font-black text-[#4a2b16] uppercase tracking-tighter leading-none select-none">
              PROCESS
            </span>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 relative z-10"
          >
            Our Process
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a1128] font-bold mb-6 leading-[1.1] relative z-10"
          >
            From Concept to Celebration,
            <span className="block italic text-primary font-normal mt-2">We Handle Everything</span>
          </motion.h2>
          <p className="text-slate-600 font-medium max-w-xl mx-auto text-lg leading-relaxed relative z-10">
            Our proven 5-step event management process ensures every event is delivered
            on time, within budget, and beyond expectations.
          </p>
        </div>

        <div className="process-container relative">
          {/* Vertical timeline line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 -translate-x-1/2">
            <div
              className="process-line w-full bg-primary origin-top rounded-full"
              style={{ height: "100%" }}
            />
          </div>

          <div className="flex flex-col gap-0">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div
                  key={step.number}
                  className={`process-step flex flex-col lg:flex-row items-center gap-10 lg:gap-20 py-24 ${
                    isLeft ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Content side */}
                  <div className={`lg:w-[45%] ${isLeft ? "lg:text-right" : "lg:text-left"}`}>
                    <div className="text-[6rem] lg:text-[7rem] font-serif text-[#4a2b16] leading-none mb-6 select-none">
                      {step.number}
                    </div>
                    <p className="text-sm font-bold uppercase tracking-widest text-primary/80 mb-4">{step.subtitle}</p>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold font-serif text-[#0a1128] mb-6">{step.title}</h3>
                    <p className="text-slate-600 font-medium text-lg leading-relaxed mb-8">{step.description}</p>
                    <p className="text-primary text-lg font-medium italic border-l-[3px] border-primary/30 pl-6 py-2 ml-auto lg:ml-0 inline-block w-full">"{step.accent}"</p>
                  </div>

                  {/* Center dot */}
                  <div className="hidden lg:flex lg:w-[10%] justify-center z-10">
                    <div className="w-6 h-6 rounded-full border-[5px] border-primary bg-white shadow-lg flex-shrink-0" />
                  </div>

                  {/* Image side */}
                  <div className={`hidden lg:flex lg:w-[45%] ${isLeft ? "justify-start" : "justify-end"}`}>
                    <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-[10px] border-white relative group">
                      <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none" />
                      <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
