import React, { useState, useEffect } from 'react';

const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled upto given distance
    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Set the top cordinate to 0
    // make scrolling smooth
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div className="back-to-top">
            {isVisible && (
                <div onClick={scrollToTop} className="scroll-button">
                    ↑
                </div>
            )}
            <style>{`
                .back-to-top {
                    position: fixed;
                    bottom: 2rem;
                    right: 2rem;
                    z-index: 999;
                }

                .scroll-button {
                    background-color: var(--color-mred-marine);
                    color: var(--color-off-white);
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-size: 1.5rem;
                    cursor: pointer;
                    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                    transition: all 0.3s ease;
                    border: 1px solid rgba(255,255,255,0.1);
                    animation: fadeIn 0.3s;
                }

                .scroll-button:hover {
                    background-color: var(--color-sustainable-green);
                    transform: translateY(-3px);
                }

                @keyframes fadeIn {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default BackToTop;
