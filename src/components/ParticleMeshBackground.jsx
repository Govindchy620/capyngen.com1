// ParticleMeshBackground.jsx
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleMeshBackground() {
  const [init, setInit] = useState(false);

  // Init particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // load slim bundle (lightweight)
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) return null; // avoid rendering until ready

  return (
    <div className="absolute inset-0 -z-10 bg-black">
      <Particles
        id="tsparticles-mesh"
        options={{
          background: {
            color: "#000000",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              grab: { distance: 200, links: { opacity: 0.6 } },
            },
          },
          particles: {
            number: { value: 120, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.6 },
            size: { value: 2, random: true },
            links: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.25,
              width: 1,
              triangles: {
                enable: true, // 🔺 triangular mesh
                opacity: 0.15,
                color: "#ffffff",
              },
            },
            move: {
              enable: true,
              speed: 1,
              random: true,
              straight: false,
              outModes: { default: "out" },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
}
