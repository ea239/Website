import { FaPython, FaReact, FaNodeJs, FaRobot, FaJava } from "react-icons/fa";
import { SiSpringboot, SiTensorflow, SiCplusplus, SiJavascript, SiRos, SiGazebo } from "react-icons/si";
import { motion } from "framer-motion";

const experiences = [
  {
    time: "2025.01 – 2025.04",
    company: "AsiaInfo",
    role: "AI 实习工程师",
    duties: [
      "参与企业级 LLM 微调与推理优化",
      "开发命令行工具，提升数据处理效率",
      "协作部署模型 API 服务"
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <FaRobot />, label: "LLM" },
      { icon: <FaNodeJs />, label: "CLI" },
    ],
  },
  {
    time: "2024.03 – 2024.05",
    company: "Website Builder Startup",
    role: "前端开发实习生",
    duties: [
      "负责前端架构与组件开发",
      "实现可视化拖拽与实时预览",
      "优化用户交互体验"
    ],
    tech: [
      { icon: <FaReact />, label: "React" },
      { icon: <FaNodeJs />, label: "Node.js" },
      { icon: <SiSpringboot />, label: "Spring Boot" },
    ],
  },
  {
    time: "2023.12 – 2024.02",
    company: "AI Lab",
    role: "AI 研究助理",
    duties: [
      "深度学习模型训练与调优",
      "搭建 Flask API 服务",
      "撰写技术文档与论文"
    ],
    tech: [
      { icon: <FaPython />, label: "Python" },
      { icon: <SiTensorflow />, label: "TensorFlow" },
      { icon: <FaJava />, label: "Flask" },
    ],
  },
  {
    time: "2022.09 – 2022.12",
    company: "Yaoxuanyuan Robotics",
    role: "机器人算法实习生",
    duties: [
      "多传感器数据融合与 SLAM 算法实现",
      "仿真环境搭建与测试",
      "参与 ROS/Gazebo 系统开发"
    ],
    tech: [
      { icon: <SiCplusplus />, label: "C++" },
      { icon: <SiRos />, label: "ROS" },
      { icon: <SiGazebo />, label: "Gazebo" },
    ],
  },
];

export default function ExperiencePage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-accent">实习与工作经验</h1>
      <div className="border-l-2 border-accent/40 pl-4">
        {experiences.map((exp, idx) => (
          <motion.div
            key={exp.company + idx}
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            className="mb-10 relative"
          >
            <div className="absolute -left-5 top-3 w-3 h-3 bg-neon rounded-full shadow-lg" />
            <div className="bg-primary/80 rounded-lg shadow-md p-5">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-1">
                <span className="font-mono text-sm text-white/60">{exp.time}</span>
                <div className="flex gap-2 flex-wrap">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="group relative flex items-center">
                      <span className="text-accent text-lg">{t.icon}</span>
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
    </main>
  );
} 