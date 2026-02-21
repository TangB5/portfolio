"use client";
import React, { useState } from "react";
import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "primeicons/primeicons.css";
import Plan from "../component/arrierplan";
import { useTranslations } from "next-intl";

const colors = {
  gold: "#E9B826",
  red: "#BB141A",
  green: "#2D5D2A",
  dark: "#0A0A0A",
  light: "#F5F5DC",
};
type SectionTitleProps = {
  title: string;
  subtitle: string;
  color?: string;
};
type Motif = {
  id: number;
  src: string;
  version: string;
  status: "available" | "upcoming" | "revision";
};

// --- COMPOSANTS INTERNES ---

export default function Culture() {
  const t = useTranslations("CulturePage");

  const SectionTitle = ({
    title,
    subtitle,
    color = colors.gold,
  }: SectionTitleProps) => (
    <div className="mb-16">
      <div className="flex items-center gap-3 mb-2">
        <div className="h-[2px] w-8" style={{ backgroundColor: color }} />
        <span className="font-mono text-[10px] tracking-[0.3em] text-gray-500 uppercase">
          {subtitle}
        </span>
      </div>
      <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
        {title}
      </h2>
    </div>
  );
  const [activeMotif, setActiveMotif] = useState<Motif | null>(null);
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });

  const motifs: Motif[] = [
    { id: 1, src: "/motif-wax.jpg", version: "v2.1", status: "available" },
    { id: 2, src: "/motif-adinkra.jpg", version: "v1.0", status: "upcoming" },
    { id: 3, src: "/motif-ndop.jpg", version: "BETA", status: "revision" },
    { id: 4, src: "/motif-kente.jpg", version: "v1.4", status: "upcoming" },
  ];
  const specItems = [
  { key: 'adinkra', color: colors.gold },
  { key: 'ndop', color: colors.red },
  { key: 'wax', color: colors.green },
];

  return (
    <div
      className="min-h-screen relative"
      style={{ backgroundColor: colors.dark, color: colors.light }}
    >
      {/* --- HERO: CULTURAL R&D --- */}
      <section className="relative pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <Plan />
        </div>

        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-[10px] tracking-[0.4em] text-gray-500 mb-4"
          >
            {t("hero.badge")}
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.8] mb-8">
            {t("hero.title_main")} <br />
            <span
              className="text-transparent bg-clip-text"
              style={{
                backgroundImage: `linear-gradient(to right, ${colors.gold}, #FFF)`,
              }}
            >
              {t("hero.title_sub")}
            </span>
          </h1>

          <p
            className="max-w-2xl text-xl text-gray-400 leading-relaxed border-l-2 pl-8"
            style={{ borderColor: colors.red }}
          >
            {t("hero.description")}
            {/*  <span className="text-white">source code</span>.  */}
          </p>
        </div>
      </section>

      {/* --- SECTION 1: PATTERN REPOSITORY --- */}
      <section ref={ref1} className="py-24 px-6 max-w-7xl mx-auto">
        <SectionTitle title={t("library.title")} subtitle="Digital Archives" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {motifs.map((motif) => (
            <motion.div
              key={motif.id}
              whileHover={{ y: -5 }}
              className="group relative border border-white/5 bg-white/[0.02] p-4 cursor-pointer"
              onClick={() => setActiveMotif(motif)}
            >
              {/* Visual Preview */}
              <div className="relative aspect-square mb-4 overflow-hidden bg-gray-900">
                <Image
                  src={motif.src}
                  alt={t(`library.motifs.${motif.id}.title`)}
                  fill
                  className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute top-2 right-2 px-2 py-1 text-[8px] font-mono bg-black/80 border border-white/10">
                  {t(`library.status.${motif.status}`)}
                </div>
              </div>

              {/* Metadata */}
              <div className="space-y-1">
                <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                  <span>{motif.version}</span>
                  <span>{t(`library.motifs.${motif.id}.origin`)}</span>
                </div>
                <h3
                  className="text-lg font-bold tracking-tighter group-hover:text-gold transition-colors"
                  style={{ color: colors.gold }}
                >
                  {t(`library.motifs.${motif.id}.title`)}
                </h3>
              </div>

              {/* Corner Accents */}
              <div
                className="absolute top-0 left-0 w-2 h-2 border-t border-l opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: colors.gold }}
              />
              <div
                className="absolute bottom-0 right-0 w-2 h-2 border-b border-r opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ borderColor: colors.gold }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- SECTION 2: PHILOSOPHY LOGS (Proverbes) --- */}
      <section className="py-24 px-6 bg-white/[0.01] border-y border-white/5">
       <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
  {[0, 1, 2].map((index) => (
    <div key={index} className="space-y-4">
      {/* Note technique : // OPEN_SOURCE_MINDSET */}
      <div
        className="text-[10px] font-mono text-gold"
        style={{ color: colors.gold }}
      >
        {t(`philosophy.logs.${index}.note`)}
      </div>

      {/* Texte de la citation */}
      <p className="text-2xl font-bold tracking-tight leading-tight italic">
        &rdquo;{t(`philosophy.logs.${index}.text`)}&rdquo;
      </p>

      {/* Référence : — African Proverb */}
      <div className="text-xs text-gray-500">
        — {t(`philosophy.logs.${index}.ref`)}
      </div>
    </div>
  ))}
</div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
  {[0, 1, 2].map((index) => (
    <div key={index} className="space-y-4">
      
      <div
        className="text-[10px] font-mono text-gold"
        style={{ color: colors.gold }}
      >
        {t(`philosophy.logs.${index}.note`)}
      </div>

      {/* Texte de la citation */}
      <p className="text-2xl font-bold tracking-tight leading-tight italic">
        &rdquo;{t(`philosophy.logs.${index}.text`)}&rdquo;
      </p>

      {/* Référence : — African Proverb */}
      <div className="text-xs text-gray-500">
        — {t(`philosophy.logs.${index}.ref`)}
      </div>
    </div>
  ))}
</div>
      </section>

      {/* --- SECTION 3: SYSTEM SPECIFICATIONS (Éducation) --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <SectionTitle
          title={t("specs.title")}
          subtitle={t("specs.subtitle")}
          color={colors.green}
        />

        <div className="grid md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <p className="text-xl text-gray-400">
              {t("specs.main_text")}
              
            </p>

            <div className="grid grid-cols-1 gap-4">
  {specItems.map((item) => (
    <div
      key={item.key}
      className="p-4 border border-white/5 flex items-center justify-between group hover:border-white/20 transition-colors"
    >
      {/* Titre : specs.items.adinkra.title */}
      <span className="font-bold tracking-widest">
        {t(`specs.items.${item.key}.title`)}
      </span>

      {/* Usage : specs.items.adinkra.use */}
      <span className="text-[10px] font-mono opacity-50 uppercase">
        {t(`specs.items.${item.key}.use`)}
      </span>
    </div>
  ))}
</div>
          </div>

          <div className="relative aspect-video border border-white/10 bg-gray-900 overflow-hidden">
            {/* Simulate a code/blueprint look */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #E9B826 1px, transparent 1px)",
                backgroundSize: "20px 20px",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center p-12">
              <div className="text-center space-y-4">
                <i
                  className="pi pi-compass text-4xl mb-4"
                  style={{ color: colors.gold }}
                ></i>
                <h4 className="text-xl font-mono uppercase tracking-[0.2em]">
                  {t("specs.framework.title")}
                </h4>
                <p className="text-xs text-gray-500 font-mono italic">
                  {t("specs.framework.desc")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- MODAL (VAULT VIEW) --- */}
      <AnimatePresence>
        {activeMotif && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/95 backdrop-blur-sm"
            onClick={() => setActiveMotif(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-4xl w-full bg-[#0F0F0F] border border-white/10 p-8 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveMotif(null)}
                className="absolute top-6 right-6 text-gray-500 hover:text-white transition-colors"
              >
                <i className="pi pi-times"></i>
              </button>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="relative aspect-square border border-white/10 bg-black">
                  <Image
                    src={activeMotif.src}
                    alt={t(`library.motifs.${activeMotif.id}.title`)}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-gold font-mono text-xs">
                      {activeMotif.version}
                    </span>
                    <h3
                      className="text-4xl font-black uppercase tracking-tight"
                      style={{ color: colors.gold }}
                    >
                      {t(`library.motifs.${activeMotif.id}.title`)}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                   {t(`library.motifs.${activeMotif.id}.desc`)}
                  </p>
                  <div className="pt-6 space-y-2 border-t border-white/10">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">{t('modal.origin')}</span>
                      <span>{t(`library.motifs.${activeMotif.id}.origin`)}</span>
                    </div>
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-gray-500">{t('modal.encoding')}</span>
                      <span>SVG/VECTOR/WEBGL</span>
                    </div>
                  </div>
                  <button
                    className="w-full py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gold transition-colors"
                    style={{ backgroundColor: colors.gold }}
                  >
                    {t('modal.button')} <i className="pi pi-download ml-2"></i>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- CTA SECTION --- */}
      <section className="py-24 text-center">
        <h3 className="text-2xl font-bold mb-8 uppercase tracking-widest">
          {t('cta.title')}
        </h3>
        <Link
          href="/CONTACT"
          className="px-12 py-5 border border-white/20 hover:bg-white hover:text-black transition-all font-bold uppercase text-xs tracking-[0.3em]"
        >
          {t('cta.button')} <i className="pi pi-send ml-2"></i>
        </Link>
      </section>
    </div>
  );
}
