'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Previne scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-[9999] transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className={`text-xl sm:text-2xl font-bold transition-colors ${scrolled ? 'text-primary' : 'text-white drop-shadow-lg'}`}>
            Cida Esteticista
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden lg:flex space-x-8">
          <Link href="/" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
            Home
          </Link>
          <Link href="#sobre" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
            Sobre
          </Link>
          <Link href="#tratamentos" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
            Tratamentos
          </Link>
          <Link href="#cursos" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
            Cursos
          </Link>
          <Link href="#contato" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
            Contato
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-gray-800 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998]" onClick={closeMenu} />
      )}
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[9999] ${
        isMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header do Menu */}
          <div className="flex justify-between items-center p-6 border-b border-gray-200">
            <span className="text-xl font-bold text-primary">Menu</span>
            <button 
              onClick={closeMenu}
              className="p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
              aria-label="Fechar menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Links do Menu */}
          <nav className="flex flex-col flex-1 p-6 space-y-6">
            <Link 
              href="/" 
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
              onClick={closeMenu}
            >
              🏠 Home
            </Link>
            <Link 
              href="#sobre" 
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
              onClick={closeMenu}
            >
              👩‍⚕️ Sobre
            </Link>
            <Link 
              href="#tratamentos" 
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
              onClick={closeMenu}
            >
              💆‍♀️ Tratamentos
            </Link>
            <Link 
              href="#cursos" 
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
              onClick={closeMenu}
            >
              📚 Cursos
            </Link>
            <Link 
              href="#contato" 
              className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
              onClick={closeMenu}
            >
              📞 Contato
            </Link>
          </nav>
          
          {/* Footer do Menu */}
          <div className="p-6 border-t border-gray-200">
            <a 
              href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20um%20tratamento%20com%20voc%C3%AA!" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full btn btn-primary text-center block"
              onClick={closeMenu}
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 