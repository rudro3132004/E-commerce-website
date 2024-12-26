import React, { useState, useEffect } from 'react';

const BannerSlider = () => {

    const slides = [
        {
          id: 1,
          image: 'https://i.pinimg.com/736x/0a/1c/b1/0a1cb106e6efba43b119e3f38f509874.jpg',
        },
        {
          id: 2,
          image: 'https://www.phoneshopkenya.co.ke/wp-content/uploads/2024/05/samsung-a55-fslider.jpg',
        },
        {
          id: 3,
          image: 'https://ecommerce.hashtagtribe.in/wp-content/uploads/2022/08/e-com-slider-3.jpg',
        },
        {
          id: 4,
          image: 'https://i.ytimg.com/vi/x9Ouw6m30gg/maxresdefault.jpg',
        },
        {
          id: 5,
          image: 'https://cdn.smartslider3.com/wp-content/uploads/2023/05/monolithBoxed_1200.jpg',
        },
      ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto switch logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    
    <div className="relative w-full max-w-6x mx-auto overflow-hidden pt-2 pb-8">
      {/* Slider */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="min-w-full flex flex-col items-center"
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full object-cover h-56 md:h-[420px]"
            />
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-2 md:bottom-12">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-5 h-1 rounded-full ${
              currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;