import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

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
      transition={{ duration: 0.6, delay: index * 0.07 }}
      className="border-b border-border/40"
    >
      <button
        className="w-full flex items-center justify-between py-7 text-left group hover-target"
        onClick={() => setOpen(!open)}
      >
        <span className="text-base md:text-lg font-serif text-foreground pr-8 group-hover:text-primary transition-colors duration-300">
          {q}
        </span>
        <span className="flex-shrink-0 w-8 h-8 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
          {open ? (
            <Minus className="w-4 h-4 text-primary" strokeWidth={1.5} />
          ) : (
            <Plus className="w-4 h-4 text-primary" strokeWidth={1.5} />
          )}
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-foreground/70 text-sm leading-relaxed max-w-3xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQScene() {
  return (
    <section className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-primary/10 rounded-full blur-[80px] opacity-40 pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
            >
              FAQ
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif text-foreground leading-tight"
            >
              Questions we
              <span className="block italic text-primary">answer often</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-foreground/80 leading-relaxed md:pt-12"
          >
            We believe in radical transparency. Here are honest answers to the questions
            clients ask us most — because trust starts with clarity, not sales speak.
          </motion.p>
        </div>

        <div className="border-t border-border/40">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 p-10 bg-primary/5 border border-primary/20 rounded-2xl text-center"
        >
          <p className="font-serif text-xl text-foreground mb-2">
            Didn't find your answer?
          </p>
          <p className="text-foreground/70 text-sm mb-6">
            Our team responds within 2 business hours.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-block px-8 py-4 bg-primary text-primary-foreground text-sm uppercase tracking-widest hover:bg-foreground hover:text-background transition-all duration-500 rounded-full hover-target"
          >
            Ask Us Directly
          </a>
        </motion.div>
      </div>
    </section>
  );
}
