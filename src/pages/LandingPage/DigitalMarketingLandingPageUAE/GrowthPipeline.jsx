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
                        Step-by-Step {" "}
                        <span className="text-blue-500">Process for Our Clients</span>
                    </h2>

                </div>

                {/* Timeline Wrapper */}
                <div className="relative">
                    {/* Vertical Line - Moved to the LEFT */}
                    <div className="absolute left-[27px] top-0 bottom-0 w-px bg-slate-700 hidden md:block" />

                    <div className="space-y-12">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                // Animated in from the left
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                // Standard flex direction (left to right)
                                className="relative flex flex-col md:flex-row gap-6 md:gap-12"
                            >
                                {/* Icon */}
                                <div className="relative z-10 flex-shrink-0">
                                    <div className="w-14 h-14 rounded-md bg-[#0f2742] border border-slate-700 shadow-md flex items-center justify-center">
                                        <step.icon size={24} className="text-blue-500" />
                                    </div>

                                    {/* Step Number - Placed on top-right */}
                                    <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md">
                                        0{index + 1}
                                    </span>
                                </div>

                                {/* Content - Text aligned to the left */}
                                <div className="flex-1 pb-8 text-left">
                                    <h3 className="text-xl font-bold text-white mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-300 leading-relaxed max-w-2xl">
                                        {step.description}
                                    </p>

                                    {/* Mobile Indicator - Aligned to the left */}
                                    <div className="mt-6 md:hidden w-12 h-1 bg-blue-500/30 rounded-md" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}