import { motion } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import eventInfo from '../data/eventInfo.json';

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
  '5k': { bg: '#F72585', text: '#fff', emoji: '🏃' },
  '10k': { bg: '#009B9B', text: '#fff', emoji: '💪' },
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
              Elige tu reto
            </h2>
          </motion.div>

          {/* Date & Location banner */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl p-6 sm:p-8 mb-10 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left"
            style={{ background: '#000', color: '#fff' }}
          >
            <div className="text-4xl">📅</div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-white">{eventInfo.date}</p>
              <p className="text-white/80 font-bold text-sm mt-1">{eventInfo.location.fullAddress}</p>
            </div>
            <div className="hidden sm:block w-px h-12 bg-white/30" />
            <div className="text-4xl">⏰</div>
            <div>
              <p className="font-display text-2xl sm:text-3xl text-white">07:00 AM</p>
              <p className="text-white/80 font-bold text-sm mt-1">Hora de salida</p>
            </div>
          </motion.div>

          {/* Distance cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-2 gap-6 mb-10"
          >
            {eventInfo.distances.map((d) => {
              const cfg = distanceConfig[d.id] || { bg: '#F72585', text: '#fff', emoji: '🏃' };
              return (
                <motion.div
                  key={d.id}
                  {...staggerChild}
                  className="neo-card-lg rounded-2xl p-6 sm:p-8 flex flex-col gap-4 cursor-default group transition-all duration-150 hover:-translate-y-2 hover:shadow-none active:-translate-y-2"
                >
                  {/* Badge */}
                  <div className="flex items-center gap-3">
                    <span
                      className="font-display text-4xl sm:text-5xl px-5 py-2 rounded-xl border-3 border-black shadow-neo-sm"
                      style={{ background: cfg.bg, color: cfg.text }}
                    >
                      {d.name}
                    </span>
                    <span className="text-3xl">{cfg.emoji}</span>
                  </div>

                  {/* SVG runner icon — stroke animation */}
                  <svg
                    viewBox="0 0 80 40"
                    className="w-20 h-10 opacity-30"
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

                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-wide text-gray-500">Nivel:</span>
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
                      style={{ background: cfg.bg, color: cfg.text }}
                    >
                      {d.level}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Presencial only pill */}
          <motion.div {...fadeUp} className="flex justify-center mb-10">
            <div className="inline-flex items-center gap-3 neo-card rounded-full px-6 py-3 bg-white text-black font-bold text-base sm:text-lg">
              <span className="text-2xl">🏃</span>
              Presencial · Circuito Valle Oriente, Monterrey
            </div>
          </motion.div>

          {/* Kit del corredor */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl p-6 sm:p-8 mb-10 bg-white"
          >
            <h3 className="font-display text-2xl sm:text-3xl text-black mb-6 text-center">
              🎁 Kit del Corredor
            </h3>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ staggerChildren: 0.08 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
            >
              {eventInfo.runnerKit.map(({ icon, item }) => (
                <motion.div
                  key={item}
                  {...staggerChild}
                  className="flex items-center gap-3 bg-gray-50 rounded-xl p-3 border-2 border-black"
                >
                  <span className="text-xl">{icon}</span>
                  <span className="text-sm font-bold text-gray-800">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Schedule */}
          <motion.div {...fadeUp} className="neo-card-lg rounded-2xl p-6 sm:p-8 bg-white">
            <h3 className="font-display text-2xl sm:text-3xl text-black mb-6 text-center">
              ⏱️ Cronograma del Día
            </h3>
            <div className="max-w-xl mx-auto space-y-2">
              {eventInfo.schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06, duration: 0.3 }}
                  className="flex items-center gap-4 rounded-xl px-4 py-3 border-2 border-black"
                  style={{ background: i % 2 === 0 ? '#fff' : '#f9fafb' }}
                >
                  <span
                    className="font-display text-base w-14 text-center px-2 py-1 rounded-lg border-2 border-black shrink-0"
                    style={{ background: '#F72585', color: '#fff' }}
                  >
                    {item.time}
                  </span>
                  <span className="text-sm font-bold text-gray-800">{item.activity}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <SectionDivider color="#FFD700" direction="up" height={60} />
    </>
  );
}
