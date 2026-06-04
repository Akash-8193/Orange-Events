import { motion } from "framer-motion";
import { Navigation } from "@/components/Navigation";
import { TextReveal } from "@/components/animations/TextReveal";
import { ServicesScene } from "@/components/scenes/ServicesScene";
import { ProcessScene } from "@/components/scenes/ProcessScene";
import { ContactScene } from "@/components/scenes/ContactScene";
import servicesHeroBg from "../assets/generated_images/services-hero-bg.png";

export default function ServicesPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      <section className="relative h-screen w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHeroBg}
            alt="Orange Events Services"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 mt-16">
          <div className="text-center px-8 md:px-16 py-12 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl">
            <p className="text-xs md:text-sm font-semibold uppercase text-white mb-6 tracking-[0.35em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              What We Do
            </p>
            <TextReveal variant="hero" delay={0.3}>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest mb-3"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
              >
                OUR SERVICES
              </h1>
            </TextReveal>
            <div className="w-16 h-[2px] bg-primary mx-auto my-6 shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            <p className="text-base md:text-xl font-medium tracking-[0.1em] text-white/90 italic font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
              Delivering bespoke solutions for luxury weddings and corporate milestones.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 pointer-events-none z-20"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-24 bg-black/40 blur-xl rounded-full -z-10" />
          <span className="text-[10px] uppercase font-semibold tracking-widest text-white/90 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Scroll to explore
          </span>
          <div className="w-[1px] h-10 bg-white/20 overflow-hidden shadow-[0_0_5px_rgba(0,0,0,0.5)]">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="w-full h-full bg-white"
            />
          </div>
        </motion.div>
      </section>

      <ServicesScene />
      <ProcessScene />
      <ContactScene />
    </main>
  );
}
