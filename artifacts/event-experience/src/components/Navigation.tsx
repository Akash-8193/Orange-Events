import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import { useLocation } from "wouter";
import neonHeaderBg from "../assets/generated_images/neon_header_bg.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Our Works", href: "/portfolio" },
    { name: "Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("/#")) {
      const targetId = href.substring(1);
      const element = document.querySelector(targetId);
      
      if (element) {
        e.preventDefault();
        const top = element.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (href.startsWith("/")) {
      e.preventDefault();
      setLocation(href);
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 1.0 }}
        className={`fixed left-4 right-4 md:left-6 md:right-6 lg:left-8 lg:right-8 xl:left-12 xl:right-12 z-50 transition-all duration-500 overflow-hidden rounded-full shadow-2xl border border-white/10 ${
          isScrolled ? "h-12 md:h-14 top-2" : "h-14 md:h-16 top-4"
        }`}
      >
        <div className="absolute inset-0 z-0">
          <img 
            src={neonHeaderBg} 
            alt="Premium Neon Header" 
            className="w-full h-full object-cover brightness-110 blur-sm scale-[1.05]" 
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        </div>

        <div className="relative z-10 w-full h-full px-6 md:px-10 lg:px-12 flex items-center justify-between md:grid md:grid-cols-[1fr_auto_1fr]">
          <div className="flex items-center justify-start">
            <a href="#" className="flex flex-col leading-none hover-target">
              <span className="text-xl md:text-[1.35rem] font-serif tracking-[0.2em] text-white drop-shadow-md">
                ORANGE EVENTS
              </span>
              <span className="text-[8px] md:text-[9px] tracking-[0.25em] uppercase text-white/90 font-medium drop-shadow-sm mt-0.5 ml-0.5">
                &amp; Conferences Pvt. Ltd.
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center justify-center gap-5 lg:gap-8 xl:gap-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-white hover:text-white/80 drop-shadow-md transition-all hover-target"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center justify-end gap-5 xl:gap-7">
            <a href="https://www.instagram.com/orangeeventsandconferences?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover-target text-white hover:text-white/80 transition-colors drop-shadow-md">
              <Instagram size={20} strokeWidth={1.5} />
            </a>
            <a href="https://www.facebook.com/orangeeventsandconferences/#" target="_blank" rel="noopener noreferrer" className="hover-target text-white hover:text-white/80 transition-colors drop-shadow-md">
              <Facebook size={20} strokeWidth={1.5} />
            </a>
            <a href="mailto:info@orangeevents.in" className="hover-target text-white hover:text-white/80 transition-colors drop-shadow-md">
              <Mail size={20} strokeWidth={1.5} />
            </a>
          </div>

          <div className="flex md:hidden items-center gap-4">
            <button
              className="hover-target text-white"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-background flex flex-col justify-center items-center"
          >
            <button
              className="absolute top-6 right-6 hover-target p-2"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} />
            </button>
            <div className="flex flex-col items-center gap-8">
              {links.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-3xl font-serif hover-target hover:text-primary transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
