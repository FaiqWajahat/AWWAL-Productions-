"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How much does a WordPress website cost?",
    answer: "It depends on scope — number of pages, custom functionality, and whether a brand system needs to be built. We don't offer the cheapest option in the market — and we don't try to. We build websites that generate business results. We'll give you a clear quote after the free consultation."
  },
  {
    question: "How long does it take?",
    answer: "Our standard delivery is 21 days from discovery to launch. Days 1–2: discovery. Days 3–5: research. Days 6–8: design approval. Days 9–16: development. Days 17–21: review and launch. Larger projects take longer — we'll give you an accurate timeline on the call."
  },
  {
    question: "Do I need to provide content, or do you write it?",
    answer: "We write the copy for every page. Content strategy, headlines, body copy, CTAs — all included. What we need from you is your business information and your sign-off. You should never have to write your own copy when you hire an agency."
  },
  {
    question: "Can you redesign my existing WordPress website?",
    answer: "Yes. We start with a full audit of your current website — design, performance, SEO, tracking, and conversion architecture. Then we rebuild what needs to be rebuilt and improve what can be improved."
  },
  {
    question: "What happens after the website launches?",
    answer: "For the first 30 days, we monitor performance, review Clarity recordings, and address any issues. After 30 days, we offer ongoing monthly optimisation — making CRO improvements based on what your visitors are actually doing."
  },
  {
    question: "Will my website rank on Google?",
    answer: "We build the full SEO foundation (clean code, schema, fast load speeds). This is the prerequisite for ranking, but not a guarantee of position 1 overnight. Long-term SEO results depend on your competition and ongoing content strategy."
  }
];

const WordPressFaq = () => {
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
              className="inline-block text-green-dark"
            >
              project.
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

export default WordPressFaq;
