"use client";

import { motion } from "framer-motion";
import { Activity, Clock, Globe2, LineChart, Search, Smartphone } from "lucide-react";

const differentiators = [
  {
    icon: <Search className="w-7 h-7" />,
    title: "Discovery Before Design",
    desc: "We will not design your website until we run a full business discovery session. We must understand your revenue model, customers, and conversion goals before making a single layout decision.",
    color: "purple-dark"
  },
  {
    icon: <Globe2 className="w-7 h-7" />,
    title: "5-Country Research",
    desc: "We benchmark the best websites in your industry across USA, UK, UAE, India, and locally. You get a website informed by global best practice — not just a local template.",
    color: "blue-500"
  },
  {
    icon: <Activity className="w-7 h-7" />,
    title: "Tracking on Day One",
    desc: "Every site launches with GA4, Microsoft Clarity, Meta Pixel, and Google Tag Manager. You collect data from the first visitor, making all future decisions evidence-based.",
    color: "green-dark"
  },
  {
    icon: <Smartphone className="w-7 h-7" />,
    title: "Mobile-First Design",
    desc: "60–70% of your visitors will arrive on a mobile device. We design for the smallest screen first, building for that reality rather than just adapting a desktop design.",
    color: "orange-500"
  },
  {
    icon: <Clock className="w-7 h-7" />,
    title: "21-Day Delivery",
    desc: "Discovery, research, blueprint, build, review, and launch — all delivered in 21 days. Speed comes from our rigorous internal process, not from cutting corners.",
    color: "teal-500"
  },
  {
    icon: <LineChart className="w-7 h-7" />,
    title: "We Stay After Launch",
    desc: "The CRO cycle begins after launch. We use real data from actual visitors to make the website better over time. Your site at month 6 will be measurably better than at launch.",
    color: "red-500"
  }
];

const WordPressWhyUs = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 80, damping: 20 } },
  };

  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"What makes an Awwal build different from every other".split(" ").map((word, index) => (
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
              className="inline-block text-purple-light"
            >
              agency.
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

export default WordPressWhyUs;
