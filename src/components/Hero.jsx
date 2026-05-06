import { motion } from 'framer-motion';
import FloatingDecorators from './ui/FloatingDecorators';
import Countdown from './ui/Countdown';
import eventInfo from '../data/eventInfo.json';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: 'easeOut' },
});

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16"
      style={{ background: '#33B9E5' }}
    >
      {/* Background dot pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
        aria-hidden="true"
      />

      {/* Floating decorators */}
      <FloatingDecorators colors={['#F72585', '#FFD700', '#009B9B', '#ffffff']} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col items-center text-center gap-5 py-12">

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <div className="w-64 sm:w-80 md:w-96 mx-auto rounded-3xl overflow-hidden shadow-neo-lg">
            <img
              src="/logo-vivamus.png"
              alt="Carrera VIVAMUS Merco 2026"
              className="w-full h-auto block"
            />
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          {...fadeUp(0.3)}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight max-w-xl"
          style={{ textShadow: '3px 3px 0 #000' }}
        >
          ¡Corre en Familia!
        </motion.p>

        {/* Date badge */}
        <motion.div {...fadeUp(0.45)}>
          <span className="inline-block bg-black text-white font-bold px-5 py-2 rounded-full text-sm sm:text-base border-3 border-black">
            📍 25 de Octubre 2026 · Circuito Vía Deportiva, Monterrey
          </span>
        </motion.div>

        {/* Distance badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.4 }}
          className="flex gap-3 flex-wrap justify-center"
        >
          {[
            { label: '5K', bg: '#F72585', delay: 0.55 },
            { label: '10K', bg: '#009B9B', delay: 0.65 },
          ].map(({ label, bg, delay }) => (
            <motion.span
              key={label}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay, duration: 0.3 }}
              className="font-display text-xl sm:text-2xl text-white px-6 py-2 rounded-full border-3 border-black shadow-neo"
              style={{ background: bg }}
            >
              {label}
            </motion.span>
          ))}
        </motion.div>

        {/* Countdown */}
        <motion.div {...fadeUp(0.7)} className="w-full flex flex-col items-center gap-2">
          <p className="font-bold text-black text-sm uppercase tracking-widest">Faltan</p>
          <Countdown target={eventInfo.dateISO} />
        </motion.div>

        {/* CTAs */}
        <motion.div {...fadeUp(0.85)} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
          <button
            onClick={() => scrollTo('inscripciones')}
            className="font-display text-lg sm:text-xl text-white px-8 py-3 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none pulse-badge"
            style={{ background: '#F72585' }}
          >
            ¡Inscríbete ahora!
          </button>
          <button
            onClick={() => scrollTo('evento')}
            className="font-bold text-base sm:text-lg text-black px-8 py-3 rounded-full border-3 border-black bg-white shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            Conoce más ↓
          </button>
        </motion.div>
      </div>
    </section>
  );
}
