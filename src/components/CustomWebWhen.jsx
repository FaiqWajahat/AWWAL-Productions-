"use client";

import { motion } from "framer-motion";
import { AlertCircle, ArrowRightCircle, Code2, Database, LayoutDashboard, Users, Workflow } from "lucide-react";

const signals = [
  {
    icon: <Users className="w-6 h-6 text-purple-light" />,
    quote: '"We need two different types of users — buyers and sellers — with completely different dashboards and permissions."',
  },
  {
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    quote: '"Our booking and pricing logic is too complex for any plugin we\'ve found."',
  },
  {
    icon: <Database className="w-6 h-6 text-green-light" />,
    quote: '"We need the website to connect to our internal ERP, our CRM, and our fulfilment system — simultaneously."',
  },
  {
    icon: <AlertCircle className="w-6 h-6 text-red-400" />,
    quote: '"We\'ve been told three times that what we want \'isn\'t possible\' on our current platform."',
  },
  {
    icon: <Workflow className="w-6 h-6 text-orange-400" />,
    quote: '"Our website is slowing us down operationally. The team spends hours doing manually what should be automated."',
  },
  {
    icon: <LayoutDashboard className="w-6 h-6 text-teal-400" />,
    quote: '"We\'re in a category where the website IS the product — and it needs to be exceptional."',
  }
];

const CustomWebWhen = () => {
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
          <div className="inline-flex items-center justify-center mb-6 p-4 bg-purple-dark/20 rounded-full border border-purple-light/10">
            <ArrowRightCircle className="w-8 h-8 text-purple-light" />
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"When WordPress, Shopify, and Webflow aren't".split(" ").map((word, index) => (
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
              className="inline-block text-purple-light"
            >
              enough.
            </motion.span>
          </h2>
          <p className="font-body text-white/70 font-medium text-lg max-w-3xl mx-auto leading-relaxed">
            Standard platforms are excellent for the problems they were designed to solve. But eventually, the platform becomes the ceiling. The workflow doesn't fit. The user journey requires logic a theme can't execute.
          </p>
        </motion.div>

        {/* Signals Section Title */}
        <div className="mb-10 flex items-center justify-center gap-4">
          <div className="h-px w-12 bg-white/20" />
          <span className="font-body font-bold text-sm tracking-widest uppercase text-white/60">Signals You Need Custom</span>
          <div className="h-px w-12 bg-white/20" />
        </div>

        {/* Signals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {signals.map((signal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300 flex flex-col items-start gap-6"
            >
              <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                {signal.icon}
              </div>
              <p className="font-heading text-xl font-medium text-white/90 leading-relaxed italic">
                {signal.quote}
              </p>
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
          <p className="font-body text-lg text-white/70 leading-relaxed">
            Custom development isn't for every business. But when you genuinely need it, there is no substitute. <br className="hidden sm:block" />
            <span className="text-white font-bold">A custom-built system is the difference between a website that fits your business, and a business that contorts itself to fit its website.</span>
          </p>
        </motion.div>

      </div>
    </section>
  );
};

export default CustomWebWhen;
