'use client'
import Link from 'next/link';
import { motion, easeOut } from 'framer-motion';
import Image from 'next/image';
import 'primeicons/primeicons.css';

const colors = {
  primary: '#E9B826',
  secondary: '#BB141A',
  tertiary: '#2D5D2A',
  dark: '#0A0A0A',
  light: '#F5F5DC',
  border: 'rgba(233, 184, 38, 0.1)'
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialNetworks = [
    { icon: 'linkedin', url: 'https://linkedin.com/in/ndoh-yannick-tang-5b004934a', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/TangB5', label: 'GitHub' },
    { icon: 'whatsapp', url: 'https://wa.me/237653539102', label: 'WhatsApp' },
    { icon: 'instagram', url: 'https://instagram.com/kingtang337', label: 'Instagram' },
  ];

  const quickLinks = [
    { name: 'ARCHIVES.ABOUT', path: '/ABOUT' },
    { name: 'REGISTRY.PROJECTS', path: '/PROJECT' },
    { name: 'CORE.CULTURE', path: '/CULTURE' },
    { name: 'NODE.SOLUTIONS', path: '/SOLUTION' },
    { name: 'INIT.CONTACT', path: '/CONTACT' }
  ];

  return (
    <motion.footer 
      className="relative pt-32 pb-12 overflow-hidden border-t"
      style={{ backgroundColor: colors.dark, borderColor: colors.border }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {/* Background Decor - Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: `linear-gradient(${colors.primary} 1px, transparent 1px), linear-gradient(90deg, ${colors.primary} 1px, transparent 1px)`, backgroundSize: '100px 100px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        <div className="grid lg:grid-cols-4 gap-16 mb-24">
          
          {/* BRAND MODULE: THE SEAL OF AUTHENTICITY */}
          <div className="lg:col-span-1 space-y-8">
            <div className="relative group inline-block">
              {/* Radial glow around the new logo */}
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative flex items-center gap-4">
                <div className="relative p-1 border border-primary/20 bg-black">
                  <Image 
                    src="/logojaune.png" 
                    alt="KingTang Totem" 
                    width={50} 
                    height={50} 
                    className="z-10 transition-transform duration-700 group-hover:rotate-[360deg]"
                  />
                  {/* Micro Scanline on logo */}
                  <motion.div 
                    className="absolute inset-0 w-full h-[1px] bg-primary/40"
                    animate={{ y: [0, 50, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                <div>
                  <span className="block text-[9px] font-mono tracking-[0.4em] text-gray-500 uppercase leading-none mb-1">Authentic_Node</span>
                  <span className="block text-lg font-black tracking-tighter uppercase" style={{ color: colors.light }}>KING<span style={{ color: colors.primary }}>.</span></span>
                </div>
              </div>
            </div>

            <p className="text-[11px] font-mono text-gray-400 leading-relaxed uppercase tracking-tight">
              Ingénierie logicielle & héritage visuel. <br/>
              Bâtir des ponts entre les algorithmes modernes et la culture ancestrale.
            </p>

            <Link 
                href="/CONTACT" 
                className="group inline-flex items-center gap-4 text-[10px] font-mono tracking-[0.3em] uppercase transition-all"
                style={{ color: colors.primary }}
              >
                <span className="h-[1px] w-8 bg-primary/30 group-hover:w-12 group-hover:bg-primary transition-all" />
                Open_Channel
            </Link>
          </div>

          {/* NAVIGATION NODES */}
          <div>
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-10 text-primary" style={{ color: colors.primary }}> SYSTEM_MAP</h4>
            <ul className="space-y-5">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.path} className="text-[11px] font-black tracking-[0.2em] hover:text-primary transition-all flex items-center gap-3 group">
                    <span className="text-gray-700 group-hover:text-primary transition-colors">0{index + 1}</span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* UPLINKS (SOCIALS) */}
          <div>
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-10"> EXTERNAL_LINKS</h4>
            <div className="grid grid-cols-1 gap-3">
              {socialNetworks.map((social, index) => (
                <a 
                  key={index} href={social.url} target="_blank" 
                  className="flex items-center justify-between p-4 border border-white/5 bg-white/[0.01] hover:bg-primary/5 hover:border-primary/30 transition-all group"
                >
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-60 group-hover:opacity-100 group-hover:translate-x-2 transition-all">
                    {social.label}
                  </span>
                  <i className={`pi pi-${social.icon} text-xs text-gray-600 group-hover:text-primary`} />
                </a>
              ))}
            </div>
          </div>

          {/* NEWSLETTER: ENCRYPTED FEED */}
          <div>
            <h4 className="text-[10px] font-mono text-gray-500 uppercase tracking-[0.4em] mb-10"> DATA_SUBSCRIPTION</h4>
            <div className="space-y-4">
              <div className="relative">
                <input 
                  type="email" placeholder="ACCESS_ID@NETWORK.COM"
                  className="w-full bg-transparent border-b border-white/10 px-0 py-4 text-[10px] font-mono outline-none focus:border-primary transition-colors"
                />
                <div className="absolute bottom-0 left-0 h-[1px] bg-primary w-0 transition-all duration-500 group-focus-within:w-full" />
              </div>
              <button className="w-full py-4 bg-white text-black text-[10px] font-black uppercase tracking-[0.3em] hover:bg-gold transition-colors" style={{ backgroundColor: colors.primary }}>
                Connect_to_Feed
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM METADATA: FINAL CLEARANCE */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-10">
            <div className="flex flex-col">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Protocol_Year</span>
              <span className="text-[10px] font-black tracking-widest uppercase">© {currentYear} Global_Registry</span>
            </div>
            <div className="flex flex-col border-l border-white/10 pl-10">
              <span className="text-[8px] font-mono text-gray-600 uppercase tracking-widest">Base_Location</span>
              <span className="text-[10px] font-black tracking-widest text-primary uppercase" style={{ color: colors.primary }}>Douala, CM.AFR</span>
            </div>
          </div>

          <div className="flex items-center gap-8 text-[9px] font-mono text-gray-600 tracking-[0.2em]">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500/50" />
              <span className="text-gray-400">ENCRYPTED_SESSION_ACTIVE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Large Background Text */}
      <div className="absolute -bottom-20 -right-10 text-[20rem] font-black opacity-[0.01] pointer-events-none select-none tracking-tighter uppercase italic">
        KINGTANG
      </div>
    </motion.footer>
  );
}