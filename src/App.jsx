import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import EventDetails from './components/EventDetails';
import Registration from './components/Registration';
import Sponsors from './components/Sponsors';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <EventDetails />
        <Registration />
        <Sponsors />
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
