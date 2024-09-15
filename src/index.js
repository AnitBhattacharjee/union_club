import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // Ensure this file includes Tailwind CSS import
import App from './App';
import { ThemeProvider } from './ThemeContext'; // Import ThemeProvider

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);