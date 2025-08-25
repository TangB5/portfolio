"use client"
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import 'primeicons/primeicons.css';
import { Motif } from '../type';
import { easeOut } from "framer-motion";




// Couleurs inspirées de l'art africain
const colors = {
  primary: '#E9B826', // Or africain
  secondary: '#BB141A', // Rouge terre
  tertiary: '#2D5D2A', // Vert forêt
  dark: '#0A0A0A',   // Noir profond
  light: '#F5F5DC'   // Beige naturel
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: easeOut } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

export default function Culture() {
  const [activeMotif, setActiveMotif] = useState<Motif|null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  const motifs = [
    { 
      id: 1,
      src: '/motif-wax.jpg', 
      alt: 'Motif Wax revisité', 
      title: 'Wax Moderne',
      description: 'Réinterprétation contemporaine des motifs Wax traditionnels avec une palette de couleurs vibrantes adaptée au digital.',
      origin: 'Inspiré des textiles d\'Afrique de l\'Ouest',
      usage: 'Arrière-plans, éléments de navigation, séparateurs'
    },
    { 
      id: 2,
      src: '/motif-adinkra.jpg', 
      alt: 'Motif Adinkra revisité', 
      title: 'Adinkra Digital',
      description: 'Symboles Adinkra du Ghana adaptés aux interfaces modernes. Chaque symbole porte une signification philosophique profonde.',
      origin: 'Culture Akan, Ghana',
      usage: 'Icônes, logos, éléments symboliques'
    },
    { 
      id: 3,
      src: '/motif-ndop.jpg', 
      alt: 'Motif Ndop revisité', 
      title: 'Ndop Contemporain',
      description: 'Motifs géométriques du Ndop camerounais transformés en patterns digitaux avec une approche minimaliste.',
      origin: 'Royaume Bamoun, Cameroun',
      usage: 'Textures, bordures, éléments décoratifs'
    },
    { 
      id: 4,
      src: '/motif-kente.jpg', 
      alt: 'Motif Kente revisité', 
      title: 'Kente Numérique',
      description: 'Adaptation des motifs complexes du tissu Kente en designs web responsifs qui conservent leur essence culturelle.',
      origin: 'Peuple Ashanti, Ghana',
      usage: 'Headers, footers, éléments de branding'
    },
    { 
      id: 5,
      src: '/motif-bogolan.jpg', 
      alt: 'Motif Bogolan revisité', 
      title: 'Bogolan Digital',
      description: 'Réinterprétation des motifs Bogolan du Mali avec des textures et effets visuels modernes.',
      origin: 'Culture Bambara, Mali',
      usage: 'Arrière-plans texturés, éléments naturels'
    },
    { 
      id: 6,
      src: '/motif-shibu.jpg', 
      alt: 'Motif Shibu revisité', 
      title: 'Shibu Connecté',
      description: 'Motifs de communication visuelle Shibu revisités pour créer des parcours utilisateur intuitifs et culturellement ancrés.',
      origin: 'Diverses cultures africaines',
      usage: 'Indicateurs de navigation, éléments interactifs'
    },
  ];

  const citations = [
    { 
      text: 'Le savoir se partage comme un baobab donne son ombre.', 
      source: 'Proverbe africain',
      explanation: 'Symbolise la générosité dans le partage des connaissances, valeur fondamentale dans les communautés africaines.'
    },
    { 
      text: 'L\'innovation naît de nos racines.', 
      source: 'KingTang',
      explanation: 'Notre héritage culturel est une source inépuisable d\'inspiration pour créer des designs modernes et authentiques.'
    },
    { 
      text: 'Seul on va plus vite, ensemble on va plus loin.', 
      source: 'Proverbe africain',
      explanation: 'Met en avant l\'importance de la collaboration et de la communauté dans la création et l\'innovation.'
    },
  ];

  const culturalElements = [
    {
      title: "Symboles Adinkra",
      description: "Système de symboles représentant des concepts ou aphorismes provenant des Akans du Ghana.",
      usage: "J'utilise ces symboles comme éléments de navigation métaphoriques dans mes interfaces.",
      example: "Le Sankofa (apprendre du passé) pour le bouton retour"
    },
    {
      title: "Textiles Wax",
      description: "Tissus emblématiques aux couleurs vives et motifs complexes, popularisés en Afrique de l'Ouest.",
      usage: "Inspiration pour les palettes de couleurs et les arrière-plans dynamiques.",
      example: "Gammes de couleurs chaudes et contrastées pour évoquer la vitalité"
    },
    {
      title: "Art Ndop",
      description: "Textiles traditionnels des rois Bamoun du Cameroun, caractérisés par des motifs géométriques complexes.",
      usage: "Patterns et textures pour créer des designs structurés et rythmés.",
      example: "Motifs répétitifs pour les séparateurs de sections"
    },
    {
      title: "Masques et Sculptures",
      description: "Formes stylisées et symboliques issues des traditions artistiques variées du continent.",
      usage: "Inspiration pour les icônes et illustrations aux formes expressives.",
      example: "Silhouettes épurées pour les avatars et icônes utilisateur"
    }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
     

      {/* Hero Section Culture */}
      <div className="pt-28 pb-16 px-4 text-center relative overflow-hidden">
        {/* Arrière-plan avec motif Adinkra */}
        <div className="absolute inset-0 opacity-5 z-0">
          <div className="absolute top-20 left-10 w-24 h-24" style={{ backgroundImage: "url('/adinkra-sankofa.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
          <div className="absolute bottom-20 right-10 w-24 h-24" style={{ backgroundImage: "url('/adinkra-dwennimmen.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16" style={{ backgroundImage: "url('/adinkra-akoma.svg')", backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}></div>
        </div>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair font-bold mb-6"
          style={{ color: colors.primary }}
        >
          Racines & Innovation
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl max-w-3xl mx-auto mb-10"
        >
          Découvrez comment le patrimoine visuel africain inspire des designs digitaux contemporains et authentiques
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-flex items-center px-6 py-3 rounded-full"
          style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}
        >
          <i className="pi pi-compass mr-2" style={{ color: colors.primary }}></i>
          <span>Exploration culturelle</span>
        </motion.div>
      </div>

      {/* Section Galerie de Motifs */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.primary }}>Galerie de Motifs Revisités</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {motifs.map((motif) => (
            <motion.div 
              key={motif.id}
              variants={fadeInUp}
              className="rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
              style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}
              onClick={() => setActiveMotif(activeMotif?.id === motif.id ? null : motif)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={motif.src}
                  alt={motif.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-30 transition duration-500"></div>
              </div>
              
              <div className="p-5 flex-1">
                <h3 className="font-bold text-lg mb-2">{motif.title}</h3>
                <p className="text-sm opacity-80 mb-4">{motif.description}</p>
                
                <div className="flex justify-between items-center text-xs opacity-70">
                  <span>{motif.origin}</span>
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className="px-2 py-1 rounded-full flex items-center"
                    style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                  >
                    <i className="pi pi-info-circle mr-1"></i>
                    Details
                  </motion.span>
                </div>
              </div>

              {/* Modal pour les détails du motif */}
              {activeMotif?.id === motif.id && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
                  onClick={() => setActiveMotif(null)}
                >
                  <motion.div 
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    className="bg-gray-900 rounded-xl max-w-2xl w-full p-6"
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold" style={{ color: colors.primary }}>{motif.title}</h3>
                      <button onClick={() => setActiveMotif(null)} className="text-lg">
                        <i className="pi pi-times"></i>
                      </button>
                    </div>
                    
                    <div className="relative h-64 mb-4">
                      <Image
                        src={motif.src}
                        alt={motif.alt}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    
                    <p className="mb-3">{motif.description}</p>
                    <p className="text-sm opacity-80 mb-2"><strong>Origine:</strong> {motif.origin}</p>
                    <p className="text-sm opacity-80"><strong>Utilisation:</strong> {motif.usage}</p>
                    
                    <div className="mt-6 flex justify-end">
                      <button 
                        onClick={() => setActiveMotif(null)}
                        className="px-4 py-2 rounded-lg"
                        style={{ backgroundColor: colors.primary, color: colors.dark }}
                      >
                        Fermer
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Citations */}
      <motion.section 
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4"
        style={{ backgroundColor: 'rgba(245, 245, 220, 0.05)' }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center mb-12">
            <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
            <h2 className="text-3xl font-bold mx-4" style={{ color: colors.secondary }}>Savoir & Sagesse</h2>
            <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {citations.map((cite, index) => (
              <motion.div 
                key={index}
                variants={fadeInUp}
                className="p-6 rounded-lg group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: 'rgba(10, 10, 10, 0.7)' }}
              >
                <div className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                     style={{ backgroundColor: `${colors.primary}20` }}>
                  <i className="pi pi-quote-left text-xl" style={{ color: colors.primary }}></i>
                </div>
                <p className="italic text-center mb-4 text-lg">{cite.text}</p>
                <p className="text-right text-sm opacity-80 mb-4">— {cite.source}</p>
                <div className="text-xs opacity-60 mt-3">
                  <i className="pi pi-info-circle mr-1"></i>
                  {cite.explanation}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Éducation Culturelle */}
      <motion.section 
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.tertiary }}>Éducation & Innovation Digitale</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
        </div>
        
        <motion.div variants={fadeInUp} className="mb-12">
          <p className="text-lg leading-relaxed mb-6">
            Les motifs Ndop, Wax, Adinkra et autres trésors visuels africains inspirent l&rsquo;UX moderne en apportant 
            des courbes organiques, des couleurs vibrantes et une symbolique riche. Je travaille à intégrer ces 
            éléments dans mes designs pour préserver et valoriser notre héritage face à l&rsquo;uniformisation visuelle occidentale.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {culturalElements.map((element, index) => (
              <div key={index} className="p-6 rounded-lg" style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.primary }}>{element.title}</h3>
                <p className="mb-3 opacity-90">{element.description}</p>
                <p className="text-sm mb-2"><strong>Utilisation dans mes designs:</strong> {element.usage}</p>
                <p className="text-sm opacity-80"><strong>Exemple:</strong> {element.example}</p>
              </div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          variants={fadeInUp}
          className="text-center p-8 rounded-xl"
          style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}
        >
          <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>Contribuez à cette vision</h3>
          <p className="mb-6 max-w-2xl mx-auto">
            Vous avez des connaissances sur les motifs africains ou souhaitez suggérer des éléments culturels à intégrer dans des designs modernes?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 rounded-lg font-semibold"
              style={{ backgroundColor: colors.primary, color: colors.dark }}
            >
              <i className="pi pi-send mr-2"></i>
              Partager une suggestion
            </Link>
          </motion.div>
        </motion.div>
      </motion.section>

      
    </div>
  );
}