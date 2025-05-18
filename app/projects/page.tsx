import { useState } from "react";
import { FaGithub, FaChevronDown, FaChevronUp } from "react-icons/fa";

const projects = [
  {
    name: "Website Builder Platform",
    time: "2024.03 – 2024.05",
    desc: "低代码网站搭建平台，支持可视化拖拽、组件市场与一键发布。",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    github: "https://github.com/evan-zhang/website-builder",
    detail: "负责前端架构设计与核心功能开发，实现组件拖拽、实时预览与模板市场。后端支持多用户协作与权限管理。",
  },
  {
    name: "AI Image Classification",
    time: "2023.12 – 2024.02",
    desc: "基于深度学习的图像分类系统，支持多类别识别与模型可视化。",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/evan-zhang/ai-image-classification",
    detail: "主导模型训练与 API 部署，前端实现结果展示与交互。",
  },
  {
    name: "Airplane Battle Game",
    time: "2023.08 – 2023.10",
    desc: "2D 飞机大战游戏，支持多种武器与关卡。",
    tech: ["C++", "SDL2"],
    github: "https://github.com/evan-zhang/airplane-battle",
    detail: "独立开发游戏引擎与关卡系统，实现碰撞检测与动画。",
  },
  {
    name: "Text Emotion Detection Paper",
    time: "2023.05 – 2023.07",
    desc: "情感识别论文，提出基于 LSTM 的文本情感分析方法。",
    tech: ["Python", "PyTorch"],
    github: "https://github.com/evan-zhang/text-emotion-paper",
    detail: "负责模型设计与实验，论文被校级会议收录。",
  },
  {
    name: "CLI 工具 + LLM 微调（AsiaInfo）",
    time: "2023.01 – 2023.04",
    desc: "企业级命令行工具与大模型微调实践。",
    tech: ["Python", "LLM", "CLI"],
    github: "https://github.com/evan-zhang/cli-llm-asiainfo",
    detail: "参与 CLI 工具开发与 LLM 微调流程，提升模型推理效率。",
  },
  {
    name: "多传感器 SLAM 系统（Yaoxuanyuan）",
    time: "2022.09 – 2022.12",
    desc: "多传感器融合的 SLAM 机器人系统。",
    tech: ["C++", "ROS", "Gazebo"],
    github: "https://github.com/evan-zhang/slam-yaoxuanyuan",
    detail: "负责传感器数据融合与仿真环境搭建，提升定位精度。",
  },
];

export default function ProjectsPage() {
  const [openIdx, setOpenIdx] = useState(-1);
  return (
    <main className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-8 text-accent">项目经历</h1>
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
                    <FaGithub /> 查看代码
                  </a>
                  <button
                    className="ml-2 text-accent hover:text-neon text-lg focus:outline-none"
                    onClick={() => setOpenIdx(openIdx === idx ? -1 : idx)}
                    aria-label="展开详情"
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