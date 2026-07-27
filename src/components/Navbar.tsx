import { useEffect, useState } from "react";
import { navLinks } from "../data/navLinks";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/react";

const BookIcon = () => (
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
    </svg>
);

export default function Navbar() {
    const { openSignIn } = useClerk();
    const { user } = useUser();
    const navigate = useNavigate();
    const location = useLocation();

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const isHomePage = location.pathname === "/";
    const isTransparent = isHomePage && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${!isTransparent
            ? "bg-white/90 shadow-md text-gray-800 backdrop-blur-lg py-3 md:py-4"
            : "py-4 md:py-6 text-white"
            }`}>

            {/* Logo */}
            <Link to="/" className="shrink-0">
                <img
                    src={assets.logo}
                    alt="QuickStay Logo"
                    className={`h-8 md:h-9 transition-all object-contain ${!isTransparent ? "invert opacity-80" : ""}`}
                />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;

                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`group relative py-1 text-sm font-medium transition-colors duration-300 ${isActive
                                    ? !isTransparent ? "text-blue-600 font-semibold" : "text-blue-300 font-semibold"
                                    : !isTransparent ? "text-gray-700 hover:text-black" : "text-white/80 hover:text-white"
                                }`}
                        >
                            {link.name}
                            <span
                                className={`absolute bottom-0 left-0 h-0.5 w-full origin-left transition-transform duration-300 ease-out ${isActive
                                        ? "scale-x-100 " + (!isTransparent ? "bg-blue-600" : "bg-blue-300") 
                                        : "scale-x-0 group-hover:scale-x-100 " + (!isTransparent ? "bg-gray-800" : "bg-white")
                                    }`}
                                aria-hidden="true"
                            />
                        </Link>
                    );
                })}

                <button
                    onClick={() => navigate("/owner")}
                    className={`border px-4 py-1.5 text-xs font-medium rounded-full cursor-pointer transition-all hover:opacity-80 shrink-0 ${location.pathname.startsWith("/owner")
                            ? "bg-blue-600 text-white border-blue-600"
                            : !isTransparent ? "text-gray-800 border-gray-400 hover:bg-gray-100" : "text-white border-white/60 hover:bg-white/10"
                        }`}
                >
                    Dashboard
                </button>
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                <button aria-label="Search" className="p-1 cursor-pointer">
                    <img
                        src={assets.searchIcon}
                        alt=""
                        className={`h-6 w-6 transition-all duration-300 ${!isTransparent ? "invert" : ""}`}
                    />
                </button>

                {user ? (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate("/my-bookings")} />
                        </UserButton.MenuItems>
                    </UserButton>
                ) : (
                    <button
                        onClick={() => openSignIn()}
                        className={`cursor-pointer px-7 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:scale-105 ${!isTransparent
                            ? "text-white bg-black hover:bg-gray-800"
                            : "bg-white text-black hover:bg-gray-100"
                            }`}
                    >
                        Login
                    </button>
                )}
            </div>

            {/* Mobile Right Controls */}
            <div className="flex items-center gap-3 md:hidden">
                {user && (
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={<BookIcon />} onClick={() => navigate("/my-bookings")} />
                        </UserButton.MenuItems>
                    </UserButton>
                )}
                <button
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle Menu"
                    className="p-1.5 cursor-pointer rounded-lg hover:bg-white/10 transition-colors"
                >
                    <img src={assets.menuIcon} alt="" className={`h-5 w-5 transition-all ${!isTransparent ? "invert" : ""}`} />
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <div className={`fixed inset-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-transform duration-500 z-50 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}>
                <button
                    className="absolute top-5 right-5 p-2 cursor-pointer text-gray-600 hover:text-black"
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close Menu"
                >
                    <img src={assets.closeIcon} alt="" className="h-6 w-6" />
                </button>

                {navLinks.map((link) => {
                    const isActive = location.pathname === link.path;
                    return (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsMenuOpen(false)}
                            className={`text-xl font-medium transition-colors ${isActive ? "text-blue-600 font-bold" : "text-gray-800 hover:text-blue-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    );
                })}

                <button
                    onClick={() => { setIsMenuOpen(false); navigate("/owner"); }}
                    className={`border px-8 py-2 text-sm font-medium rounded-full cursor-pointer transition-all mt-2 ${location.pathname.startsWith("/owner")
                            ? "bg-blue-600 text-white border-blue-600"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                >
                    Dashboard
                </button>

                {!user && (
                    <button
                        onClick={() => { setIsMenuOpen(false); openSignIn(); }}
                        className="cursor-pointer px-10 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-all text-sm font-medium"
                    >
                        Login
                    </button>
                )}
            </div>
        </nav>
    );
}