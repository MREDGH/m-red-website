import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const CookieBanner = () => {
    const { t } = useLanguage();
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if consent has already been given or denied
        const consent = localStorage.getItem('cookieConsent');

        if (consent === null) {
            // No choice made yet, show banner
            setIsVisible(true);
        } else if (consent === 'granted') {
            // Already granted, ensure gtag knows
            updateGtagConsent('granted');
        }
    }, []);

    const updateGtagConsent = (status) => {
        if (window.gtag) {
            window.gtag('consent', 'update', {
                'ad_storage': status,
                'analytics_storage': status,
                'ad_user_data': status,
                'ad_personalization': status
            });
            console.log('Cookie consent updated:', status);
        }
    };

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'granted');
        updateGtagConsent('granted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'denied');
        updateGtagConsent('denied');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <>
            <div className="cookie-banner">
                <div className="container">
                    <div className="cookie-content">
                        <p>{t.cookieBanner.message}</p>
                        <div className="cookie-actions">
                            <button
                                onClick={handleDecline}
                                className="btn-cookie btn-decline"
                            >
                                {t.cookieBanner.decline}
                            </button>
                            <button
                                onClick={handleAccept}
                                className="btn-cookie btn-accept"
                            >
                                {t.cookieBanner.accept}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background-color: var(--color-off-white);
          color: var(--color-mred-marine);
          box-shadow: 0 -4px 10px rgba(0,0,0,0.1);
          z-index: 10000;
          padding: 1rem 0;
          animation: slideUp 0.5s ease-out;
          border-top: 1px solid rgba(0,0,0,0.1);
        }

        .cookie-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .cookie-content p {
          margin: 0;
          font-size: 0.9rem;
          flex: 1;
          min-width: 250px;
        }

        .cookie-actions {
          display: flex;
          gap: 1rem;
        }

        .btn-cookie {
          padding: 0.5rem 1.25rem;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 600;
          font-size: 0.85rem;
          transition: all 0.2s ease;
        }

        .btn-accept {
          background-color: var(--color-mred-marine);
          color: var(--color-off-white);
          border: 1px solid var(--color-mred-marine);
        }

        .btn-accept:hover {
          background-color: #0b253c; /* Slightly darker */
        }

        .btn-decline {
          background-color: transparent;
          color: var(--color-mred-marine);
          border: 1px solid var(--color-mred-marine);
        }

        .btn-decline:hover {
          background-color: rgba(13, 59, 102, 0.05);
        }

        @media (max-width: 768px) {
          .cookie-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }
          
          .cookie-actions {
            width: 100%;
            justify-content: flex-end;
          }
        }

        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
        </>
    );
};

export default CookieBanner;
