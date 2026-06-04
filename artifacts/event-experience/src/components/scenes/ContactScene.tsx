import { MapPin, Phone, Mail, Send, ArrowRight, Instagram, Linkedin, Twitter, Youtube, Facebook } from "lucide-react";
import { TextReveal } from "@/components/animations/TextReveal";
import { RevealAnimation } from "@/components/animations/RevealAnimation";
import imgContact from "../../assets/gallery/WhatsApp-Image-2025-02-12-at-19.56.16-1-768x1024.jpeg";
import { useLocation } from "wouter";

export function ContactScene() {
  const [location, setLocation] = useLocation();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href.startsWith("/#")) {
      const targetId = href.substring(1);
      
      if (location !== "/") {
        setLocation("/");
        setTimeout(() => {
          const element = document.querySelector(targetId);
          if (element) {
            const top = element.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({ top, behavior: "smooth" });
          }
        }, 100);
      } else {
        const element = document.querySelector(targetId);
        if (element) {
          const top = element.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }
    } else {
      setLocation(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div id="contact" className="bg-[#f8f9fa] pt-12 pb-0">
      
      {/* 0. Section Header with Massive Watermark */}
      <div className="mb-20 text-center relative flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Massive Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 w-full text-center flex justify-center items-center">
          <RevealAnimation delay={0.1}>
            <span 
              className="font-black text-[#4a2b16] uppercase tracking-tighter leading-none select-none whitespace-nowrap"
              style={{ fontSize: "14vw" }}
            >
              CONTACT
            </span>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.2} className="relative z-10 flex flex-col items-center">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 flex items-center justify-center gap-4">
            <span className="w-8 h-[1px] bg-primary/50" />
            Get In Touch
            <span className="w-8 h-[1px] bg-primary/50" />
          </p>
        </RevealAnimation>
        
        <TextReveal variant="word" delay={0.3}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a1128] font-bold mb-6 leading-[1.1] relative z-10">
            Let's Plan Your <span className="italic text-primary font-normal">Next Event</span>
          </h2>
        </TextReveal>
        
        <RevealAnimation delay={0.4}>
          <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed relative z-10 px-4">
            Looking for the best event management company in Noida & Delhi NCR? 
            Get in touch with Orange Events today. Let's discuss your vision and weave success together.
          </p>
        </RevealAnimation>
      </div>

      {/* 1. Split Contact Section */}
      <section className="max-w-[95rem] mx-auto flex flex-col lg:flex-row overflow-hidden bg-[#f8f9fa]">
        
        {/* Left: Image & Info Cards */}
        <div className="lg:w-1/2 relative min-h-[600px] lg:min-h-[800px] rounded-r-[3rem] lg:rounded-r-[4rem] overflow-hidden">
          <img
            src={imgContact}
            alt="Orange Events Team"
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Gradient Overlay for better readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Info Cards Overlay */}
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 z-10 w-[90%] md:w-auto">
            
            {/* Top Row: Call and Email */}
            <div className="flex flex-col sm:flex-row items-start gap-8 sm:gap-20 pb-8 border-b border-white/20">
              
              {/* Phone Card */}
              <div>
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">Call Now!</h3>
                <p className="text-white/90 text-base leading-relaxed">+91 93508 66151<br/>+91 98111 19024</p>
              </div>

              {/* Email Card */}
              <div className="relative">
                {/* Optional subtle vertical line between them on desktop */}
                <div className="hidden sm:block absolute -left-10 top-0 bottom-0 w-px bg-white/20"></div>
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-5 shadow-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-bold text-2xl mb-2">E-mail Us!</h3>
                <p className="text-white/90 text-base leading-relaxed">asha@orangeevents.in<br/>vipin@orangeevents.in</p>
              </div>

            </div>

            {/* Bottom Row: Location */}
            <div className="pt-8 flex items-start gap-6">
              <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-bold text-2xl mb-2">Our Location!</h3>
                <p className="text-white/90 text-base leading-relaxed max-w-sm">
                  F-104, 1st Floor, A-1, Sector-59,<br />
                  Noida – 201307
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:w-1/2 px-6 py-16 md:p-20 flex flex-col justify-center">
          <RevealAnimation delay={0.2}>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-bold text-[#0a1128]">Contact Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0a1128] mb-6 font-serif leading-tight">
              Get in touch with our team anytime today
            </h2>
            <p className="text-slate-600 mb-10 text-base leading-relaxed">
              Our team is always here to listen, support, and guide you. Whether you have questions, need assistance, or want to discuss your next project or event.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Mobile Number"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
                <input
                  type="email"
                  placeholder="E-mail Address"
                  className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                />
              </div>

              <textarea
                rows={5}
                placeholder="Write your message here..."
                className="w-full bg-white px-6 py-4 rounded-xl border border-slate-200 text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
              ></textarea>

              <div>
                <button
                  type="submit"
                  className="premium-button bg-primary text-white font-bold py-4 px-10 rounded-full shadow-lg inline-flex items-center gap-2"
                >
                  Send A Message
                  <Send className="premium-button-arrow w-4 h-4 transition-transform duration-400" />
                </button>
              </div>
            </form>
          </RevealAnimation>
        </div>
      </section>

      {/* 2. Map Section */}
      <section className="py-24 bg-white text-center border-t border-slate-200 mt-20">
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="w-2 h-2 rounded-full bg-primary" />
          <span className="text-sm font-bold uppercase tracking-widest text-[#0a1128] bg-slate-100 px-4 py-2 rounded-full">
            Our Location
          </span>
        </div>
        <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-[#0a1128] mb-16 font-serif leading-tight">
          Reach out and let's weave success <br className="hidden md:block"/> together
        </h2>
        
        <div className="w-full h-[500px] grayscale hover:grayscale-0 transition-all duration-700 relative z-10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.882194576307!2d77.34861621257125!3d28.585573426767595!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce50f3b468cb5%3A0x6b772594539db1ee!2sSector%2059%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1717436098263!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      
      {/* Footer Wrapper for Cutout Effect */}
      <div className="w-full relative z-0">
        
        {/* 4. Footer Section with Clip Path */}
        <footer 
          className="bg-[#4a2b16] text-white pt-20 pb-12 px-4 md:px-12 relative -mt-4"
          style={{ clipPath: 'polygon(0 2rem, 3vw 2rem, calc(3vw + 2rem) 4rem, 28vw 4rem, calc(28vw + 4rem) 0, 75vw 0, calc(75vw + 4rem) 4rem, 100% 4rem, 100% 100%, 0 100%)' }}
        >
          
          {/* Top Links */}
          <div className="max-w-[90rem] mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 mt-8">
            
            {/* Brand & Description */}
            <div className="lg:col-span-1">
              <h3 className="font-serif text-4xl font-bold italic mb-2 text-[#f5f0e6]">Orange</h3>
              <p className="text-sm font-sans font-bold uppercase tracking-widest text-primary mb-6">
                Events & Conferences Pvt Ltd.
              </p>
              <p className="text-white/80 text-sm leading-relaxed max-w-sm">
                You will witness originality and creativity to create some of the most inspiring, unique and exciting celebrations with us. We approach every project with meticulous attention to detail and obsessive precision.
              </p>
            </div>
            
            {/* Quick Links */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:px-8">
              <div>
                <h4 className="text-2xl font-serif font-bold text-white mb-6">Quick Link</h4>
                <div className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  <a href="/about" onClick={(e) => handleNavClick(e, "/about")} className="hover:text-primary transition-colors w-fit">About Us</a>
                  <a href="/blogs" onClick={(e) => handleNavClick(e, "/blogs")} className="hover:text-primary transition-colors w-fit">Blogs</a>
                  <a href="/service/corporate" onClick={(e) => handleNavClick(e, "/service/corporate")} className="hover:text-primary transition-colors w-fit">Corporate Event</a>
                  <a href="/service/entertainment" onClick={(e) => handleNavClick(e, "/service/entertainment")} className="hover:text-primary transition-colors w-fit">Entertainment Services</a>
                  <a href="/service/wedding" onClick={(e) => handleNavClick(e, "/service/wedding")} className="hover:text-primary transition-colors w-fit">Wedding Planning</a>
                </div>
              </div>
              <div className="sm:pt-[3.75rem]">
                <div className="flex flex-col gap-4 text-sm font-medium text-white/80">
                  <a href="/service/vacation" onClick={(e) => handleNavClick(e, "/service/vacation")} className="hover:text-primary transition-colors w-fit">Vacation Planning</a>
                  <a href="/#clients" onClick={(e) => handleNavClick(e, "/#clients")} className="hover:text-primary transition-colors w-fit">Clients</a>
                  <a href="/portfolio" onClick={(e) => handleNavClick(e, "/portfolio")} className="hover:text-primary transition-colors w-fit">Our Footprint</a>
                  <a href="/contact" onClick={(e) => handleNavClick(e, "/contact")} className="hover:text-primary transition-colors w-fit">Contact Us</a>
                </div>
              </div>
            </div>
            
            {/* Contact Info */}
            <div className="lg:col-span-1 flex flex-col gap-8 text-white/80">
              <div className="flex gap-4 items-start">
                <MapPin className="w-6 h-6 mt-1 shrink-0 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">Address</h4>
                  <p className="text-sm leading-relaxed">F-104, 1st Floor, A-1, Sector-59,<br/>Noida-201307</p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <Phone className="w-6 h-6 mt-1 shrink-0 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">Contact No</h4>
                  <p className="text-sm leading-relaxed">+91 93508 66151<br/>+91 98111 19024</p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <Mail className="w-6 h-6 mt-1 shrink-0 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-serif">Email</h4>
                  <p className="text-sm leading-relaxed hover:text-primary transition-colors"><a href="mailto:asha@orangeevents.in">asha@orangeevents.in</a><br/><a href="mailto:vipin@orangeevents.in">vipin@orangeevents.in</a></p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Card Area */}
          <div className="max-w-[90rem] mx-auto relative z-10 px-4 md:px-0">
            
            {/* The Slanted Tab */}
            <div className="flex justify-end relative -mb-[1px]">
              <div className="bg-[#f5f0e6] pl-12 pr-8 py-4 rounded-tr-3xl md:rounded-tr-[3rem] relative text-[#4a2b16] font-bold text-[10px] md:text-sm tracking-widest uppercase">
                {/* Slanted left edge */}
                <div className="absolute -left-6 bottom-0 w-12 h-full bg-[#f5f0e6] transform -skew-x-[35deg] rounded-tl-xl origin-bottom"></div>
                <span className="relative z-10">Crafting Event Experiences</span>
              </div>
            </div>

            {/* The Main Cream Card */}
            <div className="bg-[#f5f0e6] rounded-tl-3xl rounded-b-3xl md:rounded-tl-[3rem] md:rounded-b-[3rem] p-8 md:p-16 text-[#4a2b16] relative w-full pt-12 md:pt-16 shadow-2xl">
              
              {/* Header Row */}
              <div className="flex flex-col xl:flex-row items-start xl:items-center justify-between mb-16 gap-8">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold italic tracking-tight">
                  Orange Events<sup className="text-xl sm:text-2xl md:text-4xl ml-1 font-sans">™</sup>
                </h2>
                <button 
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
                  className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full transition-colors font-bold whitespace-nowrap shadow-xl text-sm tracking-wide"
                >
                  Work together?
                </button>
              </div>

              {/* Newsletter Row */}
              <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                <div className="w-full lg:w-1/2">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Newsletter</h3>
                  <form className="relative max-w-md" onSubmit={e => e.preventDefault()}>
                    <input 
                      type="email" 
                      placeholder="email" 
                      className="w-full bg-[#5d2f1d] text-white placeholder:text-white/50 px-6 py-5 rounded-[2rem] focus:outline-none focus:ring-2 focus:ring-primary text-lg"
                    />
                    <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-primary hover:text-white transition-colors">
                      <ArrowRight className="w-8 h-8" />
                    </button>
                  </form>
                  <p className="text-xs text-[#4a2b16]/70 mt-3 font-bold px-2">
                    We promise, no spam.
                  </p>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col items-start lg:items-end gap-6 text-left lg:text-right">
                  <p className="text-sm font-bold max-w-[280px] text-[#4a2b16]/90 leading-relaxed">
                    Every week, we share updates on our latest luxury events, trends, and corporate insights. If you don't want to miss a thing, drop us your e-mail.
                  </p>
                  
                  {/* Social Icons */}
                  <div className="flex items-center gap-6 mt-2">
                    <a href="https://www.instagram.com/orangeeventsandconferences?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram className="w-7 h-7" /></a>
                    <a href="https://www.facebook.com/orangeeventsandconferences/#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook className="w-7 h-7" /></a>
                    <a href="https://www.youtube.com/channel/UCwEPbmRQT8N7TBS8QQZlHog" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Youtube className="w-7 h-7" /></a>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </footer>
      </div>

    </div>
  );
}
