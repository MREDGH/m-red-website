import React, { useState } from 'react';
import Reveal from './Reveal';
import { useLanguage } from '../contexts/LanguageContext';

const Approach = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="approach" className="approach section-padding">
      <div className="container">
        <div className="approach-grid">

          <div className="approach-intro">
            <Reveal>
              <h2>{t.approach.title}</h2>
            </Reveal>
            <Reveal>
              <span className="subtitle">{t.approach.subtitle}</span>
            </Reveal>
            <Reveal>
              <p className="intro-text">
                {t.approach.intro}
              </p>
            </Reveal>
          </div>

          <div className="approach-accordion">
            {t.approach.steps.map((step, index) => (
              <Reveal key={index} width="100%">
                <div
                  className={`accordion-item ${activeStep === index ? 'active' : ''}`}
                  onClick={() => setActiveStep(index)}
                >
                  <div className="accordion-header">
                    <span className="step-number">{step.number}</span>
                    <div className="step-titles">
                      <h3>{step.title}</h3>
                      <span className="step-subtitle">{step.subtitle}</span>
                    </div>
                    <span className="accordion-icon">{activeStep === index ? '−' : '+'}</span>
                  </div>

                  <div className="accordion-content-wrapper">
                    <div className="accordion-content">
                      <p>{step.content}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </div>

      <style>{`
        .approach {
          background-color: var(--color-off-white);
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .approach-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          width: 100%;
        }

        @media (max-width: 768px) {
          .approach-grid {
            gap: 2rem;
          }

          .step-number {
             font-size: 2rem;
             min-width: 2.5rem;
          }
        }

        @media (min-width: 1024px) {
          .approach-grid {
            grid-template-columns: 0.8fr 1.2fr;
            gap: 6rem;
            align-items: start;
          }
        }

        /* Intro Section */
        .approach-intro h2 {
          color: var(--color-mred-marine);
          margin-bottom: 0.5rem;
          font-size: 3rem; 
        }

        .approach-intro .subtitle {
          display: block;
          font-family: var(--font-sans);
          font-size: 1.25rem;
          line-height: 1.4;
          text-transform: uppercase;
          letter-spacing: 2px;
          color: var(--color-sustainable-green);
          margin-bottom: 2rem;
          font-weight: 700;
        }

        .intro-text {
          font-size: 1.05rem;
          line-height: 1.8;
          color: var(--color-text-dark);
        }

        /* Accordion Section */
        .approach-accordion {
          border-top: 1px solid rgba(8, 32, 50, 0.1);
        }

        .accordion-item {
          border-bottom: 1px solid rgba(8, 32, 50, 0.1);
          cursor: pointer;
          transition: background-color 0.3s ease;
        }

        .accordion-item:hover {
          background-color: rgba(255, 255, 255, 0.5);
        }

        .accordion-header {
          display: flex;
          align-items: baseline;
          padding: 2rem 0;
          gap: 2rem;
        }

        .step-number {
          font-family: var(--font-serif);
          font-size: 2.5rem;
          color: var(--color-mred-marine);
          opacity: 0.3;
          font-weight: 700;
          min-width: 3rem;
          transition: opacity 0.3s;
        }

        .accordion-item.active .step-number {
          opacity: 1;
        }

        .step-titles {
          flex: 1;
        }

        .accordion-item h3 {
          font-size: 1.5rem;
          color: var(--color-mred-marine);
          margin-bottom: 0.25rem;
          transition: color 0.3s;
        }

        .accordion-item.active h3 {
          color: var(--color-sustainable-green); /* Highlight active title */
        }

        .step-subtitle {
          display: block;
          font-family: var(--font-serif);
          font-style: italic;
          font-size: 1.125rem;
          color: var(--color-sustainable-green);
          opacity: 0.8;
        }

        .accordion-icon {
          font-size: 2rem;
          color: var(--color-mred-marine);
          font-weight: 300;
          opacity: 0.5;
        }
        
        /* Content Expansion */
        .accordion-content-wrapper {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .accordion-item.active .accordion-content-wrapper {
          max-height: 300px; /* Ample height */
        }

        .accordion-content {
          padding-bottom: 2rem;
          padding-left: 5rem; /* Indent matching number width */
          padding-right: 2rem;
        }
        
        @media (max-width: 768px) {
           .accordion-content {
              padding-left: 0;
           }
           
           .accordion-header {
              flex-wrap: wrap;
              gap: 1rem;
           }
           
           .step-titles {
             width: 100%;
             order: 3;
           }
           
           .step-number {
             order: 1;
           }
           
           .accordion-icon {
             order: 2;
             margin-left: auto;
           }
        }

        .accordion-content p {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--color-text-dark);
        }
      `}</style>
    </section>
  );
};

export default Approach;
