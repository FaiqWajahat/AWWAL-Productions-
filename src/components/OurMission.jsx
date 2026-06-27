"use client";

import { motion } from "framer-motion";
import { Target } from "lucide-react";

const OurMission = () => {
  const headingWords = "Our relentless".split(" ");

  return (
    <section className="w-full bg-black py-32 sm:py-40 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
      
      {/* Deep Space Glowing Orbs Background */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[800px] sm:h-[800px] bg-gradient-radial from-purple-dark/30 to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gradient-radial from-green-dark/20 to-transparent rounded-full blur-[100px] pointer-events-none z-0"
      />

      <div className="max-w-5xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Animated Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-10 shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <Target className="w-4 h-4 text-green-light" />
          <span className="font-body text-xs font-bold uppercase tracking-widest text-white/80">The Mission</span>
        </motion.div>

        {/* Dynamic Homepage-style Heading */}
        <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-white leading-[1.05] mb-12 flex flex-wrap justify-center gap-x-4 gap-y-2">
            <div className="flex gap-x-3 sm:gap-x-4 flex-wrap justify-center">
              {headingWords.map((word, index) => (
                <motion.span 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, type: "spring", stiffness: 80 }}
                  className="inline-block"
                  whileHover={{ y: -5, rotate: (index % 2 === 0 ? 3 : -3) }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.span 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }}
              className="inline-block text-green-light w-full text-center"
            >
              mission.
            </motion.span>
        </h2>

        {/* The Core Statement */}
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-heading text-2xl sm:text-3xl lg:text-4xl text-white/80 leading-relaxed font-medium max-w-4xl"
        >
          To eradicate vanity metrics from the industry and engineer bulletproof revenue systems that force our clients' businesses to <span className="text-white font-black border-b-[3px] border-green-light pb-1">dominate</span> their categories.
        </motion.p>
      </div>
    </section>
  );
};

export default OurMission;
