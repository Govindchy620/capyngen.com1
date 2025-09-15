import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { Smartphone } from "lucide-react";

const floatingIcons = [
  { icon: "📱", top: "15%", left: "5%" },
  { icon: "🚀", top: "20%", right: "5%" },
  { icon: "💡", bottom: "15%", left: "10%" },
  { icon: "🔒", bottom: "20%", right: "10%" },
];

const AppDevHero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-gradient-to-b from-indigo-900 via-purple-900 to-black text-white">
      {/* Floating Emoji Icons */}
      {floatingIcons.map((item, i) => (
        <motion.div
          key={i}
          className="absolute text-4xl opacity-40 select-none pointer-events-none"
          style={{ ...item }}
          animate={{ y: [0, -20, 0] }}
          transition={{
            repeat: Infinity,
            duration: 6 + i,
            ease: "easeInOut",
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      {/* Glass Card for Title & Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 mt-16 max-w-3xl w-full px-6 py-8 rounded-3xl 
                   bg-white/10 backdrop-blur-md border border-white/20 shadow-xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold flex items-center justify-center gap-3">
          <Smartphone className="text-pink-400 w-10 h-10" /> App Development
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          We build powerful, scalable, and user-friendly mobile applications
          that transform your ideas into reality.
        </p>
      </motion.div>

      {/* Center Phone Mockup */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="mt-12 relative z-10"
      >
        <motion.img
          src={assets.appDevelopment}
          alt="App Development"
          className="w-[320px] md:w-[480px] rounded-3xl shadow-2xl border border-gray-700"
          animate={{ y: [0, -20, 0] }}
          transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
        />
        {/* Glowing ring behind the phone */}
        <div className="absolute -inset-10 bg-pink-500/20 blur-3xl rounded-full animate-pulse"></div>
      </motion.div>
    </section>
  );
};

export default AppDevHero;
