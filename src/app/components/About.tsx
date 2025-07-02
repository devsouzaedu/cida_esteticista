import Image from 'next/image';

const About = () => {
  return (
    <section id="sobre" className="section bg-gray-100">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-8 md:mb-12 text-contrast">Quem é Cida Alves</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative h-[300px] sm:h-[400px] rounded-lg overflow-hidden">
            <Image 
              src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (1).jpeg"
              alt="Cida Alves"
              fill
              className="object-cover"
            />
          </div>
          
          <div>
            <div className="flex items-center gap-4 mb-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-[--secondary]">Cida Alves</h3>
              <div className="flex gap-2">
                <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-sm">f</span>
                </a>
                <a href="https://www.instagram.com/cidaalvesestetica_/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
                  <span className="text-sm">📷</span>
                </a>
              </div>
            </div>
            <div className="space-y-4 text-black">
              <p className="mobile-text">
                <strong>Cida Alves</strong> é uma profissional com mais de 11 anos de experiência na área de Estética e Cosmetologia. Possui graduação em Estética e Cosmetologia, pós-graduação em Estética Clínica e Estética Avançada, além de especializações em Ozônioterapia e PRP. Atualmente, está graduando-se em Enfermagem, ampliando ainda mais seu conhecimento para atuar com excelência na área da saúde.
              </p>
              <p className="mobile-text">
                Com 8 anos de experiência como docente, Cida tem como foco a formação de profissionais qualificados para o pós-operatório e injetáveis, transmitindo seu conhecimento prático e teórico de forma clara e acessível, com ênfase no cuidado ao paciente e nas técnicas mais atualizadas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 