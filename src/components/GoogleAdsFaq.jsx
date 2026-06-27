"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much should I budget for Google Ads?",
    answer: "The right budget is determined by your CAC target, conversion rate, and the CPC in your market. Some industries average £1–2 per click. Others average £20–50. We'll calculate your minimum budget before you start. We won't take your money if the budget isn't workable."
  },
  {
    question: "How is Google Ads different from SEO?",
    answer: "Google Ads produces results immediately — you appear at the top of search results the day you launch. SEO is a long-term investment that builds over months with no ongoing cost-per-click. Ideally, run both. If you can only do one, Google Ads is faster."
  },
  {
    question: "My account is already running. Why isn't it working?",
    answer: "Usually: no proper conversion tracking, wrong match types burning budget on irrelevant searches, traffic going to the homepage instead of a landing page, or Smart Bidding turned on too early. Our free audit will identify exactly which applies to you."
  },
  {
    question: "How long before I see results?",
    answer: "Ads go live within days. Early conversion data appears within two weeks. Weeks 1–4 are the learning phase. Weeks 6–12 are when efficiency improvements start compounding meaningfully."
  },
  {
    question: "Do I need a new website to run Google Ads?",
    answer: "Not necessarily, but you need landing pages that match your ad copy. If your current website can support dedicated landing pages, we use it. If it can't, we'll tell you what needs to be built — and we can build it."
  },
  {
    question: "Can you manage both Google and Meta Ads?",
    answer: "Yes. Running both together covers the full buyer journey. Google Ads captures people already searching. Meta Ads builds awareness with people who will search later. We manage both under a single coordinated strategy."
  }
];

const GoogleAdsFaq = () => {
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
              className="inline-block text-blue-600"
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
                    className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500/10 text-blue-600 flex items-center justify-center"
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

export default GoogleAdsFaq;
