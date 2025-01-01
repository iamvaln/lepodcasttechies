// src/pages/Blog.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';

export const BlogPage = () => {
  const { styles } = useTheme();
  const [currentArticle, setCurrentArticle] = React.useState(null);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-12">Blog</h1>
      <article className={styles.card}>
        <img src="/api/placeholder/800/400" alt="Blog cover" className="w-full h-64 object-cover" />
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-4">Bienvenue sur Techies Connect' Podcast</h2>
          <div className={styles.text + " mb-4"}>31 Décembre 2024</div>
          <p className={styles.text + " mb-4"}>
            Découvrez notre nouveau podcast dédié à l'écosystème tech camerounais. Du développement à la gestion de produit, 
            en passant par la cybersécurité et l'IA, explorez avec nous les innovations qui façonnent le futur digital du Cameroun.
          </p>
          <button 
            onClick={() => setCurrentArticle('welcome')}
            className="text-violet-600 hover:text-violet-700 font-medium"
          >
            Lire la suite →
          </button>
        </div>
      </article>
    </div>
  );
};