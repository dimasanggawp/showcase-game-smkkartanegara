import StudentGameCard from './StudentGameCard';

const StudentGamesSection = ({ games }) => {
    return (
        <section id="student-games" className="py-12 lg:py-16 relative">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-purple/5 to-transparent pointer-events-none"></div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <span className="text-3xl">🎓</span>
                            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                                Karya <span className="text-gradient">Siswa</span>
                            </h2>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400">
                            Website Showcase Game Development adalah platform digital yang menampilkan karya game siswa Kelas Industri TKJ SMK Kartanegara Wates. Website ini menjadi media dokumentasi, apresiasi, dan publikasi hasil pengembangan game siswa dalam pembelajaran berbasis industri.
                        </p>
                    </div>

                    <button className="flex-shrink-0 group flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-dark-700 rounded-xl border border-gray-200 dark:border-white/10 hover:border-accent-purple/50 transition-all duration-200 shadow-sm dark:shadow-none h-fit">
                        <span className="text-gray-700 dark:text-gray-300 group-hover:text-amber-500 dark:group-hover:text-white font-medium">See All</span>
                        <svg className="w-4 h-4 text-gray-400 group-hover:text-accent-purple group-hover:translate-x-1 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Info Banner */}
                <div className="mb-8 p-4 bg-white/50 dark:bg-gradient-to-r dark:from-accent-purple/10 dark:via-accent-pink/10 dark:to-accent-blue/10 rounded-xl border border-gray-200 dark:border-white/10">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-accent-purple to-accent-pink rounded-lg flex items-center justify-center">
                            <span className="text-xl">✨</span>
                        </div>
                        <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white">Student Showcase</h4>
                            <p className="text-sm text-gray-600 dark:text-gray-200">These games were created by students as part of their learning journey. Click to play!</p>
                        </div>
                    </div>
                </div>

                {/* Games Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {games.map((game) => (
                        <StudentGameCard key={game.id} game={game} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StudentGamesSection;
