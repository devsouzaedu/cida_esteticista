import Image from 'next/image';

const coursesData = [
  {
    id: 1,
    title: 'Estética Facial Avançada',
    description: 'Aprenda técnicas avançadas de limpeza, hidratação e tratamentos para pele.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (1).jpeg',
  },
  {
    id: 2,
    title: 'Massagem Modeladora',
    description: 'Domine as técnicas de massagem modeladora e drenagem linfática.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (2).jpeg',
  },
  {
    id: 3,
    title: 'Estética Corporal',
    description: 'Curso completo de técnicas para estética corporal e tratamentos redutores.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (3).jpeg',
  },
  {
    id: 4,
    title: 'Skincare Avançado',
    description: 'Aprenda a desenvolver rotinas personalizadas de cuidados para pele.',
    image: '/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_cursos (4).jpeg',
  }
];

const Courses = () => {
  return (
    <section id="cursos" className="section bg-gray-100">
      <div className="container mobile-padding">
        <h2 className="mobile-heading font-bold text-center mb-4 text-contrast">Cursos</h2>
        <p className="mobile-text text-black text-center max-w-3xl mx-auto mb-8 md:mb-12">
          Capacitação profissional com certificado para atuar na área de estética. Aprenda com quem tem experiência de mercado.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {coursesData.map(course => (
            <div key={course.id} className="flex flex-col md:flex-row bg-white rounded-xl shadow-md overflow-hidden">
              <div className="relative h-64 md:h-auto md:w-2/5">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 md:w-3/5 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[--primary] mb-2">{course.title}</h3>
                  <p className="text-black mb-4">{course.description}</p>
                </div>
                <div className="mt-4">
                  <button className="text-[--primary] font-medium hover:underline">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 md:mt-12 text-center">
          <p className="mobile-text text-black mb-4 md:mb-6">Interessada em se profissionalizar? Entre em contato para saber sobre as próximas turmas!</p>
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
    </section>
  );
};

export default Courses; 