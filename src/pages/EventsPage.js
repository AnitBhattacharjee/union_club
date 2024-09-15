import React, { useState, useEffect, useCallback } from 'react';

const EventsPage = () => {
  const [images, setImages] = useState([]);
  const [visibleImages, setVisibleImages] = useState(5);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Dynamically load images from the public/images folder
    const importAll = (r) => r.keys().map(r);
    const imagePaths = importAll(require.context('../../public/images', false, /\.(png|jpe?g|svg)$/));
    setImages(imagePaths);
  }, []);

  const loadMoreImages = useCallback(() => {
    if (visibleImages < images.length) {
      setIsLoading(true);

      // Simulate a loading time to show the spinner
      setTimeout(() => {
        setVisibleImages((prevVisible) => prevVisible + 5);
        setIsLoading(false);
      }, 1000);  // Adjust this timeout if needed for longer or shorter loading times
    }
  }, [visibleImages, images.length]);

  useEffect(() => {
    // Event listener to load more images when scrolling to the bottom
    const handleScroll = () => {
      if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100 && !isLoading) {
        loadMoreImages();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isLoading, loadMoreImages]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Events and Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {images.slice(0, visibleImages).map((image, index) => (
          <img key={index} src={image} alt={`Event ${index}`} className="w-full h-auto object-cover rounded-lg shadow-md" />
        ))}
      </div>

      {/* Show loading spinner if more images are being loaded */}
      {isLoading && (
        <div className="flex justify-center mt-6">
          <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12"></div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;