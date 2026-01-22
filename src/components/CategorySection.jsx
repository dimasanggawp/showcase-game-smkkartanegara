import { categories } from '../data/games';

const CategorySection = ({ onSelectCategory, activeCategory }) => {
    return (
        <section id="categories" className="py-16 lg:py-24 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex items-center justify-between mb-10">
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                            Browse by <span className="text-gradient">Category</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400">Find your favorite type of games</p>
                    </div>
                </div>

                {/* Categories Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                    {/* All Categories Button */}
                    <button
                        onClick={() => onSelectCategory(null)}
                        className={`group flex flex-col items-center gap-3 p-4 lg:p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-card
                            ${activeCategory === null
                                ? 'bg-accent-purple/20 border-accent-purple shadow-lg shadow-accent-purple/20'
                                : 'bg-white dark:bg-dark-700 border-gray-200 dark:border-white/5 hover:border-accent-purple dark:hover:border-white/20'
                            }`}
                    >
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500 to-gray-700 flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${activeCategory === null ? 'scale-110 rotate-6 ring-2 ring-white/50' : ''}`}>
                            ♾️
                        </div>
                        <span className={`font-medium text-sm transition-colors duration-200 ${activeCategory === null ? 'text-accent-purple dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-accent-purple dark:group-hover:text-white'}`}>
                            All
                        </span>
                    </button>

                    {categories.map((category) => {
                        const isActive = activeCategory === category.name;
                        return (
                            <button
                                key={category.id}
                                onClick={() => onSelectCategory(category.name)}
                                className={`group flex flex-col items-center gap-3 p-4 lg:p-6 rounded-2xl border transition-all duration-300 hover:scale-105 hover:shadow-card
                                    ${isActive
                                        ? 'bg-accent-purple/20 border-accent-purple shadow-lg shadow-accent-purple/20'
                                        : 'bg-white dark:bg-dark-700 border-gray-200 dark:border-white/5 hover:border-accent-purple dark:hover:border-white/20'
                                    }`}
                            >
                                {/* Icon Container */}
                                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center text-2xl transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6 ${isActive ? 'scale-110 rotate-6 ring-2 ring-white/50' : ''}`}>
                                    {category.icon}
                                </div>

                                {/* Name */}
                                <span className={`font-medium text-sm transition-colors duration-200 ${isActive ? 'text-accent-purple dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-accent-purple dark:group-hover:text-white'}`}>
                                    {category.name}
                                </span>
                            </button>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CategorySection;
