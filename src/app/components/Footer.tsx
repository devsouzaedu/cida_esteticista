import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/images/cida_logo_branco.png"
                alt="Cida Alves - Estética e Cursos em Alphaville Barueri"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              <strong>Cida Alves</strong> - Mais de 11 anos oferecendo tratamentos especializados de <strong>ozonioterapia</strong>, <strong>estética facial</strong>, <strong>estética corporal</strong>, <strong>alopecia</strong> e <strong>pós-operatório em Alphaville, Barueri e região</strong>. Também oferecemos cursos para profissionais graduados em estética.
            </p>
            
            {/* Serviços em destaque */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-semibold text-blue-300 mb-2">🌟 Para Clientes</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Ozonioterapia Alphaville</li>
                  <li>• Estética Facial Barueri</li>
                  <li>• Tratamento Alopecia</li>
                  <li>• Pós-operatório</li>
                </ul>
              </div>
              <div className="bg-gray-700 rounded-lg p-3">
                <h4 className="font-semibold text-purple-300 mb-2">🎓 Para Profissionais</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  <li>• Cursos de Especialização</li>
                  <li>• Pós-operatório Avançado</li>
                  <li>• Certificação Profissional</li>
                  <li>• Para Graduados</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[--secondary]">Links Rápidos</h4>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="#sobre" className="text-gray-300 hover:text-white transition-colors">Sobre Cida Alves</Link></li>
              <li><Link href="#tratamentos" className="text-gray-300 hover:text-white transition-colors">Tratamentos</Link></li>
              <li><Link href="#cursos" className="text-gray-300 hover:text-white transition-colors">Cursos Profissionais</Link></li>
              <li><Link href="/pos-operatorio" className="text-gray-300 hover:text-white transition-colors">Curso Pós-operatório</Link></li>
              <li><Link href="#contato" className="text-gray-300 hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>
          
          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-[--secondary]">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-start">
                <span className="text-blue-400 mr-2">📍</span>
                <div>
                  <p className="text-gray-300 font-medium">Alphaville - Barueri</p>
                  <p className="text-sm text-gray-400">São Paulo, Brasil</p>
                </div>
              </div>
              <div className="flex items-center">
                <span className="text-green-400 mr-2">📱</span>
                <a href="tel:11951274206" className="text-gray-300 hover:text-white transition-colors">
                  (11) 95127-4206
                </a>
              </div>
              <div className="flex items-center">
                <span className="text-blue-400 mr-2">🕒</span>
                <div>
                  <p className="text-sm text-gray-300">Seg-Sex: 8h às 18h</p>
                  <p className="text-sm text-gray-300">Sáb: 8h às 14h</p>
                </div>
              </div>
            </div>
            
            {/* Redes Sociais */}
            <div className="mt-6">
              <h5 className="font-semibold mb-3">Redes Sociais</h5>
              <div className="flex space-x-4">
                <a 
                  href="https://www.instagram.com/cidaalvesestetica_/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-pink-600 text-white p-2 rounded-full hover:bg-pink-700 transition-colors"
                  title="Instagram Cida Alves Estética"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.987 11.988 11.987s11.987-5.369 11.987-11.987C24.004 5.367 18.635.001 12.017.001z"/>
                  </svg>
                </a>
                <a 
                  href="https://wa.me/5511951274206" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="bg-green-600 text-white p-2 rounded-full hover:bg-green-700 transition-colors"
                  title="WhatsApp Cida Alves"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Linha de separação e copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Cida Alves Estética. Todos os direitos reservados.
            </p>
            <div className="text-gray-400 text-sm">
              <p>Ozonioterapia • Estética Facial • Estética Corporal • Alopecia • Pós-operatório</p>
              <p className="text-center md:text-right mt-1">Alphaville • Barueri • Região</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 