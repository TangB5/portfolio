'use client'
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'primeicons/primeicons.css';
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
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
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

export default function About() {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
     

      {/* Hero Section À Propos */}
      <div className="pt-24 pb-16 px-4 text-center relative overflow-hidden">
        {/* Arrière-plan avec motif Adinkra */}
       <Plan/>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-playfair font-bold mb-6 relative z-10"
          style={{ color: colors.primary }}
        >
          Mon Histoire
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative w-40 h-40 mx-auto mb-6">
            <Image
              src="/images/profil.jpg"
              alt="KingTang"
              fill
              className="rounded-full object-cover border-4"
              style={{ borderColor: colors.primary }}
            />
            <div className="absolute -inset-4 border-2 border-dashed rounded-full animate-spin-slow" 
                 style={{ borderColor: colors.secondary }}></div>
          </div>
          
          <motion.blockquote 
            className="text-xl italic mb-8 px-6 py-4 rounded-lg relative z-10"
            style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <i className="pi pi-quote-left absolute top-2 left-3 opacity-50" style={{ color: colors.primary }}></i>
            {`"Think different. Act different. Be original."`}
            <i className="pi pi-quote-right absolute bottom-2 right-3 opacity-50" style={{ color: colors.primary }}></i>
          </motion.blockquote>
        </motion.div>
      </div>

      {/* Section Parcours */}
      <motion.section 
        ref={ref1}
        initial="hidden"
        animate={inView1 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.primary }}>Mon Parcours</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
        </div>
        
        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8 items-center mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Formation & Développement</h3>
            <p className="text-lg leading-relaxed mb-4">
              {`Je suis un ex-étudiant en licence, stagiaire académique, passionné par le frontend development, 
              l'UX design et le full-stack en progression. Mon voyage a commencé avec des projets académiques 
              en Angular et Next.js.`}
            </p>
            <p className="text-lg leading-relaxed">
              {`Je me spécialise dans des designs inspirés de la culture africaine pour créer des expériences 
              digitales authentiques et contrer l'uniformité visuelle occidentale.`}
            </p>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image
              src="/coding-african.jpg"
              alt="Développement inspiré de la culture africaine"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
            <div className="absolute bottom-4 left-4 text-sm grid grid-cols-4 gap-4">
               <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.primary, color: colors.dark }}>Html</span>
              <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.secondary, color: colors.light }}>tailwindcsc</span>
              <span className=" rounded-full p-1 md:p-2 text-center" style={{ backgroundColor: colors.tertiary, color: colors.light }}>javascript</span>
              <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.primary, color: colors.dark }}>Next.js</span>
              <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.secondary, color: colors.light }}>Angular</span>
              <span className=" rounded-full p-1 md:p-2 text-center" style={{ backgroundColor: colors.tertiary, color: colors.light }}>UX Design</span>
              <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.primary, color: colors.dark }}>photoshop</span>
              <span className=" rounded-full  p-1 md:p-2 text-center" style={{ backgroundColor: colors.secondary, color: colors.light }}>canva</span>

            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={fadeIn} className="relative">
          {/* Ligne de timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 transform -translate-x-1/2" style={{ backgroundColor: colors.primary }}></div>
          
          {[
            { year: "2022", title: "Début en Développement", desc: "Premiers projets académiques avec HTML/CSS , PHP , MySQL " },
            { year: "2023", title: "prise de contacte et manipulation du concepte de framework", desc: "Approfondissement de HTML/CSS javascript Tailwincss" },
            { year: "2024", title: "specialisation en frontend", desc: "Appronfondissement javascript et adaptation a nextjs et Angular" },
            { year: "2024", title: "Intégration Culturelle", desc: "Fusion des designs modernes et patrimoine africain prise de contact avec des logiciel de design photoshop , canva" },
            { year: "2025", title: "Début en backend", desc: "Premier projet avec ExpressJs et mongoDB" },
            { year: "2025", title: "Innovation Culturelle", desc: "Développement de projets à identité africaine forte" }
          ].map((item, index) => (
            <div key={index} className="relative pl-20 pb-10">
              <div className="absolute left-4 transform -translate-x-1/2 w-4 h-4 rounded-full" style={{ backgroundColor: colors.primary }}></div>
              <div className="bg-opacity-10 p-6 rounded-lg" style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}>
                <span className="text-sm font-semibold px-3 py-1 rounded-full mb-2 inline-block" style={{ backgroundColor: colors.primary, color: colors.dark }}>
                  {item.year}
                </span>
                <h4 className="text-xl font-semibold mb-2">{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.section>

      {/* Section Valeurs */}
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
            <h2 className="text-3xl font-bold mx-4" style={{ color: colors.secondary }}>Mes Valeurs</h2>
            <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: 'pi-flag-fill', 
                title: 'Fierté culturelle', 
                desc: 'Intégration des motifs Adinkra et symboles africains dans mes designs',
                color: colors.primary
              },
              { 
                icon: 'pi-bolt', 
                title: 'Innovation digitale', 
                desc: 'Création de solutions modernes avec une identité visuelle unique',
                color: colors.secondary
              },
              { 
                icon: 'pi-heart', 
                title: 'Authenticité', 
                desc: 'Designs qui racontent une histoire et honorent leurs origines',
                color: colors.tertiary
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="text-center p-6 rounded-lg group cursor-pointer transition-all duration-300 hover:-translate-y-2"
                style={{ backgroundColor: 'rgba(10, 10, 10, 0.7)' }}
              >
                <div className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                     style={{ backgroundColor: `${value.color}20` }}>
                  <i className={`pi ${value.icon} text-2xl`} style={{ color: value.color }}></i>
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ color: value.color }}>{value.title}</h3>
                <p className="opacity-80">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Section Expertise */}
      <motion.section 
        ref={ref3}
        initial="hidden"
        animate={inView3 ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.tertiary }}>Mon Expertise</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
        </div>
        
        <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Compétences Techniques</h3>
            
            {[{ skill: 'HTML/CSS', level: 90, color: colors.primary },
              { skill: 'TAILWIN DCSS', level: 80, color: colors.secondary },
              { skill: 'JAVASCRIPT', level: 75, color: colors.tertiary },
              { skill: 'Next.js/React', level: 70, color: colors.primary },
              { skill: 'UX/UI Design', level: 80, color: colors.secondary },
              { skill: 'Angular', level: 75, color: colors.tertiary },
              { skill: 'Design Culturel', level: 90, color: colors.primary },
              { skill: 'canva', level: 75, color: colors.tertiary },
              { skill: 'photoshop', level: 70, color: colors.primary },
              { skill: 'Express', level: 30, color: colors.secondary },
              { skill: 'MongoDb', level: 30, color: colors.secondary },


            ].map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-1">
                  <span>{item.skill}</span>
                  <span>{item.level}%</span>
                </div>
                <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={inView3 ? { width: `${item.level}%` } : { width: 0 }}
                    transition={{ delay: index * 0.2, duration: 1 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  ></motion.div>
                </div>
              </div>
            ))}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Approche Unique</h3>
            <p className="mb-4 text-lg leading-relaxed">
              Je combine les meilleures pratiques du développement frontend avec les richesses visuelles 
              du patrimoine africain pour créer des expériences digitales qui marquent les esprits.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {['Mobile-First', 'Responsive', 'Accessibilité', 'Performance'].map((item, index) => (
                <div key={index} className="flex items-center">
                  <i className="pi pi-check-circle mr-2" style={{ color: colors.primary }}></i>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 px-4 text-center" style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.primary }}>Travaillons Ensemble</h2>
          <p className="text-xl mb-8">
            Vous souhaitez un projet qui allie expertise technique et identité culturelle unique?
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg"
              style={{ backgroundColor: colors.primary, color: colors.dark }}
            >
              <i className="pi pi-send mr-2"></i>
              Me contacter
            </Link>
          </motion.div>
        </motion.div>
      </section>

      
    </div>
  );
}