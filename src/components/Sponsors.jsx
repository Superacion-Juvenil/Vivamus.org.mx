import { motion } from 'framer-motion';
import FloatingDecorators from './ui/FloatingDecorators';
import sponsors from '../data/sponsors.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

export default function Sponsors() {

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
