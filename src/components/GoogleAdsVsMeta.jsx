"use client";

import { motion } from "framer-motion";
import { Magnet, Megaphone } from "lucide-react";

const GoogleAdsVsMeta = () => {
  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-gray/10">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">The Difference</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Meta Ads interrupts. Google Ads".split(" ").map((word, index) => (
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
              className="inline-block text-blue-600"
            >
              captures.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            When you run a Meta Ad, you're introducing a product to someone who wasn't looking for it. When someone searches Google, they already want a solution. They're not browsing — they're buying.
          </p>
        </motion.div>

        {/* Comparative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
          
          {/* Meta Ads Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-gray/10 rounded-[2rem] p-8 sm:p-10 shadow-sm"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-purple-light/20 rounded-xl">
                <Megaphone className="w-6 h-6 text-purple-dark" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-black">Meta Ads</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-1">Approach</p>
                <p className="font-body font-medium text-lg text-black">Interrupts — reaches people not searching.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-1">Demand</p>
                <p className="font-body font-medium text-lg text-black">Creates demand for unknown products.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-1">Best For</p>
                <p className="font-body font-medium text-lg text-black">Brand building, eCommerce, impulse purchases.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-1">Results Speed</p>
                <p className="font-body font-medium text-lg text-black">Slower — requires extensive creative testing.</p>
              </div>
            </div>
          </motion.div>

          {/* Google Ads Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-black border border-gray/10 rounded-[2rem] p-8 sm:p-10 shadow-xl"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-green-dark/20 rounded-xl">
                <Magnet className="w-6 h-6 text-green-light" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-white">Google Ads</h3>
            </div>
            
            <div className="space-y-6">
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Approach</p>
                <p className="font-body font-medium text-lg text-white">Captures — reaches people actively searching.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Demand</p>
                <p className="font-body font-medium text-lg text-white">Captures existing demand.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Best For</p>
                <p className="font-body font-medium text-lg text-white">Services, high-intent purchases, B2B.</p>
              </div>
              <div>
                <p className="font-body text-xs font-bold uppercase tracking-widest text-white/50 mb-1">Results Speed</p>
                <p className="font-body font-medium text-lg text-white">Faster — the purchase intent is already there.</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-heading text-xl sm:text-2xl font-bold text-black leading-relaxed">
            If your business sells something people actively search for — a service, a software tool, a clear product category — <span className="text-blue-600">Google Ads is one of the highest-ROI channels you can run.</span> The intent is already there. You just have to show up.
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GoogleAdsVsMeta;
