import { useEffect, useState } from 'react';
import { getEventInfo } from '../services/dataService';

const Hero = () => {
  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    getEventInfo().then(setEventInfo).catch(console.error);
  }, []);

  const scrollToRegistration = () => {
    const element = document.getElementById('inscripciones');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!eventInfo) {
    return (
      <section id="inicio" className="vivamus-hero-bg pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <div className="animate-pulse">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="inicio"
      className="vivamus-hero-bg pt-20 min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-32 h-32 rounded-full bg-white/10 blur-2xl" />
      <div className="absolute bottom-40 left-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" />
      
      {/* Main content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text content */}
          <div className="text-center lg:text-left lg:w-1/2">
            {/* Coming soon badge */}
            <div className="inline-block mb-6">
              <span className="bg-white text-vivamus-pink px-6 py-2 rounded-full text-lg md:text-xl font-bold shadow-vivamus border-3 border-black inline-block transform -rotate-2 hover:rotate-0 transition-transform">
                ¡MUY PRONTO!
              </span>
            </div>

            {/* Logo */}
            <h1 className="mb-6">
              <img
                src="/logo-vivamus.png"
                alt="Carrera VIVAMUS"
                className="mx-auto lg:mx-0 h-32 md:h-40 lg:h-48 w-auto object-contain drop-shadow-[3px_3px_0_rgba(0,0,0,0.3)] hover:scale-105 transition-transform"
              />
            </h1>

            {/* Distance badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-6">
              <span className="bg-black text-vivamus-yellow px-6 py-2 rounded-full text-xl md:text-2xl font-bold shadow-vivamus-sm border-2 border-vivamus-yellow">
                5K
              </span>
              <span className="bg-black text-vivamus-sky px-6 py-2 rounded-full text-xl md:text-2xl font-bold shadow-vivamus-sm border-2 border-vivamus-sky">
                10K
              </span>
            </div>

            {/* Event info - canonical date for Vivamus-Merco 2026 */}
            <p className="text-xl md:text-2xl font-bold text-white mb-4 drop-shadow-[2px_2px_0_rgba(0,0,0,0.5)]">
              25 de Octubre 2026
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-medium">
              La carrera más animada de México
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToRegistration}
                className="bg-white text-black px-8 py-4 rounded-full text-xl font-bold hover:bg-vivamus-yellow transition-all shadow-vivamus border-3 border-black hover:scale-105 hover:-rotate-1"
              >
                ¡Inscríbete ahora!
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('evento');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-transparent border-3 border-white text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-white/20 transition-all hover:scale-105"
              >
                Conoce más
              </button>
            </div>
          </div>

          {/* Right side - Event Cards */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md">
              {/* Date Card */}
              <div className="bg-white rounded-2xl p-6 shadow-vivamus border-3 border-black transform hover:scale-105 hover:-rotate-1 transition-all">
                <div className="text-vivamus-pink text-sm font-bold uppercase tracking-wider mb-1">
                  Fecha
                </div>
                <div className="text-gray-900 font-bold text-lg">
                  {eventInfo.date}
                </div>
              </div>

              {/* Location Card */}
              <div className="bg-white rounded-2xl p-6 shadow-vivamus border-3 border-black transform hover:scale-105 hover:rotate-1 transition-all">
                <div className="text-vivamus-sky text-sm font-bold uppercase tracking-wider mb-1">
                  Lugar
                </div>
                <div className="text-gray-900 font-bold text-lg">
                  {eventInfo.location.city}
                </div>
              </div>

              {/* Distances Card */}
              <div className="bg-white rounded-2xl p-6 shadow-vivamus border-3 border-black transform hover:scale-105 hover:rotate-1 transition-all">
                <div className="text-vivamus-yellow text-sm font-bold uppercase tracking-wider mb-1" style={{ textShadow: '0 0 10px rgba(255,209,102,0.5)' }}>
                  Distancias
                </div>
                <div className="text-gray-900 font-bold text-lg">
                  {eventInfo.distances.map((d) => d.name).join(' · ')}
                </div>
              </div>

              {/* Modality Card */}
              <div className="bg-white rounded-2xl p-6 shadow-vivamus border-3 border-black transform hover:scale-105 hover:-rotate-1 transition-all">
                <div className="text-vivamus-teal text-sm font-bold uppercase tracking-wider mb-1">
                  Modalidades
                </div>
                <div className="text-gray-900 font-bold text-lg">
                  {eventInfo.modalities.join(' · ')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 border-2 border-white/50">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;
