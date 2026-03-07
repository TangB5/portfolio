'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from '@/i18n/navigation';
import { useState } from 'react';
import 'primeicons/primeicons.css';

const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, type: 'easeOut' },
  },
};

export default function NotFound() {
  const t = useTranslations('NotFound');
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleGoHome = () => {
    setIsLoading(true);
    setTimeout(() => router.push('/'), 800);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: colors.dark }}>
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-20"
          style={{
            background: `radial-gradient(circle, ${colors.primary} 0%, transparent 70%)`,
            left: '-20%',
            top: '-20%',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 100, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-15"
          style={{
            background: `radial-gradient(circle, ${colors.secondary} 0%, transparent 70%)`,
            right: '-10%',
            bottom: '-10%',
          }}
          animate={{
            x: [0, -50, 0],
            y: [0, -100, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Floating 404 Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: [0.03, 0.08, 0.03], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div className="text-[18rem] font-black select-none tracking-tighter" style={{ color: colors.primary, opacity: 0.08 }}>
          404
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-5xl mx-auto px-6 relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-12">
          {/* Header Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="flex items-center justify-center gap-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <div className="h-px flex-1 max-w-20" style={{ background: `linear-gradient(to right, transparent, ${colors.primary})` }} />
              <div className="flex items-center gap-2">
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs font-mono tracking-widest text-gray-400 uppercase">{t('error_code')}</span>
                <motion.div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: colors.secondary }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                />
              </div>
              <div className="h-px flex-1 max-w-20" style={{ background: `linear-gradient(to left, transparent, ${colors.secondary})` }} />
            </motion.div>

            <motion.h1
              className="text-8xl md:text-9xl font-black tracking-tighter leading-none"
              style={{ color: colors.primary }}
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              {t('title')}
            </motion.h1>

            <motion.h2 className="text-3xl md:text-5xl font-bold tracking-wider">
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})` }}>
                {t('subtitle')}
              </span>
            </motion.h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              {t('description')}
            </p>
          </motion.div>

          {/* Animated Card */}
          <motion.div
            variants={itemVariants}
            className="backdrop-blur-md border rounded-lg p-8 hover:shadow-2xl transition-all"
            style={{
              borderColor: `${colors.primary}40`,
              backgroundColor: 'rgba(10, 10, 10, 0.8)',
            }}
            whileHover={{ borderColor: colors.primary, scale: 1.02 }}
          >
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <motion.div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: colors.primary }}
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-sm font-mono text-gray-400 uppercase tracking-widest">{t('suggestions')}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: 'pi-home', text: t('suggestion_1') },
                  { icon: 'pi-compass', text: t('suggestion_2') },
                  { icon: 'pi-inbox', text: t('suggestion_3') },
                  { icon: 'pi-phone', text: t('suggestion_4') },
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded border border-white/5 hover:border-primary/30 transition-all"
                    whileHover={{ x: 5 }}
                  >
                    <i className={`pi ${item.icon} text-base`} style={{ color: colors.primary }} />
                    <span className="text-gray-300 text-sm">{item.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: `0 0 30px ${colors.primary}60` }}
              whileTap={{ scale: 0.95 }}
              onClick={handleGoHome}
              disabled={isLoading}
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-lg border-2 transition-all duration-300 relative overflow-hidden group"
              style={{
                borderColor: colors.primary,
                color: colors.dark,
                backgroundColor: colors.primary,
              }}
            >
              <motion.div
                className="absolute inset-0 group-hover:opacity-10 -z-10"
                style={{ backgroundColor: colors.dark }}
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
              {isLoading ? (
                <span className="flex items-center gap-2 justify-center">
                  <i className="pi pi-spin pi-spinner" />
                  {t('back_message')}
                </span>
              ) : (
                <span className="flex items-center gap-2 justify-center">
                  <i className="pi pi-arrow-left" />
                  {t('cta_home')}
                </span>
              )}
            </motion.button>

            <Link
              href="/PROJECT"
              className="px-8 py-4 font-bold uppercase tracking-widest text-sm rounded-lg border-2 transition-all duration-300 hover:scale-105"
              style={{
                borderColor: colors.primary,
                color: colors.primary,
                backgroundColor: 'transparent',
              }}
            >
              <span className="flex items-center gap-2 justify-center">
                <i className="pi pi-briefcase" />
                {t('cta_projects')}
              </span>
            </Link>
          </motion.div>

          {/* Decorative Quote */}
          <motion.p
            variants={itemVariants}
            className="text-gray-500 italic text-center mt-8"
            animate={{ opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            {t('quote')}
          </motion.p>
        </div>
      </motion.div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full pointer-events-none"
            style={{
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              border: `1px solid ${colors.primary}20`,
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
}
