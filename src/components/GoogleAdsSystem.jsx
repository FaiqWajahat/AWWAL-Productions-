"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Business Economics Audit",
    subtitle: "The numbers that determine every decision.",
    desc: "We define your CAC Target, Gross Margin, and LTV. Your website's baseline conversion rate dictates the maximum you can ever profitably pay for a click."
  },
  {
    title: "Keyword & Intent Mapping",
    subtitle: "Intent determines value.",
    desc: "We categorize keywords by Navigational, Informational, Commercial, and Transactional intent. Then, we proactively build a massive negative keyword list to block irrelevant clicks before launch."
  },
  {
    title: "Campaign Architecture",
    subtitle: "Structure determines learning speed.",
    desc: "We segment Search by service category, optimize Shopping product feeds, and use Performance Max strategically — never as a default."
  },
  {
    title: "Message Match Alignment",
    subtitle: "The fastest way to fix conversion problems.",
    desc: "When someone searches 'emergency plumber', they must land on an emergency plumber page. We align your ad copy and landing pages seamlessly to maximize Quality Score and lower CPC."
  },
  {
    title: "Tracking & Analytics Setup",
    subtitle: "If you can't measure it, you can't optimize it.",
    desc: "We deploy conflict-free Google Tag Manager, GA4 integrations, and precise call tracking. We do not launch until every conversion action is firing perfectly."
  },
  {
    title: "Bidding Progression",
    subtitle: "The right strategy for the right stage.",
    desc: "We start with Manual CPC to gather data, graduate to Maximize Conversions to establish baselines, and finally deploy Target CPA/ROAS to compound results."
  },
  {
    title: "Test and Optimize",
    subtitle: "A weekly discipline, not a monthly review.",
    desc: "We aggressively prune search term reports, test RSA headline permutations, adjust device bids, and iterate on landing pages based on hard data."
  },
  {
    title: "Scale Toward Goals",
    subtitle: "The only metric that matters: hitting your CAC target.",
    desc: "Once profitable, we increase budgets in controlled increments (15-20%), expand winning keywords, and layer on audiences for massive efficiency gains."
  }
];

const GoogleAdsSystem = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">Our Methodology</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"The 8-step system we use to hit your CAC".split(" ").map((word, index) => (
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
              target.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-2xl mx-auto">
            Built around your business economics from day one. Managed against your revenue targets, not your click volume.
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
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-blue-500 via-green-dark to-transparent"
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
              <div className="absolute -left-[49px] sm:-left-[81px] top-10 w-8 h-8 rounded-full border-4 border-gray/5 bg-white flex items-center justify-center shadow-sm group-hover:border-blue-500 transition-colors duration-300 z-10">
                <CheckCircle2 className="w-5 h-5 text-gray group-hover:text-blue-600 transition-colors" />
              </div>

              {/* Step Number Badge */}
              <div className="inline-block px-3 py-1 bg-gray/5 text-gray font-body font-bold text-sm rounded-lg mb-4">
                Step 0{index + 1}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="font-heading text-blue-600 font-bold text-lg mb-4">
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

export default GoogleAdsSystem;
