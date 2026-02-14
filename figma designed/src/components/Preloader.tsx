import { useEffect, useState } from 'react';

export function Preloader() {
    const [phase, setPhase] = useState<'loading' | 'fading' | 'done'>('loading');

    useEffect(() => {
        const handleLoad = () => {
            // Minimum time the preloader shows (600ms) for visual impact
            setTimeout(() => {
                setPhase('fading');
                // After fade-out animation completes, remove from DOM
                setTimeout(() => setPhase('done'), 600);
            }, 600);
        };

        // If page already loaded, start fade immediately
        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    if (phase === 'done') return null;

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                zIndex: 99999,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#121212',
                opacity: phase === 'fading' ? 0 : 1,
                transition: 'opacity 0.6s ease',
                pointerEvents: phase === 'fading' ? 'none' : 'auto',
            }}
        >
            {/* Logo text */}
            <div
                style={{
                    fontFamily: "'Teko', sans-serif",
                    fontSize: '64px',
                    fontWeight: 700,
                    color: '#FFFFFF',
                    letterSpacing: '6px',
                    textTransform: 'uppercase',
                    marginBottom: '40px',
                    animation: 'preloaderPulse 1.5s ease-in-out infinite',
                }}
            >
                GEEK
                <span style={{ color: '#FF6B35' }}>PIE</span>
            </div>

            {/* Progress bar */}
            <div
                style={{
                    width: '200px',
                    height: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    overflow: 'hidden',
                }}
            >
                <div
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundColor: '#FF6B35',
                        borderRadius: '2px',
                        animation: 'preloaderBar 1.2s ease-in-out infinite',
                        transformOrigin: 'left center',
                    }}
                />
            </div>

            {/* Keyframes */}
            <style>{`
                @keyframes preloaderPulse {
                    0%, 100% { opacity: 0.7; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.03); }
                }
                @keyframes preloaderBar {
                    0% { transform: translateX(-100%); }
                    50% { transform: translateX(0%); }
                    100% { transform: translateX(100%); }
                }
            `}</style>
        </div>
    );
}
