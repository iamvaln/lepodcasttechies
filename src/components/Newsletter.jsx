// src/components/Newsletter.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { Loader2 } from 'lucide-react';

export const Newsletter = () => {
  const { styles } = useTheme();
  const { t } = useTranslation();
  const [email, setEmail] = React.useState('');
  const [status, setStatus] = React.useState('idle'); // idle, loading, success, error
  const [errorMessage, setErrorMessage] = React.useState('');

  const validateEmail = (email) => {
    return email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateEmail(email)) {
      setStatus('error');
      setErrorMessage(t('newsletter.invalidEmail'));
      return;
    }

    setStatus('loading');

    try {
      // Simuler un appel API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Ici, ajouter l'appel réel à votre API de newsletter
      // const response = await fetch('/api/newsletter', {
      //   method: 'POST',
      //   body: JSON.stringify({ email }),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('newsletter.errorMessage'));
    }
  };

  return (
    <div className={`${styles.isDark ? 'bg-gray-800' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">{t('newsletter.title')}</h2>
        <p className={`${styles.text} mb-8`}>{t('newsletter.subtitle')}</p>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex gap-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('newsletter.placeholder')}
              className={`
                flex-1 px-4 py-2 rounded-lg border
                ${status === 'error' ? 'border-red-500' : 'border-gray-200'}
                focus:outline-none focus:ring-2 focus:ring-violet-600
              `}
              disabled={status === 'loading' || status === 'success'}
            />
            <button 
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className={`
                ${styles.button} px-6 py-2 rounded-lg
                ${(status === 'loading' || status === 'success') && 'opacity-50 cursor-not-allowed'}
              `}
            >
              {status === 'loading' ? (
                <Loader2 className="animate-spin" />
              ) : (
                t('newsletter.button')
              )}
            </button>
          </div>

          {status === 'error' && (
            <p className="text-red-500 mt-2 text-sm">{errorMessage}</p>
          )}

          {status === 'success' && (
            <p className="text-green-500 mt-2 text-sm">{t('newsletter.success')}</p>
          )}
        </form>
      </div>
    </div>
  );
};