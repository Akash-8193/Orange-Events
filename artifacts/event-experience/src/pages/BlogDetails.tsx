import { useEffect } from "react";
import { useRoute, useLocation, Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { blogs } from "@/data/blogs";
import { blogContents } from "@/data/blogContents";

export default function BlogDetails() {
  const [match, params] = useRoute("/blogs/:id");
  const [, setLocation] = useLocation();

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [params?.id]);

  if (!match || !params?.id) {
    setLocation("/blogs");
    return null;
  }

  const blog = blogs.find(b => b.id === params.id);
  const content = blogContents[params.id];

  if (!blog) {
    setLocation("/blogs");
    return null;
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Header */}
      <div className="relative h-[65vh] w-full overflow-hidden">
        <img 
          src={blog.image} 
          alt={blog.title} 
          className="w-full h-full object-cover brightness-[0.65]"
        />
        {/* Dark gradient so white text ALWAYS pops */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />
        
        {/* Back button */}
        <div className="absolute top-8 left-8 md:top-12 md:left-12 z-20">
          <Link href="/blogs">
            <a className="flex items-center gap-2 text-white/80 hover:text-white transition-colors uppercase tracking-widest text-xs font-semibold backdrop-blur-md bg-black/30 px-5 py-2.5 rounded-full border border-white/20 hover:bg-black/60">
              <ArrowLeft size={16} />
              Back to Blogs
            </a>
          </Link>
        </div>

        {/* Title */}
        <div className="absolute bottom-0 left-0 w-full p-8 md:p-16 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl"
          >
            <p className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm mb-4 drop-shadow-md">
              {blog.date}
            </p>
            <h1 
              className="font-serif text-white mb-6 leading-tight drop-shadow-2xl"
              style={{ fontSize: "clamp(2rem, 5vw, 5rem)" }}
            >
              {blog.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 sm:px-8 md:px-16 py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          {content ? (
            <div 
              className="prose prose-invert prose-lg max-w-none prose-headings:font-serif prose-headings:text-primary prose-p:text-white/80 prose-p:leading-relaxed prose-p:font-light prose-a:text-primary prose-li:text-white/80"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          ) : (
            <p className="text-xl md:text-2xl text-white/80 leading-relaxed font-light font-serif">
              {blog.excerpt}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
