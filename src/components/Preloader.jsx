import React, { useEffect, useMemo, useRef, useState } from "react";
import { assets } from "../assets/assets";

const Preloader = ({ state }) => {
  const [isVisible, setIsVisible] = useState(true);

  // ✅ Smooth progress displayed
  const [displayProgress, setDisplayProgress] = useState(0);

  const rafRef = useRef(null);
  const currentRef = useRef(0);

  // ✅ message strictly synced with displayProgress
  const syncedMessage = useMemo(() => {
    const p = displayProgress;

    if (p >= 100) return "Ready";
    if (p >= 75) return "Finalizing assets...";
    if (p >= 50) return "Securing quantum link...";
    if (p >= 25) return "Optimizing rendering engine...";
    return "Configuring core modules...";
  }, [displayProgress]);

  // ✅ Smoothly animate display progress to match state.progress
  useEffect(() => {
    const target = Number(state?.progress || 0);

    cancelAnimationFrame(rafRef.current);

    const animate = () => {
      const current = currentRef.current;
      const diff = target - current;

      if (Math.abs(diff) < 0.05) {
        currentRef.current = target;
        setDisplayProgress(target);
        return;
      }

      // ✅ premium smoothing
      currentRef.current = current + diff * 0.08;
      setDisplayProgress(currentRef.current);

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(rafRef.current);
  }, [state?.progress]);

  // ✅ Keep overlay mounted until exit animation is done
  useEffect(() => {
    if (state?.isComplete) {
      const timer = setTimeout(() => setIsVisible(false), 1200);
      return () => clearTimeout(timer);
    }
  }, [state?.isComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#050505] transition-all duration-1000 ease-in-out
        ${
          state?.isComplete
            ? "translate-y-[-100%] opacity-0"
            : "translate-y-0 opacity-100"
        }
      `}
    >
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-cyan-500/10 blur-[130px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-blue-600/5 blur-[110px] rounded-full" />

      {/* Grid Background Effect */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Logo Section */}
      <div className="relative mb-10">
        <img
          src={assets.capyngen3d}
          alt="Capyngen"
          className="w-48 h-48 sm:w-64 sm:h-64 object-contain drop-shadow-[0_0_28px_rgba(34,211,238,0.22)] animate-[popIn_0.8s_cubic-bezier(0.22,1,0.36,1)]"
        />

        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm animate-[scan_2.1s_ease-in-out_infinite]" />
      </div>

      {/* Loading Progress Info */}
      <div className="flex flex-col items-center w-full max-w-sm px-6">
        <div className="flex justify-between w-full mb-3 text-[10px] tracking-[0.35em] font-medium text-gray-400 uppercase">
          {/* ✅ synced text */}
          <span className="opacity-90">{syncedMessage}</span>

          {/* <span className="tabular-nums text-gray-300">
            {Math.floor(displayProgress)}%
          </span> */}
        </div>

        <div className="relative h-[4px] w-full bg-white/5 overflow-hidden rounded-full">
          <div
            className="absolute top-0 left-0 h-full rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 shadow-[0_0_16px_rgba(34,211,238,0.35)]"
            style={{ width: `${displayProgress}%` }}
          />

          <div className="absolute inset-0 overflow-hidden">
            <div className="h-full w-[40%] bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shine_1.6s_ease-in-out_infinite]" />
          </div>
        </div>

        <p className="mt-8 text-[9px] tracking-[0.5em] text-gray-500 uppercase font-light animate-pulse">
          Secure Quantum Handshake
        </p>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(0); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translateY(256px); opacity: 0; }
        }

        @keyframes popIn {
          0% { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes shine {
          0% { transform: translateX(-120%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateX(260%); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Preloader;
