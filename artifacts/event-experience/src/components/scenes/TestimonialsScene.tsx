import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Quote, Star, ArrowLeft, ArrowRight } from "lucide-react";
import imgTestimonial from "../../assets/gallery/WhatsApp-Image-2025-02-15-at-10.16.56-768x1024.jpeg";

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

export function TestimonialsScene() {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);

  // Infinite marquee for testimonial cards
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const width = track.scrollWidth / 2;
    tweenRef.current = gsap.fromTo(
      track,
      { x: 0 },
      { x: -width, duration: 40, ease: "none", repeat: -1 }
    );
    return () => { tweenRef.current?.kill(); };
  }, []);

  const handleMouseEnter = () => tweenRef.current?.pause();
  const handleMouseLeave = () => tweenRef.current?.play();

  const handlePrev = () => {
    if (tweenRef.current) {
      let newTime = tweenRef.current.totalTime() - 3;
      if (newTime < 0) newTime += tweenRef.current.duration();
      gsap.to(tweenRef.current, { totalTime: newTime, duration: 0.5, ease: "power2.out" });
    }
  };

  const handleNext = () => {
    if (tweenRef.current) {
      gsap.to(tweenRef.current, { totalTime: tweenRef.current.totalTime() + 3, duration: 0.5, ease: "power2.out" });
    }
  };

  return (
    <section className="pt-24 md:pt-32 pb-4 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-[5fr_7fr] gap-16 lg:gap-20 items-center">
        
        {/* Left Column - Image & Overlay */}
        <div className="relative">
          <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative">
             <img src={imgTestimonial} alt="Event crowd" className="w-full h-full object-cover" />
          </div>
          
          {/* Stats Overlay matching the screenshot style */}
          <div className="absolute bottom-6 left-6 md:-left-8 md:bottom-12 bg-primary text-white p-6 rounded-2xl shadow-xl z-10 w-[17rem] border-4 border-white">
            <div className="flex -space-x-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#fca311] border-2 border-white flex items-center justify-center font-bold text-xs">C</div>
              <div className="w-10 h-10 rounded-full bg-[#14213d] border-2 border-white flex items-center justify-center font-bold text-xs">LG</div>
              <div className="w-10 h-10 rounded-full bg-[#000000] border-2 border-white flex items-center justify-center font-bold text-xs">H2O</div>
              <div className="w-10 h-10 rounded-full bg-[#e5e5e5] border-2 border-white flex items-center justify-center font-bold text-xs text-black">NH</div>
            </div>
            <h3 className="text-4xl font-bold mb-1">250+</h3>
            <p className="text-sm font-medium opacity-90">Successful Events Hosted</p>
          </div>
        </div>

        {/* Right Column - Content & Auto-Scrolling Testimonials */}
        <div className="flex flex-col overflow-hidden w-full">
          {/* Header */}
          <div className="mb-10 pl-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a1128]">Client Testimonials</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0a1128] mb-6 font-serif leading-tight">
              Words from those who trusted us
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed max-w-2xl">
              Hear directly from our corporate partners and clients about their experiences working with Orange Events. Their stories highlight the impeccable execution, creativity, and absolute peace of mind we deliver.
            </p>
          </div>

          {/* Scrolling Cards Track */}
          <div 
            className="w-full overflow-hidden relative pb-6 pt-4 cursor-grab active:cursor-grabbing"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div ref={trackRef} className="flex gap-6 w-max will-change-transform">
               {[...testimonials, ...testimonials].map((t, i) => (
                 <div key={i} className="w-[380px] md:w-[480px] bg-[#f8f9fa] rounded-3xl p-8 md:p-10 flex-shrink-0 relative shadow-sm border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                    <Quote className="absolute top-10 right-10 w-8 h-8 text-primary opacity-20" />
                    
                    <div className="flex gap-1 mb-6">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    
                    <p className="text-slate-600 font-medium text-[15px] md:text-base leading-relaxed mb-10 min-h-[140px]">
                      {t.quote}
                    </p>
                    
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-slate-200 flex items-center justify-center text-primary font-bold text-xl uppercase">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[#0a1128] text-lg">{t.name}</h4>
                        <p className="text-sm text-slate-500 font-medium">{t.role}</p>
                      </div>
                    </div>
                 </div>
               ))}
            </div>
            
            {/* Fade edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-end gap-4 mt-2 pr-4">
            <button 
              onClick={handlePrev}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5 text-primary" />
            </button>
            <button 
              onClick={handleNext}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="w-12 h-12 rounded-full bg-[#f8f9fa] flex items-center justify-center hover:bg-slate-200 transition-colors shadow-sm cursor-pointer"
            >
              <ArrowRight className="w-5 h-5 text-primary" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
