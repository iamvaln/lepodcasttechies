// src/pages/Team.jsx
import React from 'react';
import { Linkedin } from 'lucide-react';
import { useTheme } from '../components/ThemeProvider';
import { XIcon } from '../components/Icons';

export const TeamPage = () => {
  const { styles } = useTheme();

  const team = [
    {
      name: "Valentine Nguemne",
      role: "Présentatrice & Créatrice",
      image: "/api/placeholder/400/400",
      website: "https://valentineng.dev",
      linkedin: "#"
    },
    {
      name: "Steve Ntepp",
      role: "Monteur",
      image: "/api/placeholder/400/400",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Notre Équipe</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {team.map((member) => (
          <div key={member.name} className={styles.card}>
            <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{member.name}</h2>
              <p className={styles.text + " mb-4"}>{member.role}</p>
              <div className="flex space-x-4">
                {member.website && (
                  <a href={member.website} target="_blank" rel="noopener noreferrer" className="text-violet-600 hover:text-violet-700">
                    Site web
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} className="text-violet-600 hover:text-violet-700">
                    <Linkedin size={20} />
                  </a>
                )}
                {member.twitter && (
                  <a href={member.twitter} className="text-violet-600 hover:text-violet-700">
                    <XIcon />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};