"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const results = [
  {
    client: "Digikon Solutions",
    industry: "SaaS / Technology",
    challenge: "Brand new to paid search. Needed to build a consistent pipeline of qualified leads in a competitive software category.",
    metric: "₨1M+",
    metricLabel: "per month in revenue",
    subMetric: "Reached within 5 months of campaign launch.",
    color: "bg-blue-500/10",
    textColor: "text-blue-600"
  },
  {
    client: "B2B Service Client",
    industry: "Professional Services",
    challenge: "Previous agency produced clicks but no leads. Tracking was broken. Landing pages sent traffic to the homepage.",
    metric: "-58%",
    metricLabel: "Reduction in CAC",
    subMetric: "Achieved within 60 days of rebuilding the account.",
    color: "bg-purple-light/10",
    textColor: "text-purple-dark"
  },
  {
    client: "eCommerce Client",
    industry: "Consumer Products",
    challenge: "Google Shopping campaigns running but ROAS below 2x. Product feed unoptimised. No remarketing in place.",
    metric: "6.4x",
    metricLabel: "Return on Ad Spend",
    subMetric: "Increased from <2x within 90 days of restructuring.",
    color: "bg-green-light/10",
    textColor: "text-green-dark"
  }
];

const GoogleAdsResults = () => {
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
            {"What the system produces when it's built".split(" ").map((word, index) => (
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
              correctly.
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
          className="max-w-3xl mx-auto text-center"
        >
          <p className="font-heading text-xl sm:text-2xl font-bold text-black leading-relaxed">
            In every case, the first fix was the same: understand the economics, fix the tracking, and align the landing page with the search intent. <span className="text-blue-600">Then the system starts working.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default GoogleAdsResults;
