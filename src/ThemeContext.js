import React, { createContext, useState, useContext } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const darkTheme = {
    background: '#1a1a1a',
    text: '#f0f0f0',
  };

  const lightTheme = {
    background: '#f7f1e3',
    text: '#3e3e3e',
  };

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, currentTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);