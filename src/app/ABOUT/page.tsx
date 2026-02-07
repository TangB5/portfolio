'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import 'primeicons/primeicons.css';

// Palette de couleurs
const colors = {
  gold: '#E9B826',
  red: '#BB141A',
  green: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  grey: '#1a1a1a',
  tertiary: '#6B7280', 
};
type SkillBarProps = {
  skill: string;
  level: number;
  color: string;
};

// --- COMPOSANTS UI RÉUTILISABLES ---

//  Un séparateur stylisé "Tech"
const Divider = ({ color = colors.gold }) => (
  <div className="flex items-center gap-4 py-8 opacity-50">
    <div className="h-[1px] w-12" style={{ backgroundColor: color }} />
    <div className="text-[10px] font-mono uppercase tracking-widest text-gray-500">SECTION BREAK</div>
    <div className="h-[1px] flex-1" style={{ backgroundColor: color }} />
  </div>
);

// Carte de compétence style "System Monitor"
const SkillBar = ({ skill, level, color }: SkillBarProps) => (
  <div className="mb-6 group">
    <div className="flex justify-between mb-2 font-mono text-xs uppercase tracking-wider">
      <span className="text-gray-300 group-hover:text-white transition-colors">{skill}</span>
      <span style={{ color: color }}>{level}% EFFICIENCY</span>
    </div>
    <div className="h-1 w-full bg-white/5 overflow-hidden">
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-full relative"
        style={{ backgroundColor: color }}
      >
        <div className="absolute right-0 top-0 bottom-0 w-[2px] bg-white shadow-[0_0_10px_white]" />
      </motion.div>
    </div>
  </div>
);

export default function About() {
  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.dark, color: colors.light }}>
      
      {/* --- BACKGROUND GRILLE --- */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" 
           style={{ backgroundImage: `linear-gradient(${colors.light} 1px, transparent 1px), linear-gradient(90deg, ${colors.light} 1px, transparent 1px)`, backgroundSize: '40px 40px' }}>
      </div>

      {/* --- HEADER : PROFIL ID --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Colonne Photo (Style Carte d'Identité) */}
          <div className="lg:col-span-4 relative">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              className="relative p-2 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="relative aspect-square overflow-hidden  transition-all duration-500">
                <Image src="/profil.png" alt="KingTang" fill className="object-cover" />
                {/* Overlay Scan Line */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent animate-scan" />
              </div>
              
              <div className="mt-4 space-y-2 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-500">ID</span>
                  <span>KT-2026-DEV</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-gray-500">CLASS</span>
                  <span style={{ color: colors.gold }}>ARCHITECT</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">ORIGIN</span>
                  <span>CAMEROON, AFRICA</span>
                </div>
              </div>

              {/* Coins décoratifs */}
              <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: colors.gold }} />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: colors.red }} />
            </motion.div>
          </div>

          {/* Colonne Biographie */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-6xl md:text-7xl font-black tracking-tighter mb-8 opacity-90">
                WHO IS <br/>
                <span className="text-transparent bg-clip-text" 
                      style={{ backgroundImage: `linear-gradient(to right, ${colors.gold}, white)` }}>
                NDOH YANNICK TANG?
                </span>
              </h1>

              <div className="prose prose-invert max-w-none">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300 border-l-4 pl-6 mb-8" 
                   style={{ borderColor: colors.gold }}>
                  &quot;Je ne code pas juste des sites web. Je construis des <span className="text-white font-bold">ponts digitaux</span> entre la tradition ancestrale et l&apos;innovation future.&quot;
                </p>
                
                <div className="grid md:grid-cols-2 gap-8 text-sm md:text-base text-gray-400 leading-relaxed">
                  <p>
                    Titulaire d&apos;une licence en informatique (Systèmes & Réseaux), j&apos;ai rapidement pivoté vers ma véritable passion : la création. Mon background technique rigoureux me permet de comprendre la machine, mais c&apos;est mon âme d&apos;artiste qui guide mes doigts.
                  </p>
                  <p>
                    Ma mission est claire : contrer l&apos;uniformité du web occidental en injectant l&apos;ADN visuel africain (motifs Adinkra, palettes chaudes, storytelling) dans des architectures React & Next.js ultra-performantes.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <Divider color={colors.red} />
      </div>

      {/* --- SECTION 2 : TIMELINE "VERSION LOG" --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Titre Latéral */}
          <div className="lg:col-span-4">
            <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
              <i className="pi pi-history" style={{ color: colors.gold }}></i>
              <span className="tracking-tight">EVOLUTION LOG</span>
            </h2>
            <p className="text-sm text-gray-500 font-mono">
              CHRONOLOGIE DES MISES À JOUR DE COMPÉTENCES
            </p>
          </div>

          {/* Timeline Style "Git Commit" */}
          <div className="lg:col-span-8 relative border-l border-white/10 ml-4 lg:ml-0 space-y-12">
            {[
              { year: "2025", title: "FULLSTACK EXPANSION", subtitle: "Backend Integration", desc: "Architecture de bases de données avec MongoDB et création d'API REST ExpressJS. Le chaînon manquant.", color: colors.green },
              { year: "2024", title: "CULTURAL UI/UX", subtitle: "Design System", desc: "Définition de ma signature graphique : fusionner le minimalisme moderne avec la complexité des motifs africains.", color: colors.gold },
              { year: "2023", title: "FRONTEND SPECIALIST", subtitle: "Framework Mastery", desc: "Deep dive dans l'écosystème React, Next.js et TailwindCSS. Transition du code spaghetti vers l'architecture modulaire.", color: colors.red },
              { year: "2022", title: "SYSTEM INIT", subtitle: "The Beginning", desc: "Première ligne de code. HTML, CSS, PHP. Comprendre comment le web respire.", color: colors.grey },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Point sur la ligne */}
                <div className="absolute -left-[5px] top-2 w-[9px] h-[9px] rounded-full ring-4 ring-[#0A0A0A]" 
                     style={{ backgroundColor: item.color }} />
                
                {/* Badge Année */}
                <span className="inline-block px-2 py-1 mb-2 text-[10px] font-bold rounded text-black" 
                      style={{ backgroundColor: item.color === colors.grey ? '#444' : item.color, color: item.color === colors.grey ? 'white' : 'black' }}>
                  v.{item.year}
                </span>

                <h3 className="text-2xl font-bold text-white">{item.title}</h3>
                <h4 className="text-sm font-mono text-gray-500 mb-2">{item.subtitle}</h4>
                <p className="text-gray-400 max-w-xl">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <Divider color={colors.tertiary} />
      </div>

      {/* --- SECTION 3 : COMPÉTENCES & VALEURS --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Colonne Compétences Techniques */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="pi pi-server" style={{ color: colors.red }}></i>
              SYSTEM DIAGNOSTICS
            </h3>
            
            <div className="bg-white/5 p-8 rounded-lg border border-white/5 backdrop-blur-sm">
              <SkillBar skill="FRONTEND ARCHITECTURE (Next.js/React)" level={90} color={colors.gold} />
              <SkillBar skill="STYLING ENGINE (Tailwind/CSS)" level={95} color={colors.red} />
              <SkillBar skill="CREATIVE LOGIC (JS/TS)" level={75} color={colors.green} />
              <SkillBar skill="VISUAL DESIGN (Ps/Canva/Figma)" level={85} color={colors.gold} />
              <SkillBar skill="BACKEND OPS (Node/Mongo)" level={40} color={colors.grey} />
            </div>
          </div>

          {/* Colonne Valeurs (Cartes) */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <i className="pi pi-compass" style={{ color: colors.green }}></i>
              CORE PROTOCOLS
            </h3>

            <div className="grid gap-4">
              {[
                { icon: 'pi-flag-fill', title: 'Heritage First', desc: 'Le code est universel, mais l\'identité est locale. Je code avec fierté.', color: colors.gold },
                { icon: 'pi-bolt', title: 'High Performance', desc: 'Un site beau qui est lent est inutile. J\'optimise chaque pixel et chaque fonction.', color: colors.red },
                { icon: 'pi-lock', title: 'Clean Architecture', desc: 'Code maintenable, scalable et sécurisé. Pas de bricolage.', color: colors.green }
              ].map((val, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.05)' }}
                  className="p-6 rounded border border-white/5 bg-black flex items-start gap-4 transition-all"
                >
                  <div className="mt-1 p-2 rounded bg-white/5" style={{ color: val.color }}>
                    <i className={`pi ${val.icon} text-xl`}></i>
                  </div>
                  <div>
                    <h4 className="font-bold text-white mb-1 uppercase tracking-wider">{val.title}</h4>
                    <p className="text-sm text-gray-400">{val.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- CTA FINAL --- */}
      <section className="py-24 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-t from-[#E9B826]/10 to-transparent pointer-events-none" />
        
        <h2 className="text-4xl md:text-5xl font-black mb-6">READY TO COLLABORATE?</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Initialiser le protocole de communication pour démarrer un projet unique.
        </p>
        
        <Link href="/contact" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold tracking-widest uppercase hover:bg-gray-200 transition-colors">
          <span>Start Project</span>
          <i className="pi pi-arrow-right group-hover:translate-x-1 transition-transform"></i>
        </Link>
      </section>

      <style jsx global>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        .animate-scan {
          animation: scan 3s linear infinite;
        }
      `}</style>
    </div>
  );
}