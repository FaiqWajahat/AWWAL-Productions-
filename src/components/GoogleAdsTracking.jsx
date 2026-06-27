"use client";

import { motion } from "framer-motion";
import { Activity, LayoutTemplate, PhoneCall, Repeat, Settings } from "lucide-react";

const trackingFeatures = [
  {
    icon: <LayoutTemplate className="w-6 h-6 text-blue-500" />,
    title: "Landing Page Assessment",
    desc: "We review load speed, message match, and CTA placement. If it needs work, we tell you — and we can build it."
  },
  {
    icon: <Settings className="w-6 h-6 text-gray" />,
    title: "Google Tag Manager",
    desc: "Clean, conflict-free tag management. All tracking runs through GTM to prevent corrupt conversion data."
  },
  {
    icon: <Activity className="w-6 h-6 text-orange-500" />,
    title: "GA4 Integration",
    desc: "Full website behaviour data linked to ad performance. See the complete picture, not just the last click."
  },
  {
    icon: <PhoneCall className="w-6 h-6 text-green-dark" />,
    title: "Call Tracking",
    desc: "Every phone call is attributed to the exact keyword that generated it. Essential for service businesses."
  },
  {
    icon: <Repeat className="w-6 h-6 text-purple-dark" />,
    title: "Conversion Import",
    desc: "All conversions flow back into Google Ads so the algorithm has the precise signals it needs to optimize."
  }
];

const GoogleAdsTracking = () => {
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">Infrastructure</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-8 flex flex-wrap gap-x-3 gap-y-2">
            {"Google Ads only works as well as the website it sends traffic".split(" ").map((word, index) => (
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
              className="inline-block text-blue-600"
            >
              into.
            </motion.span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-gray font-medium leading-relaxed mb-8">
            <p>
              A technically perfect Google Ads campaign will fail if it sends high-intent traffic to a slow, unclear, or poorly designed landing page. 
            </p>
            <p className="text-black font-bold border-l-4 border-blue-500 pl-4">
              The most expensive thing in Google Ads is not a high CPC. It's spending money on clicks that convert into nothing because the tracking wasn't set up and the landing page wasn't built to receive them.
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
                className={`bg-gray/5 border border-gray/10 p-6 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 ${idx === 4 ? "sm:col-span-2" : ""}`}
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

export default GoogleAdsTracking;
