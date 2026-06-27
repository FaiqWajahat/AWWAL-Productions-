"use client";

import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import { Target, AlertTriangle, ShieldCheck, Quote } from "lucide-react";

const OurStory = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const headingWords = "The Awwal".split(" ");

  const slideInRight = {
    hidden: { opacity: 0, x: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      x: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 80, damping: 20 } 
    }
  };

  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray/10 relative overflow-hidden">
      
      {/* Ambient Orbs */}
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-light/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ y: [0, -40, 0], scale: [1, 1.1, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-green-light/10 rounded-full blur-[100px] pointer-events-none"
      />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column */}
          <div className="lg:col-span-5 relative z-20">
            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
              >
                <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.05] mb-8 flex flex-wrap gap-x-3 gap-y-2">
                  <div className="flex gap-x-3 flex-wrap">
                    {headingWords.map((word, index) => (
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
                  </div>
                  <motion.span 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 80 }}
                    className="inline-block text-purple-dark w-full"
                  >
                    Origin.
                  </motion.span>
                </h2>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                  className="bg-white/60 backdrop-blur-md border border-gray/10 shadow-sm rounded-3xl p-8 mt-8 relative overflow-hidden group transition-all duration-500"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1], rotate: [0, 2, -2, 0] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="absolute -right-8 -top-12 text-[160px] font-heading font-black text-gray/5 pointer-events-none select-none z-0"
                  >
                    أول
                  </motion.div>
                  
                  <div className="relative z-10">
                    <h3 className="font-heading text-2xl font-bold text-black mb-3 flex items-baseline gap-2">
                      Awwal 
                      <span className="font-body text-gray font-medium text-sm tracking-wide uppercase">/ aw-wal /</span>
                    </h3>
                    <div className="w-8 h-1 bg-gradient-to-r from-purple-dark to-green-light rounded-full mb-4" />
                    <p className="font-body text-gray font-medium leading-relaxed text-lg">
                      Meaning <strong className="text-purple-dark font-bold">"First"</strong>. We chose this name because the foundation comes first. Everything else is built on it.
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Right Column: Timeline */}
          <div className="lg:col-span-7 relative" ref={containerRef}>
            
            {/* Background Track */}
            <div className="absolute left-[31px] sm:left-[39px] top-6 bottom-0 w-[2px] bg-gray/10 z-0 rounded-full" />
            
            {/* Animated Gradient Scroll Line */}
            <motion.div 
              style={{ scaleY: scrollYProgress }}
              className="absolute left-[31px] sm:left-[39px] top-6 bottom-0 w-[2px] bg-gradient-to-b from-purple-dark to-green-dark z-0 origin-top rounded-full shadow-[0_0_15px_rgba(149,80,242,0.5)]"
            />

            <div className="flex flex-col gap-12 sm:gap-16 relative z-10 pt-4">
              
              {/* Phase 1 */}
              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-10% 0px -10% 0px", once: true }}
                className="relative pl-16 sm:pl-24 group"
              >
                <div className="absolute left-[19px] sm:left-[27px] top-2 w-6 h-6 rounded-full bg-white border-[3px] border-gray/20 flex items-center justify-center z-10 group-hover:border-purple-dark transition-colors duration-500 shadow-[0_0_15px_rgba(107,33,168,0)] group-hover:shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-gray/50 group-hover:bg-purple-dark transition-colors duration-500" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-black mb-3 flex items-center gap-3">
                  <Target className="w-5 h-5 text-gray group-hover:text-purple-dark transition-colors duration-300" />
                  The Pattern of Waste
                </h3>
                <div className="bg-white/40 backdrop-blur-md border border-gray/10 hover:border-purple-dark/20 hover:bg-white/80 rounded-2xl p-6 transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
                  <p className="font-body text-base text-gray leading-relaxed font-medium">
                    We saw a toxic industry pattern: agencies cashing checks based on vanity metrics while businesses burned cash. Nobody asked what a profitable outcome actually looked like.
                  </p>
                </div>
              </motion.div>

              {/* Phase 2 */}
              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-20% 0px -20% 0px", once: true }}
                className="relative pl-16 sm:pl-24 group"
              >
                <div className="absolute left-[19px] sm:left-[27px] top-2 w-6 h-6 rounded-full bg-white border-[3px] border-gray/20 flex items-center justify-center z-10 group-hover:border-purple-dark transition-colors duration-500 shadow-[0_0_15px_rgba(107,33,168,0)] group-hover:shadow-[0_0_15px_rgba(107,33,168,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-gray/50 group-hover:bg-purple-dark transition-colors duration-500" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-black mb-3 flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-gray group-hover:text-purple-dark transition-colors duration-300" />
                  The Breaking Point
                </h3>
                <div className="bg-white/40 backdrop-blur-md border border-gray/10 hover:border-purple-dark/20 hover:bg-white/80 rounded-2xl p-6 transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)] mb-6">
                  <p className="font-body text-base text-gray leading-relaxed font-medium">
                    Marketing was funding agencies, not growing businesses. We watched campaigns generate hundreds of leads with zero sales, celebrated only because of high click-through rates.
                  </p>
                </div>

                <motion.div 
                  whileHover={{ y: -5, rotateX: 2, rotateY: -2 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="bg-purple-dark text-white p-8 rounded-3xl shadow-[0_20px_40px_rgba(77,15,146,0.3)] relative overflow-hidden"
                >
                  <motion.div 
                    animate={{ y: [0, -10, 0], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -right-4 -top-4 pointer-events-none"
                  >
                    <Quote className="w-24 h-24 text-white" />
                  </motion.div>
                  <p className="font-heading text-2xl font-bold leading-tight relative z-10">
                    "That client wasn't growing. They were just funding a marketing agency's metrics."
                  </p>
                </motion.div>
              </motion.div>

              {/* Phase 3 */}
              <motion.div 
                variants={slideInRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ margin: "-20% 0px -10% 0px", once: true }}
                className="relative pl-16 sm:pl-24 group"
              >
                <div className="absolute left-[19px] sm:left-[27px] top-2 w-6 h-6 rounded-full bg-white border-[3px] border-gray/20 flex items-center justify-center z-10 group-hover:border-green-dark transition-colors duration-500 shadow-[0_0_15px_rgba(105,157,10,0)] group-hover:shadow-[0_0_15px_rgba(105,157,10,0.3)]">
                  <div className="w-2 h-2 rounded-full bg-gray/50 group-hover:bg-green-dark transition-colors duration-500" />
                </div>
                
                <h3 className="font-heading text-2xl font-bold text-black mb-3 flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray group-hover:text-green-dark transition-colors duration-300" />
                  The Standard
                </h3>
                
                <div className="bg-white/40 backdrop-blur-md border border-gray/10 hover:border-green-dark/20 hover:bg-white/80 rounded-2xl p-6 sm:p-8 transition-all duration-500 shadow-sm hover:shadow-[0_15px_40px_rgba(0,0,0,0.04)]">
                  <p className="font-body text-lg text-black font-bold mb-6">
                    We built the agency that asks the hard questions first. 
                  </p>
                  
                  <ul className="space-y-4 font-body text-gray font-medium text-base">
                    {[
                      "We define unit economics before spending a rupee.",
                      "We install bulletproof tracking architectures.",
                      "We stay to fix and optimize, long after launch."
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <div className="w-5 h-5 rounded-full bg-green-light/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-green-dark text-xs">✓</span>
                        </div>
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;