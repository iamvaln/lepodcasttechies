// src/pages/Episodes.jsx
import React from 'react';
import { Play, Pause, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { EpisodePlaceholder } from '../components/Placeholders';
import { LanguageBadge } from '../components/LanguageBadge';
import { publishedEpisodes,sortEpisodesByDate, paginateEpisodes} from '../data/episodes';
import { APP_CONFIG } from '../constants/config';

export const EpisodesPage = ({ setCurrentPage, setCurrentEpisode  }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const [isPlaying, setIsPlaying] = React.useState(null);
  const [currentPage] = React.useState(1);
  const sortedEpisodes = sortEpisodesByDate(publishedEpisodes);
  const paginatedEpisodes = paginateEpisodes(sortedEpisodes, currentPage);
  const totalPages = Math.ceil(publishedEpisodes.length / APP_CONFIG.EPISODES_PER_PAGE);

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('episodes.title')}</h1>
      <div className="space-y-8">
        {paginatedEpisodes.map((episode) => (
          <div key={episode.id} className={styles.card}>
            <div 
             className="md:flex cursor-pointer" 
             onClick={() => {
               setCurrentEpisode(episode.id);
               setCurrentPage('episodePlayer');
             }}
           >
            <div className="md:flex">
              <div className="md:w-1/3 relative">
                <div className="w-full h-64">
                <EpisodePlaceholder episodeNumber={episode.id} episodePlaceholder={episode.placeholder} />
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
                 onClick={(e) => {
                   e.stopPropagation(); // Empêche le déclenchement du onClick parent
                   setCurrentEpisode(episode.id);
                   setCurrentPage('episodePlayer');
                 }}
                 className={`${styles.actionButton} mt-4`}
               >
                  {t('episodes.listen')}
                </button>
              </div>
            </div>
          </div>
          </div>
        ))}
      </div>
        {/* Pagination */}
        <div className="mt-8 flex justify-center space-x-2">
            {Array.from({ length: totalPages }).map((_, index) => (
            <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`${
                currentPage === index + 1 ? styles.button : 'bg-gray-200'
                } px-4 py-2 rounded-lg`}
            >
                {index + 1}
            </button>
            ))}
        </div>

    </div>
  );
};