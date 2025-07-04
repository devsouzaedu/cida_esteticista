'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
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
    <>
      {/* Header Principal */}
      <header 
        className={`fixed top-0 left-0 w-full transition-all duration-300 ${
          scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-4'
        }`}
        style={{ zIndex: 50000 }}
      >
        <div className="container flex justify-between items-center">
                  <div className="flex items-center">
          <Link href="/" className="flex items-center">
            {scrolled ? (
              <Image
                src="/images/cida_logo_png.png"
                alt="Cida Alves"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            ) : (
              <Image
                src="/images/cida_logo_branco.png"
                alt="Cida Alves"
                width={120}
                height={40}
                className="h-8 w-auto drop-shadow-lg"
              />
            )}
          </Link>
        </div>
          
          {/* Desktop Menu */}
          <nav className="hidden lg:flex space-x-8">
            <Link href="/" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-white hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Home
            </Link>
            <Link href="#sobre" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-white hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Sobre
            </Link>
            <Link href="#tratamentos" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-white hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Tratamentos
            </Link>
            <Link href="#cursos" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-white hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Cursos
            </Link>
            <Link href="#contato" className={`font-medium transition-colors hover:scale-105 ${scrolled ? 'text-white hover:text-primary' : 'text-white hover:text-gray-200 drop-shadow-md'}`}>
              Contato
            </Link>
          </nav>
          
          {/* Mobile Menu Button */}
                    <button
            onClick={toggleMenu}
            className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-white hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
            style={{ zIndex: 50002 }}
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
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm"
          style={{ zIndex: 50000 }}
          onClick={closeMenu}
        />
      )}
      
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={closeMenu}>
        <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/images/cida_logo_png.png"
                alt="Cida Alves"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
              <button 
                onClick={closeMenu}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-2">
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
                ✨ Tratamentos
              </Link>
              <Link 
                href="#cursos" 
                className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
                onClick={closeMenu}
              >
                🎓 Cursos
              </Link>
              <Link 
                href="#contato" 
                className="text-lg font-medium text-gray-800 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-gray-50 border-l-4 border-transparent hover:border-primary" 
                onClick={closeMenu}
              >
                📞 Contato
              </Link>
            </nav>
            
            <div className="mt-8 pt-6 border-t border-gray-200">
              <a 
                href="https://wa.me/5511951274206?text=Oi!%20gostaria%20de%20agendar%20uma%20avaliação%20gratuita%20com%20a%20Cida!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors inline-flex items-center justify-center gap-2"
                onClick={closeMenu}
              >
                <span>📱</span>
                Agendar Avaliação
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header; 