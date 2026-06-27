"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

const failures = [
  {
    title: "Template Clones",
    desc: "When your website is built from a $59 theme that 1,000 other businesses use, customers can't remember you — and they can't trust you."
  },
  {
    title: "Zero Audience Research",
    desc: "Most agencies design before they understand who your buyers are. A beautiful website built for the wrong audience is completely useless."
  },
  {
    title: "No Strategy, Just Pages",
    desc: "No thought given to the visitor's journey. Visitors land on a generic homepage, look around aimlessly, and leave without contacting you."
  },
  {
    title: "No Competitor Benchmarking",
    desc: "Built in isolation. No one looked at what the best websites globally are doing or what your direct competitors are ranking for."
  },
  {
    title: "No Tracking Installed",
    desc: "No GA4, no Clarity, no Meta Pixel. Months later, you have absolutely no idea how many people visit or why they leave."
  },
  {
    title: "Slow, Broken, Invisible",
    desc: "Built on desktop, broken on mobile. Images unoptimized. No SEO foundation. Google doesn't rank it, and people who find it leave immediately."
  }
];

const WordPressFailures = () => {
  return (
    <section className="w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center justify-center mb-6 p-4 bg-purple-dark/20 rounded-full">
            <AlertTriangle className="w-8 h-8 text-purple-light" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"You paid for a website. They never".split(" ").map((word, index) => (
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
              className="inline-block text-purple-light"
            >
              came.
            </motion.span>
          </h2>
          <p className="font-body text-white/70 font-medium text-lg max-w-3xl mx-auto">
            These aren't design problems. They're strategy problems — and they're more common than any agency will admit.
          </p>
        </motion.div>

        {/* 6 Failures Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {failures.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-white/5 border border-white/10 rounded-[2rem] p-8 sm:p-10 transition-colors hover:bg-white/10 overflow-hidden"
            >
              <div className="absolute -right-4 -top-6 text-[120px] font-heading font-black text-white/[0.03] group-hover:text-purple-light/[0.05] transition-colors duration-500 pointer-events-none select-none z-0">
                0{idx + 1}
              </div>
              
              <div className="relative z-10">
                <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4 text-white group-hover:text-purple-light transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="font-body text-white/60 font-medium leading-relaxed text-base sm:text-lg">
                  {item.desc}
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
          className="max-w-4xl mx-auto text-center"
        >
          <p className="font-heading text-xl sm:text-2xl font-bold text-white/90 leading-relaxed">
            The result: you spend money on a website that doesn't bring you a single customer. <br className="hidden sm:block" />
            <span className="text-green-light">Then you're told you need to spend more on ads to drive traffic to it.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default WordPressFailures;
