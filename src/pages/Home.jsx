// src/pages/Home.jsx
import React from 'react';
import { Search,Play, Pause, Calendar, Clock } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { publishedEpisodes, latestEpisodes } from '../data/episodes';
import { EpisodePlaceholder } from '../components/Placeholders';
import { LanguageBadge } from '../components/LanguageBadge';
import { LISTENING_PLATFORMS } from '../constants/config';
import _ from 'lodash';

export const HomePage = ({ setCurrentPage,setCurrentEpisode }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const [isPlaying, setIsPlaying] = React.useState(null); // Track which episode is playing
  const [searchTerm, setSearchTerm] = React.useState('');
  const [searchResults, setSearchResults] = React.useState([]);
  const [showResults, setShowResults] = React.useState(false);
  const searchRef = React.useRef(null);

  const handleSearch = React.useCallback(
    _.debounce((term) => {
      if (!term.trim()) {
        setSearchResults([]);
        return;
      }
 
      const searchIn = {
        episodes: publishedEpisodes.filter(episode =>
          episode.translations[language].title.toLowerCase().includes(term.toLowerCase()) ||
          episode.translations[language].description.toLowerCase().includes(term.toLowerCase())
        )
      };
 
      setSearchResults(searchIn);
    }, 300),
    [language]
  );
 

  React.useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);
 
  // Fermer les résultats quand on clique ailleurs
  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
 
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [setCurrentEpisode, setCurrentPage]);

  return (
    <>
    {/* Hero Section */}
      <div className={`${styles.heroGradient} text-white py-16`}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">{t('home.hero.title')}</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex justify-center mb-8">
              <a 
                href={LISTENING_PLATFORMS.spotify} 
                target="_blank"
                rel="noopener noreferrer"
                className={`${styles.button} px-6 py-3 rounded-full flex items-center`}
              >
                {t('home.hero.listenButton')}
              </a>
            </div>
             {/* Barre de recherche intégrée au hero */}
             <div className="max-w-2xl mx-auto">
              <div className="relative">
                <input
                 type="text"
                 placeholder={t('home.search.placeholder')}
                 value={searchTerm}
                 onChange={(e) => {
                   setSearchTerm(e.target.value);
                   setShowResults(true);
                 }}
                 onFocus={() => setShowResults(true)}
                 className="w-full px-4 py-3 rounded-full border bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50"
               />
               <button className="absolute right-2 top-2 text-white/70 hover:text-white">
                 <Search size={24} />
               </button>

               {/* Résultats de recherche */}
               {showResults && searchResults.episodes?.length > 0 && (
                 <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden">
                   <div className="max-h-96 overflow-y-auto">
                     {searchResults.episodes.map((episode) => (
                      <button
                        key={episode.id}
                        onClick={() => {
                          setShowResults(false);
                          setCurrentPage('episodePlayer');  // ou 'blog' pour les articles
                          setCurrentEpisode(episode.id);  // ou setCurrentArticle(episode.id) pour les articles
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50"
                      >
                         <p className="font-medium text-gray-900">
                           {episode.translations[language].title}
                         </p>
                         <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                           {episode.translations[language].description}
                         </p>
                       </button>
                     ))}
                     </div>
                   </div>
                 )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8">{t('home.episodes.title')}</h2>
        <div className="space-y-8">
          {latestEpisodes.map((episode) => {
            const episodeContent = episode.translations[language];
            return (
              <div key={episode.id} className={styles.card} onClick={() => {
                setCurrentPage('episodePlayer');
                setCurrentEpisode(episode.id);
              }}>
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

          <div className="text-center mt-8">
            <button 
              onClick={() => setCurrentPage('episodes')}
              className={`${styles.button} px-6 py-3 rounded-full`}
            >
              {t('home.seeAllEpisodes')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};