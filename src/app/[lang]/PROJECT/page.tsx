'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'primeicons/primeicons.css';

const colors = {
  gold: '#E9B826',
  red: '#BB141A',
  green: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  grey: '#1A1A1A'
};

type ProjectDividerProps = {
  label: string;
};
// --- COMPOSANTS UI CONSISTANTS ---

const ProjectDivider = ({ label }:ProjectDividerProps) => (
  <div className="flex items-center gap-4 py-12 opacity-30">
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
    <span className="text-[10px] font-mono uppercase tracking-[0.3em] whitespace-nowrap">{label}</span>
    <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
  </div>
);

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
        {
            id: 4,
            title: 'MarketPlace Africaine "AfroShop"',
            description: 'Plateforme e-commerce mettant en avant l\'artisanat local avec une interface moderne inspirée des textiles africains. Intègre un système de paiement adapté aux marchés africains.',
            image: '/afroshop-project.jpg',
            link: 'https://afroshop.vercel.app',
            github: 'https://github.com/kingtang/afroshop',
            tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Node.js'],
            category: 'web',
            featured: true,
            isCompleted: false ,
            version: 'v2.0',
        },
        {
            id: 2,
            title: 'Application "Culture Cameroun"',
            description: 'Application éducative immersive explorant les richesses culturelles du Cameroun. Contient des galeries visuelles, des documents historiques et des expériences interactives.',
            image: '/images',
            link: 'https://culture-cameroun.vercel.app',
            github: 'https://github.com/kingtang/culture-cameroun',
            tech: ['html', 'tailwindcss', 'Framer Motion','Nextjs'],
            category: 'mobile',
            featured: false,
            isCompleted: false ,
            version: 'v2.0',
        },
        {
            id: 3,
            title: 'Identité Visuelle "Ngano Fashion"',
            description: 'Direction artistique complète pour une marque de mode africaine contemporaine. Logo, palette de couleurs, packaging et site web avec design inspiré des motifs Adinkra.',
            image: '/ngano-fashion.jpg',
            link: 'https://behance.net/kingtang/ngano-fashion',
            github: '',
            tech: ['Adobe Suite', 'Branding', 'UI Design', 'Illustration'],
            category: 'design',
            featured: true,
            isCompleted: false // ✅ Projet terminé
        },
        {
            id: 1,
            title: 'Mini-site "Culture Africa"',
            description: 'Site interactif pour explorer et promouvoir la culture africaine à travers des animations et récits visuels. Intègre une carte interactive des traditions africaines.',
            image: '/images/mvp1.png',
            link: 'https://cultureafricaine.vercel.app',
            github: 'https://github.com/TangB5/mvp',
            tech: ['Next.js', 'Tailwind CSS', 'html/css'],
            category: 'web',
            featured: true,
            isCompleted: true // ✅ Projet terminé
        },
        {
            id: 5,
            title: 'Customizer de Visuels Africains',
            description: 'Outil web permettant de personnaliser des designs avec motifs africains authentiques. Export en haute résolution pour supports print et digitaux.',
            image: '/african-patterns.jpg',
            link: 'https://african-customizer.vercel.app',
            github: 'https://github.com/kingtang/african-customizer',
            tech: ['Next.js', 'Fabric.js', 'Canvas API'],
            category: 'web',
            isCompleted: false // ⏳ Projet en cours/à venir
        },
        {
            id: 6,
            title: 'Projet Académique "Angular Commerce"',
            description: 'Application e-commerce développée avec Angular dans un cadre académique, avec une attention particulière aux performances et à l\'expérience utilisateur.',
            image: '/angular-project.jpg',
            link: 'https://github.com/kingtang/angular-project',
            github: 'https://github.com/kingtang/angular-project',
            tech: ['Angular', 'TypeScript', 'RxJS'],
            category: 'web',
            isCompleted: false // ✅ Projet terminé
        },
    ];

  const categories = [
    { id: 'all', name: 'All Modules' },
    { id: 'web', name: 'Web-Systems' },
    { id: 'mobile', name: 'Mobile-App' },
    { id: 'design', name: 'Visual-ID' },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
      
      {/* --- SECTION 1: HEADER "CONTROL CENTER" --- */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block px-3 py-1 mb-6 border border-white/10 bg-white/5 rounded-full font-mono text-[10px] tracking-widest uppercase"
        >
           PROJECT REPOSITORY 2026
        </motion.div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-12">
          ENGINEERED <br/>
          <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${colors.gold}, #FFF)` }}>
            SOLUTIONS
          </span>
        </h1>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className="group relative px-6 py-2 font-mono text-xs uppercase tracking-widest transition-all"
              style={{ color: filter === cat.id ? colors.gold : '#666' }}
            >
              {filter === cat.id && (
                <motion.div layoutId="activeFilter" className="absolute inset-0 border border-white/20 bg-white/5" />
              )}
              <span className="relative z-10">{cat.name}</span>
            </button>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: FEATURED PROJECT (SPLIT DESIGN) --- */}
      <section className="px-6 max-w-7xl mx-auto">
        <ProjectDivider label="FEATURED_MODULES" />
        
        <div className="space-y-32">
          {projects.filter(p => p.featured).map((project, i) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}
            >
              {/* Image Box avec Frame Technique */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute -top-4 -left-4 w-12 h-12 border-t-2 border-l-2" style={{ borderColor: colors.gold }} />
                <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-2 border-r-2" style={{ borderColor: colors.red }} />
                
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-900 border border-white/10">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  {/* Status Overlay */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono">
                    STATUS: {project.isCompleted ? 'LIVE' : 'IN_DEV'}
                  </div>
                </div>
              </div>

              {/* Text Specs */}
              <div className="w-full lg:w-1/2 space-y-6">
                <div className="space-y-2">
                  <span className="font-mono text-xs" style={{ color: colors.gold }}>{project.version}</span>
                  <h3 className="text-4xl md:text-5xl font-bold tracking-tight uppercase">{project.title}</h3>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed border-l-2 pl-6" style={{ borderColor: colors.red }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6 pt-6">
                  {project.isCompleted ? (
                    <Link href={project.link} target="_blank" className="flex items-center gap-2 group text-white font-bold uppercase text-sm tracking-widest">
                      Launch System <i className="pi pi-external-link group-hover:translate-x-1 transition-transform" style={{ color: colors.gold }}></i>
                    </Link>
                  ) : (
                    <span className="flex items-center gap-2 text-gray-600 font-bold uppercase text-sm tracking-widest cursor-not-allowed">
                      System Locked <i className="pi pi-lock text-xs"></i>
                    </span>
                  )}
                  {project.github && (
                    <Link href={project.github} target="_blank" className="text-gray-500 hover:text-white transition-colors">
                      <i className="pi pi-github text-xl"></i>
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 3: PROJECT GRID --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <ProjectDivider label="ALL_ARCHIVES" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.filter(p => !p.featured).map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group p-6 border border-white/5 bg-white/[0.02] hover:bg-white/[0.05] transition-all relative overflow-hidden"
              >
                {/* Background Pattern subtile */}
                <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-[40px] font-black select-none pointer-events-none">
                  {project.id}
                </div>

                <div className="relative z-10 space-y-4">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] font-mono px-2 py-1 rounded" style={{ backgroundColor: `${colors.gold}20`, color: colors.gold }}>
                      {project.category.toUpperCase()}
                    </span>
                    {!project.isCompleted && <i className="pi pi-clock text-xs text-red-500 animate-pulse"></i>}
                  </div>

                  <h4 className="text-xl font-bold group-hover:text-[#E9B826] transition-colors uppercase">{project.title}</h4>
                  <p className="text-sm text-gray-500 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.slice(0, 3).map(t => (
                      <span key={t} className="text-[9px] font-mono text-gray-400">#{t}</span>
                    ))}
                  </div>

                  <div className="pt-4 flex justify-between items-center">
                    {project.isCompleted ? (
                      <Link href={project.link} className="text-[10px] font-bold uppercase tracking-widest flex items-center gap-2 text-white">
                        Access <i className="pi pi-arrow-right text-[8px]"></i>
                      </Link>
                    ) : (
                      <span className="text-[10px] font-bold uppercase tracking-widest text-gray-700">Restricted</span>
                    )}
                    {project.github && <Link href={project.github} className="text-gray-500 hover:text-white"><i className="pi pi-github"></i></Link>}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* --- SECTION 4: CTA --- */}
      <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02] text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-tighter uppercase">Besoin d&apos;un module sur mesure ?</h2>
        <Link 
          href="/contact" 
          className="inline-flex items-center gap-3 px-10 py-4 bg-white text-black font-black uppercase tracking-tighter hover:bg-gold transition-colors"
          style={{ backgroundColor: colors.gold }}
        >
          Initialize Brief <i className="pi pi-send"></i>
        </Link>
      </section>

    </div>
  );
}