// src/components/Header.jsx
import React from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { Logo } from './Logo';
import { LanguageSelector } from './LanguageSelector';

const NavLink = ({ page, currentPage, onClick, children }) => {
  const isActive = currentPage === page;
  return (
    <button 
      onClick={onClick}
      className={`
        hover:text-gray-200 
        relative 
        py-2 
        ${isActive ? 'text-white' : 'text-gray-100'}
      `}
    >
      {children}
      {isActive && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full"></div>
      )}
    </button>
  );
};

export const Header = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { styles, isDark, toggleTheme } = useTheme();
  const { t } = useTranslation();

  const navItems = [
    { key: 'home', label: t('nav.home') },
    { key: 'episodes', label: t('nav.episodes') },
    { key: 'blog', label: t('nav.blog') },
    { key: 'about', label: t('nav.about') },
    { key: 'contribute', label: t('nav.contribute') }
  ];

  return (
    <nav className={styles.nav}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="w-16 h-16">
              <Logo />
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <NavLink
                key={item.key}
                page={item.key}
                currentPage={currentPage}
                onClick={() => setCurrentPage(item.key)}
              >
                {item.label}
              </NavLink>
            ))}
            <LanguageSelector />
            <button 
              onClick={toggleTheme} 
              aria-label="Toggle theme" 
              className="p-2 hover:text-gray-200"
            >
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
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => {
                  setCurrentPage(item.key);
                  setIsMenuOpen(false);
                }}
                className={`
                  block w-full text-left px-3 py-2 rounded
                  ${currentPage === item.key ? 'bg-violet-700' : 'hover:bg-violet-700'}
                `}
              >
                {item.label}
              </button>
            ))}
            <div className="px-3 py-2">
              <LanguageSelector />
            </div>
            <button 
              onClick={toggleTheme}
              className="block w-full text-left px-3 py-2 hover:bg-violet-700 rounded"
            >
              {isDark ? t('theme.light') : t('theme.dark')}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};