"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Heart, Instagram, Users, Database, Bot, Cpu, Search } from "lucide-react";

const featuredProjects = [
  {
    title: "Foreverkind - Therapeutic AI Assistant",
    description:
      "Built an empathetic AI companion acting as a therapeutic assistant and life coach, utilizing LLMs for personalized mental wellness support. Implements RAG with Vector Databases (Pinecone) to maintain long-term context and track emotional progress.",
    tags: ["Python", "LLMs", "RAG", "Pinecone", "NLP", "Prompt Engineering"],
    icon: Heart,
    color: "#ff6b9d",
    highlights: [
      "Privacy-focused architecture",
      "Sentiment analysis guardrails",
      "Long-term memory with Vector DB",
    ],
    type: "personal",
  },
  {
    title: "Agentic Instagram Content Pipeline",
    description:
      "Architected an end-to-end autonomous pipeline using Python and LangChain to generate, schedule, and publish high-engagement content on Instagram without manual intervention. Integrates multimodal AI agents for trending analysis and visual asset generation.",
    tags: ["Python", "LangChain", "Instagram Graph API", "Generative AI"],
    icon: Instagram,
    color: "#E1306C",
    highlights: [
      "Fully autonomous content creation",
      "Multimodal AI agents",
      "Rate-limiting safeguards",
    ],
    type: "personal",
  },
  {
    title: "Dating App for Professionals",
    description:
      "Developed a secure, cross-platform dating application using Flutter, designed specifically for verified working professionals. Features AI-driven matchmaking algorithms analyzing professional trajectories and personality compatibility.",
    tags: ["Flutter", "Firebase", "AI", "WebSockets", "Microservices"],
    icon: Users,
    color: "#00d4ff",
    highlights: [
      "AI-driven matchmaking",
      "Real-time messaging",
      "Professional verification",
    ],
    type: "personal",
  },
  {
    title: "Detectr - Social Bug Discovery",
    description:
      "Designed and developed a tool for automated discovery of software bugs from social platforms (Reddit, X), automatically triaging tickets to relevant dev teams with actionable steps. Built at Google to streamline incident detection.",
    tags: ["Python", "NLP", "Social APIs", "Automation", "Triage"],
    icon: Search,
    color: "#00ff88",
    highlights: [
      "Automated bug discovery",
      "Social platform monitoring",
      "Intelligent ticket triage",
    ],
    type: "google",
  },
];

const workProjects = [
  {
    title: "Agentic RAG with Knowledge Graphs",
    description:
      "Architected Agentic RAG pipelines using LangChain and Knowledge Graphs for efficient long-term and short-term memory retrieval at Krazimo.",
    tags: ["LangChain", "Knowledge Graphs", "RAG"],
    icon: Database,
  },
  {
    title: "AI Launch Review Automation",
    description:
      "Engineered AI workflows at Google to automate launch reviews, reducing manual toil by 70%.",
    tags: ["AI Automation", "Google", "LLMs"],
    icon: Bot,
  },
  {
    title: "Schema Canarying Framework",
    description:
      "Developed schema canarying for internal databases, eliminating 90% of production data incidents.",
    tags: ["Database", "Safety", "Testing"],
    icon: Cpu,
  },
  {
    title: "GCP Incident Handler",
    description:
      "Built automated GCP incident handler for GKE and Anthos in GoLang, reducing response time by 50%.",
    tags: ["GoLang", "GKE", "Incident Response"],
    icon: Search,
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-32 px-6 bg-[#080808] relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#00d4ff]/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00ff88]/5 rounded-full blur-[150px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm mb-6">
            <span className="text-[#00ff88]">02.</span>
            <span className="text-[#888]">Projects</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="text-xl text-[#888] max-w-3xl mx-auto">
            From AI-powered wellness apps to autonomous content pipelines—projects that
            showcase full-stack development and agentic AI capabilities.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-8 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-[#111] border border-[#222] rounded-2xl overflow-hidden card-hover"
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  {/* Icon */}
                  <div
                    className="w-16 h-16 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${project.color}15` }}
                  >
                    <project.icon size={32} style={{ color: project.color }} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl font-bold group-hover:text-[#00ff88] transition-colors">
                        {project.title}
                      </h3>
                      <span
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          project.type === "personal"
                            ? "bg-[#00d4ff]/10 text-[#00d4ff]"
                            : "bg-[#00ff88]/10 text-[#00ff88]"
                        }`}
                      >
                        {project.type === "personal" ? "Personal" : "Google"}
                      </span>
                    </div>
                    <p className="text-[#888] mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-3 mb-6">
                      {project.highlights.map((highlight, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: project.color }}
                          />
                          <span className="text-[#ccc]">{highlight}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-[#1a1a1a] border border-[#333] rounded-full text-xs text-[#888] font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hover gradient border */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, ${project.color}10 0%, transparent 50%)`,
                }}
              />
            </motion.div>
          ))}
        </div>

        {/* Work Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center">
            Professional Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {workProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 bg-[#111] border border-[#222] rounded-xl card-hover"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-[#00ff88]/10 flex items-center justify-center shrink-0">
                    <project.icon size={24} className="text-[#00ff88]" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold group-hover:text-[#00ff88] transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-sm text-[#888] mt-1">{project.description}</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 ml-16">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs text-[#666] font-mono"
                    >
                      {tag}
                      {i < project.tags.length - 1 && " •"}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* GitHub CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://github.com/ninaddighe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-[#333] rounded-lg hover:border-[#00ff88] hover:text-[#00ff88] transition-all"
          >
            <Github size={20} />
            View More on GitHub
            <ExternalLink size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
