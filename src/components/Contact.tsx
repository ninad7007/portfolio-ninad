"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Github, Linkedin, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dighe.ninad7@gmail.com",
      href: "mailto:dighe.ninad7@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9175348865",
      href: "tel:+919175348865",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Bangalore, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/ninaddighe",
      color: "#fff",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/ninaddighe",
      color: "#0077B5",
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-t from-[#00ff88]/10 to-transparent rounded-full blur-[100px]" />

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm mb-6">
            <span className="text-[#00ff88]">05.</span>
            <span className="text-[#888]">Contact</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-[#888] max-w-2xl mx-auto">
            Whether you&apos;re looking for a founding engineer, need help with
            AI/reliability systems, or just want to chat about technology—I&apos;m
            always open to new conversations.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 bg-[#111] border border-[#222] rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#1a1a1a] flex items-center justify-center group-hover:bg-[#00ff88]/10 transition-colors">
                    <item.icon
                      size={20}
                      className="text-[#888] group-hover:text-[#00ff88] transition-colors"
                    />
                  </div>
                  <div>
                    <div className="text-sm text-[#888]">{item.label}</div>
                    <div className="font-medium group-hover:text-[#00ff88] transition-colors">
                      {item.value}
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-[#222]">
              <div className="text-sm text-[#888] mb-4">Find me on</div>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-[#1a1a1a] rounded-lg hover:bg-[#222] transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon
                      size={24}
                      className="text-[#888] group-hover:text-[#00ff88] transition-colors"
                    />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Message */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-8 bg-[#111] border border-[#222] rounded-2xl"
          >
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form
              action="mailto:dighe.ninad7@gmail.com"
              method="post"
              encType="text/plain"
              className="space-y-4"
            >
              <div>
                <label className="block text-sm text-[#888] mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm text-[#888] mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-sm text-[#888] mb-2">Message</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333] rounded-lg focus:border-[#00ff88] focus:outline-none transition-colors resize-none"
                  placeholder="What would you like to discuss?"
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] text-black font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>

        {/* Availability Status */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-[#111] border border-[#222] rounded-full">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00ff88] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#00ff88]"></span>
            </span>
            <span className="text-[#888]">
              Currently open to{" "}
              <span className="text-[#00ff88] font-medium">
                founding engineer roles
              </span>{" "}
              and{" "}
              <span className="text-[#00ff88] font-medium">
                consulting opportunities
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
