import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';

const images = [
    'https://bizweb.dktcdn.net/100/413/756/files/2-74cb1bca-8717-431d-9c89-5cb4d1c34d6d.jpg?v=1712141509193',
    'https://bizweb.dktcdn.net/100/413/756/articles/1-2bbc0f32-dd6c-45bc-b74a-a51a2b058af8.jpg?v=1712154546947',
    'https://shop.adidas.jp/creative/202403/plp_intro_ss24_t-toe_samba-min_bac7bb45.jpg',
  ];
const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" w-full  mx-auto mt-36">
      <div className=" overflow-hidden   rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="min-w-full ">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-fit object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-2 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white px-2 py-2 rounded-full focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full focus:outline-none ${currentIndex === index ? 'bg-gray-800' : 'bg-gray-400'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
