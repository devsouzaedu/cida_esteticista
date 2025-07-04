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

const textTestimonials = [
  {
    id: 1,
    name: "Maria Silva",
    treatment: "Limpeza de Pele",
    text: "Excelente profissional! A Cida é muito cuidadosa e atenciosa. Minha pele ficou incrível após o tratamento.",
    rating: 5
  },
  {
    id: 2,
    name: "Ana Paula",
    treatment: "Pós-operatório",
    text: "Cuidado humanizado e técnica impecável. Me senti muito segura durante todo o processo de recuperação.",
    rating: 5
  },
  {
    id: 3,
    name: "Juliana Costa",
    treatment: "Tratamento Facial",
    text: "Mais de 11 anos de experiência fazem toda a diferença! Resultados visíveis desde a primeira sessão.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeTab, setActiveTab] = useState('images'); // 'images' ou 'text'

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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`text-lg ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}>
        ⭐
      </span>
    ));
  };

  return (
    <section className="section bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mobile-padding">
        <div className="text-center mb-12">
          <h2 className="mobile-heading font-normal mb-4 text-contrast font-serif">Depoimentos</h2>
          <p className="mobile-text text-black max-w-3xl mx-auto mb-8">
            Veja o que nossas clientes falam sobre os tratamentos com Cida Alves
          </p>
          
          {/* Estatísticas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-600">Clientes atendidas</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">11+</div>
              <div className="text-sm text-gray-600">Anos de experiência</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="text-2xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-gray-600">Satisfação</div>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            <div className="bg-white rounded-lg p-1 shadow-sm">
              <button
                onClick={() => setActiveTab('images')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'images' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Feedbacks
              </button>
              <button
                onClick={() => setActiveTab('text')}
                className={`px-6 py-2 rounded-md font-medium transition-colors ${
                  activeTab === 'text' 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                Avaliações
              </button>
            </div>
          </div>
        </div>
        
        {activeTab === 'images' ? (
          /* Slider de Imagens */
          <div className="relative max-w-6xl mx-auto">
            <div className="overflow-hidden">
              <div className="flex gap-6 transition-transform duration-500 ease-in-out">
                {visibleImages.map((image, index) => (
                  <div key={`${currentIndex}-${index}`} className="flex-1 min-w-0">
                    <div className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-shadow">
                      <div className="relative h-80 rounded-xl overflow-hidden border-4 border-gray-100 shadow-md">
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
        ) : (
          /* Depoimentos em Texto */
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {textTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-gray-800">{testimonial.name}</div>
                  <div className="text-sm text-blue-600">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <p className="mobile-text text-black mb-6">
            Quer fazer parte dessas histórias de sucesso? Agende sua consulta!
          </p>
          <a 
            href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20com%20a%20Cida!" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            <span>📱</span>
            Agende sua Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 