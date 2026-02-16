import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle2, ArrowRight, Home, CalendarCheck, PhoneCall, Sparkles } from "lucide-react";

const GreetingsPage = () => {
  const navigate = useNavigate();

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const checkmarkVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 250,
        damping: 20,
        duration: 0.8,
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-[#030712] relative overflow-hidden font-sans">

      {/* --- Background Effects (Matching Landing Page Theme) --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-500/10 rounded-full mix-blend-screen filter blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[150px]" />

        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <motion.div
        className="relative z-10 max-w-3xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Glassmorphism Card */}
        <div className="bg-[#0a0f1c]/80 backdrop-blur-2xl border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-[2.5rem] p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">

          {/* Inner Card Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/10 rounded-full blur-[50px]" />

          {/* Success Icon */}
          <motion.div className="flex justify-center mb-10" variants={checkmarkVariants}>
            <div className="relative">
              {/* Pulsing ring behind checkmark */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full blur-xl opacity-40"
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.6, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative w-24 h-24 bg-gradient-to-br from-[#0a0f1c] to-[#111827] border-2 border-emerald-500/30 rounded-full flex items-center justify-center shadow-2xl">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.5)]" strokeWidth={2.5} />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-4 mb-10">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Congratulations! 🎉
            </h1>
            <h2 className="text-xl md:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400 pb-2">
              You've unlocked your FREE 30-Minute Strategy Call.
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              Your details have been successfully received. We are excited to dive into your business, identify quick-win opportunities, and map out your path to explosive growth.
            </p>
          </motion.div>

          {/* What Happens Next Cards */}
          <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto">

            <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors rounded-2xl p-6 text-left flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mt-0.5">
                <PhoneCall className="w-5 h-5 text-indigo-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 tracking-wide">Expect Our Call</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Our growth expert will reach out to you within the next 24 hours to schedule your session.
                </p>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-colors rounded-2xl p-6 text-left flex gap-4 items-start">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mt-0.5">
                <Sparkles className="w-5 h-5 text-purple-400" />
              </div>
              <div>
                <h3 className="font-bold text-white mb-1 tracking-wide">Prepare to Scale</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Get ready to discover the exact strategies needed to triple your leads and dominate online.
                </p>
              </div>
            </div>

          </motion.div>

          {/* Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 border-t border-white/5">
            <button
              onClick={() => navigate("/digital-marketing-landing-page")}
              className="w-full sm:w-auto px-8 py-4 bg-white text-[#0a0f1c] font-bold rounded-xl shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all hover:scale-105 flex items-center justify-center gap-2"
            >
              <Home className="w-5 h-5" />
              Back to Offer Page
            </button>

            <button
              onClick={() => window.open("https://capyngen.com", "_blank")} // Assuming this is your main site
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
            >
              Visit Main Website
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default GreetingsPage;