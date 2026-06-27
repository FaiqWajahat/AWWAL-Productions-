"use client";

import { motion } from "framer-motion";

const AboutHero = () => {
  const easeOutQuart = [0.25, 1, 0.5, 1];

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: easeOutQuart } 
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  // Underline animation variant
  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, delay: 0.6, ease: easeOutQuart }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center items-center bg-background text-foreground px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      
      {/* Brand-Specific Floating Background Accents */}
      <motion.div 
        animate={{ 
          y: [0, 30, 0], 
          x: [0, -20, 0],
          scale: [1, 1.1, 1] 
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ 
          y: [0, -30, 0], 
          x: [0, 20, 0],
          scale: [1, 1.05, 1] 
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Headline leveraging League Spartan font and Brand Colors */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1] text-black mb-6"
        >
          We Started Awwal Because You deserve  <br className="hidden lg:block" />
          better than 
          <span className="relative inline-block text-purple-dark px-1">
            guesswork.
            {/* Animated underline starting from 0 to full width */}
            <motion.span 
              variants={lineVariants}
              className="absolute bottom-2 left-0 h-3 bg-green-light/40 -z-10 skew-x-[-15deg] origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline (Concise & Focused) */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body text-lg sm:text-xl text-gray max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We are a performance marketing and web engineering agency built for business owners who demand measurable results.
        </motion.p>

       

      </motion.div>
    </section>
  );
};

export default AboutHero;