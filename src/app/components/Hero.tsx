import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
      {/* Imagem de fundo */}
      <div className="absolute inset-0">
        <Image
          src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_hero_1.jpeg"
          alt="Cida Esteticista - Tratamento facial"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
      </div>

      {/* Conteúdo do Hero */}
      <div className="container relative h-full flex flex-col justify-center items-start text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Beleza e Saúde da Sua Pele
          </h1>
          <p className="text-lg md:text-xl max-w-xl mb-8 text-white/90">
            Tratamentos personalizados de estética facial e corporal em Barueri e Alphaville com a esteticista Cida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://wa.me/5511XXXXXXXX" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-block text-center"
            >
              Agende sua Avaliação
            </a>
            <a 
              href="#tratamentos" 
              className="btn border-2 border-white text-white hover:bg-white hover:text-primary transition-colors inline-block text-center"
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