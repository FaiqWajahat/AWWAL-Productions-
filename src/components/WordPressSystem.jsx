"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const steps = [
  {
    title: "Business Discovery",
    subtitle: "We don't touch a pixel until we understand your business.",
    desc: "We define your revenue model, your ideal customer demographics, and your competitive positioning. Every page is designed around a specific success metric — not general 'more traffic'."
  },
  {
    title: "Gather Requirements",
    subtitle: "Your vision, sharpened into a build specification.",
    desc: "We map out your visual identity, assign conversion KPIs to every page, and plan every integration (GA4, Pixel, CRM) before development begins."
  },
  {
    title: "Global Competitor Research",
    subtitle: "Benchmarking the best in the world.",
    desc: "We study the best websites in your industry across 5 markets (USA, UK, UAE, India, Local). We extract winning patterns and build a blueprint that positions you above global benchmarks."
  },
  {
    title: "Build the Branded Website",
    subtitle: "Custom design. Mobile-first. Built to last.",
    desc: "No $59 themes. Every layout is custom-designed for conversion. We build for the smallest screen first, lay a massive technical SEO foundation, and target a 90+ PageSpeed score."
  },
  {
    title: "Integrations & Tracking",
    subtitle: "Connecting the systems that run your business.",
    desc: "We install conflict-free Google Tag Manager, GA4, Microsoft Clarity session recordings, Meta Pixel, and unmissable WhatsApp lead capture systems."
  },
  {
    title: "Launch, Track & Improve",
    subtitle: "Launch is not the finish line. It's the starting line.",
    desc: "We pass a rigorous pre-launch checklist. Post-launch, the CRO cycle begins — using real user data from Clarity and GA4 to make specific, evidence-based improvements."
  }
];

const WordPressSystem = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-light/10 rounded-full border border-purple-light/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-purple-dark">Our Methodology</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"The 6-step system to build websites that actually".split(" ").map((word, index) => (
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
              className="inline-block text-green-dark"
            >
              work.
            </motion.span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-2xl mx-auto">
            No skipped steps. No design before discovery. No launch before tracking.
          </p>
        </motion.div>

        {/* Vertical Timeline */}
        <div className="relative border-l-2 border-gray/10 pl-8 sm:pl-16 ml-4 sm:ml-0 space-y-16">
          
          {/* Animated Line drawing down */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute left-[-2px] top-0 w-[2px] bg-gradient-to-b from-purple-dark via-green-dark to-transparent"
          />

          {steps.map((step, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="relative bg-gray/5 border border-gray/10 p-8 sm:p-10 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:bg-white transition-all duration-300 group"
            >
              {/* Step Node Indicator */}
              <div className="absolute -left-[49px] sm:-left-[81px] top-10 w-8 h-8 rounded-full border-4 border-gray/5 bg-white flex items-center justify-center shadow-sm group-hover:border-purple-dark transition-colors duration-300 z-10">
                <CheckCircle2 className="w-5 h-5 text-gray group-hover:text-green-dark transition-colors" />
              </div>

              {/* Step Number Badge */}
              <div className="inline-block px-3 py-1 bg-white border border-gray/10 text-gray font-body font-bold text-sm rounded-lg mb-4 shadow-sm">
                Step 0{index + 1}
              </div>

              <h3 className="font-heading text-2xl sm:text-3xl font-bold text-black mb-2">
                {step.title}
              </h3>
              <p className="font-heading text-purple-dark font-bold text-lg mb-4">
                {step.subtitle}
              </p>
              <p className="font-body text-gray font-medium text-lg leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WordPressSystem;
