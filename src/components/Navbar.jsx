import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';
import logoTkj from '../assets/logo-tkj.png';
import logoTkjLight from '../assets/logo-tkj-light.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    useEffect(() => {
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'Categories', href: '#categories' },
        { name: 'New Games', href: '#new' },
        { name: 'Gamelab', href: 'https://www.gamelab.id', external: true },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-dark-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 lg:h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-2 mr-8">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 flex items-center justify-center overflow-hidden border border-white/10">
                            <img src={isDark ? logoTkjLight : logoTkj} alt="TKJ Logo" className="w-8 h-8 object-contain" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg font-bold text-gradient leading-tight">Game Development</span>
                            <span className="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400">SMK Kartanegara Wates</span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                target={link.external ? "_blank" : undefined}
                                rel={link.external ? "noopener noreferrer" : undefined}
                                className="text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-white transition-colors duration-200 font-medium"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Search Bar */}
                    <div className="hidden sm:flex items-center flex-1 max-w-md mx-8">
                        <div className="relative w-full">
                            <input
                                type="text"
                                placeholder="Search games..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2.5 pl-10 bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple/50 focus:ring-2 focus:ring-accent-purple/20 transition-all duration-200"
                            />
                            <svg
                                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                />
                            </svg>
                        </div>
                    </div>

                    {/* User Actions */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />
                        <button className="hidden sm:flex px-5 py-2.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl font-semibold text-white hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-accent-purple/25">
                            Sign In
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-dark-700 text-gray-300"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {isMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-white/5">
                        <div className="flex flex-col gap-4">
                            <div className="px-4">
                                <ThemeToggle />
                            </div>
                            {/* Mobile Search */}
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Search games..."
                                    className="w-full px-4 py-2.5 pl-10 bg-gray-100 dark:bg-dark-700 border border-gray-200 dark:border-white/10 rounded-xl text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:border-accent-purple/50"
                                />
                                <svg
                                    className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </div>

                            {/* Mobile Links */}
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    target={link.external ? "_blank" : undefined}
                                    rel={link.external ? "noopener noreferrer" : undefined}
                                    className="text-gray-600 dark:text-gray-300 hover:text-accent-purple dark:hover:text-white transition-colors duration-200 font-medium py-2"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {link.name}
                                </a>
                            ))}

                            <button className="px-5 py-2.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl font-semibold text-white">
                                Sign In
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
