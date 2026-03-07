import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Check, ArrowRight, ArrowLeft, Mail, PhoneCall, TrendingUp } from "lucide-react";

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center py-20 px-4 bg-[#030712] relative overflow-hidden font-sans selection:bg-emerald-500/30">

      {/* --- Ultra-Clean Background Effects --- */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Central Success Glow */}
        <div className="w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[120px] opacity-70 animate-pulse" />

        {/* Crisp Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_80%,transparent_100%)]" />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Elegant Success Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 relative"
        >
          {/* Outer rotating dashed ring for a tech feel */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -inset-4 border border-dashed border-emerald-500/30 rounded-full"
          />
          {/* Solid inner badge */}
          <div className="w-20 h-20 bg-gradient-to-b from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(52,211,153,0.4)]">
            <Check className="w-10 h-10 text-white" strokeWidth={3} />
          </div>
        </motion.div>

        {/* Hero Typography */}
        <motion.div variants={itemVariants} className="space-y-6 mb-16 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
            Congratulations. <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              Your Spot is Secured.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium">
            You’ve successfully unlocked your <span className="text-white font-bold">FREE 30-minute strategy call</span>. We are ready to identify quick-win opportunities to explode your business growth.
          </p>
        </motion.div>

        {/* Minimalist "What Happens Next" Track */}
        <motion.div
          variants={itemVariants}
          className="w-full grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-16 relative"
        >
          {/* Desktop Connecting Line */}
          <div className="hidden md:block absolute top-6 left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Step 1 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center mb-4 shadow-lg text-emerald-400">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">1. Check Your Inbox</h3>
            <p className="text-sm text-slate-500">We've sent a confirmation email with your request details.</p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center mb-4 shadow-lg text-blue-400">
              <PhoneCall className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">2. We'll Reach Out</h3>
            <p className="text-sm text-slate-500">Our growth expert will call you within 24 hours to schedule.</p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center relative z-10">
            <div className="w-12 h-12 rounded-full bg-[#0a0f1c] border border-white/10 flex items-center justify-center mb-4 shadow-lg text-purple-400">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-white font-semibold mb-2">3. Strategy & Growth</h3>
            <p className="text-sm text-slate-500">We map out your customized plan for maximum ROI.</p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => navigate("/digital-marketing-offer-page")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#030712] font-bold rounded-full transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Offer Page
          </button>

          <button
            onClick={() => window.open("https://capyngen.com", "_blank")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent border border-white/10 text-white font-semibold rounded-full hover:bg-white/5 transition-all group"
          >
            Visit Capyngen.com
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-white group-hover:translate-x-1 transition-all" />
          </button>
        </motion.div>

      </motion.div>
    </section>
  );
};

export default GreetingsPage;