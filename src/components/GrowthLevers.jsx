"use client";

import { motion } from "framer-motion";

const GrowthLevers = () => {
  // Advanced staggering and spring physics for maximum fluid motion
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const springUp = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 12, mass: 1 } 
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15, delay: 0.3 }
    }
  };

  const lineDraw = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%", 
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } 
    }
  };

  const levers = [
    {
      number: "01",
      title: "Get more customers",
      description: "More people buying from you for the first time. This is where most businesses start — and where most agencies stop.",
      brandColor: "bg-purple-dark",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(107,33,168,0.15)]",
      textColor: "group-hover:text-purple-dark"
    },
    {
      number: "02",
      title: "Increase what each customer spends",
      description: "Raise your prices. Add upsells. Bundle products. A 20% increase in average order value has the same effect as a 20% increase in customers — with zero extra ad spend.",
      brandColor: "bg-green-dark",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(21,128,61,0.15)]",
      textColor: "group-hover:text-green-dark"
    },
    {
      number: "03",
      title: "Get customers to buy more often",
      description: "A customer who buys twice is worth twice as much as one who buys once. Retention, loyalty, and re-marketing are the most underused growth levers in most businesses.",
      brandColor: "bg-black",
      shadowHover: "hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]",
      textColor: "group-hover:text-black"
    }
  ];

  // Split text for dynamic word-by-word reveal
  const headingWords = "Every business on earth grows the same".split(" ");

  return (
    <section id="growth-levers" className="relative w-full bg-white text-black py-24 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      
      {/* Ambient Floating Background Elements */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 10, -10, 0]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-96 h-96 bg-purple-light/10 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -15, 10, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-10 right-10 w-[30rem] h-[30rem] bg-green-light/10 rounded-full blur-[100px] pointer-events-none"
      />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        
        {/* Top Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-24 lg:mb-36">
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.05] text-black flex flex-wrap gap-x-3 gap-y-1">
              {headingWords.map((word, index) => (
                <motion.span 
                  key={index}
                  variants={springUp}
                  className="inline-block"
                  whileHover={{ scale: 1.1, rotate: Math.random() * 10 - 5, color: "#000" }}
                >
                  {word}
                </motion.span>
              ))}
              <motion.span 
                variants={springUp}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-dark to-purple-light"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                3 ways.
              </motion.span>
            </h2>
          </div>
          
          <div className="flex flex-col justify-center gap-6 overflow-hidden">
            <motion.div variants={slideInRight} className="relative pl-6">
              {/* Animated left border indicator */}
              <motion.div 
                className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-green-light to-purple-light rounded-full origin-top"
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{ duration: 1, ease: "circOut", delay: 0.5 }}
              />
              <p className="font-body text-xl md:text-2xl text-black font-extrabold leading-relaxed tracking-wide uppercase">
                Understanding this changes how you spend every marketing dollar.
              </p>
            </motion.div>
            
            <motion.p 
              variants={slideInRight}
              className="font-body text-base md:text-lg text-gray leading-relaxed pl-6"
            >
              Before you run a single ad or build a single page, you need to understand how your business actually makes money. There are only three ways to grow any business — online or offline.
            </motion.p>
          </div>
        </div>

        {/* The 3 Levers - Ultra Animated Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
          
          {/* Animated background connecting line across desktop */}
          <motion.div 
            className="hidden md:block absolute top-0 left-0 right-0 h-[2px] bg-gray/10 -z-10"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ originX: 0 }}
          />

          {levers.map((lever, index) => (
            <motion.div 
              key={index} 
              variants={springUp}
              whileHover={{ 
                y: -15, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className={`flex flex-col group relative bg-white/50 backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-gray/5 transition-all duration-500 z-10 ${lever.shadowHover}`}
            >
              {/* Sharp Top Border that draws in initially, then fills on hover */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gray/10 rounded-t-3xl overflow-hidden">
                <motion.div 
                  variants={lineDraw}
                  className="h-full bg-gray/30 w-full origin-left"
                />
                <div className={`absolute top-0 left-0 h-full w-0 ${lever.brandColor} transition-all duration-500 ease-out group-hover:w-full`}></div>
              </div>

              {/* Giant Typography Number with bounce and color shift on hover */}
              <motion.div 
                className={`font-heading text-7xl md:text-8xl font-black text-gray/10 mb-8 transition-colors duration-500 ${lever.textColor}`}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: [0, -5, 5, -2, 0],
                  transition: { duration: 0.5 }
                }}
              >
                {lever.number}.
              </motion.div>

              {/* Content with stagger within card on hover */}
              <motion.h3 
                className="font-heading text-2xl md:text-3xl font-bold text-black mb-4 leading-tight"
              >
                {lever.title}
              </motion.h3>
              
              <motion.p 
                className="font-body text-base md:text-lg text-gray leading-relaxed relative"
              >
                {lever.description}
              </motion.p>

              {/* Decorative floating arrow that appears on hover */}
              <motion.div 
                className="absolute bottom-8 right-8 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-full ${lever.brandColor} text-white flex items-center justify-center shadow-lg`}>
                  →
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </section>
  );
};

export default GrowthLevers;