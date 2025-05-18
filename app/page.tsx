"use client";
import React from "react";
import ParticleBackground from "../components/ParticleBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 z-0" />
      <section className="relative z-10 max-w-2xl mx-auto px-6 py-32 flex flex-col items-center text-center bg-black/30 rounded-2xl shadow-2xl backdrop-blur-md border border-[#38BDF8]/30">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-[0_2px_24px_#38BDF8] tracking-tight">
          Hi, I&apos;m <span className="text-[#10B981] animate-pulse">Evan Zhang</span>
        </h1>
        <p className="text-xl md:text-2xl text-white/80 mb-10 font-mono drop-shadow">
          Software & AI Enthusiast<br />Building frontends, backends, and intelligent agents
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/projects"
            className="px-8 py-4 rounded-xl bg-[#10B981] text-[#0F172A] font-bold text-lg shadow-lg hover:scale-105 hover:bg-[#38BDF8] hover:text-white transition-all duration-200 border-2 border-[#10B981] focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            View My Projects →
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 rounded-xl border-2 border-[#38BDF8] text-[#38BDF8] font-bold text-lg shadow-lg hover:bg-[#38BDF8] hover:text-[#0F172A] hover:border-[#10B981] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
} 