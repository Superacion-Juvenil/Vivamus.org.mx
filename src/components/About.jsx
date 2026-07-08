import { motion } from 'framer-motion';
import FloatingDecorators from './ui/FloatingDecorators';
import SectionDivider from './ui/SectionDivider';
import about from '../data/about.json';
import links from '../data/links.json';

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

            {/* Left — description + mission + vision */}
            <div className="flex flex-col gap-6">
              <motion.p {...fadeUp} className="text-lg sm:text-xl text-gray-800 leading-relaxed">
                {about.whatIs.description}
              </motion.p>

              <motion.div {...fadeUp}>
                <h3 className="font-display text-2xl text-black mb-1">{about.mission.title}</h3>
                <p className="text-gray-700 leading-relaxed">{about.mission.description}</p>
              </motion.div>

              <motion.div {...fadeUp}>
                <h3 className="font-display text-2xl text-black mb-1">{about.vision.title}</h3>
                <p className="text-gray-700 leading-relaxed">{about.vision.description}</p>
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
                  + 570 jóvenes impactados en el 2025
                </div>

                <p className="text-white/90 text-sm font-medium mt-4 leading-relaxed">
                  {causeDescription}
                </p>

                <a
                  href={links.superacionJuvenil}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-5 font-bold text-white underline underline-offset-4 decoration-2 hover:text-black transition-colors"
                >
                  Conoce más sobre Superación Juvenil. Click aquí →
                </a>
              </div>
            </motion.div>
          </div>

          {/* Nuestros Pilares */}
          <motion.h3 {...fadeUp} className="font-display text-3xl sm:text-4xl text-black text-center mb-8">
            Nuestros Pilares
          </motion.h3>
          <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {about.pillars.map((pillar) => (
              <motion.div
                {...staggerChild}
                key={pillar.title}
                className="rounded-2xl border-3 border-black shadow-neo p-6 transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg"
                style={{ background: pillar.bg, color: pillar.text }}
              >
                <div className="text-3xl mb-3">{pillar.icon}</div>
                <h4 className="font-display text-xl mb-2">{pillar.title}</h4>
                <p className="text-sm leading-relaxed" style={{ opacity: 0.9 }}>{pillar.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
