"use client";

import { motion } from "framer-motion";
import { Clock, Globe, Mail, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/site";

const ContactResponse = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-gray/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: The Promise */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-light/10 rounded-full border border-green-light/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-green-dark animate-pulse" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-green-dark">Response Promise</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-8 flex flex-wrap gap-x-3 gap-y-2">
            {"You won't be left".split(" ").map((word, index) => (
              <motion.span 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                className="inline-block"
                whileHover={{ y: -5, rotate: (index % 2 === 0 ? 3 : -3) }}
              >
                {word}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
              className="inline-block text-green-dark"
            >
              waiting.
            </motion.span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-gray font-medium leading-relaxed">
            <p>
              We reply to every WhatsApp message and every form submission within <strong className="text-black font-bold">4 business hours</strong> — Monday to Friday, 9am to 7pm (Saudi Arabia / Pakistan time). Outside of business hours, we'll respond first thing the following morning.
            </p>
            <p>
              We don't use automated responses for the first reply. The message you receive comes from a real person who has read what you sent.
            </p>
          </div>
        </motion.div>

        {/* Right Column: Contact Details Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="bg-gray/5 border border-gray/10 rounded-[2rem] p-8 sm:p-10 space-y-8">
            
            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-green-light/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-dark" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-black text-xl mb-1">WhatsApp</h4>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer" className="font-body text-gray hover:text-green-dark transition-colors text-lg">
                  +12 345 67890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-purple-light/20 transition-colors">
                <Mail className="w-6 h-6 text-purple-dark" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-black text-xl mb-1">Email</h4>
                <a href={`mailto:${siteConfig.links.email}`} className="font-body text-gray hover:text-purple-dark transition-colors text-lg">
                  {siteConfig.links.email}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-gray/10 transition-colors">
                <Clock className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-black text-xl mb-1">Operating hours</h4>
                <p className="font-body text-gray text-lg">
                  Monday – Friday, 9am – 7pm <br className="hidden sm:block"/>(AST / PKT)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 group">
              <div className="p-3 bg-white rounded-xl shadow-sm group-hover:bg-gray/10 transition-colors">
                <Globe className="w-6 h-6 text-black" />
              </div>
              <div>
                <h4 className="font-heading font-bold text-black text-xl mb-1">Markets served</h4>
                <p className="font-body text-gray text-lg">
                  Saudi Arabia · Pakistan · UAE · Kuwait · International
                </p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactResponse;
