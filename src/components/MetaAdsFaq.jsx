"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much do I need to spend on ads?",
    answer: "There's no universal answer — but there is a correct answer for your business. Once we understand your CAC target and LTV, we can tell you the minimum daily spend needed to generate actionable data. Running campaigns on a budget that's too small is a guaranteed way to fail."
  },
  {
    question: "How long before I see results?",
    answer: "You can see lead or sale data within the first week, but the first 2–4 weeks are a learning phase for both the algorithm and the creative team. Weeks 4–8 are when optimisation decisions start producing compounding improvements. Judging a campaign in the first two weeks is like judging a chef by the prep work."
  },
  {
    question: "My last agency ran Meta Ads and it didn't work. Why would this be different?",
    answer: "Most agencies fail due to: no business economics foundation, weak creative strategy, no funnel architecture, and broken tracking. In our free audit, we'll look at your previous campaigns and show you specifically what was broken — so you don't just have to take our word for it."
  },
  {
    question: "Do I need a website before running Meta Ads?",
    answer: "It depends. For lead generation, a single high-converting landing page is often enough. For eCommerce, you need a full product page and a seamless checkout process. We'll tell you exactly what you need before we start — and we can build it if you don't have it."
  },
  {
    question: "Can you guarantee results?",
    answer: "No honest agency can guarantee specific numbers — because results depend on your product, market, and budget. What we guarantee is a disciplined, economics-first system. We make decisions based on data, and if something isn't working, we diagnose and change it."
  },
  {
    question: "Do you manage creative production or just the campaigns?",
    answer: "Both. We script, brief, and guide the entire creative production process. We can work with your existing creative team or recommend production resources. We never run campaigns without proper creative, because creative is the most important variable in the system."
  }
];

const MetaAdsFaq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2">
            {"Questions we hear before every new".split(" ").map((word, index) => (
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
              className="inline-block text-purple-dark"
            >
              engagement.
            </motion.span>
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray/10 rounded-2xl overflow-hidden bg-gray/5"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left bg-white hover:bg-gray/5 transition-colors"
                >
                  <h3 className="font-heading text-xl sm:text-2xl font-bold text-black pr-8">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-purple-light/20 text-purple-dark flex items-center justify-center"
                  >
                    <ChevronDown className="w-5 h-5" />
                  </motion.div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 sm:p-8 pt-0 border-t border-gray/10 text-gray font-body font-medium text-lg leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default MetaAdsFaq;
