import Image from 'next/image';

const coursesData = [
  {
    id: 1,
    title: 'Estética Corporal Avançada',
    description: 'Curso completo de técnicas para estética corporal e tratamentos redutores.',
    image: '/images/cida_esteticista_ cursodeesteticacorporal.jpeg',
  },
  {
    id: 2,
    title: 'Massagem com Vela Relaxante',
    description: 'Aprenda técnicas de massagem com vela para relaxamento e bem-estar.',
    image: '/images/cida_esteticista curso_tecnica_com_vela_massagem_relaxante(1).jpeg',
  },
  {
    id: 3,
    title: 'Taping Linfático',
    description: 'Domine as técnicas de taping linfático para drenagem e recuperação.',
    image: '/images/cida_esteticista_ curso_tecnica_taping_linfatico.jpeg',
  },
  {
    id: 4,
    title: 'Estética Facial Avançada',
    description: 'Aprenda técnicas avançadas de limpeza, hidratação e tratamentos para pele.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (1).jpeg',
  }
];

const Courses = () => {
  return (
    <section id="cursos" className="section bg-gradient-to-b from-blue-50 to-white">
      <div className="container mobile-padding">
        <div className="text-center mb-12">
          <h2 className="mobile-heading font-normal mb-4 text-high-contrast font-serif">Cursos para Profissionais</h2>
          <p className="mobile-text text-medium-contrast max-w-4xl mx-auto mb-6">
            <strong>Capacitação profissional exclusiva para graduados em estética</strong> que desejam se especializar e se tornarem referência no mercado. Cida Alves ensina profissionais a atenderem outros profissionais com excelência.
          </p>
          
          {/* Destaque do público-alvo */}
          <div className="inline-flex items-center bg-gradient-to-r from-yellow-50 to-orange-50 rounded-full px-6 py-3 mb-8 border border-yellow-200">
            <span className="w-3 h-3 bg-orange-500 rounded-full mr-3"></span>
            <span className="text-sm font-semibold text-orange-700">Exclusivo para profissionais graduados em estética</span>
          </div>
        </div>

        {/* Seção explicativa */}
        <div className="bg-white rounded-2xl p-8 mb-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Dois Tipos de Serviços</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-blue-600 text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">TRATAMENTOS para Clientes</h4>
                    <p className="text-gray-600 text-sm">Cida Alves atende clientes com tratamentos de ozonioterapia, estética facial, corporal, alopecia e pós-operatório em Alphaville e Barueri.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-4 mt-1">
                    <span className="text-purple-600 text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">CURSOS para Profissionais</h4>
                    <p className="text-gray-600 text-sm">Cida Alves ensina <strong>profissionais graduados em estética</strong> a se especializarem e se tornarem referência no atendimento a outros clientes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-64 rounded-xl overflow-hidden">
              <Image
                src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_curso.jpeg"
                alt="Cida Alves ensinando profissionais de estética"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coursesData.map(course => (
            <div key={course.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="relative h-64 md:h-auto md:w-2/5">
                <Image
                  src={course.image}
                  alt={`${course.title} - Curso para profissionais graduados`}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  PROFISSIONAIS
                </div>
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-primary mb-2">{course.title}</h3>
                  <p className="text-medium-contrast mb-4">{course.description}</p>
                  
                  {/* Requisitos */}
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
                    <h4 className="text-sm font-semibold text-yellow-800 mb-1">Requisito:</h4>
                    <p className="text-xs text-yellow-700">Graduação em Estética ou área correlata</p>
                  </div>
                </div>
                <div className="mt-4">
                  <a 
                    href={`https://wa.me/5511951274206?text=Oi!%20sou%20profissional%20graduado%20em%20estética%20e%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20${encodeURIComponent(course.title)}!`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-medium hover:underline inline-flex items-center gap-2"
                  >
                    <span>📚</span>
                    Informações para Profissionais
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="mobile-text text-medium-contrast mb-4 md:mb-6">Interessada em se profissionalizar? Entre em contato para saber sobre as próximas turmas!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/cursos" 
              className="btn btn-secondary inline-block"
            >
              Veja mais sobre os cursos
            </a>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20um%20tratamento%20com%20voc%C3%AA!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-green-500 text-white hover:bg-green-600 inline-flex items-center gap-2"
            >
              📱 Inscrições Abertas
            </a>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20um%20tratamento%20com%20voc%C3%AA!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary inline-block"
            >
              Saiba mais sobre os cursos
            </a>
          </div>
        </div>

        {/* Curso de Pós-Operatório - Conteúdo Completo */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Header do Curso */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-sm uppercase tracking-wide mb-2 opacity-90">
                  CURSO • PÓS OPERATÓRIO
                </div>
                              <h3 className="text-3xl md:text-4xl font-normal mb-4 font-serif text-white">
                Curso Presencial de Pós‑Operatório
              </h3>
                <p className="text-lg opacity-90 mb-6">
                  Especialize-se no atendimento a cirurgias plásticas com segurança e excelência!
                </p>
                
                <div className="grid grid-cols-2 gap-4 max-w-md">
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    <span className="text-sm font-medium">70 horas</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    <span className="text-sm font-medium">100% presencial</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Certificado</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-3 h-3 bg-white rounded-full mr-2"></span>
                    <span className="text-sm font-medium">Material incluso</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-4 shadow-2xl">
                  <Image
                    src="/images/cida_esteticista_ Curso de pós operatório avançado.jpeg"
                    alt="Curso de Pós-Operatório Avançado"
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sobre o Curso */}
          <div className="p-8">
            <h4 className="text-2xl font-bold text-high-contrast mb-4">Sobre o Curso</h4>
            <div className="space-y-4 text-medium-contrast">
              <p>
                O <strong>Curso Presencial de Pós-Operatório – 70 horas</strong> foi desenvolvido para preparar profissionais da área da estética e da saúde que desejam atuar com segurança, ética e eficiência no acompanhamento de pacientes que passaram por cirurgias plásticas.
              </p>
              <p>
                Com uma abordagem completa, o curso oferece conteúdos teóricos atualizados e práticas supervisionadas que capacitam o aluno a entender o processo de recuperação pós-cirúrgica, identificar complicações, aplicar técnicas terapêuticas e oferecer um atendimento humanizado e de excelência.
              </p>
              <p>
                Ao longo das aulas, você será preparada para atuar em clínicas, consultórios ou atendimentos domiciliares, acompanhando cirurgias como lipoaspirações, abdominoplastias, lifting, blefaroplastia, rinoplastia e outras, com foco na reabilitação, conforto e segurança do paciente.
              </p>
              <p>
                <strong>Ideal para quem busca se destacar no mercado com uma formação sólida e especializada.</strong>
              </p>
            </div>
          </div>

          {/* Diferenciais */}
          <div className="p-8 bg-gray-50">
            <h4 className="text-2xl font-bold text-high-contrast mb-8 text-center">Diferenciais do Curso</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📚</span>
                </div>
                <h5 className="text-lg font-semibold text-high-contrast mb-2">
                  Aulas 100% presenciais
                </h5>
                <p className="text-medium-contrast text-sm">
                  Aprenda de verdade! Tenha contato direto com os conteúdos e desenvolva suas habilidades com práticas guiadas.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">👩‍⚕️</span>
                </div>
                <h5 className="text-lg font-semibold text-high-contrast mb-2">
                  Professora experiente
                </h5>
                <p className="text-medium-contrast text-sm">
                  Aprenda com Cida Alves, profissional com mais de 11 anos de experiência e 8 anos como docente.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">📋</span>
                </div>
                <h5 className="text-lg font-semibold text-high-contrast mb-2">
                  Material incluso
                </h5>
                <p className="text-medium-contrast text-sm">
                  Receba apostilas, fichas de anamnese, protocolos e outros materiais de apoio.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🏆</span>
                </div>
                <h5 className="text-lg font-semibold text-high-contrast mb-2">
                  Certificado
                </h5>
                <p className="text-medium-contrast text-sm">
                  Certificado que comprova sua capacitação e valoriza seu currículo profissional.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h5 className="text-lg font-semibold text-high-contrast mb-2">
                  Networking
                </h5>
                <p className="text-medium-contrast text-sm">
                  Conecte-se com profissionais da área e forme parcerias no mercado.
                </p>
              </div>
            </div>
          </div>

          {/* O que você vai aprender */}
          <div className="p-8">
            <h4 className="text-2xl font-bold text-high-contrast mb-6 text-center">O Que Você Vai Aprender</h4>
            <p className="text-medium-contrast text-center mb-8">
              Neste curso, você será capacitada para atuar com segurança e excelência no atendimento de pacientes em período pós-operatório de diversas cirurgias plásticas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h5 className="text-lg font-semibold text-blue-800 mb-4">LIPOS</h5>
                <ul className="space-y-2 text-medium-contrast text-sm">
                  <li>• Hidrolipo</li>
                  <li>• Vibrolipo</li>
                  <li>• Lipoescultura</li>
                  <li>• Lipo HD</li>
                  <li>• Lipo de papada</li>
                  <li>• Lipo de lipedema</li>
                  <li>• Ginecomastia masculina</li>
                </ul>
              </div>

              <div className="bg-green-50 p-6 rounded-xl">
                <h5 className="text-lg font-semibold text-green-800 mb-4">LIFTINGS</h5>
                <ul className="space-y-2 text-medium-contrast text-sm">
                  <li>• Lifting facial</li>
                  <li>• Lifting de braço</li>
                  <li>• Lifting de coxa</li>
                </ul>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl">
                <h5 className="text-lg font-semibold text-purple-800 mb-4">ABDOMINOPLASTIAS</h5>
                <ul className="space-y-2 text-medium-contrast text-sm">
                  <li>• Tradicional</li>
                  <li>• Reversa</li>
                  <li>• Em âncora</li>
                  <li>• 360 graus</li>
                  <li>• Miniabdominoplastia</li>
                </ul>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h5 className="text-lg font-semibold text-orange-800 mb-4">OUTRAS CIRURGIAS</h5>
                <ul className="space-y-2 text-medium-contrast text-sm">
                  <li>• Blefaroplastia</li>
                  <li>• Rinoplastia</li>
                  <li>• Rinomodelação</li>
                  <li>• Otoplastia</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mercado em Crescimento */}
          <div className="p-8 bg-blue-600 text-white">
            <div className="text-center">
              <h4 className="text-2xl font-bold mb-4 text-white">Um Mercado em Crescimento que Precisa de Você</h4>
              <p className="text-lg opacity-90 mb-4">
                O objetivo deste curso é formar profissionais altamente capacitados para atuar no acompanhamento de pacientes no pós-operatório de cirurgias plásticas, com segurança, ética e excelência técnica.
              </p>
              <p className="opacity-90 mb-6">
                A área de pós-operatório é uma especialidade em constante crescimento e carece de profissionais preparados para atender à demanda crescente por cuidados especializados.
              </p>
              <a 
                href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Pós%20Operatório!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
              >
                Matricule-se Já
              </a>
            </div>
          </div>

          {/* Professora */}
          <div className="p-8 bg-gray-50">
            <h4 className="text-2xl font-bold text-high-contrast mb-6 text-center">Professora</h4>
            <div className="flex flex-col md:flex-row items-center gap-6 max-w-4xl mx-auto">
              <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (1).jpeg"
                  alt="Cida Alves"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1 text-center md:text-left">
                <h5 className="text-xl font-bold text-high-contrast mb-2">Cida Alves</h5>
                <p className="text-medium-contrast text-sm">
                  <strong>Cida Alves</strong> é uma profissional com mais de 11 anos de experiência na área de Estética e Cosmetologia. Possui graduação em Estética e Cosmetologia, pós-graduação em Estética Clínica e Estética Avançada, além de especializações em Ozônioterapia e PRP.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Final */}
          <div className="p-8 text-center">
            <h4 className="text-xl font-semibold text-high-contrast mb-4">Inscrições Abertas</h4>
            <p className="text-medium-contrast mb-6">Entre em contato para saber mais sobre o curso e garantir sua vaga!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/pos-operatorio" 
                className="btn btn-secondary inline-block"
              >
                Ver página completa do curso
              </a>
              <a 
                href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Pós%20Operatório!" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn bg-green-500 text-white hover:bg-green-600 inline-flex items-center gap-2"
              >
                📱 WhatsApp - Inscrições
              </a>
            </div>
          </div>
        </div>

        {/* Galeria de Cursos Adicionais */}
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-high-contrast mb-6 text-center">Outros Cursos Disponíveis</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/cida_esteticista curso_tecnica_com_vela_massagem_relaxante(2).jpeg"
                  alt="Massagem com Vela - Técnica Avançada"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-high-contrast mb-2">Massagem com Vela - Técnica Avançada</h4>
                <p className="text-medium-contrast text-sm">Aperfeiçoe suas técnicas de massagem relaxante com vela.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/cida_esteticista_cursodemassagem_relaxante_pedras quentes(3).jpeg"
                  alt="Massagem com Pedras Quentes"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-high-contrast mb-2">Massagem com Pedras Quentes</h4>
                <p className="text-medium-contrast text-sm">Aprenda técnicas de massagem relaxante com pedras quentes.</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (2).jpeg"
                  alt="Curso de Especialização"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold text-high-contrast mb-2">Especialização em Estética</h4>
                <p className="text-medium-contrast text-sm">Curso completo de especialização para profissionais.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-medium-contrast mb-4">Interessada em algum curso específico?</p>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos%20disponíveis!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-blue-600 text-white hover:bg-blue-700 inline-flex items-center gap-2"
            >
              📱 Consultar Cursos Disponíveis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses; 