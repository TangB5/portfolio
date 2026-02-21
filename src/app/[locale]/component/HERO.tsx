'use client'
import React from 'react';
import Image from 'next/image';
import { Link } from '@/i18n/navigation'; 
import { useTranslations } from 'next-intl';

const colors = {
  gold: '#E9B826',
  red: '#BB141A',
  green: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC'
};

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <section className="relative min-h-screen w-full flex flex-col justify-center items-center overflow-hidden px-6"
             style={{ backgroundColor: colors.dark, color: colors.light }}>
      
      {/* --- 1. BACKGROUND ARCHITECTURE --- */}
      <div className="absolute inset-0 z-0 opacity-10"
           style={{ maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)' }}>
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke={colors.light} strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      {/* Lueurs d'ambiance */}
      <div className="absolute top-[-10%] left-[-5%] w-96 h-96 rounded-full blur-[120px] opacity-20 animate-pulse" 
           style={{ backgroundColor: colors.gold }} />
      <div className="absolute bottom-[-10%] right-[-5%] w-[30rem] h-[30rem] rounded-full blur-[120px] opacity-15 animate-float" 
           style={{ backgroundColor: colors.red }} />

      {/* --- 2. MAIN LAYOUT --- */}
      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* COLONNE GAUCHE */}
        <div className="text-left space-y-8">
          
          {/* Badge de disponibilité */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: colors.green }}></span>
              <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: colors.green }}></span>
            </span>
            <span className="text-xs font-mono tracking-widest uppercase opacity-80">
              {t('badge')}
            </span>
          </div>

          {/* Titre Principal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] animate-fade-in-up">
            {t('title_top')} <br />
            <span style={{ 
              backgroundImage: `linear-gradient(to right, ${colors.gold}, ${colors.light})`,
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              {t('title_highlight')}
            </span>
          </h1>

          {/* Description avec formatage riche */}
          <p className="text-lg text-gray-400 max-w-lg leading-relaxed border-l-2 pl-6 animate-fade-in-up delay-100"
             style={{ borderColor: colors.red }}>
            {t.rich('description', {
              culture: (chunks) => <span className="text-white font-medium">{chunks}</span>,
              tech: (chunks) => <span className="text-white font-medium">{chunks}</span>
            })}
          </p>

          {/* Boutons d'action */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
            <Link href="#projets" 
               className="px-8 py-4 font-bold rounded-sm transition-all hover:-translate-y-1 active:scale-95 duration-200 flex items-center gap-2"
               style={{ backgroundColor: colors.gold, color: colors.dark }}>
              {t('cta_projects')} <i className="pi pi-arrow-right"></i>
            </Link>
            
            <Link href="#contact" 
               className="px-8 py-4 font-bold rounded-sm border hover:bg-white/5 transition-all hover:-translate-y-1 active:scale-95 duration-200"
               style={{ borderColor: 'rgba(255,255,255,0.2)', color: colors.light }}>
              {t('cta_contact')}
            </Link>
          </div>
        </div>

        {/* COLONNE DROITE */}
        <div className="relative flex justify-center items-center lg:justify-end animate-fade-in delay-300">
          <div className="relative w-80 h-96 md:w-[28rem] md:h-[34rem]">
            <div className="absolute top-[-20px] right-[-20px] w-24 h-24 border-t-4 border-r-4"
                 style={{ borderColor: colors.gold }} />
            <div className="absolute bottom-[-20px] left-[-20px] w-24 h-24 border-b-4 border-l-4"
                 style={{ borderColor: colors.red }} />
            
            <div className="relative w-full h-full bg-gray-900 overflow-hidden shadow-2xl group">
              <Image 
                src="/mascote.png"  
                alt={t('alt_portrait')}
                fill
                className="object-cover transition-all duration-700 ease-in-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>
      </div>

      {/* --- SCROLL INDICATOR --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in delay-300">
        <span className="text-[10px] font-mono uppercase tracking-[0.2em] opacity-50">{t('scroll')}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent opacity-30" />
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -20px); }
        }
        .animate-fade-in-up { animation: fade-in-up 1s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-float { animation: float 10s ease-in-out infinite; }
        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 400ms; }
      `}</style>
    </section>
  );
};

export default Hero;