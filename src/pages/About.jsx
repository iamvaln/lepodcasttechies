// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { aboutContent } from '../data/content';

export const AboutPage = ({ setCurrentPage }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const content = aboutContent[language];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('about.title')}</h1>
      <div className={styles.card}>
        <div className="p-8">
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className={styles.text}>{section.text}</p>
              </div>
            ))}
          </div>

          {/* Call to Action pour la contribution */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('about.joinUs')}</h3>
              <p className={`${styles.text} mb-6`}>{t('about.joinUsText')}</p>
              <button
                onClick={() => setCurrentPage('contribute')}
                className={`${styles.button} px-8 py-3 rounded-lg`}
              >
                {t('about.contributeButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};