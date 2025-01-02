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
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router>
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
      </Router>
    </ErrorBoundary>
  );
};

export default App;

