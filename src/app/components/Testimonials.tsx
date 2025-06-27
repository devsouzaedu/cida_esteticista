'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Ana Paula",
    text: "Os tratamentos da Cida são excepcionais! Em apenas um mês tive resultados significativos no rejuvenescimento da minha pele.",
    avatar: "/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (1).jpeg",
    rating: 5,
  },
  {
    id: 2,
    name: "Mariana Costa",
    text: "Fiz o tratamento pós-operatório com a Cida e foi fundamental para minha recuperação. Profissional atenciosa e muito competente.",
    avatar: "/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (2).jpeg",
    rating: 5,
  },
  {
    id: 3,
    name: "Patrícia Mendes",
    text: "Fiz o curso de estética facial e superou todas as minhas expectativas. Cida compartilha conhecimento prático e valioso.",
    avatar: "/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (3).jpeg",
    rating: 5,
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-8 md:mb-12 text-contrast">O que dizem nossos clientes</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-lg p-6 md:p-10">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full overflow-hidden mb-5 relative">
                <Image 
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill={i < testimonials[activeIndex].rating ? "#FFD700" : "#D3D3D3"}
                    className="w-5 h-5"
                  >
                    <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                  </svg>
                ))}
              </div>
              
              <p className="text-lg md:text-xl italic mb-4">&ldquo;{testimonials[activeIndex].text}&rdquo;</p>
              <h4 className="font-medium text-[--primary]">{testimonials[activeIndex].name}</h4>
            </div>
            
            <div className="absolute -bottom-5 left-0 right-0 flex justify-center gap-4">
              <button 
                onClick={handlePrev}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[--primary] hover:bg-[--primary] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-[--primary] hover:bg-[--primary] hover:text-white transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 