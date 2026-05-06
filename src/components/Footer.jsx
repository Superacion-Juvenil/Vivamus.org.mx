import contact from '../data/contact.json';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Top accent bar */}
      <div className="h-1.5 flex">
        <div className="flex-1" style={{ background: '#33B9E5' }} />
        <div className="flex-1" style={{ background: '#F72585' }} />
        <div className="flex-1" style={{ background: '#FFD700' }} />
        <div className="flex-1" style={{ background: '#009B9B' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

          {/* Logo + social */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl overflow-hidden border-2 border-white/20 shrink-0">
              <img src="/logo-vivamus.png" alt="Carrera VIVAMUS" className="w-full h-full object-cover" />
            </div>
            <a
              href="https://www.facebook.com/VivamusMerco"
              target="_blank" rel="noopener noreferrer"
              aria-label="Facebook"
              className="w-8 h-8 rounded-lg border border-white/20 flex items-center justify-center text-gray-400 hover:text-white hover:border-white/50 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>

          {/* Contact inline */}
          <div className="flex flex-col sm:flex-row gap-4 text-xs text-gray-500">
            <a href={`mailto:${contact.email}`} className="hover:text-white transition-colors">
              ✉ {contact.email}
            </a>
            <a href={`tel:${contact.phone.replace(/[\s()]/g, '')}`} className="hover:text-white transition-colors">
              📞 {contact.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()} Carrera VIVAMUS Merco. Todos los derechos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Organizado con <span style={{ color: '#F72585' }}>♥</span> por{' '}
            <span className="text-gray-500 font-bold">Superación Juvenil ABP</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
