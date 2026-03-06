'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from '@/i18n/navigation';
import { useState, useEffect } from 'react';
import 'primeicons/primeicons.css';

const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
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
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center" style={{ backgroundColor: colors.dark, color: colors.light }}>
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Large Glitch Text Background */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div className="text-[15rem] font-black opacity-10 select-none tracking-tighter" style={{ color: colors.primary }}>
          404
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center space-y-8">
          {/* Protocol Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }} />
              <span className="text-[10px] font-mono tracking-[0.3em] text-gray-500 uppercase">
                {t('error_code')}
              </span>
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: colors.secondary }} />
            </div>

            <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-none mb-2">
              {t('title')}
            </h1>
            
            <h2 className="text-2xl md:text-4xl font-bold tracking-widest uppercase text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})` }}>
              {t('subtitle')}
            </h2>

            <p className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase mt-6">
              {t('code')}
            </p>
          </motion.div>

          {/* Error Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto space-y-8"
          >
            <p className="text-lg text-gray-400 leading-relaxed border-l-2 pl-6" style={{ borderColor: colors.primary }}>
              {t('description')}
            </p>

            {/* Terminal Style Box */}
            <motion.div
              className="p-8 border border-white/10 bg-black/50 space-y-4"
              whileHover={{ borderColor: colors.primary }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: colors.primary }} />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest">{t('suggestions')}</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300 font-mono text-[11px]">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>{t('suggestion_1')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>{t('suggestion_2')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>{t('suggestion_3')}</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1">→</span>
                  <span>{t('suggestion_4')}</span>
                </div>
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              className="italic text-gray-500 text-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              {t('quote')}
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid md:grid-cols-3 gap-4 pt-8"
          >
            {/* Home Button */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleGoHome}
              disabled={isLoading}
              className="py-6 px-8 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 relative overflow-hidden group border border-white/10 hover:border-primary transition-all"
              style={{ backgroundColor: colors.dark, color: colors.light }}
            >
              <motion.div
                style={{ backgroundColor: colors.primary }}
                initial={{ scaleX: 0, originX: 0 }}
                whileHover={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 -z-10"
              />
              {isLoading ? (
                <>
                  <i className="pi pi-spin pi-spinner text-xs" />
                  {t('back_message')}
                </>
              ) : (
                <>
                  <i className="pi pi-arrow-left text-xs" />
                  {t('cta_home')}
                </>
              )}
            </motion.button>

            {/* Projects Archive Button */}
            <Link
              href="/PROJECT"
              className="py-6 px-8 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 border border-white/10 hover:border-primary hover:bg-primary/5 transition-all group"
              style={{ color: colors.light }}
            >
              <i className="pi pi-inbox text-xs group-hover:translate-x-1 transition-transform" />
              {t('cta_projects')}
            </Link>

            {/* Contact Button */}
            <Link
              href="/CONTACT"
              className="py-6 px-8 font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 border border-white/10 hover:border-secondary hover:bg-secondary/5 transition-all group"
              style={{ color: colors.light }}
            >
              <i className="pi pi-phone text-xs group-hover:scale-110 transition-transform" />
              {t('cta_contact')}
            </Link>
          </motion.div>
        </div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 border border-primary/20 rounded-full pointer-events-none"
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute bottom-32 left-10 w-32 h-32 border border-secondary/20 rounded-full pointer-events-none"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Code Block in Footer */}
      <motion.div
        className="absolute bottom-8 left-6 right-6 text-[8px] font-mono text-gray-600 opacity-40 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1 }}
      >
        <div className="max-w-2xl mx-auto border border-gray-700 p-4 bg-black/30">
          <div className="text-gray-500 mb-2">// 404_ERROR_PROTOCOL</div>
          <div className="text-gray-600">{'{'}</div>
          <div className="ml-4 text-gray-600">status: 404,</div>
          <div className="ml-4 text-gray-600">message: &quot;{t('subtitle')}&quot;,</div>
          <div className="ml-4 text-gray-600">timestamp: {new Date().getTime()},</div>
          <div className="ml-4 text-gray-600">path: window.location.pathname</div>
          <div className="text-gray-600">{'}'}</div>
        </div>
      </motion.div>
    </div>
  );
}
