import { useState, useEffect } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg border-b-3 border-black' 
          : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('inicio');
            }}
            className="flex items-center shrink-0 hover:scale-105 transition-transform"
            aria-label="Carrera VIVAMUS - Inicio"
          >
            <img
              src="/logo-vivamus.png"
              alt="Carrera VIVAMUS"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavButton onClick={() => scrollToSection('inicio')}>Inicio</NavButton>
            <NavButton onClick={() => scrollToSection('nosotros')}>Nosotros</NavButton>
            <NavButton onClick={() => scrollToSection('evento')}>El Evento</NavButton>
            <NavButton onClick={() => scrollToSection('inscripciones')}>Inscripciones</NavButton>
            <NavButton onClick={() => scrollToSection('patrocinadores')}>Patrocinadores</NavButton>
            <NavButton onClick={() => scrollToSection('galeria')}>Galería</NavButton>
            <NavButton onClick={() => scrollToSection('faq')}>FAQ</NavButton>
            <button
              onClick={() => scrollToSection('inscripciones')}
              className="bg-vivamus-pink text-white px-6 py-2 rounded-full hover:bg-vivamus-sky transition-all font-bold border-2 border-black shadow-vivamus-sm hover:scale-105 hover:-rotate-1"
            >
              Próximamente
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 space-y-2 border-t border-gray-200 pt-4">
            <MobileNavButton onClick={() => scrollToSection('inicio')}>Inicio</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('nosotros')}>Nosotros</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('evento')}>El Evento</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('inscripciones')}>Inscripciones</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('patrocinadores')}>Patrocinadores</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('galeria')}>Galería</MobileNavButton>
            <MobileNavButton onClick={() => scrollToSection('faq')}>FAQ</MobileNavButton>
            <button
              onClick={() => scrollToSection('inscripciones')}
              className="block w-full bg-vivamus-pink text-white px-6 py-3 rounded-full hover:bg-vivamus-sky transition-colors font-bold text-center mt-4 border-2 border-black shadow-vivamus-sm"
            >
              Próximamente
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

const NavButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-700 hover:text-vivamus-pink transition-colors font-medium relative group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-vivamus-pink transition-all group-hover:w-full" />
  </button>
);

const MobileNavButton = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="block w-full text-left text-gray-700 hover:text-vivamus-pink hover:bg-vivamus-pink/10 py-3 px-4 rounded-lg transition-all font-medium"
  >
    {children}
  </button>
);

export default Header;
