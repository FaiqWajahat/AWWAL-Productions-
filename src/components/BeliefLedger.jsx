"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldAlert } from "lucide-react";

const BeliefLedger = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 20 } 
    },
  };

  const beliefs = [
    {
      title: "Economics First",
      desc: "Marketing is an expensive guess without mastering your profit margins. We define economics before spending a rupee.",
      theme: {
        text: "text-purple-dark",
        bg: "bg-gradient-to-r from-purple-light to-purple-dark",
        borderHover: "hover:border-purple-dark/30",
        hoverBg: "group-hover:bg-purple-light/10",
      }
    },
    {
      title: "Revenue Over Reach",
      desc: "We optimize purely for your corporate bottom line. Impressions don't matter if they don't convert to sales.",
      theme: {
        text: "text-green-dark",
        bg: "bg-gradient-to-r from-green-light to-green-dark",
        borderHover: "hover:border-green-dark/30",
        hoverBg: "group-hover:bg-green-light/10",
      }
    },
    {
      title: "Zero Blind Spend",
      desc: "We install bulletproof tracking architectures before spending a pound. Without tracking, you're just donating to ad networks.",
      theme: {
        text: "text-purple-dark",
        bg: "bg-gradient-to-r from-purple-light to-purple-dark",
        borderHover: "hover:border-purple-dark/30",
        hoverBg: "group-hover:bg-purple-light/10",
      }
    },
    {
      title: "Research Beats Execution",
      desc: "Every blueprint starts with deep data architecture and global audits mapped precisely to local behaviors.",
      theme: {
        text: "text-green-dark",
        bg: "bg-gradient-to-r from-green-light to-green-dark",
        borderHover: "hover:border-green-dark/30",
        hoverBg: "group-hover:bg-green-light/10",
      }
    },
    {
      title: "Radical Honesty",
      desc: "We prioritize truth over account retention. If scaling objectives don't match margins, we tell you immediately.",
      theme: {
        text: "text-purple-dark",
        bg: "bg-gradient-to-r from-purple-light to-purple-dark",
        borderHover: "hover:border-purple-dark/30",
        hoverBg: "group-hover:bg-purple-light/10",
      }
    },
    {
      title: "Long-Term Partners",
      desc: "We don't ship and walk away. The real optimization cycle begins post-launch to ensure continuous growth.",
      theme: {
        text: "text-green-dark",
        bg: "bg-gradient-to-r from-green-light to-green-dark",
        borderHover: "hover:border-green-dark/30",
        hoverBg: "group-hover:bg-green-light/10",
      }
    }
  ];

  const headingWords = "The rules we live by.".split(" ");

  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-t border-gray/10 relative overflow-hidden">
      
      {/* Floating Ambient Mesh Orbs */}
      <motion.div 
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[-5%] w-[600px] h-[600px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none z-0"
      />
      <motion.div 
        animate={{ y: [0, 40, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Centered Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray/5 rounded-full border border-gray/10 mb-6 shadow-sm">
            <ShieldAlert className="w-4 h-4 text-purple-dark" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-gray">Operational Architecture</span>
          </div>
          
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-4xl mx-auto">
            <div className="flex gap-x-3 flex-wrap justify-center">
              {headingWords.map((word, index) => (
                <motion.span 
                  key={index}
                  variants={fadeUp}
                  className="inline-block"
                  whileHover={{ y: -5, rotate: (index % 2 === 0 ? 3 : -3) }}
                >
                  {word}
                </motion.span>
              ))}
            </div>
            
            <motion.span 
              variants={fadeUp}
              className="inline-block text-green-dark w-full text-center"
            >
              No exceptions.
            </motion.span>
          </h2>

          <p className="font-body text-gray font-medium text-lg max-w-2xl">
            This is the unbending framework that protects your budget and drives our execution.
          </p>
        </motion.div>

        {/* Animated Grid of Cards */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {beliefs.map((belief, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className={`group relative bg-white/60 backdrop-blur-md border border-gray/10 rounded-3xl p-8 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1.5 cursor-default ${belief.theme.borderHover}`}
            >
              {/* Giant Background Numbering */}
              <div className="absolute -right-4 -bottom-6 text-[140px] leading-none font-heading font-black text-gray/[0.03] group-hover:text-gray/5 transition-colors duration-500 pointer-events-none select-none z-0">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Animated Top Accent Border */}
              <motion.div 
                variants={{ hover: { width: "100%", opacity: 1 } }}
                initial={{ width: "0%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`absolute left-0 top-0 h-1.5 rounded-t-3xl ${belief.theme.bg} z-20`}
              />

              <div className="relative z-10 flex flex-col h-full">
                {/* Icon Container with Hover Animation */}
                <motion.div 
                  variants={{ hover: { scale: 1.1, rotate: [0, -10, 10, 0] } }}
                  transition={{ duration: 0.5 }}
                  className={`w-14 h-14 rounded-2xl bg-gray/5 flex items-center justify-center text-gray transition-colors duration-300 shadow-sm border border-transparent mb-8 ${belief.theme.hoverBg} group-hover:${belief.theme.text} group-hover:border-current`}
                >
                  <CheckCircle2 className="w-7 h-7" />
                </motion.div>

                {/* Card Text Content */}
                <h3 className="font-heading text-2xl font-bold text-black mb-3 transition-transform duration-300 group-hover:translate-x-1">
                  {belief.title}
                </h3>
                <p className="font-body text-base text-gray font-medium leading-relaxed">
                  {belief.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default BeliefLedger;