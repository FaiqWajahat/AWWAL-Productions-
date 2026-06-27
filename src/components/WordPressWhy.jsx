"use client";

import { motion } from "framer-motion";
import { Blocks, Key, Maximize, Search, Settings2 } from "lucide-react";

const advantages = [
  {
    icon: <Key className="w-6 h-6 text-purple-dark" />,
    title: "Complete Ownership",
    desc: "Your website lives on your hosting. Your content is yours. You're not renting space on a closed platform that can change its pricing or rules at any time."
  },
  {
    icon: <Maximize className="w-6 h-6 text-green-dark" />,
    title: "Unlimited Scalability",
    desc: "Start as a 5-page business site and grow into a 500-page content hub, a membership platform, or a full eCommerce store without ever rebuilding."
  },
  {
    icon: <Settings2 className="w-6 h-6 text-blue-500" />,
    title: "Full Design Freedom",
    desc: "Unlike page builders that lock you into grid systems, WordPress gives your developer complete control over every pixel. No forced templates."
  },
  {
    icon: <Blocks className="w-6 h-6 text-orange-500" />,
    title: "60,000+ Plugins",
    desc: "Almost any functionality you need already exists: booking systems, payment gateways, CRM integrations, and multi-language support."
  },
  {
    icon: <Search className="w-6 h-6 text-teal-500" />,
    title: "SEO-Ready by Design",
    desc: "With the right setup, clean code, and proper schema, a WordPress site has a structural advantage in Google search that closed platforms can't match."
  }
];

const WordPressWhy = () => {
  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Context */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-black">The Platform</span>
          </div>

          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-8 flex flex-wrap gap-x-3 gap-y-2">
            {"Why we build on".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-dark"
            >
              WordPress.
            </motion.span>
          </h2>
          
          <div className="space-y-6 font-body text-lg text-gray font-medium leading-relaxed mb-8">
            <p>
              WordPress powers 43% of every website on the internet. Not because it's the easiest option — but because it's the most powerful, the most flexible, and the most future-proof platform available.
            </p>
            <p className="text-black font-bold border-l-4 border-green-dark pl-4">
              It is the right choice for service businesses, B2B companies, and any business that needs a website that can evolve with them over time.
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
            {advantages.map((feature, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`bg-white border border-gray/10 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 ${idx === 4 ? "sm:col-span-2" : ""}`}
              >
                <div className="p-3 bg-gray/5 w-fit rounded-xl mb-4">
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

export default WordPressWhy;
