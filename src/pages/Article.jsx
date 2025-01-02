// src/pages/Article.jsx
import React from 'react';
import { Calendar, Linkedin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { BlogPlaceholder } from '../components/Placeholders';
import { articles } from '../data/blogArticles';
import { XIcon } from '../components/Icons';

export const ArticlePage = ({ articleId, onBack }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const article = articles.find(a => a.id === articleId);

  if (!article) return null;

  const content = article.translations[language];

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <button 
        onClick={onBack}
        className={styles.actionButton + " mb-8"}
      >
        ← {t('blog.backToList')}
      </button>
      <article className={styles.card}>
        <div className="w-full h-96">
          <BlogPlaceholder />
        </div>
        <div className="p-8">
          <div className="flex items-center space-x-4 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar size={16} />
              <span className={styles.text}>{content.date}</span>
            </div>
            <div className="flex space-x-2">
              <span className="bg-violet-100 text-violet-800 text-sm px-3 py-1 rounded-full">
                {content.category}
              </span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-6">{content.title}</h1>
          <div className={`${styles.text} space-y-6`}>
            <p className="text-lg">{content.content.intro}</p>
            
            {content.content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mt-8">{section.title}</h2>
                <p>{section.content}</p>
                {section.list && (
                  <ul className="list-disc pl-6 space-y-2 mt-4">
                    {section.list.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            
            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-xl font-bold mb-4">{t('blog.share')}</h3>
              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-gray-600 hover:text-violet-600">
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-violet-600">
                  <XIcon />
                  <span>X</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};