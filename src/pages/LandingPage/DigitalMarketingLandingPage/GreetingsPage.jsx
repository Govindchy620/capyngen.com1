import { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { CheckCircle, ArrowRight, Home, Mail, Phone } from "lucide-react";

const ThankYouPage = () => {
    const navigate = useNavigate();
    // const [countdown, setCountdown] = useState(10);

    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    clearInterval(timer);
                    navigate("/");
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [navigate]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" },
        },
    };

    const checkmarkVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: {
            scale: 1,
            rotate: 0,
            transition: {
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.8,
            },
        },
    };

    return (
        <section className="min-h-screen flex items-center justify-center py-20 px-4 bg-gradient-to-b from-black via-slate-900 to-slate-800 text-white overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
                <motion.div
                    className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1,
                    }}
                />
            </div>

            <motion.div
                className="relative z-10 max-w-3xl w-full text-center"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div
                    className="flex justify-center mb-8"
                    variants={checkmarkVariants}
                >
                    <div className="relative">
                        <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full blur-xl opacity-50"
                            animate={{
                                scale: [1, 1.2, 1],
                                opacity: [0.5, 0.8, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        />
                        <div className="relative bg-gradient-to-br from-green-400 to-emerald-600 rounded-full p-6">
                            <CheckCircle className="w-20 h-20 text-white" strokeWidth={2.5} />
                        </div>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    variants={itemVariants}
                >
                    Thank You! 🎉
                </motion.h1>

                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-white mb-6"
                    variants={itemVariants}
                >
                    Your Request Has Been Received
                </motion.h2>

                <motion.p
                    className="text-lg md:text-xl text-indigo-200 mb-8 leading-relaxed max-w-2xl mx-auto"
                    variants={itemVariants}
                >
                    We appreciate you taking the time to share your details with us. Our
                    expert team will review your information and reach out to you shortly
                    to discuss how we can help grow your brand.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 max-w-4xl mx-auto"
                    variants={itemVariants}
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex justify-center mb-3">
                            <div className="bg-indigo-500/20 rounded-full p-3">
                                <Mail className="w-6 h-6 text-indigo-400" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Email Confirmation</h3>
                        <p className="text-sm text-gray-400">
                            Check your inbox for confirmation
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex justify-center mb-3">
                            <div className="bg-purple-500/20 rounded-full p-3">
                                <Phone className="w-6 h-6 text-purple-400" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Quick Response</h3>
                        <p className="text-sm text-gray-400">
                            We'll contact you within 24 hours
                        </p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                        <div className="flex justify-center mb-3">
                            <div className="bg-pink-500/20 rounded-full p-3">
                                <CheckCircle className="w-6 h-6 text-pink-400" />
                            </div>
                        </div>
                        <h3 className="font-semibold text-white mb-2">Free Consultation</h3>
                        <p className="text-sm text-gray-400">
                            Get expert advice on your marketing
                        </p>
                    </div>
                </motion.div>

                <motion.div
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    variants={itemVariants}
                >
                    <motion.button
                        onClick={() => navigate("/")}
                        className="px-8 py-4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Home className="w-5 h-5" />
                        Back to Home
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </motion.button>

                    <motion.a
                        href="https://www.capyngen.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl transition-all duration-300 flex items-center gap-2"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Visit Our Website
                        <ArrowRight className="w-5 h-5" />
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ThankYouPage;
