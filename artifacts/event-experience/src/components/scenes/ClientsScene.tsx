import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

const clients = [
  "Cargill",
  "LG India",
  "New Holland",
  "Phillips India",
  "FDDI",
  "H2O Group",
  "Fortis Hospital",
  "CNH Industrials",
  "TVS Motors",
  "Nokia",
  "Havells India",
  "Birla Group",
];

const clients2 = [
  "Ministry of Tourism",
  "HDFC Bank",
  "Infosys",
  "Tata Motors",
  "ITC Hotels",
  "Maruti Suzuki",
  "Asian Paints",
  "Bajaj Auto",
  "Mahindra Group",
  "Hero MotoCorp",
  "Dabur India",
  "Sun Pharma",
];

function ClientRow({ items, direction = 1, speed = 40 }: { items: string[]; direction?: 1 | -1; speed?: number }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.scrollWidth / 2;
    const tween = gsap.fromTo(
      track,
      { x: direction === 1 ? 0 : -width },
      {
        x: direction === 1 ? -width : 0,
        duration: speed,
        ease: "none",
        repeat: -1,
      }
    );
    return () => { tween.kill(); };
  }, [direction, speed]);

  const doubled = [...items, ...items];

  return (
    <div className="overflow-hidden w-full py-3">
      <div ref={trackRef} className="flex gap-8 w-max will-change-transform">
        {doubled.map((client, i) => (
          <div
            key={i}
            className="flex items-center gap-8 flex-shrink-0"
          >
            <div className="px-6 py-3 rounded-full bg-[#B46D29] cursor-none hover-target transition-all duration-300 hover:opacity-90 shadow-md">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white whitespace-nowrap">
                {client}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ClientsScene() {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/3 w-[30rem] h-[10rem] bg-primary/10 rounded-full blur-[50px] opacity-40" />
      </div>

      <div className="text-center mb-16 px-6 relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
        >
          Trusted Partners
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif text-foreground"
        >
          Brands that trust
          <span className="italic text-primary"> Orange Events</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-foreground/80 text-sm mt-4 max-w-md mx-auto"
        >
          From Fortune 500 corporations to India's fastest-growing enterprises — our clients
          trust us because we deliver results, every single time.
        </motion.p>
      </div>

      <div className="flex flex-col gap-2">
        <ClientRow items={clients} direction={1} speed={50} />
        <ClientRow items={clients2} direction={-1} speed={40} />
      </div>
    </section>
  );
}
