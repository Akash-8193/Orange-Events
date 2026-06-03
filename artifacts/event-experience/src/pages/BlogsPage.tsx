import { ArrowUpRight } from "lucide-react";
import { Navigation } from "@/components/Navigation";
import { ContactScene } from "@/components/scenes/ContactScene";
import { blogs } from "@/data/blogs";

export default function BlogsPage() {
  return (
    <main className="bg-background min-h-screen pt-24">
      <Navigation />
      
      <section className="py-24 bg-white relative">
        <div className="max-w-[90rem] mx-auto px-4 md:px-12">
          {/* Header Section with Massive Watermark */}
          <div className="mb-24 text-center relative flex flex-col items-center justify-center pt-16 overflow-hidden">
            {/* Massive Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10rem] md:text-[20rem] font-black text-black/[0.06] select-none pointer-events-none whitespace-nowrap z-0">
              BLOGS
            </div>
            
            {/* Foreground Content */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-primary/60"></div>
                <span className="text-sm font-bold tracking-[0.3em] text-primary uppercase">All Blogs</span>
                <div className="w-12 h-px bg-primary/60"></div>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-[#0a1128] mb-6 tracking-tight">
                Explore Our <span className="italic font-light text-[#c27c3a]">Insights</span> & Stories
              </h1>
              
              <p className="max-w-3xl text-slate-600 text-lg leading-relaxed">
                Dive deep into our latest event stories, masterclasses, tips, and trends to inspire your next grand celebration.
              </p>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {blogs.map((blog) => (
              <div key={blog.id} className="group cursor-pointer flex flex-col h-full">
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
                  <div className="text-xs font-bold text-[#d94838] uppercase tracking-wider mb-3">
                    {blog.date}
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-[#0a1128] leading-snug mb-4 group-hover:text-[#d94838] transition-colors">
                    {blog.title}
                  </h3>
                  
                  <p className="text-slate-600 line-clamp-3 mb-6 text-sm leading-relaxed flex-grow">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto">
                    <div className="w-full h-px bg-slate-200 mb-4"></div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm font-bold text-[#0a1128] group-hover:text-[#d94838] transition-colors">
                        Read More 
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactScene />
    </main>
  );
}
