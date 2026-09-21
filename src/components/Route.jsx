import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import route from '../data/route.json';
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

// Same distance palette used in EventDetails so both sections read as one system.
const legConfig = {
  '5k': { bg: '#F72585', text: '#fff' },
  '10k': { bg: '#FFD700', text: '#000' },
};

export default function Route() {
  return (
    <>
      <SectionDivider color="#009B9B" direction="down" height={60} />
      <section
        id="ruta"
        className="relative py-16 overflow-hidden"
        style={{ background: '#009B9B' }}
      >
        <FloatingDecorators colors={['#FFD700', '#ffffff', '#F72585', '#000', '#FFD700', '#ffffff', '#F72585', '#000']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              {route.badge}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow-neo mb-4">
              {route.title}
            </h2>
            <p className="font-display text-xl sm:text-2xl text-white/90" style={{ textShadow: '2px 2px 0 #000' }}>
              {route.subtitle}
            </p>
          </motion.div>

          {/* Salidas por distancia */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {route.legs.map((leg) => {
              const cfg = legConfig[leg.id] || { bg: '#F72585', text: '#fff' };
              return (
                <motion.div
                  key={leg.id}
                  {...staggerChild}
                  className="neo-card-lg rounded-2xl bg-white p-8 flex flex-col items-center text-center gap-4"
                >
                  <span
                    className="font-display text-5xl sm:text-6xl px-8 py-3 rounded-2xl border-3 border-black shadow-neo"
                    style={{ background: cfg.bg, color: cfg.text }}
                  >
                    {leg.name}
                  </span>
                  <span className="font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black bg-black text-white">
                    SALIDA {leg.start} HRS
                  </span>
                  <p className="text-gray-800 font-medium leading-relaxed">{leg.description}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Mapa del recorrido — pendiente de publicación */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl bg-white p-8 sm:p-10 text-center mb-10"
          >
            <h3 className="font-display text-3xl sm:text-4xl text-black mb-3">{route.map.title}</h3>
            <span
              className="inline-block font-display text-lg sm:text-xl text-black px-8 py-2 rounded-full border-3 border-black shadow-neo mb-5"
              style={{ background: '#FFD700' }}
            >
              {route.map.status}
            </span>

            {/* Trazo decorativo del circuito */}
            <svg
              viewBox="0 0 320 120"
              className="w-full max-w-md mx-auto h-28 mb-5 opacity-30"
              fill="none"
              stroke="#000"
              strokeWidth="4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <motion.path
                d="M20 95 Q70 20 130 60 Q190 100 240 45 Q275 12 300 30"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2, ease: 'easeInOut' }}
              />
              <circle cx="20" cy="95" r="8" fill="#F72585" />
              <circle cx="300" cy="30" r="8" fill="#009B9B" />
            </svg>

            <p className="text-gray-800 font-medium leading-relaxed max-w-2xl mx-auto mb-6">
              {route.map.note}
            </p>

            <a
              href={links.convocatoria}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block font-display text-lg sm:text-xl text-white bg-black px-10 py-4 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              CONSULTA LA CONVOCATORIA
            </a>
          </motion.div>

          {/* Datos del recorrido */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="grid sm:grid-cols-2 gap-3 max-w-4xl mx-auto"
          >
            {route.highlights.map(({ icon, text }) => (
              <motion.div
                key={text}
                {...staggerChild}
                className="flex items-center gap-3 bg-black text-white rounded-full px-5 py-3 border-3 border-black"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-sm font-bold uppercase tracking-wide">{text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Fecha y sede */}
          <motion.p {...fadeUp} className="text-center text-white font-bold text-sm mt-8">
            {eventInfo.date} · {eventInfo.location.fullAddress}
          </motion.p>

        </div>
      </section>
      <SectionDivider color="#009B9B" direction="up" height={60} />
    </>
  );
}
