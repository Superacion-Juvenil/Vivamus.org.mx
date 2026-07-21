import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import links from '../data/links.json';

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
        background: scrolled ? 'rgba(255,255,255,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(11,18,32,0.08)' : '1px solid transparent',
        boxShadow: scrolled ? '0 4px 24px -8px rgba(15,23,42,0.10)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 sm:h-[4.5rem]">
        {/* Logo */}
        <button
          onClick={() => handleNav('inicio')}
          className="flex items-center focus:outline-none"
          aria-label="Ir al inicio"
        >
          <img src="/logo-vivamus.png" alt="VIVAMUS" className="h-9 sm:h-10 w-auto object-contain transition-transform duration-200 hover:scale-105" />
        </button>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className="px-4 py-2 font-semibold text-ink/80 text-sm rounded-full transition-colors duration-150 hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </button>
          ))}
          <a
            href={links.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-all duration-200 shadow-card hover:shadow-card-hover hover:-translate-y-0.5"
            style={{ background: 'linear-gradient(135deg, #F72585, #d81e73)' }}
          >
            Inscríbete
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center gap-1.5 p-2 focus:outline-none w-10 h-10"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <motion.span
            animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 rounded-full bg-ink origin-center"
          />
          <motion.span
            animate={menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.15 }}
            className="block w-6 h-0.5 rounded-full bg-ink"
          />
          <motion.span
            animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.2 }}
            className="block w-6 h-0.5 rounded-full bg-ink origin-center"
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
            className="lg:hidden overflow-hidden bg-white/95 backdrop-blur-md border-b border-ink/[0.06]"
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
                  className="text-left w-full px-4 py-3 font-semibold text-ink text-base rounded-xl transition-colors duration-150 hover:bg-ink/5"
                >
                  {link.label}
                </motion.button>
              ))}
              <motion.a
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                href={links.registration}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-2 px-4 py-3.5 rounded-xl font-bold text-white text-base text-center shadow-card"
                style={{ background: 'linear-gradient(135deg, #F72585, #d81e73)' }}
              >
                ¡Inscríbete ahora!
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
