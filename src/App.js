// src/App.jsx
import React from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/Home';
import { BlogPage } from './pages/Blog';
import { ArticlePage } from './pages/Article';
import { AboutPage } from './pages/About';
import { TeamPage } from './pages/Team';

const App = () => {
  const [currentPage, setCurrentPage] = React.useState('home');
  const [currentArticle, setCurrentArticle] = React.useState(null);

  const renderPage = () => {
    if (currentPage === 'blog' && currentArticle) {
      return (
        <ArticlePage 
          articleId={currentArticle} 
          onBack={() => setCurrentArticle(null)} 
        />
      );
    }

    switch(currentPage) {
      case 'blog':
        return <BlogPage onSelectArticle={setCurrentArticle} />;
      case 'about':
        return <AboutPage />;
      case 'team':
        return <TeamPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <ThemeProvider>
      <div>
        <Header 
          currentPage={currentPage} 
          setCurrentPage={(page) => {
            setCurrentPage(page);
            setCurrentArticle(null); // Reset article when changing page
          }} 
        />
        {renderPage()}
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;

