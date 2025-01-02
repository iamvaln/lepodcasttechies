// src/App.jsx
import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { LanguageProvider } from './context/LanguageContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { BlogPage } from './pages/Blog';
import { ArticlePage } from './pages/Article';
import { AboutPage } from './pages/About';
import { TeamPage } from './pages/Team';
import { Newsletter } from './components/Newsletter';
import { ContributePage } from './pages/Contribute';
import { EpisodesPage } from './pages/Episodes';
import { EpisodePlayer } from './pages/EpisodePlayer';


const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentArticle, setCurrentArticle] = React.useState(null);
  const [currentEpisode, setCurrentEpisode] = React.useState(null);

  const renderPage = () => {
    if (currentEpisode) {
      return (
        <EpisodePlayer 
          episodeId={currentEpisode} 
          onBack={() => setCurrentEpisode(null)} 
        />
      );
    }
    if (currentPage === 'blog' && currentArticle) {
      return (
        <ArticlePage 
        articleId={currentArticle} 
        onBack={() => setCurrentArticle(null)}
        setCurrentPage={setCurrentPage}
        />
      );
    }

    switch(currentPage) {
      case 'episodes':
        return <EpisodesPage onSelectEpisode={setCurrentEpisode} />;
      case 'blog':
        return <BlogPage onSelectArticle={setCurrentArticle} />;
      case 'about':
        return <AboutPage setCurrentPage={setCurrentPage} />;
      case 'team':
        return <TeamPage setCurrentPage={setCurrentPage} />;  
      case 'contribute':
        return <ContributePage setCurrentPage={setCurrentPage} />;
      default:
        return <HomePage 
        setCurrentPage={setCurrentPage}
        onSelectEpisode={setCurrentEpisode}
      />
    }
  };

  return (
    <LanguageProvider>
      <ThemeProvider>
        <div>
          <Header 
            currentPage={currentPage} 
            setCurrentPage={(page) => {
              setCurrentPage(page);
              setCurrentArticle(null);
            }} 
          />
          {renderPage()}
          <Newsletter />
            <Footer 
          currentPage={currentPage}
          setCurrentPage={setCurrentPage} 
        />
        </div>
      </ThemeProvider>
    </LanguageProvider>
  );
};

export default App;

