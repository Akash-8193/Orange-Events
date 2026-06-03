import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

const stats = [
  { value: 500, suffix: "+", label: "Events Delivered", desc: "Across corporate, social & entertainment" },
  { value: 15, suffix: "+", label: "Years of Excellence", desc: "Trusted event expertise since 2009" },
  { value: 100, suffix: "+", label: "Corporate Clients", desc: "From Fortune 500s to fast-growing brands" },
  { value: 50, suffix: "+", label: "Cities Covered", desc: "Pan-India reach for every event" },
  { value: 98, suffix: "%", label: "Client Retention", desc: "Clients who return, refer, and trust us" },
  { value: 1, suffix: "M+", label: "Guests Hosted", desc: "Memorable experiences, lasting impressions" },
];

function AnimatedCounter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [active, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export function StatsScene() {
  const sectionRef = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 70%",
        onEnter: () => setActive(true),
        once: true,
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-28 px-6 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[20rem] bg-primary/6 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            Our Track Record
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-serif text-foreground"
          >
            Numbers that tell
            <span className="italic text-primary"> our story</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-border/20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-background p-10 md:p-12 text-center hover:bg-primary/5 transition-colors duration-500"
            >
              <div className="text-4xl md:text-6xl font-serif text-primary mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} active={active} />
              </div>
              <div className="text-sm font-medium uppercase tracking-widest text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-xs text-muted-foreground">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
