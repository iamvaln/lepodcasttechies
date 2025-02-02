// src/pages/About.jsx
import React from 'react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { aboutContent } from '../data/content';
import { Linkedin } from 'lucide-react';
import { teamMembers } from '../data/content';
import { XIcon } from '../components/Icons';
import { ProfilePlaceholder } from '../components/Placeholders';


export const AboutPage = ({ setCurrentPage }) => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();
  const content = aboutContent[language];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('about.title')}</h1>
       {/* À propos */}
      <div className={styles.card + " mb-12"}>
        <div className="p-8">
          <div className="space-y-8">
            {content.sections.map((section, index) => (
              <div key={index}>
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className={styles.text}>{section.text}</p>
              </div>
            ))}
          </div>
          {/* Équipe */}
          <h2 className="text-2xl font-bold mb-8">{t('about.team.title')}</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map(member => {
              const content = member.translations[language];
              return (
                <div key={member.id} className={styles.card}>
                  <div className="w-full h-64">
                    <ProfilePlaceholder name={content.name} />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{content.name}</h3>
                    <p className={styles.text + " mb-2"}>{content.role}</p>
                    <p className={styles.text + " mb-4"}>{content.bio}</p>
                    <div className="flex space-x-4">
                      {member.website && (
                        <a 
                          href={member.website} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className={styles.link}
                        >
                          {t('about.team.website')}
                        </a>
                      )}
                      {member.linkedin && (
                        <a href={member.linkedin} className={styles.link}>
                          <Linkedin size={20} />
                        </a>
                      )}
                      {member.twitter && (
                        <a href={member.twitter} className={styles.link}>
                          <XIcon />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Call to Action pour la contribution */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4">{t('about.joinUs')}</h3>
              <p className={`${styles.text} mb-6`}>{t('about.joinUsText')}</p>
              <button
                onClick={() => setCurrentPage('contribute')}
                className={`${styles.button} px-8 py-3 rounded-lg`}
              >
                {t('about.contributeButton')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};