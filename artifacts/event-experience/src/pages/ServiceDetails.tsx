import { useEffect } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

// Importing the generated images
import svcCorporate from "../assets/generated_images/svc-corporate-new.png";
import svcWedding from "../assets/generated_images/svc-wedding-new.png";
import svcEntertainment from "../assets/generated_images/svc-entertainment-new.png";
import svcVacation from "../assets/generated_images/svc-vacation-new.png";
import svcVirtual from "../assets/generated_images/svc-virtual-new.png";
import svcOthers from "../assets/generated_images/svc-others-new.png";

// Data mapping based on ID
const serviceData: Record<string, any> = {
  corporate: {
    title: "Corporate Event",
    image: svcCorporate,
    tagline: "Precision, Impact, and Brand Excellence.",
    description: "From massive international conferences to intimate executive retreats, we deliver corporate events that align perfectly with your brand's vision. We handle every logistical detail—from venue sourcing and AV production to guest management and post-event analytics—ensuring a seamless, professional experience that leaves a lasting impression on your stakeholders."
  },
  wedding: {
    title: "Wedding Planning",
    image: svcWedding,
    tagline: "Your Love Story, Produced Like a Masterpiece.",
    description: "Step into your own fairy tale. Our luxury wedding planning service is designed for couples who demand the extraordinary. Inspired by Hollywood grandeur, we orchestrate opulent floral installations, bespoke culinary experiences, and majestic venue transformations. We manage everything from the rehearsal dinner to the grand departure, letting you simply enjoy the magic."
  },
  entertainment: {
    title: "Entertainment Services",
    image: svcEntertainment,
    tagline: "Spectacular Shows and Unforgettable Performances.",
    description: "We bring stages to life. Whether you need A-list celebrity performers, breathtaking live bands, theatrical acts, or cutting-edge laser and light shows, our entertainment division has the network and technical expertise to produce a show-stopping spectacle. We handle artist riders, stage design, acoustic engineering, and crowd management."
  },
  vacation: {
    title: "Vacation Planning",
    image: svcVacation,
    tagline: "Exclusive Retreats and Curated Escapes.",
    description: "Travel beyond the ordinary. We curate ultra-luxury incentive trips, private destination parties, and exclusive group vacations. With access to private islands, chartered yachts, and the world's most elite resorts, our itinerary designers craft personalized journeys that blend adventure, relaxation, and unmatched VIP hospitality."
  },
  virtual: {
    title: "Virtual Events",
    image: svcVirtual,
    tagline: "Connecting the World, Seamlessly.",
    description: "Break physical boundaries with our high-end virtual and hybrid event production. Using broadcast-quality studios, augmented reality sets, and enterprise-grade streaming platforms, we deliver interactive digital experiences to global audiences. Our tech team ensures flawless connectivity, engaging networking lounges, and stunning on-screen graphics."
  },
  others: {
    title: "Others",
    image: svcOthers,
    tagline: "Bespoke Galas and Milestone Events.",
    description: "For the moments that defy categorization. Whether it's a grand 50th-anniversary gala, an extravagant sweet sixteen, a charity fundraiser, or an exclusive VIP dinner, we design bespoke events tailored to your specific desires. If you can dream it, our production team can build it."
  }
};

export default function ServiceDetails() {
  const [match, params] = useRoute("/service/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params?.id || !serviceData[params.id]) {
    // If not found, go back home
    setLocation("/");
    return null;
  }

  const service = serviceData[params.id];

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Header */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img 
          src={service.image} 
          alt={service.title} 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
          <Link href="/">
            <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold backdrop-blur-md bg-black/20 px-4 py-2 rounded-full border border-white/10 hover:bg-black/40">
              <ArrowLeft size={16} />
              Back to Home
            </a>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Service Details
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-4" style={{ textShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 font-light italic font-serif">
              {service.tagline}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-8 md:px-16 py-24">
        <div className="max-w-3xl">
          <p className="text-lg md:text-xl text-foreground/80 leading-relaxed font-light">
            {service.description}
          </p>

          <div className="mt-16">
            <h3 className="text-2xl font-serif mb-6">Ready to plan this event?</h3>
            <Link href="/#contact">
              <a className="inline-block px-8 py-4 bg-primary text-primary-foreground font-semibold uppercase tracking-widest text-sm rounded-full hover:bg-white hover:text-black transition-colors">
                Contact Us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
