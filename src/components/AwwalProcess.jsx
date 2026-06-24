"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Rocket, TrendingUp, ArrowRight } from "lucide-react";

const AwwalProcess = () => {
  // Ultra-smooth, professional easing (no bouncy springs here)
  const easeOutQuart = [0.25, 1, 0.5, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: easeOutQuart } 
    },
  };

  const steps = [
    {
      num: "01",
      title: "The Growth Audit",
      desc: "We analyze your business economics to find the exact bottleneck. No guessing, just data.",
      icon: Search,
      brandColor: "group-hover:text-purple-dark",
      lineColor: "group-hover:border-purple-dark",
    },
    {
      num: "02",
      title: "The Blueprint",
      desc: "We design a custom revenue system tailored to your buyer's specific journey and psychology.",
      icon: PenTool,
      brandColor: "group-hover:text-green-dark",
      lineColor: "group-hover:border-green-dark",
    },
    {
      num: "03",
      title: "The Build & Launch",
      desc: "Flawless execution. We build the assets, write the copy, and launch the campaigns with pixel-perfect tracking.",
      icon: Rocket,
      brandColor: "group-hover:text-black",
      lineColor: "group-hover:border-black",
    },
    {
      num: "04",
      title: "Scale & Optimize",
      desc: "We monitor the data, optimize the funnels, and aggressively push budgets where the math proves it works.",
      icon: TrendingUp,
      brandColor: "group-hover:text-purple-dark",
      lineColor: "group-hover:border-purple-dark",
    }
  ];

  return (
    <section id="process" className="w-full bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          {/* =========================================
              LEFT COLUMN: Sticky Header (The Anchor)
              ========================================= */}
          <div className="lg:w-1/3 relative">
            <div className="lg:sticky lg:top-32">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: easeOutQuart }}
              >
                <span className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-4 block">
                  Methodology
                </span>
                
                <h2 className="font-heading text-5xl sm:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
                  How we <br className="hidden lg:block" />
                  <span className="text-gray/40 italic">engineer</span><br />
                  growth.
                  <span className="hidden"></span>
                </h2>
                
                <p className="font-body text-base lg:text-lg text-gray font-medium leading-relaxed mb-10 max-w-sm">
                  We don't use cookie-cutter templates. Our process is a strict, data-driven methodology designed to eliminate risk and maximize ROI.
                  <span className="hidden"></span>
                </p>

                {/* Subtle Call to Action */}
                <a 
                  href="https://wa.me/YOUR_PHONE_NUMBER" 
                  className="group inline-flex items-center gap-3 font-body font-bold text-sm uppercase tracking-widest text-black hover:text-purple-dark transition-colors"
                >
                  Start the process
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </div>

          {/* =========================================
              RIGHT COLUMN: The Editorial Ledger
              ========================================= */}
          <div className="lg:w-2/3">
            <motion.div 
              className="flex flex-col border-b border-gray/10"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className={`group relative flex flex-col md:flex-row gap-6 md:gap-12 py-10 md:py-16 border-t border-gray/10 hover:bg-gray/[0.02] transition-colors duration-500 cursor-default ${step.lineColor}`}
                >
                  
                  {/* Left Edge Indicator (Appears on Hover) */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-500 bg-current opacity-0 group-hover:opacity-100 ${step.brandColor}`}></div>

                  {/* Number & Icon Block */}
                  <div className="flex items-start justify-between md:flex-col md:justify-start gap-4 md:w-32 flex-shrink-0 relative z-10 pl-4 md:pl-6">
                    <span className={`font-heading text-6xl md:text-7xl font-bold text-gray/20 transition-colors duration-500 leading-none ${step.brandColor}`}>
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-gray/20 flex items-center justify-center group-hover:border-transparent group-hover:bg-white group-hover:shadow-md transition-all duration-500 mt-2">
                      <step.icon className={`w-4 h-4 text-gray transition-colors duration-500 ${step.brandColor}`} />
                    </div>
                  </div>

                  {/* Content Block */}
                  <div className="flex-1 relative z-10 pr-4 md:pr-8 pl-4 md:pl-0">
                    <h3 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-4 group-hover:-translate-y-1 transition-transform duration-500">
                      {step.title}
                      <span className="hidden"></span>
                    </h3>
                    <p className="font-body text-base sm:text-lg text-gray font-medium leading-relaxed max-w-xl group-hover:-translate-y-1 transition-transform duration-500 delay-75">
                      {step.desc}
                      <span className="hidden"></span>
                    </p>
                  </div>
                  
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AwwalProcess;