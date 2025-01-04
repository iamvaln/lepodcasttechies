// src/components/SearchModule.jsx
import React from 'react';
import { Search } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { sortEpisodesByDate, publishedEpisodes } from '../data/episodes';
import _ from 'lodash';

export const SearchModule = ({ 
  setCurrentPage, 
  setCurrentEpisode, 
  darkMode = false,  // pour adapter le style selon le contexte
  className = ''     // pour permettre une personnalisation supplémentaire
}) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
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

      const sortedEpisodes = sortEpisodesByDate(publishedEpisodes);

      const results = sortedEpisodes.filter(episode =>
        episode.translations[language].title.toLowerCase().includes(term.toLowerCase()) ||
        episode.translations[language].description.toLowerCase().includes(term.toLowerCase())
      );

      setSearchResults(results);
    }, 300),
    [language]
  );

  React.useEffect(() => {
    handleSearch(searchTerm);
  }, [searchTerm, handleSearch]);

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const inputStyles = darkMode 
    ? "w-full px-4 py-3 rounded-full border bg-white/10 backdrop-blur-sm text-white placeholder-white/70 focus:ring-2 focus:ring-white/50"
    : "w-full px-4 py-3 rounded-full border focus:ring-2 focus:ring-violet-600";

  return (
    <div className={className} ref={searchRef}>
      <div className="relative">
        <input
          type="text"
          placeholder={t('search.placeholder')}
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          onFocus={() => setShowResults(true)}
          className={inputStyles}
        />
        <button 
          className={`absolute right-2 top-2 ${
            darkMode ? 'text-white/70 hover:text-white' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          <Search size={24} />
        </button>

        {showResults && searchResults.length > 0 && (
          <div className="absolute w-full mt-2 bg-white rounded-lg shadow-lg overflow-hidden z-50">
            <div className="max-h-96 overflow-y-auto">
              {searchResults.map((episode) => (
                <button
                  key={episode.id}
                  onClick={() => {
                    setShowResults(false);
                    setCurrentEpisode(episode.id);
                    setCurrentPage('episodePlayer');
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
  );
};