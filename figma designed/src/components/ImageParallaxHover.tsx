import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface ImageParallaxHoverProps {
    children: ReactNode;
    /** Scale factor on hover (default 1.15) */
    scale?: number;
    /** Movement intensity (default 0.15) */
    intensity?: number;
    /** Transition duration in seconds (default 0.25) */
    duration?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * Wrapper with overflow:hidden — child image/element scales up and shifts
 * toward cursor on hover, creating a parallax-like depth effect.
 */
export function ImageParallaxHover({
    children,
    scale = 1.15,
    intensity = 0.15,
    duration = 0.25,
    style,
    className = '',
}: ImageParallaxHoverProps) {
    const ref = useRef<HTMLDivElement>(null);
    const innerRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = ref.current;
            const inner = innerRef.current;
            if (!el || !inner) return;

            const { left, top, width, height } = el.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const moveX = (x - width / 2) * intensity;
            const moveY = (y - height / 2) * intensity;

            inner.style.transform = `translate(${moveX}px, ${moveY}px) scale(${scale})`;
        },
        [scale, intensity],
    );

    const handleLeave = useCallback(() => {
        const inner = innerRef.current;
        if (!inner) return;
        inner.style.transform = 'translate(0, 0) scale(1)';
    }, []);

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                overflow: 'hidden',
                ...style,
            }}
        >
            <div
                ref={innerRef}
                style={{
                    transition: `transform ${duration}s ease-out`,
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </div>
    );
}
