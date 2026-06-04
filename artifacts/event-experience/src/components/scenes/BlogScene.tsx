import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { blogs } from "@/data/blogs";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealAnimation } from "@/components/animations/RevealAnimation";
import { StaggerContainer } from "@/components/animations/StaggerContainer";

export function BlogScene() {
  // Take only the first 3 blogs for the homepage
  const homepageBlogs = blogs.slice(0, 3);

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-[90rem] mx-auto px-4 md:px-12">
        {/* Header Section with Massive Watermark */}
        <div className="mb-20 text-center relative flex flex-col items-center justify-center pt-16 overflow-hidden">
          {/* Massive Watermark */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-black text-black/[0.06] select-none pointer-events-none whitespace-nowrap z-0">
            <RevealAnimation delay={0.1}>BLOGS</RevealAnimation>
          </div>
          
          {/* Foreground Content */}
          <div className="relative z-10 flex flex-col items-center">
            <RevealAnimation delay={0.2}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-primary/60"></div>
                <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">Our Blog</span>
                <div className="w-12 h-px bg-primary/60"></div>
              </div>
            </RevealAnimation>
            
            <TextReveal variant="word" delay={0.3}>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-[#0a1128] mb-6">
                Your Daily Source for <span className="italic font-light text-[#c27c3a]">Valuable Updates</span>
              </h2>
            </TextReveal>
            
            <RevealAnimation delay={0.4}>
              <p className="max-w-2xl text-slate-600 text-lg leading-relaxed mb-8">
                Explore our latest insights, event stories, and expert tips to make your next celebration truly unforgettable.
              </p>
            </RevealAnimation>

            <RevealAnimation delay={0.5} className="hidden md:block">
              <Link href="/blogs">
                <span className="premium-button cursor-pointer bg-[#d94838] hover:bg-[#b93a2b] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2">
                  View All Blogs
                  <ArrowUpRight className="premium-button-arrow w-4 h-4 transition-transform duration-400" />
                </span>
              </Link>
            </RevealAnimation>
          </div>
        </div>

        {/* Mobile View All Button */}
        <div className="flex justify-center mb-12 md:hidden">
          <Link href="/blogs">
            <span className="premium-button cursor-pointer bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg inline-flex items-center gap-2">
              View All Blogs
              <ArrowUpRight className="premium-button-arrow w-4 h-4 transition-transform duration-400" />
            </span>
          </Link>
        </div>

        {/* Blog Grid */}
        <StaggerContainer staggerDelay={0.15} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {homepageBlogs.map((blog) => (
            <div key={blog.id} className="premium-card group cursor-pointer flex flex-col h-full bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image */}
              <div className="overflow-hidden rounded-t-2xl mb-6 aspect-[4/3] relative">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover premium-image-zoom"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-grow px-2 pb-2">
                <h3 className="text-xl md:text-2xl font-bold text-[#0a1128] leading-snug mb-4 group-hover:text-primary transition-colors">
                  {blog.title}
                </h3>
                
                <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">
                  {blog.excerpt}
                </p>

                <div className="mt-auto">
                  <div className="w-full h-px bg-slate-200 mb-4"></div>
                  <div className="flex items-center gap-2 text-sm font-bold text-[#0a1128] group-hover:text-primary transition-colors">
                    Read More 
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
