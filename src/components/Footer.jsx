// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Rss } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { XIcon } from './Icons';

export const Footer = () => {
  const { isDark } = useTheme();
  const { t } = useTranslation();
  
  return (
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Techies Connect' Podcast</h3>
            <p className="text-gray-400">{t('home.hero.subtitle')}</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">{t('footer.listenOn')}</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Spotify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Apple Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Google Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">RSS Feed</a></li>
            </ul>
          </div>
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