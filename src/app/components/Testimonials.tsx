'use client';

import { useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    treatment: "Tratamento Facial Completo",
    rating: 5,
    comment: "Resultado incrível! Minha pele nunca esteve tão bonita. Cida é uma profissional excepcional, muito atenciosa e cuidadosa. Recomendo de olhos fechados!",
    date: "Dezembro 2024"
  },
  {
    id: 2,
    name: "Ana Costa",
    treatment: "Limpeza de Pele Profunda",
    rating: 5,
    comment: "Atendimento excelente! Ambiente acolhedor e resultado surpreendente. Já marquei minha próxima sessão. Cida é muito profissional e dedicada.",
    date: "Novembro 2024"
  },
  {
    id: 3,
    name: "Juliana Santos",
    treatment: "Drenagem Linfática",
    rating: 5,
    comment: "Melhor investimento que fiz! Senti a diferença desde a primeira sessão. Cida tem mãos de fada e um conhecimento impressionante.",
    date: "Outubro 2024"
  },
  {
    id: 4,
    name: "Carla Rodrigues",
    treatment: "Tratamento Anti-idade",
    rating: 5,
    comment: "Superou todas as minhas expectativas! Cida é muito técnica e ao mesmo tempo carinhosa. Minha pele está com aspecto muito mais jovem.",
    date: "Setembro 2024"
  }
];

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

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState('feedbacks');
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % feedbackImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + feedbackImages.length) % feedbackImages.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-high-contrast mb-4">
            Depoimentos
          </h2>
          <p className="text-lg text-medium-contrast max-w-2xl mx-auto">
            Veja o que nossos clientes dizem sobre os resultados
          </p>
        </div>

        {/* Estatísticas */}
        <div className="grid grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">500+</div>
            <div className="text-sm text-medium-contrast">Clientes atendidos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">11+</div>
            <div className="text-sm text-medium-contrast">Anos de experiência</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">98%</div>
            <div className="text-sm text-medium-contrast">Satisfação</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-white rounded-full p-1 shadow-md">
            <button
              onClick={() => setActiveTab('feedbacks')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'feedbacks'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-medium-contrast hover:text-primary'
              }`}
            >
              Feedbacks
            </button>
            <button
              onClick={() => setActiveTab('avaliacoes')}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'avaliacoes'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-medium-contrast hover:text-primary'
              }`}
            >
              Avaliações
            </button>
          </div>
        </div>

        {/* Conteúdo das Tabs */}
        {activeTab === 'feedbacks' && (
          <div className="relative">
            {/* Desktop - Grid de 3 colunas */}
            <div className="hidden md:grid grid-cols-3 gap-6 max-w-6xl mx-auto">
              {feedbackImages.slice(0, 6).map((image, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-80">
                    <Image
                      src={image}
                      alt={`Feedback ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile - Carrossel com uma imagem */}
            <div className="md:hidden">
              <div className="relative max-w-sm mx-auto">
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="relative h-96">
                    <Image
                      src={feedbackImages[currentSlide]}
                      alt={`Feedback ${currentSlide + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

                {/* Controles do carrossel */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
                >
                  <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Indicadores */}
              <div className="flex justify-center mt-4 space-x-2">
                {feedbackImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'avaliacoes' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mr-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-sm text-medium-contrast">{testimonial.date}</div>
                </div>
                <p className="text-medium-contrast mb-4 leading-relaxed">
                  &ldquo;{testimonial.comment}&rdquo;
                </p>
                <div className="border-t pt-4">
                  <div className="font-medium text-high-contrast">{testimonial.name}</div>
                  <div className="text-sm text-primary">{testimonial.treatment}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-lg text-medium-contrast mb-6">
            Quer fazer parte dessas histórias de sucesso? Agende sua consulta!
          </p>
          <a
            href="https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma avaliação gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-green-600 text-white px-8 py-4 rounded-full font-medium hover:bg-green-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
            </svg>
            Agende sua Avaliação Gratuita
          </a>
        </div>
      </div>
    </section>
  );
} 