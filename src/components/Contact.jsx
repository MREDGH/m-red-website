import React, { useState } from 'react';
import Reveal from './Reveal';
import { useLanguage } from '../contexts/LanguageContext';
import DisclaimerModal from './DisclaimerModal';

const Contact = () => {
  const { t } = useLanguage();
  const [isDisclaimerOpen, setIsDisclaimerOpen] = useState(false);

  return (
    <footer id="contact" className="contact section-padding">
      <div className="container text-center">
        <Reveal width="100%">
          <h2>{t.contact.title}</h2>
        </Reveal>
        <Reveal width="100%">
          <p className="contact-intro">
            {t.contact.intro}
          </p>
        </Reveal>
        <Reveal width="100%">
          <div className="contact-actions">

            <a href="mailto:info@m-red.tech" className="btn btn-secondary">{t.contact.button}</a>
          </div>
        </Reveal>

        <div className="footer-info">
          <div className="footer-column">
            <h4>M Real Estate Development</h4>
            <p>{t.contact.footer.tagline}</p>
          </div>
          <div className="footer-column">
            <h4>{t.contact.footer.contactTitle}</h4>
            <p><a href="mailto:info@m-red.tech" style={{ color: 'inherit', textDecoration: 'none' }}>info@m-red.tech</a></p>
            <p><a href="https://linkedin.com/company/m-realestatedevelopment" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>{t.contact.footer.linkedin}</a></p>
          </div>
          <div className="footer-column">
            <h4>{t.contact.footer.workWithTitle}</h4>
            {t.contact.footer.workWith.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </div>

        <div className="copyright">
          <p>
            &copy; {new Date().getFullYear()} {t.contact.footer.legal}
            <span className="footer-separator">|</span>
            {t.contact.footer.rights}
            <span className="footer-separator">|</span>
            <button
              onClick={() => setIsDisclaimerOpen(true)}
              style={{
                background: 'none',
                border: 'none',
                color: 'inherit',
                fontSize: 'inherit',
                cursor: 'pointer',
                opacity: 0.8,
                textDecoration: 'none'
              }}
            >
              {t.contact.disclaimer.linkText}
            </button>
          </p>
        </div>
      </div>

      <DisclaimerModal
        isOpen={isDisclaimerOpen}
        onClose={() => setIsDisclaimerOpen(false)}
        title={t.contact.disclaimer.title}
        content={t.contact.disclaimer.content}
      />
      <style>{`
        .contact {
          background-color: var(--color-mred-marine);
          color: var(--color-off-white);
          padding-bottom: 2rem;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        .contact h2 {
          color: var(--color-off-white);
          margin-bottom: 1.5rem;
        }

        .contact-intro {
          max-width: 600px;
          margin: 0 auto 3rem;
          font-size: 1.25rem;
          opacity: 0.9;
        }

        .contact-actions {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 5rem;
        }

        .btn-secondary {
          background-color: transparent;
          border: 1px solid var(--color-off-white);
          color: var(--color-off-white);
          padding: 1rem 2rem;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease;
        }

        .btn-secondary:hover {
          background-color: var(--color-off-white);
          color: var(--color-mred-marine);
        }

        .footer-info {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          padding-top: 4rem;
          margin-bottom: 3rem;
          text-align: left;
        }

        @media (max-width: 768px) {
          .footer-info {
            gap: 2rem;
            padding-top: 2rem;
            text-align: center;
          }
        }

        @media (min-width: 768px) {
          .footer-info {
            grid-template-columns: repeat(3, 1fr);
            text-align: center;
          }
        }

        .footer-column h4 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--color-sustainable-green);
        }

        .footer-column p {
          font-size: 1rem;
          opacity: 0.8;
          margin-bottom: 0.5rem;
        }

        .copyright {
          font-size: 0.6rem;
          opacity: 0.6;
          margin-top: 2rem;
        }

        .footer-separator {
          margin: 0 0.75rem;
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .copyright p {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
          }
          .footer-separator {
            display: none;
          }
        }
      `}</style>
    </footer>
  );
};

export default Contact;
