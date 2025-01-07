// src/data/episodes.js
export const episodes = [
    {
      id: 1,
      language: 'en', // Langue de l'épisode
      translations: {
        fr: {
          title: "Bienvenue sur Techies Connect' Podcast",
          description: "Premier épisode officiel : découvrez la vision du podcast...",
        },
        en: {
          title: "Welcome to Techies Connect' Podcast",
          description: "First official episode: discover the podcast's vision...",
        }
      },
      date: "2024-12-31",
      placeholder: "Welcome to Techies Connect' Podcast",
      duration: "5:00",
      spotifyUrl: 'https://open.spotify.com/episode/...'
    },
    {
      id: 2,
      language: 'fr',
      translations: {
        fr: {
          title: "La protection des données personnelles au Cameroun",
          description: "Analyse détaillée de la nouvelle loi sur la protection des données...",
        },
        en: {
          title: "Data Protection in Cameroon",
          description: "Detailed analysis of the new data protection law...",
        }
      },
      date: "2024-12-31",
      placeholder: "Data Protection in Cameroon",
      duration: "20:00",
      spotifyUrl: 'https://open.spotify.com/episode/...'
    }
  ];
