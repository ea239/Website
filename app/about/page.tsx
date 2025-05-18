"use client";
import React from "react";
import { FaPython, FaJs, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiTensorflow, SiRos, SiVuedotjs, SiCplusplus } from "react-icons/si";

const skillIcons = {
  Python: <FaPython className="text-[#3776AB]" />,
  "JavaScript": <FaJs className="text-[#F7DF1E]" />,
  "C/C++": <SiCplusplus className="text-[#00599C]" />,
  "HTML/CSS": <><FaHtml5 className="text-[#E34F26]" /><FaCss3Alt className="text-[#1572B6] ml-1" /></>,
  "Vue.js": <SiVuedotjs className="text-[#42b883]" />,
  React: <FaReact className="text-[#61DAFB]" />,
  "Node.js": <FaNodeJs className="text-[#3C873A]" />,
  "Spring Boot": <SiSpringboot className="text-[#6DB33F]" />,
  TensorFlow: <SiTensorflow className="text-[#FF6F00]" />,
  "ROS / Gazebo": <SiRos className="text-[#22314E]" />,
};

const skills = [
  {
    group: "Languages",
    items: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "C/C++", level: 4 },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "HTML/CSS", level: 5 },
      { name: "Vue.js", level: 3 },
      { name: "React", level: 4 },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Spring Boot", level: 3 },
    ],
  },
  {
    group: "AI / Tools",
    items: [
      { name: "TensorFlow", level: 4 },
      { name: "ROS / Gazebo", level: 4 },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-accent">About Me</h1>
      <section className="mb-10">
        <p className="text-lg text-white/90 leading-relaxed mb-2">
          Hi! I&apos;m Evan Zhang, a passionate engineer in AI and software development. I love solving real-world problems with code and strive for both depth and breadth in technology. I have interned at several companies, participating in projects across frontend, backend, AI, and robotics. I&apos;m always eager to learn new things and enjoy sharing and collaborating with others.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-neon">Skill Proficiency</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.group} className="bg-black/40 rounded-2xl shadow-xl border border-accent/30 backdrop-blur-md p-6">
              <h3 className="font-mono text-lg text-accent mb-4 tracking-wider">[{group.group}]</h3>
              <ul className="space-y-4">
                {group.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{skillIcons[item.name]}</span>
                      <span className="w-32 font-mono text-white/90 text-base">{item.name}</span>
                      <span className="text-xs text-white/50">Lv.{item.level}</span>
                    </div>
                    <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden relative mt-1">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] via-[#10B981] to-[#F7DF1E] shadow-lg animate-pulse-slow"
                        style={{ width: `${item.level * 20}%`, boxShadow: '0 0 12px #10B981, 0 0 24px #38BDF8' }}
                      ></div>
                      <div className="absolute inset-0 rounded-full pointer-events-none" style={{ boxShadow: item.level === 5 ? '0 0 16px 4px #10B981' : 'none' }}></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// @keyframes pulse-slow { 0%,100%{opacity:1} 50%{opacity:.7} }
// .animate-pulse-slow { animation: pulse-slow 2.5s infinite; } 