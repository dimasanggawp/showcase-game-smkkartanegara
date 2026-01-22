const StudentGameCard = ({ game }) => {
    const handlePlay = () => {
        window.open(game.gameUrl, '_blank');
    };

    return (
        <div className="group relative bg-white dark:bg-dark-700 rounded-2xl overflow-hidden border border-gray-200 dark:border-white/5 hover:border-accent-purple/30 transition-all duration-300 card-hover shadow-lg dark:shadow-none">
            {/* Image Container */}
            <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-dark-800">
                <img
                    src={game.image}
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                {/* Play Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-100 scale-75">
                    <button
                        onClick={handlePlay}
                        className="w-16 h-16 bg-gradient-to-r from-accent-purple to-accent-pink rounded-full flex items-center justify-center shadow-glow hover:scale-110 transition-transform"
                    >
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                        </svg>
                    </button>
                </div>

                {/* Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                    <span className="px-2.5 py-1 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold rounded-lg flex items-center gap-1">
                        🎓 SISWA
                    </span>
                    {game.isNew && (
                        <span className="px-2.5 py-1 bg-green-500 text-white text-xs font-bold rounded-lg">
                            NEW
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
                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1 group-hover:text-accent-purple transition-colors duration-200">
                    {game.title}
                </h3>

                {/* Author */}
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {game.author}
                </p>

                <div className="flex items-center justify-between text-sm">
                    {/* Rating */}
                    <div className="flex items-center gap-1">
                        <svg className="w-4 h-4 text-yellow-500 dark:text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                        <span className="text-gray-700 dark:text-white font-medium">{game.rating}</span>
                    </div>

                    {/* Play Button */}
                    <button
                        onClick={handlePlay}
                        className="px-4 py-1.5 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg text-white text-xs font-semibold hover:opacity-90 transition-opacity"
                    >
                        Play Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default StudentGameCard;
