import { useState, useEffect } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

    useEffect(() => {
        const root = window.document.documentElement;
        if (theme === 'dark') {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-dark-700 border border-gray-300 dark:border-white/5 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-accent-purple/50"
            aria-label="Toggle Theme"
        >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-purple/10 to-accent-blue/10 dark:from-transparent dark:to-transparent"></div>
            <div
                className={`
                    absolute top-1 left-1 w-6 h-6 rounded-full transform transition-transform duration-300 flex items-center justify-center shadow-lg
                    ${theme === 'dark' ? 'translate-x-6 bg-dark-800 text-yellow-400' : 'translate-x-0 bg-white text-orange-400'}
                `}
            >
                {theme === 'dark' ? (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                )}
            </div>
        </button>
    );
};

export default ThemeToggle;
