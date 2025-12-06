import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { getAssetUrl } from "../../helper_funciton/getAssetsUrl";

const products = [
    {
        name: "arvion",
        title: "Arvion",
        href: "/products/arvion",
        stripImage: getAssetUrl("assets/arvion_h.webp"),
    },
    {
        name: "monarch",
        title: "Monarch",
        href: "/products/monarch",
        stripImage: getAssetUrl("assets/monarch_h.webp"),
    },
    {
        name: "auriqua",
        title: "Auriqua",
        href: "/products/auriqua",
        stripImage: getAssetUrl("assets/auriqua_h.webp"),
    },
    {
        name: "astonia",
        title: "Astonia",
        href: "/products/astonia",
        stripImage: getAssetUrl("assets/astonia_h.webp"),
    },
    {
        name: "manifesta",
        title: "Manifesta",
        href: "/products/manifesta",
        stripImage: getAssetUrl("assets/manifesta_h.webp"),
    },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const location = useLocation();
    const navigate = useNavigate();

    const pathname = location.pathname;
    const isProductPage = pathname.startsWith("/products/");

    /* -----------------------
        Scroll Hide Behavior
    -------------------------*/
    useEffect(() => {
        if (!isProductPage) {
            setIsHeaderVisible(true);
            return;
        }

        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (scrollY > 50) setIsHeaderVisible(false);
            else setIsHeaderVisible(true);
            setLastScrollY(scrollY);
        };

        handleScroll();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isProductPage]);

    /* -----------------------
        Prevent Body Scroll
    -------------------------*/
    useEffect(() => {
        const body = document.body;

        const oldOverflow = body.style.overflow;
        const oldTouch = body.style.touchAction;

        if (isMenuOpen) {
            body.style.overflow = "hidden";
            body.style.touchAction = "none";
        } else {
            body.style.overflow = "";
            body.style.touchAction = "";
        }

        return () => {
            body.style.overflow = oldOverflow;
            body.style.touchAction = oldTouch;
        };
    }, [isMenuOpen]);

    return (
        <header
            className={`fixed top-0 left-0 right-0 w-screen z-[1000] transition-transform duration-300 ease-in-out ${isProductPage && !isHeaderVisible
                    ? "-translate-y-full"
                    : "translate-y-0"
                } ${isProductPage
                    ? "bg-transparent backdrop-blur-none border-none shadow-none"
                    : "bg-gradient-to-b from-black/8 to-black/2 backdrop-blur-none border-b border-white/5"
                }`}
        >
            <nav
                className={`w-full max-w-full ${isProductPage
                    ? "md:pt-4 pt-3 pb-1 md:pb-1 px-4 md:px-8"
                    : "py-2 md:py-3 px-4 md:px-8"
                    }`}
            >
                <div className="flex items-center justify-between relative">

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="w-10 h-10 flex items-center justify-center z-[10001]"
                    >
                        <img
                            src={
                                isMenuOpen
                                    ? getAssetUrl("/assets/products/monarch/hamburger_expanded.svg")
                                    : getAssetUrl("assets/products/monarch/hamburger_collapased.svg")
                            }
                            alt="Menu"
                            className="w-6 h-6"
                        />
                    </button>

                    {/* Center Logo */}
                    <div
                        className="absolute left-1/2 -translate-x-1/2 z-[10001] cursor-pointer"
                        onClick={() => navigate("/")}
                    >
                        <img
                            src={getAssetUrl("assets/Rotoris_logo.svg")}
                            alt="Rotoris Logo"
                            className="w-[122px] h-[18px] md:w-[166px] md:h-[24px]"
                        />
                    </div>

                    <div className="w-10 h-10" />
                </div>
            </nav>

            {/* Overlay */}
            <div
                className={`fixed inset-0 bg-black/50 z-[9999] transition-opacity duration-300 
          ${isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
                onClick={() => setIsMenuOpen(false)}
            />

            {/* Side Panel */}
            <div
                className={`fixed top-0 left-0 h-screen w-full md:w-[500px] bg-[#060609] z-[10000] 
          transition-transform duration-300 overflow-y-auto 
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
            >
                <div className="p-4 md:p-8 pt-16 md:pt-20 flex flex-col h-full">
                    <h2 className="text-white/70 text-sm md:text-lg font-semibold mb-6 uppercase">
                        All timepieces
                    </h2>

                    {/* Products */}
                    <div className="flex flex-col gap-4">
                        {products.map((p) => (
                            <Link
                                key={p.name}
                                to={p.href}
                                className="relative h-32 rounded-lg overflow-hidden group"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                <img
                                    src={p.stripImage}
                                    alt={p.title}
                                    className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-60 transition"
                                />

                                <div className="relative h-full flex items-center justify-end px-6 z-10">
                                    <h3 className="text-white text-lg font-semibold uppercase group-hover:text-white/80">
                                        {p.title}
                                    </h3>

                                    <svg
                                        width="24"
                                        height="24"
                                        fill="none"
                                        stroke="currentColor"
                                        className="ml-2 group-hover:translate-x-1 transition"
                                    >
                                        <path d="M9 18L15 12L9 6" strokeWidth="2" />
                                    </svg>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    );
}
