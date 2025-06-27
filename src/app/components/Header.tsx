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

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className={`text-2xl font-bold ${scrolled ? 'text-primary' : 'text-white'}`}>
            Cida Esteticista
          </Link>
        </div>
        
        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white/80'}`}>
            Home
          </Link>
          <Link href="#sobre" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white/80'}`}>
            Sobre
          </Link>
          <Link href="#tratamentos" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white/80'}`}>
            Tratamentos
          </Link>
          <Link href="#cursos" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white/80'}`}>
            Cursos
          </Link>
          <Link href="#contato" className={`font-medium transition-colors ${scrolled ? 'text-gray-800 hover:text-primary' : 'text-white hover:text-white/80'}`}>
            Contato
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className={`md:hidden ${scrolled ? 'text-gray-800' : 'text-white'}`}
          aria-label="Menu"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md">
          <div className="container py-4 flex flex-col space-y-4">
            <Link href="/" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link href="#sobre" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Sobre
            </Link>
            <Link href="#tratamentos" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Tratamentos
            </Link>
            <Link href="#cursos" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Cursos
            </Link>
            <Link href="#contato" className="font-medium text-gray-800 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
              Contato
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 