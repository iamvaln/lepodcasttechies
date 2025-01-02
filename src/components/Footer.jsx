// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Rss } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { XIcon } from './Icons';

export const Footer = ({ setCurrentPage }) => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  
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
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => setCurrentPage('about')} 
                  className="text-gray-400 hover:text-white">
                  {t('nav.about')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('blog')} 
                  className="text-gray-400 hover:text-white">
                  {t('nav.blog')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('team')} 
                  className="text-gray-400 hover:text-white">
                  {t('nav.team')}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => setCurrentPage('contribute')} 
                  className="text-gray-400 hover:text-white">
                  {t('nav.contribute')}
                </button>
              </li>
            </ul>
          </div>

          {/* Section Plateformes d'écoute */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.listenOn')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Spotify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Apple Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Google Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">RSS Feed</a></li>
            </ul>
          </div>

          {/* Section Réseaux Sociaux */}
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.followUs')}</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><Linkedin size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-white"><XIcon /></a>
              <a href="#" className="text-gray-400 hover:text-white"><Rss size={24} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};