// src/context/LanguageContext.jsx
import React from 'react';
import { translations } from '../translations';

export const LanguageContext = React.createContext();

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = React.useState('fr');

  const value = {
    language: currentLanguage,
    setLanguage: setCurrentLanguage,
    t: (key) => {
      const keys = key.split('.');
      let value = translations[currentLanguage];
      for (const k of keys) {
        value = value?.[k];
      }
      return value || key;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = React.useContext(LanguageContext);
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  return context;
};