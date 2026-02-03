"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Shield, Gauge, Brain } from "lucide-react";

const principles = [
  {
    icon: Brain,
    title: "AI-First Engineering",
    description:
      "Leveraging RAG pipelines, knowledge graphs, and agentic workflows to build intelligent systems that learn and adapt. From automated launch reviews to context-aware retrieval, AI is at the core of my approach.",
    color: "#00ff88",
  },
  {
    icon: Shield,
    title: "Guardrails & Safety",
    description:
      "Production AI needs deterministic outputs and fail-safes. Schema canarying, load shedding, and rigorous testing ensure systems are safe before they scale. 90% of data incidents eliminated through proactive validation.",
    color: "#00d4ff",
  },
  {
    icon: Gauge,
    title: "Scalability",
    description:
      "From GKE clusters serving millions at Spotify to critical Android/iOS workflows at Fitbit—engineering principles applied to every layer. Load testing frameworks that forecast AI resource utilization before deployment.",
    color: "#ff6b6b",
  },
  {
    icon: Zap,
    title: "Speed to Production",
    description:
      "Zero to one is my comfort zone. Rapid prototyping with full-stack implementations, CI/CD pipelines that prove reliability, and deployment infrastructure that scales with your go-to-market timeline.",
    color: "#ffd93d",
  },
];

export default function Philosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="philosophy"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ff88]/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm mb-6">
            <span className="text-[#00ff88]">01.</span>
            <span className="text-[#888]">Philosophy</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            AI + Reliability = <span className="gradient-text">Production Ready</span>
          </h2>
          <p className="text-xl text-[#888] max-w-3xl mx-auto">
            My engineering philosophy bridges the gap between innovation and stability.
            Here&apos;s how I think about building systems that scale.
          </p>
        </motion.div>

        {/* Principles Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 bg-[#111] border border-[#222] rounded-2xl card-hover"
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all group-hover:scale-110"
                style={{ backgroundColor: `${principle.color}15` }}
              >
                <principle.icon
                  size={28}
                  style={{ color: principle.color }}
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-[#00ff88] transition-colors">
                {principle.title}
              </h3>
              <p className="text-[#888] leading-relaxed">
                {principle.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <blockquote className="text-2xl md:text-3xl font-light text-[#888] italic">
            &ldquo;The best code is code that doesn&apos;t wake you up at 3am.&rdquo;
          </blockquote>
          <p className="mt-4 text-[#00ff88] font-mono">
            — Lessons from 5 years at Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
