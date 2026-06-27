"use client";

import { motion } from "framer-motion";

const AuditHero = () => {
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
    <section className="relative w-full pt-32 pb-16 sm:pt-40 sm:pb-20 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center overflow-hidden bg-background text-foreground">
      
      {/* Brand-Specific Abstract Accents */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div
        className="relative z-10 max-w-4xl mx-auto w-full flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
       
        {/* Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter leading-[1] text-black mb-6"
        >
          Let's map out exactly what your business 
          <span className="relative inline-block text-green-dark px-2 ml-2">
            needs.
            <motion.span 
              variants={lineVariants}
              className="absolute bottom-2 left-0 h-3 bg-green-light/40 -z-10 skew-x-[-15deg] origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body text-lg sm:text-xl text-gray max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Request a free audit or a custom project quotation. We review your current digital ecosystem and provide a clear, actionable strategy.
        </motion.p>

      </motion.div>
    </section>
  );
};

export default AuditHero;
