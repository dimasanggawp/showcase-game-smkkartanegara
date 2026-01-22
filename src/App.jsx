import { useState } from 'react';
import Navbar from './components/Navbar';
import StudentGamesSection from './components/StudentGamesSection';
import Footer from './components/Footer';
import { studentGames } from './data/games';

import CategorySection from './components/CategorySection';
import PartnersSection from './components/PartnersSection';

function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredGames = selectedCategory
        ? studentGames.filter(game => game.category === selectedCategory)
        : studentGames;

    const handleSelectCategory = (category) => {
        setSelectedCategory(selectedCategory === category ? null : category);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-dark-900 transition-colors duration-300">
            {/* Navigation */}
            <Navbar />

            {/* Student Games - Karya Siswa (Main Focus) */}
            <div className="pt-24">
                <StudentGamesSection games={filteredGames} />
            </div>

            {/* Categories */}
            <CategorySection
                onSelectCategory={handleSelectCategory}
                activeCategory={selectedCategory}
            />

            {/* Partners */}
            <PartnersSection />

            {/* CTA Section */}
            <section className="py-16 lg:py-24 relative overflow-hidden">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent-purple/20 via-accent-pink/10 to-accent-blue/20"></div>
                <div className="absolute inset-0 bg-dark-900/80"></div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                        Ingin bisa membuat game <span className="text-gradient">seperti mereka ?</span>
                    </h2>
                    <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                        Daftarkan dirimu di Kelas Industri TKJ - Game Development segera!!
                    </p>
                    <a
                        href="https://spmb.smkkartanegara.sch.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-gradient-to-r from-accent-purple via-accent-pink to-accent-blue rounded-xl font-bold text-white text-lg hover:scale-105 transition-transform duration-300 shadow-glow"
                    >
                        Daftar
                    </a>
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default App;
