import Image from 'next/image';

const treatmentsData = [
  {
    id: 1,
    title: 'Estética Facial',
    description: 'Tratamentos completos para rejuvenescimento, acne, manchas e revitalização da pele do rosto.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_facial.jpeg',
  },
  {
    id: 2,
    title: 'Pós-Operatório',
    description: 'Cuidados especializados para recuperação após procedimentos estéticos e cirúrgicos.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_pos_operatorio.jpeg',
  },
  {
    id: 3,
    title: 'Tratamento Capilar',
    description: 'Soluções para queda de cabelo, alopecia e fortalecimento dos fios.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_tratamento_alopecia (1).jpeg',
  }
];

const Treatments = () => {
  return (
    <section id="tratamentos" className="section bg-gray-900">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-4 text-contrast-dark">Tratamentos</h2>
        <p className="mobile-text text-white/90 text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Protocolos exclusivos e personalizados para cada tipo de pele e necessidade, sempre buscando os melhores resultados
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {treatmentsData.map(treatment => (
            <div key={treatment.id} className="bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
              <div className="relative h-64">
                <Image
                  src={treatment.image}
                  alt={treatment.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[--primary] mb-2">{treatment.title}</h3>
                <p className="text-[--text-light]">{treatment.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="mobile-text text-white/90 mb-4 md:mb-6">Interessada em algum tratamento? Entre em contato para uma avaliação personalizada!</p>
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

export default Treatments; 