(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/ExperienceCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExperienceCard",
    ()=>ExperienceCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function ExperienceCard({ id, image, badge, title, host, price, rating, time, availablePlaces, availableDate, onClick }) {
    _s();
    const [isFavorite, setIsFavorite] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleFavoriteClick = (e)=>{
        e.stopPropagation();
        setIsFavorite(!isFavorite);
    };
    const handleClick = ()=>{
        if (onClick) {
            onClick(id);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "group cursor-pointer flex-shrink-0 w-full",
        onClick: handleClick,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative aspect-square rounded-xl overflow-hidden mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: image,
                        alt: title,
                        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleFavoriteClick,
                        className: "absolute top-3 right-3 hover:scale-110 transition-transform z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: `w-6 h-6 ${isFavorite ? 'fill-[#1E3A5F] text-[#1E3A5F]' : 'fill-black/50 text-white'} stroke-2`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ExperienceCard.tsx",
                            lineNumber: 58,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-3 left-3 px-3 py-1 rounded-md shadow-sm flex items-center gap-1.5 ${badge === 'Originals' ? 'bg-white' : 'bg-white'}`,
                        children: [
                            badge === 'Originals' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "16",
                                height: "16",
                                viewBox: "0 0 16 16",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M8 2L9.5 6.5L14 8L9.5 9.5L8 14L6.5 9.5L2 8L6.5 6.5L8 2Z",
                                    fill: "#00A99D"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                    lineNumber: 70,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                lineNumber: 69,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    fontWeight: 600
                                },
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                lineNumber: 73,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 65,
                        columnNumber: 11
                    }, this),
                    availablePlaces && availableDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-3 left-3 bg-[#1E3A5F] text-white px-3 py-1 rounded-md shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs",
                            style: {
                                fontWeight: 600
                            },
                            children: [
                                availablePlaces,
                                " ",
                                availablePlaces === 1 ? 'place disponible' : 'places disponibles'
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/ExperienceCard.tsx",
                            lineNumber: 80,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 79,
                        columnNumber: 11
                    }, this),
                    time && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-3 left-3 bg-white px-2.5 py-1 rounded shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs",
                            style: {
                                fontWeight: 600
                            },
                            children: time
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ExperienceCard.tsx",
                            lineNumber: 89,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 88,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-0",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-[15px] line-clamp-2",
                        style: {
                            fontWeight: 600
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600",
                        children: host
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 96,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs",
                            children: price
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/ExperienceCard.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "currentColor",
                                xmlns: "http://www.w3.org/2000/svg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 0L7.854 4.146L12 4.854L8.708 7.708L9.708 12L6 9.708L2.292 12L3.292 7.708L0 4.854L4.146 4.146L6 0Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                    lineNumber: 102,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                children: rating.toFixed(2)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/ExperienceCard.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/ExperienceCard.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/ExperienceCard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ExperienceCard, "k950Z1JpPS3WYtE75BCawi6VGEM=");
_c = ExperienceCard;
var _c;
__turbopack_context__.k.register(_c, "ExperienceCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/components/PropertyCarousel.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyCarousel",
    ()=>PropertyCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-left.js [app-client] (ecmascript) <export default as ChevronLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
function PropertyCarousel({ title, subtitle, children, showMoreLink = true }) {
    _s();
    const scrollContainerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [canScrollLeft, setCanScrollLeft] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [canScrollRight, setCanScrollRight] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    // Intersection Observer for scroll-based animations
    const isInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionRef, {
        once: true,
        margin: "-100px 0px"
    });
    const checkScroll = ()=>{
        const container = scrollContainerRef.current;
        if (!container) return;
        setCanScrollLeft(container.scrollLeft > 0);
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PropertyCarousel.useEffect": ()=>{
            const container = scrollContainerRef.current;
            if (!container) return;
            checkScroll();
            container.addEventListener('scroll', checkScroll);
            window.addEventListener('resize', checkScroll);
            return ({
                "PropertyCarousel.useEffect": ()=>{
                    container.removeEventListener('scroll', checkScroll);
                    window.removeEventListener('resize', checkScroll);
                }
            })["PropertyCarousel.useEffect"];
        }
    }["PropertyCarousel.useEffect"], []);
    const scroll = (direction)=>{
        const container = scrollContainerRef.current;
        if (!container) return;
        const scrollAmount = container.clientWidth * 0.8;
        const targetScroll = direction === 'left' ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount;
        container.scrollTo({
            left: targetScroll,
            behavior: 'smooth'
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].section, {
        ref: sectionRef,
        className: "relative py-8",
        initial: {
            opacity: 0,
            y: 30
        },
        animate: isInView ? {
            opacity: 1,
            y: 0
        } : {
            opacity: 0,
            y: 30
        },
        transition: {
            duration: 0.6,
            ease: "easeOut"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "px-4 sm:px-6 lg:px-12",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between mb-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "text-2xl",
                                            style: {
                                                fontWeight: 600
                                            },
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                            lineNumber: 72,
                                            columnNumber: 15
                                        }, this),
                                        showMoreLink && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "p-2 rounded-full text-sm text-gray-700 bg-gray-100 hover:underline flex items-center gap-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                viewBox: "0 0 18 18",
                                                className: "w-3 h-3",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M9 1.5L16.5 9L9 16.5M16.5 9H1.5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "2",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                                    lineNumber: 81,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                                lineNumber: 75,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                            lineNumber: 74,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                    lineNumber: 71,
                                    columnNumber: 13
                                }, this),
                                subtitle && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-600 mt-1",
                                    children: subtitle
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                    lineNumber: 92,
                                    columnNumber: 26
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                            lineNumber: 70,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden md:flex items-center gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('left'),
                                    disabled: !canScrollLeft,
                                    className: `p-2 border border-gray-300 rounded-full hover:shadow-md transition-all ${!canScrollLeft ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$left$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronLeft$3e$__["ChevronLeft"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                    lineNumber: 95,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>scroll('right'),
                                    disabled: !canScrollRight,
                                    className: `p-2 border border-gray-300 rounded-full hover:shadow-md transition-all ${!canScrollRight ? 'opacity-30 cursor-not-allowed' : 'hover:scale-105'}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                                    lineNumber: 104,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                            lineNumber: 94,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: scrollContainerRef,
                    className: "flex gap-4 overflow-x-auto scrollbar-hide scroll-smooth",
                    style: {
                        scrollbarWidth: 'none',
                        msOverflowStyle: 'none'
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/app/components/PropertyCarousel.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/components/PropertyCarousel.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/components/PropertyCarousel.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
_s(PropertyCarousel, "I6zNUcNFo3TNbCBT4VU5/k3eX68=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = PropertyCarousel;
var _c;
__turbopack_context__.k.register(_c, "PropertyCarousel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/pages/Experiences.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Experiences",
    ()=>Experiences
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/utils/use-in-view.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ExperienceCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PropertyCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/ExperienceSearchBar.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
;
function Experiences({ isScrolled, onExperienceClick }) {
    _s();
    const sectionTitleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const isSectionInView = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"])(sectionTitleRef, {
        once: true,
        margin: "-100px 0px"
    });
    // HOMIQIO Originals - Organisées par des hôtes d'exception
    const originalsExperiences = [
        {
            image: "https://images.unsplash.com/photo-1761839256547-0a1cd11b6dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdGhsZXRlJTIwdHJhaW5pbmclMjBzcG9ydHN8ZW58MXx8fHwxNzY3ODYxOTA4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Récupérez comme un athlète olympique avec un expert du sport",
            host: "Hôte particulier",
            price: "À partir de 94 € par voyageur",
            rating: 5.0
        },
        {
            image: "https://images.unsplash.com/photo-1752649935095-ac8f23ec446b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpc3QlMjBwYWludGluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc2Nzg2MTkwOXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Les secrets d'entraînement de l'artiste olympique expérimenté",
            host: "Hôte particulier",
            price: "Durée d'excursion totale : À partir de 96 € par voyageur",
            rating: 5.0
        },
        {
            image: "https://images.unsplash.com/photo-1767731053668-c370c651bc91?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290YmFsbCUyMHNvY2NlciUyMHRyYWluaW5nfGVufDF8fHx8MTc2Nzg2MTkwOXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Carfez-en football réussi avec Alexis olympique de Paris",
            host: "Hôte particulier",
            price: "Durée d'excursion totale : À partir de 80 € par voyageur",
            rating: 4.92
        },
        {
            image: "https://images.unsplash.com/photo-1681633528883-bc217d2e4dfb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZGVzaWduJTIwc3R1ZGlvfGVufDF8fHx8MTc2Nzc2NDY5NXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Sac de week-end MILLIT Bangkok : conception de l'atelier d'Hadrien",
            host: "Hôte particulier",
            price: "Débute le 13 janvier",
            rating: 5.0
        },
        {
            image: "https://images.unsplash.com/photo-1747190918503-0a1cb90d8eae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY3VscHR1cmUlMjBhcnQlMjBjbGFzc3xlbnwxfHx8fDE3Njc4NjE5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Sculptez le marbre avec un sculpteur de la renaissance d'Italie",
            host: "Hôte particulier",
            price: "Anciens, Grèce : Design de voyage - À partir de 90 € par voyageur",
            rating: 5.0
        },
        {
            image: "https://images.unsplash.com/photo-1766019463317-1cc801c15e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBleHBlcmllbmNlfGVufDF8fHx8MTc2Nzg2MTkxMHww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Découvrez la musique et dégustez un cocktail avec un DJ invité",
            host: "Hôte professionnel",
            price: "Hors, France : À partir de 69 € par voyageur",
            rating: 4.26
        },
        {
            image: "https://images.unsplash.com/photo-1593697725250-6a184f4e9ed0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWNvcmRpbmclMjBzdHVkaW8lMjBtdXNpY3xlbnwxfHx8fDE3Njc3ODQ2NTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Originals',
            title: "Dégustez du vin rosé et saluez dans un studio d'enregistrement",
            host: "Hôte particulier",
            price: "Hôte particulier : À partir de 74 € par voyageur",
            rating: 4.98
        }
    ];
    // Expériences populaires · Paris
    const popularExperiences = [
        {
            image: "https://images.unsplash.com/photo-1761594606868-1c577b10f69e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxQYXJpcyUyMGNyb2lzc2FudCUyMGJha2luZ3xlbnwxfHx8fDE3Njc4NjE5MTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Apprenez à préparer des croissants parfaits",
            host: "Hôte professionnel",
            price: "À partir de 95 € par voyageur",
            rating: 4.95
        },
        {
            image: "https://images.unsplash.com/photo-1682071608037-22faea2a0ee5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWNyZXQlMjBiYXIlMjBjb2NrdGFpbHxlbnwxfHx8fDE3Njc4NjE5MTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Percez les secrets des bars clandestins de Paris",
            host: "Hôte particulier",
            price: "À partir de 25 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1758874960436-c97920a559cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmVhZCUyMGJha2luZyUyMGNsYXNzfGVufDF8fHx8MTc2Nzg2MTkxMXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "No Diet Club : les meilleurs spots pains et pâtisseries",
            host: "Hôte particulier",
            price: "À partir de 61 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1715000780536-1f3f368b8587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2xhc3MlMjBjaGVmfGVufDF8fHx8MTc2Nzg2MTkxMnww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Préparez des macarons dans une cuisine professionnelle",
            host: "Hôte professionnel",
            price: "À partir de 64 € par voyageur",
            rating: 4.95
        },
        {
            image: "https://images.unsplash.com/photo-1725958779107-e7b359bacbcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMHZpbnRhZ2UlMjBjYXJ8ZW58MXx8fHwxNzY3ODYxOTExfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez Paris à bord d'une Citroën 2CV d'époque",
            host: "Hôte professionnel",
            price: "À partir de 76 € par voyageur",
            rating: 4.97
        },
        {
            image: "https://images.unsplash.com/photo-1722763188444-3325506ddcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjB3aW5lJTIwdGFzdGluZ3xlbnwxfHx8fDE3Njc4NjE5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Explorez des petits cachés de Londres : fromages et vins",
            host: "Hôte professionnel",
            price: "À partir de 70 € par voyageur",
            rating: 4.91
        },
        {
            image: "https://images.unsplash.com/photo-1670255022693-37f1be72bfcb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaWFubyUyMGtleWJvYXJkJTIwbXVzaWN8ZW58MXx8fHwxNzY3ODYxOTEzfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Plongez au cœur de la vie instrumentale : piano et cordes",
            host: "Hôte particulier",
            price: "À partir de 75 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1757085242669-076c35ff9397?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnQlMjB3b3Jrc2hvcCUyMHBlb3BsZXxlbnwxfHx8fDE3Njc1OTY5MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Dégustation de fromages et de vins dans une cave parisienne",
            host: "Hôte professionnel",
            price: "À partir de 87 € par voyageur",
            rating: 4.87
        }
    ];
    // Expériences · Londres
    const londonExperiences = [
        {
            image: "https://images.unsplash.com/photo-1745016176874-cd3ed3f5bfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW58ZW58MXx8fHwxNzY3ODUzNTY2fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Promenez-vous dans Londres avec un habitant qui a quitté la France",
            host: "Hôte particulier",
            price: "À partir de 16 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1533929736458-ca588d08c8be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjB0b3dlciUyMGJyaWRnZXxlbnwxfHx8fDE3Njc4NTg4NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite familiale de Londres et du Palais de Harry Potter",
            host: "Hôte professionnel",
            price: "À partir de 16 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1707336280554-7ec7854a548a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjB3YWxraW5nJTIwdG91cnxlbnwxfHx8fDE3Njc4NjE5MTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite à pied de Londres : 30 sites touristiques en 3 heures",
            host: "Hôte professionnel",
            price: "À partir de 22 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1760530627716-8d872dc90c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlza2V5JTIwdGFzdGluZyUyMGJhcnxlbnwxfHx8fDE3Njc4NjE5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez plus de 30 sites touristiques de Londres en minibus",
            host: "Hôte professionnel",
            price: "À partir de 27 € par voyageur",
            rating: 5.0
        },
        {
            image: "https://images.unsplash.com/photo-1714561381818-6980db3f9032?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWRkZW4lMjBzcGVha2Vhc3klMjBsb25kb258ZW58MXx8fHwxNzY3ODYxOTE0fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Explorez des petits cachés de Londres : histoire et architecture",
            host: "Hôte professionnel",
            price: "À partir de 20 € par voyageur",
            rating: 4.5
        },
        {
            image: "https://images.unsplash.com/photo-1582001961902-b4826d86cc31?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBmb29kJTIwbG9uZG9ufGVufDF8fHx8MTc2Nzg2MTkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "No Diet Club : visite gastronomique à vélo à Londres",
            host: "Hôte professionnel",
            price: "À partir de 30 € par voyageur",
            rating: 4.96
        },
        {
            image: "https://images.unsplash.com/photo-1722763188444-3325506ddcb4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVlc2UlMjB3aW5lJTIwdGFzdGluZ3xlbnwxfHx8fDE3Njc4NjE5MTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "No Diet Club : les meilleurs spots de vin de Londres",
            host: "Hôte professionnel",
            price: "À partir de 81 € par voyageur",
            rating: 4.96
        }
    ];
    // Expériences · Dubaï
    const dubaiExperiences = [
        {
            image: "https://images.unsplash.com/photo-1624062999726-083e5268525d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGRlc2VydCUyMHNhZmFyaXxlbnwxfHx8fDE3Njc4NjE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Safari de luxe dans le désert à Dubaï : VIP et soirée gastronomique",
            host: "Hôte particulier",
            price: "À partir de 40 € par voyageur",
            rating: 4.45
        },
        {
            image: "https://images.unsplash.com/photo-1655959473554-2c6f0fc9e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW5zZXQlMjBkdWJhaXxlbnwxfHx8fDE3Njc4NjE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite premium du désert au coucher de soleil et dîner BBQ",
            host: "Hôte professionnel",
            price: "À partir de 35 € par voyageur",
            rating: 4.45
        },
        {
            image: "https://images.unsplash.com/photo-1766019463317-1cc801c15e61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGNvbmNlcnQlMjBleHBlcmllbmNlfGVufDF8fHx8MTc2Nzg2MTkxMHww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Excursion matinale dans le désert : lever du soleil et sport",
            host: "Hôte professionnel",
            price: "À partir de 21 € par voyageur",
            rating: 4.88
        },
        {
            image: "https://images.unsplash.com/photo-1655959473554-2c6f0fc9e4a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXNlcnQlMjBzdW5zZXQlMjBkdWJhaXxlbnwxfHx8fDE3Njc4NjE5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Safari dans le désert au coucher du soleil, dîner et spectacle de lanternes",
            host: "Hôte professionnel",
            price: "À partir de 29 € par voyageur",
            rating: 4.64
        },
        {
            image: "https://images.unsplash.com/photo-1766090648323-41d6b4de0958?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdHYlMjBxdWFkJTIwZGVzZXJ0fGVufDF8fHx8MTc2Nzg2MTkxNXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Safari dans le désert avec barbecues, balade en chameau et quad",
            host: "Hôte professionnel",
            price: "À partir de 35 € par voyageur",
            rating: 4.34
        },
        {
            image: "https://images.unsplash.com/photo-1730046881361-7780827f070b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMGNhbWVsJTIwZGVzZXJ0fGVufDF8fHx8MTc2Nzg2MTkxNnww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite au coucher du soleil, quad, fauconnerie et aventure",
            host: "Hôte professionnel",
            price: "À partir de 33 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1696880406958-925cffcbcd68?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHBhbGFjZSUyMHRvdXJ8ZW58MXx8fHwxNzY3ODYxOTE2fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Excursion inoubliable d'une journée de Dubaï à Abu Dhabi",
            host: "Hôte professionnel",
            price: "À partir de 29 € par voyageur",
            rating: 4.32
        }
    ];
    // Expériences · Madrid
    const madridExperiences = [
        {
            image: "https://images.unsplash.com/photo-1653212452950-63bdcf07fd04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjB0YXBhcyUyMGZvb2R8ZW58MXx8fHwxNzY3ODYyMjg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez l'historique Madrid",
            host: "Hôte professionnel",
            price: "À partir de 22 € par voyageur",
            rating: 4.88
        },
        {
            image: "https://images.unsplash.com/photo-1513882255491-180123da744e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBmbGFtZW5jbyUyMGRhbmNlfGVufDF8fHx8MTc2Nzg2MjI4OHww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez le flamenco authentique",
            host: "Hôte professionnel",
            price: "À partir de 22 € par voyageur",
            rating: 4.83
        },
        {
            image: "https://images.unsplash.com/photo-1658922184330-001b78430070?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjByb3lhbCUyMHBhbGFjZXxlbnwxfHx8fDE3Njc4NjIyODh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez les meilleurs vins d'Espagne de Madrid avec un spécialiste",
            host: "Hôte particulier",
            price: "À partir de 60 € par voyageur",
            rating: 4.94
        },
        {
            image: "https://images.unsplash.com/photo-1677076388220-e596780b1c7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjB3aW5lJTIwdGFzdGluZ3xlbnwxfHx8fDE3Njc4NjIyODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Dîner des vins espagnols à Madrid",
            host: "Hôte créateur de métier",
            price: "À partir de 30 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1653421579378-e0b58f596482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBjb29raW5nJTIwY2xhc3N8ZW58MXx8fHwxNzY3ODYyMjg5fDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Madrid racine : histoire, accents et anecdotes",
            host: "Hôte particulier",
            price: "À partir de 24 € par voyageur",
            rating: 4.93
        },
        {
            image: "https://images.unsplash.com/photo-1661331149601-0cb146e9e90b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBjaXR5JTIwdG91cnxlbnwxfHx8fDE3Njc4NjIyODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Entre-Madrid Déblotion Tapas",
            host: "Hôte particulier",
            price: "À partir de 69 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1715719461650-427c2a3f8f6f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBhcmNoaXRlY3R1cmUlMjBsYW5kbWFya3xlbnwxfHx8fDE3Njc4NjIyODl8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Le secret de Madrid",
            host: "Hôte particulier",
            price: "À partir de 22 € par voyageur",
            rating: 4.98
        }
    ];
    // Expériences · Rome
    const romeExperiences = [
        {
            image: "https://images.unsplash.com/photo-1586197132548-e2e19edf9f89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwcGFzdGElMjBjb29raW5nfGVufDF8fHx8MTc2Nzg2MjI4OXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Préparez des fettuccine et du tiramisu avec une hôtelière",
            host: "Hôte particulier",
            price: "À partir de 89 € par voyageur",
            rating: 4.87
        },
        {
            image: "https://images.unsplash.com/photo-1608541883371-36cd8513e07f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwd2Fsa2luZyUyMHRvdXJ8ZW58MXx8fHwxNzY3ODYyMjkwfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite guidée : Colisée, Forum et Palatin",
            host: "Hôte professionnel",
            price: "À partir de 54 € par voyageur",
            rating: 4.68
        },
        {
            image: "https://images.unsplash.com/photo-1721481955791-59b51486b3f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwY29sb3NzZXVtJTIwdG91cnxlbnwxfHx8fDE3Njc4NjIyOTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Tournée des bars à Rome",
            host: "Hôte professionnel",
            price: "À partir de 36 € par voyageur",
            rating: 4.89
        },
        {
            image: "https://images.unsplash.com/photo-1605890066806-0c9b56c9030c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwdmVzcGElMjB0b3VyfGVufDF8fHx8MTc2Nzg2MjI5MXww&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez les incontournables de Rome avec un artiste local",
            host: "Hôte professionnel",
            price: "À partir de 49 € par voyageur",
            rating: 4.97
        },
        {
            image: "https://images.unsplash.com/photo-1672073885586-512de43a23b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwZm9vZCUyMHRvdXJ8ZW58MXx8fHwxNzY3ODYyMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Préparez des pâtes et du tiramisu avec Sabrina",
            host: "Hôte particulier",
            price: "À partir de 56 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1732700363886-61cff81859d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwdmF0aWNhbiUyMHRvdXJ8ZW58MXx8fHwxNzY3ODYyMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Découvrez les couloirs du Vatican",
            host: "Hôte professionnel",
            price: "À partir de 50 € par voyageur",
            rating: 4.98
        },
        {
            image: "https://images.unsplash.com/photo-1723642019384-bc5e4b987c2e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21lJTIwcGl6emElMjBtYWtpbmd8ZW58MXx8fHwxNzY3ODYyMjkxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            badge: 'Populaire',
            title: "Visite à pied avec un archéologue",
            host: "Hôte professionnel",
            price: "À partir de 54 € par voyageur",
            rating: 4.96
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-white",
        children: [
            !isScrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceSearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceSearchBar"], {}, void 0, false, {
                fileName: "[project]/src/app/pages/Experiences.tsx",
                lineNumber: 386,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "HOMIQIO Originals",
                        subtitle: "Organisées par des hôtes d'exception",
                        showMoreLink: true,
                        children: originalsExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `original-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 397,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 396,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 390,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        ref: sectionTitleRef,
                        className: "px-4 sm:px-6 lg:px-12 mb-8",
                        initial: {
                            opacity: 0,
                            y: 30
                        },
                        animate: isSectionInView ? {
                            opacity: 1,
                            y: 0
                        } : {
                            opacity: 0,
                            y: 30
                        },
                        transition: {
                            duration: 0.6,
                            ease: "easeOut"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl md:text-3xl",
                            style: {
                                fontWeight: 600
                            },
                            children: "Populaires auprès d'autres voyageurs"
                        }, void 0, false, {
                            fileName: "[project]/src/app/pages/Experiences.tsx",
                            lineNumber: 410,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 403,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Expériences · Paris",
                        showMoreLink: true,
                        children: popularExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `paris-exp-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 422,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 421,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 416,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Expériences · Londres",
                        showMoreLink: true,
                        children: londonExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `london-exp-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 434,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 433,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 428,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Expériences · Dubaï",
                        showMoreLink: true,
                        children: dubaiExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `dubai-exp-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 446,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 445,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 440,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Expériences · Madrid",
                        showMoreLink: true,
                        children: madridExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `madrid-exp-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 458,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 457,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 452,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Expériences · Rome",
                        showMoreLink: true,
                        children: romeExperiences.map((experience, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[300px] sm:w-[320px] lg:w-[350px]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$ExperienceCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExperienceCard"], {
                                    ...experience,
                                    id: `rome-exp-${index + 1}`,
                                    onClick: onExperienceClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Experiences.tsx",
                                    lineNumber: 470,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Experiences.tsx",
                                lineNumber: 469,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Experiences.tsx",
                        lineNumber: 464,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/Experiences.tsx",
                lineNumber: 388,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/pages/Experiences.tsx",
        lineNumber: 384,
        columnNumber: 5
    }, this);
}
_s(Experiences, "kiVL0ePfAPDBoB6bvNqm0Sf6/7g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$utils$2f$use$2d$in$2d$view$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useInView"]
    ];
});
_c = Experiences;
var _c;
__turbopack_context__.k.register(_c, "Experiences");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/experiences/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExperiencesPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Experiences$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/pages/Experiences.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/ScrollContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ExperiencesPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isScrolled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"])();
    // Handle experience click
    const handleExperienceClick = (id)=>{
        router.push(id ? `/experience/${id}` : '/experience/1');
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Experiences$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Experiences"], {
        isScrolled: isScrolled,
        onExperienceClick: handleExperienceClick
    }, void 0, false, {
        fileName: "[project]/app/(main)/experiences/page.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
_s(ExperiencesPage, "1q3bUXcE/MqVKnH+pOZWKud9GCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"]
    ];
});
_c = ExperiencesPage;
var _c;
__turbopack_context__.k.register(_c, "ExperiencesPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_ffa18967._.js.map