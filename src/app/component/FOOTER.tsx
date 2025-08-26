'use client'
import Link from 'next/link';
import { motion, easeInOut, easeOut } from 'framer-motion';
import Image from 'next/image';
// Couleurs inspirées de l'art africain
const colors = {
  primary: '#E9B826', // Or africain
  secondary: '#BB141A', // Rouge terre
  tertiary: '#2D5D2A', // Vert forêt
  dark: '#0A0A0A',   // Noir profond
  light: '#F5F5DC'   // Beige naturel
};

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialNetworks = [
    { 
      icon: 'linkedin', 
      url: 'https://www.linkedin.com/in/ndoh-yannick-tang-5b004934a', 
      label: 'LinkedIn',
      description: 'Rejoignez mon réseau professionnel'
    },
    { 
      icon: 'github', 
      url: 'https://github.com/TangB5', 
      label: 'GitHub',
      description: 'Découvrez mes projets open source'
    },
    { 
      icon: 'whatsapp', 
      url: 'https://wa.me/237653539102', 
      label: 'WhatsApp',
      description: 'Contactez-moi directement'
    },
    { 
      icon: 'instagram', 
      url: 'https://www.instagram.com/kingtang337', 
      label: 'instagram',
      description: 'suivez mes avetures'
    },
    
    
  ];

  const quickLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'À Propos', path: '/ABOUT' },
    { name: 'Projets', path: '/PROJECT' },
    { name: 'Culture', path: '/CULTURE' },
    { name: 'Contact', path: '/CONTACT' }
  ];

  const serviceLinks = [
    { name: 'Développement Frontend', path: '/services#frontend' },
    { name: 'Design UX/UI', path: '/services#design' },
    { name: 'Design Culturel', path: '/services#cultural' },
    { name: 'Consultation', path: '/services#consultation' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut
      }
    }
  };

  return (
    <motion.footer 
      className="relative pt-16 pb-8 overflow-hidden"
      style={{ backgroundColor: colors.dark }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Ligne décorative supérieure */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ 
        background: `linear-gradient(90deg, ${colors.primary}, ${colors.secondary}, ${colors.tertiary})` 
      }}></div>
      
      {/* Motifs décoratifs africains */}
      <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="absolute top-10 left-10 w-20 h-20" style={{
          backgroundImage: "url('/images/image1.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}></div>
        <div className="absolute bottom-20 right-10 w-20 h-20 z-0" style={{
          backgroundImage: "url('/images/image2.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}></div>
        <div className="absolute top-[42%] left-[40%] w-16 h-16" style={{
          backgroundImage: "url('/images/image3.png')",
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'drop-shadow(0 0 5px white)' // contour lumineux
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4">
        {/* Section Principale */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <Link
  href="/"
  className="text-2xl font-bold flex items-center group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-dark focus-visible:ring-primary rounded mb-6"
  
>
  <span className="transition-all duration-500 rotate-45 group-hover:scale-110 p-2 bg-[#D4AF37] rounded-md overflow-hidden">
    <Image
      src="/2.png" // ton logo
      alt="KingTang Logo"
      width={30}
      height={30}
      className="transition-all duration-500 -rotate-45 group-hover:brightness-110"
    />
  </span>
</Link>
            <p className="text-sm opacity-80 mb-4" style={{ color: colors.light }}>
              Fusion innovation technologique et patrimoine culturel africain pour créer des expériences digitales uniques et mémorables.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/CONTACT" 
                className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all"
                style={{ 
                  backgroundColor: colors.primary, 
                  color: colors.dark,
                  boxShadow: `0 4px 14px 0 ${colors.primary}40`
                }}
              >
                <i className="pi pi-send mr-2"></i>
                Discutons de votre projet
              </Link>
            </motion.div>
          </motion.div>

          {/* Liens Rapides */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: colors.primary }}>
              Navigation
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.path}
                    className="text-sm transition-all hover:opacity-100 flex items-center group"
                    style={{ color: colors.light, opacity: 0.8 }}
                  >
                    <span className="w-1 h-1 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: colors.primary }}></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: colors.primary }}>
              Services
            </h4>
            <ul className="space-y-2">
              {serviceLinks.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.path}
                    className="text-sm transition-all hover:opacity-100 flex items-center group"
                    style={{ color: colors.light, opacity: 0.8 }}
                  >
                    <span className="w-1 h-1 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" style={{ backgroundColor: colors.primary }}></span>
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Réseaux Sociaux */}
          <motion.div variants={itemVariants} className="md:col-span-1">
            <h4 className="text-lg font-semibold mb-4 uppercase tracking-wider" style={{ color: colors.primary }}>
              Connectons-nous
            </h4>
            <p className="text-sm opacity-80 mb-4" style={{ color: colors.light }}>
              Suivez-moi pour découvrir mes dernières créations et insights sur le design africain moderne.
            </p>
            <div className="flex space-x-3">
              {socialNetworks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full flex items-center justify-center transition-all relative group"
                  style={{ 
                    backgroundColor: 'rgba(245, 245, 220, 0.1)',
                    color: colors.light
                  }}
                  aria-label={social.label}
                >
                  <i className={`pi pi-${social.icon}`}></i>
                  {/* Tooltip */}
                  <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                        style={{ 
                          backgroundColor: colors.primary, 
                          color: colors.dark 
                        }}>
                    {social.label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Section Newsletter */}
        <motion.div 
          variants={itemVariants}
          className="p-6 rounded-xl mb-8 text-center"
          style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}
        >
          <h4 className="text-lg font-semibold mb-2" style={{ color: colors.primary }}>
            Restons connectés
          </h4>
          <p className="text-sm opacity-80 mb-4 max-w-md mx-auto" style={{ color: colors.light }}>
            Recevez des insights exclusifs sur le design africain moderne et mes derniers projets.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Votre email"
              className="flex-1 px-4 py-2 rounded-lg text-sm"
              style={{ 
                backgroundColor: 'rgba(245, 245, 220, 0.1)', 
                color: colors.light,
                border: `1px solid ${colors.primary}30`
              }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg text-sm font-medium"
              style={{ 
                backgroundColor: colors.primary, 
                color: colors.dark 
              }}
            >
              S&rsquo;abonner
            </motion.button>
          </div>
        </motion.div>

        {/* Ligne de séparation */}
        <div className="h-px w-full mb-6" style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)' }}></div>

        {/* Copyright */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-sm opacity-75 mb-4 md:mb-0" style={{ color: colors.light }}>
            &copy; {currentYear} KingTang. Tous droits réservés.
            <span className="block md:inline md:ml-2 mt-1 md:mt-0" style={{ color: colors.primary }}>
              Fièrement Camerounais
            </span>
          </p>
          
          <div className="flex items-center space-x-6 text-xs opacity-75" style={{ color: colors.light }}>
            <Link href="/privacy" className="hover:opacity-100 transition-opacity">
              Confidentialité
            </Link>
            <Link href="/terms" className="hover:opacity-100 transition-opacity">
              Conditions
            </Link>
            <span>•</span>
            <span className="flex items-center">
              <i className="pi pi-heart mr-1" style={{ color: colors.secondary, fontSize: '0.9em' }}></i>
              Fabriqué avec passion
            </span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}