// src/components/ShareButtons.jsx
import React from 'react';
import { Linkedin } from 'lucide-react';
import { XIcon } from './Icons';

export const ShareButtons = ({ url, title, summary }) => {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const encodedSummary = encodeURIComponent(summary);

  const shareLinks = {
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}&title=${encodedTitle}&summary=${encodedSummary}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`
  };

  return (
    <div className="flex space-x-4">
      <a
        href={shareLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
        aria-label="Partager sur LinkedIn"
      >
        <Linkedin size={20} />
        <span>LinkedIn</span>
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center space-x-2 text-gray-600 hover:text-violet-600 transition-colors"
        aria-label="Partager sur X"
      >
        <XIcon />
        <span>X(Twitter)</span>
      </a>
    </div>
  );
};