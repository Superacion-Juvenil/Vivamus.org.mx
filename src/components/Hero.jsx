import { motion } from 'framer-motion';
import GlowField from './ui/GlowField';
import Countdown from './ui/Countdown';
import eventInfo from '../data/eventInfo.json';
import links from '../data/links.json';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const facts = [
  { label: 'Fecha', value: '25 Oct 2026' },
  { label: 'Lugar', value: 'Vía Deportiva, Mty' },
  { label: 'Distancias', value: '5K · 10K' },
  { label: 'Modalidad', value: 'Presencial' },
];

export default function Hero() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="inicio"
      className="relative flex flex-col overflow-hidden pt-16 sm:pt-[4.5rem]"
      style={{ background: 'linear-gradient(160deg, #0d3a52 0%, #0f5f80 38%, #33B9E5 78%, #57cdf0 100%)' }}
    >
      <GlowField colors={['#F72585', '#FFD700', '#009B9B']} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex flex-col items-center text-center gap-6 pt-14 pb-20 sm:pt-20 sm:pb-28">

        {/* Eyebrow */}
        <motion.span
          {...fadeUp(0)}
          className="eyebrow bg-white/10 text-white border border-white/20 backdrop-blur-sm"
        >
          Desde 2009 · 25 de Octubre 2026
        </motion.span>

        {/* Logo */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/logo-vivamus.png"
            alt="Carrera VIVAMUS Merco 2026"
            className="w-[19rem] sm:w-[28rem] md:w-[34rem] h-auto block mx-auto drop-shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          />
        </motion.div>

        {/* Headline */}
        <motion.h1
          {...fadeUp(0.15)}
          className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-[1.05] max-w-2xl"
        >
          Corre en familia. Corre por una causa.
        </motion.h1>

        <motion.p
          {...fadeUp(0.22)}
          className="text-base sm:text-lg text-white/85 max-w-xl leading-relaxed"
        >
          La carrera familiar más animada de Nuevo León — cada kilómetro que corres impulsa la formación de miles de jóvenes en Monterrey.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.32)} className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto mt-1">
          <a
            href={links.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-white"
            style={{ background: 'linear-gradient(135deg, #F72585, #d81e73)' }}
          >
            ¡Inscríbete ahora!
          </a>
          <button
            onClick={() => scrollTo('evento')}
            className="btn-outline bg-white/95"
          >
            Conoce el recorrido
          </button>
        </motion.div>

        {/* Countdown */}
        <motion.div {...fadeUp(0.4)} className="w-full flex flex-col items-center gap-3 mt-4">
          <p className="font-bold text-white/70 text-xs uppercase tracking-[0.2em]">Faltan</p>
          <Countdown target={eventInfo.dateISO} />
        </motion.div>
      </div>

      {/* Fact strip — editorial data bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-4xl mx-auto px-4 -mb-10 sm:-mb-12"
      >
        <div className="card-lg grid grid-cols-2 sm:grid-cols-4 divide-x divide-ink/[0.07] bg-white/95 backdrop-blur-sm overflow-hidden">
          {facts.map((f) => (
            <div key={f.label} className="px-4 py-5 sm:py-6 text-center">
              <p className="text-[0.65rem] sm:text-xs font-bold uppercase tracking-[0.15em] text-ink/45 mb-1">
                {f.label}
              </p>
              <p className="font-display text-lg sm:text-2xl text-ink leading-none">{f.value}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
