(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/CULTURE/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Culture
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-intersection-observer/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Couleurs inspirées de l'art africain
const colors = {
    primary: '#E9B826',
    secondary: '#BB141A',
    tertiary: '#2D5D2A',
    dark: '#0A0A0A',
    light: '#F5F5DC' // Beige naturel
};
// Animation variants
const fadeInUp = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"]
        }
    }
};
const staggerContainer = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};
function Culture() {
    _s();
    const [activeMotif, setActiveMotif] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [ref, inView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    const [ref2, inView2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
    const [ref3, inView3] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])({
        triggerOnce: true,
        threshold: 0.1
    });
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
        }
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
        }
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen relative",
        style: {
            backgroundColor: colors.dark,
            color: colors.light
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-28 pb-16 px-4 text-center relative overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 opacity-5 z-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-20 left-10 w-24 h-24",
                                style: {
                                    backgroundImage: "url('/adinkra-sankofa.svg')",
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 160,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-20 right-10 w-24 h-24",
                                style: {
                                    backgroundImage: "url('/adinkra-dwennimmen.svg')",
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-1/2 left-1/4 w-16 h-16",
                                style: {
                                    backgroundImage: "url('/adinkra-akoma.svg')",
                                    backgroundSize: 'contain',
                                    backgroundRepeat: 'no-repeat'
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 162,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        initial: {
                            opacity: 0,
                            y: -20
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-5xl md:text-6xl font-playfair font-bold mb-6",
                        style: {
                            color: colors.primary
                        },
                        children: "Racines & Innovation"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        initial: {
                            opacity: 0
                        },
                        animate: {
                            opacity: 1
                        },
                        transition: {
                            delay: 0.3,
                            duration: 0.8
                        },
                        className: "text-xl max-w-3xl mx-auto mb-10",
                        children: "Découvrez comment le patrimoine visuel africain inspire des designs digitaux contemporains et authentiques"
                    }, void 0, false, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        animate: {
                            opacity: 1,
                            scale: 1
                        },
                        transition: {
                            delay: 0.5,
                            duration: 0.5
                        },
                        className: "inline-flex items-center px-6 py-3 rounded-full",
                        style: {
                            backgroundColor: 'rgba(233, 184, 38, 0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                className: "pi pi-compass mr-2",
                                style: {
                                    color: colors.primary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 191,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Exploration culturelle"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 192,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CULTURE/page.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: ref,
                initial: "hidden",
                animate: inView ? "visible" : "hidden",
                variants: staggerContainer,
                className: "py-16 px-4 max-w-7xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-0.5",
                                style: {
                                    backgroundColor: colors.primary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 205,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mx-4",
                                style: {
                                    color: colors.primary
                                },
                                children: "Galerie de Motifs Revisités"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 206,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-0.5",
                                style: {
                                    backgroundColor: colors.primary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 207,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 204,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
                        children: motifs.map((motif)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: fadeInUp,
                                className: "rounded-xl overflow-hidden group cursor-pointer h-full flex flex-col",
                                style: {
                                    backgroundColor: 'rgba(245, 245, 220, 0.03)'
                                },
                                onClick: ()=>setActiveMotif((activeMotif === null || activeMotif === void 0 ? void 0 : activeMotif.id) === motif.id ? null : motif),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative h-48 overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                src: motif.src,
                                                alt: motif.alt,
                                                fill: true,
                                                className: "object-cover group-hover:scale-110 transition duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 220,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-30 transition duration-500"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 226,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                        lineNumber: 219,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-5 flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "font-bold text-lg mb-2",
                                                children: motif.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 230,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-80 mb-4",
                                                children: motif.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 231,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex justify-between items-center text-xs opacity-70",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: motif.origin
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                        whileHover: {
                                                            scale: 1.1
                                                        },
                                                        className: "px-2 py-1 rounded-full flex items-center",
                                                        style: {
                                                            backgroundColor: "".concat(colors.primary, "20"),
                                                            color: colors.primary
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "pi pi-info-circle mr-1"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                                lineNumber: 240,
                                                                columnNumber: 21
                                                            }, this),
                                                            "Details"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 233,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                        lineNumber: 229,
                                        columnNumber: 15
                                    }, this),
                                    (activeMotif === null || activeMotif === void 0 ? void 0 : activeMotif.id) === motif.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        initial: {
                                            opacity: 0
                                        },
                                        animate: {
                                            opacity: 1
                                        },
                                        className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4",
                                        onClick: ()=>setActiveMotif(null),
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                scale: 0.9
                                            },
                                            animate: {
                                                scale: 1
                                            },
                                            className: "bg-gray-900 rounded-xl max-w-2xl w-full p-6",
                                            onClick: (e)=>e.stopPropagation(),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex justify-between items-start mb-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: "text-xl font-bold",
                                                            style: {
                                                                color: colors.primary
                                                            },
                                                            children: motif.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                                            lineNumber: 261,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            onClick: ()=>setActiveMotif(null),
                                                            className: "text-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                className: "pi pi-times"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                                lineNumber: 263,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                                            lineNumber: 262,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative h-64 mb-4",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        src: motif.src,
                                                        alt: motif.alt,
                                                        fill: true,
                                                        className: "object-cover rounded-lg"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 268,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 267,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mb-3",
                                                    children: motif.description
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 276,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm opacity-80 mb-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Origine:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                                            lineNumber: 277,
                                                            columnNumber: 60
                                                        }, this),
                                                        " ",
                                                        motif.origin
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 277,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm opacity-80",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Utilisation:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                                            lineNumber: 278,
                                                            columnNumber: 55
                                                        }, this),
                                                        " ",
                                                        motif.usage
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 278,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-6 flex justify-end",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setActiveMotif(null),
                                                        className: "px-4 py-2 rounded-lg",
                                                        style: {
                                                            backgroundColor: colors.primary,
                                                            color: colors.dark
                                                        },
                                                        children: "Fermer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 281,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 254,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                        lineNumber: 248,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, motif.id, true, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 212,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 210,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CULTURE/page.tsx",
                lineNumber: 197,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: ref2,
                initial: "hidden",
                animate: inView2 ? "visible" : "hidden",
                variants: staggerContainer,
                className: "py-16 px-4",
                style: {
                    backgroundColor: 'rgba(245, 245, 220, 0.05)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center mb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-0.5",
                                    style: {
                                        backgroundColor: colors.secondary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                    lineNumber: 308,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-3xl font-bold mx-4",
                                    style: {
                                        color: colors.secondary
                                    },
                                    children: "Savoir & Sagesse"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                    lineNumber: 309,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 h-0.5",
                                    style: {
                                        backgroundColor: colors.secondary
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                    lineNumber: 310,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/CULTURE/page.tsx",
                            lineNumber: 307,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                            children: citations.map((cite, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                    variants: fadeInUp,
                                    className: "p-6 rounded-lg group cursor-pointer transition-all duration-300 hover:-translate-y-2",
                                    style: {
                                        backgroundColor: 'rgba(10, 10, 10, 0.7)'
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center",
                                            style: {
                                                backgroundColor: "".concat(colors.primary, "20")
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: "pi pi-quote-left text-xl",
                                                style: {
                                                    color: colors.primary
                                                }
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 323,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 321,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "italic text-center mb-4 text-lg",
                                            children: cite.text
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 325,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-right text-sm opacity-80 mb-4",
                                            children: [
                                                "— ",
                                                cite.source
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 326,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs opacity-60 mt-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: "pi pi-info-circle mr-1"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this),
                                                cite.explanation
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 327,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, index, true, {
                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                    lineNumber: 315,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/CULTURE/page.tsx",
                            lineNumber: 313,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/CULTURE/page.tsx",
                    lineNumber: 306,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/CULTURE/page.tsx",
                lineNumber: 298,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
                ref: ref3,
                initial: "hidden",
                animate: inView3 ? "visible" : "hidden",
                variants: staggerContainer,
                className: "py-16 px-4 max-w-6xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-0.5",
                                style: {
                                    backgroundColor: colors.tertiary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 346,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-3xl font-bold mx-4",
                                style: {
                                    color: colors.tertiary
                                },
                                children: "Éducation & Innovation Digitale"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 347,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 h-0.5",
                                style: {
                                    backgroundColor: colors.tertiary
                                }
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 348,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 345,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp,
                        className: "mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg leading-relaxed mb-6",
                                children: "Les motifs Ndop, Wax, Adinkra et autres trésors visuels africains inspirent l’UX moderne en apportant des courbes organiques, des couleurs vibrantes et une symbolique riche. Je travaille à intégrer ces éléments dans mes designs pour préserver et valoriser notre héritage face à l’uniformisation visuelle occidentale."
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid md:grid-cols-2 gap-8",
                                children: culturalElements.map((element, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-6 rounded-lg",
                                        style: {
                                            backgroundColor: 'rgba(245, 245, 220, 0.03)'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-xl font-semibold mb-3",
                                                style: {
                                                    color: colors.primary
                                                },
                                                children: element.title
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 361,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "mb-3 opacity-90",
                                                children: element.description
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 362,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm mb-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Utilisation dans mes designs:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 363,
                                                        columnNumber: 45
                                                    }, this),
                                                    " ",
                                                    element.usage
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 363,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm opacity-80",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                        children: "Exemple:"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 51
                                                    }, this),
                                                    " ",
                                                    element.example
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                                lineNumber: 364,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, index, true, {
                                        fileName: "[project]/src/app/CULTURE/page.tsx",
                                        lineNumber: 360,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 358,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 351,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: fadeInUp,
                        className: "text-center p-8 rounded-xl",
                        style: {
                            backgroundColor: 'rgba(233, 184, 38, 0.1)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-2xl font-bold mb-4",
                                style: {
                                    color: colors.primary
                                },
                                children: "Contribuez à cette vision"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 375,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mb-6 max-w-2xl mx-auto",
                                children: "Vous avez des connaissances sur les motifs africains ou souhaitez suggérer des éléments culturels à intégrer dans des designs modernes?"
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 376,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                whileHover: {
                                    scale: 1.05
                                },
                                whileTap: {
                                    scale: 0.95
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/contact",
                                    className: "inline-flex items-center px-8 py-3 rounded-lg font-semibold",
                                    style: {
                                        backgroundColor: colors.primary,
                                        color: colors.dark
                                    },
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "pi pi-send mr-2"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/CULTURE/page.tsx",
                                            lineNumber: 388,
                                            columnNumber: 15
                                        }, this),
                                        "Partager une suggestion"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/CULTURE/page.tsx",
                                    lineNumber: 383,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/CULTURE/page.tsx",
                                lineNumber: 379,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/CULTURE/page.tsx",
                        lineNumber: 370,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/CULTURE/page.tsx",
                lineNumber: 338,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/CULTURE/page.tsx",
        lineNumber: 153,
        columnNumber: 5
    }, this);
}
_s(Culture, "0/6yuX0Q64yhOsFGgDbQaqtqBjk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$intersection$2d$observer$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Culture;
var _c;
__turbopack_context__.k.register(_c, "Culture");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_CULTURE_page_tsx_b23e0741._.js.map