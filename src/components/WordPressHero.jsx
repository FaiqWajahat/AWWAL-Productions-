"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";

const WordPressHero = () => {
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

  const lineVariants = {
    hidden: { width: 0 },
    visible: {
      width: "100%",
      transition: { duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col justify-center bg-background text-foreground px-4 sm:px-6 lg:px-8 pt-32 pb-20 overflow-hidden">
      
      {/* Brand-Specific Abstract Accents (Subtle & Minimalistic) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        
        {/* Top Badge */}
        <motion.div 
          variants={fadeUpVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray/20 bg-white/50 backdrop-blur-sm mb-8 sm:mb-10"
        >
          <span className="w-2 h-2 rounded-full bg-orange-500" />
          <span className="font-body text-xs sm:text-sm font-bold uppercase tracking-widest text-black">WordPress Development</span>
        </motion.div>

        {/* Headline leveraging League Spartan font and Brand Colors */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1] text-black mb-6"
        >
          Stop using templates. <br className="hidden lg:block" />
          Build a conversion 
          <span className="relative inline-block text-orange-600 px-2">
            machine.
            {/* Animated underline starting from 0 to full width */}
            <motion.span 
              variants={lineVariants}
              className="absolute bottom-2 left-0 h-3 bg-orange-500/20 -z-10 skew-x-[-15deg] origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline (Concise & Minimal) */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body text-lg sm:text-xl text-gray max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
        >
          We build custom WordPress websites designed specifically to turn your traffic into customers.
        </motion.p>

        {/* CTA Group */}
        <motion.div 
          variants={fadeUpVariants} 
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          {/* Primary CTA */}
          <Link
            href="/contact"
            className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-green-light text-black font-body font-bold text-base rounded-full hover:bg-green-dark hover:text-white transition-all duration-300 w-full sm:w-auto shadow-[0_8px_30px_rgba(175,206,48,0.2)] hover:shadow-[0_8px_30px_rgba(105,157,10,0.3)] hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5 transition-colors group-hover:text-white" />
            <span>Get Free Website Consultation</span>
          </Link>

          {/* Secondary CTA */}
          <a
            href="#results"
            className="group flex items-center justify-center gap-1.5 px-8 py-3.5 bg-transparent text-black border border-black font-body font-semibold text-base rounded-full hover:bg-black hover:text-white transition-all duration-300 w-full sm:w-auto hover:-translate-y-0.5"
          >
            <span>See websites we've built</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WordPressHero;
