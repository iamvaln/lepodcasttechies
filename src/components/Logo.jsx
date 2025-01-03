// src/components/Logo.jsx
import React from 'react';
import { useTheme } from './ThemeProvider';

export const Logo = ({ className = '', size = 'default' }) => {
  const { isDarkMode } = useTheme();

  const sizes = {
    small: 'w-8',
    default: 'w-12',
    large: 'w-16'
  };

  return (
    <svg 
      className={`${sizes[size]} ${className}`}
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1181 1181"
      aria-label="Techies Connect Podcast Logo"
      role="img"
    >
      <path 
        fill={isDarkMode ? "#FFFFFF" : "#000000"} 
        opacity="1.000000" 
        d="M782.000000,1182.000000 
          C521.333313,1182.000000 261.166656,1182.000000 1.000000,1182.000000 
          C1.000000,788.333313 1.000000,394.666656 1.000000,1.000000 
          C394.666656,1.000000 788.333313,1.000000 1182.000000,1.000000 
          C1182.000000,394.666656 1182.000000,788.333313 1182.000000,1182.000000 
          C1048.833374,1182.000000 915.666687,1182.000000 782.000000,1182.000000 
          M500.581543,197.085388 
          C426.891754,225.659790 380.575348,280.610504 350.494873,351.891663 
          C360.639618,356.240509 370.053925,360.276245 379.464905,364.310547 
          C385.076141,354.169098 390.198975,344.117706 396.035645,334.499481 
          C420.466705,294.239288 452.179047,261.462799 495.081726,240.819351 
          C549.420349,214.673279 605.491455,211.574310 662.434326,230.873489 
          C712.446838,247.823807 750.184814,280.801178 778.966370,324.391083 
          C787.355042,337.095825 794.428711,350.668823 802.314575,364.203278 
          C811.477844,360.259308 821.012512,356.155457 830.720032,351.977203 
          C819.559204,324.314117 805.483887,299.016937 787.248291,276.088745 
          C762.394287,244.839218 732.364319,220.053284 695.968384,203.329025 
          C662.458679,187.931030 627.104370,181.212128 590.325195,181.401489 
          C559.785278,181.558731 529.965393,185.763809 500.581543,197.085388 
          M650.215881,419.339966"
      />
    </svg>
  );
};

export default Logo;