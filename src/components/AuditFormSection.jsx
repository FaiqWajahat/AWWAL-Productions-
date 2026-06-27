"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const AuditFormSection = () => {
  const [formState, setFormState] = useState("idle"); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState("submitting");
    // Simulate form submission
    setTimeout(() => {
      setFormState("success");
    }, 1500);
  };

  return (
    <section className="w-full bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        
        {/* Left Column: Context & Alternative Contact */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col"
        >
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-black mb-6">
            What happens after you submit?
          </h2>
          <div className="space-y-8 mb-12">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-light/20 flex items-center justify-center text-green-dark font-bold font-heading">
                1
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-black mb-2">We review your request</h3>
                <p className="font-body text-gray leading-relaxed">Our strategists analyze your website, current ads, or project requirements within 4 business hours.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-light/20 flex items-center justify-center text-purple-dark font-bold font-heading">
                2
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-black mb-2">We prepare the Audit / Quote</h3>
                <p className="font-body text-gray leading-relaxed">We map out the exact bottlenecks in your current setup, or scope out the timeline and architecture for your new build.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 font-bold font-heading">
                3
              </div>
              <div>
                <h3 className="font-heading text-xl font-bold text-black mb-2">We send it over</h3>
                <p className="font-body text-gray leading-relaxed">You receive a clear, actionable document. No high-pressure sales calls. Just the strategy and the numbers.</p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-gray/5 border border-gray/10 rounded-3xl">
            <h3 className="font-heading text-xl font-bold text-black mb-4">Need answers faster?</h3>
            <p className="font-body text-gray mb-6">We respond on WhatsApp within minutes during business hours.</p>
            <a
              href="https://wa.me/YOUR_PHONE_NUMBER"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-body font-bold rounded-full hover:bg-[#1ebd5a] transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Message us on WhatsApp
            </a>
          </div>
        </motion.div>

        {/* Right Column: The Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white border border-gray/10 shadow-[0_20px_40px_rgba(0,0,0,0.04)] rounded-[2rem] p-8 sm:p-10">
            {formState === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16">
                <div className="w-20 h-20 bg-green-light/20 text-green-dark rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-black mb-4">Request Received</h3>
                <p className="font-body text-gray text-lg mb-8 max-w-sm">
                  We are reviewing your details and will get back to you with your custom audit or quotation shortly.
                </p>
                <button 
                  onClick={() => setFormState("idle")}
                  className="font-body font-bold text-black border-b border-black pb-1 hover:text-green-dark hover:border-green-dark transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body font-bold text-sm text-black uppercase tracking-wider">First Name</label>
                    <input required type="text" className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all" placeholder="John" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body font-bold text-sm text-black uppercase tracking-wider">Last Name</label>
                    <input required type="text" className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all" placeholder="Doe" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-body font-bold text-sm text-black uppercase tracking-wider">Work Email</label>
                    <input required type="email" className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all" placeholder="john@company.com" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-body font-bold text-sm text-black uppercase tracking-wider">Phone / WhatsApp</label>
                    <input required type="tel" className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all" placeholder="+1 (555) 000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-bold text-sm text-black uppercase tracking-wider">Company URL</label>
                  <input type="url" className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all" placeholder="https://yourwebsite.com" />
                </div>

                <div className="space-y-2">
                  <label className="font-body font-bold text-sm text-black uppercase tracking-wider">What do you need help with?</label>
                  <select required className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all appearance-none cursor-pointer">
                    <option value="" disabled selected>Select an option...</option>
                    <option value="meta-ads">Meta Ads Audit / Management</option>
                    <option value="google-ads">Google Ads Audit / Management</option>
                    <option value="wordpress">WordPress Website Build</option>
                    <option value="custom-web">Custom Web Application</option>
                    <option value="other">Other / General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-body font-bold text-sm text-black uppercase tracking-wider">Project Details (Optional)</label>
                  <textarea rows={4} className="w-full bg-gray/5 border border-gray/10 rounded-xl px-4 py-3 font-body focus:outline-none focus:ring-2 focus:ring-green-light focus:border-transparent transition-all resize-none" placeholder="Tell us about your current challenges or your vision for the project..."></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={formState === "submitting"}
                  className="w-full group flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl hover:bg-green-dark hover:shadow-[0_8px_30px_rgba(105,157,10,0.3)] transition-all duration-300 font-body font-bold text-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {formState === "submitting" ? "Submitting..." : "Request My Free Audit"}
                  {formState !== "submitting" && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                </button>
                <p className="text-center font-body text-xs text-gray mt-4">
                  By submitting, you agree to our privacy policy. We will never spam you.
                </p>
              </form>
            )}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default AuditFormSection;
