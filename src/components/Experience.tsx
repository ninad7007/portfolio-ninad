"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Building2, Calendar, MapPin, ChevronRight } from "lucide-react";

const experiences = [
  {
    company: "Krazimo",
    role: "Founding Software Engineer",
    period: "Oct 2025 - Present",
    location: "Bangalore, Karnataka",
    type: "current",
    description:
      "Building the future of AI-powered solutions from the ground up. Leading technical architecture and team development for multiple client projects.",
    highlights: [
      "Architected Agentic RAG pipelines using LangChain and Knowledge Graphs for efficient long-term and short-term memory retrieval",
      "Orchestrated technical roadmap for client teams, establishing code review standards, CI/CD pipelines, and mentorship protocols",
      "Resolved critical scalability bottlenecks and data leaks, enabling successful go-to-market strategy",
      "Spearheaded full-stack Agentic AI solutions (Python, GoLang, Web3) including on-chain information retrieval and AI-driven sales training platform",
    ],
    technologies: ["LangChain", "RAG", "Python", "GoLang", "Web3", "Knowledge Graphs"],
  },
  {
    company: "Google",
    role: "Software Engineer",
    period: "Oct 2023 - Oct 2025",
    location: "Bangalore, Karnataka",
    type: "google",
    description:
      "Building scalable infrastructure and pioneering AI-driven automation for critical systems at Google scale.",
    highlights: [
      "Engineered AI workflows to automate launch review process, reducing manual effort by 70%",
      "Achieved 100% reduction in Recovery Time Objective (RTO) with Point-in-Time restore capabilities",
      "Developed schema canarying framework eliminating 90% of production data incidents",
      "Designed and built 'Detectr' - automated bug discovery from social platforms (Reddit, X) with intelligent ticket triage",
      "Led technical reviews for major service launches, driving architectural improvements",
      "Improved Android/iOS workflow reliability with priority-based load shedding, reducing task overloads by 80%",
    ],
    technologies: ["AI Automation", "Python", "Distributed Systems", "Schema Validation", "Infrastructure"],
  },
  {
    company: "Google",
    role: "Technical Solutions Engineer, Google Cloud",
    period: "Aug 2020 - Sep 2023",
    location: "Bangalore, Karnataka",
    type: "google",
    description:
      "Subject matter expert in GKE and Anthos, resolving critical incidents for premium cloud customers including Spotify, Snap, and Flipkart.",
    highlights: [
      "Developed automated GCP incident handler for GKE and Anthos in GoLang, reducing incident response time by 50%",
      "Automated GKE autoscaling troubleshooting using 'Troublemaker' with 80% automatic detection rate",
      "Acted as SME for GKE and Anthos, resolving high-severity incidents for premium enterprise customers",
      "Worked with Spotify, Snap, Flipkart and other enterprise clients on critical infrastructure issues",
    ],
    technologies: ["GKE", "Kubernetes", "Anthos", "GoLang", "Google Cloud", "Incident Management"],
  },
  {
    company: "Hermitcrabs",
    role: "Software Engineer",
    period: "Jan 2020 - Jun 2020",
    location: "Bangalore, Karnataka",
    type: "startup",
    description:
      "Early-stage startup experience building full-stack solutions for internal team management.",
    highlights: [
      "Built full-stack website for task assignment and intern management",
      "Designed performance assessment dashboards for administrators",
    ],
    technologies: ["Full Stack", "Web Development", "Dashboard Design"],
  },
];

const skills = {
  core: [
    "Software Engineering & System Design",
    "Full-Stack Development",
    "AI/ML & Agentic Workflows",
    "Cloud Architecture (GCP)",
    "Problem Solving & Algorithms",
  ],
  languages: [
    "Python",
    "GoLang",
    "C++",
    "JavaScript/TypeScript",
    "Flutter",
  ],
  tools: [
    "Kubernetes",
    "Docker",
    "Terraform",
    "LangChain",
    "TensorFlow",
  ],
};

const education = {
  school: "PES University",
  degree: "B.Tech, Computer Science Engineering",
  period: "Aug 2016 - Aug 2020",
  gpa: "8.5 CGPA",
  location: "Bangalore, Karnataka",
};

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-32 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00ff88]/5 rounded-full blur-[150px]" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#111] border border-[#222] rounded-full font-mono text-sm mb-6">
            <span className="text-[#00ff88]">03.</span>
            <span className="text-[#888]">Experience</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Journey</span>
          </h2>
          <p className="text-xl text-[#888] max-w-3xl mx-auto">
            6+ years of experience from Google Cloud to founding engineer—a progression in scale
            and AI innovation.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#00ff88] via-[#00d4ff] to-[#333] md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative mb-12 md:w-1/2 ${
                index % 2 === 0 ? "md:pr-12 md:ml-0" : "md:pl-12 md:ml-auto"
              }`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-0 w-4 h-4 rounded-full border-4 border-[#0a0a0a] ${
                  exp.type === "current"
                    ? "bg-[#00ff88] glow-green"
                    : exp.type === "google"
                    ? "bg-[#00d4ff]"
                    : "bg-[#888]"
                } ${
                  index % 2 === 0
                    ? "left-0 md:left-auto md:right-0 md:translate-x-1/2"
                    : "left-0 md:-translate-x-1/2"
                } -translate-x-1/2 md:translate-x-0`}
                style={{ marginLeft: index % 2 === 0 ? "" : "-2px" }}
              />

              {/* Content Card */}
              <div className="ml-8 md:ml-0 p-6 bg-[#111] border border-[#222] rounded-xl card-hover">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Building2 size={16} className="text-[#00ff88]" />
                      <span className="font-bold text-lg">{exp.company}</span>
                      {exp.type === "current" && (
                        <span className="px-2 py-0.5 bg-[#00ff88]/10 text-[#00ff88] text-xs rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-[#ccc]">
                      {exp.role}
                    </h3>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex flex-wrap gap-4 mb-4 text-sm text-[#888]">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[#888] mb-4">{exp.description}</p>

                {/* Highlights */}
                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <ChevronRight
                        size={16}
                        className="text-[#00ff88] shrink-0 mt-0.5"
                      />
                      <span className="text-[#ccc]">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-[#1a1a1a] border border-[#333] rounded text-xs text-[#888] font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-[#111] border border-[#222] rounded-xl">
              <h4 className="font-bold text-[#00ff88] mb-4">Core Competencies</h4>
              <ul className="space-y-2">
                {skills.core.map((skill, i) => (
                  <li key={i} className="text-sm text-[#ccc] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00ff88] rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-[#111] border border-[#222] rounded-xl">
              <h4 className="font-bold text-[#00d4ff] mb-4">Languages</h4>
              <ul className="space-y-2">
                {skills.languages.map((skill, i) => (
                  <li key={i} className="text-sm text-[#ccc] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#00d4ff] rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 bg-[#111] border border-[#222] rounded-xl">
              <h4 className="font-bold text-[#ffd93d] mb-4">Tools & Frameworks</h4>
              <ul className="space-y-2">
                {skills.tools.map((skill, i) => (
                  <li key={i} className="text-sm text-[#ccc] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#ffd93d] rounded-full" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Education</h3>
          <div className="p-6 bg-[#111] border border-[#222] rounded-xl max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00ff88]/20 to-[#00d4ff]/20 flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg">{education.school}</h4>
                <p className="text-[#888]">{education.degree}</p>
                <div className="flex flex-wrap gap-4 mt-2 text-sm text-[#666]">
                  <span>{education.period}</span>
                  <span className="text-[#00ff88]">{education.gpa}</span>
                  <span>{education.location}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
