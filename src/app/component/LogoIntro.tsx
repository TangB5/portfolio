"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
export default function LogoIntro() {
  const [show, setShow] = useState(true);
  const [animationStep, setAnimationStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [particlePositions, setParticlePositions] = useState<{ top: number; left: number }[]>([]);
  const fullText = "kingtang";

  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Générer les positions aléatoires côté client pour éviter la mismatch SSR
  useEffect(() => {
    const positions = Array.from({ length: 12 }, () => ({
      top: Math.random() * 100,
      left: Math.random() * 100,
    }));
    setParticlePositions(positions);
  }, []);

  // Séquence d'animation
  useEffect(() => {
    if (!show) return;

    const sequence = [
      () => setAnimationStep(1),
      () => setAnimationStep(2),
      () => {
        setAnimationStep(3);
        let i = 0;
        const typeWriter = () => {
          if (i < fullText.length) {
            setDisplayText(fullText.slice(0, i + 1));
            i++;
            timeoutRef.current = setTimeout(typeWriter, 150);
          } else {
            setShowCursor(false);
            timeoutRef.current = setTimeout(() => {
              setAnimationStep(4);
              timeoutRef.current = setTimeout(() => setShow(false), 1000);
            }, 1000);
          }
        };
        typeWriter();
      }
    ];

    timeoutRef.current = setTimeout(sequence[0], 0);
    timeoutRef.current = setTimeout(sequence[1], 1000);
    timeoutRef.current = setTimeout(sequence[2], 2000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [show]);

  // Empêcher le scroll pendant l'animation
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-[#0A0A0A] to-[#1a1a2e] z-50"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeOut" } }}
        >
          {/* Effet particules dorées */}
          <div className="absolute inset-0 overflow-hidden">
            {particlePositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-[#D4AF37] rounded-full opacity-40"
                style={{ top: `${pos.top}%`, left: `${pos.left}%` }}
                animate={{ y: [0, -20, 0], opacity: [0.2, 0.6, 0.2] }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          <div className="relative flex items-center justify-center">
            {/* Couronne */}
            <motion.div
              className="relative z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={
                animationStep >= 1
                  ? { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 15 } }
                  : {}
              }
            >
              <div className="p-5 bg-gradient-to-br from-[#D4AF37] to-[#f5d76e] rounded-full shadow-2xl shadow-yellow-500/30 overflow-hidden flex items-center justify-center">
  <Image
    src="/2.png"
    alt="KingTang Logo"
    width={42}
    height={42}
    className="object-contain"
  />
</div>

            </motion.div>

            {/* Losange */}
            <motion.div
              className="absolute"
              initial={{ x: -200, rotate: -45, opacity: 0 }}
              animate={
                animationStep >= 2
                  ? {
                      x: 0,
                      rotate: 0,
                      opacity: 1,
                      transition: { type: "spring", stiffness: 200, damping: 15, delay: 0.2 },
                    }
                  : {}
              }
            >
              <div className="w-32 h-32 border-2 border-[#D4AF37] rotate-45 bg-gradient-to-br from-[#0A0A0A]/80 to-[#1a1a2e]/80 shadow-lg shadow-[#D4AF37]/10" />
            </motion.div>
          </div>

          {/* Texte machine à écrire */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={
              animationStep >= 3
                ? { opacity: 1, transition: { duration: 0.5 } }
                : {}
            }
          >
            <span className="text-4xl font-bold text-[#D4AF37] tracking-wider">
              {displayText}
              {showCursor && (
                <motion.span
                  className="ml-1 inline-block h-10 w-1 bg-[#D4AF37]"
                  animate={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                />
              )}
            </span>
          </motion.div>

          {/* Overlay disparition */}
          {animationStep === 4 && (
            <motion.div
              className="absolute inset-0 bg-[#0A0A0A]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
