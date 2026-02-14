import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface SpotlightButtonProps {
    children: ReactNode;
    /** Spotlight colour (default: rgba(255,255,255,0.18)) */
    color?: string;
    style?: CSSProperties;
    className?: string;
}

/**
 * Wraps any element with a circular spotlight that expands from the mouse
 * position on hover, filling the element with a translucent overlay.
 */
export function SpotlightButton({
    children,
    color = 'rgba(255,255,255,0.18)',
    style,
    className = '',
}: SpotlightButtonProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const spotRef = useRef<HTMLSpanElement>(null);

    const handleEnter = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = containerRef.current;
            const spot = spotRef.current;
            if (!el || !spot) return;

            const { left, top, width, height } = el.getBoundingClientRect();
            const mx = e.clientX - left;
            const my = e.clientY - top;

            // radius = distance to farthest corner
            const maxR = Math.max(
                Math.hypot(mx, my),
                Math.hypot(mx - width, my),
                Math.hypot(mx, my - height),
                Math.hypot(mx - width, my - height),
            );

            spot.style.left = `${mx}px`;
            spot.style.top = `${my}px`;
            spot.style.width = `${maxR * 2}px`;
            spot.style.height = `${maxR * 2}px`;
            spot.style.opacity = '1';
            spot.style.transform = 'translate(-50%,-50%) scale(1)';
        },
        [],
    );

    const handleLeave = useCallback(() => {
        const spot = spotRef.current;
        if (!spot) return;
        spot.style.opacity = '0';
        spot.style.transform = 'translate(-50%,-50%) scale(0)';
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{ position: 'relative', overflow: 'hidden', ...style }}
        >
            <span
                ref={spotRef}
                style={{
                    position: 'absolute',
                    borderRadius: '50%',
                    backgroundColor: color,
                    pointerEvents: 'none',
                    transform: 'translate(-50%,-50%) scale(0)',
                    opacity: 0,
                    transition:
                        'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s ease',
                    zIndex: 0,
                }}
                aria-hidden="true"
            />
            <span style={{ position: 'relative', zIndex: 1, display: 'contents' }}>
                {children}
            </span>
        </div>
    );
}
