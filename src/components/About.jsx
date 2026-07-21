import { motion } from 'framer-motion';
import CountUp from './ui/CountUp';
import about from '../data/about.json';
import links from '../data/links.json';

const fadeUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
};

const stagger = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
  transition: { staggerChildren: 0.1 },
};

const staggerChild = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
};

const impactStats = [
  { end: about.superacionJuvenil.yearsOfService, suffix: '', label: 'Años de trayectoria' },
  { end: about.superacionJuvenil.youthsImpacted, suffix: '+', label: 'Jóvenes impactados' },
  { end: about.history.editions, suffix: '', label: 'Ediciones de la carrera' },
];

export default function About() {
  return (
    <section id="nosotros" className="relative bg-white py-20 sm:py-28 overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-4">

        {/* Top heading */}
        <motion.div {...fadeUp} className="text-center mb-14">
          <span className="eyebrow bg-sky/10 text-sky">Desde 2009</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-ink leading-tight">
            ¿Qué es VIVAMUS?
          </h2>
        </motion.div>

        {/* Impact stats strip */}
        <motion.div
          {...stagger}
          className="grid grid-cols-3 gap-4 sm:gap-8 max-w-3xl mx-auto mb-16 sm:mb-20"
        >
          {impactStats.map((stat) => (
            <motion.div key={stat.label} {...staggerChild} className="text-center">
              <p className="font-display text-3xl sm:text-5xl text-ink leading-none">
                <CountUp end={stat.end} suffix={stat.suffix} />
              </p>
              <p className="text-[0.7rem] sm:text-sm text-ink/55 font-semibold mt-2 leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-20">

          {/* Left — description + mission + vision */}
          <div className="flex flex-col gap-8">
            <motion.p {...fadeUp} className="text-lg sm:text-xl text-ink-soft leading-relaxed">
              {about.whatIs.description}
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-6">
              <motion.div {...fadeUp}>
                <h3 className="font-display text-xl text-ink mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-sky inline-block" />
                  {about.mission.title}
                </h3>
                <p className="text-ink/65 text-sm leading-relaxed">{about.mission.description}</p>
              </motion.div>

              <motion.div {...fadeUp}>
                <h3 className="font-display text-xl text-ink mb-1.5 flex items-center gap-2">
                  <span className="w-1.5 h-6 rounded-full bg-pink inline-block" />
                  {about.vision.title}
                </h3>
                <p className="text-ink/65 text-sm leading-relaxed">{about.vision.description}</p>
              </motion.div>
            </div>
          </div>

          {/* Right — La Causa card */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="rounded-3xl p-7 sm:p-9 relative overflow-hidden text-white shadow-card-lg"
            style={{ background: 'linear-gradient(135deg, #009B9B 0%, #076e6e 100%)' }}
          >
            <div className="relative z-10">
              <span className="eyebrow bg-white/15 text-white">La Causa</span>

              <h3 className="font-display text-3xl sm:text-4xl mb-4">
                Superación Juvenil ABP
              </h3>

              <p className="text-white/90 text-sm leading-relaxed mb-6">
                {about.cause.description}
              </p>

              <ul className="space-y-2 mb-6">
                {about.cause.programs.map((program) => (
                  <li key={program} className="flex items-start gap-2 text-sm text-white/90">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-white/70 shrink-0" />
                    {program}
                  </li>
                ))}
              </ul>

              <a
                href={links.superacionJuvenil}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-bold text-white text-sm underline underline-offset-4 decoration-white/40 hover:decoration-white transition-all"
              >
                Conoce más sobre Superación Juvenil →
              </a>
            </div>
          </motion.div>
        </div>

        {/* Nuestros Pilares */}
        <motion.div {...fadeUp} className="text-center mb-10">
          <h3 className="font-display text-3xl sm:text-4xl text-ink">
            Nuestros Pilares
          </h3>
        </motion.div>
        <motion.div {...stagger} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {about.pillars.map((pillar) => (
            <motion.div
              {...staggerChild}
              key={pillar.title}
              className="card-hover rounded-2xl p-6 shadow-card"
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
  );
}
