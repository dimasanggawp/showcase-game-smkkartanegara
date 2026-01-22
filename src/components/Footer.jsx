import { useState, useEffect } from 'react';
import logoTkj from '../assets/logo-tkj.png';
import logoTkjLight from '../assets/logo-tkj-light.png';

const Footer = () => {
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

    const footerLinks = {
        games: [
            { name: 'New Games', href: '#new' },
            { name: 'Trending', href: '#trending' },
            { name: 'Popular', href: '#' },
            { name: 'Multiplayer', href: '#' },
        ],
        categories: [
            { name: 'Action', href: '#' },
            { name: 'Puzzle', href: '#' },
            { name: 'Racing', href: '#' },
            { name: 'Adventure', href: '#' },
        ],
        company: [
            { name: 'About Us', href: '#' },
            { name: 'Careers', href: '#' },
            { name: 'Contact', href: '#' },
            { name: 'Blog', href: '#' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Cookie Policy', href: '#' },
        ],
    };

    const socialLinks = [
        { name: 'Twitter', icon: '𝕏', href: '#' },
        { name: 'Discord', icon: '💬', href: '#' },
        { name: 'YouTube', icon: '▶', href: '#' },
        { name: 'Instagram', icon: '📷', href: '#' },
    ];

    return (
        <footer className="relative bg-gray-100 dark:bg-dark-800 border-t border-gray-200 dark:border-white/5 mt-16 transition-colors duration-300">
            {/* Gradient Line */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-purple to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 flex items-center justify-center overflow-hidden border border-white/10">
                                <img src={isDark ? logoTkjLight : logoTkj} alt="TKJ Logo" className="w-8 h-8 object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-lg font-bold text-gradient leading-tight">Game Development</span>
                                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">SMK Kartanegara Wates</span>
                            </div>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 max-w-xs">
                            Your ultimate destination for free online games.
                            Proudly in partnership with <a href="https://www.gamelab.id" target="_blank" rel="noopener noreferrer" className="text-accent-purple hover:underline">Gamelab Indonesia</a>.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="w-10 h-10 bg-white dark:bg-dark-700 rounded-xl flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-amber-500 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-dark-600 transition-all duration-200 border border-gray-200 dark:border-white/5 hover:border-accent-purple/30"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Games Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Games</h4>
                        <ul className="space-y-3">
                            {footerLinks.games.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-white text-sm transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Categories Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Categories</h4>
                        <ul className="space-y-3">
                            {footerLinks.categories.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-white text-sm transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Company</h4>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-white text-sm transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Links */}
                    <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.name}>
                                    <a href={link.href} className="text-gray-600 dark:text-gray-400 hover:text-amber-500 dark:hover:text-white text-sm transition-colors duration-200">
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 Game Development SMK Kartanegara Wates. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                        Dibuat dengan <span className="text-red-500">❤</span> untuk seluruh Game Developer Indonesia
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
