"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Business Economics Audit",
    subtitle: "Before we touch Ads Manager.",
    desc: "We define your CAC Target, LTV, Gross Margin, and LTV:CAC Ratio. We only recommend a budget after knowing exactly what you can afford to pay for a customer."
  },
  {
    title: "Buyer Persona Research",
    subtitle: "Who are we actually trying to reach?",
    desc: "We go beyond broad interests. We map psychographics, purchase triggers, and the exact language your ideal customer uses to describe their problem."
  },
  {
    title: "Competitor & Creative Research",
    subtitle: "What's working — and where are the gaps.",
    desc: "We audit your competitors via the Meta Ads Library to see what hooks resonate globally, generating a creative brief built on proven angles."
  },
  {
    title: "Communication Strategy",
    subtitle: "The message before the creative.",
    desc: "We map the messaging hierarchy, balance emotional vs. rational triggers, and address buyer objections directly before writing a single script."
  },
  {
    title: "Funnel Strategy for Creatives",
    subtitle: "Three stages. Three conversations.",
    desc: "We run TOFU (Cold), MOFU (Warm), and BOFU (Retargeting) simultaneously. Each stage uses different creatives to compound results over time."
  },
  {
    title: "Scripting & Production",
    subtitle: "The ad starts with the script.",
    desc: "We test multiple hook variations for every ad, structure the argument to match the funnel stage, and deploy UGC, branded, and demo formats."
  },
  {
    title: "Launch Architecture",
    subtitle: "Setup determines the ceiling.",
    desc: "We deploy strict audience segmentation, rigid exclusions to prevent wasted spend, and flawless naming conventions for crystal-clear data."
  },
  {
    title: "Test and Learn",
    subtitle: "We don't guess. We test. Then we decide.",
    desc: "We test creative first, then audiences, then offers. We never kill an ad in the first 48 hours, and we never scale unproven assets."
  },
  {
    title: "Optimize and Scale",
    subtitle: "Hit the CAC target, then scale.",
    desc: "We track CPM, CTR, and CPA together. Once an ad hits target, we scale budgets incrementally and refresh creatives before fatigue sets in."
  }
];

const MetaAdsSystem = () => {
  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-light/10 rounded-full border border-green-light/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-green-dark">Our Methodology</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"The 9-step system behind every account we".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.8, type: "spring", stiffness: 80 }}
              className="inline-block text-green-dark"
            >
              manage.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-2xl mx-auto">
            Not a template. Not a checklist. A system built around your specific business economics — applied from day one and refined continuously.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray/10 pl-8 sm:pl-16 ml-4 sm:ml-0 space-y-16">
          
          {/* Animated Line drawing down */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-purple-dark via-green-dark to-transparent"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-white border border-gray/10 p-8 sm:p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] transition-shadow duration-300 group"
            >
              {/* Step Node Indicator */}
              <div className="absolute -left-[49px] sm:-left-[81px] top-10 w-8 h-8 rounded-full border-4 border-gray/5 bg-white flex items-center justify-center shadow-sm group-hover:border-purple-light transition-colors duration-300 z-10">
                <CheckCircle2 className="w-5 h-5 text-gray group-hover:text-purple-dark transition-colors" />
              </div>

              {/* Step Number Badge */}
              <div className="inline-block px-3 py-1 bg-gray/5 text-gray font-body font-bold text-sm rounded-lg mb-4">
                Step 0{index + 1}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="font-heading text-purple-dark font-bold text-lg mb-4">
                {step.subtitle}
              </p>
              <p className="font-body text-gray font-medium text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MetaAdsSystem;
