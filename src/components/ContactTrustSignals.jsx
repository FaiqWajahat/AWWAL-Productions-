"use client";

import { motion } from "framer-motion";
import { BarChart3, Handshake, ShieldCheck, Users2 } from "lucide-react";

const ContactTrustSignals = () => {
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
          <div className="inline-flex items-center justify-center mb-6">
            <ShieldCheck className="w-8 h-8 text-green-light" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Why business owners trust us with their marketing".split(" ").map((word, index) => (
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
              className="inline-block text-green-light"
            >
              budget.
            </motion.span>
          </h2>
        </motion.div>

        {/* 2x2 Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Signal 1 */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500"
          >
            <div className="p-4 bg-purple-dark/20 w-fit rounded-2xl text-purple-light mb-6">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Real results — publicly documented</h3>
            <p className="font-body text-white/70 font-medium leading-relaxed text-lg">
              Every case study on our portfolio page is a real business outcome: revenue generated, ROAS achieved, leads delivered. No vanity metrics. No estimates. No "potential reach."
            </p>
          </motion.div>

          {/* Signal 2 */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500"
          >
            <div className="p-4 bg-green-dark/20 w-fit rounded-2xl text-green-light mb-6">
              <BarChart3 className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Economics-first — always</h3>
            <p className="font-body text-white/70 font-medium leading-relaxed text-lg">
              We will not recommend a budget, launch a campaign, or build a website without first understanding your margins, your CAC target, and your LTV. This is the conversation we have before we take any money.
            </p>
          </motion.div>

          {/* Signal 3 */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500"
          >
            <div className="p-4 bg-white/10 w-fit rounded-2xl text-white mb-6">
              <Handshake className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">We tell you when we're not the right fit</h3>
            <p className="font-body text-white/70 font-medium leading-relaxed text-lg">
              If your budget doesn't match your goals, we'll tell you. If a different service would serve you better than what we offer, we'll point you there. We would rather be honest than take on a client we can't serve properly.
            </p>
          </motion.div>

          {/* Signal 4 */}
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-8 sm:p-10 rounded-[2rem] hover:bg-white/10 transition-colors duration-500"
          >
            <div className="p-4 bg-purple-dark/20 w-fit rounded-2xl text-purple-light mb-6">
              <Users2 className="w-7 h-7" />
            </div>
            <h3 className="font-heading text-2xl font-bold mb-4">Limited client intake</h3>
            <p className="font-body text-white/70 font-medium leading-relaxed text-lg">
              We take on a limited number of new clients each quarter. We do this so every client gets the attention their business deserves — not a diluted service stretched across too many accounts. If you're ready to start, now is the right time to reach out.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactTrustSignals;
