
"use client";

// 1. UTILISE LES IMPORTS DE TON FICHIER NAVIGATION
import { Link, usePathname, useRouter } from "@/i18n/navigation"; 
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl"; // Ajouté
import "primeicons/primeicons.css";

const COLORS = {
  primary: '#E9B826', 
  secondary: '#BB141A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
};

// On garde les IDs, les labels seront traduits via useTranslations
const NAV_ITEMS = [
  { id: '01', key: 'about', path: '/ABOUT' },
  { id: '02', key: 'projects', path: '/PROJECT' },
  { id: '03', key: 'culture', path: '/CULTURE' },
  { id: '04', key: 'solution', path: '/SOLUTION' },
  { id: '05', key: 'contact', path: '/CONTACT' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const locale = useLocale(); // Récupère 'fr' ou 'en'
  const t = useTranslations('Nav'); // Assure-toi d'avoir une clé "Nav" dans tes JSON

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Petit composant Switcher réutilisable
  const LanguageSwitcher = () => (
    <div className="flex items-center gap-2 font-mono text-[9px] border border-white/10 px-2 py-1 bg-white/5">
      <Link 
        href={pathname} 
        locale="fr" 
        className={`transition-colors ${locale === 'fr' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
      >
        FR
      </Link>
      <span className="text-gray-700">|</span>
      <Link 
        href={pathname} 
        locale="en" 
        className={`transition-colors ${locale === 'en' ? 'text-primary' : 'text-gray-500 hover:text-white'}`}
      >
        EN
      </Link>
    </div>
  );

  return (
    <>
      <motion.header
        className="fixed w-full z-[100] transition-all duration-500"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        style={{
          paddingTop: isScrolled ? '12px' : '20px',
          paddingBottom: isScrolled ? '12px' : '20px',
          backgroundColor: isScrolled ? 'rgba(10, 10, 10, 0.9)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(16px)' : 'none',
          borderBottom: isScrolled ? `1px solid ${COLORS.border}` : '1px solid transparent'
        }}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* LOGO */}
          <Link href="/" className="relative group flex items-center gap-4">
            <div className="relative flex items-center justify-center">
               {/* Glow effect behind logo */}
               <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/logojaune.png"
                alt="KingTang Seal"
                width={45}
                height={45}
                className="z-10 transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(233,184,38,0.5)]"
                priority
              />
              
              {/* Scanline Effect overlay on logo */}
              <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none opacity-40">
                <motion.div 
                  className="w-full h-[1px] bg-white shadow-[0_0_8px_#E9B826]"
                  animate={{ y: [-10, 50] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                />
              </div>
            </div>
            <div className="hidden sm:block">
              <span className="block text-[10px] font-mono tracking-[0.4em] text-gray-500 leading-none mb-1 uppercase">Identification</span>
               <span className="block text-[11px] font-black tracking-[0.2em] text-primary leading-none" style={{ color: COLORS.primary }}>KING</span>
             </div>

            </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-2">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname.toUpperCase() === item.path;
              return (
                <Link key={item.id} href={item.path} className="relative px-5 py-2 group">
                  <div className="flex flex-col items-center">
                    <span className="text-[7px] font-mono text-gray-600 mb-1 opacity-40">{item.id}</span>
                    <span 
                      className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-70 group-hover:opacity-100'}`}
                      style={{ color: isActive ? COLORS.primary : COLORS.light }}
                    >
                      {t(item.key)} {/* TRADUCTION ICI */}
                    </span>
                  </div>
                  {isActive && (
                    <motion.div layoutId="activeGlow" className="absolute bottom-0 left-5 right-5 h-[1px]" style={{ backgroundColor: COLORS.primary }} />
                  )}
                </Link>
              );
            })}

            {/* SYSTEM STATUS + LANGUAGE SWITCHER */}
            <div className="ml-8 pl-8 border-l border-white/5 flex items-center gap-4">
                <LanguageSwitcher />
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-sm border border-primary/10 bg-primary/5">
                  <div className="relative flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping absolute opacity-75" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[8px] font-mono text-primary uppercase tracking-[0.2em]">Core_Online</span>
                </div>
            </div>
          </nav>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 border border-white/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-white" />
            <motion.div animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} className="w-3 h-[1.5px] bg-primary ml-2.5" style={{ backgroundColor: COLORS.primary }} />
            <motion.div animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }} className="w-5 h-[1.5px] bg-white" />
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            className="fixed inset-0 z-[90] bg-[#050505] md:hidden flex flex-col"
          >
            <div className="flex-grow flex flex-col justify-center px-10 space-y-8 relative z-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.div key={item.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }}>
                  <Link href={item.path} className="group flex flex-col" onClick={() => setIsMobileMenuOpen(false)}>
                    <span className="font-mono text-primary text-[10px] tracking-[0.5em] mb-2" style={{ color: COLORS.primary }}> MODULE_{item.id}</span>
                    <span className="text-5xl font-black tracking-tighter uppercase group-hover:text-primary">
                      {t(item.key)}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 border-t border-white/5 flex justify-between items-end relative z-10">
              <div className="flex flex-col gap-4">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Language</span>
                <LanguageSwitcher /> {/* Switcher aussi sur mobile */}
              </div>
              <div className="flex gap-6">
                 <a href="#" className="hover:text-primary transition-colors"><i className="pi pi-linkedin text-lg" /></a>
                 <a href="#" className="hover:text-primary transition-colors"><i className="pi pi-github text-lg" /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}