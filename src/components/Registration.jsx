import { useEffect, useState } from 'react';
import { getPricing, getCategories } from '../services/dataService';

const Registration = () => {
  const [pricing, setPricing] = useState(null);
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    Promise.all([getPricing(), getCategories()])
      .then(([pricingData, categoriesData]) => {
        setPricing(pricingData);
        setCategories(categoriesData);
      })
      .catch(console.error);
  }, []);

  if (!pricing || !categories) {
    return (
      <section id="inscripciones" className="py-20 section-pink">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="inscripciones" className="py-20 section-pink">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-vivamus-pink text-white px-4 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-1">
            ¡ÚNETE A LA CARRERA!
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Inscripciones
          </h2>
        </div>

        {/* Pricing Phases */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Precios por Fase
          </h3>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {pricing.phases.map((phase, index) => (
              <div
                key={phase.id}
                className={`rounded-3xl p-8 border-3 border-black transition-all ${
                  phase.active
                    ? 'bg-vivamus-pink text-white transform scale-105 shadow-vivamus-lg'
                    : 'bg-white text-gray-700 shadow-vivamus hover:scale-[1.02]'
                }`}
              >
                <div className="text-center">
                  <h4 className="text-xl font-bold mb-4">{phase.name}</h4>
                  <div className="text-4xl font-bold mb-2">
                    ${phase.price}
                    <span className="text-lg font-normal ml-1">{phase.currency}</span>
                  </div>
                  <p className={`text-sm ${phase.active ? 'opacity-90' : 'text-gray-500'}`}>
                    {phase.validity}
                  </p>
                  {phase.active && (
                    <span className="inline-block mt-4 bg-white text-vivamus-pink px-4 py-2 rounded-full text-sm font-bold">
                      ¡Fase Activa!
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Categories Table */}
        <div className="mb-12 bg-white rounded-3xl shadow-vivamus border-3 border-black p-8">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Categorías
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-vivamus-sky/10">
                  <th className="px-6 py-4 text-left font-bold text-vivamus-sky rounded-tl-xl">Categoría</th>
                  <th className="px-6 py-4 text-left font-bold text-vivamus-pink">Edad</th>
                  <th className="px-6 py-4 text-left font-bold text-vivamus-yellow rounded-tr-xl" style={{ textShadow: '0 0 5px rgba(255,209,102,0.3)' }}>Distancias</th>
                </tr>
              </thead>
              <tbody>
                {categories.categories.map((category, index) => (
                  <tr key={category.id} className={`border-b border-gray-100 ${index % 2 === 0 ? 'bg-gray-50/50' : ''}`}>
                    <td className="px-6 py-4 font-semibold">{category.name}</td>
                    <td className="px-6 py-4 text-gray-600">{category.ageRange}</td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-2">
                        {category.distances.map((d) => (
                          <span key={d} className="bg-vivamus-sky/20 text-vivamus-sky px-3 py-1 rounded-full text-sm font-medium">
                            {d.toUpperCase()}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Registration Status */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Estado de Inscripciones
          </h3>
          <div className="bg-vivamus-pink/10 border-2 border-vivamus-pink rounded-2xl p-6 text-center">
            <p className="text-2xl font-bold text-vivamus-pink mb-2">
              INSCRIPCIONES PRÓXIMAMENTE
            </p>
            <p className="text-gray-700">
              El enlace directo de registro se habilitará más adelante.
            </p>
          </div>
        </div>

        {/* Kit Pickup Points */}
        <div className="mt-12 max-w-2xl mx-auto bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 text-center">
          <div className="bg-vivamus-yellow/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-vivamus-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 3px rgba(255,209,102,0.5))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            Puntos de Entrega de Kit
          </h3>
          <p className="text-gray-700">
            La entrega de kits se realizará en puntos designados que serán comunicados vía correo
            electrónico. También habrá puntos de entrega en tiendas <span className="font-bold text-vivamus-orange">Merco</span> seleccionadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Registration;
