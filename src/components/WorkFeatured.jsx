"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const WorkFeatured = () => {
  return (
    <section className="w-full bg-white py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray/5 rounded-full border border-gray/10 mb-4">
            <span className="w-2 h-2 rounded-full bg-purple-dark animate-pulse" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-black">Featured Build</span>
          </div>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-black">
            Bypassing the B2B form.
          </h2>
        </div>

        {/* Featured Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Deep Dive Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h3 className="font-heading text-3xl font-bold text-black mb-4">
              PEXCO (Jeddah, KSA)
            </h3>
            <p className="font-body text-gray text-lg mb-8 leading-relaxed font-medium">
              Traditional B2B construction websites force users into complex lead forms that convert poorly in the Saudi market. For PEXCO, we engineered a completely custom Web Application designed entirely around high-intent WhatsApp conversions.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-black">WhatsApp-First Architecture</h4>
                  <p className="font-body text-gray text-sm mt-1">Directly routing procurement managers to sales reps.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-purple-dark flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-black">Lightning Fast Next.js Frontend</h4>
                  <p className="font-body text-gray text-sm mt-1">Sub-second load times ensuring zero friction on mobile.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-body font-bold text-black">Google Ads Native Integration</h4>
                  <p className="font-body text-gray text-sm mt-1">Perfect attribution from search term to closed deal.</p>
                </div>
              </div>
            </div>

            <Link
              href="/audit"
              className="group inline-flex items-center gap-2 font-body font-bold text-black border-b-2 border-black pb-1 hover:text-purple-dark hover:border-purple-dark transition-colors self-start"
            >
              Request a similar build
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Abstract UI / Visual Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative w-full aspect-square sm:aspect-video lg:aspect-square bg-[#0a0a0a] rounded-[2rem] overflow-hidden border border-gray/10 group shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
          >
            {/* Dynamic Gradients simulating a high-end UI */}
            <div className="absolute top-[-10%] right-[-10%] w-[70%] h-[70%] bg-green-light/20 blur-[80px] rounded-full group-hover:scale-110 group-hover:bg-green-light/30 transition-all duration-700"></div>
            <div className="absolute bottom-[-10%] left-[-10%] w-[70%] h-[70%] bg-purple-dark/20 blur-[80px] rounded-full group-hover:scale-110 group-hover:bg-purple-dark/30 transition-all duration-700"></div>
            
            {/* Mockup Frame */}
            <div className="absolute inset-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md overflow-hidden flex flex-col">
              {/* Browser Header */}
              <div className="w-full h-10 border-b border-white/10 bg-white/5 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              
              {/* Content Simulation */}
              <div className="flex-1 p-6 sm:p-8 flex flex-col gap-6 relative">
                {/* Simulated Text Blocks */}
                <div className="w-1/3 h-4 rounded-full bg-white/20"></div>
                <div className="w-3/4 h-8 rounded-lg bg-white/10"></div>
                <div className="w-2/3 h-8 rounded-lg bg-white/10"></div>
                
                {/* Huge Metric Callout */}
                <div className="absolute bottom-6 right-6 bg-white rounded-2xl p-6 shadow-2xl flex flex-col">
                  <span className="font-heading text-5xl font-black text-green-dark">2.4s</span>
                  <span className="font-body text-xs font-bold uppercase tracking-widest text-gray mt-1">Avg Time to Lead</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkFeatured;
