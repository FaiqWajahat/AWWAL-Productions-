"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const timelineEvents = [
  {
    days: "Day 1–2",
    title: "Discovery",
    desc: "Business model, user types, operational workflow, and success metrics mapped.",
    color: "bg-blue-500",
    shadow: "shadow-blue-500/20"
  },
  {
    days: "Day 3–5",
    title: "Research",
    desc: "5-country competitor analysis, UX benchmarking, and technology stack decision.",
    color: "bg-purple-dark",
    shadow: "shadow-purple-dark/20"
  },
  {
    days: "Day 6–8",
    title: "Blueprint",
    desc: "Product specification, user flow diagrams, architecture, and sign-off.",
    color: "bg-orange-500",
    shadow: "shadow-orange-500/20"
  },
  {
    days: "Day 9–21",
    title: "Build",
    desc: "Design system in Figma, component development, AI integration, and 7 CRO techniques applied.",
    color: "bg-teal-500",
    shadow: "shadow-teal-500/20"
  },
  {
    days: "Day 22–25",
    title: "QA & Review",
    desc: "End-to-end user flow testing, cross-browser QA, and performance benchmark confirmation.",
    color: "bg-red-500",
    shadow: "shadow-red-500/20"
  },
  {
    days: "Day 26–28",
    title: "Launch",
    desc: "Go live. GA4, Clarity, and custom BI dashboards active. Tracking verified. CRO cycle begins.",
    color: "bg-green-dark",
    shadow: "shadow-green-dark/20"
  }
];

const CustomWebTimeline = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/5 rounded-full border border-black/10 mb-8">
            <CalendarDays className="w-4 h-4 text-black" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-black">The 28-Day Schedule</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"From discovery to live platform in".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 80 }}
              className="inline-block text-black"
            >
              28 days.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Fast delivery doesn't mean cutting corners. Speed comes from process. Larger and more complex applications run longer — we'll give you an exact timeline in the scoping session.
          </p>
        </motion.div>

        {/* Timeline Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {timelineEvents.map((event, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="relative bg-white border border-gray/10 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Top Accent Line */}
              <div className={`absolute top-0 left-0 w-full h-1.5 ${event.color}`} />
              
              <div className={`inline-block px-4 py-1.5 rounded-full text-white font-body font-bold text-sm mb-6 ${event.color} shadow-lg ${event.shadow}`}>
                {event.days}
              </div>
              
              <h3 className="font-heading text-2xl font-bold text-black mb-3 group-hover:translate-x-1 transition-transform">
                {event.title}
              </h3>
              <p className="font-body text-gray font-medium leading-relaxed">
                {event.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomWebTimeline;
