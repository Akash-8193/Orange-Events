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

export function ServicesScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();

  useGSAP(() => {
    if (!containerRef.current) return;

    const sections = gsap.utils.toArray(".service-section");

    sections.forEach((section: any) => {
      const wrapper = section.querySelector(".service-wrapper");
      const img = section.querySelector(".service-bg-img");
      const contentElements = section.querySelectorAll(".reveal-text");

      // 1. Bottom-to-top reveal of the whole panel wrapper
      gsap.fromTo(wrapper,
        { y: "25vh", scale: 1.05, opacity: 0 },
        {
          y: "0vh", scale: 1, opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 95%", // Start when the top of the section hits 95% of the viewport (bottom)
            end: "top 25%",   // End when it's mostly on screen
            scrub: true,
          }
        }
      );

      // 2. Image parallax (moves opposite to scroll for depth)
      if (img) {
        gsap.fromTo(img,
          { y: "-15%" },
          {
            y: "15%",
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            }
          }
        );
      }

      // 3. Staggered text reveal (bottom-to-top for texts)
      if (contentElements.length) {
        gsap.fromTo(contentElements,
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: section,
              start: "top 75%",
              end: "top 35%",
              scrub: true,
            }
          }
        );
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} id="services" className="w-full bg-background flex flex-col py-24 gap-16 md:gap-32">
      
      {/* Intro Header */}
      <div className="px-8 md:px-24">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-primary font-bold mb-4">
          What we do
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground">
          Our Services
        </h2>
      </div>

      {/* Services List */}
      <div className="flex flex-col w-full px-4 md:px-8 lg:px-12 gap-8 md:gap-16">
        {services.map((service, index) => (
          <section 
            key={service.id} 
            className="service-section relative w-full h-[85vh] lg:h-[90vh]"
          >
            {/* The wrapper that receives the GSAP entrance animation */}
            <div 
              className="service-wrapper relative w-full h-full rounded-[2rem] overflow-hidden cursor-pointer group"
              onClick={() => setLocation(`/service/${service.id}`)}
            >
              {/* Parallax Image */}
              <div className="absolute inset-0 w-full h-[130%] -top-[15%] pointer-events-none">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-bg-img w-full h-full object-cover brightness-[0.7] group-hover:brightness-[0.9] transition-all duration-700"
                />
              </div>

              {/* Overlays for text contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/50 pointer-events-none transition-opacity duration-700 group-hover:opacity-80" />

              {/* Text Content Container */}
              <div className="relative z-10 w-full max-w-7xl mx-auto h-full px-8 md:px-16 flex flex-col justify-end pb-16 md:pb-24 pointer-events-none">
                
                <div className="reveal-text flex items-center gap-4 mb-6">
                  <span className="text-xs font-semibold uppercase tracking-widest text-primary drop-shadow-md">
                    {String(index + 1).padStart(2, '0')} / {service.tag}
                  </span>
                </div>

                <h3 className="reveal-text text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight drop-shadow-2xl">
                  {service.title}
                </h3>
                
                <p className="reveal-text text-lg md:text-2xl text-white/80 font-light italic font-serif max-w-3xl mb-12">
                  {service.desc}
                </p>

                <div className="reveal-text mt-4">
                  <span className="inline-flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-white/70 group-hover:text-primary transition-colors">
                    Explore Experience
                    <span className="w-12 h-[1px] bg-white/70 group-hover:bg-primary transition-all group-hover:w-20" />
                  </span>
                </div>

              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
