"use client";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

const projects = [
  {
    name: "Website Builder Platform",
    time: "Mar 2024 – May 2024",
    desc: "Low-code website builder with drag-and-drop editing and one-click publishing.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/evan-zhang/website-builder",
    detail: "Built core frontend architecture for drag-and-drop, real-time preview, and template workflows with collaboration-aware backend integration.",
  },
  {
    name: "AI Image Classification",
    time: "Dec 2023 – Feb 2024",
    desc: "Deep-learning image classification pipeline with model serving and result visualization.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/evan-zhang/ai-image-classification",
    detail: "Owned model training and API deployment, plus a lightweight interface for predictions and result review.",
  },
  {
    name: "Airplane Battle Game",
    time: "Aug 2023 – Oct 2023",
    desc: "2D C++ game with multi-weapon combat and staged progression.",
    tech: ["C++", "SDL2"],
    github: "https://github.com/evan-zhang/airplane-battle",
    detail: "Built game engine logic, level progression, collision handling, and animation systems.",
  },
  {
    name: "Text Emotion Detection Paper",
    time: "May 2023 – Jul 2023",
    desc: "Emotion recognition paper proposing an LSTM-based text sentiment analysis method.",
    tech: ["Python", "PyTorch"],
    github: "https://github.com/evan-zhang/text-emotion-paper",
    detail: "Responsible for model design and experiments, paper accepted by university conference.",
  },
  {
    name: "CLI Tool + LLM Fine-tuning (AsiaInfo)",
    time: "Jan 2023 – Apr 2023",
    desc: "Enterprise-level CLI tool and LLM fine-tuning practice.",
    tech: ["Python", "LLM", "CLI"],
    github: "https://github.com/evan-zhang/cli-llm-asiainfo",
    detail: "Participated in CLI tool development and LLM fine-tuning process, improved model inference efficiency.",
  },
  {
    name: "Multi-sensor SLAM System (Yaoxuanyuan)",
    time: "Sep 2022 – Dec 2022",
    desc: "Multi-sensor fusion SLAM robot system.",
    tech: ["C++", "ROS", "Gazebo"],
    github: "https://github.com/evan-zhang/slam-yaoxuanyuan",
    detail: "Responsible for sensor data fusion and simulation environment setup, improved localization accuracy.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-4xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-accent mb-2">// projects</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-10 text-white">Projects</h1>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((proj, idx) => (
            <motion.article
              key={proj.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (idx % 2) * 0.1, ease: "easeOut" }}
              className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-accent/40 hover:bg-white/[0.05] hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(56,189,248,0.08)] transition-all duration-300"
            >
              <div className="flex items-start justify-between gap-3 mb-1">
                <h2 className="text-lg font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {proj.name}
                </h2>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${proj.name} on GitHub`}
                  className="shrink-0 inline-flex items-center gap-1 text-white/50 hover:text-accent transition-colors duration-200 text-xl focus-visible:ring-2 focus-visible:ring-accent rounded"
                >
                  <FaGithub />
                  <FiArrowUpRight className="text-sm opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                </a>
              </div>
              <p className="font-mono text-xs text-white/40 mb-4">{proj.time}</p>
              <p className="text-sm text-white/80 leading-relaxed mb-2">{proj.desc}</p>
              <p className="text-sm text-white/50 leading-relaxed mb-5">{proj.detail}</p>
              <div className="mt-auto flex flex-wrap gap-2">
                {proj.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 text-xs rounded-md bg-accent/10 border border-accent/20 text-accent font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
