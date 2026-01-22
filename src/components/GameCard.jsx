const GameCard = ({ game }) => {
    return (
        <div className="group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-accent-purple/30 transition-all duration-300 card-hover shadow-lg dark:shadow-none">
            {/* Image Container */}
            <div className="relative aspect-[4/3] overflow-hidden">
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    <button className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-glow">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    {game.isNew && (
                        <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
                            NEW
                        </span>
                    )}
                    {game.isHot && (
                        <span className="px-2.5 py-1 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-lg flex items-center gap-1">
                            🔥 HOT
                        </span>
                    )}
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 bg-dark-900/80 backdrop-blur-xl text-gray-300 text-xs font-medium rounded-lg border border-white/10">
                        {game.category}
                    </span>
                </div>
            </div>

            {/* Content */}
            <div className="p-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2 group-hover:text-accent-purple transition-colors duration-200">
                    {game.title}
                </h3>

                <div className="flex items-center justify-between text-sm">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-700 dark:text-white font-medium">{game.rating}</span>
                    </div>

                    {/* Plays */}
                    <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>{game.plays}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
