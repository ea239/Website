"use client";
import React from "react";
import { FaPython, FaReact, FaNodeJs, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTensorflow, SiCplusplus, SiRos } from "react-icons/si";
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
      { icon: null, label: "LLM" },
      { icon: <FaNodeJs />, label: "CLI" },
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
      { icon: <FaJava />, label: "Flask" },
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
      { icon: null, label: "Gazebo" },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-accent">Experience</h1>
        <div className="border-l-2 border-accent/40 pl-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company + idx}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
              style={{ position: 'relative', marginBottom: '2.5rem' }}
            >
              <div className="absolute -left-5 top-3 w-3 h-3 bg-neon rounded-full shadow-lg" />
              <div className="bg-primary/80 rounded-lg shadow-md p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                  <span className="font-mono text-sm text-white/60">{exp.time}</span>
                  <div className="flex gap-2 flex-wrap">
                    {exp.tech.map((t, i) => (
                      <span key={i} className="group relative flex items-center">
                        {t.icon && <span className="text-accent text-lg">{t.icon}</span>}
                        <span className="absolute left-1/2 -translate-x-1/2 top-8 scale-0 group-hover:scale-100 transition bg-black/80 text-xs text-white px-2 py-1 rounded shadow-lg z-10 whitespace-nowrap">{t.label}</span>
                      </span>
                    ))}
                  </div>
                </div>
                <h2 className="text-xl font-bold text-neon mb-1">{exp.company} <span className="text-white/80 font-normal text-base">| {exp.role}</span></h2>
                <ul className="list-disc pl-5 text-white/90 space-y-1">
                  {exp.duties.map((d, i) => (
                    <li key={i}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
