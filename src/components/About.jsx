import { useEffect, useState } from 'react';
import { getAbout } from '../services/dataService';

const About = () => {
  const [about, setAbout] = useState(null);

  useEffect(() => {
    getAbout().then(setAbout).catch(console.error);
  }, []);

  if (!about) {
    return (
      <section id="nosotros" className="py-20 section-sky">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="nosotros" className="py-20 section-sky">
      <div className="container mx-auto px-4">
        {/* What is Vivamus-Merco */}
        <div className="mb-16 text-center">
          <span className="inline-block bg-vivamus-pink text-white px-4 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-1">
            ¿QUÉ ES?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-900">
            {about.whatIs.title}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {about.whatIs.description}
          </p>
        </div>

        {/* History */}
        <div className="mb-16 bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 md:p-12 transform hover:-rotate-0.5 transition-transform">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-vivamus-sky text-white p-3 rounded-2xl">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              {about.history.title}
            </h2>
          </div>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-4">{about.history.description}</p>
            <p className="text-gray-700">{about.history.consolidation}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-vivamus-sky/20 rounded-2xl p-6 text-center border-2 border-vivamus-sky/30">
                <div className="text-4xl font-bold text-vivamus-sky">{about.history.editions}</div>
                <div className="text-sm text-gray-600 font-medium">Ediciones</div>
              </div>
              <div className="bg-vivamus-pink/20 rounded-2xl p-6 text-center border-2 border-vivamus-pink/30">
                <div className="text-4xl font-bold text-vivamus-pink">{about.history.firstEdition}</div>
                <div className="text-sm text-gray-600 font-medium">Año de inicio</div>
              </div>
            </div>
          </div>
        </div>

        {/* Cause */}
        <div className="mb-16 vivamus-gradient rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12 text-white">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-white/20 p-3 rounded-2xl backdrop-blur-sm">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold">{about.cause.title}</h2>
          </div>
          <p className="text-lg mb-8 opacity-95">{about.cause.description}</p>
          <ul className="space-y-4">
            {about.cause.programs.map((program, index) => (
              <li key={index} className="flex items-start bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <svg
                  className="w-6 h-6 mr-4 flex-shrink-0 mt-0.5 text-vivamus-yellow"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-lg">{program}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 hover:scale-[1.02] transition-transform">
            <div className="bg-vivamus-sky/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-vivamus-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-vivamus-sky">
              {about.mission.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{about.mission.description}</p>
          </div>
          <div className="bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 hover:scale-[1.02] transition-transform">
            <div className="bg-vivamus-pink/20 w-12 h-12 rounded-2xl flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-vivamus-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4 text-vivamus-pink">
              {about.vision.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{about.vision.description}</p>
          </div>
        </div>

        {/* Superación Juvenil Info */}
        <div className="bg-gray-900 text-white rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12 relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-vivamus-sky/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-vivamus-pink/10 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Sobre <span className="text-vivamus-sky">{about.superacionJuvenil.name}</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-vivamus-yellow">Misión</h4>
                <p className="text-gray-300 mb-6">{about.superacionJuvenil.mission}</p>
                <h4 className="text-xl font-semibold mb-4 text-vivamus-yellow">Visión</h4>
                <p className="text-gray-300">{about.superacionJuvenil.vision}</p>
              </div>
              <div>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-4xl font-bold text-vivamus-sky">{about.superacionJuvenil.yearsOfService}+</div>
                    <div className="text-sm text-gray-300">Años de servicio</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-white/20">
                    <div className="text-4xl font-bold text-vivamus-pink">{about.superacionJuvenil.youthsImpacted.toLocaleString()}+</div>
                    <div className="text-sm text-gray-300">Jóvenes impactados</div>
                  </div>
                </div>
                <h4 className="text-xl font-semibold mb-4 text-vivamus-yellow">Metodología</h4>
                <ul className="space-y-3">
                  {about.superacionJuvenil.methodology.map((item, index) => (
                    <li key={index} className="text-gray-300 flex items-start bg-white/5 rounded-xl p-3">
                      <span className="text-vivamus-sky mr-3 font-bold">{index + 1}.</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
