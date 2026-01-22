import React from 'react';

const PartnersSection = () => {
    return (
        <section className="py-16 bg-white dark:bg-dark-900 border-t border-gray-100 dark:border-white/5 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                        Official <span className="text-gradient">Partnership</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Kelas Industri TKJ SMK Kartanegara Wates bekerjasama dengan platform pendidikan teknologi terkemuka di Indonesia.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-20 opacity-80 hover:opacity-100 transition-opacity duration-300">
                    <a
                        href="https://www.gamelab.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col items-center gap-4 transition-transform duration-300 hover:scale-110"
                    >
                        <div className="h-16 sm:h-20 flex items-center justify-center p-4 bg-dark-800 rounded-2xl border border-white/10 group-hover:border-accent-purple/50 transition-all shadow-sm group-hover:shadow-glow">
                            <img
                                src="https://www.gamelab.id/img/Logo_GameLab_Landscape_White.png"
                                alt="Gamelab Indonesia Logo"
                                className="h-full object-contain filter group-hover:scale-105 transition-all duration-300"
                                onError={(e) => {
                                    e.target.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Gamelab_logo.png/640px-Gamelab_logo.png';
                                }}
                            />
                        </div>
                        <span className="text-sm font-semibold text-gray-500 dark:text-gray-400 group-hover:text-accent-purple transition-colors">
                            Gamelab Indonesia
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default PartnersSection;
