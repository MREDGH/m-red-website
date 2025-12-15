import React from 'react';
import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Values from './components/Values';
import Approach from './components/Approach';
import Contact from './components/Contact';
import BackToTop from './components/BackToTop';
import { LanguageProvider } from './contexts/LanguageContext';

import CookieBanner from './components/CookieBanner';

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Hero />
        <Philosophy />
        <Values />
        <Approach />
        <Contact />
        <BackToTop />
        <CookieBanner />
      </div>
    </LanguageProvider>
  );
}

export default App;
