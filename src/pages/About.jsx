// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';

export const AboutPage = () => {
  const { styles } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">À propos</h1>
      <div className={styles.card}>
        <div className="p-8">
          <p className={styles.text + " mb-6"}>
            Techies Connect' Podcast est né d'une passion pour l'innovation et d'une volonté de mettre en lumière 
            l'écosystème tech camerounais. Bi-mensuel, notre podcast explore les multiples facettes de la tech locale : 
            actualités, analyses de produits, interviews d'experts, et discussions sur les enjeux du secteur.
          </p>
          <p className={styles.text + " mb-6"}>
            Notre mission est double : informer sur les dernières avancées technologiques au Cameroun et créer des 
            connexions entre les différents acteurs de l'écosystème. Des startups aux grandes entreprises, des développeurs 
            aux managers, nous donnons la parole à ceux qui construisent le futur digital du pays.
          </p>
          <p className={styles.text}>
            Rejoignez-nous deux fois par mois pour des discussions passionnantes sur le développement, la gestion de produit, 
            la cybersécurité, l'IA, et bien plus encore. Techies Connect' Podcast : votre rendez-vous tech camerounais.
          </p>
        </div>
      </div>
    </div>
  );
};