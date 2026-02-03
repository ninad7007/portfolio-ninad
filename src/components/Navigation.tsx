"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "Philosophy", href: "#philosophy" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Insights", href: "#insights" },
  { name: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section based on scroll position
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial state
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#0a0a0a]/90 backdrop-blur-md border-b border-[#222]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
                <span className="text-black font-bold text-lg">ND</span>
              </div>
              <span className="font-semibold text-[#ededed] hidden sm:block">
                Ninad Dighe Portfolio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`text-sm transition-colors duration-200 font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-[#00ff88]"
                      : "text-[#888] hover:text-[#00ff88]"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <a
                href="/Ninad_Dighe_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                className="px-4 py-2 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-lg font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Resume
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#888] hover:text-[#00ff88] transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0a]/98 backdrop-blur-lg md:hidden pt-20"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-xl transition-colors font-medium ${
                    activeSection === item.href.substring(1)
                      ? "text-[#00ff88]"
                      : "text-[#ededed] hover:text-[#00ff88]"
                  }`}
                >
                  {item.name}
                </motion.a>
              ))}
              <motion.a
                href="/Ninad_Dighe_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                type="application/pdf"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navItems.length * 0.1 }}
                className="mt-4 px-8 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-lg font-semibold text-lg"
              >
                Resume
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
