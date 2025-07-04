'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '../components/Breadcrumbs';

const PosOperatorioPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(1);

  const toggleFaq = (id: number) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "Quais são os requisitos para se inscrever no curso?",
      answer: "Não há requisitos específicos, apenas interesse em aprender e se desenvolver! Nosso curso é aberto a profissionais da área da estética e saúde que desejam se especializar."
    },
    {
      id: 2,
      question: "Preciso ter algum material específico para as aulas?",
      answer: "Não é necessário comprar materiais extras. Todos os materiais essenciais serão fornecidos durante o curso, incluindo apostilas e protocolos de atendimento."
    },
    {
      id: 3,
      question: "Como posso me inscrever?",
      answer: "Você pode se inscrever entrando em contato conosco pelo WhatsApp ou telefone. Nossa equipe estará pronta para te ajudar com todas as informações."
    },
    {
      id: 4,
      question: "O curso é 100% presencial?",
      answer: "Sim, todas as aulas são 100% presenciais com prática supervisionada, garantindo o melhor aprendizado e desenvolvimento das habilidades práticas."
    },
    {
      id: 5,
      question: "Como posso entrar em contato para mais informações?",
      answer: "Você pode entrar em contato conosco pelo WhatsApp (11) 95127-4206 ou através dos nossos canais de atendimento. Nossa equipe estará pronta para esclarecer todas as suas dúvidas."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumbs */}
      <Breadcrumbs items={[
        { label: 'Cursos', href: '/cursos' },
        { label: 'Pós-Operatório' }
      ]} />
      
      {/* Header Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm uppercase tracking-wide mb-4 opacity-90">
                CURSO • PÓS OPERATÓRIO
              </div>
              <h1 className="text-4xl md:text-5xl font-normal mb-6 leading-tight font-serif text-white">
                Curso Presencial de Pós‑Operatório
              </h1>
              <p className="text-xl mb-8 opacity-90">
                Especialize-se no atendimento a cirurgias plásticas com segurança e excelência!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Pós%20Operatório!" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
                >
                  Inscreva‑se Agora
                </a>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Saiba Mais
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <Image
                  src="/images/cida_esteticista_ Curso de pós operatório avançado.jpeg"
                  alt="Curso de Pós-Operatório Avançado"
                  width={400}
                  height={300}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-3">
                  <div className="flex items-center text-gray-700">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    <span className="font-medium">70 horas de conteúdo</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    <span className="font-medium">100% presencial</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    <span className="font-medium">Certificado incluso</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <span className="w-4 h-4 bg-blue-600 rounded-full mr-3"></span>
                    <span className="font-medium">Material de apoio</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 py-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Visão Geral
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
              Conteúdo
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
              Objetivo
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-300">
              Localização
            </button>
          </div>
        </div>
      </section>

      {/* About Course Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8 rounded-r-lg">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                Inscrições Abertas
              </h3>
              <p className="text-blue-700">
                Entre em contato para saber mais sobre o curso e garantir sua vaga. Oferecemos <strong>bate-papos gratuitos</strong> para tirar todas as dúvidas!
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 mb-6">Sobre o Curso</h2>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
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
              
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-medium text-gray-800">
                  O curso acontece em encontros semanais, sempre aos <strong>sábados</strong>, com turmas nos seguintes horários:
                </p>
                <ul className="mt-3 space-y-1">
                  <li><strong>1ª turma:</strong> Das 9h às 12h</li>
                  <li><strong>2ª turma:</strong> 13h às 16h</li>
                </ul>
                <p className="mt-3 text-sm text-gray-600">
                  <strong>Inscrições abertas!</strong> Entre em contato para saber sobre as próximas turmas disponíveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Differentials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Diferenciais do Curso</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Aulas 100% presenciais com prática supervisionada
              </h3>
              <p className="text-gray-600">
                Aprenda de verdade! Tenha contato direto com os conteúdos, participe ativamente das aulas e desenvolva suas habilidades com práticas guiadas e feedback individualizado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">👩‍⚕️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Professora com ampla experiência clínica
              </h3>
              <p className="text-gray-600">
                Aprenda com Cida Alves, profissional com mais de 11 anos de experiência e 8 anos como docente, especialista em pós-operatório e técnicas avançadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Material de apoio incluso
              </h3>
              <p className="text-gray-600">
                Receba apostilas, modelos de ficha de anamnese, protocolos de atendimento e outros materiais que vão te acompanhar durante e depois do curso.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Certificado
              </h3>
              <p className="text-gray-600">
                Ao final do curso, você receberá um certificado que comprova sua capacitação e valoriza seu currículo, abrindo portas para novas oportunidades.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Networking com profissionais da área
              </h3>
              <p className="text-gray-600">
                Conecte-se com colegas e profissionais atuantes, troque experiências, forme parcerias e fortaleça sua presença no mercado.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">O Que Você Vai Aprender</h2>
          
          <div className="max-w-4xl mx-auto mb-8">
            <p className="text-lg text-gray-700 text-center">
              Neste curso, você será capacitada para atuar com segurança e excelência no atendimento de pacientes em período pós-operatório de diversas cirurgias plásticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">LIPOS</h3>
              <ul className="space-y-2 text-gray-700">
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
              <h3 className="text-xl font-semibold text-green-800 mb-4">LIFTINGS</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Lifting facial</li>
                <li>• Lifting de braço</li>
                <li>• Lifting de coxa</li>
              </ul>
            </div>

            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-purple-800 mb-4">ABDOMINOPLASTIAS</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tradicional</li>
                <li>• Reversa</li>
                <li>• Em âncora</li>
                <li>• 360 graus</li>
                <li>• Miniabdominoplastia</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-orange-800 mb-4">OUTRAS CIRURGIAS</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Blefaroplastia</li>
                <li>• Rinoplastia</li>
                <li>• Rinomodelação</li>
                <li>• Otoplastia</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">Um Mercado em Crescimento que Precisa de Você</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl mb-8 opacity-90">
              O objetivo deste curso é formar profissionais altamente capacitados para atuar no acompanhamento de pacientes no pós-operatório de cirurgias plásticas, com segurança, ética e excelência técnica.
            </p>
            <p className="text-lg mb-8 opacity-90">
              A área de pós-operatório é uma especialidade em constante crescimento e carece de profissionais preparados para atender à demanda crescente por cuidados especializados.
            </p>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Pós%20Operatório!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Matricule-se Já
            </a>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Professora</h2>
          
          <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="relative w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/images/cida_esteticista_BARUERI_ALPHAVILLEfoto_.jpeg (1).jpeg"
                  alt="Cida Alves"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <h3 className="text-2xl font-bold text-gray-800">Cida Alves</h3>
                  <div className="flex gap-2">
                    <a href="#" className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">f</span>
                    </a>
                    <a href="https://www.instagram.com/cidaalvesestetica_/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center text-white">
                      <span className="text-sm">📷</span>
                    </a>
                  </div>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p>
                    <strong>Cida Alves</strong> é uma profissional com mais de 11 anos de experiência na área de Estética e Cosmetologia. Possui graduação em Estética e Cosmetologia, pós-graduação em Estética Clínica e Estética Avançada, além de especializações em Ozônioterapia e PRP. Atualmente, está graduando-se em Enfermagem, ampliando ainda mais seu conhecimento para atuar com excelência na área da saúde.
                  </p>
                  <p>
                    Com 8 anos de experiência como docente, Cida tem como foco a formação de profissionais qualificados para o pós-operatório e injetáveis, transmitindo seu conhecimento prático e teórico de forma clara e acessível, com ênfase no cuidado ao paciente e nas técnicas mais atualizadas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-blue-600 uppercase tracking-wide font-medium mb-2">FAQS</p>
            <h2 className="text-3xl font-bold text-gray-800">Tem perguntas? Nós temos respostas</h2>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-4">
            {faqData.map((faq) => (
              <div key={faq.id} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-100 transition-colors"
                >
                  <span className="font-medium text-gray-800">{faq.question}</span>
                  <span className={`text-blue-600 transform transition-transform ${openFaq === faq.id ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>
                {openFaq === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 text-white">
            Inscrições Abertas para o Curso de Pós-Operatório
          </h2>
          <p className="text-xl mb-8">Não perca a oportunidade de se especializar!</p>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-lg opacity-90 mb-4">
              Oferecemos bate-papos gratuitos para esclarecer todas as suas dúvidas sobre o curso.
            </p>
            <p className="opacity-90">
              Entre em contato e garante sua vaga na próxima turma disponível.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Suporte</h3>
            <p className="opacity-90">Para detalhes sobre o curso</p>
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20saber%20mais%20sobre%20o%20curso%20de%20Pós%20Operatório!" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center gap-2"
            >
              📱 WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/cida_logo_branco.png"
                alt="Cida Alves"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <p className="text-gray-400">
            Copyright © 2025 Cida Alves. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PosOperatorioPage; 