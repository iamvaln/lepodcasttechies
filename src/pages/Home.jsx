// src/pages/Home.jsx
import React from 'react';
import { Play, Pause, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';

export const HomePage = () => {
  const { styles } = useTheme();
  const [isPlaying, setIsPlaying] = React.useState(false);

  const episodes = [
    {
      id: 1,
      title: "EP01: Bienvenue sur Techies Connect' Podcast",
      description: "Premier épisode officiel : découvrez la vision du podcast, nos objectifs et les sujets passionnants que nous explorerons ensemble.",
      date: "31 Dec 2024",
      duration: "45 min"
    },
    {
      id: 2,
      title: "EP02: La protection des données personnelles au Cameroun",
      description: "Analyse détaillée de la nouvelle loi sur la protection des données personnelles au Cameroun : enjeux, impacts et obligations pour les entreprises tech.",
      date: "31 Dec 2024",
      duration: "60 min"
    }
  ];

  return (
    <>
      <div className={`${styles.heroGradient} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Techies Connect' Podcast</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
               3 clicks d'avance sur la tech d'ici et d'ailleurs
            </p>
            <div className="flex justify-center space-x-4">
              <button className={`${styles.button} px-6 py-3 rounded-full`}>
                Écouter sur Spotify
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">Derniers Épisodes</h2>
        <div className="space-y-8">
          {episodes.map((episode) => (
            <div key={episode.id} className={styles.card}>
              <div className="md:flex">
                <div className="md:w-1/3">
                  <img src="/api/placeholder/600/400" alt={episode.title} className="w-full h-64 object-cover" />
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
                  <h3 className="text-2xl font-bold mb-4">{episode.title}</h3>
                  <p className={styles.text}>{episode.description}</p>
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={styles.link}
                  >
                    {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    <span className="font-medium">{isPlaying ? 'Pause' : 'Écouter'}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
