import { useEffect, useState } from 'react';
import { getPricing, getCategories, saveRegistration } from '../services/dataService';

const Registration = () => {
  const [pricing, setPricing] = useState(null);
  const [categories, setCategories] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    category: '',
    distance: '',
    modality: 'Presencial',
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    Promise.all([getPricing(), getCategories()])
      .then(([pricingData, categoriesData]) => {
        setPricing(pricingData);
        setCategories(categoriesData);
      })
      .catch(console.error);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'El email no es válido';
    }
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es requerido';
    if (!formData.age) newErrors.age = 'La edad es requerida';
    if (!formData.category) newErrors.category = 'La categoría es requerida';
    if (!formData.distance) newErrors.distance = 'La distancia es requerida';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        saveRegistration(formData);
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          age: '',
          category: '',
          distance: '',
          modality: 'Presencial',
        });
        setTimeout(() => setSubmitted(false), 5000);
      } catch (error) {
        console.error('Error al guardar inscripción:', error);
        alert('Hubo un error al procesar tu inscripción. Por favor intenta de nuevo.');
      }
    }
  };

  const getAvailableDistances = () => {
    if (!categories || !formData.category) return [];
    const category = categories.categories.find((c) => c.id === formData.category);
    return category ? category.distances : [];
  };

  const getCurrentPrice = () => {
    if (!pricing) return 0;
    const activePhase = pricing.phases.find((p) => p.active);
    return activePhase ? activePhase.price : pricing.phases[0].price;
  };

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

        {/* Registration Form */}
        <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Formulario de Inscripción
          </h3>

          {submitted && (
            <div className="mb-6 bg-green-100 border-2 border-green-500 text-green-700 px-6 py-4 rounded-2xl flex items-center">
              <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              ¡Inscripción exitosa! Te hemos enviado un correo de confirmación.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <FormField
              label="Nombre Completo"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              placeholder="Juan Pérez"
            />

            <FormField
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              error={errors.email}
              placeholder="juan@ejemplo.com"
            />

            <FormField
              label="Teléfono"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              placeholder="(81) 1234 5678"
            />

            <FormField
              label="Edad"
              name="age"
              type="number"
              value={formData.age}
              onChange={handleChange}
              error={errors.age}
              placeholder="25"
              min="6"
              max="100"
            />

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Categoría *
              </label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.category 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-200 focus:ring-vivamus-sky/30 focus:border-vivamus-sky'
                }`}
              >
                <option value="">Selecciona una categoría</option>
                {categories.categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.ageRange})
                  </option>
                ))}
              </select>
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">{errors.category}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Distancia *
              </label>
              <select
                name="distance"
                value={formData.distance}
                onChange={handleChange}
                disabled={!formData.category}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
                  errors.distance
                    ? 'border-red-500 focus:ring-red-200'
                    : 'border-gray-200 focus:ring-vivamus-sky/30 focus:border-vivamus-sky'
                } ${!formData.category ? 'bg-gray-100 cursor-not-allowed' : ''}`}
              >
                <option value="">
                  {formData.category
                    ? 'Selecciona una distancia'
                    : 'Primero selecciona una categoría'}
                </option>
                {getAvailableDistances().map((distance) => (
                  <option key={distance} value={distance}>
                    {distance.toUpperCase()}
                  </option>
                ))}
              </select>
              {errors.distance && (
                <p className="text-red-500 text-sm mt-1">{errors.distance}</p>
              )}
            </div>

            <div>
              <label className="block text-gray-700 font-bold mb-2">
                Modalidad *
              </label>
              <div className="flex gap-4">
                {['Presencial', 'Virtual'].map((mod) => (
                  <label
                    key={mod}
                    className={`flex-1 flex items-center justify-center px-6 py-3 border-2 rounded-xl cursor-pointer transition-all ${
                      formData.modality === mod
                        ? 'border-vivamus-pink bg-vivamus-pink/10 text-vivamus-pink'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="modality"
                      value={mod}
                      checked={formData.modality === mod}
                      onChange={handleChange}
                      className="sr-only"
                    />
                    <span className="font-medium">{mod}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-vivamus-sky/10 rounded-2xl p-6 border-2 border-vivamus-sky/30">
              <div className="flex justify-between items-center">
                <span className="text-gray-700 font-bold">Total a pagar:</span>
                <span className="text-3xl font-bold text-vivamus-pink">
                  ${getCurrentPrice()} <span className="text-lg">MXN</span>
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-vivamus-pink text-white py-4 rounded-2xl font-bold text-xl hover:bg-vivamus-sky border-3 border-black shadow-vivamus transition-all hover:scale-[1.02] hover:-rotate-0.5"
            >
              ¡Inscribirme Ahora!
            </button>

            <p className="text-sm text-gray-500 text-center">
              * Los campos marcados con asterisco son obligatorios
            </p>
          </form>
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

const FormField = ({ label, name, type, value, onChange, error, placeholder, ...props }) => (
  <div>
    <label className="block text-gray-700 font-bold mb-2">
      {label} *
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all ${
        error 
          ? 'border-red-500 focus:ring-red-200' 
          : 'border-gray-200 focus:ring-vivamus-sky/30 focus:border-vivamus-sky'
      }`}
      {...props}
    />
    {error && (
      <p className="text-red-500 text-sm mt-1">{error}</p>
    )}
  </div>
);

export default Registration;
