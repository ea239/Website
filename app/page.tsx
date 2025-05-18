"use client";
import React from "react";
import ParticleBackground from "../components/ParticleBackground";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="z-10 max-w-2xl mx-auto px-4 py-24 flex flex-col items-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold mb-4 text-white drop-shadow-lg"
        >
          Hi, I&apos;m <span className="text-accent">Evan Zhang</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
          className="text-lg md:text-2xl text-white/80 mb-8"
        >
          Software & AI Enthusiast | Building frontends, backends, and intelligent agents
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/projects"
            className="px-6 py-3 rounded-lg bg-accent text-primary font-bold shadow-lg hover:scale-105 hover:bg-neon transition-all duration-200"
          >
            View My Projects →
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg border-2 border-accent text-accent font-bold shadow-lg hover:bg-accent hover:text-primary transition-all duration-200"
          >
            Download Resume
          </a>
        </motion.div>
      </section>
    </main>
  );
} 