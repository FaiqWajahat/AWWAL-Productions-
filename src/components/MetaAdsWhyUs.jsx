"use client";

import { motion } from "framer-motion";
import { Calculator, Eye, Filter, LineChart, MessageSquare } from "lucide-react";

const differentiators = [
  {
    icon: <Calculator className="w-7 h-7" />,
    title: "We start with your numbers, not your ad account.",
    desc: "Most agencies open Ads Manager and start building. We spend the first conversation mapping your CAC target, your LTV, and your margins. These numbers dictate every bid strategy we deploy.",
    color: "purple-dark"
  },
  {
    icon: <Eye className="w-7 h-7" />,
    title: "We treat creative as the #1 variable.",
    desc: "Targeting has become automated. What separates winning accounts from losing ones in 2024 is creative quality and velocity. We invest more in scripting and testing than most agencies invest in their entire strategy.",
    color: "green-dark"
  },
  {
    icon: <Filter className="w-7 h-7" />,
    title: "We build the funnel, not just the ad.",
    desc: "An ad taking cold traffic to a homepage is not a funnel. We build TOFU, MOFU, and BOFU in parallel so every stage of the buyer journey is addressed simultaneously.",
    color: "blue-500"
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "We don't scale before it's earned.",
    desc: "The fastest way to lose budget is to scale a campaign before it's proven. We follow strict data thresholds before increasing spend. Scaling is justified by numbers, never by a desire to show 'activity'.",
    color: "red-500"
  },
  {
    icon: <MessageSquare className="w-7 h-7" />,
    title: "You always know where your money is going.",
    desc: "Monthly reports with plain-English explanations. CAC vs target. ROAS vs target. What worked, what didn't, and what changes next month. No mystery reports full of useless impressions.",
    color: "teal-500"
  }
];

const MetaAdsWhyUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Why most agencies fail their clients — and what we do".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 1, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-light"
            >
              differently.
            </motion.span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 ${idx === 4 ? "md:col-span-2 lg:col-span-2" : ""}`}
            >
              <div className={`p-4 bg-${item.color}/20 w-fit rounded-2xl text-${item.color} mb-6`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-4">{item.title}</h3>
              <p className="font-body text-white/70 font-medium leading-relaxed text-lg sm:text-xl">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MetaAdsWhyUs;
