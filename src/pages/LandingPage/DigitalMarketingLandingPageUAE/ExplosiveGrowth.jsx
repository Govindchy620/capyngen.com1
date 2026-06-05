import React from "react";
import { motion } from "framer-motion";
import {
    Eye,
    Magnet,
    TrendingUp,
    Lightbulb,
    Clock,
    Sparkles,
    ArrowRight
} from "lucide-react";

const growthFactors = [
    {
        title: "Visibility",
        description: "Google & social media me brand strong presence.",
        icon: Eye,
        gradient: "from-blue-400 to-cyan-400",
        bgGlow: "group-hover:bg-cyan-500/10"
    },
    {
        title: "Leads",
        description: "High-quality potential customers ke liye direct reach.",
        icon: Magnet,
        gradient: "from-purple-400 to-fuchsia-400",
        bgGlow: "group-hover:bg-fuchsia-500/10"
    },
    {
        title: "Sales",
        description: "Campaigns optimized for maximum ROI.",
        icon: TrendingUp,
        gradient: "from-emerald-400 to-green-400",
        bgGlow: "group-hover:bg-emerald-500/10"
    },
    {
        title: "Expert Guidance",
        description: "Avoid mistakes and implement the best strategies.",
        icon: Lightbulb,
        gradient: "from-amber-400 to-orange-400",
        bgGlow: "group-hover:bg-orange-500/10"
    },
    {
        title: "Time-Saving",
        description: "Focus on business while we grow your online presence.",
        icon: Clock,
        gradient: "from-rose-400 to-red-400",
        bgGlow: "group-hover:bg-rose-500/10"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const ExplosiveGrowth = () => {
    return (
        <section className="relative py-14 bg-[#030712] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-blue-600/10  mix-blend-screen filter blur-[150px] animate-pulse" />
                <div className="absolute bottom-0 left-[-10%] w-[600px] h-[600px] bg-purple-600/10  mix-blend-screen filter blur-[150px]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-14">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]"
                    >
                        How This Package Will <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                            Explode Your Business Growth
                        </span>
                    </motion.h2>
                </div>

                {/* Bento Grid Layout (Handles 5 items perfectly) */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-6 gap-6"
                >
                    {growthFactors.map((item, index) => {
                        // First 3 items take up 2 columns each on large screens (1/3 width).
                        // Last 2 items take up 3 columns each on large screens (1/2 width, perfectly centered).
                        const colSpanClass = (index === 3 || index === 4)
                            ? "md:col-span-3 lg:col-span-3"
                            : "md:col-span-2 lg:col-span-2";

                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className={`group relative overflow-hidden bg-[#0a0f1c]/80 backdrop-blur-xl  border border-white/5 hover:border-white/15 transition-all duration-500 p-8 ${colSpanClass}`}
                            >
                                {/* Hover Background Glow */}
                                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${item.bgGlow}`} />

                                {/* Icon Container */}
                                <div className="relative mb-6 inline-flex">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 `} />
                                    <div className={`w-14 h-14  bg-[#030712] border border-white/10 flex items-center justify-center relative z-10 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                                        <item.icon className="w-6 h-6 text-white" />
                                    </div>
                                </div>

                                <h3 className={`text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${item.gradient} mb-3`}>
                                    {item.title}
                                </h3>

                                <p className="text-slate-400 leading-relaxed text-[15px]">
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom Imagination / Price Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 relative"
                >
                    {/* Glowing Border Wrapper */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500  blur opacity-30" />

                    <div className="relative bg-[#0a0f1c] border border-indigo-500/20  p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 overflow-hidden shadow-2xl">

                        {/* Banner Background Accents */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10  blur-[80px] pointer-events-none" />
                        <Sparkles className="absolute top-6 right-8 w-24 h-24 text-indigo-500/5 rotate-12 pointer-events-none" />

                        <div className="flex-1 text-center md:text-left relative z-10">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-snug">
                                Imagine your business with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">triple the leads</span>, <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">higher sales</span>, and a brand that stands out online.
                            </h3>
                            <p className="text-slate-400 text-lg">
                                Stop leaving money on the table. Secure your complete digital dominance today.
                            </p>
                        </div>

                        <div className="shrink-0 flex flex-col items-center md:items-end relative z-10">
                            <div className="text-sm font-semibold text-indigo-300 uppercase tracking-widest mb-1">
                                All For Just
                            </div>
                            <div className="text-5xl md:text-6xl font-black text-white mb-4">
                                1199 AED
                            </div>
                            <motion.button
                                onClick={() => {
                                    document.getElementById("home").scrollIntoView({ behavior: "smooth" });
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 bg-white text-[#0a0f1c] px-8 py-4  font-bold shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] transition-all"
                            >
                                Claim This Offer <ArrowRight className="w-5 h-5" />
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default ExplosiveGrowth;