"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";

// Updated nav links with dropdown sub-links based on Awwal's services
const navLinks = [
  { name: "Home", href: "/" },
  { 
    name: "Services", 
    href: "#services",
    subLinks: [
      { name: "Meta & Google Ads", href: "#ads" },
      { name: "Custom Web Development", href: "#custom-web" },
      { name: "Shopify & E-Commerce", href: "#ecommerce" },
      { name: "Social Media Management", href: "#social-media" },
    ]
  },
  { name: "Work", href: "#work" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
  // { name: "Faqs", href: "#faqs" }
];

const Navbar = () => {
  const pathname = usePathname();
  const [activeHash, setActiveHash] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  // Track the current URL hash for active link states
  useEffect(() => {
    // Set initial hash on load
    setActiveHash(window.location.hash);

    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    
    // Clear hash and set 'Home' active if user scrolls back to the very top
    const handleScrollTarget = () => {
      if (window.scrollY < 50) {
        setActiveHash("");
      }
    };
    window.addEventListener("scroll", handleScrollTarget);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
      window.removeEventListener("scroll", handleScrollTarget);
    };
  }, []);

  // Helper function to determine if a link is currently active
  const isLinkActive = (link) => {
    if (link.href === "/") {
      // Home is active if we are on the root path and no hash is selected
      return pathname === "/" && activeHash === "";
    }
    
    // Check if the link itself matches the hash
    if (activeHash === link.href) return true;

    // Check if any child sublink matches the current hash (keeps parent "Services" active)
    if (link.subLinks) {
      return link.subLinks.some(sub => sub.href === activeHash);
    }

    return false;
  };

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  // Handle scroll effect for a crisp, light glassmorphism state
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Framer Motion variants for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.2, ease: "easeOut" }
    },
    exit: { 
      opacity: 0, 
      y: 5, 
      scale: 0.95,
      transition: { duration: 0.15, ease: "easeIn" }
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-300 ${
          isScrolled || isMobileMenuOpen
            ? "bg-white/95 backdrop-blur-lg border-b border-gray/10 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <Image src="/logo.png" alt="Awwal Logo" width={170} height={50} className="h-10 w-auto" />

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 lg:space-x-10 h-full">
              {navLinks.map((link) => {
                const active = isLinkActive(link);
                return (
                  <div 
                    key={link.name}
                    className="relative py-2"
                    onMouseEnter={() => link.subLinks && setActiveDropdown(link.name)}
                    onMouseLeave={() => link.subLinks && setActiveDropdown(null)}
                  >
                    <a
                      href={link.href}
                      className={`flex items-center gap-1 font-body text-sm font-bold uppercase tracking-[0.15em] transition-colors duration-300 group ${
                        active ? "text-purple-dark" : "text-gray hover:text-purple-dark"
                      }`}
                    >
                      {link.name}
                      {link.subLinks && (
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                          activeDropdown === link.name ? "rotate-180 text-purple-dark" : active ? "text-purple-dark" : "text-gray"
                        }`} />
                      )}
                    </a>

                    {/* Desktop Dropdown Menu - Clean Light Theme */}
                    {link.subLinks && (
                      <AnimatePresence>
                        {activeDropdown === link.name && (
                          <motion.div
                            variants={dropdownVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray/10 rounded-xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.08)]"
                          >
                            <div className="flex flex-col py-2">
                              {link.subLinks.map((subLink) => {
                                const isSubActive = activeHash === subLink.href;
                                return (
                                  <a
                                    key={subLink.name}
                                    href={subLink.href}
                                    className={`px-5 py-3 font-body text-sm font-medium tracking-wider transition-all duration-200 hover:bg-gray/5 ${
                                      isSubActive ? "text-purple-dark font-bold bg-purple-light/5" : "text-gray hover:text-black"
                                    }`}
                                  >
                                    {subLink.name}
                                  </a>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:flex items-center z-20">
              <a
                href="https://wa.me/YOUR_PHONE_NUMBER"
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm font-bold bg-black text-white px-7 py-3 rounded-full hover:bg-green-light hover:text-black transition-all duration-300 shadow-md hover:shadow-[0_8px_20px_rgba(175,206,48,0.4)] hover:-translate-y-0.5"
              >
                FREE AUDIT
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center z-20">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 -mr-2 text-black hover:text-purple-dark transition-colors focus:outline-none"
              >
                {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu - Light Theme */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute top-full left-0 w-full h-screen bg-white/95 backdrop-blur-2xl border-t border-gray/10 md:hidden flex flex-col overflow-y-auto"
            >
              <div className="px-4 py-8 flex flex-col space-y-6 flex-grow">
                {navLinks.map((link) => {
                  const active = isLinkActive(link);
                  return (
                    <div key={link.name} className="flex flex-col border-b border-gray/10 pb-4">
                      <a
                        href={link.href}
                        onClick={() => !link.subLinks && setIsMobileMenuOpen(false)}
                        className={`font-body text-xl font-bold uppercase tracking-widest block transition-colors ${
                          active ? "text-purple-dark" : "text-black"
                        }`}
                      >
                        {link.name}
                      </a>
                      
                      {/* Mobile Sub-links nested display */}
                      {link.subLinks && (
                        <div className="flex flex-col mt-4 pl-4 space-y-4 border-l-2 border-purple-light/30">
                          {link.subLinks.map((subLink) => {
                            const isSubActive = activeHash === subLink.href;
                            return (
                              <a
                                key={subLink.name}
                                href={subLink.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className={`font-body text-sm font-medium tracking-wider block transition-colors ${
                                  isSubActive ? "text-purple-dark font-bold" : "text-gray hover:text-purple-dark"
                                }`}
                              >
                                {subLink.name}
                              </a>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  );
                })}
                
                <div className="pt-6 mb-32 w-full max-w-sm mx-auto flex flex-col justify-center text-center">
                  <a
                    href="https://wa.me/YOUR_PHONE_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block font-body text-lg font-bold bg-green-light text-black px-8 py-4 rounded-full w-full shadow-[0_8px_20px_rgba(175,206,48,0.3)]"
                  >
                    GET FREE AUDIT
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;