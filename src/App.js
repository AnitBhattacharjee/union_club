import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import EventsPage from './pages/EventsPage';
import ProminentFiguresPage from './pages/ProminentFiguresPage';
import PastPresidentsPage from './pages/PastPresidentsPage';  // Ensure this file exists
import { useTheme } from './ThemeContext';
import Navbar from './components/Navbar';

const App = () => {
  const { currentTheme } = useTheme();

  return (
    <Router>
      <div style={{ backgroundColor: currentTheme.background, color: currentTheme.text }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/prominent-figures" element={<ProminentFiguresPage />} />
          <Route path="/past-presidents" element={<PastPresidentsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;