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

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par Formspree ou autre)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      // Reset du statut après 5 secondes
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 2000);
  };


  const contactMethods = [
    {
      icon: 'pi-envelope',
      label: 'Email',
      value: 'kingtang337@gmail.com',
      link: 'mailto:kingtang337@gmail.com',
      color: colors.primary
    },
    {
      icon: 'pi-whatsapp',
      label: 'WhatsApp',
      value: '+237 653 53 91 02',
      link: 'https://wa.me/237 653 53 91 02',
      color: '#25D366'
    },
    {
      icon: 'pi-map-marker',
      label: 'Localisation',
      value: 'Cameroun, Afrique',
      link: '#',
      color: colors.secondary
    }
  ];

  const socialNetworks = [
    { icon: 'linkedin', url: 'https://www.linkedin.com/in/ndoh-yannick-tang-5b004934a', label: 'LinkedIn' },
    { icon: 'github', url: 'https://github.com/TangB5', label: 'GitHub' },
    { icon: 'instagram', url: 'https://www.instagram.com/kingtang337', label: 'instagram' },
    { icon: 'facebook', url: 'https://twitter.com/kingtang', label: 'facebook' }
  ];

  return (
    <div className="min-h-screen relative" style={{ backgroundColor: colors.dark, color: colors.light }}>
     

      {/* Hero Section Contact */}
      <div className="pt-28 pb-16 px-4 text-center relative overflow-hidden">
        <Plan/>
        
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-playfair font-bold mb-6 relative z-10"
          style={{ color: colors.primary }}
        >
          Travaillons Ensemble
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl max-w-2xl mx-auto mb-10 relative z-10"
        >
          {`Discutons de votre projet et créons quelque chose d'extraordinaire qui célèbre l'innovation et le patrimoine africain`}
        </motion.p>
      </div>

      {/* Section Contact Principale */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={staggerContainer}
        className="py-16 px-4 max-w-6xl mx-auto"
      >
        <div className="grid md:grid-cols-2 gap-12">
          {/* Formulaire de Contact */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
              <h2 className="text-2xl font-bold mx-4" style={{ color: colors.primary }}>Envoyez un message</h2>
              <div className="flex-1 h-0.5" style={{ backgroundColor: colors.primary }}></div>
            </div>
            
            <form
              onSubmit={handleSubmit}
              className="p-8 rounded-xl shadow-2xl"
              style={{ backgroundColor: 'rgba(245, 245, 220, 0.05)' }}
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Nom complet *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border transition-colors"
                  style={{ 
                    backgroundColor: 'rgba(245, 245, 220, 0.1)', 
                    borderColor: 'rgba(233, 184, 38, 0.3)',
                    color: colors.light
                  }}
                  required
                  placeholder="Votre nom"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Adresse email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg border transition-colors"
                  style={{ 
                    backgroundColor: 'rgba(245, 245, 220, 0.1)', 
                    borderColor: 'rgba(233, 184, 38, 0.3)',
                    color: colors.light
                  }}
                  required
                  placeholder="votre@email.com"
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full p-3 rounded-lg border transition-colors"
                  style={{ 
                    backgroundColor: 'rgba(245, 245, 220, 0.1)', 
                    borderColor: 'rgba(233, 184, 38, 0.3)',
                    color: colors.light
                  }}
                  required
                  placeholder="Parlez-moi de votre projet..."
                ></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center transition-all"
                style={{ 
                  backgroundColor: isSubmitting ? '#888' : colors.primary,
                  color: colors.dark
                }}
              >
                {isSubmitting ? (
                  <>
                    <i className="pi pi-spin pi-spinner mr-2"></i>
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <i className="pi pi-send mr-2"></i>
                    Envoyer le message
                  </>
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-3 rounded-lg text-center"
                  style={{ backgroundColor: `${colors.tertiary}30`, color: colors.light }}
                >
                  <i className="pi pi-check-circle mr-2" style={{ color: colors.tertiary }}></i>
                  Message envoyé avec succès ! Je vous répondrai très soon.
                </motion.div>
              )}
            </form>
          </motion.div>

          {/* Informations de Contact */}
          <motion.div variants={fadeInUp}>
            <div className="flex items-center mb-8">
              <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
              <h2 className="text-2xl font-bold mx-4" style={{ color: colors.secondary }}>Autres moyens</h2>
              <div className="flex-1 h-0.5" style={{ backgroundColor: colors.secondary }}></div>
            </div>
            
            <div className="space-y-6 mb-10">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  target={method.icon !== 'pi-map-marker' ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 5 }}
                  className="flex items-center p-4 rounded-xl transition-all group"
                  style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}
                >
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: `${method.color}20` }}
                  >
                    <i className={`pi ${method.icon} text-xl`} style={{ color: method.color }}></i>
                  </div>
                  <div>
                    <div className="font-medium" style={{ color: method.color }}>{method.label}</div>
                    <div className="text-sm opacity-80">{method.value}</div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Réseaux Sociaux */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4" style={{ color: colors.primary }}>Suivez-moi</h3>
              <div className="flex flex-wrap gap-3">
                {socialNetworks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                    style={{ backgroundColor: 'rgba(245, 245, 220, 0.1)' }}
                    aria-label={social.label}
                  >
                    <i className={`pi pi-${social.icon}`} style={{ color: colors.primary }}></i>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Message d'inspiration */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="p-6 rounded-xl text-center mt-8"
              style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}
            >
              <i className="pi pi-heart text-xl mb-2 block" style={{ color: colors.secondary }}></i>
              <p className="font-playfair italic mb-2">{`"Merci, ensemble préservons l'Afrique !"`}</p>
              <p className="text-sm opacity-75">Chaque projet est une occasion de célébrer notre héritage culturel</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Section FAQ */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="py-16 px-4 max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-12">
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
          <h2 className="text-3xl font-bold mx-4" style={{ color: colors.tertiary }}>Questions Fréquentes</h2>
          <div className="flex-1 h-0.5" style={{ backgroundColor: colors.tertiary }}></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              question: "Proposez-vous des consultations gratuites?",
              answer: "Oui, je propose une consultation initiale de 30 minutes pour discuter de votre projet et voir comment nous pouvons collaborer."
            },
            {
              question: "Travaillez-vous avec des clients internationaux?",
              answer: "Absolument! Je travaille avec des clients du monde entier. Les différences culturelles enrichissent nos collaborations."
            },
            {
              question: "Combien de temps pour un projet typical?",
              answer: "Cela dépend de la complexité. Un site vitrine peut prendre 2-4 semaines, tandis qu'une application complète peut nécessiter 2-3 mois."
            },
            {
              question: "Intégrez-vous vraiment des éléments culturels?",
              answer: "Oui, c'est ma spécialité! Je travaille avec vous pour intégrer des motifs, symboles et esthétiques africains authentiques dans des designs modernes."
            }
          ].map((faq, index) => (
            <div key={index} className="p-5 rounded-lg" style={{ backgroundColor: 'rgba(245, 245, 220, 0.03)' }}>
              <h3 className="font-semibold mb-2 flex items-center">
                <i className="pi pi-question-circle mr-2" style={{ color: colors.primary }}></i>
                {faq.question}
              </h3>
              <p className="text-sm opacity-80">{faq.answer}</p>
            </div>
          ))}
        </div>
      </motion.section>

      
    </div>
  );
}