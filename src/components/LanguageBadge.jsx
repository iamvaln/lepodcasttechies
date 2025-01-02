// src/components/LanguageBadge.jsx
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export const LanguageBadge = ({ language }) => {
  const { t } = useTranslation();
  
  const badgeStyles = {
    fr: "bg-blue-500 text-white",
    en: "bg-red-500 text-white"
  };

  return (
    <div className={`
      ${badgeStyles[language]} 
      absolute top-4 right-4 
      px-3 py-1 
      rounded-full 
      font-medium 
      text-sm 
      flex items-center 
      shadow-lg
      backdrop-blur-sm
    `}>
      <span className="w-2 h-2 rounded-full bg-white opacity-75 mr-2"></span>
      {language.toUpperCase()}
    </div>
  );
};