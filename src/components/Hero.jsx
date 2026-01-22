const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 animated-gradient"></div>

            {/* Gradient Orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent-purple/30 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-pink/20 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-blue/10 rounded-full blur-[150px]"></div>

            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-full mb-8 shadow-sm dark:shadow-none">
                    <span className="w-2 h-2 bg-green-500 dark:bg-green-400 rounded-full animate-pulse"></span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">Over 10,000+ Games Available</span>
                </div>

                {/* Main Heading */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                    <span className="text-gray-900 dark:text-white">Play </span>
                    <span className="text-gradient">Unlimited</span>
                    <br />
                    <span className="text-gray-900 dark:text-white">Free Games</span>
                </h1>

                {/* Subheading */}
                <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10">
                    Discover an endless world of entertainment. Action, puzzle, racing, adventure —
                    all your favorite games in one place. No downloads, just play!
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button className="group relative px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue rounded-xl font-bold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-glow-lg">
                        <span className="relative z-10 flex items-center gap-2">
                            <span>Start Playing</span>
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-accent-blue via-accent-purple to-accent-pink opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>

                    <button className="px-8 py-4 bg-white/80 dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-xl font-semibold text-gray-900 dark:text-white text-lg hover:bg-gray-50 dark:hover:bg-white/10 transition-all duration-300 shadow-sm dark:shadow-none">
                        Browse Categories
                    </button>
                </div>

                {/* Stats */}
                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                    {[
                        { value: '10K+', label: 'Games' },
                        { value: '50M+', label: 'Players' },
                        { value: '4.8', label: 'Rating' },
                        { value: '100%', label: 'Free' },
                    ].map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-gradient">{stat.value}</div>
                            <div className="text-gray-600 dark:text-gray-500 text-sm mt-1">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Game Icons */}
            <div className="absolute top-1/4 left-[10%] float-animation" style={{ animationDelay: '0s' }}>
                <div className="w-16 h-16 bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-3xl shadow-card">
                    🎮
                </div>
            </div>
            <div className="absolute top-1/3 right-[15%] float-animation" style={{ animationDelay: '1s' }}>
                <div className="w-14 h-14 bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-2xl shadow-card">
                    🏆
                </div>
            </div>
            <div className="absolute bottom-1/4 left-[15%] float-animation" style={{ animationDelay: '2s' }}>
                <div className="w-12 h-12 bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-xl shadow-card">
                    ⚡
                </div>
            </div>
            <div className="absolute bottom-1/3 right-[10%] float-animation" style={{ animationDelay: '3s' }}>
                <div className="w-14 h-14 bg-white/80 dark:bg-dark-700/80 backdrop-blur-xl rounded-2xl border border-gray-200 dark:border-white/10 flex items-center justify-center text-2xl shadow-card">
                    🎯
                </div>
            </div>
        </section>
    );
};

export default Hero;
