import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Phone } from "lucide-react";
import imgFaq from "../../assets/generated_images/about_corporate_1780473664041.png";

const faqs = [
  {
    q: "What types of events does Orange Events manage?",
    a: "We manage a wide spectrum of events — from corporate conferences, product launches, and award ceremonies to luxury weddings, destination celebrations, entertainment shows, virtual events, and large-scale MICE experiences. If it involves people, ambiance, and an unforgettable experience, we can create it.",
  },
  {
    q: "How far in advance should I book Orange Events for my event?",
    a: "For corporate events and conferences, we recommend booking at least 3–6 months in advance. For large weddings and destination events, 6–12 months allows us to negotiate the best venues and vendors. However, we have delivered high-quality events on shorter timelines — get in touch and we'll discuss what's possible.",
  },
  {
    q: "Do you handle events outside of Delhi NCR?",
    a: "Absolutely. While our headquarters are in Noida (Delhi NCR), we have delivered events across India — Mumbai, Bangalore, Hyderabad, Goa, Jaipur, and beyond. Our extensive vendor network and experienced team travel wherever your event demands.",
  },
  {
    q: "Can Orange Events work within our existing event budget?",
    a: "Yes. We're experienced in maximising value across all budget levels. After our discovery conversation, we present a concept that optimises every rupee. We believe extraordinary events don't have to be extravagant — they need to be intentional and well-executed.",
  },
  {
    q: "How do you handle last-minute changes or unexpected issues on event day?",
    a: "Experience is our best contingency plan. After 15+ years and 500+ events, we've seen everything. Every event has a dedicated on-site team, a logistics supervisor, and a communication protocol. We handle all surprises behind the scenes, ensuring your guests experience only seamlessness.",
  },
  {
    q: "Do you offer virtual and hybrid event management?",
    a: "Yes. We have a dedicated virtual event production team equipped with broadcast-quality streaming setups, multi-camera coordination, live audience management tools, and interactive digital elements. Whether it's a hybrid town hall for 10,000 employees or a fully virtual product launch, we deliver it flawlessly.",
  },
  {
    q: "What does your event planning process look like?",
    a: "We follow a 5-step process: Discovery & Vision → Concept & Design → Planning & Coordination → Rehearsal & Preparation → Live Execution. Each phase has clear deliverables, timelines, and client touchpoints. You're always informed, never anxious.",
  },
  {
    q: "Can you manage celebrity and entertainment bookings?",
    a: "Yes — entertainment management is one of our core service pillars. We handle celebrity artist bookings, contract negotiations, hospitality, security coordination, technical riders, and stage management. We have established relationships with top talent agencies and artists across India.",
  },
];

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className="border-b border-slate-200 last:border-b-0"
    >
      <button
        className="w-full flex items-center justify-between py-6 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="text-[17px] md:text-lg font-bold text-[#0a1128] pr-8 group-hover:text-primary transition-colors duration-300">
          {index + 1}. {q}
        </span>
        <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          {open ? (
            <Minus className="w-5 h-5 text-primary font-bold" strokeWidth={3} />
          ) : (
            <Plus className="w-5 h-5 text-primary font-bold" strokeWidth={3} />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pt-2 text-slate-600 text-sm md:text-[15px] leading-relaxed max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQScene() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-white overflow-hidden relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-8 flex flex-col lg:flex-row gap-20 lg:gap-28 items-start">
        
        {/* Left Column - Image & Contact Box */}
        <div className="w-full lg:w-[45%] relative pl-12 md:pl-20 mt-10 lg:mt-0">
          {/* Vertical rotated text behind image */}
          <div className="absolute top-1/2 left-4 md:left-8 -translate-y-1/2 -rotate-90 origin-center text-center w-[800px] h-32 -ml-[400px] z-0 opacity-10">
            <span className="text-[7rem] md:text-[10rem] font-black text-[#0a1128] tracking-tighter uppercase leading-none">
              QUESTIONS
            </span>
          </div>

          <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10 bg-slate-100">
             <img src={imgFaq} alt="Events FAQ" className="w-full h-full object-cover" />
          </div>
          
          {/* Contact Overlay Box (Primary Color) */}
          <div className="absolute -bottom-10 -right-4 md:-right-12 bg-primary text-white p-8 md:p-10 rounded-3xl shadow-2xl z-20 w-[18rem] md:w-[22rem]">
             <div className="flex -space-x-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-[#fca311] border-2 border-primary overflow-hidden">
                 <img src={imgFaq} className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#14213d] border-2 border-primary overflow-hidden">
                 <img src={imgFaq} className="w-full h-full object-cover" />
              </div>
              <div className="w-12 h-12 rounded-full bg-[#000000] border-2 border-primary overflow-hidden">
                 <img src={imgFaq} className="w-full h-full object-cover" />
              </div>
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-4">Still Have Any Questions?</h4>
            <p className="text-sm opacity-90 leading-relaxed mb-8">
              We take the time to understand your unique event requirements and vision.
            </p>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span className="font-bold text-lg">+91 (0) 123 456 7890</span>
            </div>
          </div>
        </div>

        {/* Right Column - FAQ Content */}
        <div className="w-full lg:w-[55%] flex flex-col pt-12 lg:pt-0 z-10 relative">
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#0a1128]">Frequently Asked Questions</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0a1128] mb-6 font-serif leading-tight">
              Questions we answer often
            </h2>
            <p className="text-slate-600 text-[15px] md:text-lg leading-relaxed max-w-2xl">
              We believe in radical transparency. Here are honest answers to the questions clients ask us most — because trust starts with clarity, not sales speak.
            </p>
          </div>

          <div className="flex flex-col border-t border-slate-200">
            {faqs.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
