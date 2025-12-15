import React, { useEffect, useRef, useState } from 'react';

const Reveal = ({ children, width = 'fit-content', fullHeight = false }) => {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Toggle visibility based on intersection state
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px 0px -50px 0px', // Trigger slightly before bottom
                threshold: 0.15,
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} style={{ width, overflow: 'hidden', height: fullHeight ? '100%' : 'auto' }}>
            <div
                style={{
                    height: fullHeight ? '100%' : 'auto',
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
                    // Combined transition for smooth bidirectional effect
                    transition: 'opacity 0.8s cubic-bezier(0.5, 0, 0, 1), transform 0.8s cubic-bezier(0.5, 0, 0, 1)',
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default Reveal;
