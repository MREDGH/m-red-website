import React from 'react';
import Reveal from './Reveal';
import LanguageSwitcher from './LanguageSwitcher';
import { useLanguage } from '../contexts/LanguageContext';


const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <LanguageSwitcher />
      <div className="hero-content text-center">
        <Reveal width="100%">
          <h1>M</h1>
        </Reveal>
        <Reveal width="100%">
          <p className="subtitle">{t.hero.subtitle}</p>
        </Reveal>

        <Reveal width="100%">
          <nav className="hero-nav">
            <button onClick={() => document.getElementById('philosophy').scrollIntoView({ behavior: 'smooth' })}>{t.hero.nav.focus}</button>
            <button onClick={() => document.getElementById('values').scrollIntoView({ behavior: 'smooth' })}>{t.hero.nav.principles}</button>
            <button onClick={() => document.getElementById('approach').scrollIntoView({ behavior: 'smooth' })}>{t.hero.nav.approach}</button>
            <button onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>{t.hero.nav.contact}</button>
          </nav>
        </Reveal>
      </div>
      <style>{`
        .hero {
          height: 100vh;
          background-color: var(--color-mred-marine);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-off-white);
        }

        .hero h1 {
          font-size: 8rem;
          margin-bottom: 0rem;
          line-height: 1;
          letter-spacing: -2px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
          font-family: var(--font-serif);
        }

        @media (max-width: 768px) {
          .hero h1 {
            font-size: 5rem; /* Smaller on mobile */
          }
        }

        .subtitle {
          font-size: 1.5rem;
          margin-bottom: 3rem;
          text-transform: uppercase;
          letter-spacing: 4px;
          font-weight: 300;
        }

        @media (max-width: 768px) {
          .subtitle {
            font-size: 1rem;
            letter-spacing: 2px;
          }
        }

        .hero-nav {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .hero-nav {
            flex-direction: column;
            gap: 1rem;
            align-items: center;
            width: 100%;
          }
          
          .hero-nav button {
            width: 80%; /* Wider touch targets */
          }
        }

        .hero-nav button {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: var(--color-off-white);
          padding: 0.75rem 1.5rem;
          font-family: var(--font-sans);
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .hero-nav button:hover {
          background: var(--color-off-white);
          color: var(--color-mred-marine);
          border-color: var(--color-off-white);
        }
      `}</style>
    </section>
  );
};

export default Hero;
