// src/data/episodes.js

import { APP_CONFIG } from '../constants/config';

export const episodes = [
  {
    id: 7,
    language: 'fr',
    anchorId: "dummy-7",
    translations: {
      fr: {
        title: "Titre factice 7",
        description: "Description factice 7 en français."
      },
      en: {
        title: "Dummy Title 7",
        description: "Dummy description 7 in English."
      }
    },
    date: "2024-02-14",
    placeholder: "Dummy Title 7",
    duration: "20:00",
    status: 'published',
    featured: 0,
  },
  {
    id: 6,
    language: 'fr',
    anchorId: "dummy-6",
    translations: {
      fr: {
        title: "Titre factice 6",
        description: "Description factice 6 en français."
      },
      en: {
        title: "Dummy Title 6",
        description: "Dummy description 6 in English."
      }
    },
    date: "2024-03-14",
    placeholder: "Dummy Title 6",
    duration: "20:00",
    status: 'published',
    featured: 0,
  },
  {
    id: 5,
    language: 'fr',
    anchorId: "dummy-5",
    translations: {
      fr: {
        title: "Titre factice 5",
        description: "Description factice 5 en français."
      },
      en: {
        title: "Dummy Title 5",
        description: "Dummy description 5 in English."
      }
    },
    date: "2023-01-14",
    placeholder: "Dummy Title 5",
    duration: "20:00",
    status: 'published',
    featured: 0,
  },
  {
    id: 4,
    language: 'fr',
    anchorId: "dummy-4",
    translations: {
      fr: {
        title: "Titre factice 4",
        description: "Description factice 4 en français."
      },
      en: {
        title: "Dummy Title 4",
        description: "Dummy description 4 in English."
      }
    },
    date: "2025-01-28",
    placeholder: "Dummy Title 4",
    duration: "20:00",
    status: 'pending',
    featured: 0,
  },
  {
    id: 3,
    language: 'fr',
    date: '2025-02-14',
    duration: '45 min',
    status: 'published',
    featured: 0,
    translations: {
      fr: {
        title: "EP03: Cybersécurité au Cameroun",
        description: "État des lieux et perspectives de la cybersécurité au Cameroun."
      },
      en: {
        title: "EP03: Cybersecurity in Cameroon",
        description: "Overview and perspectives of cybersecurity in Cameroon."
      }
    }
  },
  {
    id: 2,
    language: 'fr',
    anchorId: "data-protection",
    relatedArticle: 'data-protection',
    translations: {
      fr: {
        title: "La protection des données personnelles au Cameroun",
        description: "Analyse détaillée de la nouvelle loi sur la protection des données personnelles au Cameroun : enjeux, impacts et obligations pour les entreprises tech."
      },
      en: {
        title: "Data Protection in Cameroon",
        description: "Detailed analysis of Cameroon's new personal data protection law: challenges, impacts, and obligations for tech companies."
      }
    },
    date: "2025-01-14",
    placeholder: "Data Protection in Cameroon",
    duration: "20:00",
    status: 'published',
    featured: 1,
  },
  {
      id: 1,
      language: 'en', // Langue de l'épisode
      anchorId: "welcome-episode",
      translations: {
        fr: {
          title: "Bienvenue sur Techies Connect' Podcast",
          description: "Premier épisode officiel : découvrez la vision du podcast, nos objectifs et les sujets passionnants que nous explorerons ensemble."
        },
        en: {
          title: "Welcome to Techies Connect' Podcast",
          description: "First official episode: discover the podcast's vision, our goals and the exciting topics we'll explore together."
        }
      },
      date: "2025-01-14",
      placeholder: "Welcome to Techies Connect' Podcast",
      duration: "5:00",
      status: 'published',
      featured: 0,
    }
];

// Filter published episodes
export const getPublishedEpisodes = (episodes) => {
  return episodes.filter(episode => episode.status === 'published');
 };
// Fonction utilitaire pour trier les épisodes par date
export const sortEpisodesByDate = (episodes) => {
  return [...episodes].sort((a, b) => new Date(b.date) - new Date(a.date));
};
// Function to paginate episodes
export const paginateEpisodes = (episodes, page = 1, perPage = APP_CONFIG.EPISODES_PER_PAGE) => {
  const published = getPublishedEpisodes(episodes);
  const sorted = sortEpisodesByDate(published);
  const start = (page - 1) * perPage;
  return sorted.slice(start, start + perPage);
 };

// Function to get the latest episodes
export const getLatestEpisodes = (episodes, count = APP_CONFIG.LATEST_EPISODES_LIMIT) => {
  const published = getPublishedEpisodes(episodes);
  return sortEpisodesByDate(published).slice(0, count);
 };

// Filter featured episodes
export const getFeaturedEpisodes = (episodes) => {
  return episodes.filter(episode => (episode.status === 'published' && episode.featured === 1));
 };


export const latestEpisodes = getLatestEpisodes(episodes);
export const publishedEpisodes = getPublishedEpisodes(episodes);