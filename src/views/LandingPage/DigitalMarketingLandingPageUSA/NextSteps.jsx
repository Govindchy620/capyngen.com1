import React from "react";
import { motion } from "framer-motion";
import {
    Send,
    PhoneCall,
    Target,
    Map,
    Rocket,
    ShieldCheck
} from "lucide-react";

const steps = [
    {
        id: 1,
        title: "You submit the form",
        icon: Send,
        color: "from-blue-400 to-blue-600",
        shadow: "shadow-blue-500/20",
        borderColor: "border-blue-500/30"
    },
    {
        id: 2,
        title: "Our team contacts you within 24 hours",
        icon: PhoneCall,
        color: "from-indigo-400 to-purple-600",
        shadow: "shadow-indigo-500/20",
        borderColor: "border-indigo-500/30"
    },
    {
        id: 3,
        title: "We understand your business & goals",
        icon: Target,
        color: "from-purple-400 to-pink-500",
        shadow: "shadow-pink-500/20",
        borderColor: "border-pink-500/30"
    },
    {
        id: 4,
        title: "You receive a clear digital marketing action plan",
        icon: Map,
        color: "from-orange-400 to-rose-500",
        shadow: "shadow-orange-500/20",
        borderColor: "border-orange-500/30"
    },
    {
        id: 5,
        title: "Campaigns & execution begin",
        icon: Rocket,
        color: "from-emerald-400 to-green-500",
        shadow: "shadow-emerald-500/20",
        borderColor: "border-emerald-500/30"
    }
];

const NextSteps = () => {
    return (
        <section className="relative py-10 bg-[#030712] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[150px]" />
                <div className="absolute bottom-0 right-[-5%] w-[400px] h-[400px] bg-emerald-600/10 rounded-full mix-blend-screen filter blur-[120px]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16 lg:mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight"
                    >
                        What Happens After <br className="hidden sm:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
                            You Sign Up?
                        </span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-slate-400 text-lg"
                    >
                        Your path to explosive growth is simple and transparent.
                    </motion.p>
                </div>

                {/* Vertical Timeline */}
                <div className="relative">

                    {/* Connecting Vertical Line */}
                    <div className="absolute left-[28px] sm:left-[44px] top-4 bottom-12 w-0.5 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-emerald-500/20 rounded-full" />

                    <div className="space-y-8 sm:space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                className="relative flex items-center gap-6 sm:gap-8 group"
                            >

                                {/* Step Number / Node */}
                                <div className="relative z-10 shrink-0">
                                    {/* Outer Glow */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full`} />

                                    {/* Circle */}
                                    <div className={`w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-[#0a0f1c] border-2 ${step.borderColor} flex flex-col items-center justify-center relative shadow-lg ${step.shadow} group-hover:scale-110 transition-transform duration-500`}>
                                        <step.icon className={`w-5 h-5 sm:w-8 sm:h-8 mb-0 sm:mb-1 text-transparent bg-clip-text bg-gradient-to-r ${step.color} text-white drop-shadow-md`} />
                                        <span className="hidden sm:block text-slate-400 text-xs font-bold tracking-widest uppercase">Step {step.id}</span>
                                    </div>
                                </div>

                                {/* Content Card */}
                                <div className={`flex-1 bg-white/[0.02] hover:bg-white/[0.04] border border-white/5 hover:${step.borderColor} backdrop-blur-xl rounded-2xl p-5 sm:p-7 transition-all duration-300 group-hover:-translate-y-1 shadow-xl`}>
                                    <div className="flex items-center gap-3">
                                        <span className="sm:hidden text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-500 font-bold text-sm uppercase tracking-wider">
                                            Step {step.id}
                                        </span>
                                    </div>
                                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide mt-1">
                                        {step.title}
                                    </h3>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Bottom Callout / Assurance Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 sm:mt-24 relative max-w-2xl mx-auto"
                >
                    {/* Glowing Border Background */}
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-emerald-500 to-indigo-500 rounded-2xl blur opacity-30 animate-pulse" />

                    <div className="relative bg-[#0a0f1c] border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 shadow-2xl">
                        <div className="shrink-0 w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                            <ShieldCheck className="w-8 h-8 text-emerald-400" />
                        </div>
                        <div className="text-center sm:text-left">
                            <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                                No pressure. No confusion.
                            </h4>
                            <p className="text-emerald-200/80 font-medium">
                                Just clear next steps and real growth.
                            </p>
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default NextSteps;