// LandingPage.js

import React from 'react';
import banner from '../assets/images/banner.jpeg';  // Assuming the banner is in src/assets/images
import logo from '../assets/images/logo.png'; // Import logo

const LandingPage = () => {
  return (
    <div>
      {/* Full-screen banner section */}
      <div
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Optional overlay */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
          {/* Display Logo */}
          <img
            src={logo}
            alt="Logo"
            className="h-24 mb-10 transition-transform transform hover:scale-110"  // Adjust the size and animation
          />
          <h1 className="text-5xl font-bold">Welcome to UNION CLUB & LIBRARY</h1>
          <p className="text-2xl mt-4">A Legacy of History and Culture</p>
        </div>
      </div>

      {/* Other sections of the landing page can go below */}
      <section className="p-8">
        <h2 className="text-3xl font-bold mb-6">Our History</h2>
        <p className="text-lg">
          {/* History content goes here */}
          Our Union Club and Library, located in Hazaribag, is a historic institution with deep cultural roots.
          Established in 1882, it has been a cornerstone of intellectual and social gatherings for over a century.
          The club not only served as a hub for discussions on literature, politics, and society but also attracted
          several prominent personalities throughout its history. Distinguished figures, including freedom fighters,
          scholars, and leaders, graced the halls of the club, making it a place of significant historical importance.
          Over the years, it has fostered a vibrant community of thinkers and continues to be a symbol of Hazaribag's
          rich cultural heritage.
        </p>
      </section>
    </div>
  );
};

export default LandingPage;