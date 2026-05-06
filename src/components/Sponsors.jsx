import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

const staggerChild = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.4 },
};

export default function Sponsors() {
  return (
    <section id="patrocinadores" className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4">

        {/* Heading */}
        <motion.div {...fadeUp} className="text-center mb-12">
          <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
            ALIADOS
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black">
            Patrocinadores
          </h2>
        </motion.div>

        {/* Logo cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
        >
          {/* Merco */}
          <motion.div
            {...staggerChild}
            className="neo-card rounded-2xl p-4 flex items-center justify-center w-full sm:w-72 h-40 transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg"
          >
            <img
              src="/logo-merco.jpg"
              alt="Merco"
              className="max-h-32 max-w-full object-contain"
            />
          </motion.div>

          {/* Superación Juvenil */}
          <motion.div
            {...staggerChild}
            className="neo-card rounded-2xl p-8 flex items-center justify-center w-full sm:w-72 h-40 transition-all duration-150 hover:-translate-y-1 hover:shadow-neo-lg"
          >
            <img
              src="/logo-sj.jpg"
              alt="Superación Juvenil ABP"
              className="max-h-24 max-w-full object-contain"
            />
          </motion.div>
        </motion.div>

        {/* CTA */}
        <motion.div {...fadeUp} className="text-center">
          <p className="text-gray-800 font-bold text-base sm:text-lg mb-3">
            ¿Te gustaría participar como patrocinador de Vivamus-Merco 2026?
          </p>
          <a
            href="mailto:carrera@superacionjuvenil.org?subject=Patrocinio Vivamus-Merco 2026"
            className="inline-block font-bold text-white px-8 py-3 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
            style={{ background: '#000' }}
          >
            Escríbenos a carrera@superacionjuvenil.org →
          </a>
        </motion.div>

      </div>
    </section>
  );
}
