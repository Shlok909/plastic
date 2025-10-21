'use client';

import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Your actual product images from postimg.cc
  const productImages = [
    'https://i.postimg.cc/Tw27kBLn/5e085d9dad6bad9ebcb3428b-05.jpg',           // Colorful stools
    'https://i.postimg.cc/vHwPk1VT/5e085d9dad6badc727b34281-03.jpg',           // Blue table
    'https://i.postimg.cc/8cRbNH6P/5e0823b7edb754d4eb9d6e2c-chair-p-1080.jpg', // Black speckled chair
    'https://i.postimg.cc/YSvfhkWP/5e0823b776f1c69d2cb0cfe3-bench-p-500.jpg',  // Pink bench
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % productImages.length);
    }, 3000); // 3 seconds per image (1s static + 2s transition)

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (id: string):void => { 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh);
            opacity: 0;
          }
        }

        .bg-image-container {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .bg-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }

        .bg-image.active {
          z-index: 2;
          animation: slideUp 1s ease-in-out 2s forwards;
        }

        .bg-image.next {
          z-index: 1;
        }
      `}</style>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gray-900">
        {/* Background Images Container */}
        <div className="bg-image-container">
          {productImages.map((image, index) => {
            const isActive = index === currentIndex;
            const isNext = index === (currentIndex + 1) % productImages.length;
            
            return (
              <img
                key={index}
                src={image}
                alt={`Recycled plastic furniture product ${index + 1}`}
                className={`bg-image ${isActive ? 'active' : ''} ${isNext ? 'next' : ''}`}
                style={{
                  display: isActive || isNext ? 'block' : 'none',
                }}
                loading="eager"
              />
            );
          })}
          
          {/* Dark Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-emerald-900/60 to-black/70 z-10"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2 drop-shadow-2xl">
            <span className="text-white">Transforming Plastic Waste<br />into </span>
            <span className="text-emerald-400">Sustainable Solutions</span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/95 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4 drop-shadow-lg">
            Join The Plastic Project in our mission to create a cleaner, greener future by recycling plastic waste into innovative, eco-friendly products for homes and businesses.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4">
            <button
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 font-semibold"
              onClick={() => scrollToSection('sustainability-form')}
            >
              Bring house sustainability
              <ArrowRight className="h-5 w-5" />
            </button>

            <button
              className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-xl shadow-2xl hover:shadow-white/50 transition-all duration-300 bg-white/10 backdrop-blur-sm font-semibold"
              onClick={() => scrollToSection('product-showcase')}
            >
              Explore Our Products
            </button>
          </div>

          {/* Image Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {productImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-white w-8'
                    : 'bg-white/50 hover:bg-white/75 w-2'
                }`}
                aria-label={`View product ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block z-30">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </>
  );
}

