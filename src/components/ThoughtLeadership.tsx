"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Linkedin, MessageSquare, TrendingUp, Lightbulb } from "lucide-react";

const insights = [
  {
    title: "Why RAG is the New SQL",
    excerpt:
      "Every developer who learned SQL in the 2000s now needs to learn RAG. The shift from structured queries to semantic retrieval is as fundamental as the shift from files to databases.",
    category: "AI Engineering",
    icon: Lightbulb,
  },
  {
    title: "Production AI Systems",
    excerpt:
      "When your service can hallucinate, traditional metrics break down. Here's how I'm adapting engineering principles for systems where the output is probabilistic.",
    category: "AI Engineering",
    icon: TrendingUp,
  },
  {
    title: "Building in Public at Google Scale",
    excerpt:
      "After 5 years of building internal tools, I'm documenting what it's like to apply Google-scale thinking to startup problems.",
    category: "Career",
    icon: MessageSquare,
  },
];

const topicsOfExpertise = [
  "RAG Pipelines & Knowledge Graphs",
  "Full-Stack Development",
  "Kubernetes & GKE at Scale",
  "AI Automation Workflows",
  "Production Readiness",
  "System Design",
  "Distributed Systems",
  "Schema Design & Validation",
];

export default function ThoughtLeadership() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="insights"
      ref={ref}
      className="py-32 px-6 bg-[#080808] relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm mb-6">
            <span className="text-[#00ff88]">04.</span>
            <span className="text-[#888]">Insights</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Thought <span className="gradient-text">Leadership</span>
          </h2>
          <p className="text-xl text-[#888] max-w-3xl mx-auto">
            Sharing lessons from the intersection of AI engineering and production reliability.
            Follow my journey of building in public.
          </p>
        </motion.div>

        {/* Insights Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 bg-[#111] border border-[#222] rounded-xl card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-[#00ff88]/10 flex items-center justify-center">
                  <insight.icon size={20} className="text-[#00ff88]" />
                </div>
                <span className="text-xs text-[#00d4ff] font-mono uppercase tracking-wider">
                  {insight.category}
                </span>
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-[#00ff88] transition-colors">
                {insight.title}
              </h3>
              <p className="text-[#888] text-sm leading-relaxed">
                {insight.excerpt}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Topics of Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">
            Topics I Write About
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {topicsOfExpertise.map((topic, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                className="px-4 py-2 bg-[#111] border border-[#222] rounded-full text-sm hover:border-[#00ff88] hover:text-[#00ff88] transition-all cursor-default"
              >
                {topic}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* LinkedIn CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-[#111] to-[#0a0a0a] border border-[#222] rounded-2xl">
            <div className="w-16 h-16 rounded-xl bg-[#0077B5]/20 flex items-center justify-center mb-4">
              <Linkedin size={32} className="text-[#0077B5]" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Follow My Journey</h3>
            <p className="text-[#888] mb-6 max-w-md">
              Join me as I document lessons from building AI systems at scale,
              startup challenges, and the future of reliable AI.
            </p>
            <a
              href="https://linkedin.com/in/ninaddighe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg font-semibold hover:bg-[#006699] transition-colors"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
