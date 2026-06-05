import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { Navigation } from "@/components/Navigation";
import { ContactScene } from "@/components/scenes/ContactScene";
import { TextReveal } from "@/components/animations/TextReveal";
import { blogs } from "@/data/blogs";
import blogsHeroBg from "../assets/generated_images/blogs-hero-bg.png";

export default function BlogsPage() {
  return (
    <main className="bg-background min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img
            src={blogsHeroBg}
            alt="Orange Events Blogs"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4 mt-16">
          <div className="text-center px-8 md:px-16 py-12 rounded-3xl bg-black/20 backdrop-blur-sm border border-white/10 shadow-2xl">
            <p className="text-xs md:text-sm font-semibold uppercase text-white mb-6 tracking-[0.35em] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              Our Insights
            </p>
            <TextReveal variant="hero" delay={0.3}>
              <h1
                className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-widest mb-3"
                style={{ textShadow: "0 4px 30px rgba(0,0,0,0.9), 0 2px 10px rgba(0,0,0,0.8)" }}
              >
                OUR BLOGS
              </h1>
            </TextReveal>
            <div className="w-16 h-[2px] bg-primary mx-auto my-6 shadow-[0_2px_4px_rgba(0,0,0,0.8)]" />
            <p className="text-base md:text-xl font-medium tracking-[0.1em] text-white/90 italic font-serif drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] max-w-2xl mx-auto">
              Dive deep into our latest event stories, masterclasses, tips, and trends.
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

      {/* Blogs Content Section */}
      <section className="py-24 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-4 md:px-12">
          {/* Header Section removed since we have a Hero now */}

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {blogs.map((blog) => (
              <Link href={`/blogs/${blog.id}`} key={blog.id}>
                <a className="group cursor-pointer flex flex-col h-full">
                  {/* Image */}
                  <div className="overflow-hidden rounded-2xl mb-6 aspect-[4/3] relative">
                    <img 
                      src={blog.image} 
                      alt={blog.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow">
                    <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">
                      {blog.date}
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-[#0a1128] leading-snug mb-4 group-hover:text-primary transition-colors">
                      {blog.title}
                    </h3>
                    
                    <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">
                      {blog.excerpt}
                    </p>

                    <div className="mt-auto">
                      <div className="w-full h-px bg-slate-200 mb-4"></div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm font-bold text-[#0a1128] group-hover:text-primary transition-colors">
                          Read More 
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactScene />
    </main>
  );
}
