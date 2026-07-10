"use client";
import React from "react";
import { FaPython, FaReact, FaNodeJs, FaFlask } from "react-icons/fa";
import { SiSpringboot, SiTensorflow, SiCplusplus, SiRos, SiOpenai } from "react-icons/si";
import { FiTerminal, FiBox } from "react-icons/fi";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

const experiences = [
  {
    time: "Jan 2025 – Apr 2025",
    company: "AsiaInfo",
    role: "AI Intern Engineer",
    duties: [
      "Built internal LLM inference workflows and improved deployment readiness for downstream use.",
      "Developed CLI utilities to speed up data processing and operational workflows.",
      "Supported model API integration for production-facing internal tooling."
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiOpenai />, label: "LLM" },
      { icon: <FiTerminal />, label: "CLI" },
    ],
  },
  {
    time: "Mar 2024 – May 2024",
    company: "Website Builder Startup",
    role: "Frontend Developer Intern",
    duties: [
      "Implemented frontend component architecture for visual site editing workflows.",
      "Built drag-and-drop interactions with real-time preview support.",
      "Improved interaction flow and responsiveness for core user actions."
    ],
    tech: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
    ],
  },
  {
    time: "Dec 2023 – Feb 2024",
    company: "AI Lab",
    role: "AI Research Assistant",
    duties: [
      "Trained and iterated on deep learning models for applied research tasks.",
      "Built Flask API services to expose model capabilities.",
      "Produced technical documentation to support reproducibility and handoff."
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiTensorflow />, label: "TensorFlow" },
      { icon: <FaFlask />, label: "Flask" },
    ],
  },
  {
    time: "Sep 2022 – Dec 2022",
    company: "Yaoxuanyuan Robotics",
    role: "Robotics Algorithm Intern",
    duties: [
      "Implemented multi-sensor data fusion and SLAM algorithms",
      "Built and tested simulation environments",
      "Participated in ROS/Gazebo system development"
    ],
    tech: [
      { icon: <SiCplusplus />, label: "C++" },
      { icon: <SiRos />, label: "ROS" },
      { icon: <FiBox />, label: "Gazebo" },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-accent mb-2">// experience</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-12 text-white">Experience</h1>
        </motion.div>

        <ol className="relative ml-3 space-y-10 before:absolute before:left-0 before:top-1 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-accent/70 before:via-accent/25 before:to-transparent">
          {experiences.map((exp, idx) => (
            <motion.li
              key={exp.company + idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
              className="relative pl-8"
            >
              <span className="absolute -left-[6px] top-1.5 w-3 h-3 rounded-full bg-accent shadow-[0_0_12px_rgba(56,189,248,0.9)] ring-4 ring-accent/15" />
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-accent/40 hover:bg-white/[0.05] transition-colors duration-300">
                <p className="font-mono text-xs text-white/40 mb-2">{exp.time}</p>
                <h2 className="text-lg font-bold text-white mb-0.5">{exp.role}</h2>
                <p className="text-accent font-medium mb-4">{exp.company}</p>
                <ul className="space-y-2 mb-5">
                  {exp.duties.map((d, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-white/75 leading-relaxed">
                      <span className="text-accent mt-0.5 shrink-0">▹</span>
                      {d}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-md bg-white/5 border border-white/10 text-white/70 font-mono"
                    >
                      <span className="text-accent text-sm leading-none">{t.icon}</span>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </section>
    </main>
  );
}
