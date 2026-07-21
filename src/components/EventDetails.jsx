import { motion } from 'framer-motion';
import eventInfo from '../data/eventInfo.json';
import links from '../data/links.json';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const staggerChild = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const distanceConfig = {
  '5k': { bg: 'linear-gradient(135deg, #F72585, #c31b6b)' },
  '10k': { bg: 'linear-gradient(135deg, #009B9B, #076e6e)' },
};

export default function EventDetails() {
  return (
    <section
      id="evento"
      className="relative py-20 sm:py-28 overflow-hidden bg-gradient-to-b from-white to-[#f4f8fb]"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="eyebrow bg-ink/5 text-ink/70">El Evento</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink mb-4">
            Elige tu distancia
          </h2>
          <p className="inline-flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-ink/60 font-medium text-sm sm:text-base">
            <span className="font-bold text-ink">25 de Octubre 2026</span>
            <span aria-hidden="true">·</span>
            <span>{eventInfo.location.fullAddress}</span>
          </p>
        </motion.div>

        {/* Distance cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.12 }}
          className="grid sm:grid-cols-2 gap-5 sm:gap-6 mb-8"
        >
          {eventInfo.distances.map((d) => (
            <motion.div
              key={d.id}
              {...staggerChild}
              className="card-hover rounded-3xl p-8 sm:p-10 flex flex-col items-center text-center gap-4 shadow-card"
            >
              <span
                className="font-display text-5xl sm:text-6xl text-white px-8 py-3 rounded-2xl"
                style={{ background: (distanceConfig[d.id] || distanceConfig['5k']).bg }}
              >
                {d.name}
              </span>
              <p className="text-ink/65 font-medium leading-relaxed max-w-xs">{d.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Convocatoria oficial */}
        <motion.div {...fadeUp} className="flex justify-center mb-20">
          <a
            href={links.convocatoria}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
          >
            Descarga la convocatoria oficial →
          </a>
        </motion.div>

        {/* Race day schedule */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <span className="eyebrow bg-ink/5 text-ink/70">Día del evento</span>
          <h3 className="font-display text-3xl sm:text-4xl text-ink">
            Itinerario
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.06 }}
          className="max-w-2xl mx-auto card-lg p-2 sm:p-3"
        >
          {eventInfo.schedule.map((item, i) => (
            <motion.div
              key={item.time}
              {...staggerChild}
              className={`flex items-center gap-4 sm:gap-6 px-4 sm:px-6 py-4 ${
                i !== eventInfo.schedule.length - 1 ? 'border-b border-ink/[0.06]' : ''
              }`}
            >
              <span className="font-display text-xl sm:text-2xl text-sky w-16 sm:w-20 shrink-0 text-right">
                {item.time}
              </span>
              <span className="w-2 h-2 rounded-full bg-sky shrink-0" />
              <span className="text-ink/80 font-medium text-sm sm:text-base leading-snug">
                {item.activity}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
