'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'primeicons/primeicons.css';
import Plan from '../component/arrierplan';

const colors = {
    gold: '#E9B826',
    red: '#BB141A',
    green: '#2D5D2A',
    dark: '#0A0A0A',
    light: '#F5F5DC'
};
type SectionTitleProps = {
  title: string;
  subtitle: string;
  color?: string;
};
type Motif = {
  id: number;
  src: string;
  title: string;
  version: string;
  origin: string;
  status: 'available' | 'upcoming' | 'revision';
  desc: string;
};


// --- COMPOSANTS INTERNES ---

const SectionTitle = ({ title, subtitle, color = colors.gold }:SectionTitleProps) => (
  <div className="mb-16">
    <div className="flex items-center gap-3 mb-2">
      <div className="h-[2px] w-8" style={{ backgroundColor: color }} />
      <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">{subtitle}</span>
    </div>
    <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">{title}</h2>
  </div>
);

export default function Culture() {
const [activeMotif, setActiveMotif] = useState<Motif | null>(null);
const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

    const motifs : Motif[]= [
        { id: 1, src: '/motif-wax.jpg', title: 'WAX_CORE', version: 'v2.1', origin: 'West Africa', status: 'available', desc: 'Réinterprétation vectorielle des flux de couleurs Wax pour les fonds de sites haute performance.' },
        { id: 2, src: '/motif-adinkra.jpg', title: 'ADINKRA_UI', version: 'v1.0', origin: 'Akan Culture', status: 'upcoming', desc: 'Symboles philosophiques convertis en icônes de navigation intelligentes.' },
        { id: 3, src: '/motif-ndop.jpg', title: 'NDOP_GRID', version: 'BETA', origin: 'Bamoun Kingdom', status: 'revision', desc: 'Géométrie sacrée camerounaise adaptée aux systèmes de grilles CSS modernes.' },
        { id: 4, src: '/motif-kente.jpg', title: 'KENTE_STRIPE', version: 'v1.4', origin: 'Ashanti', status: 'upcoming', desc: 'Rythmes de tissage transformés en séparateurs de sections responsifs.' },
    ];

    return (
        <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
            
            {/* --- HERO: CULTURAL R&D --- */}
            <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
                    <Plan />
                </div>

                <div className="relative z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="font-mono text-[10px] tracking-[0.4em] text-gray-500 mb-4"
                    >
                         SYSTEM_INIT: CULTURAL_HERITAGE_VAULT
                    </motion.div>
                    
                    <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
                        ROOTS <br/>
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${colors.gold}, #FFF)` }}>
                            & BYTES
                        </span>
                    </h1>

                    <p className="max-w-2xl text-xl text-gray-400 leading-relaxed border-l-2 pl-8" style={{ borderColor: colors.red }}>
                        I treat African visual heritage as <span className="text-white">source code</span>. 
                        Every pattern is a data-set of history, reinvented for the digital architecture of tomorrow.
                    </p>
                </div>
            </section>

            {/* --- SECTION 1: PATTERN REPOSITORY --- */}
            <section ref={ref1} className="py-24 px-6 max-w-7xl mx-auto">
                <SectionTitle title="Pattern Library" subtitle="Digital Archives" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {motifs.map((motif) => (
                        <motion.div
                            key={motif.id}
                            whileHover={{ y: -5 }}
                            className="group relative border border-white/5 bg-white/[0.02] p-4 cursor-pointer"
                            onClick={() => setActiveMotif(motif)}
                        >
                            {/* Visual Preview */}
                            <div className="relative aspect-square mb-4 overflow-hidden bg-gray-900">
                                <Image src={motif.src} alt={motif.title} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" />
                                <div className="absolute top-2 right-2 px-2 py-1 text-[8px] font-mono bg-black/80 border border-white/10">
                                    {motif.status.toUpperCase()}
                                </div>
                            </div>

                            {/* Metadata */}
                            <div className="space-y-1">
                                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                                    <span>{motif.version}</span>
                                    <span>{motif.origin}</span>
                                </div>
                                <h3 className="text-lg font-bold tracking-tighter group-hover:text-gold transition-colors" style={{ color: colors.gold }}>
                                    {motif.title}
                                </h3>
                            </div>

                            {/* Corner Accents */}
                            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: colors.gold }} />
                            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderColor: colors.gold }} />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 2: PHILOSOPHY LOGS (Proverbes) --- */}
            <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
                <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
                    {[
                        { text: "Knowledge is like a Baobab tree; one person's arms cannot embrace it.", ref: "African Proverb", note: "// OPEN_SOURCE_MINDSET" },
                        { text: "Innovation is born from the deepest roots.", ref: "KingTang", note: "// CORE_VALUE_01" },
                        { text: "If you want to go far, go together.", ref: "African Proverb", note: "// COLLABORATION_PROTOCOL" }
                    ].map((cite, i) => (
                        <div key={i} className="space-y-4">
                            <div className="text-[10px] font-mono text-gold" style={{ color: colors.gold }}>{cite.note}</div>
                            <p className="text-2xl font-bold tracking-tight leading-tight italic">&rdquo;{cite.text}&rdquo;</p>
                            <div className="text-xs text-gray-500">— {cite.ref}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* --- SECTION 3: SYSTEM SPECIFICATIONS (Éducation) --- */}
            <section className="py-32 px-6 max-w-7xl mx-auto">
                <SectionTitle title="Specifications" subtitle="Tech x Culture" color={colors.green} />

                

                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-8">
                        <p className="text-xl text-gray-400">
                            L&apos;uniformisation du web est une erreur système. Ma mission est de réinjecter de la <span className="text-white">diversité algorithmique</span> en utilisant des structures visuelles africaines.
                        </p>
                        
                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { title: "ADINKRA SYMBOLS", use: "Navigation métaphorique & Icônes", color: colors.gold },
                                { title: "NDOP GEOMETRY", use: "Grilles & Layouts structurels", color: colors.red },
                                { title: "WAX TEXTURES", use: "Dynamic Backgrounds & Motion", color: colors.green }
                            ].map((item, i) => (
                                <div key={i} className="p-4 border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors">
                                    <span className="font-bold tracking-widest">{item.title}</span>
                                    <span className="text-[10px] font-mono opacity-50 uppercase">{item.use}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    

                    <div className="relative aspect-video border border-white/10 bg-gray-900 overflow-hidden">
                        {/* Simulate a code/blueprint look */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #E9B826 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="absolute inset-0 flex items-center justify-center p-12">
                            <div className="text-center space-y-4">
                                <i className="pi pi-compass text-4xl mb-4" style={{ color: colors.gold }}></i>
                                <h4 className="text-xl font-mono uppercase tracking-[0.2em]">Framework Culturel v1.0</h4>
                                <p className="text-xs text-gray-500 font-mono italic">Ready for integration in modern UX/UI systems.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MODAL (VAULT VIEW) --- */}
            <AnimatePresence>
                {activeMotif && (
                    <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm"
                        onClick={() => setActiveMotif(null)}
                    >
                        <motion.div 
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }}
                            className="max-w-4xl w-full bg-[#0F0F0F] border border-white/10 p-8 relative"
                            onClick={e => e.stopPropagation()}
                        >
                            <button onClick={() => setActiveMotif(null)} className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors">
                                <i className="pi pi-times"></i>
                            </button>

                            <div className="grid md:grid-cols-2 gap-12">
                                <div className="relative aspect-square border border-white/10 bg-black">
                                    <Image src={activeMotif.src} alt={activeMotif.title} fill className="object-cover" />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <span className="text-gold font-mono text-xs">{activeMotif.version}</span>
                                        <h3 className="text-4xl font-black uppercase tracking-tight" style={{ color: colors.gold }}>{activeMotif.title}</h3>
                                    </div>
                                    <p className="text-gray-400 leading-relaxed">{activeMotif.desc}</p>
                                    <div className="pt-6 space-y-2 border-t border-white/10">
                                        <div className="flex justify-between text-xs font-mono"><span className="text-gray-500">ORIGIN:</span><span>{activeMotif.origin}</span></div>
                                        <div className="flex justify-between text-xs font-mono"><span className="text-gray-500">ENCODING:</span><span>SVG/VECTOR/WEBGL</span></div>
                                    </div>
                                    <button className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors" style={{ backgroundColor: colors.gold }}>
                                        Request Asset Access
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* --- CTA SECTION --- */}
            <section className="py-24 text-center">
                <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">Contribuer à l&apos;Archive</h3>
                <Link href="/CONTACT" className="px-12 py-5 border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-[0.3em]">
                    Open Protocol <i className="pi pi-send ml-2"></i>
                </Link>
            </section>
        </div>
    );
}