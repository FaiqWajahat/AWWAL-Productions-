"use client";

import { motion } from "framer-motion";
import { 
  MonitorSmartphone, 
  Search, 
  Code2, 
  ShoppingBag, 
  LayoutTemplate, 
  Share2, 
  ArrowUpRight 
} from "lucide-react";

const ServicesOverview = () => {
  // Advanced staggering and spring physics
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const springUp = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 15 } 
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 80, damping: 15 }
    }
  };

  // Dynamic border draw for the cards
  const borderDraw = {
    rest: { width: "0%", opacity: 0 },
    hover: { 
      width: "100%", 
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  // Service Data matched to your core offerings 
  const services = [
    {
      title: "Meta Ads",
      desc: "Reach the exact people who want what you sell — and turn them into paying customers.",
      icon: MonitorSmartphone,
      brandGlow: "group-hover:bg-purple-light/10",
      borderColor: "group-hover:border-purple-dark/40",
      iconColor: "text-purple-dark",
      lineColor: "bg-purple-dark"
    },
    {
      title: "Google Ads",
      desc: "Capture buyers at the moment they're actively searching for your product or service.",
      icon: Search,
      brandGlow: "group-hover:bg-green-light/10",
      borderColor: "group-hover:border-green-dark/40",
      iconColor: "text-green-dark",
      lineColor: "bg-green-dark"
    },
    {
      title: "Custom Web",
      desc: "Built exactly for how your business works — no templates, no limits.",
      icon: Code2,
      brandGlow: "group-hover:bg-purple-light/10",
      borderColor: "group-hover:border-purple-dark/40",
      iconColor: "text-purple-dark",
      lineColor: "bg-purple-dark"
    },
    {
      title: "Shopify Dev",
      desc: "An online store designed to sell — from the first product page to the checkout button.",
      icon: ShoppingBag,
      brandGlow: "group-hover:bg-green-light/10",
      borderColor: "group-hover:border-green-dark/40",
      iconColor: "text-green-dark",
      lineColor: "bg-green-dark"
    },
    {
      title: "WordPress",
      desc: "A fast, custom, conversion-optimized website that works as hard as you do.",
      icon: LayoutTemplate,
      brandGlow: "group-hover:bg-purple-light/10",
      borderColor: "group-hover:border-purple-dark/40",
      iconColor: "text-purple-dark",
      lineColor: "bg-purple-dark"
    },
    {
      title: "Social Media",
      desc: "Consistent, strategic content that builds an audience and drives them to your business.",
      icon: Share2,
      brandGlow: "group-hover:bg-gray/5",
      borderColor: "group-hover:border-black/30",
      iconColor: "text-black",
      lineColor: "bg-black"
    }
  ];

  const headingWords = "Six ways we build".split(" ");

  return (
    <section id="services" className="w-full bg-white py-24 lg:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Ambient Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, 40, 0], 
          x: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 45, 0]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-purple-light/10 rounded-full blur-[120px] pointer-events-none"
      />
      <motion.div 
        animate={{ 
          y: [0, -40, 0], 
          x: [0, 30, 0],
          scale: [1, 1.1, 1],
          rotate: [0, -45, 0]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-green-light/10 rounded-full blur-[120px] pointer-events-none"
      />

      <motion.div 
        className="max-w-7xl mx-auto relative z-10"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-10">
          <div className="flex-1">
            <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.05] flex flex-wrap gap-x-4 gap-y-2">
              {/* Staggered Word Reveal */}
              <div className="w-full flex gap-x-3 flex-wrap">
                {headingWords.map((word, index) => (
                  <motion.span 
                    key={index}
                    variants={springUp}
                    className="inline-block"
                    whileHover={{ y: -5, rotate: (index % 2 === 0 ? 3 : -3) }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
              
              {/* Continuously Shimmering Gradient Text */}
              <motion.span 
                variants={springUp}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-purple-dark via-green-dark to-purple-dark w-full"
                animate={{ backgroundPosition: ["0% 50%", "200% 50%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% auto" }}
              >
                revenue systems.
              </motion.span> 
            </h2>
          </div>

          <motion.div variants={slideInLeft} className="max-w-md relative pl-6">
            {/* Animated left border that draws down */}
            <motion.div 
              className="absolute left-0 top-0 bottom-0 w-1 bg-green-light origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, ease: "circOut", delay: 0.4 }}
            />
            <p className="font-body text-lg md:text-xl text-gray font-medium leading-relaxed">
              Every service is built around your business goals — not just deliverables. We identify the lever that moves you fastest, and we build that. 
            </p>
          </motion.div>
        </div>

        {/* Highly Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={springUp}
              initial="rest"
              whileHover="hover"
              animate="rest"
              className={`group relative bg-white/60 backdrop-blur-md border border-gray/10 shadow-sm rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 overflow-hidden cursor-pointer ${service.borderColor}`}
            >
              {/* Dynamic Top Border Line that draws on hover */}
              <motion.div 
                variants={borderDraw}
                className={`absolute top-0 left-0 h-1.5 ${service.lineColor} origin-left z-20`}
              />

              {/* Soft Background Bloom on Hover */}
              <div className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none ${service.brandGlow}`}></div>

              {/* Top Row: Icon & Arrow */}
              <div className="flex justify-between items-start mb-12 relative z-10">
                {/* Icon Container with continuous hover pulse */}
                <motion.div 
                  className="p-4 rounded-2xl bg-gray/5 group-hover:bg-white transition-colors duration-300 shadow-sm border border-transparent group-hover:border-gray/10"
                  variants={{
                    hover: { scale: 1.1, rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }
                  }}
                >
                  <service.icon className={`w-8 h-8 ${service.iconColor}`} strokeWidth={1.5} />
                </motion.div>
                
                {/* Arrow Button with fly-out fly-in effect */}
                <div className="w-12 h-12 rounded-full border border-gray/10 flex items-center justify-center bg-transparent group-hover:bg-black transition-all duration-500 overflow-hidden relative">
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 0 },
                      hover: { x: 30, y: -30, transition: { duration: 0.3 } }
                    }}
                    className="absolute"
                  >
                    <ArrowUpRight className="w-5 h-5 text-gray" />
                  </motion.div>
                  <motion.div
                    variants={{
                      rest: { x: -30, y: 30 },
                      hover: { x: 0, y: 0, transition: { duration: 0.3, delay: 0.1 } }
                    }}
                    className="absolute"
                  >
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Bottom Row: Text Content */}
              <div className="relative z-10">
                <motion.h3 
                  variants={{
                    hover: { x: 5, transition: { duration: 0.2 } }
                  }}
                  className="font-heading text-3xl font-bold text-black mb-4"
                >
                  {service.title}
                </motion.h3>
                <p className="font-body text-base lg:text-lg text-gray leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Bottom CTA */}
        <motion.div 
          variants={springUp}
          className="mt-20 flex justify-center"
        >
          <motion.a 
            href="https://wa.me/YOUR_PHONE_NUMBER" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-black text-white rounded-full overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.15)] transition-all duration-300"
          >
            {/* Sweeping background gradient inside button */}
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-dark via-green-dark to-purple-dark opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundSize: '200% auto' }}></div>
            
            <span className="relative z-10 font-body text-sm font-bold tracking-widest uppercase">
              Let's figure out what you need
            </span> 
            
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-300" />
            </motion.div>
          </motion.a>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default ServicesOverview;