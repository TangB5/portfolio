"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function LogoIntro() {
  const [show, setShow] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  // État pour les particules
  const [particlePositions, setParticlePositions] = useState<{ top: number; left: number }[]>([]);
  const fullText = "KINGTANG";

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Génération des positions des particules au montage
  useEffect(() => {
    const positions = Array.from({ length: 50 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setParticlePositions(positions);
  }, []);

  // Séquence d'animation
  useEffect(() => {
    if (!show) return;

    const sequence = [
      () => setAnimationStep(1), // Grille & Particules
      () => setAnimationStep(2), // Logo apparaît
      () => setAnimationStep(3), // Anneaux & Énergie
      () => {
        setAnimationStep(4); // Texte
        let i = 0;
        const typeWriter = () => {
          if (i < fullText.length) {
            setDisplayText(fullText.slice(0, i + 1));
            i++;
            timeoutRef.current = setTimeout(typeWriter, 100);
          } else {
            setShowCursor(false);
            timeoutRef.current = setTimeout(() => {
              setAnimationStep(5); // Glitch final
              timeoutRef.current = setTimeout(() => {
                setAnimationStep(6); // Sortie
                timeoutRef.current = setTimeout(() => setShow(false), 800);
              }, 600);
            }, 500);
          }
        };
        typeWriter();
      }
    ];

    timeoutRef.current = setTimeout(sequence[0], 200);
    timeoutRef.current = setTimeout(sequence[1], 800);
    timeoutRef.current = setTimeout(sequence[2], 1400);
    timeoutRef.current = setTimeout(sequence[3], 2000);

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [show]);

  // Bloquer le scroll pendant l'intro
  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "unset";
    return () => { document.body.style.overflow = "unset"; };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            scale: 1.1,
            filter: "blur(20px)",
            transition: { duration: 0.8, ease: "easeInOut" } 
          }}
        >
          {/* --- BACKGROUND LAYERS --- */}

          {/* 1. 3D Grid Floor */}
          <motion.div className="absolute inset-0" style={{ perspective: '1000px' }} initial={{ opacity: 0 }} animate={animationStep >= 1 ? { opacity: 1 } : {}}>
             <motion.div className="absolute inset-0 origin-bottom" style={{ background: `linear-gradient(90deg, #D4AF3722 1px, transparent 1px), linear-gradient(0deg, #D4AF3722 1px, transparent 1px)`, backgroundSize: '80px 80px', transform: 'rotateX(70deg) translateZ(-500px)', transformStyle: 'preserve-3d' }} animate={animationStep >= 1 ? { backgroundPositionY: ['0px', '80px'] } : {}} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }} />
          </motion.div>

          {/* 2. Floating Particles (DE RETOUR !) */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  top: `${pos.top}%`,
                  left: `${pos.left}%`,
                  width: Math.random() > 0.5 ? '2px' : '3px',
                  height: Math.random() > 0.5 ? '2px' : '3px',
                  background: '#D4AF37',
                  boxShadow: '0 0 10px #D4AF37',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={animationStep >= 1 ? {
                  opacity: [0, 0.8, 0],
                  scale: [0, 1.5, 0],
                  y: [0, -100, -200], // Mouvement ascendant
                } : {}}
                transition={{
                  duration: 3 + Math.random() * 3,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeOut"
                }}
              />
            ))}
          </div>

          {/* --- CENTRAL STRUCTURE --- */}
          <div className="relative flex items-center justify-center scale-75 md:scale-100 z-10">
            
            {/* Pulsing Aura */}
            <motion.div
              className="absolute w-64 h-64 rounded-full"
              style={{ background: 'radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, transparent 70%)' }}
              animate={animationStep >= 2 ? { scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] } : { opacity: 0 }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            {/* Rotating Rings */}
            {[...Array(3)].map((_, index) => (
              <motion.div
                key={`ring-${index}`}
                className="absolute border"
                style={{
                  width: `${280 + index * 80}px`, height: `${280 + index * 80}px`,
                  borderColor: '#D4AF37', borderWidth: '1px', opacity: 0.2 - index * 0.05,
                  rotate: 45, // Aligné sur le losange
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={animationStep >= 3 ? { scale: 1, rotate: index % 2 === 0 ? 405 : -315, opacity: 0.2 - index * 0.05 } : {}}
                transition={{ scale: { duration: 1, delay: index * 0.1, type: "spring" }, rotate: { duration: 15 + index * 5, repeat: Infinity, ease: "linear" } }}
              />
            ))}

            {/* THE NEW LOGO CONTAINER */}
            <motion.div
              className="relative z-20"
              initial={{ scale: 0.5, opacity: 0, filter: "brightness(0) drop-shadow(0 0 0px #D4AF37)" }}
              animate={animationStep >= 2 ? { scale: 1, opacity: 1, filter: "brightness(1) drop-shadow(0 0 25px rgba(212, 175, 55, 0.5))" } : {}}
              transition={{ duration: 1.2, type: "spring", stiffness: 80 }}
            >
              <Image
                src="/logojaune.png" // Ton nouveau logo
                alt="KingTang Totem"
                width={220}
                height={220}
                className="object-contain relative z-10"
                priority
              />
              
              {/* Vertical Scan Light Effect */}
              <motion.div
                className="absolute inset-0 w-full overflow-hidden pointer-events-none z-20"
                animate={animationStep >= 2 ? { opacity: [0, 1, 0] } : { opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <motion.div 
                  className="w-full h-[2px] bg-[#D4AF37]/80 shadow-[0_0_20px_#D4AF37]"
                  animate={{ y: [-20, 240] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </motion.div>
            </motion.div>
          </div>

          {/* --- TEXT & FOOTER --- */}
          <motion.div className="mt-24 text-center relative z-10" initial={{ opacity: 0 }} animate={animationStep >= 4 ? { opacity: 1 } : {}}>
            <span className="relative text-4xl md:text-6xl font-black tracking-[0.3em] inline-block uppercase"
              style={{ background: 'linear-gradient(to bottom, #ffffff, #D4AF37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textShadow: '0 0 30px rgba(212, 175, 55, 0.3)' }}>
              {displayText}
              {showCursor && <motion.span className="ml-2 inline-block h-8 md:h-12 w-1 bg-[#D4AF37]" animate={{ opacity: [0, 1] }} transition={{ duration: 0.5, repeat: Infinity }} />}
            </span>
            <motion.div className="h-[1px] mt-4 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" initial={{ scaleX: 0 }} animate={animationStep >= 4 ? { scaleX: 1 } : {}} transition={{ duration: 1 }} />
          </motion.div>

          <motion.div className="absolute bottom-12 font-mono text-[10px] tracking-[0.3em] text-[#D4AF37]/60 z-10" initial={{ opacity: 0 }} animate={animationStep >= 4 ? { opacity: 1 } : {}}>
             {'>'} SYSTEM_ACCESS: GRANTED // PROTOCOL_KINGTANG_V2.6
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}