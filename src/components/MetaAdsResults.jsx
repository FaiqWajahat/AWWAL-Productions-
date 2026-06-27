"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const results = [
  {
    client: "KIA Sports City",
    industry: "Automotive",
    challenge: "Needed a consistent, high-volume lead generation system for one of Pakistan's largest automotive events.",
    metric: "₨2 Billion+",
    metricLabel: "in direct car sales",
    subMetric: "10,000+ qualified leads generated.",
    color: "bg-purple-light/10",
    textColor: "text-purple-dark"
  },
  {
    client: "AB Refurbished Computers",
    industry: "Electronics Retail (UAE)",
    challenge: "Competitive market with thin margins. Needed to prove Meta Ads could be profitable at scale.",
    metric: "44x ROAS",
    metricLabel: "Return on Ad Spend",
    subMetric: "Every ₨1 spent returned ₨44 in revenue.",
    color: "bg-green-light/10",
    textColor: "text-green-dark"
  },
  {
    client: "Kuwait Electronics Client",
    industry: "Consumer Electronics",
    challenge: "Scale revenue through Meta advertising in a highly competitive Gulf market.",
    metric: "₨43.7M",
    metricLabel: "in total sales generated",
    subMetric: "Scaled efficiently while maintaining target CAC.",
    color: "bg-blue-500/10",
    textColor: "text-blue-600"
  },
  {
    client: "Mughal Homes",
    industry: "Real Estate",
    challenge: "High-ticket product, long sales cycle. Needed qualified leads, not just cheap clicks.",
    metric: "16x ROI",
    metricLabel: "Return on Investment",
    subMetric: "Turned stagnant listings into a pipeline of serious buyers.",
    color: "bg-orange-500/10",
    textColor: "text-orange-600"
  }
];

const MetaAdsResults = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-light/10 rounded-full border border-green-light/20 mb-8">
            <TrendingUp className="w-4 h-4 text-green-dark" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-green-dark">Real Results</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"What our Meta Ads system has produced for real".split(" ").map((word, index) => (
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
              className="inline-block text-green-dark"
            >
              businesses.
            </motion.span>
          </h2>
        </motion.div>

        {/* Results Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-16">
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
          <p className="font-heading text-xl sm:text-2xl font-bold text-black">
            Every one of these results started with a business economics conversation — not a campaign brief. <span className="text-purple-dark">We knew the numbers before we spent the first dollar.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default MetaAdsResults;
