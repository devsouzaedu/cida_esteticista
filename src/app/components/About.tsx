import Image from 'next/image';

export default function About() {
  return (
    <section id="sobre" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto */}
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-serif text-high-contrast mb-6">
              Quem é Cida Alves
            </h2>
            <div className="space-y-4 text-medium-contrast">
              <p className="text-lg leading-relaxed">
                Sou Cida Alves, esteticista especializada com <strong className="text-primary">mais de 11 anos de experiência</strong> em Alphaville, Barueri e região. Minha atuação é dupla: <strong>atendo clientes</strong> com tratamentos personalizados e <strong>ensino profissionais graduados</strong> a se tornarem referência no mercado.
              </p>
              
              {/* Dois tipos de atuação */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h3 className="font-semibold text-blue-800 mb-2">🌟 Atendimento a Clientes</h3>
                  <p className="text-sm text-blue-700">
                    Tratamentos de <strong>ozonioterapia</strong>, <strong>estética facial</strong>, <strong>estética corporal</strong>, <strong>alopecia</strong> e <strong>pós-operatório</strong> em Alphaville e Barueri.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4 border-l-4 border-purple-500">
                  <h3 className="font-semibold text-purple-800 mb-2">🎓 Ensino para Profissionais</h3>
                  <p className="text-sm text-purple-700">
                    Cursos especializados para <strong>profissionais graduados em estética</strong> que querem se especializar e se destacar no mercado.
                  </p>
                </div>
              </div>

              <p className="leading-relaxed">
                Minha paixão pela estética vai além da técnica. Acredito que cada pessoa 
                é única e merece um cuidado personalizado. Por isso, desenvolvo protocolos 
                específicos para cada necessidade, sempre priorizando a segurança e 
                os resultados naturais.
              </p>
              <p className="leading-relaxed">
                Como educadora, compartilho meus conhecimentos com profissionais que desejam 
                se especializar. Estou constantemente me atualizando com as mais modernas 
                técnicas e equipamentos do mercado, para oferecer sempre o melhor tanto 
                para meus clientes quanto para os profissionais que ensino.
              </p>
            </div>
            
            {/* Certificações */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-high-contrast mb-4">Formação e Especializações</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center text-sm text-medium-contrast">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Graduação em Estética e Cosmetologia
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Pós-graduação em Estética Clínica
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  Especialização em Ozonioterapia
                </div>
                <div className="flex items-center text-sm text-medium-contrast">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  8 anos como docente
                </div>
              </div>
            </div>
          </div>
          
          {/* Imagem */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_hero_1.jpeg"
                  alt="Cida Alves - Esteticista e Educadora em Barueri e Alphaville"
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Badge de experiência */}
              <div className="absolute -bottom-6 -left-6 bg-primary text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">11+</div>
                <div className="text-sm">Anos de experiência</div>
              </div>

              {/* Badge de ensino */}
              <div className="absolute -top-6 -right-6 bg-purple-600 text-white px-6 py-4 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm">Anos ensinando</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 