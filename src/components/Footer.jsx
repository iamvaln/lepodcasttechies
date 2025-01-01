// src/components/Footer.jsx
import React from 'react';
import { Linkedin, Rss } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <footer className={`${isDark ? 'bg-gray-800' : 'bg-gray-900'} text-white py-8`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Techies Connect' Podcast</h3>
            <p className="text-gray-400">L'innovation tech camerounaise à portée d'écoute</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Écoutez-nous sur</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Spotify</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Apple Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Google Podcasts</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">RSS Feed</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suivez-nous</h3>
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