import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import imgContact from "../../assets/gallery/WhatsApp-Image-2025-02-12-at-19.56.16-1-768x1024.jpeg";

export function ContactScene() {
  return (
    <div id="contact" className="bg-[#f8f9fa] pt-12 pb-0">
      
      {/* 0. Section Header with Massive Watermark */}
      <div className="mb-20 text-center relative flex flex-col items-center justify-center pt-16 overflow-hidden">
        {/* Massive Watermark Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-10 w-full text-center">
          <span className="text-[11rem] md:text-[16rem] lg:text-[18rem] font-black text-[#4a2b16] uppercase tracking-tighter leading-none select-none">
            CONTACT
          </span>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-4 relative z-10 flex items-center justify-center gap-4"
        >
          <span className="w-8 h-[1px] bg-primary/50" />
          Get In Touch
          <span className="w-8 h-[1px] bg-primary/50" />
        </motion.p>
        
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0a1128] font-bold mb-6 leading-[1.1] relative z-10"
        >
          Let's Plan Your <span className="italic text-primary font-normal">Next Event</span>
        </motion.h2>
        
        <p className="text-slate-600 font-medium max-w-2xl mx-auto text-lg leading-relaxed relative z-10 px-4">
          Looking for the best event management company in Noida & Delhi NCR? 
          Get in touch with Orange Events today. Let's discuss your vision and weave success together.
        </p>
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
                className="bg-primary text-white font-bold py-4 px-10 rounded-full hover:bg-[#965a22] transition-colors inline-flex items-center gap-2"
              >
                Send A Message
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
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
      
      {/* Footer minimal info strip */}
      <div className="bg-[#0a1128] py-6 text-center text-white/50 text-xs tracking-widest uppercase">
        © {new Date().getFullYear()} Orange Events & Conferences Pvt. Ltd. All rights reserved.
      </div>

    </div>
  );
}
