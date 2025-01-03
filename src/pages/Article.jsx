// src/pages/Article.jsx
import React from 'react';

import { Play, Calendar } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { BlogPlaceholder } from '../components/Placeholders';
import { ShareButtons } from '../components/ShareButtons';
import { articles } from '../data/blogArticles';

export const ArticlePage = ({ articleId, onBack, setCurrentPage }) => {
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
            {/* Section Références */}
            {content.references && (
              <div className="border-t border-gray-200 mt-12 pt-8">
                <h3 className="text-xl font-bold mb-4">{content.references.title}</h3>
                <p className={`${styles.text} mb-4`}>{content.references.content}</p>
                <div className="space-y-2">
                  {content.references.links.map((link, i) => (
                    <div key={i} className="flex flex-col">
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-violet-600 hover:text-violet-700"
                      >
                        {link.text}
                      </a>
                      {link.note && (
                        <span className="text-sm text-gray-500">{link.note}</span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {content.cta && (
              <div className={`${styles.card} p-6 my-8 text-center`}>
                <h3 className="text-xl font-bold mb-4">{content.cta.title}</h3>
                <p className={`${styles.text} mb-4`}>{content.cta.content}</p>
                <button
                  className={`${styles.button} px-6 py-2 rounded-lg flex items-center justify-center mx-auto`}
                  onClick={() => {
                    // Logique pour jouer l'épisode ou rediriger vers la page d'écoute
                  }}
                >
                  <Play className="mr-2" size={20} />
                  {content.cta.link}
                </button>
              </div>
            )}
            {/* CTA Section - uniquement pour l'article de bienvenue */}
            {articleId === 'welcome' && (
              <div className={`${styles.card} mt-8`}>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    {t('about.joinUs')}
                  </h3>
                  <p className={`${styles.text} mb-6`}>
                    {t('about.joinUsText')}
                  </p>
                  <button
                    onClick={() => setCurrentPage('contribute')}
                    className={`${styles.button} px-8 py-3 rounded-lg`}
                  >
                    {t('about.contributeButton')}
                  </button>
                </div>
              </div>
            )}
            <div className="border-t border-gray-200 mt-12 pt-8">
              <h3 className="text-xl font-bold mb-4">{t('blog.share')}</h3>
              <ShareButtons
                url={window.location.href}
                title={content.title}
                summary={content.excerpt}
              />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
};