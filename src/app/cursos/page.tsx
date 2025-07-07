import Image from 'next/image';
import Link from 'next/link';

const coursesDetailedData = [
  {
    id: 1,
    title: 'Estética Facial Avançada',
    description: 'Aprenda técnicas avançadas de limpeza, hidratação e tratamentos para pele.',
    fullDescription: 'Curso completo de estética facial com foco em técnicas avançadas de limpeza de pele, hidratação profunda, tratamentos para acne, rejuvenescimento e cuidados específicos para cada tipo de pele. Inclui teoria e prática com equipamentos profissionais.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (1).jpeg',
    duration: '80 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Anatomia e fisiologia da pele',
      'Técnicas de limpeza profunda',
      'Tratamentos para acne e rosácea',
      'Protocolos de rejuvenescimento',
      'Uso de equipamentos específicos'
    ]
  },
  {
    id: 2,
    title: 'Massagem Modeladora',
    description: 'Domine as técnicas de massagem modeladora e drenagem linfática.',
    fullDescription: 'Curso especializado em massagem modeladora e drenagem linfática manual, com técnicas específicas para redução de medidas, combate à celulite e melhora da circulação. Aprenda protocolos completos para diferentes áreas do corpo.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (2).jpeg',
    duration: '60 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Anatomia do sistema linfático',
      'Técnicas de drenagem manual',
      'Massagem modeladora corporal',
      'Protocolos para celulite',
      'Cuidados pós-procedimento'
    ]
  },
  {
    id: 3,
    title: 'Estética Corporal',
    description: 'Curso completo de técnicas para estética corporal e tratamentos redutores.',
    fullDescription: 'Formação completa em estética corporal com foco em tratamentos redutores, combate à flacidez, celulite e gordura localizada. Inclui uso de equipamentos modernos e técnicas manuais eficazes.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (3).jpeg',
    duration: '100 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Avaliação corporal completa',
      'Tratamentos para gordura localizada',
      'Combate à flacidez',
      'Uso de equipamentos corporais',
      'Protocolos personalizados'
    ]
  },
  {
    id: 4,
    title: 'Skincare Avançado',
    description: 'Aprenda a desenvolver rotinas personalizadas de cuidados para pele.',
    fullDescription: 'Curso especializado em skincare com foco na criação de rotinas personalizadas, análise de pele, indicação de produtos e acompanhamento de resultados. Ideal para quem quer se especializar em cuidados faciais.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (4).jpeg',
    duration: '40 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Análise detalhada da pele',
      'Química dos cosméticos',
      'Rotinas personalizadas',
      'Acompanhamento de resultados',
      'Orientação ao cliente'
    ]
  },
  {
    id: 5,
    title: 'Pós Operatório Humanizado',
    description: 'Especialização em cuidados pós-cirúrgicos com abordagem humanizada.',
    fullDescription: 'Curso especializado em cuidados pós-operatórios humanizados, com foco na abordagem humanizada, técnicas específicas para cada tipo de cirurgia, protocolos de recuperação e suporte emocional ao paciente.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (5).jpeg',
    duration: '60 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Cuidados pós-cirúrgicos específicos',
      'Drenagem linfática pós-operatória',
      'Abordagem humanizada',
      'Protocolos de recuperação',
      'Suporte emocional ao paciente'
    ]
  },
  {
    id: 6,
    title: 'Tratamento Capilar Avançado',
    description: 'Especialização em tratamentos capilares e tricologia.',
    fullDescription: 'Curso completo de tricologia e tratamentos capilares, incluindo diagnóstico de problemas capilares, tratamentos para alopecia, queda de cabelo e fortalecimento dos fios.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (6).jpeg',
    duration: '50 horas',
    certification: 'Certificado reconhecido',
    modules: [
      'Tricologia aplicada',
      'Diagnóstico capilar',
      'Tratamentos para alopecia',
      'Fortalecimento capilar',
      'Protocolos específicos'
    ]
  }
];

const CoursesPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-primary text-white py-16">
        <div className="container mobile-padding text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Cursos de Estética</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Capacitação profissional com Cida Alves. Aprenda com quem tem mais de 11 anos de experiência no mercado.
          </p>
        </div>
      </div>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="container mobile-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coursesDetailedData.map(course => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-3">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.fullDescription}</p>
                  
                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <span className="font-semibold text-gray-700">Duração:</span>
                      <span className="ml-2 text-gray-600">{course.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-semibold text-gray-700">Certificação:</span>
                      <span className="ml-2 text-gray-600">{course.certification}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-700 mb-2">Módulos do curso:</h4>
                    <ul className="space-y-1">
                      {course.modules.map((module, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-gray-600 text-sm">{module}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full btn btn-primary">
                    Saiba mais sobre este curso
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="container mobile-padding text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Profissional Graduado? Especialize-se!</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Se você é graduado em estética e quer se tornar referência no mercado, nossos cursos são para você. Entre em contato para saber sobre as próximas turmas e condições especiais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20sou%20profissional%20graduado%20em%20estética%20e%20gostaria%20de%20saber%20mais%20sobre%20os%20cursos!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-white text-purple-600 hover:bg-gray-100 inline-flex items-center gap-2"
            >
              📚 Informações para Profissionais
            </a>
            <Link href="/" className="btn border-2 border-white text-white hover:bg-white hover:text-purple-600">
              Ver Tratamentos para Clientes
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mobile-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Por que escolher nossos cursos?</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-primary text-2xl mr-3">✓</span>
                  <div>
                                    <h3 className="font-semibold text-gray-800">Experiência Comprovada</h3>
                <p className="text-gray-600">Mais de 11 anos de experiência no mercado de estética</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Certificação Reconhecida</h3>
                    <p className="text-gray-600">Certificados válidos em todo território nacional</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Aulas Práticas</h3>
                    <p className="text-gray-600">Foco na prática com equipamentos profissionais</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-primary text-2xl mr-3">✓</span>
                  <div>
                    <h3 className="font-semibold text-gray-800">Suporte Contínuo</h3>
                    <p className="text-gray-600">Acompanhamento mesmo após a conclusão do curso</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <Image
                src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_curso.jpeg"
                alt="Cida Alves ensinando"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage; 