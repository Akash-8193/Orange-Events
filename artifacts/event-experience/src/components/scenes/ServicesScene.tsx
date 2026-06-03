import { motion } from "framer-motion";
import { Building2, Music2, Heart, Plane, Monitor, Star } from "lucide-react";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    icon: Building2,
    desc: "Conferences, product launches, award ceremonies, and MICE events executed with precision and brand impact.",
  },
  {
    id: 2,
    title: "Entertainment Services",
    icon: Music2,
    desc: "Celebrity management, live performances, themed entertainment, and cultural programmes that delight audiences.",
  },
  {
    id: 3,
    title: "Wedding Planning",
    icon: Heart,
    desc: "Bespoke matrimonial celebrations — from intimate gatherings to grand destination weddings — crafted with love and detail.",
  },
  {
    id: 4,
    title: "Vacation Planning",
    icon: Plane,
    desc: "Curated group travel and incentive tours that blend relaxation, culture, and unforgettable shared experiences.",
  },
  {
    id: 5,
    title: "Virtual Events",
    icon: Monitor,
    desc: "Seamless online conferences, hybrid launches, and digital experiences that connect audiences across boundaries.",
  },
  {
    id: 6,
    title: "Others",
    icon: Star,
    desc: "Birthday galas, anniversaries, inaugurations, and custom celebrations tailored entirely to your vision.",
  },
];

export function ServicesScene() {
  return (
    <section id="services" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-foreground mb-6"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground uppercase tracking-widest text-sm"
          >
            Originality &amp; creativity in every event
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const mt =
              index % 3 === 1 ? "lg:mt-16" : index % 3 === 2 ? "lg:mt-32" : "lg:mt-0";

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className={`glass-card p-10 rounded-2xl flex flex-col items-center text-center group cursor-none hover-target ${mt}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-500">
                  <Icon className="text-primary w-8 h-8" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-serif mb-4 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.desc}</p>

                <div className="mt-8 overflow-hidden h-6 w-full relative">
                  <span className="absolute left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-xs uppercase tracking-widest text-primary font-medium">
                    Explore
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
