"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence,easeInOut, easeOut , Spring  } from "framer-motion";

// Définir les constantes pour les couleurs et les animations
const COLORS = {
  primary: '#E9B826', // Or africain
  secondary: '#BB141A', // Rouge terre
  tertiary: '#2D5D2A', // Vert forêt
  dark: '#0A0A0A',   // Noir profond
  light: '#F5F5DC'   // Beige naturel
};

const TRANSITIONS = {
  fast: { type: "spring" as const, stiffness: 400, damping: 30 }, // ✅ 'as const' corrige le type
  slow: { duration: 0.6, ease: easeOut },
  menu: { duration: 0.3, ease: easeInOut },
};

const NAV_ITEMS = [
  { id: 'about', label: 'À PROPOS', path: '/ABOUT', icon: 'pi-user' },
  { id: 'projects', label: 'PROJETS', path: '/PROJECT', icon: 'pi-briefcase' },
  { id: 'culture', label: 'CULTURE', path: '/CULTURE', icon: 'pi-palette' },
  { id: 'contact', label: 'CONTACT', path: '/CONTACT', icon: 'pi-envelope' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('');

  // S'assurer que le menu se ferme lors du redimensionnement
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMobileMenuOpen]); // Dépendance ajoutée pour une meilleure gestion

  // Détection du défilement
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Variantes pour les animations
const menuVariants = {
  closed: {
    opacity: 0,
    y: -20,
    transition: TRANSITIONS.menu,
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      ...TRANSITIONS.menu,
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};


  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  const menuToggleHandler = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <>
      <motion.header
        className={`flex justify-between items-center p-4 fixed w-full z-50 transition-all duration-300 ${isScrolled ? "py-3 backdrop-blur-md" : "py-4"}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={TRANSITIONS.slow}
        style={{
          backgroundColor: isScrolled ? `${COLORS.dark}e6` : `${COLORS.dark}cc`,
          borderBottom: isScrolled ? `1px solid ${COLORS.primary}20` : "none",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark focus-visible:ring-primary rounded"
          onMouseEnter={() => setActiveItem("home")}
          onMouseLeave={() => setActiveItem("")}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <motion.i
            className="pi pi-crown mr-2 text-3xl"
            style={{ color: COLORS.primary }}
            whileHover={{ rotate: 15, scale: 1.1 }}
            transition={TRANSITIONS.fast}
          />
          <motion.span
            style={{ color: COLORS.primary }}
            whileHover={{ color: COLORS.light }}
            transition={{ duration: 0.2 }}
          >
            KingTang
          </motion.span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex space-x-8 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.path}
              className="relative group font-medium tracking-wider text-sm uppercase focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark focus-visible:ring-primary rounded"
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem("")}
              style={{
                color: activeItem === item.id ? COLORS.primary : COLORS.light,
                transition: "color 0.3s ease",
              }}
            >
              {item.label}
              <AnimatePresence>
                {activeItem === item.id && (
                  <motion.span
                    className="absolute -bottom-1 left-0 w-full h-0.5"
                    style={{ backgroundColor: COLORS.primary }}
                    layoutId="navIndicator"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    exit={{ scaleX: 0 }}
                    transition={TRANSITIONS.fast}
                  />
                )}
              </AnimatePresence>
            </Link>
          ))}

          {/* Indicateur culturel */}
          <motion.div
            className="flex items-center ml-4 px-3 py-1 rounded-full text-xs"
            style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}
            whileHover={{ scale: 1.05 }}
            transition={TRANSITIONS.fast}
          >
            <i className="pi pi-star mr-1"></i>
            <span>Culture Innovation</span>
          </motion.div>
        </nav>

        {/* Bouton Menu Mobile */}
        <motion.button
          className="md:hidden p-2 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark focus-visible:ring-primary"
          style={{ color: COLORS.light }}
          whileTap={{ scale: 0.9 }}
          onClick={menuToggleHandler}
          aria-label="Menu mobile"
        >
          <AnimatePresence mode="wait">
            {isMobileMenuOpen ? (
              <motion.i
                key="close"
                className="pi pi-times text-xl"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            ) : (
              <motion.i
                key="menu"
                className="pi pi-bars text-xl"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              />
            )}
          </AnimatePresence>
        </motion.button>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/70 z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={menuToggleHandler}
            />
            <motion.nav
              className="fixed top-20 right-4 w-64 z-50 rounded-xl shadow-2xl md:hidden"
              style={{
                backgroundColor: `${COLORS.dark}e6`,
                backdropFilter: "blur(10px)",
              }}
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <div className="p-4 border-b" style={{ borderColor: `${COLORS.primary}30` }}>
                <div
                  className="flex items-center px-3 py-2 rounded-lg"
                  style={{ backgroundColor: `${COLORS.primary}10` }}
                >
                  <i className="pi pi-user mr-3" style={{ color: COLORS.primary }}></i>
                  <span style={{ color: COLORS.primary }}>Navigation</span>
                </div>
              </div>
              <div className="p-4">
                {NAV_ITEMS.map((item) => (
                  <motion.div key={item.id} variants={itemVariants} className="mb-2 last:mb-0">
                    <Link
                      href={item.path}
                      className="flex items-center p-3 rounded-lg transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark focus-visible:ring-primary rounded"
                      style={{
                        backgroundColor: activeItem === item.id ? `${COLORS.primary}20` : "transparent",
                        color: activeItem === item.id ? COLORS.primary : COLORS.light,
                      }}
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setActiveItem(item.id);
                      }}
                      onMouseEnter={() => setActiveItem(item.id)}
                      onMouseLeave={() => setActiveItem("")}
                    >
                      <i className={`${item.icon} mr-3`}></i>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                {/* Indicateur culturel mobile */}
                <motion.div
                  variants={itemVariants}
                  className="flex items-center justify-center mt-6 p-3 rounded-lg text-xs"
                  style={{ backgroundColor: `${COLORS.primary}20`, color: COLORS.primary }}
                >
                  <i className="pi pi-star mr-2"></i>
                  <span>Innovation Culturelle</span>
                </motion.div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}