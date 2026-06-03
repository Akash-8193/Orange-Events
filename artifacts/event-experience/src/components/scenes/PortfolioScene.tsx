import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import portfolio1 from "@/assets/images/portfolio-1.png";
import portfolio2 from "@/assets/images/portfolio-2.png";
import portfolio3 from "@/assets/images/portfolio-3.png";
import portfolio4 from "@/assets/images/portfolio-4.png";
import portfolio5 from "@/assets/images/portfolio-5.png";
import portfolio6 from "@/assets/images/portfolio-6.png";

const images = [
  { src: portfolio1, title: "Outdoor Elegance", type: "Wedding" },
  { src: portfolio2, title: "Midnight Gala", type: "Corporate" },
  { src: portfolio3, title: "Future Vision", type: "Activation" },
  { src: portfolio4, title: "Floral Fantasy", type: "Celebration" },
  { src: portfolio5, title: "Crystal Dreams", type: "Luxury Party" },
  { src: portfolio6, title: "Golden Hour", type: "Social" },
];

export function PortfolioScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -150]);

  return (
    <section id="portfolio" ref={containerRef} className="py-32 bg-foreground text-background relative overflow-hidden">
      <div className="container mx-auto px-6 mb-20 text-center">
        <h2 className="text-4xl md:text-6xl font-serif text-background mb-4">The Gallery</h2>
        <p className="text-muted uppercase tracking-widest text-sm">Moments captured in time</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4 md:px-10 max-w-[100rem] mx-auto h-[150vh] md:h-[120vh]">
        
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-6 md:gap-8 pt-10">
          {[0, 3].map((index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[3/4] hover-target">
              <img 
                src={images[index].src} 
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-white/80 mb-2">{images[index].type}</span>
                <h3 className="text-2xl font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-6 md:gap-8 -mt-20 md:-mt-40">
          {[1, 4].map((index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[3/4] hover-target">
              <img 
                src={images[index].src} 
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-white/80 mb-2">{images[index].type}</span>
                <h3 className="text-2xl font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-6 md:gap-8 pt-20 md:pt-10">
          {[2, 5].map((index) => (
            <div key={index} className="relative group overflow-hidden rounded-xl aspect-[3/4] hover-target">
              <img 
                src={images[index].src} 
                alt={images[index].title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                <span className="text-xs uppercase tracking-widest text-white/80 mb-2">{images[index].type}</span>
                <h3 className="text-2xl font-serif text-white">{images[index].title}</h3>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
