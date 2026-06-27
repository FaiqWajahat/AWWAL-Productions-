"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const ContactNextSteps = () => {
  const steps = [
    {
      title: "We review your business before the call.",
      desc: "When you message us on WhatsApp or submit the form, we look at what you've shared and do some initial research on your business — your website if you have one, your social profiles, your industry. We arrive at the first conversation already knowing the basics.",
    },
    {
      title: "You get a 30-minute strategy session.",
      desc: "We cover your business economics, your current situation, and the highest-leverage opportunity. No slides. No pitch deck. Just a real conversation about your business and what the right next move looks like.",
    },
    {
      title: "You leave with a clear action plan — whether you work with us or not.",
      desc: "If we're the right fit, we'll outline what an engagement looks like, what it costs, and what you can expect. If we're not the right fit, we'll tell you that honestly — and point you toward what would be. The 30 minutes are valuable regardless of what happens next.",
    }
  ];

  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"After you reach out — here's exactly what to".split(" ").map((word, index) => (
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
              className="inline-block text-purple-dark"
            >
              expect.
            </motion.span>
          </h2>
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-gray/10 pl-8 sm:pl-12 ml-4 sm:ml-0 space-y-16">
          
          {/* Animated Line drawing down */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-purple-dark via-green-dark to-transparent"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              {/* Step Node Indicator */}
              <div className="absolute -left-[43px] sm:-left-[59px] top-0 w-8 h-8 rounded-full border-4 border-white bg-purple-dark flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-4 h-4 text-white" />
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black mb-4">
                {step.title}
              </h3>
              <p className="font-body text-gray font-medium text-lg leading-relaxed max-w-3xl">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* The No BS Guarantee */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 p-8 sm:p-10 bg-gray/5 border border-gray/10 rounded-3xl"
        >
          <p className="font-body text-black font-bold text-lg sm:text-xl leading-relaxed text-center">
            We don't do hard closes. We don't follow up five times if you don't respond. We have one conversation, we give you our honest view, and we let you decide. <span className="text-purple-dark">If it's the right fit, you'll know.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactNextSteps;
