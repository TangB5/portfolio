"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Image from "next/image";
import "primeicons/primeicons.css";

const COLORS = {
  primary: '#E9B826', // Or africain
  secondary: '#BB141A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
};

const NAV_ITEMS = [
  { id: '01', label: 'À PROPOS', path: '/ABOUT' },
  { id: '02', label: 'PROJETS', path: '/PROJECT' },
  { id: '03', label: 'CULTURE', path: '/CULTURE' },
  { id: '04', label: 'SOLUTION', path: '/SOLUTION' },
  { id: '05', label: 'CONTACT', path: '/CONTACT' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

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
          
          {/* LOGO: THE SYSTEM SEAL */}
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
              const isActive = pathname.toLowerCase() === item.path.toLowerCase();
              return (
                <Link key={item.id} href={item.path} className="relative px-5 py-2 group">
                  <div className="flex flex-col items-center">
                    <span className="text-[7px] font-mono text-gray-600 mb-1 opacity-40 group-hover:opacity-100 transition-opacity">
                       {item.id}
                    </span>
                    <span 
                      className={`text-[10px] font-bold tracking-[0.2em] uppercase transition-all duration-300 ${isActive ? 'scale-105' : 'opacity-70 group-hover:opacity-100'}`}
                      style={{ color: isActive ? COLORS.primary : COLORS.light }}
                    >
                      {item.label}
                    </span>
                  </div>
                  
                  {/* Underline Indicator */}
                  {isActive && (
                    <motion.div 
                      layoutId="activeGlow"
                      className="absolute bottom-0 left-5 right-5 h-[1px] bg-primary shadow-[0_0_10px_#E9B826]"
                      style={{ backgroundColor: COLORS.primary }}
                    />
                  )}
                </Link>
              );
            })}

            {/* LIVE SYSTEM STATUS */}
            <div className="ml-8 pl-8 border-l border-white/5 h-8 flex items-center">
                <div className="flex items-center gap-3 px-3 py-1.5 rounded-sm border border-primary/10 bg-primary/5">
                  <div className="relative flex">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping absolute opacity-75" />
                    <span className="relative w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                  <span className="text-[8px] font-mono text-primary uppercase tracking-[0.2em]" style={{ color: COLORS.primary }}>Core_Online</span>
                </div>
            </div>
          </nav>

          {/* MOBILE TOGGLE (Custom Rectangular Style) */}
          <button 
            className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1 border border-white/10 bg-white/[0.02] hover:border-primary/40 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white" 
            />
            <motion.div 
              animate={isMobileMenuOpen ? { opacity: 0, x: 10 } : { opacity: 1, x: 0 }}
              className="w-3 h-[1.5px] bg-primary self-start ml-2.5" 
              style={{ backgroundColor: COLORS.primary }}
            />
            <motion.div 
              animate={isMobileMenuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
              className="w-5 h-[1.5px] bg-white" 
            />
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
            transition={{ type: "spring", damping: 30, stiffness: 200 }}
            className="fixed inset-0 z-[90] bg-[#050505] md:hidden flex flex-col"
          >
            {/* Background Decor for Mobile Menu */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('/path-to-your-pattern.png')] bg-repeat" />

            <div className="flex-grow flex flex-col justify-center px-10 space-y-10 relative z-10">
              {NAV_ITEMS.map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link 
                    href={item.path}
                    className="group flex flex-col"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <span className="font-mono text-primary text-[10px] tracking-[0.5em] mb-2" style={{ color: COLORS.primary }}> MODULE_{item.id}</span>
                    <span className="text-5xl font-black tracking-tighter uppercase group-hover:translate-x-4 transition-transform duration-500 group-hover:text-primary">
                      {item.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="p-10 border-t border-white/5 flex justify-between items-center relative z-10">
              <div className="flex flex-col">
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest">Protocol</span>
                <span className="text-[10px] font-bold text-primary" style={{ color: COLORS.primary }}>AFRO_TECH_INITIATIVE</span>
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