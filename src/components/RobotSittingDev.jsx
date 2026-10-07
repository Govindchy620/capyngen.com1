import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BlueQuoteIcon = ({ className = "w-14 h-10" }) => (
  <svg viewBox="0 0 34 26" fill="#3882d6" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="M0 15C0 6.5 4.8 1.8 14 0L15 4.5C9.5 6 6.5 8.8 6 12.5H14.5V25.5H0V15ZM19 15C19 6.5 23.8 1.8 33 0L34 4.5C28.5 6 25.5 8.8 25 12.5H33.5V25.5H19V15Z" />
  </svg>
);

export const RobotSittingDev = () => {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);
  const [isTypingFast, setIsTypingFast] = useState(false);
  const [isHappy, setIsHappy] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
      setMousePos({
        x: Math.max(-1, Math.min(1, x)),
        y: Math.max(-1, Math.min(1, y)),
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const blinkTimer = setInterval(() => {
      setIsBlinking(true);
      setTimeout(() => setIsBlinking(false), 180);
    }, 4000);
    return () => clearInterval(blinkTimer);
  }, []);

  const handleClick = () => {
    setIsTypingFast(true);
    setIsHappy(true);
    setTimeout(() => {
      setIsTypingFast(false);
      setIsHappy(false);
    }, 2400);
  };

  return (
    <section className="relative w-full bg-white py-16 sm:py-24 px-6 md:px-12 lg:px-20 overflow-hidden border-y border-slate-100">
      {/* Background Subtle Gradient Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-50/60 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-50/50 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-14 relative z-10">
        {/* Left Quote Column */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[32%] flex flex-col justify-center"
        >
          <div className="mb-4">
            <BlueQuoteIcon className="w-14 h-11 text-[#3882d6]" />
          </div>

          <p className="text-[#2b6cb0] text-lg sm:text-xl md:text-[21px] font-normal leading-relaxed tracking-normal font-sans">
            The selection of Capyngen as our core web engineering partner was a strategic decision driven by their commitment to innovation and speed. Capyngen demonstrated unmatched technical agility in architecting resilient, scalable platforms designed to lead at scale.
          </p>
        </motion.div>

        {/* Center Interactive 3D Seated Robot Developer */}
        <div
          ref={containerRef}
          onClick={handleClick}
          className="w-full lg:w-[36%] h-[480px] sm:h-[560px] md:h-[620px] flex items-center justify-center cursor-pointer select-none relative"
        >
          <svg
            viewBox="0 0 600 650"
            className="w-full h-full max-w-[480px]"
            style={{ filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.12))" }}
          >
            <defs>
              <linearGradient id="chairHeadrestGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#1e293b" />
                <stop offset="50%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="chairBackGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="20%" stopColor="#1e293b" />
                <stop offset="80%" stopColor="#0f172a" />
                <stop offset="100%" stopColor="#020617" />
              </linearGradient>

              <linearGradient id="chairMeshGrad" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#0f172a" />
                <stop offset="50%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="robotGlossBlack" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#374151" />
                <stop offset="30%" stopColor="#1f2937" />
                <stop offset="70%" stopColor="#111827" />
                <stop offset="100%" stopColor="#030712" />
              </linearGradient>

              <linearGradient id="robotHighlight" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.6" />
                <stop offset="40%" stopColor="#4b5563" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#111827" stopOpacity="0" />
              </linearGradient>

              <linearGradient id="visorGlass" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#030712" />
                <stop offset="100%" stopColor="#0b1329" />
              </linearGradient>

              <linearGradient id="laptopLidGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#475569" />
                <stop offset="30%" stopColor="#334155" />
                <stop offset="70%" stopColor="#1e293b" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <linearGradient id="laptopMetallicSheen" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ffffff" stopOpacity="0.35" />
                <stop offset="30%" stopColor="#ffffff" stopOpacity="0.05" />
                <stop offset="70%" stopColor="#000000" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#ffffff" stopOpacity="0.1" />
              </linearGradient>

              <linearGradient id="laptopBaseGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#64748b" />
                <stop offset="50%" stopColor="#334155" />
                <stop offset="100%" stopColor="#0f172a" />
              </linearGradient>

              <filter id="cyanGlow" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="softScreenGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="16" />
              </filter>
            </defs>

            {/* 1. CHAIR BASE */}
            <g id="chair-bottom">
              <rect x="290" y="520" width="20" height="60" rx="3" fill="url(#chairHeadrestGrad)" stroke="#475569" strokeWidth="1" />
              <rect x="295" y="525" width="10" height="50" fill="#64748b" />
              <ellipse cx="300" cy="580" rx="140" ry="16" fill="#0f172a" stroke="#334155" strokeWidth="2" />
              <circle cx="170" cy="585" r="7" fill="#020617" stroke="#475569" strokeWidth="2" />
              <circle cx="230" cy="590" r="7" fill="#020617" stroke="#475569" strokeWidth="2" />
              <circle cx="300" cy="593" r="7" fill="#020617" stroke="#475569" strokeWidth="2" />
              <circle cx="370" cy="590" r="7" fill="#020617" stroke="#475569" strokeWidth="2" />
              <circle cx="430" cy="585" r="7" fill="#020617" stroke="#475569" strokeWidth="2" />
            </g>

            {/* 2. CHAIR BACKREST */}
            <g id="chair-backrest">
              <rect x="220" y="35" width="160" height="55" rx="20" fill="url(#chairHeadrestGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="250" y="48" width="100" height="4" rx="2" fill="#38bdf8" opacity="0.6" filter="url(#cyanGlow)" />
              <rect x="288" y="90" width="24" height="25" rx="4" fill="#334155" />

              <rect x="140" y="110" width="320" height="400" rx="45" fill="url(#chairBackGrad)" stroke="#475569" strokeWidth="2.5" />
              <rect x="170" y="140" width="260" height="340" rx="30" fill="url(#chairMeshGrad)" stroke="#1e293b" strokeWidth="2" />
              <line x1="200" y1="200" x2="400" y2="200" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
              <line x1="200" y1="260" x2="400" y2="260" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />
              <line x1="200" y1="320" x2="400" y2="320" stroke="#334155" strokeWidth="2" strokeDasharray="6 4" opacity="0.4" />

              <rect x="105" y="270" width="35" height="150" rx="16" fill="url(#chairHeadrestGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="102" y="266" width="41" height="45" rx="12" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />

              <rect x="460" y="270" width="35" height="150" rx="16" fill="url(#chairHeadrestGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="457" y="266" width="41" height="45" rx="12" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
            </g>

            {/* 3. ROBOT SEATED BODY */}
            <g id="robot-torso">
              <rect x="282" y="210" width="36" height="30" rx="8" fill="#1f2937" stroke="#374151" strokeWidth="2" />
              <rect x="286" y="222" width="28" height="4" rx="2" fill="#38bdf8" opacity="0.8" filter="url(#cyanGlow)" />

              <path
                d="M 210 240 Q 300 230 390 240 L 410 390 Q 300 410 190 390 Z"
                fill="url(#robotGlossBlack)"
                stroke="#4b5563"
                strokeWidth="2.5"
              />
              <path
                d="M 215 245 Q 300 238 385 245 L 395 290 Q 300 280 205 290 Z"
                fill="url(#robotHighlight)"
              />

              <circle cx="300" cy="305" r="22" fill="#030712" stroke="#38bdf8" strokeWidth="2" filter="url(#cyanGlow)" />
              <circle cx="300" cy="305" r="14" fill="#0284c7" />
              <circle cx="300" cy="305" r="6" fill="#e0f2fe" />

              <rect x="180" y="390" width="90" height="100" rx="24" fill="url(#robotGlossBlack)" stroke="#374151" strokeWidth="2" />
              <rect x="330" y="390" width="90" height="100" rx="24" fill="url(#robotGlossBlack)" stroke="#374151" strokeWidth="2" />
            </g>

            {/* 4. ROBOT HEAD WITH INTERACTIVE EYES */}
            <g
              id="robot-head"
              style={{
                transform: `translate(${mousePos.x * 12}px, ${mousePos.y * 8}px)`,
                transformOrigin: "300px 140px",
                transition: "transform 0.12s ease-out",
              }}
            >
              <path
                d="M 230 140 C 230 70, 370 70, 370 140 C 370 215, 340 230, 300 230 C 260 230, 230 215, 230 140 Z"
                fill="url(#robotGlossBlack)"
                stroke="#4b5563"
                strokeWidth="3"
              />

              <ellipse cx="300" cy="95" rx="55" ry="22" fill="url(#robotHighlight)" />

              <rect x="218" y="130" width="14" height="35" rx="6" fill="#111827" stroke="#374151" strokeWidth="2" />
              <rect x="221" y="142" width="8" height="12" rx="3" fill="#38bdf8" opacity="0.8" filter="url(#cyanGlow)" />

              <rect x="368" y="130" width="14" height="35" rx="6" fill="#111827" stroke="#374151" strokeWidth="2" />
              <rect x="371" y="142" width="8" height="12" rx="3" fill="#38bdf8" opacity="0.8" filter="url(#cyanGlow)" />

              <path
                d="M 245 130 C 245 95, 355 95, 355 130 C 355 195, 335 210, 300 210 C 265 210, 245 195, 245 130 Z"
                fill="url(#visorGlass)"
                stroke="#1f2937"
                strokeWidth="2"
              />

              <g
                id="robot-eyes"
                style={{
                  transform: `translate(${mousePos.x * 10}px, ${mousePos.y * 6 + 2}px) scaleY(${isBlinking ? 0.1 : 1})`,
                  transformOrigin: "300px 145px",
                  transition: "transform 0.08s ease-out",
                }}
              >
                {isHappy ? (
                  <>
                    <path d="M 268 152 Q 278 140 288 152" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" filter="url(#cyanGlow)" />
                    <path d="M 312 152 Q 322 140 332 152" fill="none" stroke="#22d3ee" strokeWidth="4" strokeLinecap="round" filter="url(#cyanGlow)" />
                  </>
                ) : (
                  <>
                    <ellipse cx="278" cy="146" rx="12" ry="14" fill="#0284c7" filter="url(#cyanGlow)" />
                    <ellipse cx="278" cy="146" rx="8" ry="10" fill="#22d3ee" />
                    <circle cx="280" cy="143" r="3" fill="#ffffff" />

                    <ellipse cx="322" cy="146" rx="12" ry="14" fill="#0284c7" filter="url(#cyanGlow)" />
                    <ellipse cx="322" cy="146" rx="8" ry="10" fill="#22d3ee" />
                    <circle cx="324" cy="143" r="3" fill="#ffffff" />
                  </>
                )}
              </g>

              <path d="M 252 110 Q 300 98 348 110" fill="none" stroke="#ffffff" strokeWidth="1.5" opacity="0.25" />
            </g>

            {/* 5. ROBOT ARMS */}
            <g id="robot-arms-and-hands">
              <circle cx="195" cy="265" r="24" fill="url(#robotGlossBlack)" stroke="#4b5563" strokeWidth="2" />
              <path d="M 185 275 L 210 375 L 245 370 L 215 270 Z" fill="url(#robotGlossBlack)" stroke="#374151" strokeWidth="2" />
              <path d="M 210 375 L 240 435 L 268 430 L 245 370 Z" fill="url(#robotGlossBlack)" stroke="#4b5563" strokeWidth="2" />

              <motion.g
                animate={{
                  y: isTypingFast ? [-4, 3, -4] : [-2, 2, -2],
                  rotate: isTypingFast ? [-3, 4, -3] : [-1, 2, -1],
                }}
                transition={{
                  duration: isTypingFast ? 0.12 : 0.22,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "240px 435px" }}
              >
                <rect x="235" y="425" width="28" height="18" rx="6" fill="#1f2937" stroke="#475569" strokeWidth="1.5" />
                <rect x="240" y="438" width="4" height="14" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                <rect x="246" y="439" width="4" height="16" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                <rect x="252" y="438" width="4" height="14" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
              </motion.g>

              <circle cx="405" cy="265" r="24" fill="url(#robotGlossBlack)" stroke="#4b5563" strokeWidth="2" />
              <path d="M 415 275 L 390 375 L 355 370 L 385 270 Z" fill="url(#robotGlossBlack)" stroke="#374151" strokeWidth="2" />
              <path d="M 390 375 L 360 435 L 332 430 L 355 370 Z" fill="url(#robotGlossBlack)" stroke="#4b5563" strokeWidth="2" />

              <motion.g
                animate={{
                  y: isTypingFast ? [3, -4, 3] : [2, -2, 2],
                  rotate: isTypingFast ? [4, -3, 4] : [2, -1, 2],
                }}
                transition={{
                  duration: isTypingFast ? 0.13 : 0.24,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{ transformOrigin: "360px 435px" }}
              >
                <rect x="337" y="425" width="28" height="18" rx="6" fill="#1f2937" stroke="#475569" strokeWidth="1.5" />
                <rect x="344" y="438" width="4" height="14" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                <rect x="350" y="439" width="4" height="16" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
                <rect x="356" y="438" width="4" height="14" rx="2" fill="#38bdf8" filter="url(#cyanGlow)" />
              </motion.g>
            </g>

            {/* 6. LAPTOP */}
            <g id="laptop-on-lap">
              <ellipse cx="300" cy="340" rx="140" ry="40" fill="#38bdf8" opacity="0.22" filter="url(#softScreenGlow)" />

              <rect x="150" y="445" width="300" height="24" rx="10" fill="url(#laptopBaseGrad)" stroke="#475569" strokeWidth="2" />
              <rect x="180" y="460" width="240" height="4" rx="2" fill="#0f172a" />
              <circle cx="168" cy="457" r="2.5" fill="#34d399" filter="url(#cyanGlow)" />
              <circle cx="432" cy="457" r="2.5" fill="#38bdf8" filter="url(#cyanGlow)" />

              <g id="laptop-lid-backside">
                <rect
                  x="180"
                  y="330"
                  width="240"
                  height="125"
                  rx="16"
                  fill="url(#laptopLidGrad)"
                  stroke="#64748b"
                  strokeWidth="2.5"
                />
                <rect x="182" y="332" width="236" height="121" rx="14" fill="url(#laptopMetallicSheen)" />
                <rect x="286" y="333" width="28" height="5" rx="2.5" fill="#0f172a" />
                <circle cx="300" cy="335.5" r="1.5" fill="#475569" />

                <rect
                  x="278"
                  y="370"
                  width="44"
                  height="44"
                  rx="12"
                  fill="#0f172a"
                  stroke="#38bdf8"
                  strokeWidth="1.5"
                  filter="url(#cyanGlow)"
                />
                <text
                  x="300"
                  y="397"
                  textAnchor="middle"
                  fill="#38bdf8"
                  fontFamily="monospace"
                  fontWeight="bold"
                  fontSize="16"
                  filter="url(#cyanGlow)"
                >
                  &lt;/&gt;
                </text>
                <rect x="195" y="445" width="210" height="4" rx="2" fill="#020617" />
              </g>
            </g>
          </svg>
        </div>

        {/* Right Quote Column */}
        <motion.div
          initial={{ opacity: 0, x: 35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full lg:w-[32%] flex flex-col justify-center"
        >
          <div className="mb-4">
            <BlueQuoteIcon className="w-14 h-11 text-[#3882d6]" />
          </div>

          <p className="text-[#2b6cb0] text-lg sm:text-xl md:text-[21px] font-normal leading-relaxed tracking-normal font-sans">
            Our collaboration with Capyngen has been instrumental in the successful rollout of our next-generation web applications. Their deep focus on sub-second latency and zero-downtime reliability made them an invaluable long-term partner.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default RobotSittingDev;
