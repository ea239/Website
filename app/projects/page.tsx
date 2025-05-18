"use client";
import React from "react";
import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    name: "Website Builder Platform",
    time: "Mar 2024 – May 2024",
    desc: "A low-code website builder platform supporting visual drag-and-drop, component marketplace, and one-click publishing.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/evan-zhang/website-builder",
    detail: "Led frontend architecture and core feature development, including component drag-and-drop, real-time preview, and template marketplace. Backend supports multi-user collaboration and permission management.",
  },
  {
    name: "AI Image Classification",
    time: "Dec 2023 – Feb 2024",
    desc: "A deep learning-based image classification system supporting multi-class recognition and model visualization.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/evan-zhang/ai-image-classification",
    detail: "Led model training and API deployment, frontend for result display and interaction.",
  },
  {
    name: "Airplane Battle Game",
    time: "Aug 2023 – Oct 2023",
    desc: "2D airplane battle game with multiple weapons and levels.",
    tech: ["C++", "SDL2"],
    github: "https://github.com/evan-zhang/airplane-battle",
    detail: "Independently developed game engine and level system, implemented collision detection and animation.",
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
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-accent">Projects</h1>
      <div className="border-l-2 border-accent/40 pl-4">
        {projects.map((proj, idx) => (
          <div key={proj.name} className="mb-8 relative">
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
                    className="ml-2 text-accent hover:text-neon text-lg focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    aria-label="Expand details"
                  >
                    {openIdx === idx ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
              </div>
              <p className="text-white/90 mt-2">{proj.desc}</p>
              {openIdx === idx && (
                <div className="mt-3 text-white/80 border-t border-accent/20 pt-2 animate-fade-in">
                  {proj.detail}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
} 