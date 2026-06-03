import { useEffect, useRef } from "react";
import gsap from "gsap";

const row1 = [
  "Corporate Events",
  "Wedding Planning",
  "Entertainment",
  "Destination Events",
  "Product Launches",
  "Award Ceremonies",
  "Gala Dinners",
  "Virtual Events",
];

const row2 = [
  "Conferences & MICE",
  "Team Building",
  "Celebrity Management",
  "Incentive Tours",
  "Brand Experiences",
  "Cultural Programmes",
  "Anniversary Galas",
  "Milestone Celebrations",
];

function MarqueeRow({ items, direction = 1, speed = 40 }: { items: string[]; direction?: 1 | -1; speed?: number }) {
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
    <div className="overflow-hidden w-full">
      <div ref={trackRef} className="flex gap-8 w-max will-change-transform py-3">
        {doubled.map((item, i) => (
          <div key={i} className="flex items-center gap-8 flex-shrink-0">
            <div className="px-6 py-3 rounded-full bg-[#B46D29] cursor-none hover-target transition-all duration-300 hover:opacity-90 shadow-md">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white whitespace-nowrap">
                {item}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function MarqueeScene() {
  return (
    <section className="py-10 border-y border-primary/15 bg-background overflow-hidden relative">
      <div className="flex flex-col gap-3">
        <MarqueeRow items={row1} direction={1} speed={35} />
        <MarqueeRow items={row2} direction={-1} speed={45} />
      </div>
    </section>
  );
}
