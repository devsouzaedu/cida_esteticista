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
  return (
    <section className="section bg-white">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-4 text-contrast">Depoimentos</h2>
        <p className="mobile-text text-black text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Veja o que nossas clientes falam sobre os tratamentos com Cida Alves
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {feedbackImages.map((image, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-80">
                <Image
                  src={image}
                  alt={`Depoimento ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
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