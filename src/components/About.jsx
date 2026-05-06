import { motion } from 'framer-motion';
import FloatingDecorators from './ui/FloatingDecorators';
import CountUp from './ui/CountUp';
import SectionDivider from './ui/SectionDivider';
import about from '../data/about.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.5, ease: 'easeOut' },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const staggerChild = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4 },
};

const stats = [
  { value: 15, suffix: '', label: 'Ediciones', bg: '#F72585', text: '#fff' },
  { value: 4000, suffix: '+', label: 'Corredores', bg: '#FFD700', text: '#000' },
  { value: 300, suffix: '+', label: 'Voluntarios', bg: '#009B9B', text: '#fff' },
];

const causeDescription = 'Los fondos recaudados apoyan los programas de Superación Juvenil ABP, que tiene como objetivo fundar, administrar, dirigir, crear y desarrollar Centros de Valores para jóvenes a través de los cuales se impulse orientación social con programas de formación de valores que fortalezcan su desarrollo humano y las relaciones en el seno familiar y en el medio social en que habiten.';

export default function About() {
  return (
    <>
      <SectionDivider color="#ffffff" direction="up" height={50} />
      <section id="nosotros" className="relative bg-white py-16 overflow-hidden">
        <FloatingDecorators colors={['#FFD700', '#FFD700', '#F72585', '#009B9B', '#FFD700', '#FFD700', '#F72585', '#009B9B']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Top heading */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4" style={{ background: '#33B9E5' }}>
              DESDE 2009
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black leading-tight">
              ¿Qué es VIVAMUS?
            </h2>
          </motion.div>

          {/* Two column layout */}
          <div className="grid lg:grid-cols-2 gap-8 items-start mb-12">

            {/* Left — description + stats */}
            <div>
              <motion.p {...fadeUp} className="text-lg sm:text-xl text-gray-800 leading-relaxed mb-8">
                {about.whatIs.description}
              </motion.p>

              {/* Stat cards */}
              <motion.div {...stagger} className="grid grid-cols-3 gap-3">
                {stats.map(({ value, suffix, label, bg, text }) => (
                  <motion.div
                    key={label}
                    {...staggerChild}
                    className="neo-card rounded-2xl p-4 text-center transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg active:-translate-y-1"
                    style={{ background: bg }}
                  >
                    <div className="font-display text-2xl sm:text-3xl" style={{ color: text }}>
                      <CountUp end={value} suffix={suffix} />
                    </div>
                    <div className="text-xs font-bold mt-1" style={{ color: text, opacity: 0.85 }}>
                      {label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right — La Causa card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="rounded-2xl border-3 border-black shadow-neo-lg p-6 sm:p-8 relative overflow-hidden"
              style={{ background: '#009B9B' }}
            >
              <div className="relative z-10">
                <span className="inline-block font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full border-2 border-black mb-4 bg-white text-black">
                  La Causa
                </span>

                <h3 className="font-display text-3xl sm:text-4xl text-white text-shadow-neo mb-3">
                  Superación Juvenil ABP
                </h3>

                <div className="font-display text-4xl sm:text-5xl text-white mb-2">
                  + 2,500 jóvenes impactados en el 2025
                </div>

                <p className="text-white/90 text-sm font-medium mt-4 leading-relaxed">
                  {causeDescription}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Mission & Vision */}
          <motion.div {...stagger} className="grid sm:grid-cols-2 gap-4">
            <motion.div
              {...staggerChild}
              className="neo-card rounded-2xl p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg"
            >
              <div className="w-10 h-10 rounded-xl border-3 border-black flex items-center justify-center mb-4 text-xl" style={{ background: '#33B9E5' }}>
                🎯
              </div>
              <h4 className="font-display text-xl text-black mb-2">{about.mission.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{about.mission.description}</p>
            </motion.div>
            <motion.div
              {...staggerChild}
              className="neo-card rounded-2xl p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg"
            >
              <div className="w-10 h-10 rounded-xl border-3 border-black flex items-center justify-center mb-4 text-xl" style={{ background: '#F72585' }}>
                👁️
              </div>
              <h4 className="font-display text-xl text-black mb-2">{about.vision.title}</h4>
              <p className="text-gray-700 text-sm leading-relaxed">{about.vision.description}</p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
