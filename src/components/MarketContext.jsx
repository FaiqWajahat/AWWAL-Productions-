"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, MousePointerClick, ArrowRight } from "lucide-react";

const MarketContext = () => {
  // Advanced spring-based staggering
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 35, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.8, type: "spring", bounce: 0.25 } 
    },
  };

  const verticalLineDraw = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }
    }
  };

  const underlineDraw = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const stats = [
    {
      icon: Search,
      metric: "81%",
      text: "Research a business online before making a purchase.",
      color: "text-purple-dark",
      bgHover: "group-hover:bg-purple-light/10",
      borderHover: "hover:border-purple-dark/30",
    },
    {
      icon: TrendingUp,
      metric: "2–3x",
      text: "Faster growth for businesses with an active online presence.",
      color: "text-green-dark",
      bgHover: "group-hover:bg-green-light/10",
      borderHover: "hover:border-green-dark/30",
    },
    {
      icon: MousePointerClick,
      metric: "6–8",
      text: "Pieces of content touched before a buyer reaches out.",
      color: "text-black",
      bgHover: "group-hover:bg-gray/5",
      borderHover: "hover:border-black/20",
    },
  ];

  return (
    <section id="context" className="w-full bg-white text-black py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Animated Breathing Ambient Background Mesh */}
      <motion.div 
        animate={{
          scale: [1, 1.05, 1],
          x: [0, 15, 0],
          y: [0, -10, 0]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray/5 via-transparent to-transparent pointer-events-none"
      />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Top Layout: Punchy & Direct */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 items-center">
          
          {/* Left Column: Bold Hook */}
          <motion.div variants={fadeUp} className="lg:col-span-7">
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1] mb-6">
              The world is online. <br />
              <motion.span 
                className="inline-block text-purple-dark"
                animate={{ scale: [1, 1.01, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                Your buyers are waiting.
              </motion.span>
            </h2>
            <p className="font-body text-lg md:text-xl text-gray font-medium leading-relaxed max-w-lg">
              Millions search, scroll, and buy every single day. If you aren't visible, you don't exist.
            </p>
          </motion.div>

          {/* Right Column: The Reality Check */}
          <motion.div variants={fadeUp} className="lg:col-span-5 relative">
            {/* Dynamic vertical boundary draw animation */}
            <motion.div 
              variants={verticalLineDraw}
              className="absolute -left-6 top-0 w-1 bg-gradient-to-b from-green-light to-purple-light rounded-full hidden lg:block origin-top"
            />
            
            <div className="bg-gray/5 p-8 rounded-3xl border border-gray/10 shadow-sm">
              <p className="font-body text-lg text-black font-bold mb-3">
                Your competitors are winning right now.
              </p>
              <p className="font-body text-base text-gray leading-relaxed mb-6">
                They aren't smarter than you. They just showed up with the right strategy first. The gap is widening every month.
              </p>
              <a href="#services" className="inline-flex items-center gap-2 font-body font-bold text-sm text-purple-dark hover:text-green-dark transition-colors group uppercase tracking-widest">
                Close the gap 
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>

        </div>

        {/* 3 STAT CALLOUTS: Highly Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeUp}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative bg-white p-8 lg:p-10 rounded-3xl border border-gray/10 transition-all duration-300 shadow-sm hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] cursor-default ${stat.borderHover}`}
            >
              {/* Soft bloom effect on hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${stat.bgHover}`}></div>

              <div className="relative z-10 flex flex-col h-full justify-between">
                {/* Icon block scale animation effect on card hover */}
                <div className="w-14 h-14 bg-gray/5 rounded-2xl flex items-center justify-center mb-10 group-hover:bg-white group-hover:shadow-md group-hover:rotate-3 transition-all duration-300">
                  <stat.icon className={`w-7 h-7 ${stat.color} transition-transform group-hover:scale-110 duration-300`} />
                </div>
                
                <div>
                  <h3 className={`font-heading text-6xl lg:text-7xl font-bold tracking-tighter mb-4 ${stat.color}`}>
                    {stat.metric}
                  </h3>
                  <p className="font-body text-base md:text-lg text-black font-medium leading-relaxed">
                    {stat.text}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Transition Line */}
        <motion.div 
          variants={fadeUp}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div 
            whileInView={{ scale: [0.9, 1.1, 1], rotate: [0, 5, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray/5 mb-8"
          >
            <span className="text-4xl text-green-light font-heading leading-none pt-4">"</span>
          </motion.div>
          
          <h4 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-black leading-[1.2]">
            Showing up online without a strategy is like opening a shop with{" "}
            <span className="relative inline-block text-purple-dark whitespace-nowrap">
              no sign, no staff,
              {/* Progressive sketch underline line draws in on viewport check */}
              <motion.span 
                variants={underlineDraw}
                className="absolute bottom-2 left-0 h-3 bg-green-light/30 -z-10 skew-x-[-15deg] origin-left"
              />
            </span>{" "}
            and no idea who your customers are.
          </h4>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default MarketContext;