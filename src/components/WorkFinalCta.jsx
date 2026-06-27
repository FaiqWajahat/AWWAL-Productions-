"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

const WorkFinalCta = () => {
  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-center flex flex-col items-center">
      
      {/* Abstract Background Accents */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-purple-dark/20 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-green-light/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Ready to build your own success".split(" ").map((word, index) => (
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
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-light"
            >
              story?
            </motion.span>
          </h2>
          
          <p className="font-body text-white/70 font-medium text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Get a free audit of your current digital setup. We'll show you exactly where you're losing revenue and how to capture it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col items-center gap-6"
        >
          <Link 
            href="/audit"
            className="group relative flex items-center justify-center gap-2 bg-green-light text-black px-8 sm:px-12 py-5 sm:py-6 rounded-full shadow-[0_0_40px_rgba(175,206,48,0.15)] hover:shadow-[0_0_60px_rgba(175,206,48,0.3)] hover:bg-green-dark hover:text-white transition-all duration-300 w-full sm:w-auto font-body font-bold text-xl"
          >
            Get My Free Audit
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>

          {/* Trust Micro-copy */}
          <div className="flex items-center gap-2 text-white/60 font-body font-medium text-sm mt-2">
            <ShieldCheck className="w-4 h-4 text-green-light" />
            <span>Free 30-minute scoping session. No pressure, just strategy.</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WorkFinalCta;
