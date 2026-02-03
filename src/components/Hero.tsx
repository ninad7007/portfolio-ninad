"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-[#00ff88]/10 rounded-full blur-[100px]"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#00d4ff]/10 rounded-full blur-[100px]"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal-style intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm">
            <span className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
            <span className="text-[#888]">Available for opportunities</span>
          </div>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
        >
          Building the Future,{" "}
          <span className="gradient-text">Reliably.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl text-[#888] mb-8 max-w-3xl mx-auto"
        >
          Founding Software Engineer at{" "}
          <span className="text-[#00ff88]">Krazimo</span> | Ex-Google Software Engineer |
          6+ years building scalable,{" "}
          <span className="text-[#00d4ff]">AI-driven systems</span>
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-8 mb-12"
        >
          {[
            { value: "6+", label: "Years Experience" },
            { value: "5+", label: "Years at Google" },
            { value: "10+", label: "Projects Shipped" },
            { value: "AI", label: "First Approach" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-[#888]">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <a
            href="#projects"
            className="px-8 py-4 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black rounded-lg font-semibold text-lg hover:opacity-90 transition-all hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-4 border border-[#333] rounded-lg font-semibold text-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
          >
            Get In Touch
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex justify-center gap-6"
        >
          {[
            { icon: Github, href: "https://github.com/ninaddighe", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com/in/ninaddighe", label: "LinkedIn" },
            { icon: Mail, href: "mailto:dighe.ninad7@gmail.com", label: "Email" },
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 border border-[#333] rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all hover:scale-110"
              aria-label={social.label}
            >
              <social.icon size={24} />
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#philosophy"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-[#888] hover:text-[#00ff88] transition-colors"
        >
          <span className="text-sm font-mono">scroll</span>
          <ChevronDown size={20} />
        </motion.a>
      </motion.div>
    </section>
  );
}
