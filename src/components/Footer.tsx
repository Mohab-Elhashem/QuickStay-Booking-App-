import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

export default function Footer() {
    const date = new Date().getFullYear();

    return (
        <footer className="bg-[#F6F9FC] px-6 md:px-16 lg:px-24 pt-12 pb-6 w-full text-gray-500">
            <div className="flex flex-col lg:flex-row justify-between w-full gap-10 border-b border-gray-200 pb-10">
                {/* Brand Info */}
                <div className="max-w-sm">
                    <Link to="/">
                        <img
                            src={assets.logo}
                            alt="QuickStay Logo"
                            className="h-7 md:h-9 mb-4 invert opacity-80 cursor-pointer object-contain"
                        />
                    </Link>
                    <p className="text-sm leading-relaxed text-gray-600">
                        Discover the world's most extraordinary places to stay, from boutique hotels to luxury villas and private islands.
                    </p>
                </div>

                {/* Links & Newsletter */}
                <div className="flex flex-col sm:flex-row items-start sm:justify-between lg:justify-end gap-10 lg:gap-20 flex-1">
                    {/* Navigation Links */}
                    <div>
                        <h2 className="font-semibold mb-4 text-gray-800">Company</h2>
                        <ul className="text-sm space-y-2.5">
                            <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
                            <li><Link to="/rooms" className="hover:text-indigo-600 transition-colors">Hotels</Link></li>
                            <li><Link to="/experience" className="hover:text-indigo-600 transition-colors">Experience</Link></li>
                            <li><Link to="/about" className="hover:text-indigo-600 transition-colors">About</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Form */}
                    <div className="max-w-md w-full sm:w-auto">
                        <h2 className="font-semibold text-gray-800 mb-3">Subscribe to our newsletter</h2>
                        <p className="text-sm text-gray-600 mb-4">
                            The latest news, articles, and resources, sent to your inbox weekly.
                        </p>

                        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row items-center gap-2 w-full">
                            <input
                                className="border border-gray-300 focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600 outline-none w-full sm:w-64 h-10 rounded-lg px-3 text-sm text-gray-800 placeholder-gray-400 bg-white transition-all"
                                type="email"
                                required
                                placeholder="Enter your email"
                            />
                            <button
                                type="submit"
                                className="cursor-pointer bg-indigo-600 hover:bg-indigo-700 w-full sm:w-auto px-5 h-10 text-sm font-medium text-white rounded-lg transition-colors shrink-0"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <p className="pt-6 text-center text-xs md:text-sm text-gray-500">
                Copyright {date} © <Link to="/" className="hover:underline font-medium text-gray-700">QuickStay</Link>. All Rights Reserved.
            </p>
        </footer>
    );
}