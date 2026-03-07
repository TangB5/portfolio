'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import 'primeicons/primeicons.css';
import Plan from '../component/arrierplan';

const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(245, 245, 220, 0.1)'
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const t = useTranslations('ContactPage');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden" style={{ backgroundColor: colors.dark, color: colors.light }}>
      
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <Plan />
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-20 relative z-10">
        
        {/* --- HERO: BRIDGE PROTOCOL --- */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-mono text-[10px] tracking-[0.5em] text-gray-500 mb-4 uppercase"
          >
           {t('hero.protocol')}
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6"
          >
            {t('hero.title_main')} <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${colors.primary}, #FFF)` }}>{t('hero.title_highlight')}</span>
          </motion.h1>
          <p className="max-w-xl text-gray-400 text-lg border-l-2 pl-6" style={{ borderColor: colors.secondary }}>
            {t('hero.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-1 px-1 bg-white/5 border border-white/10">
          
          {/* --- LEFT: THE TERMINAL (FORM) --- */}
          <div className="bg-[#0A0A0A] p-8 md:p-12 border border-white/5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: colors.primary }} />
              <span className="font-mono text-[10px] tracking-widest uppercase opacity-50">{t('form.section_title')}</span>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="group relative">
                <label className="text-[10px] font-mono text-gray-500 uppercase mb-2 block">{t('form.name_label')}</label>
                <input 
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  placeholder={t('form.name_placeholder')}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-bold tracking-tight"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] font-mono text-gray-500 uppercase mb-2 block">{t('form.email_label')}</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder={t('form.email_placeholder')}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-bold tracking-tight"
                />
              </div>

              <div className="group relative">
                <label className="text-[10px] font-mono text-gray-500 uppercase mb-2 block">{t('form.message_label')}</label>
                <textarea 
                  name="message" value={formData.message} onChange={handleChange} required rows={4}
                  placeholder={t('form.message_placeholder')}
                  className="w-full bg-transparent border-b border-white/10 py-3 outline-none focus:border-primary transition-colors font-medium text-sm"
                />
              </div>

              <div className="relative pt-4">
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full py-5 bg-white text-black font-black uppercase tracking-[0.2em] text-xs hover:bg-gold transition-all flex items-center justify-center gap-3"
                  style={{ backgroundColor: colors.primary }}
                >
                  {isSubmitting ? <i className="pi pi-spin pi-spinner" /> : <><i className="pi pi-send" /> {t('form.submit_button')}</>}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                      className="absolute -bottom-12 left-0 right-0 text-center text-[10px] font-mono text-green-500"
                    >
                      {t('form.success_message')}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </form>
          </div>

          {/* --- RIGHT: COMMUNICATION NODES --- */}
          <div className="bg-[#0F0F0F] p-8 md:p-12 border border-white/5 flex flex-col justify-between">
            <div className="space-y-12">
              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-6">{t('contact_nodes.title')}</span>
                <div className="space-y-6">
                  {[
                    { label: t('contact_nodes.email_label'), value: 'kingtang337@gmail.com', icon: 'pi-envelope', color: colors.primary },
                    { label: t('contact_nodes.whatsapp_label'), value: '+237 653 53 91 02', icon: 'pi-whatsapp', color: '#25D366' },
                    { label: t('contact_nodes.location_label'), value: 'Cameroun, Africa', icon: 'pi-map-marker', color: colors.secondary },
                  ].map((node, i) => (
                    <div key={i} className="flex items-start gap-4 group">
                      <div className="w-10 h-10 border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
                        <i className={`pi ${node.icon} text-xs`} style={{ color: node.color }} />
                      </div>
                      <div>
                        <div className="text-[9px] font-mono text-gray-500 tracking-tighter">{node.label}</div>
                        <div className="text-sm font-bold uppercase tracking-tight">{node.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <span className="font-mono text-[10px] tracking-widest text-gray-500 uppercase block mb-6">{t('social.title')}</span>
                <div className="flex gap-4">
                  {[
                    
                    { icon: 'linkedin', url: 'https://linkedin.com/in/ndoh-yannick-tang-5b004934a' },
                    { icon: 'github', url: 'https://github.com/TangB5' },
                    { icon: 'instagram', url: 'https://instagram.com/kingtang337' }
                  ].map((social, i) => (
                    <a key={i} href={social.url} target="_blank" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                      <i className={`pi pi-${social.icon}`} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 border border-white/5 bg-black/50">
              <i className="pi pi-heart text-xs mb-3 block opacity-30" />
              <p className="text-[11px] font-mono leading-relaxed opacity-60 uppercase tracking-tighter">
                &rdquo;{t('quote.text')}&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* --- FAQ: KNOWLEDGE BASE --- */}
        <section className="mt-32">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-2xl font-black uppercase tracking-widest">{t('faq.title')}</h2>
            <div className="h-[1px] flex-grow bg-white/10" />
            <span className="font-mono text-[10px] text-gray-500">{t('faq.subtitle')}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/10 border border-white/10">
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bg-[#0A0A0A] p-8 hover:bg-white/[0.02] transition-colors">
                <div className="flex gap-4">
                  <span className="font-mono text-gold text-[10px] pt-1" style={{ color: colors.primary }}>0{i+1}.</span>
                  <div>
                    <h3 className="font-bold uppercase tracking-tight mb-3 text-sm">{t(`faq.items.${i}.q`)}</h3>
                    <p className="text-xs text-gray-500 leading-relaxed font-mono">{t(`faq.items.${i}.a`)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}