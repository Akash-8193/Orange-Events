import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import imgContact from "../../assets/gallery/WhatsApp-Image-2025-02-12-at-19.56.16-1-768x1024.jpeg";

export function ContactScene() {
  return (
    <div id="contact" className="bg-[#f8f9fa] pt-24 pb-0">
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
          <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16 flex flex-col gap-4 z-10 w-[90%] md:w-auto">
            
            {/* Phone Card */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
                <p className="text-white font-bold text-lg leading-tight">Call Now!</p>
                <p className="text-white/80 text-sm mt-1">+91 93508 66151, +91 98111 19024</p>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-5">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="bg-black/40 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/10 shadow-lg">
                <p className="text-white font-bold text-lg leading-tight">E-mail Us!</p>
                <p className="text-white/80 text-sm mt-1">asha@orangeevents.in</p>
              </div>
            </div>

            {/* Location Card */}
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg mt-1">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="bg-black/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10 shadow-lg max-w-sm">
                <p className="text-white font-bold text-lg leading-tight">Our Location!</p>
                <p className="text-white/80 text-sm mt-2 leading-relaxed">
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
