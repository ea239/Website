"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  FaPython,
  FaJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaJava,
  FaDatabase,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiTensorflow,
  SiRos,
  SiVuedotjs,
  SiCplusplus,
  SiFastapi,
  SiPostgresql,
  SiRedis,
  SiPytorch,
  SiMongodb,
} from "react-icons/si";
import ParticleBackground from "../../components/ParticleBackground";

type SkillItem = { name: string; icon: React.ReactNode };
type SkillGroup = { group: string; items: SkillItem[] };

const groups: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C/C++", icon: <SiCplusplus className="text-[#659AD2]" /> },
      { name: "JavaScript", icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
      { name: "SQL", icon: <FaDatabase className="text-[#9CA3AF]" /> },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Vue.js", icon: <SiVuedotjs className="text-[#42b883]" /> },
      { name: "HTML", icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", icon: <SiFastapi className="text-[#05998b]" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-[#3C873A]" /> },
      { name: "Spring Boot", icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "PostgreSQL", icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC2626]" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    group: "AI / Tools",
    items: [
      { name: "TensorFlow", icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "PyTorch", icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: "ROS / Gazebo", icon: <SiRos className="text-[#5C7C9E]" /> },
      { name: "Docker", icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Git", icon: <FaGitAlt className="text-[#F1502F]" /> },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-3xl mx-auto px-4 pt-28 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <p className="font-mono text-sm text-accent mb-2">// about</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 text-white">About Me</h1>
          <p className="text-base md:text-lg text-white/75 leading-relaxed mb-14">
            I&apos;m a University of Waterloo Computer Engineering student focused on backend systems, distributed infrastructure, and AI tooling. My internships and projects center on shipping reliable systems with measurable engineering impact.
          </p>
        </motion.div>

        <section>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="text-2xl font-semibold mb-6 text-white"
          >
            Skills
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {groups.map((g, idx) => (
              <motion.div
                key={g.group}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: "easeOut" }}
                className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 hover:border-accent/40 hover:bg-white/[0.05] transition-colors duration-300"
              >
                <h3 className="font-mono text-xs text-accent/90 mb-4 tracking-[0.2em] uppercase">
                  {g.group}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white/85 hover:border-accent/50 hover:bg-accent/10 hover:text-white transition-colors duration-200 cursor-default"
                    >
                      <span className="text-base leading-none">{item.icon}</span>
                      {item.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
