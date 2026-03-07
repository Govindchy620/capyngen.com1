import React from 'react';

const GameChanger = () => {
    return (
        <section className="py-24 px-6 relative bg-[#030712]">
            {/* Background radial accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/5  blur-[120px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-none text-white">
                            Why Our Package Is a {" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Game-Changer</span>
                        </h2>
                        <p className="text-slate-400 text-xl font-medium border-l-2 border-indigo-500/30 pl-6">
                            Strategic growth shouldn't be a gamble. We've optimized every variable to ensure your market dominance.
                        </p>
                    </div>
                    <div className="hidden lg:block">
                        <div className="px-6 py-4 bg-slate-900/50  border border-white/5 backdrop-blur-sm">
                            <div className="text-3xl font-bold text-white">1800+</div>
                            <div className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Active Partners</div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
                    {/* Main Hero Card: Affordable Investment */}
                    <div className="md:col-span-4 p-4 bg-gradient-to-br from-indigo-900/40 to-slate-900/40 border border-indigo-500/30 backdrop-blur-xl relative overflow-hidden group hover:border-indigo-500/60 transition-all duration-500 shadow-2xl">
                        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-600/20  blur-3xl group-hover:bg-indigo-600/30 transition-colors"></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="w-12 h-12  bg-indigo-500/20 flex items-center justify-center text-2xl border border-indigo-500/40">✅</span>
                                <h3 className="text-3xl font-bold text-white tracking-tight">Affordable Investment</h3>
                            </div>

                            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                                <div className="flex-1">
                                    <p className="text-slate-300 text-xl leading-relaxed mb-8">
                                        Get services worth $4,999 for just <span className="text-white font-bold bg-indigo-600/30 px-3 py-1  border border-indigo-500/30">$199</span> — maximum value with minimal risk.
                                    </p>
                                    <div className="flex gap-4">
                                        <a href="#home" className="px-4 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold  transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                                            Secure This Offer
                                        </a>
                                        <div className="flex -space-x-3 items-center">
                                            <span className="pl-2 text-xs text-slate-500 font-bold uppercase tracking-widest">Limited Slots</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:w-48 p-6 bg-slate-950/50  border border-white/5 text-center">
                                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mb-1">Savings</div>
                                    <div className="text-3xl font-black text-green-400">90%</div>
                                    <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest mt-4 mb-1">Status</div>
                                    <div className="text-indigo-400 font-bold">Premium</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Proven Results */}
                    <div className="md:col-span-2 p-8 3rem] bg-slate-900/30 border border-white/5 backdrop-blur-sm group hover:bg-slate-900/50 transition-all">
                        <div className="w-12 h-12  bg-slate-800 flex items-center justify-center text-xl mb-6 border border-white/10 group-hover:border-indigo-500/30 transition-colors">✅</div>
                        <h3 className="text-xl font-bold text-white mb-4">Proven Results</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            We’ve already helped 1800+ businesses increase their leads and sales using proven digital marketing strategies.
                        </p>
                    </div>

                    {/* Lead-Focused Approach */}
                    <div className="md:col-span-2 p-8 3rem] bg-slate-900/30 border border-white/5 backdrop-blur-sm group hover:bg-slate-900/50 transition-all">
                        <div className="w-12 h-12  bg-slate-800 flex items-center justify-center text-xl mb-6 border border-white/10 group-hover:border-indigo-500/30 transition-colors">✅</div>
                        <h3 className="text-xl font-bold text-white mb-4">Lead-Focused Approach</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Every service is designed to generate high-quality, conversion-ready leads, not just traffic.
                        </p>
                    </div>

                    {/* Complete Guidance */}
                    <div className="md:col-span-2 p-8 3rem] bg-slate-900/30 border border-white/5 backdrop-blur-sm group hover:bg-slate-900/50 transition-all">
                        <div className="w-12 h-12  bg-slate-800 flex items-center justify-center text-xl mb-6 border border-white/10 group-hover:border-indigo-500/30 transition-colors">✅</div>
                        <h3 className="text-xl font-bold text-white mb-4">Complete Guidance</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            From strategy to planning and execution, everything is handled for you — perfect for All Businesses.
                        </p>
                    </div>

                    {/* Time-Saving */}
                    <div className="md:col-span-2 p-8 3rem] bg-slate-900/30 border border-white/5 backdrop-blur-sm group hover:bg-slate-900/50 transition-all">
                        <div className="w-12 h-12  bg-slate-800 flex items-center justify-center text-xl mb-6 border border-white/10 group-hover:border-indigo-500/30 transition-colors">✅</div>
                        <h3 className="text-xl font-bold text-white mb-4">Time-Saving</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">
                            Focus on running your business while we manage your entire digital marketing process.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GameChanger;