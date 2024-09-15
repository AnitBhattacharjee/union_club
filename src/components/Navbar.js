import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png'; // Add logo here
import { useTheme } from '../ThemeContext';  // Import useTheme hook for toggling theme

const Navbar = () => {
  const { toggleTheme, theme } = useTheme(); // Access toggleTheme and theme from context

  return (
    <nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-12 transition-transform transform hover:scale-150"  // Animation for logo
        />
      </Link>
      <ul className="flex space-x-6 items-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <Link to="/events" className="text-white hover:text-gray-400 transition-colors">
            Events
          </Link>
        </li>
        <li>
          <Link to="/prominent-figures" className="text-white hover:text-gray-400 transition-colors">
            Prominent Figures
          </Link>
        </li>
        <li>
          <Link to="/past-presidents" className="text-white hover:text-gray-400 transition-colors">
            Past Presidents
          </Link>
        </li>
        <li>
          {/* Light/Dark Mode Toggle Button */}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-gray-400 transition-colors p-2 bg-gray-700 rounded-md"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;