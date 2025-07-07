import Image from 'next/image';

interface Treatment {
  id: number;
  title: string;
  description: string;
  benefits: string[];
  image: string;
  link?: string;
  duration?: string;
  price?: string;
  keywords: string[];
}

const treatmentsData: Treatment[] = [
  {
    id: 1,
    title: 'Ozonioterapia',
    description: 'Tratamento inovador com ozônio para revitalização celular, melhora da circulação e fortalecimento do sistema imunológico. Referência em ozonioterapia em Alphaville e Barueri.',
    benefits: ['Revitalização celular', 'Melhora circulação', 'Fortalece imunidade', 'Efeito anti-aging'],
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_mostrandomaterial_ OZONIOTERAPIA.jpeg',
    duration: '45-60 min',
    price: 'A partir de R$ 150',
    keywords: ['ozonioterapia alphaville', 'ozonioterapia barueri', 'tratamento ozônio'],
  },
  {
    id: 2,
    title: 'Estética Facial',
    description: 'Tratamentos faciais personalizados para rejuvenescimento, acne, manchas e revitalização da pele. Protocolos exclusivos para cada tipo de pele em Alphaville e região.',
    benefits: ['Limpeza profunda', 'Hidratação intensa', 'Redução de manchas', 'Rejuvenescimento'],
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_facial.jpeg',
    duration: '60-90 min',
    price: 'A partir de R$ 120',
    keywords: ['estética facial alphaville', 'estética facial barueri', 'tratamento facial'],
  },
  {
    id: 3,
    title: 'Estética Corporal',
    description: 'Tratamentos corporais completos para modelagem, redução de medidas e melhora da textura da pele. Técnicas avançadas para resultados duradouros em Alphaville e Barueri.',
    benefits: ['Modelagem corporal', 'Redução de medidas', 'Melhora da pele', 'Drenagem linfática'],
    image: '/images/cida_estetica_corporal_usar_essa_foto.jpg',
    duration: '60-90 min',
    price: 'A partir de R$ 150',
    keywords: ['estética corporal alphaville', 'estética corporal barueri', 'modelagem corporal'],
  },
  {
    id: 4,
    title: 'Tratamento de Alopecia',
    description: 'Tratamento especializado para queda de cabelo e alopecia com técnicas avançadas e protocolos personalizados. Referência em tratamento capilar em Alphaville e Barueri.',
    benefits: ['Estimula crescimento', 'Fortalece os fios', 'Trata alopecia', 'Melhora circulação'],
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_alopecia (6).jpeg',
    duration: '45-60 min',
    price: 'A partir de R$ 180',
    keywords: ['tratamento alopecia alphaville', 'tratamento alopecia barueri', 'queda cabelo'],
  },
  {
    id: 5,
    title: 'Pós-Operatório Humanizado',
    description: 'Cuidados especializados e humanizados para recuperação após procedimentos estéticos e cirúrgicos. Protocolos seguros para acelerar a cicatrização em Alphaville e região.',
    benefits: ['Drenagem linfática', 'Redução de edemas', 'Acelera cicatrização', 'Conforto e segurança'],
    image: '/images/cida_esteticista curso_tecnica_pos_operatorio) (2).jpeg',
    duration: '45-60 min',
    price: 'Consulte valores',
    link: '/pos-operatorio',
    keywords: ['pós operatório alphaville', 'pós operatório barueri', 'drenagem linfática'],
  }
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="section bg-white">
      <div className="container mobile-padding">
        <div className="text-center mb-12">
          <h2 className="mobile-heading font-normal mb-4 text-contrast font-serif">Tratamentos Especializados</h2>
          <p className="mobile-text text-black max-w-4xl mx-auto mb-6">
            Oferecemos tratamentos personalizados de <strong>ozonioterapia</strong>, <strong>estética facial</strong>, <strong>estética corporal</strong>, <strong>tratamento de alopecia</strong> e <strong>pós-operatório</strong> em Alphaville, Barueri e região. Protocolos exclusivos com mais de 11 anos de experiência comprovada.
          </p>
          
          {/* Destaque da localização */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-sm font-semibold text-gray-700">Atendimento em Alphaville, Barueri e região</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {treatmentsData.map(treatment => (
            <div key={treatment.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100">
              <div className="relative h-64">
                <Image
                  src={treatment.image}
                  alt={`${treatment.title} em Alphaville e Barueri - Cida Alves`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-blue-600">{treatment.duration}</span>
                </div>
                <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-white">{treatment.price}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{treatment.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {treatment.keywords.slice(0, 2).join(' • ')}
                  </p>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                
                {/* Benefícios */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Principais benefícios:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {treatment.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {benefit}
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <a 
                    href={`https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20${encodeURIComponent(treatment.title)}%20em%20Alphaville/Barueri!`}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 text-white text-center py-3 px-4 rounded-lg font-semibold hover:bg-green-600 transition-colors text-sm"
                  >
                    💬 WhatsApp
                  </a>
                  {treatment.link && (
                    <a 
                      href={treatment.link}
                      className="flex-1 border-2 border-blue-600 text-blue-600 text-center py-3 px-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors text-sm"
                    >
                      Saiba mais →
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Seção de Diferenciais */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Por que escolher Cida Alves?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">11+ Anos de Experiência</h4>
              <p className="text-gray-600 text-sm">Mais de uma década transformando vidas em Alphaville e Barueri</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">📍</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Localização Estratégica</h4>
              <p className="text-gray-600 text-sm">Atendimento especializado em Alphaville, Barueri e região</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">✨</span>
              </div>
              <h4 className="font-semibold text-gray-800 mb-2">Protocolos Personalizados</h4>
              <p className="text-gray-600 text-sm">Cada tratamento é único e desenvolvido para suas necessidades</p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4 text-white">Pronta para transformar sua beleza?</h3>
          <p className="text-lg mb-6 opacity-90">
            Agende uma avaliação gratuita e descubra qual tratamento é ideal para você em Alphaville ou Barueri!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20com%20a%20Cida%20em%20Alphaville/Barueri!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>📱</span>
              Avaliação Gratuita
            </a>
            <a 
              href="#contato" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <span>📍</span>
              Ver Localização
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatments; 