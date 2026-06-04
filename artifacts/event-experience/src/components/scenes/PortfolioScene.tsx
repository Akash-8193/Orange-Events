import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealAnimation } from "@/components/animations/RevealAnimation";
import portfolio1 from "@/assets/images/portfolio-1.png";
import portfolio2 from "@/assets/images/portfolio-2.png";
import portfolio3 from "@/assets/images/portfolio-3.png";
import portfolio4 from "@/assets/images/portfolio-4.png";
import portfolio5 from "@/assets/images/portfolio-5.png";
import portfolio6 from "@/assets/images/portfolio-6.png";

const images = [
  { src: portfolio1, title: "Outdoor Wedding Ceremony", type: "Wedding Planning" },
  { src: portfolio2, title: "Corporate Gala Dinner", type: "Corporate Events" },
  { src: portfolio3, title: "Smart City Conference", type: "Corporate Events" },
  { src: portfolio4, title: "Floral Fantasy Reception", type: "Wedding Planning" },
  { src: portfolio5, title: "Royal Mandap Design", type: "Wedding Planning" },
  { src: portfolio6, title: "Rooftop Celebration", type: "Entertainment" },
];

export function PortfolioScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -130]);

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-32 bg-foreground text-background relative overflow-hidden"
    >
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-primary/10 rounded-full blur-[100px] opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 mb-16 text-center relative z-10">
        <RevealAnimation delay={0.1}>
          <p className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Our Portfolio</p>
        </RevealAnimation>
        <TextReveal variant="word" delay={0.2}>
          <h2 className="text-4xl md:text-6xl font-serif text-background mb-3">Our Works</h2>
        </TextReveal>
        <RevealAnimation delay={0.3}>
          <p className="text-background/80 uppercase tracking-widest text-xs">
            Moments crafted with meticulous precision
          </p>
        </RevealAnimation>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6 px-4 md:px-10 max-w-[100rem] mx-auto md:h-[130vh] relative z-10">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-5 md:gap-6 pt-8">
          {[0, 3].map((index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[3/4] hover-target"
            >
              <img
                src={images[index].src}
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs uppercase tracking-widest text-primary mb-1">
                  {images[index].type}
                </span>
                <h3 className="text-lg font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-5 md:gap-6 -mt-16 md:-mt-32">
          {[1, 4].map((index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[3/4] hover-target"
            >
              <img
                src={images[index].src}
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs uppercase tracking-widest text-primary mb-1">
                  {images[index].type}
                </span>
                <h3 className="text-lg font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-5 md:gap-6 pt-16 md:pt-8">
          {[2, 5].map((index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-2xl aspect-[3/4] hover-target"
            >
              <img
                src={images[index].src}
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-3 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-xs uppercase tracking-widest text-primary mb-1">
                  {images[index].type}
                </span>
                <h3 className="text-lg font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
