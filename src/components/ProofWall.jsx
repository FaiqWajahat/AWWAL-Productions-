"use client";

import { motion } from "framer-motion";
import { TrendingUp, ArrowUpRight, Activity, Zap, BarChart3 } from "lucide-react";

const ProofWall = () => {
  // Master orchestration for the section
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  // Spring-loaded card entrances
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.7, type: "spring", bounce: 0.25 } 
    },
  };

  return (
    <section id="results" className="w-full bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Premium subtle background grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#00000004_1px,transparent_1px),linear-gradient(to_bottom,#00000004_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none"></div>

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 lg:mb-20">
          <motion.div variants={cardVariants} className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray/5 rounded-full border border-gray/10 mb-6 shadow-sm">
              <BarChart3 className="w-4 h-4 text-purple-dark" />
              <span className="text-xs font-body font-bold uppercase tracking-widest text-gray">Proof of Performance</span>
            </div>
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05]">
              We measure success in <br />
              <span className="text-purple-dark">
                revenue, not likes.
              </span>
            </h2>
          </motion.div>
          
          <motion.div variants={cardVariants} className="max-w-xs hidden md:block pb-2">
            <p className="font-body text-sm font-bold uppercase tracking-widest text-gray border-l-2 border-green-light pl-4">
              Vanity metrics don't pay the bills. We build for the bottom line.
            </p>
          </motion.div>
        </div>

        {/* Dynamic Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
          
          {/* =========================================
              CARD 1: The Hero Stat (Tall, Dark Mode)
              ========================================= */}
          <motion.div 
            variants={cardVariants}
            whileHover={{ y: -5 }}
            className="lg:col-span-5 group relative bg-[#0a0a0a] rounded-[2rem] p-8 sm:p-10 overflow-hidden flex flex-col justify-between min-h-[400px] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/10"
          >
            {/* Dynamic Hover Glows */}
            <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-dark rounded-full blur-[100px] opacity-30 group-hover:opacity-60 transition-all duration-700 ease-out group-hover:scale-110"></div>
            
            {/* Top Tag */}
            <div className="relative z-10 flex justify-between items-start">
              <span className="font-body text-xs font-bold tracking-widest uppercase text-white/50 bg-white/5 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
                Total Value Created
              </span>
              <ArrowUpRight className="w-6 h-6 text-white/30 group-hover:text-white transition-colors duration-300" />
            </div>

            {/* Massive Number Reveal */}
            <div className="relative z-10 mt-20">
              <motion.h3 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
                className="font-heading text-7xl sm:text-8xl lg:text-[7rem] font-bold text-white tracking-tighter leading-none mb-6"
              >
                $15M<span className="text-green-light text-5xl sm:text-6xl align-top">+</span>
              </motion.h3>
              <p className="font-body text-lg sm:text-xl text-white/70 leading-relaxed font-medium max-w-sm border-l-2 border-purple-dark pl-4">
                Client revenue generated directly through our digital ecosystems.
              </p>
            </div>
          </motion.div>

          {/* =========================================
              RIGHT SIDE: 3-Card Bento Stack
              ========================================= */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
            
            {/* CARD 2: ROAS (Wide Card spanning 2 columns) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.01 }}
              className="sm:col-span-2 relative bg-white rounded-[2rem] p-8 sm:p-10 border border-gray/10 shadow-sm hover:shadow-[0_10px_40px_rgba(77,15,146,0.08)] transition-all duration-300 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-purple-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gray/5 flex items-center justify-center mb-6 group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                    <TrendingUp className="w-6 h-6 text-purple-dark" />
                  </div>
                  <h4 className="font-heading text-5xl sm:text-6xl font-bold tracking-tighter text-black mb-2">4.8x</h4>
                  <span className="font-body text-sm font-bold tracking-widest uppercase text-gray">Average ROAS</span>
                </div>

                {/* Animated Trendline SVG */}
                <div className="w-full sm:w-1/2 h-24 relative flex items-end">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 200 100" preserveAspectRatio="none">
                    {/* Background faint line */}
                    <path d="M0,80 Q50,70 100,50 T200,20" fill="none" stroke="rgba(0,0,0,0.05)" strokeWidth="4" strokeLinecap="round" />
                    {/* Animated foreground line */}
                    <motion.path 
                      d="M0,80 Q50,70 100,50 T200,20" 
                      fill="none" 
                      stroke="#4D0F92" // purple-dark
                      strokeWidth="4" 
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      whileInView={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                      viewport={{ once: true }}
                    />
                    {/* Glowing dot at the end */}
                    <motion.circle 
                      cx="200" cy="20" r="6" fill="#4D0F92"
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.5, delay: 1.5, type: "spring" }}
                      viewport={{ once: true }}
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Conversion Lift (Square) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-white rounded-[2rem] p-8 border border-gray/10 shadow-sm hover:shadow-[0_10px_40px_rgba(105,157,10,0.08)] transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-green-light/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-gray/5 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                    <Zap className="w-6 h-6 text-green-dark" />
                  </div>
                </div>
                <h4 className="font-heading text-5xl font-bold tracking-tighter text-black mb-2">+140%</h4>
                <span className="font-body text-sm font-bold tracking-widest uppercase text-gray block mb-3">Conversion Lift</span>
                <p className="font-body text-sm text-gray font-medium leading-relaxed">
                  Average conversion rate increase after a custom site rebuild.
                </p>
              </div>
            </motion.div>

            {/* CARD 4: Client Retention (Square) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              className="relative bg-white rounded-[2rem] p-8 border border-gray/10 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gray/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[2rem]"></div>
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-12">
                  <div className="w-12 h-12 rounded-2xl bg-gray/5 flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all duration-300">
                    <Activity className="w-6 h-6 text-black" />
                  </div>
                </div>
                <h4 className="font-heading text-5xl font-bold tracking-tighter text-black mb-2">92%</h4>
                <span className="font-body text-sm font-bold tracking-widest uppercase text-gray block mb-3">Client Retention</span>
                <p className="font-body text-sm text-gray font-medium leading-relaxed">
                  Of our partners stay with us far beyond their first 12 months.
                </p>
              </div>
            </motion.div>

          </div>
        </div>

      </motion.div>
    </section>
  );
};

export default ProofWall;