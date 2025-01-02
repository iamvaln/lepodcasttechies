// src/components/LanguageSelector.jsx
import React from 'react';
import { useTranslation } from '../context/LanguageContext';

export const LanguageSelector = () => {
  const { language, setLanguage, t } = useTranslation();

  return (
    <div className="relative inline-block">
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="appearance-none bg-transparent border-none text-white focus:outline-none cursor-pointer"
        aria-label={t('languageSelector.label')}
      >
        <option value="fr" className="text-gray-900">FR</option>
        <option value="en" className="text-gray-900">EN</option>
      </select>
    </div>
  );
};