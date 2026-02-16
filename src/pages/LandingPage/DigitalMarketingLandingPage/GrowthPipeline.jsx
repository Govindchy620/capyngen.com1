import { motion } from "framer-motion";
import {
    Search,
    Target,
    Zap,
    Heart,
    TrendingUp,
} from "lucide-react";

export default function GrowthPipeline() {
    const steps = [
        {
            icon: Search,
            title: "Market Analysis",
            description:
                "Identifying key demographics, analyzing competitors, and finding untapped market opportunities to exploit.",
        },
        {
            icon: Target,
            title: "Acquisition Strategy",
            description:
                "Deploying targeted multi-channel campaigns to drive high-quality traffic and generate qualified leads.",
        },
        {
            icon: Zap,
            title: "Conversion Optimization",
            description:
                "A/B testing, removing friction points, and optimizing funnels to maximize conversion rates.",
        },
        {
            icon: Heart,
            title: "Retention & Loyalty",
            description:
                "Implementing lifecycle marketing and automated nurturing sequences to increase customer lifetime value.",
        },
        {
            icon: TrendingUp,
            title: "Scaling & Expansion",
            description:
                "Doubling down on successful channels, automating systems, and expanding into new markets for compounding growth.",
        },
    ];

    return (
        <section className="w-full bg-[#0a1b2e] py-24 lg:py-32">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <div className="text-center mb-20">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                        Our Scalable{" "}
                        <span className="text-emerald-500">5-Step Growth Pipeline</span>
                    </h2>
                    <p className="text-slate-300 text-lg max-w-2xl mx-auto">
                        Expected Timeline: <strong>Ongoing</strong> &nbsp;|&nbsp; Goal:
                        <strong> Exponential MRR Growth</strong>
                    </p>
                </div>

                {/* Timeline Wrapper */}
                <div className="relative">
                    {/* Vertical Line - Moved to the RIGHT */}
                    <div className="absolute right-[27px] top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                // Animated in from the right
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                // Reversed flex direction
                                className="relative flex flex-col md:flex-row-reverse gap-6 md:gap-12"
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0 ml-auto md:ml-0">
                                    <div className="w-14 h-14 rounded-md bg-[#0f2742] border border-slate-700 shadow-md flex items-center justify-center">
                                        <step.icon size={24} className="text-emerald-500" />
                                    </div>

                                    {/* Step Number - Moved to top-left to face the text */}
                                    <span className="absolute -top-2 -left-2 bg-emerald-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content - Text aligned to the right on desktop */}
                                <div className="flex-1 pb-8 text-right">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed ml-auto max-w-2xl">
                                        {step.description}
                                    </p>

                                    {/* Mobile Indicator - Aligned to the right */}
                                    <div className="mt-6 md:hidden w-12 h-1 bg-emerald-500/30 rounded-md ml-auto" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}