import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ContactScene() {
  return (
    <section id="contact" className="min-h-screen relative flex items-center py-32 bg-foreground text-background overflow-hidden">
      {/* Decorative large text behind */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-serif font-bold text-background/5 whitespace-nowrap pointer-events-none select-none">
        CONNECT
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 text-center lg:text-left">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-serif mb-6 leading-tight"
          >
            Let's Create <br />
            <span className="italic text-primary">Something</span> <br />
            Extraordinary
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-white/60 text-lg max-w-md mx-auto lg:mx-0"
          >
            Reach out to begin crafting your next unforgettable experience. Our team of artisans awaits your vision.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:w-1/2 w-full max-w-md"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors hover-target"
              />
            </div>
            <div className="group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors hover-target"
              />
            </div>
            <div className="group">
              <textarea 
                placeholder="Tell us about your event" 
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none hover-target"
              />
            </div>
            
            <button className="self-start mt-6 group flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover-target hover:bg-white hover:text-foreground transition-all duration-500">
              Submit Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
      
      <div className="absolute bottom-6 left-0 right-0 text-center text-white/30 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} AURA Event Experience
      </div>
    </section>
  );
}
