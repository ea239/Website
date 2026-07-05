"use client";
import React from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../components/ParticleBackground";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 z-0" />
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 max-w-2xl mx-auto px-6 py-32 flex flex-col items-center text-center bg-white/[0.03] rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
      >
        <motion.h1
          custom={0}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_2px_24px_rgba(56,189,248,0.5)] tracking-tight"
        >
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-[#10B981] via-[#38BDF8] to-[#10B981] bg-clip-text text-transparent">
            Evan Zhang
          </span>
        </motion.h1>
        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-xl md:text-2xl text-white/80 mb-10 font-mono drop-shadow"
        >
          UW Computer Engineering student building backend systems, AI infrastructure, and production-grade tooling.
        </motion.p>
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <Link
            href="/projects"
            className="px-8 py-4 rounded-xl bg-[#10B981] text-[#09090B] font-bold text-lg shadow-lg hover:scale-105 hover:bg-[#38BDF8] hover:text-white transition-all duration-200 border-2 border-[#10B981] hover:border-[#38BDF8] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            View My Projects →
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-[#38BDF8] text-[#38BDF8] font-bold text-lg shadow-lg hover:bg-[#38BDF8] hover:text-[#09090B] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            Download Resume
          </a>
        </motion.div>
      </motion.section>
    </main>
  );
}
