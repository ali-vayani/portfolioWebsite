(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_ddd400b3._.js", {

"[project]/src/components/InfoCard.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>ProjectCard)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ProjectCard({ card, isHovered }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "flex flex-col rounded-lg overflow-hidden",
        animate: {
            scale: isHovered ? 1.05 : 1,
            transition: {
                duration: 0.2
            }
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full aspect-video",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        className: "absolute inset-0 rounded-t-lg",
                        transition: {
                            duration: 0.3
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    card.svg ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full h-full flex items-center justify-center rounded-t-lg cursor-pointer relative z-10",
                        onClick: ()=>window.open(card.link, "_blank"),
                        children: card.svg
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 21,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: card.image,
                        alt: card.title,
                        fill: true,
                        className: "object-cover rounded-t-lg relative z-10",
                        onClick: ()=>window.open(card.link, "_blank"),
                        style: {
                            cursor: 'pointer'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 28,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InfoCard.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pt-2 space-y-1 sm:space-y-2 p-2 sm:p-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                        className: "text-lg sm:text-xl",
                        children: card.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs sm:text-sm font-light opacity-60",
                        children: card.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: card.link,
                        className: "text-blue-300 text-xs sm:text-sm hover:text-blue-400 truncate block max-w-full font-light",
                        title: card.link,
                        children: card.link.substring(8)
                    }, void 0, false, {
                        fileName: "[project]/src/components/InfoCard.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/InfoCard.tsx",
                lineNumber: 38,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/InfoCard.tsx",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = ProjectCard;
var _c;
__turbopack_context__.k.register(_c, "ProjectCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/sections/Cards.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Cards)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/InfoCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const container = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};
const item = {
    hidden: {
        opacity: 0,
        y: 20
    },
    show: {
        opacity: 1,
        y: 0
    }
};
function Cards({ cards }) {
    _s();
    const [hoveredIndex, setHoveredIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mousePosition, setMousePosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    const handleMouseMove = (e)=>{
        setMousePosition({
            x: e.clientX,
            y: e.clientY
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full relative",
        onMouseMove: handleMouseMove,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                children: hoveredIndex !== null && cards[hoveredIndex].image != "none" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        scale: 0.8
                    },
                    animate: {
                        opacity: 1,
                        scale: 1,
                        x: mousePosition.x - 330,
                        y: mousePosition.y - 900
                    },
                    exit: {
                        opacity: 0,
                        scale: 0.8
                    },
                    transition: {
                        duration: 0.2
                    },
                    className: "fixed pointer-events-none z-50 w-48 h-48",
                    style: {
                        zIndex: 50
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        src: cards[hoveredIndex].image,
                        alt: cards[hoveredIndex].title,
                        fill: true,
                        className: "object-cover rounded-lg shadow-lg"
                    }, void 0, false, {
                        fileName: "[project]/src/components/sections/Cards.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Cards.tsx",
                    lineNumber: 35,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Cards.tsx",
                lineNumber: 33,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                variants: container,
                initial: "hidden",
                animate: "show",
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto relative",
                style: {
                    zIndex: 2
                },
                children: cards.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: item,
                        onHoverStart: ()=>setHoveredIndex(index),
                        onHoverEnd: ()=>setHoveredIndex(null),
                        className: "relative",
                        style: {
                            zIndex: hoveredIndex === index ? 3 : 2
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$InfoCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            card: project,
                            isHovered: hoveredIndex === index
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Cards.tsx",
                            lineNumber: 73,
                            columnNumber: 25
                        }, this)
                    }, index, false, {
                        fileName: "[project]/src/components/sections/Cards.tsx",
                        lineNumber: 65,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Cards.tsx",
                lineNumber: 57,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Cards.tsx",
        lineNumber: 32,
        columnNumber: 9
    }, this);
}
_s(Cards, "nq21Z8K/IAzuPs2lDb7RBtOvrW4=");
_c = Cards;
var _c;
__turbopack_context__.k.register(_c, "Cards");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/data/data.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "photos": (()=>photos),
    "projects": (()=>projects),
    "tech": (()=>tech),
    "timeline": (()=>timeline)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/si/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
;
;
;
const timeline = [
    {
        name: "Stripe",
        date: "summer 2026",
        title: "software engineer intern",
        description: "• incoming",
        role: "incoming swe intern",
        org: "stripe",
        url: "https://stripe.com",
        hoverColor: "#6772e5"
    },
    {
        name: "MyMosque",
        date: "may. 2025 - present",
        title: "founder & engineer",
        description: "• bringing communities together",
        role: "swe",
        org: "mymosque",
        url: "https://mymosque.app",
        hoverColor: "#C8C079"
    },
    {
        name: "freetail hackers",
        date: "feb. 2025 - present",
        title: "tech co-director",
        description: "• improving our hackathon platform",
        role: "tech co-director",
        org: "freetail hackers",
        url: "https://freetailhackers.com/",
        hoverColor: "#000000",
        hoverBg: "white"
    },
    {
        name: "aramco",
        date: "may 2025 - aug. 2025",
        title: "software engineer intern",
        description: "• built a RAG pipeline for hundreds of documents",
        role: "prev swe intern",
        org: "aramco",
        url: "https://www.aramco.com/en",
        hoverColor: "#3eb458"
    },
    {
        name: "UT Austin 🤘🏽",
        date: "aug. 2024 - present",
        title: "b.s. computer science",
        description: "• pursuing knowledge",
        role: "computer science",
        org: "UT Austin",
        url: "https://www.cs.utexas.edu/",
        hoverColor: "#cd6a00"
    }
];
const photos = [
    {
        image: "/about/tower.jpg",
        alt: "tower",
        style: "rotate-[-6deg]",
        rotation: 6
    },
    {
        image: "/about/formal.jpg",
        alt: "formal",
        style: "rotate-[4deg]",
        rotation: -4
    },
    {
        image: "/about/rooftop.jpg",
        alt: "rooftop",
        style: "rotate-[2deg]",
        rotation: -2
    },
    {
        image: "/about/cravings.jpg",
        alt: "cravings",
        style: "rotate-[-3deg]",
        rotation: 3
    },
    {
        image: "/about/og.jpg",
        alt: "og",
        style: "rotate-[5deg]",
        rotation: -5
    }
];
const projects = [
    {
        title: "MyMosque",
        description: "Building a platform for Mosques to connect with their communities. Coming soon!",
        image: "/projects/mymosque.jpg",
        link: "https://mymosque.app"
    },
    {
        title: "The Heat Ordering Platform",
        description: "Developed ordering platform for school cafeteria & admin panel to edit menu items",
        image: "/projects/TheHeatLogo.png",
        link: "https://the-heat.vercel.app/"
    },
    {
        title: "Digit Classifier",
        description: "Built a deep neural network for MNIST digit classification and a Tkinter app for real-time user-drawn predictions",
        image: "/projects/mnist.png",
        link: "https://github.com/ali-vayani/pytorch/tree/main/MNIST%20Project"
    },
    {
        title: "Snake RL Agent",
        description: "Developed Snake game agent using Q-learning and a neural network, with training scripts and visualizations",
        image: "/projects/snake.jpg",
        link: "https://github.com/ali-vayani/snake-game-rl"
    }
];
const tech = [
    // Languages
    {
        title: "Java",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaJava"], {
            size: 150,
            color: "#007396"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 149,
            columnNumber: 14
        }, this),
        link: "https://www.java.com/",
        description: "Object-oriented programming language known for its portability and enterprise applications.",
        image: "none"
    },
    {
        title: "Python",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPython"], {
            size: 150,
            color: "#3776AB"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 156,
            columnNumber: 14
        }, this),
        link: "https://www.python.org/",
        description: "Versatile programming language known for its simplicity and extensive libraries.",
        image: "none"
    },
    {
        title: "TypeScript",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTypescript"], {
            size: 150,
            color: "#3178C6"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 163,
            columnNumber: 14
        }, this),
        link: "https://www.typescriptlang.org/",
        description: "Typed superset of JavaScript that compiles to plain JavaScript.",
        image: "none"
    },
    // Frontend
    {
        title: "React",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiReact"], {
            size: 150,
            color: "#087EA4"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 171,
            columnNumber: 14
        }, this),
        link: "https://react.dev/",
        description: "Popular JavaScript library for building user interfaces.",
        image: "none"
    },
    {
        title: "Next.js",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNextdotjs"], {
            size: 150,
            color: "white"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 178,
            columnNumber: 14
        }, this),
        link: "https://nextjs.org/",
        description: "React framework for production-grade applications.",
        image: "none"
    },
    {
        title: "Svelte",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSvelte"], {
            size: 150,
            color: "#FF3E00"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 185,
            columnNumber: 14
        }, this),
        link: "https://svelte.dev/",
        description: "Modern framework that shifts work to compile time.",
        image: "none"
    },
    {
        title: "Tailwind CSS",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiTailwindcss"], {
            size: 150,
            color: "#06B6D4"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 192,
            columnNumber: 14
        }, this),
        link: "https://tailwindcss.com/",
        description: "Utility-first CSS framework for rapid UI development.",
        image: "none"
    },
    {
        title: "Expo",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiExpo"], {
            size: 150,
            color: "white"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 199,
            columnNumber: 14
        }, this),
        link: "https://expo.dev/",
        description: "Framework for universal React applications.",
        image: "none"
    },
    // Backend
    {
        title: "Spring Boot",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiSpringboot"], {
            size: 150,
            color: "#6DB33F"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 207,
            columnNumber: 14
        }, this),
        link: "https://spring.io/projects/spring-boot",
        description: "Java-based framework for building enterprise applications.",
        image: "none"
    },
    {
        title: "Node.js",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiNodedotjs"], {
            size: 150,
            color: "#339933"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 214,
            columnNumber: 14
        }, this),
        link: "https://nodejs.org/",
        description: "JavaScript runtime for server-side applications.",
        image: "none"
    },
    // Databases & ORMs
    {
        title: "MongoDB",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiMongodb"], {
            size: 150,
            color: "#47A248"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 222,
            columnNumber: 14
        }, this),
        link: "https://www.mongodb.com/",
        description: "NoSQL database for modern applications.",
        image: "none"
    },
    {
        title: "Firebase",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiFirebase"], {
            size: 150,
            color: "#FFCA28"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 229,
            columnNumber: 14
        }, this),
        link: "https://firebase.google.com/",
        description: "Google's platform for web and mobile development.",
        image: "none"
    },
    {
        title: "Prisma",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPrisma"], {
            size: 150,
            color: "#2D3748"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 236,
            columnNumber: 14
        }, this),
        link: "https://www.prisma.io/",
        description: "Next-generation ORM for Node.js and TypeScript.",
        image: "none"
    },
    // AI/ML
    {
        title: "PyTorch",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiPytorch"], {
            size: 150,
            color: "#EE4C2C"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 244,
            columnNumber: 14
        }, this),
        link: "https://pytorch.org/",
        description: "Open source machine learning framework.",
        image: "none"
    },
    // Game Development
    {
        title: "Unreal Engine",
        svg: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$si$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SiUnrealengine"], {
            size: 150,
            color: "white"
        }, void 0, false, {
            fileName: "[project]/src/data/data.tsx",
            lineNumber: 252,
            columnNumber: 14
        }, this),
        link: "https://www.unrealengine.com/",
        description: "Advanced 3D game engine and development platform.",
        image: "none"
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/Timeline.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const Timeline = ({ events })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-row gap-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute left-4 top-0 h-full w-0.25 bg-white"
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 12,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-8",
                    children: events.map((event, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative pl-12 group",
                            onMouseOver: (e)=>{
                                const dot = e.currentTarget.querySelector('.timeline-dot');
                                const title = e.currentTarget.querySelector('.event-title');
                                if (event.hoverColor && dot) {
                                    dot.style.backgroundColor = event.hoverColor;
                                }
                                if (event.hoverBg && dot) {
                                    dot.style.border = `2px solid ${event.hoverBg}`;
                                }
                                if (event.hoverColor && title) {
                                    title.style.color = event.hoverColor;
                                }
                                if (event.hoverBg && title) {
                                    title.style.backgroundColor = event.hoverBg;
                                }
                            },
                            onMouseOut: (e)=>{
                                const dot = e.currentTarget.querySelector('.timeline-dot');
                                const title = e.currentTarget.querySelector('.event-title');
                                if (dot) {
                                    dot.style.backgroundColor = 'white';
                                    dot.style.border = 'none';
                                }
                                if (title) {
                                    title.style.color = 'white';
                                    title.style.backgroundColor = '';
                                }
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "timeline-dot absolute left-3 top-1.5 h-2 w-2 rounded-full bg-white transition-all duration-300 group-hover:scale-150",
                                    style: {
                                        backgroundColor: 'white',
                                        transition: 'all 0.3s ease-in-out',
                                        transform: 'translate(-1px, -1px)'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 47,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "shadow-sm transition-all duration-300 hover:scale-[1.05] hover:shadow-lg",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "flex flex-row gap-2 justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "event-title text-lg transition-colors duration-300",
                                                    style: {
                                                        color: 'white',
                                                        transition: 'all 0.3s ease-in-out',
                                                        padding: '0.25rem 0.5rem'
                                                    },
                                                    children: event.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Timeline.tsx",
                                                    lineNumber: 58,
                                                    columnNumber: 29
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 text-sm opacity-60",
                                                    children: event.date
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Timeline.tsx",
                                                    lineNumber: 68,
                                                    columnNumber: 29
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 57,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-md font-light italic opacity-60",
                                            children: event.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 70,
                                            columnNumber: 25
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-md font-light opacity-60",
                                            children: event.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Timeline.tsx",
                                            lineNumber: 71,
                                            columnNumber: 25
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Timeline.tsx",
                                    lineNumber: 56,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, index, true, {
                            fileName: "[project]/src/components/Timeline.tsx",
                            lineNumber: 15,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/Timeline.tsx",
                    lineNumber: 13,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/Timeline.tsx",
            lineNumber: 11,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/Timeline.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
};
_c = Timeline;
const __TURBOPACK__default__export__ = Timeline;
var _c;
__turbopack_context__.k.register(_c, "Timeline");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/tech/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tech)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/sections/Cards.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/data.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Timeline.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Tech() {
    _s();
    const [currSection, setCurrSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-black -z-10",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col px-4 sm:px-8 md:px-16 lg:px-60 mt-5 justify-center items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Timeline$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    events: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["timeline"]
                }, void 0, false, {
                    fileName: "[project]/src/app/tech/page.tsx",
                    lineNumber: 14,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col text-base sm:text-lg gap-2 mb-6 w-full mt-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "flex flex-row gap-4 text-base sm:text-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    onClick: ()=>setCurrSection("projects"),
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    className: `${currSection === "projects" ? "text-white" : "text-white/50 hover:text-white transition-colors duration-200 z-10"}`,
                                    children: "projects"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tech/page.tsx",
                                    lineNumber: 17,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    onClick: ()=>setCurrSection("technologies"),
                                    style: {
                                        cursor: 'pointer'
                                    },
                                    className: `${currSection === "technologies" ? "text-white" : "text-white/50 hover:text-white transition-colors duration-200 z-10"}`,
                                    children: "technologies"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tech/page.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tech/page.tsx",
                            lineNumber: 16,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "w-full h-[1px] bg-white opacity-50"
                        }, void 0, false, {
                            fileName: "[project]/src/app/tech/page.tsx",
                            lineNumber: 32,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tech/page.tsx",
                    lineNumber: 15,
                    columnNumber: 9
                }, this),
                currSection === "projects" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cards: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["projects"]
                }, void 0, false, {
                    fileName: "[project]/src/app/tech/page.tsx",
                    lineNumber: 34,
                    columnNumber: 40
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$sections$2f$Cards$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    cards: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$data$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tech"]
                }, void 0, false, {
                    fileName: "[project]/src/app/tech/page.tsx",
                    lineNumber: 34,
                    columnNumber: 71
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/tech/page.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/tech/page.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_s(Tech, "tXq5Z6O5+a7xXJBBVGELU5PBUyU=");
_c = Tech;
var _c;
__turbopack_context__.k.register(_c, "Tech");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_ddd400b3._.js.map