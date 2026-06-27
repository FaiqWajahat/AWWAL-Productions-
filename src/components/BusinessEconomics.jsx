"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, Activity, Wallet, PieChart, ArrowRight } from "lucide-react";

const BusinessEconomics = () => {
  // Advanced staggered animations
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

  const borderDraw = {
    rest: { width: "0%", opacity: 0 },
    hover: { 
      width: "100%", 
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" } 
    }
  };

  const painPoints = [
    "Spending on ads, but zero tracking.",
    "Website is live, but no customers.",
    "Boosting posts gets likes, not sales.",
    "Agencies send reports, not revenue."
  ];

  const metrics = [
    {
      id: "CAC",
      title: "Acquisition Cost",
      desc: "The exact cost to buy one customer. Don't fly blind.",
      icon: Target,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      lineColor: "bg-purple-500",
      glowColor: "group-hover:bg-purple-900/20",
      borderColor: "group-hover:border-purple-500/30",
      graphic: (
        <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "65%" }} 
            transition={{ duration: 1.2, delay: 0.2, ease: "circOut" }} 
            className="absolute top-0 left-0 h-full bg-purple-500 rounded-full" 
          />
        </div>
      )
    },
    {
      id: "LTV",
      title: "Lifetime Value",
      desc: "Total revenue per customer. Dictates your ad spend.",
      icon: Activity,
      color: "text-green-400",
      bgColor: "bg-green-900/20",
      lineColor: "bg-green-500",
      glowColor: "group-hover:bg-green-900/20",
      borderColor: "group-hover:border-green-500/30",
      graphic: (
        <div className="flex items-end gap-1.5 h-8 mt-2">
          <div className="w-1/3 bg-white/10 rounded-t-sm h-[40%]" />
          <div className="w-1/3 bg-white/20 rounded-t-sm h-[70%]" />
          <div className="w-1/3 bg-green-500 rounded-t-sm h-full" />
        </div>
      )
    },
    {
      id: "GP",
      title: "Gross Profit",
      desc: "Revenue minus costs. Crucial for scaling ad budgets safely.",
      icon: Wallet,
      color: "text-white",
      bgColor: "bg-white/10",
      lineColor: "bg-white",
      glowColor: "group-hover:bg-white/5",
      borderColor: "group-hover:border-white/20",
      graphic: (
        <div className="w-full h-2 bg-white/10 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            initial={{ width: 0 }} 
            whileInView={{ width: "40%" }} 
            transition={{ duration: 1.2, delay: 0.4, ease: "circOut" }} 
            className="h-full bg-white rounded-full" 
          />
        </div>
      )
    },
    {
      id: "LTV:CAC",
      title: "Golden Ratio",
      desc: "Spend £1 to make £3. The ultimate health check.",
      icon: PieChart,
      color: "text-purple-400",
      bgColor: "bg-purple-900/20",
      lineColor: "bg-purple-500",
      glowColor: "group-hover:bg-purple-900/20",
      borderColor: "group-hover:border-purple-500/30",
      graphic: (
        <div className="flex items-center gap-2 mt-4 font-heading font-bold text-3xl">
          <span className="text-gray-500">1 : </span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-200">
            3+
          </span>
        </div>
      )
    }
  ];

  return (
    <section id="economics" className="w-full bg-black text-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient Floating Elements */}
      <div className="absolute top-0 right-[-5%] w-[450px] h-[450px] bg-purple-900/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[550px] h-[550px] bg-green-900/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* PART 1: The Pain */}
        <div className="mb-24 lg:mb-36">
          <div className="text-center mb-14 relative">
            <motion.div 
              initial={{ opacity: 0, y: 10 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-sm mb-8"
            >
              <AlertCircle className="w-4 h-4 text-purple-400" />
              <span className="text-xs font-bold uppercase tracking-widest text-gray-300">The Reality Check</span>
            </motion.div>
            
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter text-white">
              Sound familiar?
            </h2>
          </div>

          <motion.div 
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="flex flex-wrap justify-center gap-4 md:gap-6 max-w-4xl mx-auto relative z-20"
          >
            {painPoints.map((point, i) => (
              <motion.div key={i} variants={springUp} className="relative">
                <div className="bg-white/5 backdrop-blur-sm px-6 py-4 rounded-2xl md:rounded-full border border-white/10 hover:border-white/20 transition-all cursor-default">
                  <p className="text-sm md:text-base font-medium text-gray-300">"{point}"</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* PART 2: The Solution */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-16 items-center relative">
          
          <motion.div 
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="xl:col-span-5 relative"
          >
            <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter leading-[1.05] mb-8">
              The mistake made <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-green-400 to-purple-400">
                before calling us.
              </span>
            </h3>
            
            <ul className="space-y-5 mb-10 border-l-2 border-white/10 pl-4">
              {["Building without knowing the buyer.", "Running ads without knowing LTV.", "Posting without strategy."].map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                  <span className="text-gray-300 font-medium text-lg">{item}</span>
                </li>
              ))}
            </ul>
            
            <p className="text-lg text-white font-medium mb-10 leading-relaxed bg-white/5 backdrop-blur-sm p-6 rounded-2xl border border-white/10">
              Marketing without knowing your numbers is pouring water into a leaky bucket.
            </p>
            
            <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full shadow-[0_10px_30px_rgba(255,255,255,0.1)] hover:scale-105 transition-all">
              <span className="font-bold tracking-wide uppercase text-sm">Get My Free Growth Audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>

          {/* Graphics Dashboard */}
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
                className={`group relative bg-white/5 backdrop-blur-md p-6 lg:p-8 rounded-[2rem] border border-white/10 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)] flex flex-col justify-between overflow-hidden ${metric.borderColor}`}
              >
                <motion.div variants={borderDraw} className={`absolute top-0 left-0 h-1.5 ${metric.lineColor} origin-left`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-2xl ${metric.bgColor} border border-white/5`}>
                      <metric.icon className={`w-6 h-6 ${metric.color}`} />
                    </div>
                    <span className="text-3xl md:text-4xl font-bold text-white/10">
                      {metric.id}
                    </span>
                  </div>
                  
                  <h4 className="text-xl font-bold text-white mb-2">{metric.title}</h4>
                  <p className="text-sm text-gray-400 font-medium leading-relaxed mb-6">
                    {metric.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 relative z-10">
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