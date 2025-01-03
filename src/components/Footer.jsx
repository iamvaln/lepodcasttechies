// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Rss } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { XIcon } from './Icons';

const FooterLink = ({ page, currentPage, onClick, children }) => {
  const isActive = currentPage === page;
  return (
    <button 
      onClick={() => onClick(page)} 
      className={`${isActive ? 'text-white font-medium' : 'text-gray-400'} hover:text-white relative group`}
    >
      {children}
      {isActive && (
        <span className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full" />
      )}
    </button>
  );
};

export const Footer = ({ setCurrentPage, currentPage }) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();

  const navItems = [
    { key: 'about', label: t('nav.about') },
    { key: 'blog', label: t('nav.blog') },
    { key: 'team', label: t('nav.team') },
    { key: 'contribute', label: t('nav.contribute') }
  ];
  
  return (
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Section Podcast Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Techies Connect' Podcast</h3>
            <p className="text-gray-400">{t('footer.podcastIntro')}</p>
          </div>

          {/* Section Liens Rapides */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2 pl-4">
              {navItems.map(item => (
                <li key={item.key}>
                  <FooterLink 
                    page={item.key}
                    currentPage={currentPage}
                    onClick={setCurrentPage}
                  >
                    {item.label}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Section Plateformes d'écoute */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.listenOn')}</h3>
            <ul className="space-y-2">
              <li><a href="https://www.spotify.com" className="text-gray-400 hover:text-white">Spotify</a></li>
              <li><a href="https://www.https://www.spotify.com" className="text-gray-400 hover:text-white">Apple Podcasts</a></li>
              <li><a href="https://www.spotify.com" className="text-gray-400 hover:text-white">Google Podcasts</a></li>
              <li><a href="https://www.anchor.fm" className="text-gray-400 hover:text-white">RSS Feed</a></li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/feed/" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              <a href="https://www.x.com" className="text-gray-400 hover:text-white"><XIcon /></a>
              <a href="https://www.anchor.fm" className="text-gray-400 hover:text-white"><Rss size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};