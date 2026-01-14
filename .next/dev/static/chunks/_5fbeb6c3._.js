(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/components/PropertyCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PropertyCard",
    ()=>PropertyCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
function PropertyCard({ id, image, title, location, date, price, rating, badge, guests, beds, onClick }) {
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
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleFavoriteClick,
                        className: "absolute top-3 right-3 hover:scale-110 transition-transform z-10",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                            className: `w-6 h-6 ${isFavorite ? 'fill-[#1E3A5F] text-[#1E3A5F]' : 'fill-black/50 text-white'} stroke-2`
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PropertyCard.tsx",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this),
                    badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `absolute top-3 left-3 px-3 py-1 rounded-full shadow-sm flex items-center gap-1.5 ${badge === 'Originals' ? 'bg-white' : 'bg-white'}`,
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
                                    fileName: "[project]/src/app/components/PropertyCard.tsx",
                                    lineNumber: 66,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 65,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs",
                                style: {
                                    fontWeight: 600
                                },
                                children: badge
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 69,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PropertyCard.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-start justify-between",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-[15px] line-clamp-1",
                            style: {
                                fontWeight: 600
                            },
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/src/app/components/PropertyCard.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600",
                        children: location
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    guests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600",
                        children: guests
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 78,
                        columnNumber: 20
                    }, this),
                    beds && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs text-gray-600",
                        children: beds
                    }, void 0, false, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 79,
                        columnNumber: 18
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-1 flex items-center gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600",
                                children: price
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600 mx-1",
                                children: "·"
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "12",
                                height: "12",
                                viewBox: "0 0 12 12",
                                fill: "currentColor",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "text-gray-600",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M6 0L7.854 4.146L12 4.854L8.708 7.708L9.708 12L6 9.708L2.292 12L3.292 7.708L0 4.854L4.146 4.146L6 0Z"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/components/PropertyCard.tsx",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-xs text-gray-600",
                                children: rating.toFixed(2)
                            }, void 0, false, {
                                fileName: "[project]/src/app/components/PropertyCard.tsx",
                                lineNumber: 86,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/components/PropertyCard.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/components/PropertyCard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/components/PropertyCard.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(PropertyCard, "k950Z1JpPS3WYtE75BCawi6VGEM=");
_c = PropertyCard;
var _c;
__turbopack_context__.k.register(_c, "PropertyCard");
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
"[project]/src/app/pages/Home.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Home",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PropertyCard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/PropertyCarousel.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/SearchBar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/context/AuthContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
function Home({ isScrolled, onPropertyClick, onSearch }) {
    _s();
    const { isAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    // Données pour "Annonces consultées récemment" (Recently Viewed Properties)
    const recentlyViewedProperties = [
        {
            image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NzU5NjExMHww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement moderne · Paris",
            location: "Hôte particulier",
            date: "",
            price: "250 € pour 2 nuits",
            rating: 4.95,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc1MzY5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Studio luxueux · Lyon",
            location: "Hôte professionnel",
            date: "",
            price: "180 € pour 2 nuits",
            rating: 4.88,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU5OTA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Maison entière · Marseille",
            location: "Hôte particulier",
            date: "",
            price: "320 € pour 2 nuits",
            rating: 5.0,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1610343958761-ca16e472130e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3Njc2MjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Loft avec vue · Nice",
            location: "Hôte particulier",
            date: "",
            price: "210 € pour 2 nuits",
            rating: 4.92,
            badge: 'Coup de coeur'
        }
    ];
    // Données pour "Logements populaires · Paris"
    const parisProperties = [
        {
            image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tfGVufDF8fHx8MTc2NzU5NjExMHww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Paris",
            location: "Hôte particulier",
            date: "",
            price: "197 € pour 2 nuits",
            rating: 4.93,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1667153653404-11bc88130b5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbSUyMGhvdGVsfGVufDF8fHx8MTc2NzYxNjkyNnww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Asnières-sur-Seine",
            location: "Hôte particulier",
            date: "",
            price: "180 € pour 2 nuits",
            rating: 4.92,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBhcGFydG1lbnQlMjBpbnRlcmlvcnxlbnwxfHx8fDE3Njc1MzY5NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement · Gonesse-Villiers",
            location: "Hôte particulier",
            date: "",
            price: "18 € pour 2 nuits",
            rating: 4.96,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1765775635143-6462630748ef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3NTEwODU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement · Paris",
            location: "Hôte particulier",
            date: "",
            price: "168 € pour 2 nuits",
            rating: 4.96,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1610343958761-ca16e472130e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGFydG1lbnQlMjBjaXR5JTIwdmlld3xlbnwxfHx8fDE3Njc2MjEwNTh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement en résidence · Saint-Denis",
            location: "Hôte particulier",
            date: "",
            price: "148 € pour 2 nuits",
            rating: 4.90,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBob3VzZSUyMGludGVyaW9yfGVufDF8fHx8MTc2NzU5OTA1OHww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement · Paris",
            location: "Hôte particulier",
            date: "",
            price: "160 € pour 2 nuits",
            rating: 5.0,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5fGVufDF8fHx8MTc2NzYwMTQyOXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Hébergement · Paris",
            location: "Hôte particulier",
            date: "",
            price: "160 € pour 2 nuits",
            rating: 4.92,
            badge: 'Coup de coeur'
        }
    ];
    // Données pour "Hôtels à la une (Madrid)"
    const madridHotels = [
        {
            image: "https://images.unsplash.com/photo-1760354527031-869c0315d7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMGJvdXRpcXVlfGVufDF8fHx8MTc2Nzc5NTU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "easyHotel Madrid Alcala",
            location: "À partir de 116 € pour 2 nuits",
            date: "",
            price: "",
            rating: 4.75,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1632228526522-cdbb7fac12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzgwNjczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Hotel Suites Feria de Madrid",
            location: "À partir de 178 € pour 2 nuits",
            date: "",
            price: "",
            rating: 4.78,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1600790298410-fa81c74d9732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzY3ODA2NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Catalonia Atocha",
            location: "À partir de 420 € pour 2 nuits",
            date: "",
            price: "",
            rating: 5.0,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1737807478452-260777e0505d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMGx1eHVyeXxlbnwxfHx8fDE3Njc4MDY3Mzh8MA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "The Social Hub Madrid 4 Stars",
            location: "À partir de 285 € pour 2 nuits",
            date: "",
            price: "",
            rating: 5.0,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1760354527031-869c0315d7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMGJvdXRpcXVlfGVufDF8fHx8MTc2Nzc5NTU3OXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "chickbasic dot",
            location: "À partir de 294 € pour 2 nuits",
            date: "",
            price: "",
            rating: 4.89,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1632228526522-cdbb7fac12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMGludGVyaW9yfGVufDF8fHx8MTc2NzgwNjczN3ww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "NH Madrid Barajas Airport",
            location: "À partir de 190 € pour 2 nuits",
            date: "",
            price: "",
            rating: 4.77,
            badge: 'Coup de coeur'
        },
        {
            image: "https://images.unsplash.com/photo-1600790298410-fa81c74d9732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWRyaWQlMjBob3RlbCUyMHBvb2x8ZW58MXx8fHwxNzY3ODA2NzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "SmarTrental Collection Gran Vía Centric",
            location: "À partir de 403 € pour 2 nuits",
            date: "",
            price: "",
            rating: 4.95,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements disponibles le mois prochain · Londres"
    const londonProperties = [
        {
            image: "https://images.unsplash.com/photo-1595848463742-764e6b5c11d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc2Nzc5NTU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · East Ham",
            location: "Hôte particulier",
            date: "",
            price: "99 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1650533966999-c07a71fd9146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3Nzk1NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Hébergement · Acton",
            location: "Hôte particulier",
            date: "",
            price: "116 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1604701145698-2b38c3e20124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzY3Nzk1NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Paddington",
            location: "Hôte particulier",
            date: "",
            price: "178 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1595848463742-764e6b5c11d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc2Nzc5NTU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Appartement · Bloomsbury",
            location: "Hôte professionnel",
            date: "",
            price: "203 € pour 2 nuits",
            rating: 4.89,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1650533966999-c07a71fd9146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBob3RlbCUyMHJvb218ZW58MXx8fHwxNzY3Nzk1NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Londres",
            location: "Hôte particulier",
            date: "",
            price: "95 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1604701145698-2b38c3e20124?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBtb2Rlcm4lMjBhcGFydG1lbnR8ZW58MXx8fHwxNzY3Nzk1NTgxfDA&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Churchill Gardens",
            location: "Hôte particulier",
            date: "",
            price: "164 € pour 2 nuits",
            rating: 4.84,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1595848463742-764e6b5c11d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBhcGFydG1lbnQlMjBiZWRyb29tfGVufDF8fHx8MTc2Nzc5NTU4MXww&ixlib=rb-4.1.0&q=80&w=1080",
            title: "Chambre · Shadwell",
            location: "Hôte particulier",
            date: "",
            price: "133 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements · Riyad"
    const riyadProperties = [
        {
            image: "https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Riyad",
            location: "Hôte particulier",
            date: "",
            price: "78 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Riyad",
            location: "Hôte particulier",
            date: "",
            price: "154 € pour 2 nuits",
            rating: 4.91,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Al Aqeeq",
            location: "Hôte particulier",
            date: "",
            price: "299 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1614622350812-96b09c78af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Al Aqeeq",
            location: "Hôte particulier",
            date: "",
            price: "94 € pour 2 nuits",
            rating: 4.59,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1760259905231-2ccbddb7d147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Al Aoud",
            location: "Hôte particulier",
            date: "",
            price: "130 € pour 2 nuits",
            rating: 4.92,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Al Aoud",
            location: "Hôte particulier",
            date: "",
            price: "92 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Al Qadisiyah",
            location: "Hôte particulier",
            date: "",
            price: "79 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements disponibles le mois prochain · Dubaï"
    const dubaiProperties = [
        {
            image: "https://images.unsplash.com/photo-1637747021728-22764b40bd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï-centre-ville",
            location: "Hôte particulier",
            date: "",
            price: "221 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï-centre-ville",
            location: "Hôte particulier",
            date: "",
            price: "208 € pour 2 nuits",
            rating: 4.86,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï",
            location: "Hôte particulier",
            date: "",
            price: "193 € pour 2 nuits",
            rating: 4.91,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1614622350812-96b09c78af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï-centre-ville",
            location: "Hôte particulier",
            date: "",
            price: "193 € pour 2 nuits",
            rating: 4.91,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1760259905231-2ccbddb7d147?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï",
            location: "Hôte particulier",
            date: "",
            price: "137 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1646662521253-5b9253b1a207?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï",
            location: "Hôte particulier",
            date: "",
            price: "176 € pour 2 nuits",
            rating: 4.89,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1594873604892-b599f847e859?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Dubaï",
            location: "Hôte particulier",
            date: "",
            price: "171 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements · Madrid"
    const madridApartments = [
        {
            image: "https://images.unsplash.com/photo-1680601531588-1944422d1bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hébergement · Madrid",
            location: "Hôte particulier",
            date: "",
            price: "104 € pour 2 nuits",
            rating: 4.74,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1543273519-e0fe02a0757e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre partagée · Lavapiés",
            location: "Hôte particulier",
            date: "",
            price: "44 € pour 2 nuits",
            rating: 4.77,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1570136608985-36fdcec5b7da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Usera",
            location: "Hôte professionnel",
            date: "",
            price: "40 € pour 2 nuits",
            rating: 4.93,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1600790298410-fa81c74d9732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre partagée · Lavapiés",
            location: "Hôte professionnel",
            date: "",
            price: "42 € pour 2 nuits",
            rating: 4.5,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1680601531588-1944422d1bd2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hébergement · Ópera",
            location: "Hôte particulier",
            date: "",
            price: "95 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1632228526522-cdbb7fac12dc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Delicias",
            location: "Hôte particulier",
            date: "",
            price: "48 € pour 2 nuits",
            rating: 4.91,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1760354527031-869c0315d7c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Maison d'hôtes · Retiro",
            location: "Hôte professionnel",
            date: "",
            price: "130 € pour 2 nuits",
            rating: 4.75,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements disponibles le mois prochain · Rome"
    const romeProperties = [
        {
            image: "https://images.unsplash.com/photo-1729755033606-251c462a8bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Aurélio",
            location: "Hôte particulier",
            date: "",
            price: "110 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1658077306197-a848d26c6e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Loft · Colonna",
            location: "Hôte professionnel",
            date: "",
            price: "128 € pour 2 nuits",
            rating: 4.78,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1702014859878-5d4743176d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre d'hôtel · Rome",
            location: "Hôte professionnel",
            date: "",
            price: "96 € pour 2 nuits",
            rating: 4.86,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1600790298410-fa81c74d9732?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · EUR",
            location: "Hôte particulier",
            date: "",
            price: "60 € pour 2 nuits",
            rating: 4.5,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1702014859878-5d4743176d28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Esquilin",
            location: "Hôte particulier",
            date: "",
            price: "78 € pour 2 nuits",
            rating: 4.75,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1729755033606-251c462a8bbf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Rome",
            location: "Hôte professionnel",
            date: "",
            price: "146 € pour 2 nuits",
            rating: 4.89,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1658077306197-a848d26c6e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · Trionfale",
            location: "Hôte professionnel",
            date: "",
            price: "114 € pour 2 nuits",
            rating: 4.86,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements · Milan"
    const milanProperties = [
        {
            image: "https://images.unsplash.com/photo-1536494126589-29fadf0d7e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Milan",
            location: "Hôte particulier",
            date: "",
            price: "154 € pour 2 nuits",
            rating: 4.98,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1718260872589-189e127a99b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · Milan",
            location: "Hôte particulier",
            date: "",
            price: "344 € pour 3 nuits",
            rating: 4.94,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1631176999981-75e49ff7d38c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · Milan",
            location: "Hôte particulier",
            date: "",
            price: "159 € pour 3 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hébergement · Milan",
            location: "Hôte professionnel",
            date: "",
            price: "374 € pour 7 nuits",
            rating: 4.56,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Milan",
            location: "Hôte particulier",
            date: "",
            price: "194 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1702014861736-d62834317c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Garattello",
            location: "Hôte particulier",
            date: "",
            price: "123 € pour 2 nuits",
            rating: 4.8,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1536494126589-29fadf0d7e3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · Milan",
            location: "Hôte professionnel",
            date: "",
            price: "168 € pour 2 nuits",
            rating: 4.99,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements à découvrir · Budapest"
    const budapestProperties = [
        {
            image: "https://images.unsplash.com/photo-1719849448528-bf30db61d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · 9ème arrondissement de Budapest",
            location: "Hôte particulier",
            date: "",
            price: "121 € pour 2 nuits",
            rating: 4.84,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · 8ème arrondissement de Budapest",
            location: "Hôte particulier",
            date: "",
            price: "98 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · 3ème arrondissement de Budapest",
            location: "Hôte particulier",
            date: "",
            price: "148 € pour 2 nuits",
            rating: 4.83,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1702014861736-d62834317c5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · 6ème arrondissement de Budapest",
            location: "Hôte professionnel",
            date: "",
            price: "68 € pour 2 nuits",
            rating: 4.83,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1638454668466-e8dbd5462f20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · 8ème arrondissement de Budapest",
            location: "Hôte privé",
            date: "",
            price: "106 € pour 2 nuits",
            rating: 4.52,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1614622350812-96b09c78af77?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · 7ème arrondissement de Budapest",
            location: "Hôte particulier",
            date: "",
            price: "87 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1719849448528-bf30db61d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · 7ème arrondissement de Budapest",
            location: "Hôte particulier",
            date: "",
            price: "98 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements populaires · Barcelone"
    const barcelonaProperties = [
        {
            image: "https://images.unsplash.com/photo-1693478075635-bf2742c3ea09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hôtel · Gràcia",
            location: "Hôte professionnel",
            date: "",
            price: "190 € pour 2 nuits",
            rating: 4.83,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1560448076-957f79776e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Sants-Montjuïc",
            location: "Hôte particulier",
            date: "",
            price: "164 € pour 2 nuits",
            rating: 4.75,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1600813547757-39c40da12c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hôtel · Can Magarola",
            location: "Hôte professionnel",
            date: "",
            price: "168 € pour 2 nuits",
            rating: 4.88,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1663756915301-2ba688e078cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre d'hôtel partagée · Les Corts",
            location: "Hôte professionnel",
            date: "",
            price: "114 € pour 2 nuits",
            rating: 4.92,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1639751907353-3629fc00d2b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hébergement · el Barri Gòtic",
            location: "Hôte particulier",
            date: "",
            price: "114 € pour 2 nuits",
            rating: 4.83,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1693478075635-bf2742c3ea09?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hôtel · Can Magarola",
            location: "Hôte professionnel",
            date: "",
            price: "164 € pour 2 nuits",
            rating: 4.83,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1560448076-957f79776e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Gràcia",
            location: "Hôte particulier",
            date: "",
            price: "194 € pour 2 nuits",
            rating: 4.92,
            badge: 'Populaire'
        }
    ];
    // Données pour "Logements · Le Cap"
    const capeTownProperties = [
        {
            image: "https://images.unsplash.com/photo-1549387025-c6b3d88e0ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Centre-ville du Cap",
            location: "Hôte particulier",
            date: "",
            price: "112 € pour 2 nuits",
            rating: 5.0,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1654161975362-a1dbab6ba37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Chambre · Oranjezicht",
            location: "Hôte particulier",
            date: "",
            price: "64 € pour 2 nuits",
            rating: 4.89,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1701445952131-eaab0a82fb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Suite · Bloubergstrand",
            location: "Hôte particulier",
            date: "",
            price: "82 € pour 2 nuits",
            rating: 4.86,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1549387025-c6b3d88e0ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement · Centre-ville du Cap",
            location: "Hôte particulier",
            date: "",
            price: "16 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1654161975362-a1dbab6ba37d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Appartement en résidence · Centre-ville du Cap",
            location: "Hôte professionnel",
            date: "",
            price: "70 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1701445952131-eaab0a82fb08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Suite · Claremont",
            location: "Hôte particulier",
            date: "",
            price: "90 € pour 2 nuits",
            rating: 4.93,
            badge: 'Populaire'
        },
        {
            image: "https://images.unsplash.com/photo-1549387025-c6b3d88e0ccb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            title: "Hébergement · Sea Point",
            location: "Hôte professionnel",
            date: "",
            price: "27 € pour 2 nuits",
            rating: 4.9,
            badge: 'Populaire'
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            !isScrolled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$SearchBar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SearchBar"], {
                onSearch: onSearch
            }, void 0, false, {
                fileName: "[project]/src/app/pages/Home.tsx",
                lineNumber: 795,
                columnNumber: 23
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "pb-12",
                children: [
                    isAuthenticated && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Annonces consultées récemment",
                        showMoreLink: true,
                        children: recentlyViewedProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[18rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `recent-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 806,
                                    columnNumber: 17
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 805,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 800,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements populaires · Paris",
                        showMoreLink: true,
                        children: parisProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `paris-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 819,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 818,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 813,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Hôtels à la une (Madrid)",
                        showMoreLink: true,
                        children: madridHotels.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `madrid-hotel-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 831,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 830,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 825,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements disponibles le mois prochain · Londres",
                        showMoreLink: true,
                        children: londonProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `london-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 843,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 842,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 837,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements · Riyad",
                        showMoreLink: true,
                        children: riyadProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `riyad-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 855,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 854,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 849,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements disponibles le mois prochain · Dubaï",
                        showMoreLink: true,
                        children: dubaiProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `dubai-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 867,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 866,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 861,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements · Madrid",
                        showMoreLink: true,
                        children: madridApartments.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `madrid-apt-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 879,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 878,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 873,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements disponibles le mois prochain · Rome",
                        showMoreLink: true,
                        children: romeProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `rome-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 891,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 890,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 885,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements · Milan",
                        showMoreLink: true,
                        children: milanProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `milan-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 903,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 902,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 897,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements à découvrir · Budapest",
                        showMoreLink: true,
                        children: budapestProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `budapest-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 915,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 914,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 909,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements populaires · Barcelone",
                        showMoreLink: true,
                        children: barcelonaProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `barcelona-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 927,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 926,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 921,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCarousel$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCarousel"], {
                        title: "Logements · Le Cap",
                        showMoreLink: true,
                        children: capeTownProperties.map((property, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-[14rem]",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$PropertyCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PropertyCard"], {
                                    ...property,
                                    id: `capetown-${index + 1}`,
                                    onClick: onPropertyClick
                                }, void 0, false, {
                                    fileName: "[project]/src/app/pages/Home.tsx",
                                    lineNumber: 939,
                                    columnNumber: 15
                                }, this)
                            }, index, false, {
                                fileName: "[project]/src/app/pages/Home.tsx",
                                lineNumber: 938,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/src/app/pages/Home.tsx",
                        lineNumber: 933,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/pages/Home.tsx",
                lineNumber: 797,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Home, "1LGxUrjNz4q7iKM/2JDC9lJQ3xY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"]
    ];
});
_c = Home;
var _c;
__turbopack_context__.k.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/(main)/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/pages/Home.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/hooks/ScrollContext.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HomePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { isScrolled } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"])();
    // Handle property click
    const handlePropertyClick = (id)=>{
        router.push(id ? `/property/${id}` : '/property/1');
    };
    // Handle search
    const handleSearch = (params)=>{
        const searchQuery = new URLSearchParams({
            destination: params.destination || '',
            checkIn: params.checkInDate?.toISOString() || '',
            checkOut: params.checkOutDate?.toISOString() || '',
            adults: params.guestsCount?.adults?.toString() || '0',
            children: params.guestsCount?.children?.toString() || '0',
            babies: params.guestsCount?.babies?.toString() || '0',
            pets: params.guestsCount?.pets?.toString() || '0'
        });
        router.push(`/search?${searchQuery.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$pages$2f$Home$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Home"], {
        isScrolled: isScrolled,
        onPropertyClick: handlePropertyClick,
        onSearch: handleSearch
    }, void 0, false, {
        fileName: "[project]/app/(main)/page.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
_s(HomePage, "1q3bUXcE/MqVKnH+pOZWKud9GCE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$hooks$2f$ScrollContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScrollContext"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_5fbeb6c3._.js.map