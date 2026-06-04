import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'evento', label: 'El Evento' },
  { id: 'inscripciones', label: 'Inscripciones' },
  { id: 'patrocinadores', label: 'Patrocinadores' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#33B9E5' : 'transparent',
        borderBottom: scrolled ? '3px solid #000' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <button
          onClick={() => handleNav('inicio')}
          className="flex items-center focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img src="/logo-vivamus.png" alt="VIVAMUS" className="h-10 w-auto object-contain transition-transform duration-200 hover:scale-105" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="px-3 py-1.5 font-bold text-black text-sm rounded-md transition-all duration-150 hover:bg-black hover:text-white"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('inscripciones')}
            className="ml-3 px-5 py-2 rounded-full text-sm font-bold text-white border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
            style={{ background: '#F72585' }}
          >
            ¡Inscríbete!
          </button>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 focus:outline-none w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-black origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-0.5 bg-black"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 bg-black origin-center"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="lg:hidden overflow-hidden"
            style={{ background: '#33B9E5', borderBottom: '3px solid #000' }}
            aria-label="Menú móvil"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                  onClick={() => handleNav(link.id)}
                  className="text-left w-full px-4 py-3 font-bold text-black text-base rounded-lg transition-colors duration-150 hover:bg-black hover:text-white active:bg-black active:text-white"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.button
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => handleNav('inscripciones')}
                className="mt-2 px-4 py-3 rounded-xl font-bold text-white text-base border-3 border-black shadow-neo text-center transition-all duration-150 active:translate-x-1 active:translate-y-1 active:shadow-none"
                style={{ background: '#F72585' }}
              >
                ¡Inscríbete ahora!
              </motion.button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
