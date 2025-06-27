import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="section bg-gray-50">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Quem é Cida Esteticista</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_quemecida.jpeg"
              alt="Cida Esteticista"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-[--primary] mb-4">Experiência e Dedicação</h3>
            <p className="text-[--text-light] mb-6">
              Com mais de 10 anos de experiência na área de estética, Cida se especializou em tratamentos faciais 
              e corporais avançados, sempre buscando novas técnicas e tecnologias para oferecer os melhores 
              resultados aos seus clientes.
            </p>
            <p className="text-[--text-light] mb-6">
              Formada em estética e cosmetologia, com certificações em diversas técnicas de rejuvenescimento, 
              tratamentos para acne, hiperpigmentação e recuperação da saúde da pele, Cida desenvolveu protocolos 
              exclusivos que combinam técnicas manuais com tecnologia de ponta.
            </p>
            <p className="text-[--text-light]">
              Localizada em Barueri/Alphaville, seu espaço oferece um ambiente acolhedor e totalmente equipado 
              para proporcionar bem-estar e resultados reais em cada atendimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 