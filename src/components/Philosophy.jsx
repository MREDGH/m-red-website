import React from 'react';
import philosophyImg from '../assets/philosophy-update.jpg';
import { useLanguage } from '../contexts/LanguageContext';

import Reveal from './Reveal';

const Philosophy = () => {
  const { t } = useLanguage();

  return (
    <section id="philosophy" className="philosophy section-padding">
      <div className="container">
        <div className="philosophy-grid">
          <div className="philosophy-content">
            <Reveal>
              <h2>{t.focus.title}</h2>
            </Reveal>
            <Reveal>
              <h3>{t.focus.cardTitle}</h3>
              <p>
                {t.focus.description}
              </p>
            </Reveal>


          </div>
          <div className="philosophy-image">
            <Reveal width="100%">
              <img src={philosophyImg} alt="Vitality and Nature" />
            </Reveal>
          </div>
        </div>
      </div>
      <style>{`
        .philosophy {
          background-color: var(--color-off-white);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .philosophy-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: center;
          width: 100%;
        }

        @media (max-width: 768px) {
          .philosophy-grid {
            gap: 2rem;
          }
        }

        @media (min-width: 768px) {
          .philosophy-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        .philosophy-content h2 {
          color: var(--color-mred-marine);
          margin-bottom: 2rem;
        }

        .philosophy-content h3 {
          color: var(--color-sustainable-green);
          margin-top: 1.5rem;
        }

        .philosophy-image img {
          width: 100%;
          height: auto;
          border-radius: 4px;
          box-shadow: 0 10px 20px rgba(0,0,0,0.1);
        }
      `}</style>
    </section>
  );
};

export default Philosophy;
