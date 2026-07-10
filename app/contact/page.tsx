"use client";
import React from "react";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import ParticleBackground from "../../components/ParticleBackground";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Integrate EmailJS
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <motion.section
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-10 w-full max-w-lg mx-auto px-6 py-16 bg-white/[0.03] rounded-2xl shadow-2xl backdrop-blur-md border border-white/10"
      >
        <h1 className="text-3xl font-bold mb-6 text-accent text-center">Contact Me</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="px-4 py-2 rounded bg-white/10 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <button
            type="submit"
            disabled={loading}
            className="mt-2 px-6 py-2 rounded-lg bg-accent text-primary font-bold shadow-lg hover:scale-105 hover:bg-neon transition-all duration-200 disabled:opacity-60"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
          {sent && <div className="text-neon text-center mt-2">Thank you for reaching out! I will get back to you soon.</div>}
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a aria-label="GitHub profile" href="https://github.com/ea239" target="_blank" rel="noopener noreferrer" className="text-2xl text-accent hover:text-neon focus-visible:ring-2 focus-visible:ring-accent rounded"><FaGithub /></a>
          <a aria-label="LinkedIn profile" href="https://linkedin.com/in/evan-zhang-920357290" target="_blank" rel="noopener noreferrer" className="text-2xl text-accent hover:text-neon focus-visible:ring-2 focus-visible:ring-accent rounded"><FaLinkedin /></a>
          <a aria-label="Email Evan" href="mailto:e252zhan@uwaterloo.ca" className="text-2xl text-accent hover:text-neon focus-visible:ring-2 focus-visible:ring-accent rounded"><FaEnvelope /></a>
        </div>
      </motion.section>
    </main>
  );
} 