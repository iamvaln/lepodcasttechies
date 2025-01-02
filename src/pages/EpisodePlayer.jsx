// src/pages/EpisodePlayer.jsx
import React from 'react';
import { Play, Pause, Calendar, Clock, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { LanguageBadge } from '../components/LanguageBadge';
import { Episode2Placeholder } from '../components/Placeholders';

export const EpisodePlayer = ({ episodeId, onBack }) => {
  const { styles } = useTheme();
  const { language } = useTranslation();
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [progress, setProgress] = React.useState(0);

  // Simuler les données de l'épisode - à remplacer par de vraies données
  const episode = {
    id: episodeId,
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
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className={`${styles.actionButton} mb-8`}
      >
        ← Retour aux épisodes
      </button>

      <div className={styles.card}>
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
            <h1 className="text-3xl font-bold mb-4">
              {episode.translations[language].title}
            </h1>
            <p className={styles.text}>
              {episode.translations[language].description}
            </p>
          </div>
        </div>

        {/* Lecteur audio */}
        <div className="border-t border-gray-200 p-6">
          <div className="max-w-2xl mx-auto">
            {/* Barre de progression */}
            <div className="h-1 w-full bg-gray-200 rounded-full mb-4">
              <div 
                className="h-full bg-violet-600 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Contrôles */}
            <div className="flex items-center justify-center space-x-6">
              <button className="p-2 hover:text-violet-600">
                <SkipBack size={24} />
              </button>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-12 h-12 rounded-full bg-violet-600 text-white flex items-center justify-center hover:bg-violet-700"
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              <button className="p-2 hover:text-violet-600">
                <SkipForward size={24} />
              </button>
              <div className="flex items-center space-x-2">
                <Volume2 size={20} />
                <input 
                  type="range"
                  min="0"
                  max="100"
                  className="w-24"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};