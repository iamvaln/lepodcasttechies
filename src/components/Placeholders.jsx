// src/components/Placeholders.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';

export const EpisodePlaceholder = ({ episodeNumber, episodePlaceholder }) => (
    <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#7B68EE"/>
      <text x="300" y="180" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
        Episode {episodeNumber}
      </text>
      <text x="300" y="240" fontSize="24" fill="white" textAnchor="middle">
      {episodePlaceholder} 
      </text>
    </svg>
  );
  
  export const BlogPlaceholder = () => (
    <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#7B68EE"/>
      <text x="400" y="180" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
        Blog Article
      </text>
      <text x="400" y="240" fontSize="24" fill="white" textAnchor="middle">
        Techies Connect' Podcast
      </text>
    </svg>
  );
  
  export const ProfilePlaceholder = ({ name }) => (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#7B68EE"/>
      {/* Icône abstraite de profil */}
      <circle cx="200" cy="150" r="60" fill="white"/>
      <circle cx="200" cy="280" r="100" fill="white" clipPath="inset(0 0 50% 0)"/>
      <text x="200" y="350" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        {name}
      </text>
    </svg>
  );

export const Episode1Placeholder = ({ episodeNumber }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'}`}>
      <div className="aspect-w-16 aspect-h-9">
        <div className={`w-full h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse`}></div>
      </div>
      <div className="p-4 space-y-3">
        <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-3/4`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-1/2`}></div>
      </div>
    </div>
  );
};

export const Episode2Placeholder = ({ episodeNumber }) => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`flex flex-col md:flex-row gap-4 rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4`}>
      <div className="w-full md:w-1/3 aspect-w-16 aspect-h-9">
        <div className={`w-full h-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} animate-pulse rounded-lg`}></div>
      </div>
      <div className="w-full md:w-2/3 space-y-3">
        <div className={`h-6 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-3/4`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-1/2`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-full`}></div>
      </div>
    </div>
  );
};

export const BlogPostPlaceholder = () => {
  const { isDarkMode } = useTheme();

  return (
    <div className={`rounded-lg overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} p-4 space-y-4`}>
      <div className={`h-8 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-2/3`}></div>
      <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-1/4`}></div>
      <div className="space-y-2">
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-full`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-full`}></div>
        <div className={`h-4 ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded animate-pulse w-3/4`}></div>
      </div>
    </div>
  );
};