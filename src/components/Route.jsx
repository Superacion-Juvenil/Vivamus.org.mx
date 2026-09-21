import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import route from '../data/route.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

export default function Route() {
  const { start, map } = route;

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
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow-neo">
              {route.title}
            </h2>
          </motion.div>

          {/* Salida y horarios */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl bg-white p-6 sm:p-8 text-center mb-8"
          >
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              {start.label}
            </span>
            <p className="font-display text-2xl sm:text-3xl text-black leading-tight mb-6">
              {start.place}
            </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {start.times.map(({ id, name, time }) => (
                <span
                  key={id}
                  className="font-display text-xl sm:text-2xl text-white bg-black px-6 py-2 rounded-full border-3 border-black"
                >
                  {name} — {time}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Mapa del recorrido — se abre en grande al tocarlo */}
          <motion.a
            {...fadeUp}
            href={map.src}
            target="_blank"
            rel="noopener noreferrer"
            className="block neo-card-lg rounded-2xl bg-white p-3 sm:p-4 overflow-hidden transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
          >
            <img
              src={map.src}
              alt={map.alt}
              width={map.width}
              height={map.height}
              loading="lazy"
              className="w-full h-auto rounded-xl"
            />
          </motion.a>

          {map.caption && (
            <motion.p {...fadeUp} className="text-center text-white font-bold text-sm mt-5">
              {map.caption}
            </motion.p>
          )}

        </div>
      </section>
      <SectionDivider color="#009B9B" direction="up" height={60} />
    </>
  );
}
