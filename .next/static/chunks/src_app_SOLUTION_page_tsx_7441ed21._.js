(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/SOLUTION/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Solutions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/motion-utils/dist/es/easing/ease.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"); // AJOUT de useState
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Palette de couleurs enrichie
const colors = {
    primary: "#E9B826",
    secondary: "#BB141A",
    tertiary: "#2D5D2A",
    dark: "#0A0A0A",
    light: "#F5F5DC",
    accent: "#8A5C2E",
    goldLight: "#F4D35E"
};
function Solutions() {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(ref, {
        once: true,
        amount: 0.3
    });
    // NOUVEL ÉTAT POUR GÉRER LE MODAL
    const [selectedSolution, setSelectedSolution] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const solutions = [
        {
            title: "Personnalisation de Motifs Africains",
            description: "Créez des visuels uniques avec Ndop, Wax ou Adinkra pour contrer l'influence occidentale.",
            price: "Gratuit (Premium 10 000 FCFA)",
            icon: "pi pi-brush",
            features: [
                "Choix de motifs traditionnels",
                "Personnalisation couleurs/texte",
                "Export basique inclus"
            ],
            pattern: "ndop",
            fullDescription: "Cet outil interactif permet aux utilisateurs de mixer, modifier les couleurs et ajouter du texte aux motifs traditionnels africains (Ndop, Adinkra, Wax, etc.) pour des usages personnels ou professionnels. L'objectif est de fournir des ressources graphiques authentiques et de haute qualité, libres de l'uniformisation visuelle globale.",
            benefits: [
                "Authenticité visuelle garantie",
                "Gain de temps dans la création",
                "Soutien à la valorisation culturelle",
                "Mises à jour régulières de nouveaux motifs"
            ],
            targetAudience: "Designers graphiques, Créateurs de contenu, PME africaines"
        },
        {
            title: "Standards Visuels Africains",
            description: "Adoptez des guidelines innovantes (comme Apple) pour vos designs, inspirées de l'Afrique.",
            price: "25 000 FCFA (licence annuelle)",
            icon: "pi pi-book",
            features: [
                "Guide UX africain (PDF)",
                "Templates prêts à l'emploi",
                "Support communautaire"
            ],
            pattern: "adinkra",
            fullDescription: "Ce guide complet (African Design Guideline) fournit des règles d'UX/UI basées sur l'esthétique, la symbolique et la psychologie des couleurs propres à la culture africaine. Il inclut des principes de navigation inspirés des proverbes et des structures de motifs.",
            benefits: [
                "Interfaces utilisateur culturellement pertinentes",
                "Amélioration de l'engagement local",
                "Accès à une bibliothèque de composants UI/UX",
                "Mise en œuvre des meilleures pratiques du continent"
            ],
            targetAudience: "Développeurs d'applications, Grandes entreprises, Équipes de produit"
        },
        {
            title: "Sensibilisation Culturelle",
            description: "Participez à des ateliers digitaux pour valoriser notre patrimoine face à l'homogénéisation.",
            price: "Gratuit (Donation 5 000 FCFA)",
            icon: "pi pi-users",
            features: [
                "Sessions en ligne",
                "Ressources éducatives",
                "Shoutout pour contributeurs"
            ],
            pattern: "wax",
            fullDescription: "Ateliers et séminaires numériques réguliers visant à éduquer les professionnels et le public sur la richesse des motifs, symboles et couleurs africaines et leur pertinence dans le design moderne. Ces sessions encouragent la collaboration et le partage de connaissances.",
            benefits: [
                "Augmentation de la culture visuelle africaine",
                "Réseautage avec des créatifs engagés",
                "Certificat de participation (pour les sessions payantes)",
                "Accès à des livres blancs exclusifs"
            ],
            targetAudience: "Étudiants en art/design, Passionnés de culture, Entreprises RSE"
        }
    ];
    // Variants pour les animations
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };
    const itemVariants = {
        hidden: {
            y: 50,
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.7,
                ease: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["easeOut"]
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            backgroundColor: colors.dark,
            color: colors.light
        },
        ref: ref,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
            [
                "10e4c555e99294e6",
                [
                    colors.primary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.accent,
                    colors.accent
                ]
            ]
        ]) + " " + "min-h-screen py-20 px-6 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "10e4c555e99294e6",
                        [
                            colors.primary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.accent,
                            colors.accent
                        ]
                    ]
                ]) + " " + "absolute inset-0 opacity-10 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: colors.primary,
                            filter: "blur(80px)"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "10e4c555e99294e6",
                                [
                                    colors.primary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.accent,
                                    colors.accent
                                ]
                            ]
                        ]) + " " + "absolute top-10 left-10 w-72 h-72 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 124,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: colors.secondary,
                            filter: "blur(80px)"
                        },
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                            [
                                "10e4c555e99294e6",
                                [
                                    colors.primary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.secondary,
                                    colors.accent,
                                    colors.accent
                                ]
                            ]
                        ]) + " " + "absolute bottom-10 right-10 w-96 h-96 rounded-full"
                    }, void 0, false, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 125,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/SOLUTION/page.tsx",
                lineNumber: 123,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                    [
                        "10e4c555e99294e6",
                        [
                            colors.primary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.secondary,
                            colors.accent,
                            colors.accent
                        ]
                    ]
                ]) + " " + "absolute inset-0 opacity-5 pointer-events-none",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "100%",
                    height: "100%",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                        [
                            "10e4c555e99294e6",
                            [
                                colors.primary,
                                colors.secondary,
                                colors.secondary,
                                colors.secondary,
                                colors.secondary,
                                colors.secondary,
                                colors.secondary,
                                colors.accent,
                                colors.accent
                            ]
                        ]
                    ]) + " " + "absolute inset-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                            id: "african-pattern",
                            x: "0",
                            y: "0",
                            width: "100",
                            height: "100",
                            patternUnits: "userSpaceOnUse",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ]),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M0,0 L100,0 L100,100 L0,100 Z",
                                    fill: "none",
                                    stroke: colors.primary,
                                    strokeWidth: "2",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 132,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M20,20 C40,40 60,40 80,20",
                                    fill: "none",
                                    stroke: colors.secondary,
                                    strokeWidth: "1.5",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 133,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "50",
                                    cy: "50",
                                    r: "10",
                                    fill: "none",
                                    stroke: colors.tertiary,
                                    strokeWidth: "1",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ])
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 131,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                            x: "0",
                            y: "0",
                            width: "100%",
                            height: "100%",
                            fill: "url(#african-pattern)",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ])
                        }, void 0, false, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 136,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                    lineNumber: 130,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/SOLUTION/page.tsx",
                lineNumber: 129,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "max-w-6xl mx-auto text-center relative z-10",
                variants: containerVariants,
                initial: "hidden",
                animate: isInView ? "visible" : "hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: itemVariants,
                        className: "mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                backgroundColor: "rgba(233, 184, 38, 0.1)"
                            },
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ]) + " " + "inline-flex items-center justify-center p-2 rounded-full mb-2",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: colors.primary
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "10e4c555e99294e6",
                                        [
                                            colors.primary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.accent,
                                            colors.accent
                                        ]
                                    ]
                                ]) + " " + "text-sm uppercase tracking-wider",
                                children: "Culture & Innovation"
                            }, void 0, false, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 148,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 147,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 146,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].h1, {
                        className: "text-4xl md:text-6xl font-bold mb-6 leading-tight",
                        style: {
                            color: colors.primary
                        },
                        variants: itemVariants,
                        children: [
                            "Réinventons l’Expression",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "10e4c555e99294e6",
                                        [
                                            colors.primary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.accent,
                                            colors.accent
                                        ]
                                    ]
                                ])
                            }, void 0, false, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 160,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    color: colors.light
                                },
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "10e4c555e99294e6",
                                        [
                                            colors.primary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.accent,
                                            colors.accent
                                        ]
                                    ]
                                ]),
                                children: "Visuelle Africaine"
                            }, void 0, false, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 161,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 154,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].p, {
                        className: "text-xl opacity-90 max-w-3xl mx-auto mb-16 leading-relaxed",
                        variants: itemVariants,
                        children: "Des outils et services modernes pour préserver et célébrer la culture camerounaise et africaine en 2025. Créons ensemble des standards visuels innovants qui rayonnent à travers le monde."
                    }, void 0, false, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 164,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-10",
                        variants: containerVariants,
                        children: solutions.map((solution, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                className: "rounded-2xl overflow-hidden group relative",
                                variants: itemVariants,
                                whileHover: {
                                    y: -10
                                },
                                transition: {
                                    type: "spring",
                                    stiffness: 300
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            boxShadow: "0 25px 50px -12px ".concat(colors.primary, "40"),
                                            zIndex: -1
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "h-full bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl p-8 flex flex-col relative overflow-hidden",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "10e4c555e99294e6",
                                                        [
                                                            colors.primary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.accent,
                                                            colors.accent
                                                        ]
                                                    ]
                                                ]) + " " + "absolute top-0 right-0 w-32 h-32 opacity-5 ".concat(solution.pattern, "-pattern")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                lineNumber: 194,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "10e4c555e99294e6",
                                                        [
                                                            colors.primary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.accent,
                                                            colors.accent
                                                        ]
                                                    ]
                                                ]) + " " + "relative z-10 flex flex-col justify-between h-full",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "10e4c555e99294e6",
                                                                [
                                                                    colors.primary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.accent,
                                                                    colors.accent
                                                                ]
                                                            ]
                                                        ]),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "flex justify-between items-start mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            backgroundColor: colors.primary,
                                                                            color: colors.dark,
                                                                            boxShadow: "0 0 0 4px ".concat(colors.primary, "20")
                                                                        },
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "10e4c555e99294e6",
                                                                                [
                                                                                    colors.primary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.accent,
                                                                                    colors.accent
                                                                                ]
                                                                            ]
                                                                        ]) + " " + "w-16 h-16 flex items-center justify-center rounded-full text-2xl",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                [
                                                                                    "10e4c555e99294e6",
                                                                                    [
                                                                                        colors.primary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.accent,
                                                                                        colors.accent
                                                                                    ]
                                                                                ]
                                                                            ]) + " " + (solution.icon || "")
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                            lineNumber: 207,
                                                                            columnNumber: 49
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                        lineNumber: 199,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "10e4c555e99294e6",
                                                                                [
                                                                                    colors.primary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.accent,
                                                                                    colors.accent
                                                                                ]
                                                                            ]
                                                                        ]) + " " + "text-right",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                backgroundColor: colors.secondary,
                                                                                color: colors.light
                                                                            },
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                [
                                                                                    "10e4c555e99294e6",
                                                                                    [
                                                                                        colors.primary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.secondary,
                                                                                        colors.accent,
                                                                                        colors.accent
                                                                                    ]
                                                                                ]
                                                                            ]) + " " + "text-xs uppercase tracking-wide px-2 py-1 rounded-full",
                                                                            children: "Populaire"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                            lineNumber: 212,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                        lineNumber: 211,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 198,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                                style: {
                                                                    color: colors.light
                                                                },
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-2xl font-bold mb-4 group-hover:text-primary transition-colors",
                                                                children: solution.title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 219,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "mb-6 opacity-80 leading-relaxed",
                                                                children: solution.description
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 224,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "space-y-3 mb-8",
                                                                children: solution.features.map((f, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "10e4c555e99294e6",
                                                                                [
                                                                                    colors.primary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.accent,
                                                                                    colors.accent
                                                                                ]
                                                                            ]
                                                                        ]) + " " + "flex items-start",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                style: {
                                                                                    color: colors.primary
                                                                                },
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                    [
                                                                                        "10e4c555e99294e6",
                                                                                        [
                                                                                            colors.primary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.accent,
                                                                                            colors.accent
                                                                                        ]
                                                                                    ]
                                                                                ]) + " " + "pi pi-check-circle mt-1 mr-3 flex-shrink-0"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                                lineNumber: 231,
                                                                                columnNumber: 53
                                                                            }, this),
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                    [
                                                                                        "10e4c555e99294e6",
                                                                                        [
                                                                                            colors.primary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.accent,
                                                                                            colors.accent
                                                                                        ]
                                                                                    ]
                                                                                ]),
                                                                                children: f
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                                lineNumber: 235,
                                                                                columnNumber: 53
                                                                            }, this)
                                                                        ]
                                                                    }, idx, true, {
                                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                        lineNumber: 230,
                                                                        columnNumber: 49
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 228,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "10e4c555e99294e6",
                                                                [
                                                                    colors.primary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.accent,
                                                                    colors.accent
                                                                ]
                                                            ]
                                                        ]) + " " + "mt-auto",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                style: {
                                                                    color: colors.primary
                                                                },
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "text-2xl font-bold mb-6 text-center",
                                                                children: solution.price
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 242,
                                                                columnNumber: 41
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                    [
                                                                        "10e4c555e99294e6",
                                                                        [
                                                                            colors.primary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.secondary,
                                                                            colors.accent,
                                                                            colors.accent
                                                                        ]
                                                                    ]
                                                                ]) + " " + "relative group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "10e4c555e99294e6",
                                                                                [
                                                                                    colors.primary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.accent,
                                                                                    colors.accent
                                                                                ]
                                                                            ]
                                                                        ]) + " " + "absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                        lineNumber: 250,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button" // CHANGÉ DE <Link> À <button>
                                                                    , {
                                                                        onClick: ()=>setSelectedSolution(solution),
                                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                            [
                                                                                "10e4c555e99294e6",
                                                                                [
                                                                                    colors.primary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.secondary,
                                                                                    colors.accent,
                                                                                    colors.accent
                                                                                ]
                                                                            ]
                                                                        ]) + " " + "px-8 py-4 rounded-lg inline-block font-semibold text-center w-full relative z-10
                             bg-[#E9B826] text-[#0A0A0A]
                             hover:shadow-[0_0_20px_#E9B826] transition-shadow duration-300",
                                                                        children: [
                                                                            "Découvrir",
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                                    [
                                                                                        "10e4c555e99294e6",
                                                                                        [
                                                                                            colors.primary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.secondary,
                                                                                            colors.accent,
                                                                                            colors.accent
                                                                                        ]
                                                                                    ]
                                                                                ]) + " " + "pi pi-arrow-right ml-2"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                                lineNumber: 258,
                                                                                columnNumber: 49
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                        lineNumber: 251,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                                lineNumber: 249,
                                                                columnNumber: 41
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                lineNumber: 196,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 177,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 172,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "mt-20 p-8 rounded-2xl relative overflow-hidden",
                        style: {
                            backgroundColor: "rgba(45, 93, 42, 0.1)"
                        },
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: isInView ? {
                            opacity: 1,
                            y: 0
                        } : {},
                        transition: {
                            delay: 0.8
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "10e4c555e99294e6",
                                        [
                                            colors.primary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.accent,
                                            colors.accent
                                        ]
                                    ]
                                ]) + " " + "absolute inset-0 opacity-5",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "100%",
                                    height: "100%",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pattern", {
                                            id: "circle-pattern",
                                            x: "0",
                                            y: "0",
                                            width: "50",
                                            height: "50",
                                            patternUnits: "userSpaceOnUse",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "10",
                                                    cy: "10",
                                                    r: "2",
                                                    fill: colors.tertiary,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 279,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "30",
                                                    cy: "30",
                                                    r: "2",
                                                    fill: colors.tertiary,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ])
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 280,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 278,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                            x: "0",
                                            y: "0",
                                            width: "100%",
                                            height: "100%",
                                            fill: "url(#circle-pattern)",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ])
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 282,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 277,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 276,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                    [
                                        "10e4c555e99294e6",
                                        [
                                            colors.primary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.secondary,
                                            colors.accent,
                                            colors.accent
                                        ]
                                    ]
                                ]) + " " + "relative z-10 max-w-2xl mx-auto",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        style: {
                                            color: colors.primary
                                        },
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "text-2xl font-bold mb-4",
                                        children: "Rejoignez le Mouvement Culturel"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 287,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "mb-6 opacity-90",
                                        children: "Inscrivez-vous à notre newsletter pour recevoir des motifs exclusifs, des conseils de design et des actualités sur la préservation de notre héritage visuel africain."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 290,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "flex flex-col sm:flex-row gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "email",
                                                placeholder: "Votre email",
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "10e4c555e99294e6",
                                                        [
                                                            colors.primary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.accent,
                                                            colors.accent
                                                        ]
                                                    ]
                                                ]) + " " + "flex-grow px-4 py-3 rounded-lg bg-black bg-opacity-50 border border-gray-700 focus:border-primary outline-none transition-colors"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                lineNumber: 295,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                style: {
                                                    backgroundColor: colors.secondary,
                                                    color: colors.light
                                                },
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "10e4c555e99294e6",
                                                        [
                                                            colors.primary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.accent,
                                                            colors.accent
                                                        ]
                                                    ]
                                                ]) + " " + "px-6 py-3 rounded-lg font-medium whitespace-nowrap",
                                                children: [
                                                    "S’inscrire ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                            [
                                                                "10e4c555e99294e6",
                                                                [
                                                                    colors.primary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.secondary,
                                                                    colors.accent,
                                                                    colors.accent
                                                                ]
                                                            ]
                                                        ]) + " " + "pi pi-send ml-2"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                        lineNumber: 307,
                                                        columnNumber: 50
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                lineNumber: 300,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 294,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 286,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                        lineNumber: 269,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/SOLUTION/page.tsx",
                lineNumber: 140,
                columnNumber: 13
            }, this),
            selectedSolution && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    opacity: 0
                },
                animate: {
                    opacity: 1
                },
                exit: {
                    opacity: 0
                },
                className: "fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 backdrop-blur-sm",
                onClick: ()=>setSelectedSolution(null),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        y: 50,
                        scale: 0.9
                    },
                    animate: {
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        y: 50,
                        scale: 0.9
                    },
                    transition: {
                        type: "spring",
                        stiffness: 100
                    },
                    className: "bg-gray-900 rounded-2xl max-w-3xl w-full p-8 shadow-2xl overflow-y-auto max-h-[90vh]",
                    onClick: (e)=>e.stopPropagation(),
                    style: {
                        border: "2px solid ".concat(colors.primary)
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ]) + " " + "flex justify-between items-start mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    style: {
                                        color: colors.primary
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]) + " " + "text-3xl font-bold",
                                    children: selectedSolution.title
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 335,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setSelectedSolution(null),
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]) + " " + "text-2xl hover:text-secondary transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "pi pi-times"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 342,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 338,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 334,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ]) + " " + "space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]) + " " + "text-lg opacity-90 leading-relaxed",
                                    children: selectedSolution.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 347,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: 'rgba(233, 184, 38, 0.1)'
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]) + " " + "flex items-center space-x-4 p-4 rounded-xl",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                color: colors.primary
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]) + " " + "text-3xl",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                    [
                                                        "10e4c555e99294e6",
                                                        [
                                                            colors.primary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.secondary,
                                                            colors.accent,
                                                            colors.accent
                                                        ]
                                                    ]
                                                ]) + " " + (selectedSolution.icon || "")
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                lineNumber: 354,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 353,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ]) + " " + "text-sm opacity-70",
                                                    children: "Tarification"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 357,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    style: {
                                                        color: colors.goldLight
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ]) + " " + "text-2xl font-extrabold",
                                                    children: selectedSolution.price
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 358,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 356,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 352,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                color: colors.secondary
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]) + " " + "text-xl font-semibold mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ]) + " " + "pi pi-bolt mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 365,
                                                    columnNumber: 37
                                                }, this),
                                                " Avantages Clés"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 364,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]) + " " + "grid grid-cols-1 md:grid-cols-2 gap-3",
                                            children: selectedSolution.benefits.map((benefit, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ]) + " " + "flex items-start text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                            style: {
                                                                color: colors.tertiary
                                                            },
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "10e4c555e99294e6",
                                                                    [
                                                                        colors.primary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.accent,
                                                                        colors.accent
                                                                    ]
                                                                ]
                                                            ]) + " " + "pi pi-star-fill mt-1 mr-3 flex-shrink-0"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                            lineNumber: 370,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                                [
                                                                    "10e4c555e99294e6",
                                                                    [
                                                                        colors.primary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.secondary,
                                                                        colors.accent,
                                                                        colors.accent
                                                                    ]
                                                                ]
                                                            ]),
                                                            children: benefit
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                            lineNumber: 371,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 369,
                                                    columnNumber: 41
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 367,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 363,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                        [
                                            "10e4c555e99294e6",
                                            [
                                                colors.primary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.secondary,
                                                colors.accent,
                                                colors.accent
                                            ]
                                        ]
                                    ]),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            style: {
                                                color: colors.secondary
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]) + " " + "text-xl font-semibold mb-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                        [
                                                            "10e4c555e99294e6",
                                                            [
                                                                colors.primary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.secondary,
                                                                colors.accent,
                                                                colors.accent
                                                            ]
                                                        ]
                                                    ]) + " " + "pi pi-users mr-2"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                                    lineNumber: 380,
                                                    columnNumber: 37
                                                }, this),
                                                " Public Cible"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 379,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            style: {
                                                backgroundColor: 'rgba(10, 10, 10, 0.5)'
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                                [
                                                    "10e4c555e99294e6",
                                                    [
                                                        colors.primary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.secondary,
                                                        colors.accent,
                                                        colors.accent
                                                    ]
                                                ]
                                            ]) + " " + "p-3 rounded-lg text-sm italic",
                                            children: selectedSolution.targetAudience
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                                            lineNumber: 382,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                                    lineNumber: 378,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 346,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                [
                                    "10e4c555e99294e6",
                                    [
                                        colors.primary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.secondary,
                                        colors.accent,
                                        colors.accent
                                    ]
                                ]
                            ]) + " " + "mt-8 text-center",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/contact",
                                className: "px-8 py-3 rounded-lg inline-block font-semibold text-center relative z-10",
                                style: {
                                    backgroundColor: colors.primary,
                                    color: colors.dark
                                },
                                onClick: ()=>setSelectedSolution(null),
                                children: [
                                    "Passer à l'action maintenant ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].dynamic([
                                            [
                                                "10e4c555e99294e6",
                                                [
                                                    colors.primary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.secondary,
                                                    colors.accent,
                                                    colors.accent
                                                ]
                                            ]
                                        ]) + " " + "pi pi-arrow-right ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/SOLUTION/page.tsx",
                                        lineNumber: 396,
                                        columnNumber: 62
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/SOLUTION/page.tsx",
                                lineNumber: 390,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/SOLUTION/page.tsx",
                            lineNumber: 389,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/SOLUTION/page.tsx",
                    lineNumber: 325,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/SOLUTION/page.tsx",
                lineNumber: 318,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "10e4c555e99294e6",
                dynamic: [
                    colors.primary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.secondary,
                    colors.accent,
                    colors.accent
                ],
                children: ".ndop-pattern.__jsx-style-dynamic-selector{background-image:radial-gradient(circle,".concat(colors.primary, " 1px,transparent 2px);background-size:20px 20px}.adinkra-pattern.__jsx-style-dynamic-selector{background-image:linear-gradient(30deg,").concat(colors.secondary, "33 25%,transparent 25%,transparent 75%,").concat(colors.secondary, "33 75%,").concat(colors.secondary, "33),linear-gradient(30deg,").concat(colors.secondary, "33 25%,transparent 25%,transparent 75%,").concat(colors.secondary, "33 75%,").concat(colors.secondary, "33);background-position:0 0,15px 15px;background-size:30px 30px}.wax-pattern.__jsx-style-dynamic-selector{background-image:linear-gradient(").concat(colors.accent, "33 1px,transparent 1px),linear-gradient(90deg,").concat(colors.accent, "33 1px,transparent 1px);background-size:15px 15px}@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-10px)}to{transform:translateY(0)}}.group.__jsx-style-dynamic-selector:hover .ndop-pattern.__jsx-style-dynamic-selector{animation:3s ease-in-out infinite float}")
            }, void 0, false, void 0, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/SOLUTION/page.tsx",
        lineNumber: 117,
        columnNumber: 9
    }, this);
}
_s(Solutions, "eDDt84mS8W8nLpv56PsWGgjAZQ0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Solutions;
var _c;
__turbopack_context__.k.register(_c, "Solutions");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_app_SOLUTION_page_tsx_7441ed21._.js.map