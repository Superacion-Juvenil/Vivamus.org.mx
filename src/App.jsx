import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';
import Gallery from './components/Gallery';
import FAQ from './components/FAQ';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center vivamus-hero-bg">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-white/30 rounded-full animate-spin border-t-white mx-auto" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 bg-white rounded-full animate-pulse" />
            </div>
          </div>
          <p className="text-xl mt-6 font-bold text-white drop-shadow-lg">
            Cargando Vivamus-Merco...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <EventDetails />
        <Registration />
        <Sponsors />
        <Gallery />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;
