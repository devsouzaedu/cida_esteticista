import Image from 'next/image';

export default function About() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-high-contrast mb-6">
              Quem é Cida Alves
            </h2>
            <div className="space-y-4 text-medium-contrast">
              <p className="text-lg leading-relaxed">
                Sou Cida Alves, esteticista especializada em tratamentos faciais e corporais, 
                com <strong className="text-primary">mais de 11 anos de experiência</strong> transformando 
                a autoestima de centenas de clientes em Barueri e Alphaville.
              </p>
              <p className="leading-relaxed">
                Minha paixão pela estética vai além da técnica. Acredito que cada pessoa 
                é única e merece um cuidado personalizado. Por isso, desenvolvo protocolos 
                específicos para cada necessidade, sempre priorizando a segurança e 
                os resultados naturais.
              </p>
              <p className="leading-relaxed">
                Estou constantemente me atualizando com as mais modernas técnicas e 
                equipamentos do mercado, para oferecer sempre o melhor para meus clientes. 
                Meu compromisso é com a excelência e a satisfação de cada pessoa que 
                confia em meu trabalho.
              </p>
            </div>
            
            {/* Certificações */}
            <div className="mt-8 space-y-3">
              <h3 className="text-xl font-serif text-high-contrast mb-4">Especializações</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-medium-contrast">Estética Facial Avançada</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-medium-contrast">Pós-operatório Especializado</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-medium-contrast">Drenagem Linfática</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <span className="text-medium-contrast">Tratamentos Corporais</span>
                </div>
              </div>
            </div>
          </div>

          {/* Imagem */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_quemecida.jpeg"
                  alt="Cida Alves - Esteticista em Barueri e Alphaville"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Badge de experiência */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">11+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 