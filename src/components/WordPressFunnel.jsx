"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const funnelStages = [
  {
    stage: "Awareness",
    desc: "They land on your homepage. In 5 seconds, they must understand what you do, who it's for, and why you matter. If this fails, they leave.",
    color: "bg-purple-light/20",
    textColor: "text-purple-dark"
  },
  {
    stage: "Interest",
    desc: "They want to know more. Your services and about pages do their work here. They are actively comparing you against competitors.",
    color: "bg-blue-500/20",
    textColor: "text-blue-600"
  },
  {
    stage: "Consideration",
    desc: "They want proof. Case studies, testimonials, and results convert their passive interest into active intent.",
    color: "bg-teal-500/20",
    textColor: "text-teal-600"
  },
  {
    stage: "Intent",
    desc: "They're hovering over the contact button. Friction is the enemy here. The CTA must be unmissable, the form short, the WhatsApp button ready.",
    color: "bg-green-light/20",
    textColor: "text-green-dark"
  },
  {
    stage: "Conversion",
    desc: "Form submitted. WhatsApp message sent. The website has successfully acted as your best salesperson.",
    color: "bg-black",
    textColor: "text-white",
    descColor: "text-white/70"
  }
];

const WordPressFunnel = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-light/10 rounded-full border border-green-light/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-green-dark">The Conversion Journey</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"A website isn't a collection of pages. It's a guided".split(" ").map((word, index) => (
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
              journey.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            Think of your website as a salesperson who works 24/7. That salesperson needs a script — a clear sequence of conversations that moves a stranger toward a decision.
          </p>
        </motion.div>

        {/* Funnel Layout - Staggered Vertical Overlap */}
        <div className="relative max-w-3xl mx-auto flex flex-col items-center">
          {funnelStages.map((stage, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className={`relative w-full ${idx !== 0 ? "-mt-6 sm:-mt-8" : ""} z-[${10 + idx}]`}
              style={{ zIndex: 10 + idx }}
            >
              <div className={`w-full p-8 sm:p-10 rounded-[2rem] border border-black/5 shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 transition-transform hover:-translate-y-2 duration-300 ${stage.color}`}>
                <div className="flex-shrink-0">
                  <span className={`font-heading text-5xl sm:text-6xl font-black opacity-30 ${stage.textColor || "text-black"}`}>
                    0{idx + 1}
                  </span>
                </div>
                <div>
                  <h3 className={`font-heading text-2xl sm:text-3xl font-bold mb-3 ${stage.textColor || "text-black"}`}>
                    {stage.stage}
                  </h3>
                  <p className={`font-body font-medium text-lg leading-relaxed ${stage.descColor || "text-black/70"}`}>
                    {stage.desc}
                  </p>
                </div>
              </div>
              
              {/* Connector Arrow (except last item) */}
              {idx !== funnelStages.length - 1 && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray/10 shadow-sm z-20">
                  <ArrowDown className="w-5 h-5 text-gray" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WordPressFunnel;
