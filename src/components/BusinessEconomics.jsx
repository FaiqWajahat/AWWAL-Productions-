"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, Activity, Wallet, PieChart, ArrowRight } from "lucide-react";

const BusinessEconomics = () => {
  // Advanced staggered animations for smooth entry
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const springUp = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -40 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const borderDraw = {
    rest: { width: "0%", opacity: 0 },
    hover: { 
      width: "100%", 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  // Ultra-condensed Pain Points
  const painPoints = [
    "Spending on ads, but zero tracking.",
    "Website is live, but no customers.",
    "Boosting posts gets likes, not sales.",
    "Agencies send reports, not revenue."
  ];

  // Condensed Economics Data with Dashboard Graphics
  const metrics = [
    {
      id: "CAC",
      title: "Acquisition Cost",
      desc: "The exact cost to buy one customer. Don't fly blind.",
      icon: Target,
      color: "text-purple-dark",
      bgColor: "bg-purple-light/10",
      lineColor: "bg-purple-dark",
      glowColor: "group-hover:bg-purple-light/10",
      borderColor: "group-hover:border-purple-dark/30",
      graphic: (
        <div className="w-full h-2 bg-gray/10 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "65%" }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }} 
            className="absolute top-0 left-0 h-full bg-purple-dark rounded-full" 
          />
          <motion.div 
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 1 }}
            className="absolute top-0 left-0 h-full w-1/3 bg-white/30 rounded-full"
          />
        </div>
      )
    },
    {
      id: "LTV",
      title: "Lifetime Value",
      desc: "Total revenue per customer. Dictates your ad spend.",
      icon: Activity,
      color: "text-green-dark",
      bgColor: "bg-green-light/10",
      lineColor: "bg-green-dark",
      glowColor: "group-hover:bg-green-light/10",
      borderColor: "group-hover:border-green-dark/30",
      graphic: (
        <div className="flex items-end gap-1.5 h-8 mt-2">
          <motion.div 
            initial={{ height: "20%" }} 
            whileInView={{ height: "40%" }} 
            transition={{ duration: 0.8, delay: 0.1 }}
            className="w-1/3 bg-green-light/40 rounded-t-sm" 
          />
          <motion.div 
            initial={{ height: "20%" }} 
            whileInView={{ height: "70%" }} 
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-1/3 bg-green-light/70 rounded-t-sm" 
          />
          <motion.div 
            initial={{ height: "20%" }} 
            whileInView={{ height: "100%" }} 
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-1/3 bg-green-dark rounded-t-sm relative overflow-hidden"
          >
            <motion.div animate={{ y: ["100%", "-100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} className="absolute inset-0 bg-white/20" />
          </motion.div>
        </div>
      )
    },
    {
      id: "GP",
      title: "Gross Profit",
      desc: "Revenue minus costs. Crucial for scaling ad budgets safely.",
      icon: Wallet,
      color: "text-black",
      bgColor: "bg-gray/10",
      lineColor: "bg-black",
      glowColor: "group-hover:bg-gray/5",
      borderColor: "group-hover:border-black/20",
      graphic: (
        <div className="w-full h-2 bg-gray/10 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "40%" }} 
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }} 
            className="h-full bg-black rounded-full" 
          />
        </div>
      )
    },
    {
      id: "LTV:CAC",
      title: "Golden Ratio",
      desc: "Spend £1 to make £3. The ultimate health check.",
      icon: PieChart,
      color: "text-purple-dark",
      bgColor: "bg-purple-light/10",
      lineColor: "bg-purple-dark",
      glowColor: "group-hover:bg-purple-light/10",
      borderColor: "group-hover:border-purple-dark/30",
      graphic: (
        <div className="flex items-center gap-2 mt-4 font-heading font-bold text-3xl">
          <span className="text-gray/50">1 : </span>
          <motion.span 
            initial={{ opacity: 0, scale: 0 }} 
            whileInView={{ opacity: 1, scale: 1 }} 
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ 
              opacity: { type: "spring", delay: 0.6 },
              scale: { type: "spring", delay: 0.6 },
              backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" }
            }} 
            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-dark to-purple-light"
            style={{ backgroundSize: "200% auto" }}
          >
            3+
          </motion.span>
        </div>
      )
    }
  ];

  return (
    <section id="economics" className="w-full bg-gray/5 text-black py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient Floating Elements */}
      <motion.div 
        animate={{ 
          y: [0, -40, 0], 
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 15, -15, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-[-5%] w-[450px] h-[450px] bg-purple-light/5 rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, 50, 0], 
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, -10, 10, 0]
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-green-light/5 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* PART 1: The Pain (Agitation) */}
        <div className="mb-24 lg:mb-36">
          <div className="text-center mb-14 relative">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-gray/10 shadow-sm mb-8"
            >
              <AlertCircle className="w-4 h-4 text-purple-dark" />
              <span className="text-xs font-body font-bold uppercase tracking-widest text-gray">The Reality Check</span>
            </motion.div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-black flex justify-center flex-wrap gap-x-3 gap-y-2">
              {"Sound familiar?".split(" ").map((word, i) => (
                <motion.span 
                  key={i}
                  variants={springUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="inline-block"
                  whileHover={{ y: -5, rotate: Math.random() * 6 - 3 }}
                >
                  {word}
                </motion.span>
              ))}
            </h2>
          </div>

          {/* Floating Masonry Quotes */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto relative z-20"
          >
            {painPoints.map((point, i) => (
              <motion.div 
                key={i} 
                variants={springUp}
                className="relative"
              >
                {/* Continuous floating animation wrapper */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut", 
                    delay: i * 0.4 // Stagger the floating effect 
                  }}
                  whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.2 } }}
                  className="bg-white px-6 py-4 rounded-2xl md:rounded-full border border-gray/10 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-shadow cursor-default"
                >
                  <p className="font-body text-sm md:text-base font-medium text-gray">"{point}"</p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center font-body text-gray font-medium mt-12 max-w-2xl mx-auto text-lg"
          >
            This is the difference between a business that scales and one that stalls.
          </motion.p>
        </div>

        {/* PART 2: The Solution (Business Economics) */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center relative">
          
          {/* Connecting line hidden on small screens */}
          <motion.div 
            className="hidden xl:block absolute top-1/2 left-[40%] right-0 h-[1px] bg-gradient-to-r from-transparent via-gray/20 to-transparent -z-10"
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 2, ease: "easeInOut" }}
          />

          {/* Text & Hook */}
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:col-span-5 relative"
          >
            {/* Animated left border indicator */}
            <motion.div 
              className="absolute -left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-dark to-green-dark rounded-full origin-top hidden md:block"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1.2, ease: "circOut", delay: 0.4 }}
            />

            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-8">
              The mistake made <br/>
              <motion.span 
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-dark via-green-dark to-purple-dark mt-2"
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                before calling us.
              </motion.span>
            </h3>
            
            <ul className="space-y-5 mb-10 border-l-2 md:border-l-0 border-gray/10 pl-4 md:pl-0">
              {["Building without knowing the buyer.", "Running ads without knowing LTV.", "Posting without strategy."].map((item, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4"
                >
                  <div className="w-2 h-2 rounded-full bg-green-dark flex-shrink-0 shadow-[0_0_10px_rgba(21,128,61,0.5)]" />
                  <span className="font-body text-gray font-medium text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
            
            <p className="font-body text-lg text-black font-bold mb-10 leading-relaxed bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-gray/5 shadow-sm">
              Marketing without knowing your numbers is pouring water into a leaky bucket.
            </p>
            
            <motion.a 
              href="https://wa.me/YOUR_PHONE_NUMBER" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-black text-white rounded-full overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
            >
              {/* Sweeping background gradient inside button */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-dark via-green-dark to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% auto' }}></div>
              
              <span className="relative z-10 font-body text-sm font-bold tracking-wide uppercase">
                Get My Free Growth Audit
              </span>
              
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10"
              >
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.div>
            </motion.a>
          </motion.div>

          {/* Graphics: 4 Numbers Dashboard Widget */}
          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
          >
            {metrics.map((metric, i) => (
              <motion.div 
                key={i}
                variants={springUp}
                initial="rest"
                whileHover="hover"
                animate="rest"
                className={`group relative bg-white/80 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] border border-gray/10 transition-all duration-500 shadow-sm hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] flex flex-col justify-between overflow-hidden cursor-default ${metric.borderColor}`}
              >
                {/* Soft Background Bloom on Hover */}
                <div className={`absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${metric.glowColor}`}></div>

                {/* Dynamic Top Border Line that draws on hover */}
                <motion.div 
                  variants={borderDraw}
                  className={`absolute top-0 left-0 h-1.5 ${metric.lineColor} origin-left z-20`}
                />

                <div className="relative z-10">
                  {/* Metric Icon Header */}
                  <div className="flex justify-between items-start mb-6">
                    <motion.div 
                      className={`p-3 rounded-2xl ${metric.bgColor} transition-colors duration-300 shadow-sm border border-transparent`}
                      variants={{
                        hover: { scale: 1.1, rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }
                      }}
                    >
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </motion.div>
                    
                    <span className="font-heading text-3xl md:text-4xl font-bold text-gray/10 group-hover:text-gray/20 transition-colors duration-300">
                      {metric.id}
                    </span>
                  </div>
                  
                  {/* Metric Info */}
                  <h4 className="font-heading text-xl font-bold text-black mb-2">{metric.title}</h4>
                  <p className="font-body text-sm text-gray font-medium leading-relaxed mb-6">
                    {metric.desc}
                  </p>
                </div>

                {/* Simulated Graphic / Chart */}
                <div className="pt-4 border-t border-gray/5 relative z-10">
                  {metric.graphic}
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default BusinessEconomics;