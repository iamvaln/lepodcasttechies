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
import { Newsletter } from './components/Newsletter';
import { ContributePage } from './pages/Contribute';
import { EpisodesPage } from './pages/Episodes';
import { EpisodePlayer } from './pages/EpisodePlayer';
import { HashRouter as Router } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback() {
  return (
    <div className="text-center p-4">
      <h2>Something went wrong.</h2>
      <button onClick={() => window.location.reload()} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
        Retry
      </button>
    </div>
  );
}
const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentArticle, setCurrentArticle] = React.useState(null);
  const [currentEpisode, setCurrentEpisode] = React.useState(null);
 
  // Nouvelle fonction pour gérer la navigation
  const handlePageChange = (newPage) => {
    // Si on navigue vers une autre page que 'episodes' ou 'episodePlayer',
    // on réinitialise l'épisode en cours
    if (newPage !== 'episodes' && newPage !== 'episodePlayer') {
      setCurrentEpisode(null);
    }
    // Réinitialiser l'article si on ne va pas sur le blog
    if (newPage !== 'blog') {
      setCurrentArticle(null);
    }
    setCurrentPage(newPage);
  };
 
  const renderPage = () => {
    if (currentPage === 'episodePlayer' && currentEpisode) {
      return (
        <EpisodePlayer 
          episodeId={currentEpisode} 
          onBack={() => {
            setCurrentEpisode(null);
            setCurrentPage('episodes');
          }} 
          setCurrentPage={handlePageChange} 
          setCurrentArticle={setCurrentArticle}
        />
      );
    }
 
    if (currentPage === 'blog' && currentArticle) {
      return (
        <ArticlePage 
          articleId={currentArticle} 
          onBack={() => setCurrentArticle(null)}
          setCurrentPage={handlePageChange}
        />
      );
    }
 
    switch(currentPage) {
      case 'episodes':
        return <EpisodesPage 
          setCurrentPage={handlePageChange} 
          setCurrentEpisode={setCurrentEpisode}
        />;
      case 'blog':
        if (currentArticle) {
          return (
            <ArticlePage 
              articleId={currentArticle} 
              onBack={() => setCurrentArticle(null)}
              setCurrentPage={handlePageChange}
              setCurrentEpisode={setCurrentEpisode} 
            />
          );
        }
        return <BlogPage onSelectArticle={setCurrentArticle} />;
      case 'about':
        return <AboutPage setCurrentPage={handlePageChange} />;
      case 'contribute':
        return <ContributePage setCurrentPage={handlePageChange} />;
      default:
        return <HomePage 
          setCurrentPage={handlePageChange}
          setCurrentEpisode={setCurrentEpisode}
          onSelectEpisode={setCurrentEpisode}
        />;
    }
  };
 
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
        <LanguageProvider>
          <ThemeProvider>
            <div>
              <Header 
                currentPage={currentPage} 
                setCurrentPage={handlePageChange} 
              />
              {renderPage()}
              <Newsletter />
              <Footer 
                currentPage={currentPage}
                setCurrentPage={handlePageChange} 
              />
            </div>
          </ThemeProvider>
        </LanguageProvider>
      </Router>
    </ErrorBoundary>
  );
 };
 
 export default App;