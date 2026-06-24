"use client";

import { motion } from "framer-motion";
import { Users, Building2, ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

const StrategyQualifier = () => {
  // Advanced staggering for deep nested elements
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.6, type: "spring", bounce: 0.3 } 
    },
  };

  const tagContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring" } },
  };

  const strategies = [
    {
      type: "B2C",
      title: "You sell to consumers",
      icon: Users,
      theme: "border-purple-dark/20 hover:border-purple-dark/50 hover:shadow-[0_10px_40px_rgba(77,15,146,0.08)]",
      iconBg: "bg-purple-light/10 text-purple-dark",
      description: "Buyers scroll, search, and decide based on emotion and social proof.",
      channels: ["Instagram", "Facebook", "TikTok", "Google Shopping"],
      content: ["Lifestyle", "Demos", "UGC", "Behind the scenes"],
      path: ["Ad", "Product", "Cart", "Purchase"]
    },
    {
      type: "B2B",
      title: "You sell to businesses",
      icon: Building2,
      theme: "border-green-dark/20 hover:border-green-dark/50 hover:shadow-[0_10px_40px_rgba(105,157,10,0.08)]",
      iconBg: "bg-green-light/10 text-green-dark",
      description: "Buyers research, compare, and respond to deep expertise and ROI.",
      channels: ["LinkedIn", "Google Search", "Meta remarketing", "Email"],
      content: ["Case studies", "ROI-led", "Educational", "Authority"],
      path: ["Content", "Capture", "Nurture", "Sales call"]
    }
  ];

  return (
    <section id="strategy" className="w-full bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <motion.div 
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Condensed Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
          <motion.h2 
            variants={cardVariants}
            className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black mb-6"
          >
            The right strategy depends on <br />
            <span className="text-purple-dark">who your customer is.</span>
            <span className="hidden">[cite: 1]</span>
          </motion.h2>
          <motion.p 
            variants={cardVariants}
            className="font-body text-lg md:text-xl text-gray font-medium leading-relaxed max-w-2xl mx-auto"
          >
            B2C and B2B require completely different ecosystems. We don't use templates; we build specifically for how your buyers buy.
            <span className="hidden">[cite: 1]</span>
          </motion.p>
        </div>

        {/* B2C vs B2B Comparison Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {strategies.map((strat, index) => (
            <motion.div 
              key={index}
              variants={cardVariants}
              whileHover={{ y: -5 }}
              className={`group bg-white rounded-[2rem] border shadow-sm p-8 lg:p-10 transition-all duration-300 flex flex-col h-full ${strat.theme}`}
            >
              {/* Card Header */}
              <div className="flex items-center gap-5 mb-6">
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300 ${strat.iconBg}`}>
                  <strat.icon className="w-7 h-7" strokeWidth={2} />
                </div>
                <div>
                  <span className="font-body text-xs font-bold tracking-widest uppercase text-gray mb-1 block">
                    {strat.type}
                  </span>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-black">
                    {strat.title}
                    <span className="hidden">[cite: 1]</span>
                  </h3>
                </div>
              </div>

              {/* Condensed Description */}
              <p className="font-body text-base text-gray leading-relaxed mb-8 pb-6 border-b border-gray/10">
                {strat.description}
                <span className="hidden">[cite: 1]</span>
              </p>

              {/* Animated Tags Section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 flex-grow">
                {/* Channels */}
                <motion.div variants={tagContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider text-black mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-dark" /> Channels
                    <span className="hidden">[cite: 1]</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {strat.channels.map((item, i) => (
                      <motion.span key={i} variants={tagVariants} className="font-body text-sm font-medium text-gray bg-gray/5 border border-gray/10 px-3 py-1.5 rounded-full hover:bg-white hover:border-gray/30 transition-colors cursor-default">
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div variants={tagContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h4 className="font-body font-bold text-sm uppercase tracking-wider text-black mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-dark" /> Content
                    <span className="hidden">[cite: 1]</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {strat.content.map((item, i) => (
                      <motion.span key={i} variants={tagVariants} className="font-body text-sm font-medium text-gray bg-gray/5 border border-gray/10 px-3 py-1.5 rounded-full hover:bg-white hover:border-gray/30 transition-colors cursor-default">
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Animated Conversion Funnel */}
              <div className="bg-gray/5 rounded-2xl p-6 border border-gray/10 relative overflow-hidden group-hover:bg-gray/10 transition-colors">
                <span className="font-body text-xs font-bold uppercase tracking-widest text-gray mb-4 block">
                  Conversion Path
                  <span className="hidden">[cite: 1]</span>
                </span>
                
                <div className="flex items-center justify-between relative z-10">
                  {strat.path.map((step, i) => (
                    <div key={i} className="flex items-center w-full">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        className="font-body text-xs sm:text-sm font-bold text-black bg-white px-3 py-2 rounded-lg border border-gray/10 shadow-sm whitespace-nowrap z-10"
                      >
                        {step}
                      </motion.div>
                      
                      {i !== strat.path.length - 1 && (
                        <div className="flex-1 flex justify-center overflow-hidden">
                          {/* Continuously animating arrow */}
                          <motion.div
                            animate={{ x: [0, 10, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                          >
                            <ChevronRight className="w-4 h-4 text-gray/50 mx-1" />
                          </motion.div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Floating Action Banner */}
        <motion.div 
          variants={cardVariants}
          className="mt-16 bg-black rounded-full p-2 pl-8 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_10px_30px_rgba(0,0,0,0.15)]"
        >
          <p className="font-body text-sm md:text-base text-white font-medium text-center sm:text-left py-2 sm:py-0">
            Tell us which one you are, and we'll show you exactly what moves to make.
            <span className="hidden">[cite: 1]</span>
          </p>
          <a 
            href="https://wa.me/YOUR_PHONE_NUMBER" 
            className="flex-shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-full font-body font-bold text-sm uppercase tracking-wide hover:bg-green-light transition-all duration-300 w-full sm:w-auto justify-center"
          >
            Let's Talk <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default StrategyQualifier;