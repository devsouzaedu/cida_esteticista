import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (9).jpeg"
          alt="Cida Alves - Tratamentos e Cursos de Estética em Alphaville e Barueri"
          fill
          className="object-cover object-center md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container relative h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge de experiência */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Mais de 11 anos de experiência em Alphaville e Barueri
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 leading-tight drop-shadow-lg font-serif text-white">
            <span className="text-yellow-300">Cida Alves</span> - Dois Serviços, Uma Excelência
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-2xl mb-6 sm:mb-8 text-white/90 drop-shadow-md">
            <strong>TRATAMENTOS</strong> especializados em ozonioterapia, estética facial, corporal, alopecia e pós-operatório para clientes em Alphaville e Barueri. <strong>CURSOS</strong> para profissionais graduados em estética que querem se especializar.
          </p>
          
          {/* Dois tipos de serviços */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold mb-2 text-white">🌟 Para Clientes</h3>
              <p className="text-sm text-white/90 mb-3">Tratamentos personalizados de estética</p>
              <ul className="text-xs text-white/80 space-y-1">
                <li>• Ozonioterapia</li>
                <li>• Estética Facial e Corporal</li>
                <li>• Tratamento de Alopecia</li>
                <li>• Pós-operatório Humanizado</li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
              <h3 className="text-lg font-semibold mb-2 text-white">🎓 Para Profissionais</h3>
              <p className="text-sm text-white/90 mb-3">Cursos para graduados em estética</p>
              <ul className="text-xs text-white/80 space-y-1">
                <li>• Pós-operatório Avançado</li>
                <li>• Técnicas Especializadas</li>
                <li>• Certificação Profissional</li>
                <li>• Networking no Mercado</li>
              </ul>
            </div>
          </div>
          
          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20para%20tratamento%20em%20Alphaville/Barueri!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <span>🌟</span>
              Agendar Tratamento
            </a>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20sou%20profissional%20graduado%20em%20estética%20e%20gostaria%20de%20saber%20sobre%20os%20cursos!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold border border-white/30 hover:bg-white/30 transition-all duration-300 text-center inline-flex items-center justify-center gap-2"
            >
              <span>🎓</span>
              Cursos para Profissionais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 