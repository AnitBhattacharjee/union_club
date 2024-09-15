import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/cirlogo.png'; // Path to your logo

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 shadow-lg flex justify-between items-center">
      <Link to="/">
        <img
          src={logo}
          alt="Logo"
          className="h-12 w-12 rounded-full transition-transform transform hover:scale-150"  // Make logo circular with Tailwind
        />
      </Link>
      <ul className="flex space-x-6">
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
      </ul>
    </nav>
  );
};

export default Navbar;