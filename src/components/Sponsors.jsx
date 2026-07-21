import { motion } from 'framer-motion';
import sponsors from '../data/sponsors.json';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
};

const staggerChild = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.35 },
};

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="eyebrow bg-ink/5 text-ink/70">Aliados</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink">
            Patrocinadores
          </h2>
        </motion.div>

        {/* Patrocinador principal — Merco */}
        <motion.div {...fadeUp} className="flex justify-center mb-12">
          <div className="card px-10 py-6 flex items-center justify-center">
            <img
              src={sponsors.featuredLogo.src}
              alt={sponsors.featuredLogo.name}
              className="max-h-28 max-w-full object-contain"
            />
          </div>
        </motion.div>

        {/* Primera fila — Nescafé, FUD y Gamesa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-3 items-center gap-x-6 gap-y-8 mb-8"
        >
          {sponsors.logos.slice(0, 3).map((logo) => (
            <motion.div
              key={logo.name}
              {...staggerChild}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-16 max-w-[80%] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Demás patrocinadores — cuadrícula en el orden indicado */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.08 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 items-center gap-x-6 gap-y-8 mb-14"
        >
          {sponsors.logos.slice(3).map((logo) => (
            <motion.div
              key={logo.name}
              {...staggerChild}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="max-h-14 max-w-[80%] object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center card-lg p-8 sm:p-10">
          <p className="text-ink/70 font-semibold text-base sm:text-lg mb-4">
            ¿Te gustaría participar como patrocinador de Vivamus-Merco 2026?
          </p>
          <a
            href="mailto:carrera@superacionjuvenil.org?subject=Patrocinio Vivamus-Merco 2026"
            className="btn text-white bg-ink"
          >
            Escríbenos a carrera@superacionjuvenil.org →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
