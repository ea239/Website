"use client";
import React from "react";
import { FaCircle } from "react-icons/fa";

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
            <div key={group.group}>
              <h3 className="font-mono text-lg text-accent mb-2">[{group.group}]</h3>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <span className="w-32 font-mono text-white/80">{item.name}</span>
                    <span className="flex gap-1">
                      {[1,2,3,4,5].map((i) => (
                        <FaCircle key={i} className={
                          i <= item.level ? "text-accent" : "text-white/20"
                        } />
                      ))}
                    </span>
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