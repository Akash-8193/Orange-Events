import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Their attention to detail, organization, and creativity helped make this year's event the biggest success to date. They kept everyone on schedule and most importantly reminded everyone to have a little fun. We look forward to working with them again.",
    name: "Cargill India",
    role: "Head of Corporate Relations",
    event: "Annual Corporate Gala",
    stars: 5,
  },
  {
    quote:
      "Orange Events know how to work with the best vendors and venues to produce fabulous events. They create a spectacular and memorable experience for guests and a seamless, stress-free production for clients. From concept to clean up, every detail is taken care of.",
    name: "H2O Group",
    role: "VP Brand Experience",
    event: "Brand Experience Summit",
    stars: 5,
  },
  {
    quote:
      "Every time, every event — it was always a pleasant and professional experience. The clarity of objective with which these people work, with in-depth search and analysis for the client, is a very positive experience.",
    name: "New Holland",
    role: "Marketing Director",
    event: "3+ Year Partnership",
    stars: 5,
  },
  {
    quote:
      "Orange Events are very professional and easy to work with. They consistently had lots of creative ideas and were receptive to our committee's ideas as well. From organizational skills to attention to detail, they make it look easy and seamless!",
    name: "LG India",
    role: "Events Manager",
    event: "Corporate Events Series",
    stars: 5,
  },
  {
    quote:
      "A high performance team with all the critical skills necessary to ensure success. I observe Asha and Vipin's events with a critical eye and am consistently impressed. They are a benchmark for what event management should be.",
    name: "FDDI",
    role: "Director General",
    event: "Annual National Conference",
    stars: 5,
  },
  {
    quote:
      "Asha is full of creative ideas and commitment. Both Asha and Vipin are known to give a little extra than what they commit. Any organization utilizing their services would end up hiring them again and again.",
    name: "Phillips India",
    role: "Regional Head",
    event: "Corporate Events",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-1 mb-5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />
      ))}
    </div>
  );
}

export function TestimonialsScene() {
  const marqueRef = useRef<HTMLDivElement>(null);
  const [featured, setFeatured] = useState(0);

  // Infinite marquee for bottom strip
  useEffect(() => {
    const track = marqueRef.current;
    if (!track) return;
    const width = track.scrollWidth / 2;
    const tween = gsap.fromTo(
      track,
      { x: 0 },
      { x: -width, duration: 40, ease: "none", repeat: -1 }
    );
    return () => { tween.kill(); };
  }, []);

  const prev = () => setFeatured((f) => (f - 1 + testimonials.length) % testimonials.length);
  const next = () => setFeatured((f) => (f + 1) % testimonials.length);

  const t = testimonials[featured];

  return (
    <section className="bg-foreground text-background relative overflow-hidden">
      {/* Decorative large text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[18vw] font-serif font-bold text-white/3 leading-none">TRUST</span>
      </div>

      <div className="relative z-10 py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
            >
              Client Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-background"
            >
              Words from those who
              <span className="italic text-primary"> trusted us</span>
            </motion.h2>
          </div>

          {/* Featured testimonial */}
          <div className="relative min-h-[340px] flex flex-col items-center justify-center text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={featured}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col items-center"
              >
                <Quote className="text-primary/30 w-14 h-14 mb-6" />
                <StarRating count={t.stars} />
                <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-background max-w-3xl mb-10">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-bold uppercase tracking-widest text-background">{t.name}</p>
                  <p className="text-xs text-primary/70 mt-1">{t.role} · {t.event}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-10">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-target"
            >
              <ChevronLeft className="w-4 h-4 text-white/60" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setFeatured(i)}
                  className={`transition-all duration-300 rounded-full hover-target ${
                    i === featured ? "w-8 h-2 bg-primary" : "w-2 h-2 bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 hover-target"
            >
              <ChevronRight className="w-4 h-4 text-white/60" />
            </button>
          </div>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="border-t border-white/10 py-5 overflow-hidden">
        <div ref={marqueRef} className="flex gap-10 w-max will-change-transform">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div key={i} className="flex items-center gap-10 flex-shrink-0">
              <span className="text-xs uppercase tracking-[0.2em] text-white/30 whitespace-nowrap">{t.name}</span>
              <span className="w-1 h-1 rounded-full bg-primary/40 flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
