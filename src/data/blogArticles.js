// src/data/blogArticles.js
export const articles = [
    {
      id: 'welcome',
      translations: {
        fr: {
          title: "Bienvenue sur Techies Connect' Podcast",
          date: "31 Décembre 2024",
          excerpt: "Découvrez notre nouveau podcast dédié à l'écosystème tech camerounais...",
          content: {
            intro: "Nous sommes ravis de vous présenter Techies Connect' Podcast...",
            sections: [
              {
                title: "Notre Vision",
                content: "Dans un écosystème tech en pleine effervescence..."
              },
              // ... autres sections
            ]
          },
          category: "Actualités"
        },
        en: {
          title: "Welcome to Techies Connect' Podcast",
          date: "December 31, 2024",
          excerpt: "Discover our new podcast dedicated to the Cameroonian tech ecosystem...",
          content: {
            intro: "We are delighted to present Techies Connect' Podcast...",
            sections: [
              {
                title: "Our Vision",
                content: "In a thriving tech ecosystem..."
              },
              // ... autres sections
            ]
          },
          category: "News"
        }
      }
    }
  ];