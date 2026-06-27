"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const failures = [
  {
    title: "Ignoring Economics",
    desc: "Without knowing your CAC target and gross margin, you're bidding blind. A £5 click might be cheap or catastrophically expensive."
  },
  {
    title: "Wrong Match Types",
    desc: "Broad match keywords on a small budget will spend your entire allocation on irrelevant searches in days."
  },
  {
    title: "Homepage Traffic",
    desc: "Sending specific search intent to a generic homepage causes massive drop-offs. Every campaign needs a dedicated landing page."
  },
  {
    title: "No Conversion Tracking",
    desc: "If Google doesn't know when someone fills your form or buys, Smart Bidding has zero signal to optimize toward."
  },
  {
    title: "Bidding for Clicks",
    desc: "Maximizing clicks buys website visitors, not customers. Every bidding decision must be made against your CAC target."
  },
  {
    title: "Ignoring Search Terms",
    desc: "Failing to aggressively add negative keywords means you will pay for completely irrelevant searches forever."
  }
];

const GoogleAdsFailures = () => {
  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center justify-center mb-6 p-4 bg-red-500/20 rounded-full">
            <AlertTriangle className="w-8 h-8 text-red-500" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Why most Google Ads campaigns".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 80 }}
              className="inline-block text-red-500"
            >
              fail.
            </motion.span>
          </h2>
          <p className="font-body text-white/70 font-medium text-lg max-w-3xl mx-auto">
            These are the six most common reasons Google Ads accounts bleed budget — and none of them are Google's fault.
          </p>
        </motion.div>

        {/* 6 Failures Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {failures.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 transition-colors hover:bg-white/10 overflow-hidden"
            >
              <div className="absolute -right-4 -top-6 text-[120px] font-heading font-black text-white/[0.03] group-hover:text-red-500/[0.05] transition-colors duration-500 pointer-events-none select-none z-0">
                0{idx + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-white/60 font-medium leading-relaxed text-base sm:text-lg">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-heading text-xl sm:text-2xl font-bold text-white/90 leading-relaxed">
            We've audited accounts where 40–60% of the budget was spent on searches completely unrelated to the business. <br className="hidden sm:block" />
            <span className="text-green-light">The free audit will show you exactly where yours stands.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GoogleAdsFailures;
