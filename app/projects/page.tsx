"use client";
import React from "react";
import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp, FaPlus } from "react-icons/fa";
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
  const [openIdx, setOpenIdx] = useState(-1);
  const [entryInputs, setEntryInputs] = useState<Record<number, string>>({});
  const [extraEntries, setExtraEntries] = useState<Record<number, string[]>>({});

  const addEntry = (idx: number) => {
    const value = (entryInputs[idx] || "").trim();
    if (!value) return;
    setExtraEntries((prev) => ({ ...prev, [idx]: [...(prev[idx] || []), value] }));
    setEntryInputs((prev) => ({ ...prev, [idx]: "" }));
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-8 text-accent">Projects</h1>
        <div className="border-l-2 border-accent/40 pl-4">
          {projects.map((proj, idx) => (
            <motion.div
              key={proj.name}
              className="mb-8 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="absolute -left-5 top-2 w-3 h-3 bg-accent rounded-full shadow-lg" />
              <div className="bg-primary/80 rounded-lg shadow-md p-5">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                  <span className="font-mono text-sm text-white/60">{proj.time}</span>
                  <div className="flex gap-2 flex-wrap">
                    {proj.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-xs rounded bg-accent/20 text-accent font-mono">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                  <h2 className="text-xl font-bold text-neon">{proj.name}</h2>
                  <div className="flex gap-2 items-center">
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-neon text-lg flex items-center gap-1">
                      <FaGithub /> View Code
                    </a>
                    <button
                      className="ml-2 text-accent hover:text-neon text-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
                      onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                      aria-label="Expand details"
                      aria-expanded={openIdx === idx}
                      aria-controls={`project-detail-${idx}`}
                    >
                      {openIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
                    </button>
                  </div>
                </div>
                <p className="text-white/90 mt-2">{proj.desc}</p>

                {openIdx === idx && (
                  <div id={`project-detail-${idx}`} className="mt-3 text-white/80 border-t border-accent/20 pt-3 animate-fade-in space-y-3">
                    <p>{proj.detail}</p>

                    {(extraEntries[idx] || []).length > 0 && (
                      <div>
                        <p className="text-sm text-accent mb-1">Added entries</p>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {(extraEntries[idx] || []).map((entry, eIdx) => (
                            <li key={`${idx}-${eIdx}`}>{entry}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="flex flex-col sm:flex-row gap-2">
                      <input
                        value={entryInputs[idx] || ""}
                        onChange={(e) => setEntryInputs((prev) => ({ ...prev, [idx]: e.target.value }))}
                        placeholder="Add a new entry for this project"
                        className="flex-1 px-3 py-2 rounded bg-white/10 text-white placeholder:text-white/50 border border-accent/20"
                      />
                      <button
                        onClick={() => addEntry(idx)}
                        className="px-3 py-2 rounded bg-accent/20 text-accent hover:bg-accent/30 inline-flex items-center gap-2"
                      >
                        <FaPlus /> Add Entry
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
