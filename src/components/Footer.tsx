"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-[#222]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00ff88] to-[#00d4ff] flex items-center justify-center">
                <span className="text-black font-bold text-sm">ND</span>
              </div>
              <span className="font-bold">Ninad Dighe</span>
            </div>
            <p className="text-sm text-[#888]">
              © {currentYear} All rights reserved.
            </p>
          </div>

          {/* Built With */}
          <div className="flex items-center gap-1 text-sm text-[#888]">
            <span>Built with</span>
            <Heart size={14} className="text-[#ff6b6b] fill-[#ff6b6b]" />
            <span>using Next.js & Tailwind</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/ninaddighe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#888] hover:text-[#00ff88] transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/ninaddighe"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#888] hover:text-[#00ff88] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:dighe.ninad7@gmail.com"
              className="p-2 text-[#888] hover:text-[#00ff88] transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mt-8 pt-8 border-t border-[#1a1a1a] text-center">
          <p className="text-xs text-[#666] font-mono">
            Next.js 15 • Tailwind CSS • Framer Motion • Vercel
          </p>
        </div>
      </div>
    </footer>
  );
}
