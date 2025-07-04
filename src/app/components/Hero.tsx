import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (9).jpeg"
          alt="Cida Alves - Tratamento facial"
          fill
          className="object-cover object-center md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container relative h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Badge de experiência */}
          <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 mb-4 text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
            Mais de 11 anos de experiência
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal mb-4 sm:mb-6 leading-tight drop-shadow-lg font-serif">
            Realce sua beleza com 
            <span className="text-yellow-300"> Cida Estética</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 text-white/90 drop-shadow-md">
            Tratamentos personalizados de estética facial e corporal em Barueri e Alphaville. Cuidado especializado para realçar sua beleza natural.
          </p>
          
          {/* Destaques rápidos */}
          <div className="flex flex-wrap gap-4 mb-6 sm:mb-8">
            <div className="flex items-center text-sm text-white/90">
              <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
              Profissional certificada
            </div>
            <div className="flex items-center text-sm text-white/90">
              <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
              Resultados comprovados
            </div>
            <div className="flex items-center text-sm text-white/90">
              <span className="w-1.5 h-1.5 bg-yellow-300 rounded-full mr-2"></span>
              Atendimento humanizado
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20com%20a%20Cida!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-flex items-center justify-center text-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <span className="mr-2">📱</span>
              Agende sua Avaliação Gratuita
            </a>
            <a 
              href="#tratamentos" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-all inline-flex items-center justify-center text-center w-full sm:w-auto px-8 py-4 text-sm sm:text-base font-semibold"
            >
              <span className="mr-2">✨</span>
              Conheça os Tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 