import { useRef } from "react";
import { Check, ArrowRight, Star } from "lucide-react";
import { useLocation } from "wouter";

// Importing the generated images for the About section
import imgCorporate from "../../assets/generated_images/about_corporate_1780473664041.png";
import imgWedding from "../../assets/generated_images/about_wedding_1780473677708.png";

export function AboutScene() {
  const containerRef = useRef<HTMLElement>(null);
  const [, setLocation] = useLocation();

  return (
    <section 
      id="about" 
      ref={containerRef}
      className="w-full py-24 md:py-32 bg-white text-slate-900 font-sans overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
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

          {/* Floating Pink Badge */}
          <div className="absolute bottom-16 left-0 md:left-4 z-30 bg-[#e91e63] text-white p-6 rounded-full w-48 h-48 flex flex-col items-center justify-center text-center shadow-xl shadow-[#e91e63]/40">
            <ArrowRight className="absolute top-8 left-8 w-5 h-5 -rotate-45" />
            <span className="font-bold text-sm mb-3 leading-tight mt-4">Let's Connect<br/>Build Together</span>
            <div className="flex gap-1 mb-1 text-white">
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
              <Star className="w-3 h-3 fill-current" />
            </div>
            <p className="text-[10px] font-semibold tracking-wider">4.9 CLIENT RATE</p>
            
            {/* Decorative SVG Spring/Wave from screenshot */}
            <div className="absolute -bottom-16 -left-12 text-[#e91e63]">
              <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 C 10 30, 30 30, 30 50 C 30 70, 50 70, 50 50 C 50 30, 70 30, 70 50 C 70 70, 90 70, 90 50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col z-30">
          
          {/* Pill Tag */}
          <div className="inline-flex items-center gap-2 bg-[#e91e63]/10 text-[#e91e63] px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest w-max mb-6">
            <span className="w-2 h-2 rounded-full bg-[#e91e63]"></span>
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
              "Annual galas and showcase events",
              "Trusted by India's Top Brands",
              "Private one-on-one coaching option"
            ].map((feature, idx) => {
              // Replacing text to match the content requirement better but keeping layout format
              const eventFeature = [
                "Innovative & Creative Solutions",
                "Flawless Event Execution",
                "Trusted by Top Brands",
                "Pan-India Coverage"
              ][idx];

              return (
                <div key={idx} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#e91e63] flex items-center justify-center shadow-md">
                    <Check className="w-3.5 h-3.5 text-white stroke-[3]" />
                  </div>
                  <span className="text-slate-800 font-medium text-[15px]">{eventFeature}</span>
                </div>
              );
            })}
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
                 <div className="flex gap-1 text-[#e91e63] mb-0.5">
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
               onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
               className="inline-flex items-center gap-2 bg-[#e91e63] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[#d81557] transition-all shadow-lg shadow-[#e91e63]/30 hover:shadow-[#e91e63]/50 hover:-translate-y-1"
             >
               More About Us
               <ArrowRight className="w-4 h-4" />
             </button>
          </div>

        </div>
      </div>
    </section>
  );
}
