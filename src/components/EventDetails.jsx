import { useEffect, useState } from 'react';
import { getEventInfo } from '../services/dataService';

const EventDetails = () => {
  const [eventInfo, setEventInfo] = useState(null);

  useEffect(() => {
    getEventInfo().then(setEventInfo).catch(console.error);
  }, []);

  if (!eventInfo) {
    return (
      <section id="evento" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <section id="evento" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-vivamus-sky text-white px-4 py-1 rounded-full text-sm font-bold mb-4 transform rotate-1">
            EL EVENTO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Todo lo que necesitas saber
          </h2>
        </div>

        {/* Date and Location - Hero Card */}
        <div className="vivamus-gradient rounded-3xl shadow-vivamus-lg border-3 border-black p-8 md:p-12 mb-12 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
          
          <div className="relative z-10">
            <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-bold uppercase tracking-wider">Fecha y Lugar</span>
            </div>
            <p className="text-3xl md:text-4xl font-bold mb-4">
              {eventInfo.date}
            </p>
            <p className="text-xl opacity-95 mb-2">{eventInfo.location.full}</p>
            {eventInfo.startTime && (
              <p className="text-lg opacity-90 bg-white/10 inline-block px-4 py-2 rounded-full mt-4">
                Horario de salida: <span className="font-bold">{eventInfo.startTime}</span>
              </p>
            )}
          </div>
        </div>

        {/* Distances */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Distancias Disponibles
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {eventInfo.distances.map((distance, index) => {
              const colors = ['vivamus-sky', 'vivamus-pink', 'vivamus-yellow'];
              const color = colors[index % colors.length];
              return (
                <div
                  key={distance.id}
                  className={`bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 hover:scale-105 transition-all group`}
                >
                  <div className={`text-5xl font-bold text-${color} mb-4 group-hover:scale-110 transition-transform`}>
                    {distance.name}
                  </div>
                  <p className="text-gray-700">{distance.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modalities */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold mb-6 text-center text-gray-900">
            Modalidades
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {eventInfo.modalities.map((modality, index) => (
              <div
                key={modality}
                className={`${index === 0 ? 'bg-vivamus-sky' : 'bg-vivamus-pink'} text-white px-8 py-4 rounded-full font-bold text-lg border-2 border-black shadow-vivamus-sm hover:scale-105 transition-all cursor-default`}
              >
                {modality}
              </div>
            ))}
          </div>
        </div>

        {/* Runner Kit */}
        <div className="mb-12 section-yellow rounded-3xl p-8 md:p-12 border-3 border-black shadow-vivamus">
          <div className="flex items-center gap-4 mb-6 justify-center">
            <div className="bg-vivamus-yellow p-3 rounded-2xl">
              <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Kit del Corredor
            </h3>
          </div>
          <p className="text-center text-gray-600 mb-8 text-lg">
            Todos los participantes reciben:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {eventInfo.runnerKit.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 shadow-vivamus-sm border-2 border-black flex items-start hover:scale-[1.02] transition-transform"
              >
                <div className="bg-vivamus-pink/20 p-2 rounded-xl mr-4">
                  <svg
                    className="w-5 h-5 text-vivamus-pink"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-gray-700 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schedule */}
        <div className="bg-white rounded-3xl shadow-vivamus border-3 border-black p-8 md:p-12">
          <div className="flex items-center gap-4 mb-8 justify-center">
            <div className="bg-vivamus-sky p-3 rounded-2xl">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-3xl font-bold text-gray-900">
              Cronograma del Día
            </h3>
          </div>
          <div className="space-y-3 max-w-2xl mx-auto">
            {eventInfo.schedule.map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-gray-50 rounded-2xl p-4 border-2 border-gray-200 hover:border-vivamus-sky transition-colors"
              >
                <div className="w-24 text-vivamus-pink font-bold text-lg bg-vivamus-pink/10 rounded-xl py-2 px-3 text-center mr-4">
                  {item.time}
                </div>
                <div className="flex-1 text-gray-700 font-medium">{item.activity}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-12 bg-gray-100 rounded-3xl p-8 md:p-12 text-center border-3 border-dashed border-gray-300">
          <div className="bg-gray-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-2 text-gray-900">Mapa del Recorrido</h3>
          <p className="text-gray-500">
            Próximamente: Mapa interactivo del circuito Valle Oriente
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
