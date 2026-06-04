import { useRef } from "react";
import { useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import svcCorporate from "../../assets/generated_images/svc-corporate-new.png";
import svcWedding from "../../assets/generated_images/svc-wedding-new.png";
import svcEntertainment from "../../assets/generated_images/svc-entertainment-new.png";
import svcVacation from "../../assets/generated_images/svc-vacation-new.png";
import svcVirtual from "../../assets/generated_images/svc-virtual-new.png";
import svcOthers from "../../assets/generated_images/svc-others-new.png";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    id: "corporate",
    title: "Corporate Event",
    image: svcCorporate,
    tag: "Corporate",
    desc: "Precision, Impact, and Brand Excellence.",
  },
  {
    id: "wedding",
    title: "Wedding Planning",
    image: svcWedding,
    tag: "Luxury",
    desc: "Your Love Story, Produced Like a Masterpiece.",
  },
  {
    id: "entertainment",
    title: "Entertainment Services",
    image: svcEntertainment,
    tag: "Shows",
    desc: "Spectacular Shows and Unforgettable Performances.",
  },
  {
    id: "vacation",
    title: "Vacation Planning",
    image: svcVacation,
    tag: "Travel",
    desc: "Exclusive Retreats and Curated Escapes.",
  },
  {
    id: "virtual",
    title: "Virtual Events",
    image: svcVirtual,
    tag: "Digital",
    desc: "Connecting the World, Seamlessly.",
  },
  {
    id: "others",
    title: "Others",
    image: svcOthers,
    tag: "Bespoke",
    desc: "Bespoke Galas and Milestone Events.",
  },
];

import { TextReveal } from "@/components/animations/TextReveal";
import { RevealAnimation } from "@/components/animations/RevealAnimation";

export function ServicesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray(".service-section");

    // Master Timeline for pinning and stacking
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${sections.length * 150}%`, // extend scroll length to allow for pauses
        pin: true,
        scrub: 1, // Smooth cinematic scrub
      }
    });

    sections.forEach((section: any, i) => {
      const img = section.querySelector(".service-bg-img");
      const contentElements = section.querySelectorAll(".reveal-text");

      // Set initial states
      if (i > 0) {
        gsap.set(section, { yPercent: 120 }); // start fully below viewport, added 20% buffer to prevent bottom bleed/bounce visibility
      } else {
        // Initial intro animation for the very first section (Corporate Event)
        // This is not in the timeline because it should play once on load/entry.
        gsap.fromTo(contentElements, 
          { y: 50, opacity: 0 }, 
          { 
            y: 0, opacity: 1, stagger: 0.1, duration: 1, ease: "power3.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
            }
          }
        );
      }

      if (i > 0) {
        // 1. Pause: Add a dummy tween to create a "reading phase" where the user scrolls but the previous section stays fully visible.
        tl.to({}, { duration: 0.8 }); // The higher the duration, the longer the pause

        // 2. Slide Up: The next panel slides up over the current one from a safe distance (120%)
        tl.fromTo(section, 
          { yPercent: 120 },
          {
            yPercent: 0,
            duration: 1,
            ease: "none",
          }
        );

        // 3. Image Parallax: animate the image inside the panel using the timeline
        if (img) {
          tl.fromTo(img, 
            { yPercent: -15 }, 
            { yPercent: 0, duration: 1, ease: "none" }, 
            "<" // sync exactly with the panel sliding up
          );
        }

        // 4. Text reveal: fade and slide up during the transition
        if (contentElements.length) {
          tl.fromTo(contentElements,
            { y: 60, opacity: 0 },
            { y: 0, opacity: 1, stagger: 0.05, duration: 0.8, ease: "none" },
            "<0.2" // start 20% into the slide up
          );
        }
      }
    });

    // Add a final pause at the end of the timeline so the last section stays pinned for a moment
    tl.to({}, { duration: 0.8 });

  }, { scope: containerRef });

  return (
    <>
      <section className="bg-white pt-32 pb-24 relative overflow-hidden flex flex-col items-center border-b border-slate-100">
        {/* Background Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[20rem] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Massive Watermark Text - Light Brown/Black */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 w-full text-center overflow-hidden">
          <RevealAnimation delay={0.1}>
            <span className="text-[12rem] md:text-[18rem] font-black text-[#4a2b16] uppercase tracking-tighter leading-none select-none">
              SERVICES
            </span>
          </RevealAnimation>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          {/* Animated Vertical Line */}
          <RevealAnimation delay={0.2}>
            <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-primary/30 to-primary mb-8" />
          </RevealAnimation>
          
          <RevealAnimation delay={0.3}>
            <p className="text-xs md:text-sm uppercase tracking-[0.4em] text-primary mb-6 font-bold flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary/30" />
              Our Services
              <span className="w-8 h-[1px] bg-primary/30" />
            </p>
          </RevealAnimation>
          
          <TextReveal variant="word" delay={0.4}>
            <h2 className="text-5xl md:text-6xl lg:text-[5.5rem] font-serif text-[#0a1128] leading-[1.1] mb-8">
              Experiences we <span className="italic text-primary font-light">craft</span>
            </h2>
          </TextReveal>
          
          <RevealAnimation delay={0.5}>
            <p className="text-slate-600 text-lg md:text-xl font-light leading-relaxed">
              From grand corporate galas to intimate luxury weddings, we bring a blend of meticulous planning, bold creativity, and flawless execution to every moment.
            </p>
          </RevealAnimation>
        </div>
      </section>

      <div ref={containerRef} id="services" className="relative w-full h-screen bg-background overflow-hidden">
        {services.map((service, index) => (
        <section 
          key={service.id} 
          className="service-section absolute top-0 left-0 w-full h-full overflow-hidden cursor-pointer group"
          style={{ zIndex: index }} // Ensure newer sections stack on top
          onClick={() => setLocation(`/service/${service.id}`)}
        >
          {/* Parallax Image Wrapper */}
          <div className="absolute top-0 left-0 w-full h-[120%] pointer-events-none">
            <img
              src={service.image}
              alt={service.title}
              className="service-bg-img w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.85] transition-all duration-700"
            />
          </div>

          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />

          {/* Content */}
          <div className="relative z-10 w-full max-w-7xl mx-auto h-full px-8 md:px-16 flex flex-col justify-end md:justify-center pb-24 md:pb-0 pointer-events-none">
            
            <div className="reveal-text flex items-center gap-4 mb-6">
              <span className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary drop-shadow-md">
                {String(index + 1).padStart(2, '0')} / {service.tag}
              </span>
            </div>

            <h3 className="reveal-text text-6xl md:text-8xl lg:text-9xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
              {service.title}
            </h3>
            
            <p className="reveal-text text-xl md:text-3xl text-white/80 font-light italic font-serif max-w-4xl mb-12">
              {service.desc}
            </p>

            <div className="reveal-text mt-4">
              <span className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-primary transition-colors">
                Explore Experience
                <span className="w-12 h-[1px] bg-white/70 group-hover:bg-primary transition-all group-hover:w-20" />
              </span>
            </div>

          </div>
        </section>
      ))}
      </div>
    </>
  );
}
