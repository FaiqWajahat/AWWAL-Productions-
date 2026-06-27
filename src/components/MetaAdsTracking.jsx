"use client";

import { motion } from "framer-motion";
import { Activity, Code, Database, Eye, Target, Users } from "lucide-react";

const trackingFeatures = [
  {
    icon: <Activity className="w-6 h-6 text-green-dark" />,
    title: "Meta Pixel",
    desc: "Installed and verified on every page. Without this, Meta's algorithm is optimising blind."
  },
  {
    icon: <Database className="w-6 h-6 text-purple-dark" />,
    title: "Conversions API (CAPI)",
    desc: "Server-side tracking that captures the conversion data that browser ad-blockers and iOS privacy changes miss."
  },
  {
    icon: <Code className="w-6 h-6 text-blue-500" />,
    title: "Custom Events",
    desc: "We track the specific actions that matter to you: form submissions, WhatsApp clicks, or time-on-page."
  },
  {
    icon: <Target className="w-6 h-6 text-red-500" />,
    title: "Retargeting Audiences",
    desc: "Built and ready before the first ad goes live (cart abandoners, video viewers, profile visitors)."
  },
  {
    icon: <Users className="w-6 h-6 text-orange-500" />,
    title: "Lookalike Audiences",
    desc: "Built from your highest LTV customers to feed the algorithm exactly who to look for next."
  },
  {
    icon: <Eye className="w-6 h-6 text-teal-500" />,
    title: "Landing Page Review",
    desc: "If your page has conversion problems, we flag them before we spend a single dollar on traffic."
  }
];

const MetaAdsTracking = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-y border-gray/10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Context */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-light/10 rounded-full border border-purple-light/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-purple-dark">Infrastructure</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-8 flex flex-wrap gap-x-3 gap-y-2">
            {"Your ads are only as good as the system they send traffic".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 1.1, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-dark"
            >
              into.
            </motion.span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-gray font-medium leading-relaxed mb-8">
            <p>
              The best Meta Ads campaign in the world will underperform if it sends traffic to a slow website or a confusing checkout. And it will generate zero useful data if the tracking isn't set up correctly.
            </p>
            <p className="text-black font-bold border-l-4 border-green-dark pl-4">
              Tracking isn't a technical detail. It's the feedback loop that makes everything else work. Without it, you're not running a paid acquisition system — you're making a donation to Meta.
            </p>
          </div>
        </motion.div>

        {/* Right Column: The Grid */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 w-full"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {trackingFeatures.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-gray/5 border border-gray/10 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300"
              >
                <div className="p-3 bg-white w-fit rounded-xl shadow-sm mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-heading font-bold text-black text-xl mb-2">{feature.title}</h3>
                <p className="font-body text-gray text-sm font-medium leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MetaAdsTracking;
