// src/pages/Episodes.jsx
import React from 'react';
import { Play, Pause, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { LanguageBadge } from '../components/LanguageBadge';
import { Episode2Placeholder } from '../components/Placeholders';

export const EpisodesPage = ({ onSelectEpisode }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const [isPlaying, setIsPlaying] = React.useState(null);

  const episodes = [
    {
      id: 'ep01-welcome',
      language: 'fr',
      date: "14 Janvier 2025",
      duration: "45 min",
      translations: {
        fr: {
          title: "EP01: Bienvenue sur Techies Connect' Podcast",
          description: "Premier épisode officiel : découvrez la vision du podcast, nos objectifs et les sujets passionnants que nous explorerons ensemble."
        },
        en: {
          title: "EP01: Welcome to Techies Connect' Podcast",
          description: "First official episode: discover the podcast's vision, our goals and the exciting topics we'll explore together."
        }
      }
    },
    {
      id: 'ep02-data-protection',
      language: 'fr',
      date: "28 Janvier 2025",
      duration: "60 min",
      translations: {
        fr: {
          title: "EP02: La protection des données personnelles au Cameroun",
          description: "Analyse détaillée de la nouvelle loi sur la protection des données personnelles au Cameroun : enjeux, impacts et obligations pour les entreprises tech."
        },
        en: {
          title: "EP02: Data Protection in Cameroon",
          description: "Detailed analysis of Cameroon's new personal data protection law: challenges, impacts, and obligations for tech companies."
        }
      }
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('episodes.title')}</h1>
      <div className="space-y-8">
        {episodes.map((episode) => (
          <div key={episode.id} className={styles.card}>
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="w-full h-64">
                  <Episode2Placeholder episodeNumber={episode.id} />
                </div>
                <LanguageBadge language={episode.language} />
              </div>
              <div className="p-8 md:w-2/3">
                <div className="flex items-center space-x-4 text-sm mb-4">
                  <span className="flex items-center">
                    <Calendar size={16} className="mr-1" />
                    {episode.date}
                  </span>
                  <span className="flex items-center">
                    <Clock size={16} className="mr-1" />
                    {episode.duration}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  {episode.translations[language].title}
                </h3>
                <p className={styles.text}>
                  {episode.translations[language].description}
                </p>
                <button
                  onClick={() => onSelectEpisode(episode.id)}
                  className={`${styles.actionButton} mt-4`}
                >
                  {t('episodes.listen')}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};