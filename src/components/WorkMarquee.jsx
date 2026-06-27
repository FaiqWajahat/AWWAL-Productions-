"use client";

import { motion } from "framer-motion";

const marqueeItems = [
  "B2B Custom Web",
  "Meta Ads Scaling",
  "Google Search Dominance",
  "High-Intent Lead Gen",
  "WordPress Architecture",
  "Performance Max",
  "WhatsApp-First Funnels",
  "Conversion Rate Optimization"
];

const WorkMarquee = () => {
  return (
    <section className="w-full bg-black py-8 overflow-hidden relative z-20 -skew-y-2 translate-y-6">
      {/* Top and Bottom Inner Borders */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      
      <div className="flex whitespace-nowrap items-center">
        {/* We duplicate the array multiple times to ensure seamless infinite scroll */}
        <motion.div
          animate={{ x: [0, -1035] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center gap-8"
        >
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={index} className="flex items-center gap-8">
              <span className="font-heading font-black text-2xl sm:text-3xl text-white tracking-widest uppercase opacity-90">
                {item}
              </span>
              <span className="text-green-light font-black text-2xl">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WorkMarquee;
