"use client";

import { motion } from "framer-motion";

const ContactFirstConversation = () => {
  const steps = [
    {
      title: "Your business economics",
      desc: "What do you sell, at what margin, and what does a customer cost you to acquire right now? If you don't have these numbers yet, that's completely fine — we'll work through them together. Understanding the economics is the first step in building anything that works.",
    },
    {
      title: "Your current situation",
      desc: "What's working in your marketing right now? What isn't? Do you have an existing website, an active ad account, social media channels? What have you tried before? We need to understand where you are before we can tell you where to go.",
    },
    {
      title: "The highest-leverage opportunity",
      desc: "Based on your business economics and your current situation, what is the single highest-impact thing you could do right now? Sometimes it's Meta Ads. Sometimes it's fixing the website first. We'll tell you what we actually think — not what's most profitable to sell.",
    }
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
  };

  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 border-y border-gray/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-24"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Here's what the first 30 minutes".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.7, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-dark"
            >
              looks like.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-3xl">
            We don't use the first conversation to pitch you. We use it to understand your business — so that anything we recommend afterwards is actually grounded in your specific situation.
          </p>
        </motion.div>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              whileHover="hover"
              className="group relative bg-white border border-gray/10 rounded-3xl p-8 sm:p-10 transition-all duration-500 overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              {/* Giant Background Numbering */}
              <div className="absolute -right-6 -bottom-8 text-[180px] leading-none font-heading font-black text-gray/[0.03] group-hover:text-gray/[0.06] transition-colors duration-500 pointer-events-none select-none z-0">
                {String(idx + 1).padStart(2, '0')}
              </div>

              {/* Animated Top Border */}
              <motion.div 
                variants={{ hover: { width: "100%", opacity: 1 } }}
                initial={{ width: "0%", opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="absolute left-0 top-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-purple-dark to-green-light z-20"
              />

              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-heading text-2xl font-bold text-black mb-4 transition-transform duration-300 group-hover:translate-x-1">
                  {step.title}
                </h3>
                <p className="font-body text-base text-gray font-medium leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Closing Note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-white p-8 rounded-2xl border border-gray/10 shadow-sm"
        >
          <p className="font-heading text-xl sm:text-2xl font-bold text-black">
            At the end of the 30 minutes, you'll have a clear picture of your options and an honest recommendation. <span className="text-purple-dark">Whether you work with us or not — that clarity is yours to keep.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default ContactFirstConversation;
