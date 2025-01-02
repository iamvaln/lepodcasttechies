// src/components/Placeholders.jsx
export const EpisodePlaceholder = ({ episodeNumber,episodePlaceholder }) => (
    <svg viewBox="0 0 600 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="400" fill="#7B68EE"/>
      <text x="300" y="180" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
        Episode {episodeNumber}
      </text>
      <text x="300" y="240" fontSize="24" fill="white" textAnchor="middle">
      {episodePlaceholder} 
      </text>
    </svg>
  );
  
  export const BlogPlaceholder = () => (
    <svg viewBox="0 0 800 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="800" height="400" fill="#7B68EE"/>
      <text x="400" y="180" fontSize="48" fontWeight="bold" fill="white" textAnchor="middle">
        Blog Article
      </text>
      <text x="400" y="240" fontSize="24" fill="white" textAnchor="middle">
        Techies Connect' Podcast
      </text>
    </svg>
  );
  
  export const ProfilePlaceholder = ({ name }) => (
    <svg viewBox="0 0 400 400" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" fill="#7B68EE"/>
      {/* Icône abstraite de profil */}
      <circle cx="200" cy="150" r="60" fill="white"/>
      <circle cx="200" cy="280" r="100" fill="white" clipPath="inset(0 0 50% 0)"/>
      <text x="200" y="350" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
        {name}
      </text>
    </svg>
  );