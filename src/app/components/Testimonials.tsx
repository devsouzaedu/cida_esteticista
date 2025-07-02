'use client';

import { useState } from 'react';
import Image from 'next/image';

const feedbackImages = [
  '/images/feedbacks (1).png',
  '/images/feedbacks (2).png',
  '/images/feedbacks (3).png',
  '/images/feedbacks (4).png',
  '/images/feedbacks (5).png',
  '/images/feedbacks (6).png',
  '/images/feedbacks (7).png',
  '/images/feedbacks (8).png'
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 3 >= feedbackImages.length ? 0 : prevIndex + 3
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 3 < 0 ? Math.max(0, feedbackImages.length - 3) : prevIndex - 3
    );
  };

  const visibleImages = feedbackImages.slice(currentIndex, currentIndex + 3);
  
  // Se não tiver 3 imagens, completa com as primeiras
  while (visibleImages.length < 3 && feedbackImages.length > 0) {
    const remainingIndex = (currentIndex + visibleImages.length) % feedbackImages.length;
    visibleImages.push(feedbackImages[remainingIndex]);
  }

  return (
    <section className="section bg-white">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-4 text-contrast">Depoimentos</h2>
        <p className="mobile-text text-black text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Veja o que nossas clientes falam sobre os tratamentos com Cida Alves
        </p>
        
        <div className="relative max-w-6xl mx-auto">
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div className="flex gap-6 transition-transform duration-500 ease-in-out">
              {visibleImages.map((image, index) => (
                <div key={`${currentIndex}-${index}`} className="flex-1 min-w-0">
                  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-80 rounded-xl overflow-hidden border-4 border-white shadow-md">
                      <Image
                        src={image}
                        alt={`Depoimento ${currentIndex + index + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors z-10"
            aria-label="Depoimentos anteriores"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-blue-600 hover:bg-blue-50 transition-colors z-10"
            aria-label="Próximos depoimentos"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from({ length: Math.ceil(feedbackImages.length / 3) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index * 3)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  Math.floor(currentIndex / 3) === index 
                    ? 'bg-blue-600' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para grupo ${index + 1} de depoimentos`}
              />
            ))}
          </div>
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="mobile-text text-black mb-4 md:mb-6">
            Quer fazer parte dessas histórias de sucesso? Agende sua consulta!
          </p>
          <a 
            href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20um%20tratamento%20com%20voc%C3%AA!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inline-block"
          >
            Agende sua Consulta
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 