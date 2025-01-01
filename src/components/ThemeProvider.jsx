// src/components/ThemeProvider.jsx
import React from 'react';

export const ThemeContext = React.createContext();

export const ThemeProvider = ({ children }) => {
  const [isDark, setIsDark] = React.useState(false);

  const theme = {
    isDark,
    toggleTheme: () => {
      setIsDark(!isDark);
      document.documentElement.classList.toggle('dark');
    },
    styles: {
      body: `min-h-screen ${isDark ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`,
      card: `${isDark ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-xl overflow-hidden`,
      text: isDark ? 'text-gray-300' : 'text-gray-600',
      nav: `${isDark ? 'bg-gray-800' : 'bg-[#7B68EE]'} text-white`,
      button: `${isDark ? 'bg-[#7B68EE] hover:bg-[#6A5ACD]' : 'bg-[#7B68EE] hover:bg-[#6A5ACD]'} text-white`,
      heroGradient: isDark ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-[#7B68EE] to-[#6A5ACD]',
      link: `mt-4 flex items-center space-x-2 text-[#7B68EE] hover:text-[#6A5ACD]`,
      actionButton: `flex items-center space-x-2 text-[#7B68EE] hover:text-[#6A5ACD] font-medium`,
      backButton: `text-[#7B68EE] hover:text-[#6A5ACD]`
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
