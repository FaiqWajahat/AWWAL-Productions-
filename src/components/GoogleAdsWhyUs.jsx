"use client";

import { motion } from "framer-motion";
import { Calculator, LayoutDashboard, ShieldAlert, TrendingUp } from "lucide-react";

const differentiators = [
  {
    icon: <Calculator className="w-7 h-7" />,
    title: "We calculate your maximum CPC before we bid.",
    desc: "CAC target, gross margin, and landing page conversion rate determine the maximum you can profitably pay per click. We calculate this before the account is built, so every bid is justified by your economics, not Google's recommendations.",
    color: "blue-500"
  },
  {
    icon: <ShieldAlert className="w-7 h-7" />,
    title: "Negative keywords are a first-class priority.",
    desc: "Most agencies manage negative keywords reactively — after money is wasted. We build a list of hundreds of terms before the first campaign launches, blocking irrelevant searches in advance.",
    color: "red-500"
  },
  {
    icon: <LayoutDashboard className="w-7 h-7" />,
    title: "We build dedicated landing pages, not homepages.",
    desc: "Every campaign needs a page that speaks directly to the search intent. We either brief your team on what needs to change or build the page ourselves. Message match is not optional.",
    color: "green-dark"
  },
  {
    icon: <TrendingUp className="w-7 h-7" />,
    title: "We follow the strict bidding progression.",
    desc: "The most common mistake is switching to Target CPA before the account has enough data. We follow the correct progression (Manual → Max Conversions → Target CPA). We don't skip stages just because a client wants faster results.",
    color: "purple-dark"
  }
];

const GoogleAdsWhyUs = () => {
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
              className="inline-block text-blue-500"
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
              className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500"
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

export default GoogleAdsWhyUs;
