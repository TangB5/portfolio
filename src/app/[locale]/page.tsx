'use client'
import Image from 'next/image';
import { Link } from '@/i18n/navigation'; // Important : utilise ton helper
import { motion } from 'framer-motion';
import 'primeicons/primeicons.css';
import Hero from './component/HERO';
import { useTranslations } from 'next-intl';

const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
};

export default function Home() {
  const t = useTranslations('HomePage');

  const projects = [
    {
      id: "01",
      tags: ["React", "Node.js", "UI/UX"],
      image: "/projet1.jpg",
      isCompleted: false,
      projectLink: "#"
    },
    {
      id: "02",
      tags: ["NextJS", "Tailwind", "Motion"],
      image: "/images/projet2.png",
      isCompleted: true,
      projectLink: "https://cultureafricaine.vercel.app/"
    },
    {
      id: "03",
      tags: ["Branding", "Illustration"],
      image: "/projet3.jpg",
      isCompleted: false,
      projectLink: "#"
    }
  ];

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.dark, color: colors.light }}>
      <Hero />

      {/* --- PROJECTS SECTION --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-[10px] tracking-[0.5em] text-gray-500 uppercase block mb-4"
            >
              {t('projects.label')}
            </motion.span>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              {t('projects.title_part1')} <span style={{ color: colors.primary }}>{t('projects.title_part2')}</span>
            </h2>
          </div>
          <p className="max-w-xs text-xs font-mono text-gray-500 leading-relaxed uppercase">
            {t('projects.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
          {projects.map((projet, index) => (
            <motion.div
              key={projet.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#0A0A0A] group relative overflow-hidden flex flex-col h-full"
            >
              {/* Status Header */}
              <div className="p-6 flex justify-between items-start z-10">
                <span className="font-mono text-[10px] text-gray-500">{projet.id}</span>
                <div className="flex gap-1">
                  <div className={`w-1.5 h-1.5 rounded-full ${projet.isCompleted ? 'bg-green-500' : 'bg-orange-500 animate-pulse'}`} />
                  <span className="text-[8px] font-mono uppercase tracking-widest opacity-50">
                    {projet.isCompleted ? t('projects.status_ready') : t('projects.status_progress')}
                  </span>
                </div>
              </div>

              {/* Image */}
              <div className="relative h-64 w-full px-6 grayscale group-hover:grayscale-0 transition-all duration-700">
                <Image
                  src={projet.image}
                  alt={t(`projects.items.${projet.id}.title`)}
                  fill
                  className="object-cover opacity-40 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Content */}
              <div className="p-8 mt-auto border-t border-white/5 bg-gradient-to-t from-black to-transparent">
                <h3 className="text-xl font-black uppercase tracking-tight mb-2 group-hover:text-gold transition-colors" style={{ color: projet.isCompleted ? colors.light : 'gray' }}>
                  {t(`projects.items.${projet.id}.title`)}
                </h3>
                <p className="text-xs text-gray-500 mb-6 font-mono leading-relaxed line-clamp-2 uppercase italic">
                  &rdquo;{t(`projects.items.${projet.id}.description`)}&rdquo;
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {projet.tags.map(tag => (
                    <span key={tag} className="text-[9px] font-mono border border-white/10 px-2 py-1 uppercase opacity-60">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={projet.isCompleted ? projet.projectLink : "#"}
                  className={`flex items-center justify-between text-[10px] font-mono tracking-widest uppercase transition-all ${projet.isCompleted ? 'text-primary hover:gap-4' : 'text-gray-700 cursor-not-allowed'}`}
                  style={{ color: projet.isCompleted ? colors.primary : '' }}
                >
                  {projet.isCompleted ? t('projects.access_grant') : t('projects.access_deny')}
                  <i className={`pi ${projet.isCompleted ? 'pi-arrow-right' : 'pi-lock'}`} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View Archive Link */}
        <div className="mt-16 text-center">
          <Link
            href="/PROJECT"
            className="inline-flex items-center gap-4 text-[11px] font-mono tracking-[0.4em] uppercase group"
          >
            <span className="h-[1px] w-12 bg-gray-700 group-hover:w-20 group-hover:bg-primary transition-all" />
            {t('projects.view_archive')}
          </Link>
        </div>
      </section>

      {/* --- CULTURAL FUSION CORE --- */}
      <section className="relative py-32 overflow-hidden border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-[0.9]">
            {t('fusion.title')}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-16 font-light">
            {t('fusion.description')}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10 mb-16">
            {[
              { label: 'ORIGIN', val: t('fusion.stats.origin'), icon: 'flag' },
              { label: 'MEDIUM', val: t('fusion.stats.medium'), icon: 'palette' },
              { label: 'LEGACY', val: t('fusion.stats.legacy'), icon: 'history' },
              { label: 'VISION', val: t('fusion.stats.vision'), icon: 'bolt' }
            ].map((item, i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 flex flex-col items-center group">
                <i className={`pi pi-${item.icon} text-gray-600 group-hover:text-primary mb-4 transition-colors`} />
                <span className="text-[8px] font-mono text-gray-500 uppercase tracking-widest mb-1">{item.label}</span>
                <span className="text-sm font-bold uppercase tracking-tight">{item.val}</span>
              </div>
            ))}
          </div>

          <Link
            href="/CULTURE"
            className="px-12 py-5 text-black text-xs font-black uppercase tracking-[0.2em] inline-block"
            style={{ backgroundColor: colors.primary }}
          >
            {t('fusion.cta')}
          </Link>
        </div>
      </section>
    </div>
  );
}