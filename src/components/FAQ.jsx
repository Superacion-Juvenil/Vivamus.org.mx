import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionDivider from './ui/SectionDivider';
import FloatingDecorators from './ui/FloatingDecorators';
import faqData from '../data/faq.json';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.45, ease: 'easeOut' },
};

// Remove the virtual-only FAQ item (index 2 about not being able to attend)
const faqs = faqData.faqs.filter((f) => f.id !== 3);

export default function FAQ() {
  const [open, setOpen] = useState(null);

  const toggle = (id) => setOpen(open === id ? null : id);

  return (
    <>
      <SectionDivider color="#33B9E5" direction="down" height={60} />
      <section
        id="faq"
        className="relative py-16 overflow-hidden"
        style={{ background: '#33B9E5' }}
      >
        <FloatingDecorators colors={['#F72585', '#FFD700', '#fff', '#000', '#F72585', '#FFD700', '#fff', '#009B9B']} />

        <div className="relative z-10 max-w-3xl mx-auto px-4">

          {/* Heading */}
          <motion.div {...fadeUp} className="text-center mb-10">
            <span className="inline-block font-bold text-xs uppercase tracking-widest px-4 py-1 rounded-full border-3 border-black mb-4 bg-black text-white">
              DUDAS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-black">
              ¿Tienes dudas?
            </h2>
          </motion.div>

          {/* Accordion */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.08 }}
            className="space-y-3 mb-10"
          >
            {faqs.map((faq, i) => {
              const isOpen = open === faq.id;
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.35 }}
                  className="rounded-2xl border-3 border-black overflow-hidden"
                  style={{ boxShadow: isOpen ? '4px 4px 0 #000' : '2px 2px 0 #000' }}
                >
                  <button
                    onClick={() => toggle(faq.id)}
                    className="w-full flex items-center justify-between px-5 py-4 text-left transition-colors duration-150 min-h-[56px]"
                    style={{ background: isOpen ? '#000' : '#fff' }}
                    aria-expanded={isOpen}
                  >
                    <span
                      className="font-bold text-base pr-4 leading-snug"
                      style={{ color: isOpen ? '#fff' : '#000' }}
                    >
                      {faq.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="font-display text-2xl shrink-0"
                      style={{ color: isOpen ? '#FFD700' : '#000' }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 py-4 border-t-3 border-black bg-white">
                          <p className="text-gray-800 text-sm leading-relaxed font-medium">
                            {faq.answer}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA */}
          <motion.div
            {...fadeUp}
            className="neo-card-lg rounded-2xl p-6 sm:p-8 bg-white text-center"
          >
            <p className="font-bold text-black text-base mb-4">
              ¿Más preguntas? ¡Escríbenos!
            </p>
            <a
              href="mailto:carrera@superacionjuvenil.org"
              className="inline-block font-bold text-white px-8 py-3 rounded-full border-3 border-black shadow-neo transition-all duration-150 hover:translate-x-1 hover:translate-y-1 hover:shadow-none active:translate-x-1 active:translate-y-1 active:shadow-none"
              style={{ background: '#F72585' }}
            >
              carrera@superacionjuvenil.org →
            </a>
          </motion.div>
        </div>
      </section>
      <SectionDivider color="#33B9E5" direction="up" height={60} />
    </>
  );
}
