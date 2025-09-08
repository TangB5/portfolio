'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import 'primeicons/primeicons.css';
import { easeOut } from "framer-motion";
import Plan from '../component/arrierplan';




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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5 }
  }
};

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });

  const projects = [
    {
      id: 1,
      title: 'MarketPlace Africaine "AfroShop"',
      description: 'Plateforme e-commerce mettant en avant l\'artisanat local avec une interface moderne inspirée des textiles africains. Intègre un système de paiement adapté aux marchés africains.',
      image: '/afroshop-project.jpg',
      link: 'https://afroshop.vercel.app',
      github: 'https://github.com/kingtang/afroshop',
      tech: ['Next.js', 'Tailwind CSS', 'Stripe', 'Node.js'],
      category: 'web',
      featured: true
    },
    {
      id: 2,
      title: 'Application "Culture Cameroun"',
      description: 'Application éducative immersive explorant les richesses culturelles du Cameroun. Contient des galeries visuelles, des documents historiques et des expériences interactives.',
      image: '/images',
      link: 'https://culture-cameroun.vercel.app',
      github: 'https://github.com/kingtang/culture-cameroun',
      tech: ['html', 'tailwindcss', 'Framer Motion','Nextjs'],
      category: 'mobile',
      featured: true
    },
    {
      id: 3,
      title: 'Identité Visuelle "Ngano Fashion"',
      description: 'Direction artistique complète pour une marque de mode africaine contemporaine. Logo, palette de couleurs, packaging et site web avec design inspiré des motifs Adinkra.',
      image: '/ngano-fashion.jpg',
      link: 'https://behance.net/kingtang/ngano-fashion',
      github: '',
      tech: ['Adobe Suite', 'Branding', 'UI Design', 'Illustration'],
      category: 'design',
      featured: true
    },
    {
      id: 4,
      title: 'Mini-site "Culture Africa"',
      description: 'Site interactif pour explorer et promouvoir la culture africaine à travers des animations et récits visuels. Intègre une carte interactive des traditions africaines.',
      image: '/images/mvp.png',
      link: 'https://cultureafricaine.vercel.app',
      github: 'https://github.com/TangB5/mvp',
      tech: ['Next.js', 'Tailwind CSS', 'html/css'],
      category: 'web'
    },
    {
      id: 5,
      title: 'Customizer de Visuels Africains',
      description: 'Outil web permettant de personnaliser des designs avec motifs africains authentiques. Export en haute résolution pour supports print et digitaux.',
      image: '/african-patterns.jpg',
      link: 'https://african-customizer.vercel.app',
      github: 'https://github.com/kingtang/african-customizer',
      tech: ['Next.js', 'Fabric.js', 'Canvas API'],
      category: 'web'
    },
    {
      id: 6,
      title: 'Projet Académique "Angular Commerce"',
      description: 'Application e-commerce développée avec Angular dans un cadre académique, avec une attention particulière aux performances et à l\'expérience utilisateur.',
      image: '/angular-project.jpg',
      link: 'https://github.com/kingtang/angular-project',
      github: 'https://github.com/kingtang/angular-project',
      tech: ['Angular', 'TypeScript', 'RxJS'],
      category: 'web'
    },
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  const categories = [
    { id: 'all', name: 'Tous les projets', icon: 'pi pi-th-large' },
    { id: 'web', name: 'Développement Web', icon: 'pi pi-desktop' },
    { id: 'mobile', name: 'Mobile', icon: 'pi pi-mobile' },
    { id: 'design', name: 'Design', icon: 'pi pi-palette' },
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
     

      {/* Hero Section Projets */}
      <div className="pt-28 pb-16 px-4 text-center relative overflow-hidden">
        {/* Arrière-plan avec motif Adinkra */}
        <Plan/>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair font-bold mb-6 relative z-10"
          style={{ color: colors.primary }}
        >
          Mes Réalisations
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl max-w-2xl mx-auto mb-10 relative z-10"
        >
          Découvrez des projets qui fusionnent expertise technique et richesses culturelles africaines
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex justify-center mb-16  relative z-10 bg-primary-black/50 md:bg-none "
        >
          <div className="inline-flex rounded-lg relative z-10 p-1" style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)' }}>
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-md text-sm font-medium flex items-center  transition-all ${filter === category.id ? 'bg-opacity-20' : ''}`}
                style={{ 
                  backgroundColor: filter === category.id ? `${colors.primary}30` : 'transparent',
                  color: filter === category.id ? colors.primary : colors.light
                }}
              >
                <i className={`${category.icon} mr-2`}></i>
                <div className="hidden md:flex">{category.name}</div>
                
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Section Projets en Vedette */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-10 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.primary }}>Projets en Vedette</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.filter(p => p.featured).map((project, index) => (
            <motion.div 
              key={project.id}
              variants={fadeInUp}
              className="rounded-2xl overflow-hidden shadow-2xl group relative"
              style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}
            >
              <div className="md:flex">
                <div className="md:flex-1 relative h-80 md:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 md:hidden"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex items-end p-6">
                    <div className="flex space-x-3">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-xs"
                          style={{ backgroundColor: colors.primary, color: colors.dark }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:flex-1 p-8 flex flex-col justify-center">
                  <div>
                    <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                    <p className="mb-6 opacity-90 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-3 py-1 rounded-full text-xs hidden md:inline-block"
                          style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex space-x-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="md:px-5 py-2 rounded-lg font-medium flex items-center px-2"
                        style={{ backgroundColor: colors.primary, color: colors.dark }}
                      >
                        <i className="pi pi-external-link mr-2"></i>
                        Voir le projet
                      </motion.a>
                      
                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-5 py-2 rounded-lg font-medium flex items-center border"
                          style={{ borderColor: colors.primary, color: colors.primary }}
                        >
                          <i className="pi pi-github mr-2"></i>
                          Code source
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Section Tous les Projets */}
      <motion.section 
        ref={ref2}
        initial="hidden"
        animate={inView2 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-7xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.secondary }}>Tous mes Projets</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.filter(p => !p.featured).map((project, index) => (
            <motion.div 
              key={project.id}
              variants={scaleUp}
              className="rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col"
              style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-30 transition duration-500"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-2 py-1 rounded text-xs capitalize"
                        style={{ backgroundColor: colors.primary, color: colors.dark }}>
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="font-bold text-lg mb-2">{project.title}</h3>
                <p className="text-sm opacity-80 mb-4 flex-1">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech, i) => (
                    <span 
                      key={i} 
                      className="px-2 py-1 rounded-full text-xs"
                      style={{ backgroundColor: `${colors.primary}20`, color: colors.primary }}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 rounded-full text-xs"
                          style={{ backgroundColor: `${colors.secondary}20`, color: colors.secondary }}>
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
                
                <div className="flex justify-between items-center">
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 5 }}
                    className="text-sm font-medium flex items-center"
                    style={{ color: colors.primary }}
                  >
                    Voir le projet <i className="pi pi-arrow-right ml-1"></i>
                  </motion.a>
                  
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2 }}
                      className="text-lg"
                      style={{ color: colors.light }}
                    >
                      <i className="pi pi-github"></i>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-20 px-4 text-center" style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>Un Projet en Tête?</h2>
          <p className="text-xl mb-8">
            Discutons de la création d&rsquo;une solution unique qui marie innovation technique et identité culturelle.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex justify-center gap-4"
          >
            <Link 
              href="/CONTACT" 
              className="inline-flex items-center md:px-8 md:py-4 rounded-lg font-semibold text-lg py-1 px-1"
              style={{ backgroundColor: colors.primary, color: colors.dark }}
            >
              <i className="pi pi-send mr-2"></i>
              Me contacter
            </Link>
            <Link 
              href="/CULTURE" 
              className="inline-flex items-center md:px-8 py-4 rounded-lg font-semibold text-lg border px-4"
              style={{ borderColor: colors.primary, color: colors.primary }}
            >
              <i className="pi pi-compass mr-2"></i>
              Voir ma vision
            </Link>
          </motion.div>
        </motion.div>
      </section>

      
    </div>
  );
}