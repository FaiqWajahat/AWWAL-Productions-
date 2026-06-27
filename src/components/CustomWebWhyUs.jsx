"use client";

import { motion } from "framer-motion";
import { Activity, Bot, Code2, Globe2, LineChart, Search } from "lucide-react";

const differentiators = [
  {
    icon: <Search className="w-7 h-7" />,
    title: "Discovery Before Design",
    desc: "A misstep in discovery costs weeks of development, not hours of design. We document every user type and API integration before drawing a single wireframe.",
    color: "purple-dark"
  },
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: "5-Country Research",
    desc: "Before writing a specification, we benchmark the best platforms globally (USA, UK, UAE, India, Local). You get a product informed by the world's best UX.",
    color: "blue-500"
  },
  {
    icon: <Code2 className="w-7 h-7" />,
    title: "Tech-Agnostic Approach",
    desc: "We work across React, Vue, Python, Node, Laravel, and Supabase. We recommend the exact right stack for your problem — not just the one we used last time.",
    color: "green-dark"
  },
  {
    icon: <Bot className="w-7 h-7" />,
    title: "AI as a Business Capability",
    desc: "We don't add AI because it's trending. We integrate semantic search, dynamic personalisation, and custom chatbots only where they reduce cost or increase conversion.",
    color: "orange-500"
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Tracking Built In, Not Bolted On",
    desc: "GA4, Microsoft Clarity, and custom BI dashboards are planned into the platform architecture from day one. Data-driven decisions begin at launch.",
    color: "teal-500"
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "We Stay After Launch",
    desc: "Monthly CRO cycles. Ongoing performance monitoring. Feature iterations based on real user data. Your platform at month 6 will be measurably better than at launch.",
    color: "red-500"
  }
];

const CustomWebWhyUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-y border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"What makes an Awwal custom build".split(" ").map((word, index) => (
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
              className="inline-block text-orange-500"
            >
              different.
            </motion.span>
          </h2>
        </motion.div>

        {/* Bento Grid (3x2) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {differentiators.map((item, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500 flex flex-col"
            >
              <div className={`p-4 bg-${item.color}/20 w-fit rounded-2xl text-${item.color} mb-6`}>
                {item.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4">{item.title}</h3>
              <p className="font-body text-white/70 font-medium leading-relaxed text-lg">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CustomWebWhyUs;
