import { useRef, useEffect } from "react";
import { Quote } from "lucide-react";
import gsap from "gsap";

const testimonials = [
  {
    quote:
      "Their attention to detail, organization, and creativity helped make this year's event the biggest success to date. They kept everyone on schedule and most importantly reminded everyone to have a little fun. We look forward to working with them again.",
    name: "Cargill",
    event: "Annual Corporate Event",
  },
  {
    quote:
      "Orange Events know how to work with the best vendors and venues to produce fabulous events. They create a spectacular and memorable experience for guests and a seamless, stress-free production for clients. From concept to clean up, every detail is taken care of.",
    name: "H2O Group",
    event: "Brand Experience Event",
  },
  {
    quote:
      "Every time, every event — it was always a pleasant and professional experience. The clarity of objective with which these people work, with in-depth search and analysis for the client, is a very positive experience.",
    name: "New Holland",
    event: "3+ Years Partnership",
  },
  {
    quote:
      "Orange Events are very professional and easy to work with. They consistently had lots of creative ideas and were receptive to committee ideas as well. From organizational skills to attention to detail, they make it look easy and seamless!",
    name: "LG India",
    event: "Corporate Event Series",
  },
  {
    quote:
      "A high performance team with all the critical skills necessary to ensure success. I observe Asha and Vipin's events with a critical eye and am consistently impressed. They are a benchmark for what event management should be.",
    name: "FDDI",
    event: "Annual Conference",
  },
  {
    quote:
      "Asha is full of creative ideas and commitment. Both Asha and Vipin are known to give a little extra than what they commit. Any organization utilizing their services would end up hiring them again and again.",
    name: "Phillips India",
    event: "Corporate Events",
  },
];

export function TestimonialsScene() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".testimonial-track", {
        x: "-50%",
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-32 bg-secondary/30 relative overflow-hidden" ref={containerRef}>
      <div className="container mx-auto px-6 mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-3">
          Client Testimonials
        </h2>
        <p className="text-muted-foreground uppercase tracking-widest text-xs">
          Words from those who trusted us
        </p>
      </div>

      <div className="flex overflow-hidden w-full py-10 pointer-events-none">
        <div className="testimonial-track flex gap-8 px-4 w-[200vw] min-w-max">
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="glass-card w-[85vw] md:w-[420px] flex-shrink-0 p-10 rounded-2xl relative"
            >
              <Quote className="text-primary/20 w-16 h-16 absolute top-6 left-6" />
              <div className="relative z-10">
                <p className="text-base md:text-lg font-serif leading-relaxed mb-8 pt-4 italic">
                  "{t.quote}"
                </p>
                <div>
                  <p className="font-bold text-foreground text-sm uppercase tracking-wider mb-1">
                    {t.name}
                  </p>
                  <p className="text-muted-foreground text-sm">{t.event}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
