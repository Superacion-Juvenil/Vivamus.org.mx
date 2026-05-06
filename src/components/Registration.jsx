import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import pricing from '../data/pricing.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function getActivePhase() {
  const today = new Date();
  for (const phase of pricing.phases) {
    const from = phase.from ? new Date(phase.from) : null;
    const until = phase.until ? new Date(phase.until) : null;
    if (from && until && today >= from && today <= until) return phase;
    if (!from && until && today <= until) return phase;
    if (from && !until && today >= from) return phase;
  }
  return pricing.phases[0];
}

const activePhase = getActivePhase();

export default function Registration() {
  return (
    <>
      <section
        id="inscripciones"
        className="relative py-16 overflow-hidden"
        style={{ background: '#F72585' }}
      >
        <FloatingDecorators colors={['#FFD700', '#ffffff', '#33B9E5', '#000', '#FFD700', '#ffffff', '#33B9E5', '#000']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              INSCRIPCIONES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow-neo mb-4">
              ¡Participa con nosotros!
            </h2>
            <p className="font-display text-xl sm:text-2xl text-white/90" style={{ textShadow: '2px 2px 0 #000' }}>
              Inscripciones abiertas a partir del 5 de junio 2026
            </p>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6"
          >
            {pricing.phases.map((phase) => {
              const isActive = phase.id === activePhase.id;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border-3 border-black p-6 text-center relative"
                  style={{
                    background: isActive ? '#FFD700' : '#fff',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive ? '6px 6px 0 #000' : '4px 4px 0 #000',
                  }}
                >
                  {isActive && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-black pulse-badge whitespace-nowrap">
                      ¡Precio actual!
                    </span>
                  )}
                  <h3 className="font-display text-xl sm:text-2xl text-black mb-3">{phase.name}</h3>
                  <div className="font-display text-4xl sm:text-5xl text-black mb-1">
                    ${phase.price}
                    <span className="text-base font-sans font-bold ml-1">MXN</span>
                  </div>
                  <p className="text-xs font-bold text-gray-700 mt-2">{phase.validity}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>
      <SectionDivider color="#F72585" direction="up" height={60} />
    </>
  );
}
