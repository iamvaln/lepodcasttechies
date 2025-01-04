// pages/EpisodePlayer.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { episodes } from '../data/episodes';
import { LanguageBadge } from '../components/LanguageBadge';
import { Play, Pause, Calendar, Clock, Volume2, SkipBack, SkipForward } from 'lucide-react';
import { EpisodePlaceholder } from '../components/Placeholders';

export const EpisodePlayer = ({ episodeId, onBack,setCurrentArticle,setCurrentPage }) => {
 const { styles } = useTheme();
 const { t, language } = useTranslation();
 const [isPlaying, setIsPlaying] = React.useState(false);
 const [progress, setProgress] = React.useState(0);

 const episode = episodes.find(ep => ep.id === episodeId);

 if (!episode) return null;

 return (
   <div className="max-w-5xl mx-auto px-4 py-12">
    <button 
      onClick={onBack}
      className={`${styles.actionButton} mb-8`}
    >
      ← {t('episodes.backToList')}
    </button>
     <div className={styles.card}>
       <div className="md:flex">
         <div className="md:w-1/3 relative">
           <div className="w-full h-64">
             <EpisodePlaceholder episodeNumber={episode.id} />
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
        {/* Section Article Relié */}
       {episode.relatedArticle && (
          <div className="border-t border-gray-200 p-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-xl font-bold mb-4">{t('episodes.relatedContent')}</h2>
              <button 
                onClick={() => {
                  setCurrentArticle(episode.relatedArticle);
                  setCurrentPage('blog');
                }}
                className={`${styles.actionButton} inline-flex items-center`}
              >
                {t('episodes.readArticle')} →
              </button>
            </div>
          </div>
        )}
       {/* Player Controls */}
       <div className="border-t border-gray-200 p-6">
         <div className="max-w-2xl mx-auto">
           <div className="h-1 w-full bg-gray-200 rounded-full mb-4">
             <div 
               className="h-full bg-violet-600 rounded-full"
               style={{ width: `${progress}%` }}
             />
           </div>
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