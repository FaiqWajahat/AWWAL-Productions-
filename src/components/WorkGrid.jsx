"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    client: "PEXCO",
    industry: "Construction",
    category: "Custom Web",
    title: "WhatsApp-First Architecture",
    description: "Built a fully custom B2B web platform tailored for the Saudi market, bypassing traditional forms for a high-intent WhatsApp conversion funnel.",
    metric: "Fast ROI",
    metricLabel: "Qualified Inquiries",
    color: "bg-green-light/10",
    textColor: "text-green-dark"
  },
  {
    id: 2,
    client: "RQT",
    industry: "Manufacturing",
    category: "Google Ads",
    title: "B2B Scale & Search Dominance",
    description: "Deployed a full B2B platform integrated natively with a massive Google Ads infrastructure to capture high-intent procurement searches.",
    metric: "4.8x",
    metricLabel: "Average ROAS",
    color: "bg-blue-500/10",
    textColor: "text-blue-600"
  },
  {
    id: 3,
    client: "Awwal Productions",
    industry: "Agency",
    category: "Custom Web",
    title: "18-Page Conversion Engine",
    description: "Our own platform built to convert cold traffic into scoping sessions at scale without requiring a traditional sales call.",
    metric: "+140%",
    metricLabel: "Conversion Lift",
    color: "bg-purple-light/10",
    textColor: "text-purple-dark"
  },
  {
    id: 4,
    client: "Local Retailer",
    industry: "E-Commerce",
    category: "Meta Ads",
    title: "Performance Max & Meta Scaling",
    description: "Restructured the entire ad account logic, dropping CPCs and massively scaling daily spend while maintaining profitability.",
    metric: "-45%",
    metricLabel: "CAC Reduction",
    color: "bg-orange-500/10",
    textColor: "text-orange-600"
  },
  {
    id: 5,
    client: "SaaS Platform",
    industry: "Technology",
    category: "Custom Web",
    title: "Dynamic Dashboard Integration",
    description: "Built a custom Next.js frontend to replace an aging WordPress setup, integrated via API to a complex backend.",
    metric: "300ms",
    metricLabel: "API Response",
    color: "bg-teal-500/10",
    textColor: "text-teal-600"
  },
  {
    id: 6,
    client: "Real Estate Firm",
    industry: "Property",
    category: "Google Ads",
    title: "High-Intent Lead Capture",
    description: "Built a targeted Google Ads campaign capturing long-tail search intent for luxury properties, integrated into HubSpot.",
    metric: "92%",
    metricLabel: "Lead Quality",
    color: "bg-red-500/10",
    textColor: "text-red-600"
  }
];

const categories = ["All", "Custom Web", "Meta Ads", "Google Ads"];

const WorkGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = portfolioItems.filter(item => 
    activeCategory === "All" ? true : item.category === activeCategory
  );

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-body font-bold text-sm sm:text-base transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white shadow-md scale-105"
                  : "bg-gray/5 text-gray hover:bg-gray/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 min-h-[600px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, type: "spring", bounce: 0.3 }}
                className="group relative bg-white border border-gray/10 rounded-[2rem] p-8 hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] transition-all duration-500 flex flex-col h-full overflow-hidden"
              >
                {/* Top Tags */}
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-black mb-1">{item.client}</h3>
                    <p className="font-body text-gray font-bold text-xs uppercase tracking-widest">{item.industry}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gray/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>

                {/* Core Description */}
                <div className="mb-8 flex-grow relative z-10">
                  <h4 className="font-body font-bold text-lg text-black mb-3">{item.title}</h4>
                  <p className="font-body text-gray font-medium leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Metric Highlight (Bottom) */}
                <div className={`p-6 rounded-2xl ${item.color} border border-gray/5 relative z-10 group-hover:scale-[1.02] transition-transform duration-300`}>
                  <div className={`font-heading text-4xl sm:text-5xl font-black ${item.textColor} mb-1 tracking-tight`}>
                    {item.metric}
                  </div>
                  <div className="font-heading font-bold text-black text-base">
                    {item.metricLabel}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredItems.length === 0 && (
          <div className="w-full text-center py-20">
            <p className="font-body text-gray text-xl">No case studies found for this category yet.</p>
          </div>
        )}

      </div>
    </section>
  );
};

export default WorkGrid;
