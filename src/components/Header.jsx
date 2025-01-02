// src/components/Header.jsx
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { Logo } from './Logo';

export const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { styles, isDark, toggleTheme } = useTheme();

  return (
    <nav className={styles.nav}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-16 h-16">
            <Logo />
            </div>
            {/* <span className="text-xl font-bold">Techies Connect' Podcast</span> */}
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