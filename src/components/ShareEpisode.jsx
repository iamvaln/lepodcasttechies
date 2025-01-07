// src/components/ShareEpisode.jsx
import React from 'react';
import { Linkedin } from 'lucide-react';
import { XIcon } from './Icons';
import { useTranslation } from '../context/LanguageContext';

export const ShareEpisode = ({ episode, language }) => {
  const { t } = useTranslation();
  
  // Préparer le contenu du partage
  const title = episode.translations[language].title;
  const url = episode.spotifyUrl; // URL Spotify de l'épisode
  
  // Encoder les paramètres pour les URLs de partage
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  
  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`
  };

  return (
    <div className="flex space-x-4">
      
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
        aria-label={t('share.linkedin')}
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>
      
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
        aria-label={t('share.twitter')}
      >
        <><XIcon /><span>X</span></>
      </a>
      
      {/* Vous pouvez ajouter d'autres réseaux selon vos besoins */}
    </div>
  );
};