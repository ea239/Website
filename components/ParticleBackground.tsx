"use client";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function ParticleBackground({ className = "" }: { className?: string }) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className={className}
      style={{ zIndex: 0, position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh' }}
      options={{
        background: { color: "transparent" },
        fpsLimit: 60,
        particles: {
          color: { value: "#38BDF8" },
          links: {
            enable: true,
            color: "#38BDF8",
            distance: 120,
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.5,
            direction: "none",
            outModes: { default: "bounce" },
          },
          number: { value: 60, density: { enable: true, area: 800 } },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  );
} 