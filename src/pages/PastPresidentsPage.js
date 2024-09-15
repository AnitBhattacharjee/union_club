import React from 'react';


const PastPresidentsPage = () => {
  const presidents = [
    { year: 1882, name: 'President 1', img: 'placeholder.png' },
    { year: 1887, name: 'President 2', img: 'placeholder.png' },
    // Add entries every 5 years...
    { year: 2024, name: 'President x', img: 'placeholder.png' },
  ];

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Past Presidents</h1>
      <div className="timeline">
        {presidents.map((president, index) => (
          <div key={index} className="timeline-item mb-4">
            <h2 className="text-xl font-semibold">{president.year}</h2>
            <p>{president.name}</p>
            <img src={`path/to/images/${president.img}`} alt={`${president.name}`} className="w-24 h-24 object-cover rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastPresidentsPage;