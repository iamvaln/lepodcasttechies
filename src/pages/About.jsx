// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { aboutContent } from '../data/content';

export const AboutPage = () => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const content = aboutContent[language];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('about.title')}</h1>
      <div className={styles.card}>
        <div className="p-8">
          {content.sections.map((section, index) => (
            <p key={index} className={`${styles.text} ${index < content.sections.length - 1 ? 'mb-6' : ''}`}>
              {section.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};