"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot, Code2, Database, LayoutTemplate, LineChart, Network } from "lucide-react";

const categories = [
  { id: "platforms", label: "Platforms", icon: <LayoutTemplate className="w-5 h-5" /> },
  { id: "frontend", label: "Frontend", icon: <Code2 className="w-5 h-5" /> },
  { id: "backend", label: "Backend", icon: <Database className="w-5 h-5" /> },
  { id: "ai", label: "AI & Intelligence", icon: <Bot className="w-5 h-5" /> },
  { id: "analytics", label: "Analytics", icon: <LineChart className="w-5 h-5" /> },
  { id: "integrations", label: "Integrations", icon: <Network className="w-5 h-5" /> },
];

const techData = {
  platforms: [
    { name: "WordPress", desc: "43% of the internet. Used for content-heavy sites, B2B, and flexible foundations. (Gutenberg, Elementor, ACF, WooCommerce)." },
    { name: "Shopify", desc: "Purpose-built to sell. The most conversion-optimised checkout on the market. Custom themes, Metafields, and Shopify Functions." },
    { name: "Webflow", desc: "Design-first, pixel-perfect output. Used for brands where visual excellence is non-negotiable — SaaS, premium products, agencies." },
    { name: "Framer", desc: "The fastest platform for stunning, interactive marketing sites. Exceptional interaction design with rapid deployment speed." },
  ],
  frontend: [
    { name: "React / Next.js", desc: "For dynamic, component-driven interfaces with SSR. Ideal for SaaS dashboards, multi-user platforms, and massive scale." },
    { name: "Vue.js / Nuxt.js", desc: "Progressive framework for flexible UI layers or content-heavy sites needing SSR performance with Vue's component model." },
    { name: "Tailwind CSS", desc: "Our default utility-first CSS framework. Consistent design system enforcement, rapid development, and clean code." },
  ],
  backend: [
    { name: "Node.js / Express", desc: "For real-time applications and API-first architectures. Handles high-concurrency for platforms serving web and mobile simultaneously." },
    { name: "Python / FastAPI", desc: "For data-intensive apps and AI integrations. High-performance API layers connecting ML models to web interfaces." },
    { name: "Laravel (PHP)", desc: "Full-stack MVC architecture for complex business logic, eCommerce, and booking systems." },
    { name: "Supabase / PostgreSQL", desc: "Open-source BaaS for real-time data, row-level security, and a scalable Postgres foundation." },
    { name: "Firebase", desc: "Real-time sync for collaborative apps, live chat, and notification systems." },
  ],
  ai: [
    { name: "Semantic Search", desc: "Vector database integration (Pinecone, pgvector). Users find what they mean, not just what they type." },
    { name: "Conversational AI", desc: "Custom assistants built on GPT-4o or Claude 3.5, trained specifically on your business knowledge and pricing." },
    { name: "Dynamic Personalisation", desc: "Content that adapts to visitor behaviour. AI-assisted product descriptions and dynamic A/B testing." },
    { name: "Document Intelligence", desc: "Extract and route structured data from PDFs, contracts, and spreadsheets automatically (LangChain, LlamaIndex)." },
    { name: "Predictive Analytics", desc: "Product recommendation engines and churn prediction models integrated directly into your platform." },
  ],
  analytics: [
    { name: "Google Analytics 4", desc: "Full event-based tracking, custom funnels, and attribution modelling. Installed and verified on every project." },
    { name: "Microsoft Clarity", desc: "Session recordings, heatmaps, and AI-powered behavioural summaries to convert patterns into improvements." },
    { name: "Custom Dashboards", desc: "Metabase, Grafana, or Retool dashboards surfacing exactly what you need: revenue by cohort, churn, and LTV." },
  ],
  integrations: [
    { name: "WhatsApp API", desc: "Click-to-WhatsApp routing directly to CRM. The highest-converting contact channel, treated as a first-class integration." },
    { name: "CRM Systems", desc: "HubSpot, Salesforce, Zoho, Pipedrive. Leads routed automatically into the right pipeline stage." },
    { name: "Payment Gateways", desc: "Stripe, PayPal, Razorpay, HyperPay. Multi-currency architectures for international scaling." },
    { name: "Automation (Make/Zapier)", desc: "Form submitted → CRM updated → WhatsApp sent → invoice created. The workflow runs instantly." },
  ],
};

const CustomWebStack = () => {
  const [activeTab, setActiveTab] = useState("platforms");

  return (
    <section className="w-full bg-gray/5 py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 rounded-full border border-blue-500/20 mb-8">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-blue-600">The Technology</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black leading-[1.05] mb-6">
            We don't have a favourite technology. <br className="hidden sm:block" />
            <span className="text-blue-600">We have a problem to solve.</span>
          </h2>
          <p className="font-body text-gray font-medium text-lg max-w-2xl mx-auto">
            The platforms, frameworks, and AI tools we build with — and when we choose each one.
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-body font-bold text-sm sm:text-base transition-all duration-300 ${
                activeTab === cat.id 
                  ? "bg-black text-white shadow-md scale-105" 
                  : "bg-white text-gray border border-gray/10 hover:bg-gray/5"
              }`}
            >
              {cat.icon}
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {techData[activeTab].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-white border border-gray/10 p-8 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="font-heading text-2xl font-bold text-black mb-3">{item.name}</h3>
                  <p className="font-body text-gray font-medium leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default CustomWebStack;
