// src/components/Header.jsx
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { styles, isDark, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8">
              <svg viewBox="0 0 300 200">
                <circle cx="80" cy="100" r="35" fill="currentColor"/>
                <rect x="70" y="65" width="20" height="40" rx="10" fill={isDark ? '#1F2937' : '#7C3AED'}/>
                <path d="M120 80 Q150 100 120 120" fill="none" stroke="currentColor" strokeWidth="4"/>
                <path d="M130 70 Q170 100 130 130" fill="none" stroke="currentColor" strokeWidth="4"/>
                <path d="M140 60 Q190 100 140 140" fill="none" stroke="currentColor" strokeWidth="4"/>
              </svg>
            </div>
            <span className="text-xl font-bold">Techies Connect' Podcast</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => setCurrentPage('home')} className="hover:text-gray-200">Accueil</button>
            <button onClick={() => setCurrentPage('blog')} className="hover:text-gray-200">Blog</button>
            <button onClick={() => setCurrentPage('about')} className="hover:text-gray-200">À propos</button>
            <button onClick={() => setCurrentPage('team')} className="hover:text-gray-200">Équipe</button>
            <button onClick={toggleTheme} aria-label="Toggle theme" className="p-2 hover:text-gray-200">
              {isDark ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <button onClick={() => setCurrentPage('home')} className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded">Accueil</button>
            <button onClick={() => setCurrentPage('blog')} className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded">Blog</button>
            <button onClick={() => setCurrentPage('about')} className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded">À propos</button>
            <button onClick={() => setCurrentPage('team')} className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded">Équipe</button>
            <button onClick={toggleTheme} className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded">
              {isDark ? 'Mode clair' : 'Mode sombre'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};