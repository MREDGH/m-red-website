import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import Reveal from './Reveal';

const ValueCard = ({ value }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState('7em'); // Initial collapsed height
  const { t } = useLanguage();

  useEffect(() => {
    if (isExpanded) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight('7em');
    }
  }, [isExpanded]);

  return (
    <div className="value-card">
      <h3>{value.title}</h3>
      <span className="value-subtitle">{value.subtitle}</span>
      <div
        className="value-description-wrapper"
        style={{ height: height }}
      >
        <div ref={contentRef}>
          <p className={isExpanded ? 'expanded' : ''}>{value.description}</p>
        </div>
      </div>
      <button
        className="read-more-btn"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? t.principles.readLess : t.principles.readMore}
      </button>
    </div>
  );
};

const Values = () => {
  const { t } = useLanguage();

  return (
    <section id="values" className="values section-padding">
      <div className="container">
        <Reveal width="100%">
          <h2 className="text-center">{t.principles.title}</h2>
        </Reveal>
        <div className="values-grid">
          {t.principles.items.map((value, index) => (
            <Reveal key={index} width="100%">
              <ValueCard value={value} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        .values {
          background-color: var(--color-mred-marine);
          color: var(--color-off-white);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .values h2 {
          margin-bottom: 4rem;
          color: var(--color-off-white);
        }

        .values-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2rem;
          align-items: start; /* Prevent items from stretching to row height */
          width: 100%;
        }

        @media (max-width: 768px) {
          .values-grid {
            gap: 1.5rem;
          }
        }

        @media (min-width: 768px) {
          .values-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .values-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .value-card {
          background-color: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 4px;
          transition: transform 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          flex-direction: column;
          /* height: 100%; Removed to allow independent height */
        }

        .value-card:hover {
          transform: translateY(-5px);
          background-color: rgba(255, 255, 255, 0.1);
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
          color: var(--color-off-white);
        }

        .value-subtitle {
          display: block;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.125rem;
          color: var(--color-sustainable-green);
          margin-bottom: 1rem;
          opacity: 0.8;
        }

        .value-description-wrapper {
          position: relative;
          overflow: hidden;
          transition: height 0.5s ease-in-out;
        }

        .value-description-wrapper p {
          margin: 0;
          line-height: 1.6;
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .value-description-wrapper p.expanded {
          -webkit-line-clamp: unset;
        }

        .read-more-btn {
          background: none;
          border: none;
          color: var(--color-sustainable-green);
          cursor: pointer;
          padding: 0;
          margin-top: auto; /* Pushes button to bottom */
          padding-top: 1.5rem; /* Added spacing from text */
          font-weight: 600;
          text-transform: uppercase;
          font-size: 0.75rem;
          letter-spacing: 1px;
          align-self: flex-start;
          transition: color 0.3s ease;
        }

        .read-more-btn:hover {
          color: var(--color-off-white);
          text-decoration: underline;
        }
      `}</style>
    </section>
  );
};

export default Values;
