import { motion } from "framer-motion";
import { Building2, Music2, Heart, Plane, Monitor, Star } from "lucide-react";
import svcCorporate from "@assets/generated_images/oe-svc-corporate.png";
import svcEntertainment from "@assets/generated_images/oe-svc-entertainment.png";
import svcWedding from "@assets/generated_images/oe-svc-wedding.png";
import svcVacation from "@assets/generated_images/oe-svc-vacation.png";
import svcVirtual from "@assets/generated_images/oe-svc-virtual.png";
import svcOthers from "@assets/generated_images/oe-svc-others.png";

const services = [
  {
    id: 1,
    title: "Corporate Events",
    icon: Building2,
    image: svcCorporate,
    desc: "Conferences, product launches, award ceremonies, and MICE events executed with precision and brand impact.",
  },
  {
    id: 2,
    title: "Entertainment Services",
    icon: Music2,
    image: svcEntertainment,
    desc: "Celebrity management, live performances, themed entertainment, and cultural programmes that delight audiences.",
  },
  {
    id: 3,
    title: "Wedding Planning",
    icon: Heart,
    image: svcWedding,
    desc: "Bespoke matrimonial celebrations — from intimate gatherings to grand destination weddings — crafted with love.",
  },
  {
    id: 4,
    title: "Vacation Planning",
    icon: Plane,
    image: svcVacation,
    desc: "Curated group travel and incentive tours blending relaxation, culture, and unforgettable shared experiences.",
  },
  {
    id: 5,
    title: "Virtual Events",
    icon: Monitor,
    image: svcVirtual,
    desc: "Seamless online conferences, hybrid launches, and digital experiences that connect audiences across boundaries.",
  },
  {
    id: 6,
    title: "Others",
    icon: Star,
    image: svcOthers,
    desc: "Birthday galas, anniversaries, inaugurations, and custom celebrations tailored entirely to your vision.",
  },
];

export function ServicesScene() {
  return (
    <section id="services" className="py-32 px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/20 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.3em] text-primary mb-4"
          >
            What we do
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-serif text-foreground mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-sm max-w-xl mx-auto"
          >
            Originality and creativity to create some of the most inspiring, unique and exciting
            celebrations.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.4, ease: "easeOut" } }}
                className="group cursor-none hover-target rounded-2xl overflow-hidden relative bg-card"
                style={{
                  boxShadow: "0 4px 40px rgba(0,0,0,0.08)",
                  border: "1px solid rgba(201,169,110,0.15)",
                }}
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-card/10 to-transparent" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center border border-primary/20">
                    <Icon className="text-primary w-5 h-5" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Text */}
                <div className="p-8 bg-card">
                  <h3 className="text-xl font-serif mb-3 text-foreground">{service.title}</h3>
                  <p className="text-foreground/80 text-sm leading-relaxed">{service.desc}</p>
                  <div className="mt-6 overflow-hidden h-5">
                    <span className="block translate-y-full group-hover:translate-y-0 transition-transform duration-300 text-xs uppercase tracking-widest text-primary font-medium">
                      Explore &rarr;
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
