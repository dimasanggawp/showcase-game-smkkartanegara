import GameCard from './GameCard';

const GameSection = ({ title, subtitle, games, id, showSeeAll = true }) => {
    return (
        <section id={id} className="py-12 lg:py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            {title}
                        </h2>
                        {subtitle && <p className="text-gray-600 dark:text-gray-400">{subtitle}</p>}
                    </div>

                    {showSeeAll && (
                        <button className="group flex items-center gap-2 px-4 py-2 bg-white dark:bg-dark-700 rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent-purple/50 transition-all duration-200 shadow-sm dark:shadow-none">
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 dark:group-hover:text-white font-medium">See All</span>
                            <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-purple group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    )}
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <GameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default GameSection;
