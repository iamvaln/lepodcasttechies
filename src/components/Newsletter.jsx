// src/components/Newsletter.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';

export const Newsletter = () => {
  const { styles, isDark } = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique d'inscription à implémenter
    console.log('Subscribe:', email);
  };

  return (
    <div className={`${isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
        <p className={`${styles.text} mb-8`}>{t('newsletter.subtitle')}</p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
          <input 
            type="email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t('newsletter.placeholder')}
            className="flex-1 px-4 py-2 rounded-lg border bg-white text-gray-900"
            required
          />
          <button 
            type="submit" 
            className={`${styles.button} px-6 py-2 rounded-lg whitespace-nowrap`}
          >
            {t('newsletter.button')}
          </button>
        </form>
      </div>
    </div>
  );
};