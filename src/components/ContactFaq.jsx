"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is the first consultation really free?",
    answer: "Yes. The 30-minute strategy session costs you nothing and commits you to nothing. We cover your business economics, your current situation, and the highest-leverage opportunity — and you leave with a clear picture regardless of what happens next."
  },
  {
    question: "What if I don't know my business numbers yet?",
    answer: "That's completely fine. Most business owners haven't formally calculated their CAC and LTV — and that's exactly the kind of conversation we have in the first session. You don't need to arrive with a spreadsheet. You just need to know roughly what you sell and at what price."
  },
  {
    question: "How quickly can you start?",
    answer: "It depends on our current client intake. We'll tell you honestly on the first call whether we have capacity and what a realistic start timeline looks like. If there's a wait, we'll tell you that too — and you can decide whether it's worth it."
  },
  {
    question: "Do you work with businesses outside Pakistan and the Gulf?",
    answer: "Yes. We work with businesses globally. Our process — business economics first, 5-country global competitor research, strategy before execution — applies regardless of where your business is based. The markets change. The methodology doesn't."
  },
  {
    question: "What's the minimum engagement size?",
    answer: "It depends on the service. Meta Ads and Google Ads require a minimum ad spend to generate meaningful data — we'll tell you what that floor is for your specific market on the call. Website projects are scoped individually. We don't have a minimum retainer number that applies across all services."
  },
  {
    question: "Can I get a proposal before the call?",
    answer: "We don't send proposals before we understand your business — because a proposal written without that understanding isn't a proposal, it's a guess dressed up in a PDF. The first call is how we get what we need to give you a recommendation that's actually worth reading."
  }
];

const ContactFaq = () => {
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
            {"Quick answers before you".split(" ").map((word, index) => (
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
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-dark"
            >
              reach out.
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

export default ContactFaq;
