import { motion } from 'framer-motion';
import pricing from '../data/pricing.json';
import eventInfo from '../data/eventInfo.json';
import links from '../data/links.json';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

function isActivePhase(phase) {
  if (!phase.until && !phase.from) return false;
  const now = new Date();
  if (phase.until && now > new Date(phase.until)) return false;
  if (phase.from && now < new Date(phase.from)) return false;
  return true;
}

export default function Registration() {
  const phases = pricing.phases;

  return (
    <section
      id="inscripciones"
      className="relative py-20 sm:py-28 overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F72585 0%, #c31b6b 100%)' }}
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="eyebrow bg-white/15 text-white">Inscripciones</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mb-3">
            ¡Participa con nosotros!
          </h2>
          <p className="text-white/85 text-base sm:text-lg font-medium">
            Inscripciones abiertas a partir del 5 de junio en As Deporte
          </p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          className="grid sm:grid-cols-3 gap-5 sm:gap-6 items-stretch max-w-4xl mx-auto"
        >
          {phases.map((phase) => {
            const active = isActivePhase(phase);
            const special = !phase.until && !phase.from;
            const highlighted = active || special;
            return (
              <motion.div
                key={phase.id}
                {...staggerChild}
                className={`rounded-2xl p-6 sm:p-7 text-center flex flex-col justify-center relative ${
                  highlighted
                    ? `bg-white shadow-card-lg sm:scale-105 ${special ? 'ring-2 ring-yellow' : ''}`
                    : 'bg-white/10 backdrop-blur-sm border border-white/20'
                }`}
              >
                {(active || special) && (
                  <span
                    className={`absolute -top-3 left-1/2 -translate-x-1/2 eyebrow mb-0 whitespace-nowrap px-3 py-1 ${
                      special ? 'bg-yellow text-ink' : 'bg-teal text-white'
                    }`}
                  >
                    {special ? 'Con causa ✨' : 'Precio actual'}
                  </span>
                )}
                <h3 className={`font-display text-xl sm:text-2xl mb-2 ${highlighted ? 'text-ink' : 'text-white'}`}>
                  {phase.name}
                </h3>
                <div className={`font-display text-4xl sm:text-5xl mb-1 ${highlighted ? 'text-ink' : 'text-white'}`}>
                  ${phase.price}
                </div>
                <p className={`text-xs font-semibold mt-2 ${highlighted ? 'text-ink/50' : 'text-white/70'}`}>
                  {phase.validity}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Commission note */}
        {pricing.note && (
          <motion.p {...fadeUp} className="text-center text-white/75 font-medium text-sm mt-6">
            {pricing.note}
          </motion.p>
        )}

        {/* Inscríbete button */}
        <motion.div {...fadeUp} className="flex justify-center mt-9">
          <a
            href={links.registration}
            target="_blank"
            rel="noopener noreferrer"
            className="btn text-ink bg-white"
          >
            ¡Inscríbete aquí!
          </a>
        </motion.div>

        {/* Tu kit incluye */}
        <div className="mt-16 sm:mt-20">
          <motion.div {...fadeUp} className="text-center mb-8">
            <h3 className="font-display text-2xl sm:text-3xl text-white">
              Tu kit incluye
            </h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.06 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-4xl mx-auto"
          >
            {eventInfo.runnerKit.map(({ icon, item, exclusive }) => (
              <motion.div
                key={item}
                {...staggerChild}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-sm text-white rounded-xl px-5 py-3.5 border border-white/15"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-semibold">
                  {item}{exclusive && ' ✨'}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {eventInfo.runnerKitNote && (
            <motion.p {...fadeUp} className="text-center text-white/65 font-medium text-xs mt-5">
              {eventInfo.runnerKitNote}
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
}
