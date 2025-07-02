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
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container relative h-full flex flex-col justify-center items-start text-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight drop-shadow-lg">
            Beleza e Saúde da Sua Pele
          </h1>
          <p className="text-base sm:text-lg md:text-xl max-w-xl mb-6 sm:mb-8 text-white drop-shadow-md">
            Tratamentos personalizados de estética facial e corporal em Barueri e Alphaville com Cida Alves.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20um%20tratamento%20com%20voc%C3%AA!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-block text-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium"
            >
              Agende sua Avaliação
            </a>
            <a 
              href="#tratamentos" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-colors inline-block text-center w-full sm:w-auto px-6 py-3 text-sm sm:text-base font-medium"
            >
              Conheça os Tratamentos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 