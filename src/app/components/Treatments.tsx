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
}

const treatmentsData: Treatment[] = [
  {
    id: 1,
    title: 'Estética Facial',
    description: 'Tratamentos completos para rejuvenescimento, acne, manchas e revitalização da pele do rosto.',
    benefits: ['Limpeza profunda', 'Hidratação intensa', 'Redução de manchas', 'Rejuvenescimento'],
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_facial.jpeg',
    duration: '60-90 min',
    price: 'A partir de R$ 80',
    link: undefined,
  },
  {
    id: 2,
    title: 'Pós Operatório Humanizado',
    description: 'Cuidados especializados para recuperação após procedimentos estéticos e cirúrgicos.',
    benefits: ['Drenagem linfática', 'Redução de edemas', 'Acelera cicatrização', 'Conforto e segurança'],
    image: '/images/cida_esteticista_ Curso de pós operatório avançado.jpeg',
    duration: '45-60 min',
    price: 'Consulte valores',
    link: '/pos-operatorio',
  },
  {
    id: 3,
    title: 'Tratamento Capilar',
    description: 'Soluções para queda de cabelo, alopecia e fortalecimento dos fios.',
    benefits: ['Estimula crescimento', 'Fortalece os fios', 'Trata alopecia', 'Melhora circulação'],
    image: '/images/cida_esteticista_Tratamento para alopécia..jpeg',
    duration: '45-60 min',
    price: 'A partir de R$ 120',
    link: undefined,
  }
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="section bg-white">
      <div className="container mobile-padding">
        <div className="text-center mb-12">
          <h2 className="mobile-heading font-bold mb-4 text-contrast">Tratamentos</h2>
          <p className="mobile-text text-black max-w-3xl mx-auto mb-8">
            Protocolos exclusivos e personalizados para cada tipo de pele e necessidade, sempre buscando os melhores resultados com mais de 11 anos de experiência.
          </p>
          
          {/* Destaque da experiência */}
          <div className="inline-flex items-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-full px-6 py-3 mb-8">
            <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
            <span className="text-sm font-semibold text-gray-700">Mais de 11 anos de experiência comprovada</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {treatmentsData.map(treatment => (
            <div key={treatment.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] border border-gray-100">
              <div className="relative h-64">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-blue-600">{treatment.duration}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{treatment.title}</h3>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">Investimento</div>
                    <div className="text-lg font-bold text-blue-600">{treatment.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">{treatment.description}</p>
                
                {/* Benefícios */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-800 mb-3">Principais benefícios:</h4>
                  <div className="grid grid-cols-2 gap-2">
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
                    href={`https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20tratamento%20de%20${encodeURIComponent(treatment.title)}!`}
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
        
        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Pronta para transformar sua beleza?</h3>
          <p className="text-lg mb-6 opacity-90">
            Agende uma avaliação gratuita e descubra qual tratamento é ideal para você!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20com%20a%20Cida!" 
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