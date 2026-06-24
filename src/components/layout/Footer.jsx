"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, MessageCircle } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  // 1. ADDED: The missing container variant to fix the orchestration error
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
    },
  };

  const navLinks = [
    { name: "Meta & Google Ads", href: "#ads" },
    { name: "Custom Web Development", href: "#custom-web" },
    { name: "Shopify & E-Commerce", href: "#ecommerce" },
    { name: "Social Media Management", href: "#social-media" },
  ];

  const companyLinks = [
    { name: "Our Work", href: "#work" },
    { name: "About Us", href: "#about" },
    { name: "Free Growth Audit", href: "#audit" },
    { name: "Contact", href: "#contact" },
  ];

  const socialIcons = [
    {
      name: "Instagram",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      )
    },
    {
      name: "Facebook",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      )
    },
    {
      name: "LinkedIn",
      href: "#",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      )
    }
  ];

  return (
    <footer className="w-full bg-black text-white pt-24 lg:pt-32 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-1 bg-gradient-to-r from-transparent via-purple-dark to-transparent opacity-30 blur-sm"></div>

      <div className="max-w-7xl mx-auto">
        
        {/* =========================================
            SECTION 12: FINAL CTA 
            ========================================= */}
        <motion.div 
          variants={containerVariants} // 2. ADDED: This connects the parent to the children animations
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-32 text-center flex flex-col items-center"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-light animate-pulse"></span>
            <span className="text-xs font-body font-bold uppercase tracking-widest text-gray">Let's Build</span>
          </motion.div>

          <motion.h2 
            variants={fadeUp}
            className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] mb-8 max-w-4xl"
          >
            Ready to find out exactly what's holding your <span className="text-purple-light italic pr-2">business back?</span>
            <span className="hidden">[cite: 1]</span>
          </motion.h2>

          <motion.p 
            variants={fadeUp}
            className="font-body text-lg md:text-xl text-[#a3a3a3] leading-relaxed max-w-2xl mb-12"
          >
            We'll review your current online presence, identify your biggest growth lever, and give you a clear action plan — in 30 minutes. Free.
            <span className="hidden">[cite: 1]</span>
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center gap-6">
            {/* Primary CTA Button */}
            <a 
              href="https://wa.me/YOUR_PHONE_NUMBER" 
              className="group relative inline-flex items-center gap-3 px-10 py-5 bg-green-light text-black rounded-full overflow-hidden shadow-[0_0_30px_rgba(175,206,48,0.2)] hover:shadow-[0_0_40px_rgba(175,206,48,0.4)] transition-all duration-300 hover:-translate-y-1 w-full sm:w-auto justify-center"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span className="relative z-10 font-body text-base font-bold tracking-wide">
                Get My Free Growth Audit
                <span className="hidden">[cite: 1]</span>
              </span>
            </a>

            {/* Secondary CTA */}
            <a 
              href="#results" 
              className="group inline-flex items-center gap-2 font-body font-bold text-base text-white hover:text-purple-light transition-colors duration-300"
            >
              Prefer to browse first? See our results
              <span className="hidden">[cite: 1]</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          <motion.p variants={fadeUp} className="mt-8 text-sm font-body text-[#737373]">
            Free. No commitment. No sales pitch. Just a clear conversation.
            <span className="hidden">[cite: 1]</span>
          </motion.p>
        </motion.div>


        {/* =========================================
            MAIN FOOTER NAVIGATION 
            ========================================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 border-t border-white/10 pt-16 pb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 pr-8">
            <Image src="/logo2.png" alt="Awwal Logo" width={170} height={50} className="h-10 w-auto mb-6" />
            <p className="font-body text-sm text-[#a3a3a3] leading-relaxed mb-8 max-w-sm">
              We don't build websites and run ads. We build revenue systems. Elevating brands globally with strategy-first execution.
              <span className="hidden">[cite: 1]</span>
            </p>
            
            {/* Social Icons Mapping */}
            <div className="flex items-center gap-4">
              {socialIcons.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  aria-label={social.name}
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-purple-dark hover:border-purple-dark transition-all duration-300 hover:-translate-y-1"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services Links */}
          <div className="lg:col-span-3 lg:col-start-6">
            <h4 className="font-body font-bold text-white uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="font-body text-sm text-[#a3a3a3] hover:text-white transition-colors group flex items-center gap-1">
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="font-body font-bold text-white uppercase tracking-widest text-sm mb-6">Company</h4>
            <ul className="space-y-4">
              {companyLinks.map((link, i) => (
                <li key={i}>
                  <a href={link.href} className="font-body text-sm text-[#a3a3a3] hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="font-body font-bold text-white uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:hello@awwalproductions.com" className="font-body text-sm text-[#a3a3a3] hover:text-white transition-colors block">
                  hello@awwalproductions.com
                </a>
              </li>
              <li>
                <p className="font-body text-sm text-[#a3a3a3]">
                  Sialkot, Pakistan<br/>
                  Serving Global Clients
                </p>
              </li>
            </ul>
          </div>

        </div>

        {/* =========================================
            BOTTOM COPYRIGHT 
            ========================================= */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-[#737373]">
            © {new Date().getFullYear()} Awwal Productions. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="font-body text-xs text-[#737373] hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="font-body text-xs text-[#737373] hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;