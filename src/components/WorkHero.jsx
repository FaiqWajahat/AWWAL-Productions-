"use client";

import { motion } from "framer-motion";

const WorkHero = () => {
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
      
      {/* Brand-Specific Abstract Accents (Subtle & Minimalistic) */}
      <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <motion.div
        className="relative z-10 max-w-6xl mx-auto w-full flex flex-col items-center text-center"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
       

        {/* Headline */}
        <motion.h1
          variants={fadeUpVariants}
          className="font-heading text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter leading-[1] text-black mb-6"
        >
          See work that turns traffic  <br className="hidden lg:block" />
          into measurable 
          <span className="relative inline-block text-purple-dark px-2 ml-1">
            revenue.
            <motion.span 
              variants={lineVariants}
              className="absolute bottom-2 left-0 h-3 bg-purple-light/30 -z-10 skew-x-[-15deg] origin-left"
            />
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={fadeUpVariants}
          className="font-body text-lg sm:text-xl text-gray max-w-2xl mx-auto leading-relaxed font-medium"
        >
          Explore the digital ecosystems, high-converting platforms, and scaling ad campaigns driving $15M+ in client revenue.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default WorkHero;
