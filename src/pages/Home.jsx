// src/pages/Home.jsx
import React from 'react';
import { Play, Pause, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { episodes } from '../data/episodes';
import { EpisodePlaceholder } from '../components/Placeholders';
import { LanguageBadge } from '../components/LanguageBadge';

export const HomePage = () => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const [isPlaying, setIsPlaying] = React.useState(null); // Track which episode is playing

  return (
    <>
      <div className={`${styles.heroGradient} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('home.hero.title')}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex justify-center space-x-4">
              <button className={`${styles.button} px-6 py-3 rounded-full`}>
                {t('home.hero.listenButton')}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">{t('home.episodes.title')}</h2>
        <div className="space-y-8">
          {episodes.map((episode) => {
            const episodeContent = episode.translations[language];
            return (
              <div key={episode.id} className={styles.card}>
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <div className="relative">
                      <div className="w-full h-64">
                        <EpisodePlaceholder episodeNumber={episode.id} episodePlaceholder={episode.placeholder} />
                      </div>
                      <LanguageBadge language={episode.language} />
                    </div>
                  </div>
                  <div className="p-8 md:w-2/3">
                    <div className="flex items-center space-x-4 text-sm mb-4">
                      <span className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(episode.date).toLocaleDateString(language === 'fr' ? 'fr-FR' : 'en-US')}
                      </span>
                      <span className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {episode.duration}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{episodeContent.title}</h3>
                    <p className={styles.text}>{episodeContent.description}</p>
                    <button
                      onClick={() => setIsPlaying(isPlaying === episode.id ? null : episode.id)}
                      className={styles.actionButton + " mt-4"}
                    >
                      {isPlaying === episode.id ? <Pause size={24} /> : <Play size={24} />}
                      <span className="ml-2">
                        {isPlaying === episode.id ? t('home.episodes.pause') : t('home.episodes.listen')}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};