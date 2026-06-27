"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "How is custom development different from using WordPress or Shopify?",
    answer: "Platform builds use an existing CMS or eCommerce engine as the foundation — giving you speed, an established ecosystem, and a lower build cost. Custom development builds the system from scratch or significantly extends a platform to handle requirements no existing platform addresses natively. We'll give you an honest recommendation in the scoping session."
  },
  {
    question: "What technologies do you build with?",
    answer: "For fully custom work: React/Next.js, Vue/Nuxt, Node.js, Python/FastAPI, Laravel, Supabase, and PostgreSQL. For AI integrations: OpenAI API (GPT-4o), Anthropic (Claude), Google AI, and vector databases like Pinecone. For automation: Make.com and Zapier. For platforms: Webflow, WordPress, Shopify, and Framer."
  },
  {
    question: "How do you integrate AI without it feeling gimmicky?",
    answer: "We only integrate AI where it solves a specific problem — reducing support volume, improving search quality, personalising content, or automating document processing. Every AI feature is scoped against a business outcome. If AI wouldn't meaningfully improve a metric, we don't add it."
  },
  {
    question: "How long does a custom build take?",
    answer: "A standard custom website can be completed in 3–4 weeks following the 5-step process. Full web applications with multiple user types, complex backend logic, and AI integrations typically take 6–12 weeks depending on scope. We'll give you an accurate timeline in the scoping session."
  },
  {
    question: "Do you work with businesses outside Pakistan and the Gulf?",
    answer: "Yes. We work with businesses globally. Our research methodology covers the USA, UK, UAE, India, and your local market regardless of where your business is based. The 5-step process applies everywhere — the market context changes, the process doesn't."
  },
  {
    question: "What's included in the ongoing support after launch?",
    answer: "Every custom project includes a 30-day post-launch monitoring period. After 30 days, we offer monthly CRO retainers — reviewing Clarity data, GA4 funnels, and user behaviour to implement improvements. Feature development and performance optimisation are available as standalone engagements."
  }
];

const CustomWebFaq = () => {
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
            {"Questions we hear before every custom".split(" ").map((word, index) => (
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
              className="inline-block text-blue-600"
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

export default CustomWebFaq;
