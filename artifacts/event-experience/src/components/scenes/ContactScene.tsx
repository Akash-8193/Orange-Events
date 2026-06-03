import { motion } from "framer-motion";
import { ArrowRight, MapPin, Phone, Mail } from "lucide-react";

export function ContactScene() {
  return (
    <section
      id="contact"
      className="min-h-screen relative flex flex-col items-center py-24 bg-foreground text-background overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12vw] font-serif font-bold text-background/5 whitespace-nowrap pointer-events-none select-none">
        CONNECT
      </div>

      <div className="container mx-auto px-6 relative z-10 flex flex-col lg:flex-row items-start gap-16 pt-8 flex-1">
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
            className="text-white/60 text-lg max-w-md mx-auto lg:mx-0 mb-12"
          >
            You will witness originality and creativity in every celebration we craft together.
            Our team approaches every project with meticulous attention to detail and obsessive precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex flex-col gap-5 text-left"
          >
            <div className="flex items-start gap-3 text-white/70">
              <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm leading-relaxed">
                F-104, 1st Floor, A-1, Sector-59,<br />Noida – 201307
              </span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Phone className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm">+91 93508 66151 &nbsp;|&nbsp; +91 98111 19024</span>
            </div>
            <div className="flex items-center gap-3 text-white/70">
              <Mail className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
              <span className="text-sm">asha@orangeevents.in &nbsp;|&nbsp; vipin@orangeevents.in</span>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="lg:w-1/2 w-full max-w-md"
        >
          <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors hover-target"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors hover-target"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors hover-target"
              />
            </div>
            <div>
              <select
                className="w-full bg-transparent border-b border-white/20 py-4 text-white/40 focus:outline-none focus:border-primary transition-colors hover-target appearance-none"
                defaultValue=""
              >
                <option value="" disabled className="bg-foreground text-white/40">Event Type</option>
                <option value="corporate" className="bg-foreground text-white">Corporate Events</option>
                <option value="entertainment" className="bg-foreground text-white">Entertainment Services</option>
                <option value="wedding" className="bg-foreground text-white">Wedding Planning</option>
                <option value="vacation" className="bg-foreground text-white">Vacation Planning</option>
                <option value="virtual" className="bg-foreground text-white">Virtual Events</option>
                <option value="others" className="bg-foreground text-white">Others</option>
              </select>
            </div>
            <div>
              <textarea
                placeholder="Tell us about your event vision"
                rows={4}
                className="w-full bg-transparent border-b border-white/20 py-4 text-white placeholder:text-white/40 focus:outline-none focus:border-primary transition-colors resize-none hover-target"
              />
            </div>

            <button className="self-start mt-6 group flex items-center gap-4 bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium tracking-widest uppercase text-sm hover-target hover:bg-white hover:text-foreground transition-all duration-500">
              Send Inquiry
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>

      <div className="relative z-10 w-full mt-16 pt-8 border-t border-white/10 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs tracking-widest uppercase">
          <span>© {new Date().getFullYear()} Orange Events &amp; Conferences Pvt. Ltd.</span>
          <span>www.orangeevents.in</span>
          <div className="flex gap-6">
            <a
              href="https://www.youtube.com/channel/UCwEPbmRQT8N7TBS8QQZlHog/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors hover-target"
            >
              YouTube
            </a>
            <a href="#" className="hover:text-primary transition-colors hover-target">Facebook</a>
            <a href="#" className="hover:text-primary transition-colors hover-target">Instagram</a>
          </div>
        </div>
      </div>
    </section>
  );
}
