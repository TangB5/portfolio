"use client";

import Link from "next/link";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { useTranslations } from "next-intl";
import "primeicons/primeicons.css";

const colors = {
    primary: "#E9B826", 
    secondary: "#BB141A", 
    tertiary: "#2D5D2A", 
    dark: "#0A0A0A",
    light: "#F5F5DC",
    border: "rgba(245, 245, 220, 0.1)"
};

interface Solution {
    id: string;
    title: string;
    description: string;
    price: string;
    icon: string;
    features: string[];
    fullDescription: string;
    benefits: string[];
    targetAudience: string;
    category: "ENGINE" | "PROTOCOL" | "LAB";
}

export default function Solutions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.1 });
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);
    const t = useTranslations('SolutionPage');

    const solutions: Solution[] = [
        {
            id: t('solutions.0.id'),
            category: t('solutions.0.category') as "ENGINE" | "PROTOCOL" | "LAB",
            title: t('solutions.0.title'),
            description: t('solutions.0.description'),
            price: t('solutions.0.price'),
            icon: "pi pi-box",
            features: [
              t('solutions.0.features.0'),
              t('solutions.0.features.1'),
              t('solutions.0.features.2')
            ],
            fullDescription: t('solutions.0.full_description'),
            benefits: [
              t('solutions.0.benefits.0'),
              t('solutions.0.benefits.1'),
              t('solutions.0.benefits.2')
            ],
            targetAudience: t('solutions.0.target_audience')
        },
        {
            id: t('solutions.1.id'),
            category: t('solutions.1.category') as "ENGINE" | "PROTOCOL" | "LAB",
            title: t('solutions.1.title'),
            description: t('solutions.1.description'),
            price: t('solutions.1.price'),
            icon: "pi pi-shield",
            features: [
              t('solutions.1.features.0'),
              t('solutions.1.features.1'),
              t('solutions.1.features.2')
            ],
            fullDescription: t('solutions.1.full_description'),
            benefits: [
              t('solutions.1.benefits.0'),
              t('solutions.1.benefits.1'),
              t('solutions.1.benefits.2')
            ],
            targetAudience: t('solutions.1.target_audience')
        },
        {
            id: t('solutions.2.id'),
            category: t('solutions.2.category') as "ENGINE" | "PROTOCOL" | "LAB",
            title: t('solutions.2.title'),
            description: t('solutions.2.description'),
            price: t('solutions.2.price'),
            icon: "pi pi-microchip",
            features: [
              t('solutions.2.features.0'),
              t('solutions.2.features.1'),
              t('solutions.2.features.2')
            ],
            fullDescription: t('solutions.2.full_description'),
            benefits: [
              t('solutions.2.benefits.0'),
              t('solutions.2.benefits.1'),
              t('solutions.2.benefits.2')
            ],
            targetAudience: t('solutions.2.target_audience')
        },
    ];

    return (
        <div className="min-h-screen py-32 px-6 relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
            
            {/* Background Grid Pattern - Aspect Plan d'Ingénieur */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                 style={{ backgroundImage: `radial-gradient(${colors.light} 1px, transparent 1px)`, backgroundSize: '40px 40px' }} />

            <div className="max-w-7xl mx-auto relative z-10" ref={ref}>
                
                {/* Header Section */}
                <div className="mb-24">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        className="font-mono text-[10px] tracking-[0.5em] text-gray-500 mb-4 uppercase"
                    >
                        {t('hero.badge')}
                    </motion.div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        className="text-6xl md:text-8xl font-black tracking-tighter leading-none"
                    >
                        {t('hero.title_main')} <br/>
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, #FFF)` }}>
                            {t('hero.title_highlight')}
                        </span>
                    </motion.h1>
                </div>

                {/* Modules Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
                    {solutions.map((sol, i) => (
                        <motion.div
                            key={sol.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="group relative bg-white/[0.02] border border-white/5 p-10 hover:bg-white/[0.04] transition-all cursor-pointer"
                            onClick={() => setSelectedSolution(sol)}
                        >
                            {/* Module ID tag */}
                            <div className="absolute top-0 right-0 p-4 font-mono text-[10px] opacity-30 group-hover:opacity-100 group-hover:text-primary transition-all">
                                [{sol.id}]
                            </div>

                            <div className="space-y-8">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 text-[9px] font-mono tracking-widest text-gray-500">
                                    <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }} />
                                    {sol.category}
                                </div>

                                <h2 className="text-3xl font-bold uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                                    {sol.title}
                                </h2>

                                <p className="text-gray-400 leading-relaxed text-sm">
                                    {sol.description}
                                </p>

                                <div className="space-y-3 pt-4">
                                    {sol.features.map((f, idx) => (
                                        <div key={idx} className="flex items-center gap-3 text-[11px] font-mono opacity-60">
                                            <i className="pi pi-plus text-[8px]" style={{ color: colors.primary }}></i>
                                            {f}
                                        </div>
                                    ))}
                                </div>

                                <div className="pt-8 flex justify-between items-end">
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase">Pricing_Model</div>
                                        <div className="text-xl font-black" style={{ color: colors.primary }}>{sol.price}</div>
                                    </div>
                                    <div className="w-12 h-12 flex items-center justify-center border border-white/10 rounded-full group-hover:border-primary group-hover:bg-primary group-hover:text-black transition-all">
                                        <i className="pi pi-arrow-up-right"></i>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Newsletter Sub-Section (Terminal Style) */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    className="mt-32 p-1 border border-white/10 bg-white/[0.02]"
                >
                    <div className="p-8 border border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
                        <div>
                            <h3 className="text-xl font-bold uppercase tracking-widest mb-2">{t('newsletter.title')}</h3>
                            <p className="text-xs font-mono text-gray-500 tracking-tight">{t('newsletter.description')}</p>
                        </div>
                        <div className="flex w-full md:w-auto gap-2">
                            <input 
                                type="email" 
                                placeholder={t('newsletter.placeholder')}
                                className="bg-black border border-white/10 px-6 py-3 font-mono text-xs outline-none focus:border-primary flex-grow"
                            />
                            <button className="bg-white text-black px-8 py-3 text-xs font-bold uppercase tracking-tighter hover:bg-primary transition-colors">
                                {t('newsletter.button')}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* --- MODAL (TECHNICAL DATASHEET) --- */}
            <AnimatePresence>
                {selectedSolution && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md"
                        onClick={() => setSelectedSolution(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.95, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95, y: 20 }}
                            className="max-w-4xl w-full bg-[#0F0F0F] border border-white/10 p-10 relative overflow-hidden"
                            onClick={e => e.stopPropagation()}
                        >
                            {/* Decorative Red Accent */}
                            <div className="absolute top-0 left-0 w-full h-1" style={{ backgroundColor: colors.secondary }} />

                            <div className="flex justify-between items-start mb-12">
                                <div>
                                    <div className="font-mono text-[10px] text-primary mb-2 tracking-[0.3em] uppercase">{selectedSolution.category}  {selectedSolution.id}</div>
                                    <h2 className="text-4xl font-black uppercase tracking-tighter">{selectedSolution.title}</h2>
                                </div>
                                <button onClick={() => setSelectedSolution(null)} className="p-2 hover:rotate-90 transition-transform">
                                    <i className="pi pi-times"></i>
                                </button>
                            </div>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="space-y-8">
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-3">{t('modal.overview_title')}</div>
                                        <p className="text-gray-300 leading-relaxed italic border-l-2 pl-6" style={{ borderColor: colors.primary }}>
                                            &rdquo;{selectedSolution.fullDescription}&rdquo;
                                        </p>
                                    </div>
                                    
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-4">{t('modal.benefits_title')}</div>
                                        <ul className="space-y-3">
                                            {selectedSolution.benefits.map((b, idx) => (
                                                <li key={idx} className="flex items-center gap-3 text-sm">
                                                    <i className="pi pi-check text-[10px]" style={{ color: colors.tertiary }}></i>
                                                    {b}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>

                                <div className="space-y-8 bg-white/[0.02] p-8 border border-white/5">
                                    <div>
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-2">{t('modal.audience_title')}</div>
                                        <p className="text-xs font-mono">{selectedSolution.targetAudience}</p>
                                    </div>
                                    
                                    <div className="pt-6 border-t border-white/10">
                                        <div className="text-[10px] font-mono text-gray-500 uppercase mb-4">{t('modal.investment_title')}</div>
                                        <div className="text-4xl font-black" style={{ color: colors.primary }}>{selectedSolution.price}</div>
                                    </div>

                                    <Link 
                                        href="/CONTACT"
                                        className="block w-full py-4 bg-white text-black text-center font-bold uppercase tracking-widest text-xs hover:bg-primary transition-all"
                                        onClick={() => setSelectedSolution(null)}
                                    >
                                        {t('modal.cta_button')} <i className="pi pi-arrow-right ml-2 text-[10px]"></i>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}