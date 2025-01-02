// src/pages/Team.jsx
import React from 'react';
import { Linkedin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { useTranslation } from '../context/LanguageContext';
import { teamMembers } from '../data/content';
import { XIcon } from '../components/Icons';
import { ProfilePlaceholder } from '../components/Placeholders';

export const TeamPage = () => {
  const { styles } = useTheme();
  const { t, language } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">{t('team.title')}</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {teamMembers.map(member => {
          const content = member.translations[language];
          return (
            <div key={member.id} className={styles.card}>
              <div className="w-full h-64">
                <ProfilePlaceholder name={content.name} />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{content.name}</h2>
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
                      {t('team.website')}
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
    </div>
  );
};