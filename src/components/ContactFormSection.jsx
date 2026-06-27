"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock } from "lucide-react";
import { useState } from "react";

const ContactFormSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Form submitted! We will reach out shortly.");
    }, 1500);
  };

  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Abstract Background Accent */}
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-light/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-4 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Prefer to fill in a".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 80 }}
              className="inline-block text-green-dark"
            >
              form?
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg">
            We'll reach out within 4 business hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white/60 backdrop-blur-md border border-gray/10 rounded-[2rem] p-8 sm:p-12 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
        >
          <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
            
            {/* Field 1: Name */}
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="font-heading font-bold text-black text-lg">Your name</label>
              <input 
                type="text" 
                id="name" 
                required
                placeholder="First and last name"
                className="w-full bg-gray/5 border border-transparent focus:border-purple-dark focus:bg-white px-5 py-4 rounded-xl font-body text-black placeholder:text-gray/50 outline-none transition-all duration-300"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {/* Field 2: Business Type */}
              <div className="flex flex-col gap-2">
                <label htmlFor="business" className="font-heading font-bold text-black text-lg">Business type</label>
                <div className="relative">
                  <select 
                    id="business" 
                    required
                    className="w-full appearance-none bg-gray/5 border border-transparent focus:border-purple-dark focus:bg-white px-5 py-4 rounded-xl font-body text-black outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="" disabled selected hidden>Select an option...</option>
                    <option value="ecommerce">eCommerce / online store</option>
                    <option value="service">Service business</option>
                    <option value="b2b">B2B company</option>
                    <option value="startup">Startup / new business</option>
                    <option value="other">Other</option>
                  </select>
                  {/* Custom Arrow */}
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>

              {/* Field 3: Monthly Budget */}
              <div className="flex flex-col gap-2">
                <label htmlFor="budget" className="font-heading font-bold text-black text-lg">Monthly budget</label>
                <div className="relative">
                  <select 
                    id="budget" 
                    required
                    className="w-full appearance-none bg-gray/5 border border-transparent focus:border-purple-dark focus:bg-white px-5 py-4 rounded-xl font-body text-black outline-none transition-all duration-300 cursor-pointer"
                  >
                    <option value="" disabled selected hidden>Select an option...</option>
                    <option value="under_500">Under £500/mo</option>
                    <option value="500_2000">£500–£2,000/mo</option>
                    <option value="2000_5000">£2,000–£5,000/mo</option>
                    <option value="5000_10000">£5,000–£10,000/mo</option>
                    <option value="10000_plus">£10,000+/mo</option>
                    <option value="not_sure">Not sure yet</option>
                  </select>
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                    <svg className="w-5 h-5 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Field 4: Service */}
            <div className="flex flex-col gap-2">
              <label htmlFor="service" className="font-heading font-bold text-black text-lg">Service</label>
              <div className="relative">
                <select 
                  id="service" 
                  required
                  className="w-full appearance-none bg-gray/5 border border-transparent focus:border-purple-dark focus:bg-white px-5 py-4 rounded-xl font-body text-black outline-none transition-all duration-300 cursor-pointer"
                >
                  <option value="" disabled selected hidden>Select an option...</option>
                  <option value="meta">Meta Ads</option>
                  <option value="google">Google Ads</option>
                  <option value="wordpress">WordPress website</option>
                  <option value="shopify">Shopify store</option>
                  <option value="custom_web">Custom website / web app</option>
                  <option value="social_media">Social media management</option>
                  <option value="omnichannel">Omnichannel strategy</option>
                  <option value="not_sure">Not sure — I need advice</option>
                </select>
                <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
              </div>
            </div>

            {/* Submit Area */}
            <div className="pt-4 flex flex-col items-center">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="group flex items-center justify-center gap-2 w-full bg-black text-white font-body font-bold text-lg px-8 py-5 rounded-xl hover:bg-purple-dark transition-colors duration-300 disabled:opacity-70"
              >
                {isSubmitting ? "Sending..." : "Send my message"}
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </motion.button>
              
              {/* Privacy Microcopy */}
              <div className="flex items-center justify-center gap-2 mt-6 text-gray text-sm">
                <Lock className="w-4 h-4 text-green-dark" />
                <span>We use your information only to respond to your enquiry. We don't share it with anyone else. <strong>Ever.</strong></span>
              </div>
            </div>

          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactFormSection;
