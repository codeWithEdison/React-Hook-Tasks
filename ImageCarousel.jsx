import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const ImageCarousel = () => {
  const images = [
    { src: '/api/placeholder/800/400', alt: 'Slide 1' },
    { src: '/api/placeholder/800/400', alt: 'Slide 2' },
    { src: '/api/placeholder/800/400', alt: 'Slide 3' },
    { src: '/api/placeholder/800/400', alt: 'Slide 4' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    let interval;
    const autoResume = setTimeout(() => {
      if (!isPlaying && Date.now() - lastInteraction > 5000) {
        setIsPlaying(true);
      }
    }, 5000);

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
      }, 3000);
    }

    return () => {
      clearInterval(interval);
      clearTimeout(autoResume);
    };
  }, [isPlaying, lastInteraction, images.length]);

  const handleNavigation = (direction) => {
    setLastInteraction(Date.now());
    setCurrentIndex((prev) => {
      if (direction === 'next') {
        return (prev + 1) % images.length;
      } else {
        return prev === 0 ? images.length - 1 : prev - 1;
      }
    });
  };

  const togglePlayPause = () => {
    setLastInteraction(Date.now());
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-4">
      <div className="relative h-64">
        <img
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          className="w-full h-full object-cover rounded"
        />
        
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button
            onClick={() => handleNavigation('prev')}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={() => handleNavigation('next')}
            className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="mt-4 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              setLastInteraction(Date.now());
            }}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>

      <button
        onClick={togglePlayPause}
        className="mt-4 flex items-center mx-auto bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {isPlaying ? (
          <>
            <Pause size={20} className="mr-2" /> Pause
          </>
        ) : (
          <>
            <Play size={20} className="mr-2" /> Play
          </>
        )}
      </button>
    </div>
  );
};

export default ImageCarousel;
