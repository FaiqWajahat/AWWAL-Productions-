"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const results = [
  {
    client: "RQT — Jizan",
    industry: "Manufacturing",
    challenge: "B2B prefab manufacturing business needed a platform built for Google Ads to reach Gulf-market procurement teams.",
    metric: "B2B Scale",
    metricLabel: "Custom Sales Dashboard",
    subMetric: "Full B2B platform with Arabic/English RSAs and CAC/LTV tracking framework deployed.",
    color: "bg-blue-500/10",
    textColor: "text-blue-600"
  },
  {
    client: "Awwal Productions",
    industry: "Our Own Platform",
    challenge: "Build an agency platform that converts cold traffic into scoping sessions at scale without requiring a sales call first.",
    metric: "18",
    metricLabel: "Pages of Custom Architecture",
    subMetric: "Complete funnel architecture built entirely around high-intent WhatsApp captures with full tracking stack.",
    color: "bg-purple-light/10",
    textColor: "text-purple-dark"
  },
  {
    client: "PEXCO — Jeddah",
    industry: "Construction",
    challenge: "No online presence in a market where high-value buyers research suppliers heavily before making contact.",
    metric: "Fast ROI",
    metricLabel: "Qualified Inquiries",
    subMetric: "Generated within weeks of launching the new WhatsApp-first conversion architecture.",
    color: "bg-green-light/10",
    textColor: "text-green-dark"
  }
];

const CustomWebResults = () => {
  return (
    <section id="results" className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <TrendingUp className="w-4 h-4 text-blue-600" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">Real Results</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"What a properly engineered custom platform".split(" ").map((word, index) => (
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
              className="inline-block text-blue-600"
            >
              produces.
            </motion.span>
          </h2>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {results.map((result, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white border border-gray/10 p-8 sm:p-10 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="font-heading text-2xl font-bold text-black mb-1">{result.client}</h3>
                  <p className="font-body text-gray font-medium text-sm uppercase tracking-widest">{result.industry}</p>
                </div>
              </div>

              <div className="mb-8 flex-grow">
                <p className="font-body text-gray font-medium text-lg leading-relaxed">
                  <span className="text-black font-bold">Challenge:</span> {result.challenge}
                </p>
              </div>

              <div className={`p-6 rounded-2xl ${result.color} border border-gray/5`}>
                <div className={`font-heading text-4xl sm:text-5xl font-black ${result.textColor} mb-2 tracking-tight`}>
                  {result.metric}
                </div>
                <div className="font-heading font-bold text-black text-lg mb-2">
                  {result.metricLabel}
                </div>
                <p className="font-body text-gray font-medium text-sm">
                  {result.subMetric}
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
          <p className="font-heading text-xl sm:text-2xl font-bold text-black leading-relaxed">
            Every project starts with the same question: what does success look like in 12 months — <span className="text-blue-600">and what does the technology need to do to get there?</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CustomWebResults;
