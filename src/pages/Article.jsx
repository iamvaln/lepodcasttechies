// src/pages/Article.jsx
import React from 'react';
import { Calendar, Linkedin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';

const XIcon = () => (
  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export const ArticlePage = ({ onBack }) => {
  const { styles } = useTheme();

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className="mb-8 flex items-center text-violet-600 hover:text-violet-700"
      >
        ← Retour aux articles
      </button>
      <article className={styles.card}>
        <img src="/api/placeholder/800/400" alt="Blog cover" className="w-full h-96 object-cover" />
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span className={styles.text}>31 Décembre 2024</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-violet-100 text-violet-800 text-sm px-3 py-1 rounded-full">Actualités</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">Bienvenue sur Techies Connect' Podcast</h1>
          <div className={`${styles.text} space-y-6`}>
            <p className="text-lg">
              Nous sommes ravis de vous présenter Techies Connect' Podcast, votre nouveau rendez-vous bi-mensuel au cœur 
              de l'innovation tech camerounaise.
            </p>
            <h2 className="text-2xl font-bold mt-8">Notre Vision</h2>
            <p>
              Dans un écosystème tech en pleine effervescence, nous avons constaté le besoin d'une plateforme dédiée 
              au partage de connaissances et d'expériences. Techies Connect' Podcast se veut être ce pont entre les 
              différents acteurs de la tech au Cameroun.
            </p>
            <h2 className="text-2xl font-bold mt-8">Nos Thématiques</h2>
            <p>Chaque épisode explorera un aspect différent de l'écosystème tech camerounais :</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Actualités et tendances tech locales</li>
              <li>Analyses approfondies de produits innovants</li>
              <li>Discussions sur les lois et régulations</li>
              <li>Architecture technique et bonnes pratiques</li>
              <li>IA et nouvelles technologies</li>
              <li>FinTech et innovations financières</li>
              <li>Leadership technique et gestion d'équipe</li>
              <li>Évolution de carrière dans la tech</li>
            </ul>
            
            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-xl font-bold mb-4">Partager cet article</h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-violet-600">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-violet-600">
                  <XIcon />
                  <span>X</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};