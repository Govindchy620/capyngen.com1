import React from "react";
import { motion } from "framer-motion";
import { Building2, UserPlus, Compass, CheckCircle2 } from "lucide-react";

const targetAudiences = [
    {
        title: "Scaling Businesses",
        description: "Helping small, medium, and large businesses achieve fast and scalable online growth.",
        icon: Building2,
        gradient: "from-blue-400 to-indigo-600",
        shadow: "shadow-blue-500/20"
    },
    {
        title: "Smart Entrepreneurs",
        description: "Entrepreneurs who want to increase leads and sales without hiring an expensive in-house team.",
        icon: UserPlus,
        gradient: "from-purple-400 to-pink-600",
        shadow: "shadow-purple-500/20"
    },
    {
        title: "Growth Seekers",
        description: "Anyone who wants a complete, step-by-step digital marketing strategy with expert guidance.",
        icon: Compass,
        gradient: "from-emerald-400 to-teal-600",
        shadow: "shadow-emerald-500/20"
    }
];

// Simple animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
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

const WhoCanBenefit = () => {
    return (
        <section className="relative py-20 lg:py-24 bg-[#030712] overflow-hidden">
            {/* Subtle Background Glows */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-indigo-600/5 rounded-full mix-blend-screen filter blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full mix-blend-screen filter blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-6 tracking-tight"
                    >
                        Who Can Benefit From{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
                            This Package?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        Whether you are just starting out or looking to scale, this package provides the exact roadmap and execution you need to dominate your market.
                    </motion.p>
                </div>

                {/* 3-Column Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
                >
                    {targetAudiences.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className="group relative h-full bg-[#0a0f1c]/80 backdrop-blur-xl rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden flex flex-col p-8 lg:p-10"
                        >
                            {/* Top Gradient Accent Line */}
                            <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />

                            {/* Background Watermark Icon */}
                            <div className="absolute -right-6 -top-6 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity duration-500 pointer-events-none transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                                <CheckCircle2 className="w-48 h-48 text-white" />
                            </div>

                            {/* Icon Container */}
                            <div className="relative mb-8">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-[1px] shadow-lg ${item.shadow} group-hover:-translate-y-1 transition-transform duration-300`}>
                                    <div className="w-full h-full bg-[#0a0f1c] rounded-[15px] flex items-center justify-center">
                                        <item.icon className="w-8 h-8 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]" />
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="relative z-10 flex-grow flex flex-col">
                                <div className="flex items-center gap-3 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                    <h3 className="text-xl font-bold text-white tracking-wide">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="text-slate-400 leading-relaxed text-[15px]">
                                    {item.description}
                                </p>
                            </div>

                            {/* Bottom Glow Effect on Hover */}
                            <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-gradient-to-t ${item.gradient} blur-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-t-full pointer-events-none`} />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default WhoCanBenefit;