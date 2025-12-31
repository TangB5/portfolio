"use client";

import Link from "next/link";
import { motion, useInView,easeOut } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react"; // AJOUT de useState
import "primeicons/primeicons.css";

// Palette de couleurs enrichie
const colors = {
    primary: "#E9B826", // Or africain
    secondary: "#BB141A", // Rouge terre
    tertiary: "#2D5D2A", // Vert forêt
    dark: "#0A0A0A", // Noir profond
    light: "#F5F5DC", // Beige naturel
    accent: "#8A5C2E", // Brun terre
    goldLight: "#F4D35E", // Or clair
};

// Interface pour les solutions (pour la gestion des types avec TypeScript)
interface Solution {
    title: string;
    description: string;
    price: string;
    icon: string;
    features: string[];
    pattern: string;
    fullDescription: string;
    benefits: string[];
    targetAudience: string;
}


export default function Solutions() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });

    // NOUVEL ÉTAT POUR GÉRER LE MODAL
    const [selectedSolution, setSelectedSolution] = useState<Solution | null>(null);


    const solutions: Solution[] = [ // Utilisation de l'interface Solution
        {
            title: "Personnalisation de Motifs Africains",
            description:
                "Créez des visuels uniques avec Ndop, Wax ou Adinkra pour contrer l'influence occidentale.",
            price: "Gratuit (Premium 10 000 FCFA)",
            icon: "pi pi-brush",
            features: [
                "Choix de motifs traditionnels",
                "Personnalisation couleurs/texte",
                "Export basique inclus",
            ],
            pattern: "ndop",
            fullDescription: "Cet outil interactif permet aux utilisateurs de mixer, modifier les couleurs et ajouter du texte aux motifs traditionnels africains (Ndop, Adinkra, Wax, etc.) pour des usages personnels ou professionnels. L'objectif est de fournir des ressources graphiques authentiques et de haute qualité, libres de l'uniformisation visuelle globale.",
            benefits: ["Authenticité visuelle garantie", "Gain de temps dans la création", "Soutien à la valorisation culturelle", "Mises à jour régulières de nouveaux motifs"],
            targetAudience: "Designers graphiques, Créateurs de contenu, PME africaines"
        },
        {
            title: "Standards Visuels Africains",
            description:
                "Adoptez des guidelines innovantes (comme Apple) pour vos designs, inspirées de l'Afrique.",
            price: "25 000 FCFA (licence annuelle)",
            icon: "pi pi-book",
            features: [
                "Guide UX africain (PDF)",
                "Templates prêts à l'emploi",
                "Support communautaire",
            ],
            pattern: "adinkra",
            fullDescription: "Ce guide complet (African Design Guideline) fournit des règles d'UX/UI basées sur l'esthétique, la symbolique et la psychologie des couleurs propres à la culture africaine. Il inclut des principes de navigation inspirés des proverbes et des structures de motifs.",
            benefits: ["Interfaces utilisateur culturellement pertinentes", "Amélioration de l'engagement local", "Accès à une bibliothèque de composants UI/UX", "Mise en œuvre des meilleures pratiques du continent"],
            targetAudience: "Développeurs d'applications, Grandes entreprises, Équipes de produit"
        },
        {
            title: "Sensibilisation Culturelle",
            description:
                "Participez à des ateliers digitaux pour valoriser notre patrimoine face à l'homogénéisation.",
            price: "Gratuit (Donation 5 000 FCFA)",
            icon: "pi pi-users",
            features: [
                "Sessions en ligne",
                "Ressources éducatives",
                "Shoutout pour contributeurs",
            ],
            pattern: "wax",
            fullDescription: "Ateliers et séminaires numériques réguliers visant à éduquer les professionnels et le public sur la richesse des motifs, symboles et couleurs africaines et leur pertinence dans le design moderne. Ces sessions encouragent la collaboration et le partage de connaissances.",
            benefits: ["Augmentation de la culture visuelle africaine", "Réseautage avec des créatifs engagés", "Certificat de participation (pour les sessions payantes)", "Accès à des livres blancs exclusifs"],
            targetAudience: "Étudiants en art/design, Passionnés de culture, Entreprises RSE"
        },
    ];

    // Variants pour les animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: easeOut,
            },
        },
    };

    return (
        <div
            className="min-h-screen py-20 px-6 relative overflow-hidden"
            style={{ backgroundColor: colors.dark, color: colors.light }}
            ref={ref}
        >
            {/* Éléments décoratifs d'arrière-plan */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
                <div className="absolute top-10 left-10 w-72 h-72 rounded-full" style={{ backgroundColor: colors.primary, filter: "blur(80px)" }}></div>
                <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full" style={{ backgroundColor: colors.secondary, filter: "blur(80px)" }}></div>
            </div>

            {/* Motifs culturels en arrière-plan */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
                <svg width="100%" height="100%" className="absolute inset-0">
                    <pattern id="african-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                        <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke={colors.primary} strokeWidth="2"/>
                        <path d="M20,20 C40,40 60,40 80,20" fill="none" stroke={colors.secondary} strokeWidth="1.5"/>
                        <circle cx="50" cy="50" r="10" fill="none" stroke={colors.tertiary} strokeWidth="1"/>
                    </pattern>
                    <rect x="0" y="0" width="100%" height="100%" fill="url(#african-pattern)"></rect>
                </svg>
            </div>

            <motion.div
                className="max-w-6xl mx-auto text-center relative z-10"
                variants={containerVariants}
                initial="hidden"

                animate="visible"
            >
                <motion.div variants={itemVariants} className="mb-4">
                    <div className="inline-flex items-center justify-center p-2 rounded-full mb-2" style={{ backgroundColor: "rgba(233, 184, 38, 0.1)" }}>
            <span className="text-sm uppercase tracking-wider" style={{ color: colors.primary }}>
              Culture & Innovation
            </span>
                    </div>
                </motion.div>

                <motion.h1
                    className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
                    style={{ color: colors.primary }}
                    variants={itemVariants}
                >
                    Réinventons l&rsquo;Expression
                    <br />
                    <span style={{ color: colors.light }}>Visuelle Africaine</span>
                </motion.h1>

                <motion.p
                    className="text-xl opacity-90 max-w-3xl mx-auto mb-16 leading-relaxed"
                    variants={itemVariants}
                >
                    Des outils et services modernes pour préserver et célébrer la culture camerounaise et africaine en 2025.
                    Créons ensemble des standards visuels innovants qui rayonnent à travers le monde.
                </motion.p>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-10"
                    variants={containerVariants}
                >
                    {solutions.map((solution, i) => (
                        <motion.div
                            key={i}
                            className="rounded-2xl overflow-hidden group relative"
                            variants={itemVariants}
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Effet d'ombre portée colorée */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                 style={{
                                     boxShadow: `0 25px 50px -12px ${colors.primary}40`,
                                     zIndex: -1
                                 }}>
                            </div>

                            <div className="h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col relative overflow-hidden">
                                {/* Pattern spécifique selon le type de solution */}
                                <div className={`absolute top-0 right-0 w-32 h-32 opacity-5 ${solution.pattern}-pattern`}></div>

                                <div className="relative z-10 flex flex-col justify-between h-full">
                                    <div>
                                        <div className="flex justify-between items-start mb-6">
                                            <div
                                                className="w-16 h-16 flex items-center justify-center rounded-full text-2xl"
                                                style={{
                                                    backgroundColor: colors.primary,
                                                    color: colors.dark,
                                                    boxShadow: `0 0 0 4px ${colors.primary}20`
                                                }}
                                            >
                                                <i className={solution.icon}></i>
                                            </div>

                                            {/* Indicateur de prix avec effet */}
                                            <div className="text-right">
                        <span className="text-xs uppercase tracking-wide px-2 py-1 rounded-full"
                              style={{ backgroundColor: colors.secondary, color: colors.light }}>
                          Populaire
                        </span>
                                            </div>
                                        </div>

                                        <h2 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors"
                                            style={{ color: colors.light }}>
                                            {solution.title}
                                        </h2>

                                        <p className="mb-6 opacity-80 leading-relaxed">
                                            {solution.description}
                                        </p>

                                        <ul className="space-y-3 mb-8">
                                            {solution.features.map((f, idx) => (
                                                <li key={idx} className="flex items-start">
                                                    <i
                                                        className="pi pi-check-circle mt-1 mr-3 flex-shrink-0"
                                                        style={{ color: colors.primary }}
                                                    ></i>
                                                    <span>{f}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="mt-auto">
                                        <p
                                            className="text-2xl font-bold mb-6 text-center"
                                            style={{ color: colors.primary }}
                                        >
                                            {solution.price}
                                        </p>

                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                                            <button // CHANGÉ DE <Link> À <button>
                                                onClick={() => setSelectedSolution(solution)} // AJOUT DE L'ACTION
                                                className="px-8 py-4 rounded-lg inline-block font-semibold text-center w-full relative z-10
                             bg-[#E9B826] text-[#0A0A0A]
                             hover:shadow-[0_0_20px_#E9B826] transition-shadow duration-300"
                                            >
                                                Découvrir
                                                <i className="pi pi-arrow-right ml-2"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Section d'appel à l'action supplémentaire */}
                <motion.div
                    className="mt-20 p-8 rounded-2xl relative overflow-hidden"
                    style={{ backgroundColor: "rgba(45, 93, 42, 0.1)" }}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.8 }}
                >
                    <div className="absolute inset-0 opacity-5">
                        <svg width="100%" height="100%">
                            <pattern id="circle-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                                <circle cx="10" cy="10" r="2" fill={colors.tertiary} />
                                <circle cx="30" cy="30" r="2" fill={colors.tertiary} />
                            </pattern>
                            <rect x="0" y="0" width="100%" height="100%" fill="url(#circle-pattern)"></rect>
                        </svg>
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold mb-4" style={{ color: colors.primary }}>
                            Rejoignez le Mouvement Culturel
                        </h3>
                        <p className="mb-6 opacity-90">
                            Inscrivez-vous à notre newsletter pour recevoir des motifs exclusifs, des conseils de design
                            et des actualités sur la préservation de notre héritage visuel africain.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="flex-grow px-4 py-3 rounded-lg bg-black bg-opacity-50 border border-gray-700 focus:border-primary outline-none transition-colors"
                            />
                            <button
                                className="px-6 py-3 rounded-lg font-medium whitespace-nowrap"
                                style={{
                                    backgroundColor: colors.secondary,
                                    color: colors.light,
                                }}
                            >
                                S&rsquo;inscrire <i className="pi pi-send ml-2"></i>
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>

            {/* ------------------------------------------- */}
            {/* MODAL DE DÉTAILS */}
            {/* ------------------------------------------- */}
            {selectedSolution && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedSolution(null)} // Ferme en cliquant à l'extérieur
                >
                    <motion.div
                        initial={{ y: 50, scale: 0.9 }}
                        animate={{ y: 0, scale: 1 }}
                        exit={{ y: 50, scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 100 }}
                        className="bg-gray-900 rounded-2xl max-w-3xl w-full p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()} // Empêche la fermeture au clic interne
                        style={{ border: `2px solid ${colors.primary}` }}
                    >
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-3xl font-bold" style={{ color: colors.primary }}>
                                {selectedSolution.title}
                            </h2>
                            <button
                                onClick={() => setSelectedSolution(null)}
                                className="text-2xl hover:text-secondary transition-colors"
                            >
                                <i className="pi pi-times"></i>
                            </button>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg opacity-90 leading-relaxed">
                                {selectedSolution.fullDescription}
                            </p>

                            {/* Prix et icône */}
                            <div className="flex items-center space-x-4 p-4 rounded-xl" style={{ backgroundColor: 'rgba(233, 184, 38, 0.1)' }}>
                                <div className="text-3xl" style={{ color: colors.primary }}>
                                    <i className={selectedSolution.icon}></i>
                                </div>
                                <div>
                                    <p className="text-sm opacity-70">Tarification</p>
                                    <p className="text-2xl font-extrabold" style={{ color: colors.goldLight }}>{selectedSolution.price}</p>
                                </div>
                            </div>

                            {/* Avantages détaillés */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.secondary }}>
                                    <i className="pi pi-bolt mr-2"></i> Avantages Clés
                                </h3>
                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {selectedSolution.benefits.map((benefit, idx) => (
                                        <li key={idx} className="flex items-start text-sm">
                                            <i className="pi pi-star-fill mt-1 mr-3 flex-shrink-0" style={{ color: colors.tertiary }}></i>
                                            <span>{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Public Cible */}
                            <div>
                                <h3 className="text-xl font-semibold mb-3" style={{ color: colors.secondary }}>
                                    <i className="pi pi-users mr-2"></i> Public Cible
                                </h3>
                                <p className="p-3 rounded-lg text-sm italic" style={{ backgroundColor: 'rgba(10, 10, 10, 0.5)' }}>
                                    {selectedSolution.targetAudience}
                                </p>
                            </div>
                        </div>

                        {/* Bouton de Contact au bas du modal */}
                        <div className="mt-8 text-center">
                            <Link
                                href="/CONTACT"
                                className="px-8 py-3 rounded-lg inline-block font-semibold text-center relative z-10"
                                style={{ backgroundColor: colors.primary, color: colors.dark }}
                                onClick={() => setSelectedSolution(null)} // Ferme le modal après avoir cliqué sur le lien
                            >
                                Passer à l&rsquo;action maintenant <i className="pi pi-arrow-right ml-2"></i>
                            </Link>
                        </div>

                    </motion.div>
                </motion.div>
            )}

        </div>
    );
}