"use client";
import { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
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
    // TODO: 集成 EmailJS
    setTimeout(() => {
      setSent(true);
      setLoading(false);
      setForm({ name: "", email: "", message: "" });
    }, 1200);
  };

  return (
    <main className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <ParticleBackground className="absolute inset-0 -z-10" />
      <section className="z-10 w-full max-w-lg mx-auto px-4 py-20 bg-primary/80 rounded-xl shadow-lg backdrop-blur-md">
        <h1 className="text-3xl font-bold mb-6 text-accent text-center">联系我</h1>
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
            {loading ? "发送中..." : "发送消息"}
          </button>
          {sent && <div className="text-neon text-center mt-2">感谢您的联系！我会尽快回复。</div>}
        </form>
        <div className="flex justify-center gap-6 mt-8">
          <a href="https://github.com/evan-zhang" target="_blank" rel="noopener noreferrer" className="text-2xl text-accent hover:text-neon"><FaGithub /></a>
          <a href="https://linkedin.com/in/evan-zhang" target="_blank" rel="noopener noreferrer" className="text-2xl text-accent hover:text-neon"><FaLinkedin /></a>
          <a href="mailto:evan.zhang@email.com" className="text-2xl text-accent hover:text-neon"><FaEnvelope /></a>
        </div>
      </section>
    </main>
  );
} 