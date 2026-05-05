import { useEffect, useState } from 'react';
import { getSponsors } from '../services/dataService';

const Sponsors = () => {
  const [sponsors, setSponsors] = useState(null);

  useEffect(() => {
    getSponsors().then(setSponsors).catch(console.error);
  }, []);

  if (!sponsors) {
    return (
      <section id="patrocinadores" className="py-20 section-sky">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  const levelColors = {
    'Diamante': 'from-purple-500 to-purple-700',
    'Oro': 'from-yellow-400 to-yellow-600',
    'Plata': 'from-gray-400 to-gray-600',
    'Bronce': 'from-orange-600 to-orange-800',
    'Aliado': 'from-vivamus-sky to-vivamus-teal',
  };

  return (
    <section id="patrocinadores" className="py-20 section-sky">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-vivamus-pink text-white px-4 py-1 rounded-full text-sm font-bold mb-4 transform rotate-1">
            PATROCINADORES
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Patrocinadores
          </h2>
        </div>

        {/* Main Sponsor */}
        <div className="mb-16 vivamus-gradient rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12 text-white text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-bold mb-6 uppercase tracking-wider">
              Patrocinador Principal
            </span>
            <div className="mb-6">
              <div className="text-5xl md:text-6xl font-bold mb-4">{sponsors.mainSponsor.name}</div>
              <p className="text-lg opacity-95 max-w-2xl mx-auto">
                {sponsors.mainSponsor.description}
              </p>
            </div>
            {sponsors.mainSponsor.logo && (
              <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
                <img
                  src={sponsors.mainSponsor.logo}
                  alt={`Logo ${sponsors.mainSponsor.name}`}
                  className="h-20 md:h-28 mx-auto object-contain"
                />
              </div>
            )}
          </div>
        </div>

        {/* Sponsor Levels */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Paquetes de Patrocinio
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.sponsorLevels.map((level) => (
              <div
                key={level.level}
                className="bg-white rounded-3xl shadow-vivamus border-3 border-black overflow-hidden hover:scale-[1.02] transition-all"
              >
                {/* Level Header */}
                <div className={`bg-gradient-to-r ${levelColors[level.level] || 'from-gray-500 to-gray-700'} p-5 text-white text-center`}>
                  <h4 className="text-2xl font-bold mb-1">
                    {level.level}
                  </h4>
                  <div className="text-lg font-medium opacity-90">
                    {level.investment}
                  </div>
                </div>
                {/* Benefits */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {level.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-gray-700">
                        <div className="bg-vivamus-sky/20 p-1 rounded-lg mr-3 mt-0.5">
                          <svg
                            className="w-4 h-4 text-vivamus-sky"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Sponsors */}
        {sponsors.otherSponsors && sponsors.otherSponsors.length > 0 ? (
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
              Otros Patrocinadores
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {sponsors.otherSponsors.map((sponsor, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl shadow-vivamus-sm border-2 border-black p-6 flex items-center justify-center hover:scale-105 transition-all"
                >
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-h-16 object-contain"
                    />
                  ) : (
                    <span className="text-gray-700 font-bold text-center">{sponsor.name}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="mb-12 bg-white rounded-3xl p-8 text-center border-3 border-black shadow-vivamus">
            <h3 className="text-2xl font-bold mb-3 text-gray-900">
              Más patrocinadores próximamente
            </h3>
            <p className="text-gray-600">
              Al momento, Merco es el único patrocinador confirmado.
            </p>
          </div>
        )}

        {/* Contact for Sponsorship */}
        <div className="bg-white rounded-3xl p-8 md:p-10 text-center border-3 border-black shadow-vivamus">
          <div className="bg-vivamus-yellow/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-vivamus-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ filter: 'drop-shadow(0 0 3px rgba(255,209,102,0.5))' }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">
            ¿Interesado en ser patrocinador?
          </h3>
          <p className="text-gray-600 mb-6 max-w-md mx-auto">
            Únete a nuestra causa y apoya la formación de jóvenes líderes
          </p>
          <a
            href="mailto:vivamus@superacionjuvenil.org?subject=Interesado en Patrocinio"
            className="inline-block bg-vivamus-pink text-white px-8 py-3 rounded-full font-bold hover:bg-vivamus-sky border-2 border-black shadow-vivamus-sm transition-all hover:scale-105"
          >
            Contáctanos
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
