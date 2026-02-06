import { useEffect, useState } from 'react';
import { getFAQ } from '../services/dataService';

const FAQ = () => {
  const [faqData, setFaqData] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  useEffect(() => {
    getFAQ().then(setFaqData).catch(console.error);
  }, []);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  if (!faqData) {
    return (
      <section id="faq" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-vivamus-yellow text-black px-4 py-1 rounded-full text-sm font-bold mb-4 transform rotate-1">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Preguntas Frecuentes
          </h2>
        </div>

        <div className="space-y-4">
          {faqData.faqs.map((faq, index) => (
            <div
              key={faq.id}
              className={`bg-white rounded-2xl border-3 border-black overflow-hidden transition-all ${
                openIndex === index ? 'shadow-vivamus' : 'shadow-vivamus-sm'
              }`}
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <div className={`p-2 rounded-xl transition-all ${
                  openIndex === index ? 'bg-vivamus-pink text-white rotate-180' : 'bg-vivamus-sky/20 text-vivamus-sky'
                }`}>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-6 py-5 bg-vivamus-sky/5 border-t-2 border-gray-100">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 vivamus-gradient-alt rounded-3xl p-8 md:p-10 text-center text-white border-3 border-black shadow-vivamus">
          <div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4">
            ¿Tienes más preguntas?
          </h3>
          <p className="opacity-95 mb-6 max-w-md mx-auto">
            No dudes en contactarnos, estaremos felices de ayudarte
          </p>
          <a
            href="mailto:vivamus@superacionjuvenil.org"
            className="inline-block bg-white text-vivamus-pink px-8 py-3 rounded-full font-bold hover:bg-gray-100 border-2 border-black shadow-vivamus-sm transition-all hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
