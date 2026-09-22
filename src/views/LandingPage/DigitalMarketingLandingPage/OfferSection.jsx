import React from "react";
import { motion } from "framer-motion";
import {
    Hourglass,
    TrendingUp,
    Target,
    Globe,
    ShieldCheck,
    CheckCircle2
} from "lucide-react";

const benefits = [
    {
        title: "High-Quality Leads",
        description: "Attract customers who are actually ready to buy.",
        icon: <Target className="w-5 h-5 text-indigo-400" />
    },
    {
        title: "Higher Sales & ROI",
        description: "Convert your digital presence into a revenue engine.",
        icon: <TrendingUp className="w-5 h-5 text-emerald-400" />
    },
    {
        title: "Strong Online Visibility",
        description: "Dominate search results and social media feeds.",
        icon: <Globe className="w-5 h-5 text-blue-400" />
    },
    {
        title: "Premium Marketing, Low Cost",
        description: "Get top-tier agency expertise without the massive retainers.",
        icon: <ShieldCheck className="w-5 h-5 text-purple-400" />
    }
];

const OfferSection = () => {
    return (
        <section className="relative py-8 md:py-24 bg-[#030712] overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-rose-500/10  mix-blend-screen filter blur-[120px] animate-pulse" />
                <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] bg-indigo-600/10  mix-blend-screen filter blur-[120px]" />
                {/* Subtle Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Main Glassmorphism Card */}
                <div className="relative w-full bg-[#0a0f1c]/60 backdrop-blur-2xl  border border-white/5 shadow-[0_0_50px_rgba(0,0,0,0.5)] overflow-hidden">

                    {/* Inner Glow Line */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8">

                        {/* Left Column: Urgency & Scarcity */}
                        <div className="p-8 md:p-12 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/5 relative overflow-hidden">

                            {/* Subtle background glow for left side */}
                            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-rose-500/5 to-transparent pointer-events-none" />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className="relative z-10"
                            >


                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight tracking-tight">
                                    This Offer Is Valid For a {" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-orange-300 to-rose-400">
                                        Few Days Only.
                                    </span>
                                </h2>

                                <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                    Once the countdown ends, the price will instantly return to its original value of ₹1,00,000. Don't let your competitors grab this advantage before you do.
                                </p>

                                {/* Animated Call to Action Anchor */}
                                <motion.a
                                    href="#home"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold  transition-all"
                                >
                                    Secure My Spot Now
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Right Column: Audience & Benefits */}
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-bl from-indigo-500/[0.02] to-transparent">
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                            >
                                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                                    Is this right for you?
                                </h3>
                                <p className="text-slate-400 mb-8 text-base">
                                    This exclusive package is specially engineered for <span className="text-indigo-300 font-medium">all type of businesses</span> that are hungry for:
                                </p>

                                <div className="space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                                            className="group flex items-start gap-4 p-4  bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] hover:border-white/10 transition-colors"
                                        >
                                            <div className="flex items-center justify-center w-12 h-12  bg-black/40 border border-white/5 shrink-0 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                                {benefit.icon}
                                            </div>
                                            <div>
                                                <h4 className="text-white font-semibold text-base mb-1 flex items-center gap-2">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-sm text-slate-400 leading-relaxed">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default OfferSection;