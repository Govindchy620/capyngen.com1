import { useEffect, useRef } from "react";

const NetworkBackground = ({
  particleCount = 80,
  maxDistance = 150,
  lineColor = "rgba(255,255,255,0.1)",
  particleColor = "#ffffff",
  particleSize = 2,
  speed = 0.3,
  hoverEffect = true,
}) => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    // Resize handling
    const resize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);

    // Track mouse
    const mouseMove = (e) => {
      mouse.current.x = e.clientX - canvas.getBoundingClientRect().left;
      mouse.current.y = e.clientY - canvas.getBoundingClientRect().top;
    };
    if (hoverEffect) canvas.addEventListener("mousemove", mouseMove);

    // Particles
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);

      // Draw particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, particleSize, 0, Math.PI * 2);
        ctx.fillStyle = particleColor;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particleCount; i++) {
        for (let j = i + 1; j < particleCount; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      // Mouse interaction
      if (hoverEffect && mouse.current.x !== null) {
        particles.forEach((p) => {
          const dx = p.x - mouse.current.x;
          const dy = p.y - mouse.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            p.vx += dx * 0.0005;
            p.vy += dy * 0.0005;
          }
        });
      }

      requestAnimationFrame(draw);
    }
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (hoverEffect) canvas.removeEventListener("mousemove", mouseMove);
    };
  }, [
    particleCount,
    maxDistance,
    lineColor,
    particleColor,
    speed,
    particleSize,
    hoverEffect,
  ]);

  return (
    <canvas ref={canvasRef} className="w-full h-full absolute top-0 left-0" />
  );
};

export default NetworkBackground;
