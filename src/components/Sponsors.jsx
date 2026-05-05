import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FloatingDecorators from './ui/FloatingDecorators';
import sponsors from '../data/sponsors.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

const levelConfig = {
  Diamante: { bg: '#7B2FBE', text: '#fff', emoji: '💎' },
  Oro:      { bg: '#FFD700', text: '#000', emoji: '🥇' },
  Plata:    { bg: '#9CA3AF', text: '#fff', emoji: '🥈' },
  Bronce:   { bg: '#9B5A2A', text: '#fff', emoji: '🥉' },
  Aliado:   { bg: '#009B9B', text: '#fff', emoji: '🤝' },
};

export default function Sponsors() {
  const [openLevel, setOpenLevel] = useState(null);

  return (
    <section id="patrocinadores" className="relative py-16 bg-white overflow-hidden">
      <FloatingDecorators colors={['#DD2200', '#44AA44', '#DD2200', '#44AA44', '#DD2200', '#44AA44', '#DD2200', '#44AA44']} />

      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
            ALIADOS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black">
            Patrocinadores
          </h2>
        </motion.div>

        {/* Merco main sponsor card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="rounded-2xl border-3 border-black shadow-neo-xl p-8 sm:p-12 text-center mb-10 relative overflow-hidden"
          style={{ background: '#DD2200' }}
        >
          <FloatingDecorators colors={['#fff', '#FFD700', '#fff', '#FFD700', '#fff', '#FFD700', '#fff', '#FFD700']} />
          <div className="relative z-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-6 bg-black text-white">
              Patrocinador Principal
            </span>
            <div className="font-display text-5xl sm:text-7xl text-white text-shadow-neo mb-4">
              {sponsors.mainSponsor.name}
            </div>
            <p className="text-white/90 font-bold text-base max-w-xl mx-auto">
              {sponsors.mainSponsor.description}
            </p>
          </div>
        </motion.div>

        {/* Sponsorship levels accordion */}
        <motion.div {...fadeUp} className="mb-10">
          <h3 className="font-display text-2xl sm:text-3xl text-black mb-6 text-center">
            Paquetes de Patrocinio
          </h3>
          <div className="space-y-3">
            {sponsors.sponsorLevels.map((level) => {
              const cfg = levelConfig[level.level] || { bg: '#009B9B', text: '#fff', emoji: '⭐' };
              const isOpen = openLevel === level.level;
              return (
                <div
                  key={level.level}
                  className="neo-card rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenLevel(isOpen ? null : level.level)}
                    className="w-full flex items-center justify-between px-6 py-4 transition-colors duration-150"
                    style={{ background: isOpen ? cfg.bg : '#fff' }}
                    aria-expanded={isOpen}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{cfg.emoji}</span>
                      <span
                        className="font-display text-xl"
                        style={{ color: isOpen ? cfg.text : '#000' }}
                      >
                        {level.level}
                      </span>
                      <span
                        className="text-sm font-bold px-3 py-1 rounded-full border-2 border-black"
                        style={{ background: isOpen ? '#fff' : cfg.bg, color: isOpen ? '#000' : cfg.text }}
                      >
                        {level.investment}
                      </span>
                    </div>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-bold text-2xl"
                      style={{ color: isOpen ? cfg.text : '#000' }}
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-4 border-t-3 border-black bg-gray-50">
                          <ul className="space-y-2">
                            {level.benefits.map((b, i) => (
                              <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-800">
                                <span
                                  className="w-5 h-5 rounded-full border-2 border-black flex items-center justify-center text-xs shrink-0"
                                  style={{ background: cfg.bg, color: cfg.text }}
                                >
                                  ✓
                                </span>
                                {b}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="neo-card-lg rounded-2xl p-8 text-center bg-white">
          <h3 className="font-display text-2xl sm:text-3xl text-black mb-3">
            ¿Quieres ser patrocinador?
          </h3>
          <p className="text-gray-700 font-bold text-sm mb-6 max-w-sm mx-auto">
            Asocia tu marca con valores, familia y deporte. Llega a miles de familias regiomontanas.
          </p>
          <a
            href="mailto:vivamus@superacionjuvenil.org?subject=Interesado en Patrocinio VIVAMUS 2026"
            className="inline-block font-bold text-white px-8 py-3 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
            style={{ background: '#000' }}
          >
            Contáctanos →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
