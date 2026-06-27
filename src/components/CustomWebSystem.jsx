"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";

const steps = [
  {
    title: "Understand Your Business",
    subtitle: "We don't write a line of code until we understand exactly how your business works.",
    desc: "For custom builds, discovery goes deeper. We map your revenue model, define the permissions for every user type (buyers/sellers/admins), and document the operational workflow.",
    bullets: ["Revenue Model", "User Types", "Operational Workflow", "System Integrations"]
  },
  {
    title: "Gather Your Requirements",
    subtitle: "Your vision and constraints, documented before design begins.",
    desc: "We define the exact specifications. If you don't have a brand system, we build it. We assign conversion KPIs per flow and mandate speed targets (e.g., API responses under 300ms).",
    bullets: ["Visual Identity", "KPIs per Flow", "Speed Specifications", "Full Integration Map"]
  },
  {
    title: "Global Competitor Research",
    subtitle: "Benchmarking the best digital experiences in the world.",
    desc: "We study the best platforms in your category across the USA (SaaS/Product leaders), UK (Trust-led design), UAE (Luxury/B2B), and India (High-volume scale).",
    bullets: ["Information Architecture", "Feature Gap Analysis", "Performance Benchmarks", "AI & Automation Audits"]
  },
  {
    title: "Build Your Custom Platform",
    subtitle: "Engineered architecture. Built to last.",
    desc: "We build the design system in Figma first. Then we develop the platform, baking in 7 core CRO mechanics: speed optimization, strategic CTAs, trust signals, urgency loops, multi-step forms, and abandonment recovery.",
    bullets: ["Figma Design System", "7 Core CRO Techniques", "Mobile-First Component Build", "AI Logic Integration"]
  },
  {
    title: "Launch and Track Results",
    subtitle: "Launch is not the finish line. It's the starting line.",
    desc: "The quantitative 'what' via GA4. The qualitative 'why' via Microsoft Clarity. The platform goes live, and the monthly CRO cycle begins immediately based on real user data.",
    bullets: ["Event-Based Analytics", "Session Recordings", "Custom Dashboards", "Monthly CRO Cycles"]
  }
];

const CustomWebSystem = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 rounded-full border border-orange-500/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-orange-600">The 5-Step Process</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"The same 5-step framework, with more depth at every".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.9, type: "spring", stiffness: 80 }}
              className="inline-block text-orange-600"
            >
              stage.
            </motion.span>
          </h2>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray/10 pl-8 sm:pl-16 ml-4 sm:ml-0 space-y-16">
          
          {/* Animated Line drawing down */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-orange-500 via-purple-dark to-transparent"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-gray/5 border border-gray/10 p-8 sm:p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white transition-all duration-300 group"
            >
              {/* Step Node Indicator */}
              <div className="absolute -left-[49px] sm:-left-[81px] top-10 w-8 h-8 rounded-full border-4 border-gray/5 bg-white flex items-center justify-center shadow-sm group-hover:border-orange-500 transition-colors duration-300 z-10">
                <CheckCircle2 className="w-5 h-5 text-gray group-hover:text-orange-500 transition-colors" />
              </div>

              {/* Step Number Badge */}
              <div className="inline-block px-3 py-1 bg-white border border-gray/10 text-gray font-body font-bold text-sm rounded-lg mb-4 shadow-sm">
                Step 0{index + 1}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="font-heading text-orange-600 font-bold text-lg mb-4">
                {step.subtitle}
              </p>
              <p className="font-body text-gray font-medium text-lg leading-relaxed mb-6">
                {step.desc}
              </p>

              {/* Deep Dive Bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-gray/10">
                {step.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-center gap-2">
                    <ChevronRight className="w-4 h-4 text-orange-500" />
                    <span className="font-body font-bold text-sm text-black">{bullet}</span>
                  </div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomWebSystem;
