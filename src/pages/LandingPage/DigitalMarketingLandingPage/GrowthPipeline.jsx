import React from 'react';
import { motion } from 'framer-motion';
import { Search, Map, Rocket, Activity, BarChart3 } from 'lucide-react';

// Self-contained Data with Lucide Icons and Gradients
const INTERNAL_PROCESS_STEPS = [
    {
        id: 1,
        title: "Consultation & Discovery",
        description: "Deep dive into your business ecosystem to find the hidden leverage points.",
        icon: Search,
        gradient: "from-blue-400 to-cyan-400",
        shadow: "shadow-cyan-500/20",
        details: ["Business audit", "Challenge identification", "Growth goal definition"],
        imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        title: "Strategy Planning",
        description: "A data-driven blueprint tailored to your specific market position.",
        icon: Map,
        gradient: "from-indigo-400 to-purple-400",
        shadow: "shadow-indigo-500/20",
        details: ["Custom roadmap", "Channel selection", "Budget allocation"],
        imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        title: "Implementation",
        description: "Aggressive execution across high-impact digital channels.",
        icon: Rocket,
        gradient: "from-purple-400 to-pink-400",
        shadow: "shadow-pink-500/20",
        details: ["SEO & Content", "PPC & Performance", "Social Media & CRM"],
        imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        title: "Monitoring & Optimization",
        description: "Turning data into action to reduce costs and maximize conversions.",
        icon: Activity,
        gradient: "from-orange-400 to-rose-400",
        shadow: "shadow-orange-500/20",
        details: ["A/B Testing", "Cost reduction", "Funnel refinement"],
        imageUrl: "https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        title: "Reporting",
        description: "Full transparency on the metrics that actually drive revenue.",
        icon: BarChart3,
        gradient: "from-emerald-400 to-teal-400",
        shadow: "shadow-emerald-500/20",
        details: ["ROI Analysis", "Insight reporting", "Strategic review"],
        imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800"
    }
];

const InternalStepCard = ({ step, index }) => {
    const isEven = index % 2 !== 0;

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className={`relative flex flex-col md:flex-row items-center w-full mb-12 md:mb-20 group ${isEven ? 'md:flex-row-reverse' : ''}`}
        >
            {/* Connector Line Node (Desktop) */}
            <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0a0f1c] border border-white/10 z-20 items-center justify-center shadow-2xl group-hover:scale-110 group-hover:border-white/30 transition-all duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} blur-md opacity-20 group-hover:opacity-50 transition-opacity duration-500 rounded-full`} />
                <span className="text-white font-black text-lg relative z-10">{step.id}</span>
            </div>

            {/* Mobile Node indicator */}
            <div className="md:hidden absolute left-4 top-8 w-8 h-8 rounded-full bg-[#0a0f1c] border border-white/10 z-20 flex items-center justify-center shadow-lg">
                <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} blur-sm opacity-40 rounded-full`} />
                <span className="text-white font-bold text-xs relative z-10">{step.id}</span>
            </div>

            {/* Content Side */}
            <div className={`w-full md:w-[45%] pl-16 pr-4 py-4 md:p-0 ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                <div className={`p-6 sm:p-8 rounded-[2rem] bg-[#0a0f1c]/60 border border-white/5 group-hover:border-white/15 transition-all duration-500 relative overflow-hidden backdrop-blur-xl shadow-2xl group-hover:-translate-y-1`}>

                    {/* Subtle inner background glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 pointer-events-none`} />

                    <div className={`flex flex-col relative z-10 ${isEven ? 'items-start' : 'items-start md:items-end'}`}>
                        <div className={`w-14 h-14 mb-6 rounded-2xl flex items-center justify-center shadow-inner relative overflow-hidden`}>
                            <div className={`absolute inset-0 bg-gradient-to-br ${step.gradient} opacity-20`} />
                            <step.icon className={`w-6 h-6 text-white`} />
                        </div>

                        <h3 className={`text-2xl sm:text-3xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r ${step.gradient}`}>
                            {step.title}
                        </h3>

                        <p className="text-slate-400 text-[15px] sm:text-base leading-relaxed mb-6">
                            {step.description}
                        </p>

                        <div className={`flex flex-wrap gap-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
                            {step.details.map((detail, idx) => (
                                <span key={idx} className="px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-[11px] font-semibold uppercase tracking-wider text-slate-300">
                                    {detail}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Visual Side (Image) */}
            <div className={`hidden md:block md:w-[45%] px-4 lg:px-12`}>
                <div className={`relative group/img overflow-hidden rounded-[2rem] border border-white/5 aspect-video shadow-2xl ${step.shadow} group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500`}>
                    <img
                        src={step.imageUrl}
                        alt={step.title}
                        className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                    {/* Dark gradient overlay to blend image into the dark theme smoothly */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>
            </div>

            {/* Mobile Image (Inside card flow) */}
            <div className="w-full pl-16 pr-4 mt-2 md:hidden">
                <div className="w-full rounded-2xl overflow-hidden aspect-video border border-white/5 relative">
                    <img src={step.imageUrl} className="w-full h-full object-cover opacity-60 grayscale" alt={step.title} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
                </div>
            </div>
        </motion.div>
    );
};

const GrowthPipeline = () => {
    return (
        <section id="process" className="py-8 relative bg-[#030712] overflow-hidden">

            {/* Background Ambience */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-indigo-600/10 rounded-full mix-blend-screen filter blur-[150px]" />
                <div className="absolute bottom-[20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[150px]" />

                {/* Subtle Grid Pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-0 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16 px-4 sm:px-0">


                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight leading-[1.15]"
                    >
                        The Growth <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Pipeline</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="max-w-2xl mx-auto text-slate-400 text-lg leading-relaxed"
                    >
                        A streamlined, high-efficiency trajectory from initial audit to scaled dominance.
                    </motion.p>
                </div>

                <div className="relative pt-8 pb-12">
                    {/* Central Path Line (Desktop) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] hidden md:block">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 via-purple-500/20 to-transparent"></div>
                        {/* Glowing tracer effect line */}
                        <div className="absolute top-0 bottom-1/2 w-full bg-gradient-to-b from-indigo-500 to-purple-500 opacity-50 blur-[2px]"></div>
                    </div>

                    {/* Mobile Path Line */}
                    <div className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-indigo-500/30 to-transparent md:hidden"></div>

                    <div className="flex flex-col items-center">
                        {INTERNAL_PROCESS_STEPS.map((step, idx) => (
                            <InternalStepCard key={step.id} step={step} index={idx} />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GrowthPipeline;