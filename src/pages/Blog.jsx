// src/pages/Blog.jsx
import React from 'react';
import { BlogPlaceholder } from '../components/Placeholders';
import { useTheme } from '../components/ThemeProvider';
import { articles } from '../data/blogArticles';

export const BlogPage = ({ onSelectArticle }) => {
  const { styles } = useTheme();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-12">Blog</h1>
      <div className="space-y-8">
        {articles.map(article => (
          <article key={article.id} className={styles.card}>
            <div className="w-full h-64">
              <BlogPlaceholder />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-4">{article.title}</h2>
              <div className={styles.text + " mb-4"}>{article.date}</div>
              <p className={styles.text + " mb-4"}>
                {article.excerpt}
              </p>
              <button 
                onClick={() => onSelectArticle(article.id)}
                className={styles.actionButton}
              >
                Lire la suite →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};