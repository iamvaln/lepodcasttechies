// src/components/Footer.jsx
import React from 'react';
import {Youtube } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { SpotifyIcon, XIcon } from './Icons';
import { SOCIAL_LINKS, LISTENING_PLATFORMS } from '../constants/config';

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
    { key: 'episodes', label: t('nav.episodes') },
    { key: 'blog', label: t('nav.blog') },
    { key: 'about', label: t('nav.about') },
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
              <li>
                <a 
                  href={LISTENING_PLATFORMS.spotify} 
                  className="text-gray-400 hover:text-white"
                >
                 Spotify
                </a>
              </li>
              <li>
                <a 
                  href={LISTENING_PLATFORMS.youtube}
                  className="text-gray-400 hover:text-white"
                >
                 Youtube
                </a>
              </li>
              <li>
                <a 
                  href={LISTENING_PLATFORMS.rss} 
                  className="text-gray-400 hover:text-white"
                >
                  RSS Feed
                </a>
              </li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.youtube} className="text-gray-400 hover:text-white"><Youtube size={24} /></a>
              <a href={SOCIAL_LINKS.twitter} className="text-gray-400 hover:text-white"><XIcon size={24}/></a>
              <a href={SOCIAL_LINKS.spotify} className="text-gray-400 hover:text-white"><SpotifyIcon size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};