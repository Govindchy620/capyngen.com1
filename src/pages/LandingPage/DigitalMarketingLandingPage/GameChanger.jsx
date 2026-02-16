import React from "react";
import { motion } from "framer-motion";
import {
    Trophy,
    Wallet,
    Crosshair,
    Compass,
    Clock,
    CheckCircle2,
    ArrowRight
} from "lucide-react";

const gameChangers = [
    {
        title: "Proven Results",
        description: "We’ve already helped 1800+ businesses increase their leads and sales using proven digital marketing strategies.",
        icon: Trophy,
        gradient: "from-amber-400 to-orange-500",
        glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.2)]",
        border: "group-hover:border-amber-500/30"
    },
    {
        title: "Affordable Investment",
        description: "Get services worth ₹1,00,000 for just ₹9,999 — maximum value with minimal risk.",
        icon: Wallet,
        gradient: "from-emerald-400 to-teal-500",
        glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]",
        border: "group-hover:border-emerald-500/30"
    },
    {
        title: "Lead-Focused Approach",
        description: "Every service is designed to generate high-quality, conversion-ready leads, not just traffic.",
        icon: Crosshair,
        gradient: "from-blue-400 to-indigo-500",
        glow: "group-hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
        border: "group-hover:border-blue-500/30"
    },
    {
        title: "Complete Guidance",
        description: "From strategy to planning and execution, everything is handled for you — perfect for All Businesses.",
        icon: Compass,
        gradient: "from-purple-400 to-pink-500",
        glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]",
        border: "group-hover:border-purple-500/30"
    },
    {
        title: "Time-Saving",
        description: "Focus on running your business while we manage your entire digital marketing process.",
        icon: Clock,
        gradient: "from-rose-400 to-red-500",
        glow: "group-hover:shadow-[0_0_30px_rgba(244,63,94,0.2)]",
        border: "group-hover:border-rose-500/30"
    }
];

const GameChanger = () => {
    return (
        <section className="relative py-20 lg:py-32 bg-[#030712] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full mix-blend-screen filter blur-[150px]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

                    {/* Left Column: Sticky Header */}
                    <div className="lg:col-span-5 lg:sticky lg:top-32 text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="inline-flex items-center justify-center p-1.5 mb-6 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-md">
                                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[11px] sm:text-xs font-bold px-4 py-1.5 rounded-xl uppercase tracking-widest">
                                    The Unfair Advantage
                                </div>
                            </div>

                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]">
                                Why Our Package Is a <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-blue-400">
                                    Game-Changer
                                </span>
                            </h2>

                            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0">
                                Stop wasting money on fragmented services that don't talk to each other. We provide an end-to-end, fully managed growth ecosystem built specifically for revenue generation.
                            </p>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="hidden lg:inline-flex items-center gap-2 bg-white text-[#0a0f1c] px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] transition-all"
                            >
                                Claim Your ₹9,999 Package <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>
                    </div>

                    {/* Right Column: Scrollable Feature Cards */}
                    <div className="lg:col-span-7 space-y-6">
                        {gameChangers.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`group relative bg-[#0a0f1c]/60 backdrop-blur-xl rounded-3xl border border-white/5 p-6 sm:p-8 transition-all duration-500 hover:-translate-y-1 ${item.border} ${item.glow} overflow-hidden`}
                            >
                                {/* Background Checkmark Watermark */}
                                <div className="absolute -right-6 -bottom-6 opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:-rotate-12">
                                    <CheckCircle2 className="w-48 h-48 text-white" />
                                </div>

                                <div className="relative z-10 flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">

                                    {/* Icon Container */}
                                    <div className="shrink-0 relative">
                                        <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-500 rounded-full`} />
                                        <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#030712] border border-white/10 flex items-center justify-center relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                            <item.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Text Content */}
                                    <div>
                                        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mb-2 sm:mb-3 flex items-center gap-2">
                                            {item.title}
                                            <span className="hidden sm:flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400">
                                                <CheckCircle2 className="w-3 h-3" />
                                            </span>
                                        </h3>
                                        <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>

                                </div>

                                {/* Subtle Left Border Highlight */}
                                <div className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 bg-gradient-to-b ${item.gradient} group-hover:h-1/2 transition-all duration-500 rounded-r-full`} />
                            </motion.div>
                        ))}

                        {/* Mobile Call to Action (Shows only on small screens below the cards) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="pt-8 flex justify-center lg:hidden"
                        >
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex w-full sm:w-auto justify-center items-center gap-2 bg-white text-[#0a0f1c] px-8 py-4 rounded-xl font-bold shadow-[0_0_20px_rgba(255,255,255,0.15)] transition-all"
                            >
                                Claim Your ₹9,999 Package <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </motion.div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default GameChanger;