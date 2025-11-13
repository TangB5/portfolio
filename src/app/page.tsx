'use client'
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'primeicons/primeicons.css';

const colors = {
  primary: '#E9B826', // Or africain
  secondary: '#BB141A', // Rouge terre
  tertiary: '#2D5D2A', // Vert forêt
  dark: '#0A0A0A',   // Noir profond
  light: '#F5F5DC'   // Beige naturel
};

export default function Home() {
  // Animation pour le slogan
  const sloganVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
      {/* Header avec motif africain */}



      {/* Hero Section avec animation du slogan */}
      <main className="flex flex-col items-center h-screen text-center px-4 relative overflow-hidden">
        {/* Arrière-plan avec motif Adinkra */}

        <div className="absolute inset-0 opacity-100 z-0">
          <div className="absolute top-20 left-10 w-20 h-20" style={{
            backgroundImage: "url('/images/image1.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 0 2px white)' // contour lumineux
          }}></div>
          <div className="absolute bottom-10 right-10 w-20 h-20" style={{
            backgroundImage: "url('/images/image1.png')",
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'drop-shadow(0 0 5px white)' // contour lumineux
          }}></div>
        </div>
        <div className="flex flex-col justify-center items-center z-10 relative h-full mt-40">
          <motion.div>
          <Image
            src="/profil.png"
            alt="KingTang Logo"
            width={1070}
            height={1070}
            className="object-cover object-center "
            priority
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >

          

          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Frontend Developer | UX Designer | Innovateur Culturel
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/projects"
              className="px-8 py-3 rounded-lg inline-block font-semibold"
              style={{ backgroundColor: colors.primary, color: colors.dark }}
            >
              Découvrir mes projets
            </Link>
          </motion.div>
        </motion.div>
        </div>

        
<div className="w-full flex justify-center items-center">
        {/* Indicateur de défilement */}
        <motion.div
          className="absolute bottom-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <i className="pi pi-arrow-down text-2xl" style={{ color: colors.primary }}></i>
        </motion.div>
      </div>

      </main>
      

      {/* Section Projets avec aperçus interactifs */}
      <section className="py-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12" style={{ color: colors.primary }}>
          Mes Projets Innovants
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "MarketPlace Africaine",
              description: "Plateforme e-commerce mettant en avant l'artisanat local",
              tags: ["React", "Node.js", "UI/UX"],
              image: "/projet1.jpg"
            },
            {
              title: "SITE vitrine Culture AFRICAINE",
              description: "site éducative sur les proverbes AFRICAIN",
              tags: ["HTML", "TAILWINDCSS", "NEXTJS"],
              image: "/images/project.png"
            },
            {
              title: "Visual Identity Branding",
              description: "Identité visuelle pour une marque de mode africaine",
              tags: ["Branding", "Illustration", "UI Design"],
              image: "/projet3.jpg"
            }
          ].map((projet, index) => (
            <motion.div
              key={index}
              className="rounded-lg overflow-hidden shadow-lg group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)' }}
            >
              <div className="h-48 relative overflow-hidden">
                <Image
                  src={projet.image}
                  alt={projet.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="px-4 py-2 rounded" style={{ backgroundColor: colors.primary, color: colors.dark }}>
                    Voir le projet
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{projet.title}</h3>
                <p className="mb-3 opacity-80">{projet.description}</p>
                <div className="flex flex-wrap gap-2">
                  {projet.tags.map(tag => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: colors.secondary, color: colors.light }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center px-6 py-3 rounded-lg font-medium"
            style={{ backgroundColor: 'transparent', border: `2px solid ${colors.primary}`, color: colors.primary }}
          >
            Voir tous mes projets
            <i className="pi pi-arrow-right ml-2"></i>
          </Link>
        </div>
      </section>

      {/* Section Culture */}
      <section className="py-20 px-4" style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.tertiary }}>
            Innovation Culturelle & Identité Africaine
          </h2>
          <p className="text-xl mb-8 leading-relaxed">
            Je mets l&rsquo;art et la culture africaine au cœur de mes créations digitales,
            combinant techniques modernes et patrimoine visuel pour une expérience unique.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            {['Cameroun', 'Art', 'Tradition', 'Innovation'].map((item, i) => (
              <motion.div
                key={i}
                className="p-4 rounded-lg flex items-center justify-center flex-col"
                whileHover={{ scale: 1.05 }}
                style={{ backgroundColor: colors.dark }}
              >
                <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: colors.primary }}>
                  <i className={`pi pi-${i === 0 ? 'flag' : i === 1 ? 'palette' : i === 2 ? 'history' : 'lightbulb'}`}></i>
                </div>
                <span className="font-medium">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/culture"
              className="px-8 py-3 rounded-lg inline-flex items-center font-semibold"
              style={{ backgroundColor: colors.tertiary, color: colors.light }}
            >
              <i className="pi pi-compass mr-2"></i>
              Explorer ma vision culturelle
            </Link>
          </motion.div>
        </div>
      </section>


    </div>
  );
}