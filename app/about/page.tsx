import React from "react";
import { FaCircle } from "react-icons/fa";

const skills = [
  {
    group: "语言",
    items: [
      { name: "Python", level: 5 },
      { name: "JavaScript", level: 4 },
      { name: "C/C++", level: 4 },
    ],
  },
  {
    group: "前端",
    items: [
      { name: "HTML/CSS", level: 5 },
      { name: "Vue.js", level: 3 },
      { name: "React", level: 4 },
    ],
  },
  {
    group: "后端",
    items: [
      { name: "Node.js", level: 4 },
      { name: "Spring Boot", level: 3 },
    ],
  },
  {
    group: "AI / 工具",
    items: [
      { name: "TensorFlow", level: 4 },
      { name: "ROS / Gazebo", level: 4 },
    ],
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-accent">关于我</h1>
      <section className="mb-10">
        <p className="text-lg text-white/90 leading-relaxed mb-2">
          你好！我是 Evan Zhang，一名热爱 AI 与软件开发的工程师，喜欢用代码解决实际问题，追求技术的深度与广度。曾在多家企业实习，参与前后端、AI、机器人等多领域项目。热衷于学习新技术，也乐于分享与协作。
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-4 text-neon">技能熟练度</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((group) => (
            <div key={group.group}>
              <h3 className="font-mono text-lg text-accent mb-2">【{group.group}】</h3>
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