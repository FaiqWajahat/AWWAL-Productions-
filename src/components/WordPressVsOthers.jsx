"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const comparisonData = [
  { metric: "Starting point", others: "Open the page builder", awwal: "Business discovery session" },
  { metric: "Design approach", others: "Pre-built template", awwal: "100% custom to your brand" },
  { metric: "Research", others: "None", awwal: "5-country global benchmark" },
  { metric: "Mobile experience", others: "Desktop-first, adapted later", awwal: "Mobile-first from day one" },
  { metric: "SEO", others: "Basic meta tags, if any", awwal: "Full SEO foundation built in" },
  { metric: "Tracking", others: "Rarely installed", awwal: "GA4 + Clarity + Pixel as standard" },
  { metric: "Delivery", others: "Weeks to months", awwal: "21 days" },
  { metric: "After launch", others: "Invoice and disappear", awwal: "Monitor, report, improve (CRO)" },
  { metric: "End Result", others: "Expensive brochure", awwal: "Conversion system" },
];

const WordPressVsOthers = () => {
  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-light/10 rounded-full border border-purple-light/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-purple-dark">The Benchmark</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"This is what the difference looks like in plain".split(" ").map((word, index) => (
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
              className="inline-block text-purple-dark"
            >
              language.
            </motion.span>
          </h2>
        </motion.div>

        {/* Comparative Table */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full bg-white rounded-3xl border border-gray/10 shadow-[0_20px_60px_rgba(0,0,0,0.05)] overflow-hidden"
        >
          {/* Table Header */}
          <div className="grid grid-cols-3 bg-gray/5 border-b border-gray/10">
            <div className="p-6 sm:p-8"></div>
            <div className="p-6 sm:p-8 text-center border-l border-gray/10">
              <h3 className="font-heading text-xl font-bold text-gray">Other Agencies</h3>
            </div>
            <div className="p-6 sm:p-8 text-center bg-purple-dark/5 border-l border-gray/10">
              <h3 className="font-heading text-2xl font-black text-purple-dark">Awwal</h3>
            </div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray/10">
            {comparisonData.map((row, idx) => (
              <div key={idx} className="grid grid-cols-3 hover:bg-gray/5 transition-colors">
                <div className="p-6 sm:p-8 flex items-center">
                  <p className="font-body font-bold text-black text-sm sm:text-base uppercase tracking-wider">{row.metric}</p>
                </div>
                <div className="p-6 sm:p-8 flex items-center justify-center text-center border-l border-gray/10">
                  <div className="flex flex-col items-center gap-2">
                    <X className="w-5 h-5 text-red-500/50" />
                    <p className="font-body font-medium text-gray text-sm sm:text-base">{row.others}</p>
                  </div>
                </div>
                <div className="p-6 sm:p-8 flex items-center justify-center text-center bg-purple-dark/5 border-l border-gray/10">
                  <div className="flex flex-col items-center gap-2">
                    <Check className="w-6 h-6 text-green-dark" />
                    <p className="font-body font-bold text-black text-sm sm:text-lg">{row.awwal}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default WordPressVsOthers;
