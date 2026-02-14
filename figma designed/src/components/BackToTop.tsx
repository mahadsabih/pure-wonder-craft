import { useEffect, useState } from 'react';

/**
 * Back-to-Top floating button.
 * Appears when user scrolls past 400px, smoothly scrolls to top on click.
 */
export function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
                position: 'fixed',
                bottom: '40px',
                right: '40px',
                zIndex: 9999,
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                backgroundColor: '#FF6B35',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.3s ease, transform 0.3s ease',
                pointerEvents: visible ? 'auto' : 'none',
            }}
        >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path
                    d="M9 16V2M9 2L2 9M9 2L16 9"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </button>
    );
}
