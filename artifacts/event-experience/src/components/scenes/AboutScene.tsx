import { useRef } from "react";
import { Check, ArrowRight, Star, ArrowDown, Activity, Sparkles, Heart } from "lucide-react";
import { useLocation } from "wouter";

// Images Section 1
import imgCorporate from "../../assets/generated_images/about_corporate_1780473664041.png";
import imgWedding from "../../assets/generated_images/about_wedding_1780473677708.png";

// Images Section 2
import expCorp from "../../assets/generated_images/exp_corporate_1780474131416.png";
import expParty from "../../assets/generated_images/exp_party_1780474144439.png";

// Images Section 3
import specCorp from "../../assets/generated_images/spec_corporate_1780474159227.png";
import specWed from "../../assets/generated_images/spec_wedding_1780474173199.png";
import specConcert from "../../assets/generated_images/spec_concert_1780474187386.png";

// Images Section 4
import whyStage from "../../assets/generated_images/why_stage_1780474202432.png";
import whyCrowd from "../../assets/generated_images/why_crowd_1780474215901.png";

export function AboutScene() {
  const containerRef = useRef<HTMLElement>(null);
  const [, setLocation] = useLocation();

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="about" ref={containerRef} className="w-full bg-white font-sans overflow-hidden">
      
      {/* SECTION 1: ABOUT US */}
      <section className="w-full py-12 md:py-16 text-slate-900 border-b border-slate-100">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visuals */}
          <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] flex items-center justify-center">
            
            {/* Image 1: Left/Top (Circle) */}
            <div className="absolute left-0 top-4 w-[65%] aspect-square rounded-full overflow-hidden shadow-2xl z-10">
               <img src={imgCorporate} alt="Corporate Event" className="w-full h-full object-cover" />
            </div>

            {/* Image 2: Right/Bottom offset (Pill/Oval) */}
            <div className="absolute right-0 bottom-0 w-[55%] h-[80%] rounded-full overflow-hidden shadow-2xl z-20 border-[10px] border-white">
               <img src={imgWedding} alt="Luxury Wedding" className="w-full h-full object-cover" />
            </div>

            {/* Floating Primary Badge */}
            <div className="absolute bottom-16 left-0 md:left-4 z-30 bg-primary text-primary-foreground p-6 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-xl shadow-primary/40">
              <ArrowRight className="absolute top-8 left-8 w-5 h-5 -rotate-45" />
              <span className="font-bold text-sm mb-3 leading-tight mt-4">Let's Connect<br/>Build Together</span>
              <div className="flex gap-1 mb-1 text-primary-foreground">
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
                <Star className="w-3 h-3 fill-current" />
              </div>
              <p className="text-[10px] font-semibold tracking-wider">4.9 CLIENT RATE</p>
              
              {/* Decorative SVG Spring/Wave from screenshot */}
              <div className="absolute -bottom-16 -left-12 text-primary">
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 50 C 10 30, 30 30, 30 50 C 30 70, 50 70, 50 50 C 50 30, 70 30, 70 50 C 70 70, 90 70, 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col z-30">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              ABOUT US
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a1128] mb-6 leading-[1.1]">
              Delhi's Premier<br/>Event Creators
            </h2>

            {/* Subtext */}
            <p className="text-lg text-slate-600 mb-6 leading-relaxed font-medium">
              We are one of the best event management companies in Delhi, run by experienced and talented professionals passionate about flawless execution. Orange Events & Entertainment trains its team to think innovatively and provide creative solutions.
            </p>

            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We are an event organizer trusted by many of India's biggest brands — from Cargill and LG India to Fortis Hospital and CNH Industrials.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-12">
              {[
                "Innovative & Creative Solutions",
                "Flawless Event Execution",
                "Trusted by Top Brands",
                "Pan-India Coverage"
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3]" />
                  </div>
                  <span className="text-slate-800 font-medium text-[15px]">{feature}</span>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-x-12 gap-y-8 mb-10 pb-10 border-b border-slate-200">
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-[#0a1128] mb-1">15+</h3>
                <p className="text-slate-500 font-semibold text-sm">Years of Excellence</p>
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-[#0a1128] mb-1">500+</h3>
                <p className="text-slate-500 font-semibold text-sm">Events Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl lg:text-5xl font-extrabold text-[#0a1128] mb-1">100+</h3>
                <p className="text-slate-500 font-semibold text-sm">Corporate Clients</p>
              </div>
            </div>

            {/* Bottom Row: Satisfaction & Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 justify-between">
               <div className="flex items-center gap-4">
                 {/* Decorative Avatars */}
                 <div className="flex -space-x-3">
                   <img src="https://i.pravatar.cc/100?img=1" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                   <img src="https://i.pravatar.cc/100?img=2" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                   <img src="https://i.pravatar.cc/100?img=3" alt="Client" className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm" />
                 </div>
                 <div>
                   <div className="flex gap-1 text-primary mb-0.5">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                      <Star className="w-3.5 h-3.5 fill-current" />
                   </div>
                   <span className="text-[11px] font-bold text-slate-800 uppercase tracking-wide">Client Satisfaction Rate</span>
                 </div>
               </div>

               <button 
                 onClick={scrollToContact}
                 className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:-translate-y-1"
               >
                 More About Us
                 <ArrowRight className="w-4 h-4" />
               </button>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: OUR EXPERTISE */}
      <section className="w-full py-12 md:py-16 bg-slate-50 text-slate-900 border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Expertise Content */}
          <div className="flex flex-col z-30">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              OUR EXPERTISE
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a1128] mb-6 leading-[1.1]">
              Professional solutions crafted for your needs
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We combine deep industry knowledge, innovative strategies, and years of hands-on experience to provide solutions that truly make an impact on your brand's presence.
            </p>

            {/* Progress Bars */}
            <div className="space-y-8 mb-12">
              <div>
                <div className="flex justify-between font-bold text-[#0a1128] mb-3">
                  <span>Event Management & Logistics</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[95%]"></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between font-bold text-[#0a1128] mb-3">
                  <span>Creative Design & Production</span>
                  <span>93%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full w-[93%]"></div>
                </div>
              </div>
            </div>

            {/* Checkmarks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3]" />
                  </div>
                  <span className="text-slate-800 font-medium text-[15px]">High-quality services that ensure long-lasting impact</span>
               </div>
               <div className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 text-primary-foreground stroke-[3]" />
                  </div>
                  <span className="text-slate-800 font-medium text-[15px]">Expert professionals delivering reliable execution</span>
               </div>
            </div>
          </div>

          {/* Right Column: Visuals */}
          <div className="relative w-full h-[500px] lg:h-[650px] flex items-center justify-center mt-12 lg:mt-0">
             {/* Left Image */}
             <div className="absolute left-0 top-10 w-[60%] h-[80%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
               <img src={expCorp} alt="Corporate Tech" className="w-full h-full object-cover" />
             </div>
             {/* Right Image */}
             <div className="absolute right-0 bottom-10 w-[55%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-20 border-[8px] border-slate-50">
               <img src={expParty} alt="Gala Party" className="w-full h-full object-cover" />
             </div>
             
             {/* Floating Primary Badge */}
             <div 
               onClick={scrollToContact}
               className="absolute bottom-1/4 right-[40%] translate-x-1/2 translate-y-1/2 z-30 bg-primary text-primary-foreground p-6 rounded-full w-32 h-32 md:w-40 md:h-40 flex flex-col items-center justify-center text-center shadow-xl shadow-primary/40 cursor-pointer hover:brightness-110 hover:scale-105 transition-all"
             >
                <ArrowDown className="w-6 h-6 mb-1" />
                <span className="font-bold text-[10px] md:text-xs uppercase tracking-widest" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>
                  Plan Your<br/>Event
                </span>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SPECIALTIES (White Theme) */}
      <section className="w-full py-12 md:py-16 bg-white text-slate-900 border-b border-slate-200">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8">
          {/* Header */}
          <div className="flex flex-col items-center text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              OUR EXPERTISE AREAS
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a1128] max-w-3xl leading-[1.1]">
              Discover diverse capabilities designed to elevate every event
            </h2>
          </div>

          {/* 3 Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
             {[
               { img: specCorp, icon: Activity, title: "Corporate Galas", desc: "A vibrant mix of cutting-edge technology and cultural elegance." },
               { img: specWed, icon: Heart, title: "Luxury Weddings", desc: "Emotional storytelling designed to build unforgettable experiences." },
               { img: specConcert, icon: Sparkles, title: "Live Concerts", desc: "High-energy entertainment programs filled with modern production." }
             ].map((card, i) => (
               <div key={i} className="relative group rounded-3xl overflow-hidden aspect-[4/5] md:aspect-auto md:h-[500px] bg-slate-900 shadow-xl">
                 <img src={card.img} alt={card.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100" />
                 {/* Card overlay gradient */}
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none"></div>
                 
                 {/* Primary Icon */}
                 <div className="absolute top-6 left-6 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-lg">
                   <card.icon className="w-6 h-6 text-primary-foreground" />
                 </div>

                 {/* Content - Keep text white since it's on dark image gradient */}
                 <div className="absolute bottom-0 left-0 w-full p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3 text-white">{card.title}</h3>
                    <p className="text-white/80 font-medium mb-6 text-sm">{card.desc}</p>
                    <a href="#contact" className="text-primary font-bold text-sm uppercase tracking-widest hover:text-white transition-colors flex items-center gap-2">
                      Read More <ArrowRight className="w-4 h-4 -rotate-45" />
                    </a>
                 </div>
               </div>
             ))}
          </div>
          
          <div className="mt-16 text-center text-slate-600 font-medium text-sm flex items-center justify-center flex-wrap gap-2">
             <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-bold uppercase">Pro</span> 
             <span>Professionally Designed Experiences, Built to Inspire Every Audience –</span> 
             <a href="#contact" className="text-[#0a1128] underline hover:text-primary font-bold">Explore Our Works</a>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHY CHOOSE US */}
      <section className="w-full py-12 md:py-16 bg-white text-slate-900">
        <div className="max-w-[90rem] mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Visuals */}
          <div className="relative w-full h-[600px] lg:h-[750px] flex items-center justify-center">
            {/* Background Image (Shifted up) */}
            <div className="absolute left-0 top-0 w-[60%] h-[75%] rounded-3xl overflow-hidden shadow-xl z-10">
               <img src={whyStage} alt="Stage Setup" className="w-full h-full object-cover" />
            </div>
            
            {/* Foreground Image (Shifted down) */}
            <div className="absolute right-0 bottom-0 w-[65%] h-[70%] rounded-3xl overflow-hidden shadow-2xl z-20 border-[8px] border-white">
               <img src={whyCrowd} alt="Gala Crowd" className="w-full h-full object-cover" />
            </div>

            {/* Primary Contact Badge */}
            <div 
              onClick={scrollToContact}
              className="absolute top-[15%] right-[15%] z-30 bg-primary text-primary-foreground p-4 rounded-full w-28 h-28 flex items-center justify-center shadow-xl shadow-primary/40 cursor-pointer hover:brightness-110 hover:scale-105 transition-all"
            >
              <div className="absolute inset-1 border-[1.5px] border-primary-foreground/40 rounded-full border-dashed"></div>
              <span className="font-bold text-[11px] text-center uppercase tracking-widest leading-tight">
                Contact<br/>Us
              </span>
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col z-30">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest w-max mb-6">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              WHY CHOOSE US
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0a1128] mb-6 leading-[1.1]">
              Your trusted pathway to flawless & stage-ready event execution
            </h2>
            <p className="text-lg text-slate-600 mb-10 leading-relaxed font-medium">
              We guide our clients through a structured, supportive journey that builds technical precision, nurtures brand confidence, and prepares venues for the spotlight with professionalism and care.
            </p>

            <div className="flex items-start gap-4 mb-8">
               <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                 <Activity className="w-6 h-6 text-primary-foreground" />
               </div>
               <div>
                 <h3 className="text-xl font-bold text-[#0a1128] mb-2">Certified & Experienced Planners</h3>
                 <p className="text-slate-600 text-[15px] font-medium leading-relaxed">
                   We prepare brands for real stage experiences through structured practice, logistical mastery, and confidence techniques.
                 </p>
               </div>
            </div>

            <div className="space-y-4 mb-12">
               <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary stroke-[3]" />
                  <span className="text-slate-800 font-medium">Builds brand confidence through flawless execution</span>
               </div>
               <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary stroke-[3]" />
                  <span className="text-slate-800 font-medium">Prepares venues for real performance experiences</span>
               </div>
               <div className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-primary stroke-[3]" />
                  <span className="text-slate-800 font-medium">Sharpens logistics with strategy-based planning</span>
               </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                {/* Massive Primary Block */}
                <div className="bg-primary rounded-2xl p-8 text-primary-foreground w-full lg:w-1/2 shadow-xl shadow-primary/30">
                  <div className="flex gap-2 mb-6 opacity-80">
                      <div className="w-4 h-4 border-[1.5px] border-primary-foreground"></div>
                      <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[14px] border-b-primary-foreground"></div>
                      <div className="w-4 h-4 border-[1.5px] border-primary-foreground rounded-full"></div>
                  </div>
                  <p className="font-semibold text-[15px] mb-8 leading-snug">Enhances brand awareness and guest engagement</p>
                  <h3 className="text-5xl font-extrabold mb-2">15+</h3>
                  <p className="font-semibold text-primary-foreground/90 text-sm">Years Of Experience</p>
                </div>

                <div className="flex flex-col gap-8 w-full lg:w-1/2">
                  <button 
                    onClick={scrollToContact}
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-sm hover:brightness-110 transition-all shadow-lg hover:-translate-y-1 w-max"
                  >
                    Learn More <ArrowRight className="w-4 h-4 -rotate-45" />
                  </button>
                  
                  <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-5 h-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider mb-1">Need Any Help?</p>
                        <p className="text-[#0a1128] font-extrabold text-[15px]">Call At: +(91) 98765 43210</p>
                      </div>
                  </div>
                </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
