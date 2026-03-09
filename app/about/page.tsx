"use client";
import React, { useMemo, useState } from "react";
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

type SkillItem = { name: string; level: number; icon: React.ReactNode };
type SkillGroup = { group: string; items: SkillItem[] };

const groups: SkillGroup[] = [
  {
    group: "Languages",
    items: [
      { name: "Python", level: 5, icon: <FaPython className="text-[#3776AB]" /> },
      { name: "C/C++", level: 4, icon: <SiCplusplus className="text-[#00599C]" /> },
      { name: "JavaScript", level: 4, icon: <FaJs className="text-[#F7DF1E]" /> },
      { name: "Java", level: 3, icon: <FaJava className="text-[#f89820]" /> },
      { name: "SQL", level: 4, icon: <FaDatabase className="text-[#9CA3AF]" /> },
    ],
  },
  {
    group: "Frontend",
    items: [
      { name: "React", level: 4, icon: <FaReact className="text-[#61DAFB]" /> },
      { name: "Vue.js", level: 3, icon: <SiVuedotjs className="text-[#42b883]" /> },
      { name: "HTML", level: 5, icon: <FaHtml5 className="text-[#E34F26]" /> },
      { name: "CSS", level: 5, icon: <FaCss3Alt className="text-[#1572B6]" /> },
    ],
  },
  {
    group: "Backend",
    items: [
      { name: "FastAPI", level: 4, icon: <SiFastapi className="text-white" /> },
      { name: "Node.js", level: 4, icon: <FaNodeJs className="text-[#3C873A]" /> },
      { name: "Spring Boot", level: 3, icon: <SiSpringboot className="text-[#6DB33F]" /> },
      { name: "PostgreSQL", level: 4, icon: <SiPostgresql className="text-[#336791]" /> },
      { name: "Redis", level: 4, icon: <SiRedis className="text-[#DC2626]" /> },
      { name: "MongoDB", level: 3, icon: <SiMongodb className="text-[#47A248]" /> },
    ],
  },
  {
    group: "AI / Tools",
    items: [
      { name: "TensorFlow", level: 4, icon: <SiTensorflow className="text-[#FF6F00]" /> },
      { name: "PyTorch", level: 3, icon: <SiPytorch className="text-[#EE4C2C]" /> },
      { name: "ROS / Gazebo", level: 4, icon: <SiRos className="text-[#22314E]" /> },
      { name: "Docker", level: 4, icon: <FaDocker className="text-[#2496ED]" /> },
      { name: "Git", level: 4, icon: <FaGitAlt className="text-[#F1502F]" /> },
    ],
  },
];

function SkillCard({
  group,
  idx,
  expanded,
  onToggle,
  compact,
}: {
  group: SkillGroup;
  idx: number;
  expanded: boolean;
  compact: boolean;
  onToggle: () => void;
}) {
  const showItems = expanded ? group.items : group.items.slice(0, 3);
  return (
    <motion.div
      layout
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className={`bg-black/40 rounded-2xl shadow-xl border border-accent/30 backdrop-blur-md p-5 ${compact ? "opacity-90" : ""}`}
    >
      <button
        onClick={onToggle}
        className="w-full text-left flex items-center justify-between"
        aria-expanded={expanded}
        aria-controls={`skill-group-${idx}`}
      >
        <h3 className="font-mono text-lg text-accent tracking-wider">[{group.group}]</h3>
        <span className="text-xs text-white/60">{expanded ? "Collapse" : "Expand"}</span>
      </button>

      <ul id={`skill-group-${idx}`} className="space-y-3 mt-4">
        {showItems.map((item) => (
          <li key={item.name} className="flex flex-col gap-1">
            <div className="flex items-center gap-3">
              <span className="text-xl">{item.icon}</span>
              <span className="w-36 font-mono text-white/90 text-sm md:text-base">{item.name}</span>
              <span className="text-xs text-white/50">Lv.{item.level}</span>
            </div>
            <div className="w-full h-2.5 rounded-full bg-white/10 overflow-hidden relative mt-1">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#38BDF8] via-[#10B981] to-[#F7DF1E] shadow-lg"
                style={{ width: `${item.level * 20}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function AboutPage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  const topExpanded = useMemo(() => expandedIdx !== null && expandedIdx < 2, [expandedIdx]);
  const bottomExpanded = useMemo(() => expandedIdx !== null && expandedIdx >= 2, [expandedIdx]);

  const rest = (i: number) => groups.filter((_, idx) => idx !== i);

  return (
    <main className="relative min-h-screen overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="relative z-10 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold mb-6 text-accent">About Me</h1>
        <section className="mb-10">
          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-2">
            I&apos;m a University of Waterloo Computer Engineering student focused on backend systems, distributed infrastructure, and AI tooling. My internships and projects center on shipping reliable systems with measurable engineering impact.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-neon">Skill Proficiency</h2>

          {expandedIdx === null && (
            <div className="grid md:grid-cols-2 gap-6">
              {groups.map((g, idx) => (
                <SkillCard
                  key={g.group}
                  group={g}
                  idx={idx}
                  expanded={false}
                  compact={false}
                  onToggle={() => setExpandedIdx(idx)}
                />
              ))}
            </div>
          )}

          {topExpanded && expandedIdx !== null && (
            <motion.div layout className="space-y-4">
              <SkillCard
                group={groups[expandedIdx]}
                idx={expandedIdx}
                expanded
                compact={false}
                onToggle={() => setExpandedIdx(null)}
              />
              <div className="grid md:grid-cols-3 gap-4">
                {rest(expandedIdx).map((g, i) => (
                  <SkillCard
                    key={g.group}
                    group={g}
                    idx={i}
                    expanded={false}
                    compact
                    onToggle={() => setExpandedIdx(groups.findIndex((x) => x.group === g.group))}
                  />
                ))}
              </div>
            </motion.div>
          )}

          {bottomExpanded && expandedIdx !== null && (
            <motion.div layout className="space-y-4">
              <div className="space-y-3">
                {rest(expandedIdx).map((g, i) => (
                  <SkillCard
                    key={g.group}
                    group={g}
                    idx={i}
                    expanded={false}
                    compact
                    onToggle={() => setExpandedIdx(groups.findIndex((x) => x.group === g.group))}
                  />
                ))}
              </div>
              <SkillCard
                group={groups[expandedIdx]}
                idx={expandedIdx}
                expanded
                compact={false}
                onToggle={() => setExpandedIdx(null)}
              />
            </motion.div>
          )}
        </section>
      </section>
    </main>
  );
}
