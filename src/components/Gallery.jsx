import { useEffect, useState } from 'react';
import { getGallery } from '../services/dataService';

const Gallery = () => {
  const [gallery, setGallery] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    getGallery().then(setGallery).catch(console.error);
  }, []);

  if (!gallery) {
    return (
      <section id="galeria" className="py-20 section-yellow">
        <div className="container mx-auto px-4">
          <div className="text-center">Cargando...</div>
        </div>
      </section>
    );
  }

  return (
    <>
      <section id="galeria" className="py-20 section-yellow">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-block bg-vivamus-sky text-white px-4 py-1 rounded-full text-sm font-bold mb-4 transform -rotate-1">
              MOMENTOS ESPECIALES
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Galería
            </h2>
            <p className="text-gray-600 text-lg">
              Revive los mejores momentos de ediciones anteriores
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {gallery.images.map((image, index) => {
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-2', 'rotate-2'];
              const rotation = rotations[index % rotations.length];
              return (
                <div
                  key={image.id}
                  className={`bg-white rounded-2xl shadow-vivamus border-3 border-black overflow-hidden hover:scale-105 transition-all cursor-pointer group ${rotation} hover:rotate-0`}
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.description}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                      <span className="text-white font-bold">Ver más</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-gray-900 font-bold">{image.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="bg-vivamus-pink/20 text-vivamus-pink px-3 py-1 rounded-full text-sm font-medium">
                        {image.edition} Edición
                      </span>
                      <span className="text-gray-500 text-sm">{image.year}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-4xl w-full relative" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white bg-vivamus-pink rounded-full p-3 hover:bg-vivamus-sky transition-colors border-2 border-white"
              aria-label="Cerrar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white rounded-3xl overflow-hidden border-3 border-black shadow-vivamus-lg">
              <img
                src={selectedImage.url}
                alt={selectedImage.description}
                className="w-full h-auto"
              />
              <div className="p-6">
                <p className="text-xl font-bold text-gray-900">
                  {selectedImage.description}
                </p>
                <div className="flex items-center gap-3 mt-3">
                  <span className="bg-vivamus-pink text-white px-4 py-1 rounded-full text-sm font-bold">
                    {selectedImage.edition} Edición
                  </span>
                  <span className="text-gray-600">{selectedImage.year}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
