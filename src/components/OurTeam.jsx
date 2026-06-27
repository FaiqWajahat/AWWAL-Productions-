"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Briefcase, Users, Code, Video, PenTool } from "lucide-react";

const teamMembers = [
  {
    name: "Harry",
    role: "Founder",
    icon: Briefcase,
    initials: "H",
    bgClass: "bg-gradient-to-br from-purple-dark to-[#2a0845]",
    textClass: "text-purple-300",
    skills: ["Vision", "Strategy", "Scale"],
  },
  {
    name: "Farhan",
    role: "Co-Founder",
    icon: Users,
    initials: "F",
    bgClass: "bg-gradient-to-br from-green-dark to-[#0f3d20]",
    textClass: "text-green-300",
    skills: ["Operations", "Systems", "Growth"],
  },
  {
    name: "Faiq Wajahat",
    role: "Web Developer",
    icon: Code,
    initials: "FW",
    bgClass: "bg-gradient-to-br from-gray-900 to-black",
    textClass: "text-gray-300",
    skills: ["React", "Next.js", "Performance"],
  },
  {
    name: "Abdullah",
    role: "Video Editor",
    icon: Video,
    initials: "A",
    bgClass: "bg-gradient-to-br from-purple-900 to-gray-900",
    textClass: "text-purple-200",
    skills: ["Motion", "Narrative", "Pacing"],
  },
  {
    name: "Shahvaiz",
    role: "Graphic Designer",
    icon: PenTool,
    initials: "S",
    bgClass: "bg-gradient-to-br from-green-900 to-gray-900",
    textClass: "text-green-200",
    skills: ["Brand ID", "UI/UX", "Visuals"],
  }
];

const OurTeam = () => {
  const [hoveredIndex, setHoveredIndex] = useState(0);

  const headingWords = "Meet the architects of".split(" ");

  return (
    <section className="w-full bg-background py-24 sm:py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      
      {/* Decorative Background Blob */}
      <motion.div 
        animate={{ y: [0, 50, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-light/5 rounded-full blur-[150px] pointer-events-none z-0"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring", stiffness: 80 }}
          className="flex flex-col items-center text-center mb-16 sm:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray/5 rounded-full border border-gray/10 mb-6 shadow-sm">
            <Users className="w-4 h-4 text-purple-dark" />
            <span className="font-body text-xs font-bold uppercase tracking-widest text-gray">The Engine Room</span>
          </div>
          
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter text-black leading-[1.05] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-2 max-w-4xl mx-auto">
            <div className="flex gap-x-3 flex-wrap justify-center">
              {headingWords.map((word, index) => (
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
            </div>
            
            <motion.span 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, type: "spring", stiffness: 80 }}
              className="inline-block text-purple-dark w-full text-center"
            >
              your growth.
            </motion.span>
          </h2>
          
          <p className="font-body text-gray font-medium text-lg max-w-2xl">
            A precise assembly of specialists, obsessed with building systems that scale and brands that dominate.
          </p>
        </motion.div>

        {/* Interactive Expansion Accordion */}
        <div className="flex flex-col lg:flex-row w-full h-[800px] lg:h-[600px] gap-3 sm:gap-4 max-w-7xl mx-auto p-2 bg-gray/5 rounded-[40px] border border-gray/10 shadow-inner">
          {teamMembers.map((member, idx) => {
            const isActive = hoveredIndex === idx;
            
            return (
              <motion.div
                key={idx}
                onHoverStart={() => setHoveredIndex(idx)}
                onClick={() => setHoveredIndex(idx)}
                animate={{ 
                  flex: isActive ? (typeof window !== 'undefined' && window.innerWidth < 1024 ? 3 : 4) : 1 
                }}
                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                className={`relative rounded-3xl overflow-hidden cursor-pointer flex items-end ${member.bgClass} shadow-xl group border border-white/10`}
              >
                
                {/* Giant Ambient Initials */}
                <motion.div
                  initial={false}
                  animate={{ 
                    opacity: isActive ? 0.15 : 0, 
                    scale: isActive ? 1 : 0.8,
                    x: isActive ? 0 : 20,
                  }}
                  transition={{ duration: 0.5 }}
                  className="absolute -right-8 -bottom-12 text-[200px] sm:text-[280px] font-heading font-black text-white pointer-events-none leading-none select-none"
                >
                  {member.initials}
                </motion.div>

                <div className="relative z-10 w-full h-full">
                  
                  {/* Unexpanded State (Compact Mode) */}
                  <motion.div 
                    initial={false}
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex flex-row lg:flex-col items-center justify-center gap-4 p-4 pointer-events-none"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/10">
                      <member.icon className="w-5 h-5 text-white/80" />
                    </div>
                    <span className="lg:-rotate-90 text-white/80 font-heading font-bold text-xl sm:text-2xl tracking-widest whitespace-nowrap origin-center">
                      {member.name}
                    </span>
                  </motion.div>

                  {/* Expanded State (Full Details) */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      opacity: isActive ? 1 : 0, 
                      y: isActive ? 0 : 20,
                      filter: isActive ? "blur(0px)" : "blur(4px)"
                    }}
                    transition={{ duration: 0.4, delay: isActive ? 0.1 : 0 }}
                    className="absolute inset-0 p-6 sm:p-10 flex flex-col justify-end gap-6 pointer-events-none"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center text-white border border-white/20 shadow-lg">
                      <member.icon className="w-8 h-8" />
                    </div>
                    
                    <div>
                      <h3 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-2 whitespace-nowrap tracking-tight">
                        {member.name}
                      </h3>
                      <p className={`font-body font-black uppercase tracking-[0.2em] text-sm ${member.textClass}`}>
                        {member.role}
                      </p>
                    </div>

                    <div className="flex gap-2 flex-wrap">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-4 py-2 rounded-full bg-black/30 backdrop-blur-md border border-white/10 text-white/90 text-xs sm:text-sm font-bold tracking-wide">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Hover Shine Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default OurTeam;
