"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  // Clean, professional staggered animations
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
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
      transition: { duration:  1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      
      {/* Brand-Specific Abstract Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-light/20 rounded-full blur-[100px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-light/20 rounded-full blur-[100px] pointer-events-none z-0"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Headline leveraging your League Spartan font and Brand Colors */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1] text-black mb-8 max-w-5xl"
        >
          Your business deserves <br className="hidden lg:block" />
          <span className="relative inline-block text-purple-dark px-2">
            customers
            {/* Animated underline starting from 0 to full width */}
            <motion.span 
              variants={lineVariants}
              className="absolute bottom-2 left-0 h-3 bg-green-light/40 -z-10 skew-x-[-15deg] origin-left"
            />
          </span>
          , not just clicks.
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body text-base sm:text-lg md:text-xl text-gray max-w-3xl mx-auto mb-12 leading-relaxed"
        >
          Whether you're launching your first online business or tired of spending money on marketing that doesn't work — we build the strategy, the website, and the ads that turn your business into a growth machine.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          variants={fadeUpVariants} 
          className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <a
            href="https://wa.me/YOUR_PHONE_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 px-8 py-4 bg-green-light text-black font-body font-bold text-lg rounded-full hover:bg-green-dark hover:text-white transition-all duration-300 w-full sm:w-auto shadow-[0_8px_30px_rgba(175,206,48,0.3)] hover:shadow-[0_8px_30px_rgba(105,157,10,0.4)] hover:-translate-y-1"
          >
            <MessageCircle className="w-5 h-5 transition-colors group-hover:text-white" />
            <span>Get My Free Growth Audit</span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#results"
            className="group flex items-center justify-center gap-2 px-8 py-4 bg-white text-black border-2 border-black font-body font-bold text-lg rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto"
          >
            <span>See our results</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Trust Micro-copy */}
        <motion.div variants={fadeUpVariants} className="mt-8">
          <p className="text-sm font-body text-gray">
            Free. No commitment. We'll show you exactly what's holding your business back.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;