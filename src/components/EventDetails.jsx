import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import eventInfo from '../data/eventInfo.json';
import links from '../data/links.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

const staggerChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

const distanceConfig = {
  '5k': { bg: '#F72585', text: '#fff' },
  '10k': { bg: '#009B9B', text: '#fff' },
};

export default function EventDetails() {
  return (
    <>
      <SectionDivider color="#FFD700" direction="down" height={60} />
      <section
        id="evento"
        className="relative py-16 overflow-hidden"
        style={{ background: '#FFD700' }}
      >
        <FloatingDecorators colors={['#F72585', '#009B9B', '#33B9E5', '#ffffff', '#F72585', '#009B9B', '#33B9E5', '#000']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              EL EVENTO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black">
              Elige tu distancia
            </h2>
          </motion.div>

          {/* Date & Location banner — no start time */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl p-6 sm:p-8 mb-10 flex items-center justify-center gap-4 text-center"
            style={{ background: '#000', color: '#fff' }}
          >
            <div className="text-3xl">📅</div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-white">25 de Octubre 2026</p>
              <p className="text-white/80 font-bold text-sm mt-1">Circuito Vía Deportiva, Monterrey</p>
            </div>
          </motion.div>

          {/* Distance cards — centered, bigger badge, no emoji, no level */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {eventInfo.distances.map((d) => {
              const cfg = distanceConfig[d.id] || { bg: '#F72585', text: '#fff' };
              return (
                <motion.div
                  key={d.id}
                  {...staggerChild}
                  className="neo-card-lg rounded-2xl p-8 sm:p-10 flex flex-col items-center text-center gap-4 cursor-default transition-all duration-150 hover:-translate-y-2 hover:shadow-none active:-translate-y-2"
                >
                  {/* Big centered badge */}
                  <span
                    className="font-display text-6xl sm:text-7xl px-8 py-4 rounded-2xl border-3 border-black shadow-neo"
                    style={{ background: cfg.bg, color: cfg.text }}
                  >
                    {d.name}
                  </span>

                  {/* SVG stroke animation */}
                  <svg
                    viewBox="0 0 80 40"
                    className="w-20 h-10 opacity-25"
                    fill="none"
                    stroke="#000"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  >
                    <motion.path
                      d="M10 35 Q20 10 35 20 Q50 30 65 8"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeInOut' }}
                    />
                  </svg>

                  <p className="text-gray-800 font-medium leading-relaxed">{d.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Convocatoria oficial */}
          <motion.div {...fadeUp} className="flex justify-center">
            <a
              href={links.convocatoria}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-lg sm:text-xl text-white bg-black px-8 py-4 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              Descarga la convocatoria oficial aquí
            </a>
          </motion.div>

        </div>
      </section>
      <SectionDivider color="#FFD700" direction="up" height={60} />
    </>
  );
}
