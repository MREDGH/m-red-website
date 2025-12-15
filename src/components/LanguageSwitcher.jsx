import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="language-switcher">
            <button
                className={language === 'en' ? 'active' : ''}
                onClick={() => setLanguage('en')}
            >
                EN
            </button>
            <span className="separator">|</span>
            <button
                className={language === 'nl' ? 'active' : ''}
                onClick={() => setLanguage('nl')}
            >
                NL
            </button>
            <style>{`
        .language-switcher {
          position: absolute;
          top: 2rem;
          right: 2rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          z-index: 100;
        }

        .language-switcher button {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.5);
          font-family: var(--font-sans);
          font-size: 0.9rem;
          font-weight: 600;
          cursor: pointer;
          padding: 0;
          transition: color 0.3s ease;
        }

        .language-switcher button.active {
          color: var(--color-off-white);
        }

        .language-switcher button:hover {
          color: var(--color-off-white);
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
        }

        @media (max-width: 768px) {
            .language-switcher {
                top: 1rem;
                right: 1rem;
            }
        }
      `}</style>
        </div>
    );
};

export default LanguageSwitcher;
