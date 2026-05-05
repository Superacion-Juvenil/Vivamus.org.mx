import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import pricing from '../data/pricing.json';
import categories from '../data/categories.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

function getActivePhase() {
  const today = new Date();
  for (const phase of pricing.phases) {
    const from = phase.from ? new Date(phase.from) : null;
    const until = phase.until ? new Date(phase.until) : null;
    if (from && until && today >= from && today <= until) return phase;
    if (!from && until && today <= until) return phase;
    if (from && !until && today >= from) return phase;
  }
  return pricing.phases[0];
}

const activePhase = getActivePhase();

export default function Registration() {
  const [email, setEmail] = useState('');
  const [notified, setNotified] = useState(false);
  const [emailError, setEmailError] = useState('');

  const handleNotify = (e) => {
    e.preventDefault();
    if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Ingresa un correo válido');
      return;
    }
    const saved = JSON.parse(localStorage.getItem('vivamusNotifyEmails') || '[]');
    if (!saved.includes(email)) {
      localStorage.setItem('vivamusNotifyEmails', JSON.stringify([...saved, email]));
    }
    setNotified(true);
    setEmail('');
    setEmailError('');
  };

  return (
    <>
      <section
        id="inscripciones"
        className="relative py-16 overflow-hidden"
        style={{ background: '#F72585' }}
      >
        <FloatingDecorators colors={['#FFD700', '#ffffff', '#33B9E5', '#000', '#FFD700', '#ffffff', '#33B9E5', '#000']} />

        <div className="relative z-10 max-w-6xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-12">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              INSCRIPCIONES
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white text-shadow-neo">
              ¡Corre con nosotros!
            </h2>
          </motion.div>

          {/* Pricing cards */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-10"
          >
            {pricing.phases.map((phase) => {
              const isActive = phase.id === activePhase.id;
              return (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="rounded-2xl border-3 border-black p-6 text-center relative"
                  style={{
                    background: isActive ? '#FFD700' : '#fff',
                    transform: isActive ? 'scale(1.05)' : 'scale(1)',
                    boxShadow: isActive ? '6px 6px 0 #000' : '4px 4px 0 #000',
                  }}
                >
                  {isActive && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold px-3 py-1 rounded-full border-2 border-black pulse-badge whitespace-nowrap">
                      ¡Precio actual!
                    </span>
                  )}
                  <h3 className="font-display text-xl sm:text-2xl text-black mb-3">{phase.name}</h3>
                  <div className="font-display text-4xl sm:text-5xl text-black mb-1">
                    ${phase.price}
                    <span className="text-base font-sans font-bold ml-1">MXN</span>
                  </div>
                  <p className="text-xs font-bold text-gray-700 mt-2">{phase.validity}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Categories table */}
          <motion.div {...fadeUp} className="neo-card-lg rounded-2xl p-6 sm:p-8 mb-10 bg-white overflow-x-auto">
            <h3 className="font-display text-2xl sm:text-3xl text-black mb-6 text-center">Categorías</h3>
            <table className="w-full min-w-[400px]">
              <thead>
                <tr style={{ background: '#33B9E5' }}>
                  <th className="px-4 py-3 text-left font-bold text-black text-sm rounded-tl-xl border-b-3 border-black">Categoría</th>
                  <th className="px-4 py-3 text-left font-bold text-black text-sm border-b-3 border-black">Edad</th>
                  <th className="px-4 py-3 text-left font-bold text-black text-sm rounded-tr-xl border-b-3 border-black">Distancias</th>
                </tr>
              </thead>
              <tbody>
                {categories.categories.map((cat, i) => (
                  <tr key={cat.id} style={{ background: i % 2 === 0 ? '#fff' : '#e6f7fb' }}>
                    <td className="px-4 py-3 font-bold text-sm border-b border-black/10">{cat.name}</td>
                    <td className="px-4 py-3 text-sm text-gray-700 border-b border-black/10">{cat.ageRange}</td>
                    <td className="px-4 py-3 border-b border-black/10">
                      <div className="flex gap-2 flex-wrap">
                        {cat.distances.map((d) => (
                          <span
                            key={d}
                            className="text-xs font-bold px-3 py-1 rounded-full border-2 border-black"
                            style={{ background: d === '5k' ? '#F72585' : '#009B9B', color: '#fff' }}
                          >
                            {d.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>

          {/* Coming soon / notify-me */}
          <motion.div
            {...fadeUp}
            className="max-w-xl mx-auto rounded-2xl border-3 border-black p-8 sm:p-10 text-center relative overflow-hidden"
            style={{ background: '#000' }}
          >
            <FloatingDecorators colors={['#FFD700', '#F72585', '#33B9E5', '#fff', '#FFD700', '#F72585', '#33B9E5', '#fff']} />
            <div className="relative z-10">
              <span className="inline-block font-display text-3xl sm:text-4xl text-white text-shadow-neo mb-3 pulse-badge">
                🔜 PRÓXIMAMENTE
              </span>
              <p className="text-white/80 font-bold text-sm mb-6">
                Las inscripciones abren pronto. ¡Déjanos tu correo y te avisamos primero!
              </p>

              <AnimatePresence mode="wait">
                {notified ? (
                  <motion.div
                    key="confirmed"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="bg-white rounded-xl border-3 border-black p-4"
                  >
                    <p className="font-bold text-black">✅ ¡Listo! Te avisaremos cuando abran las inscripciones.</p>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleNotify}
                    className="flex flex-col sm:flex-row gap-3"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="flex-1">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value); setEmailError(''); }}
                        placeholder="tu@correo.com"
                        className="w-full px-4 py-3 rounded-xl border-3 border-black font-bold text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder:font-normal"
                        style={{ background: '#FFD700' }}
                      />
                      {emailError && (
                        <p className="text-yellow-300 text-xs font-bold mt-1 text-left">{emailError}</p>
                      )}
                    </div>
                    <button
                      type="submit"
                      className="px-6 py-3 rounded-xl font-bold text-white border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none whitespace-nowrap"
                      style={{ background: '#F72585' }}
                    >
                      Avísame
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Kit pickup */}
          <motion.div {...fadeUp} className="mt-8 max-w-xl mx-auto neo-card rounded-2xl p-6 bg-white text-center">
            <p className="text-sm font-bold text-gray-800">
              📦 La entrega de kits se realizará en tiendas <strong>Merco</strong> seleccionadas y puntos designados. Te notificaremos por correo.
            </p>
          </motion.div>
        </div>
      </section>
      <SectionDivider color="#F72585" direction="up" height={60} />
    </>
  );
}
