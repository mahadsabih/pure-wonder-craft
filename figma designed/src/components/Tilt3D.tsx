import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface Tilt3DProps {
    children: ReactNode;
    /** Maximum tilt angle in degrees (default 10) */
    max?: number;
    /** Perspective in px (default 1000) */
    perspective?: number;
    /** Transition speed in ms (default 250) */
    speed?: number;
    /** Scale on hover (default 1.02) */
    scale?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * Wrapper that tilts children toward the cursor with 3D perspective.
 * Mirrors the vanilla-tilt / hover-tilt effect from the P2 site.
 */
export function Tilt3D({
    children,
    max = 10,
    perspective = 1000,
    speed = 250,
    scale = 1.02,
    style,
    className = '',
}: Tilt3DProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = ref.current;
            if (!el) return;
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = (e.clientX - left) / width; // 0..1
            const y = (e.clientY - top) / height;

            const tiltX = (max * (0.5 - y)).toFixed(2); // rotateX
            const tiltY = (max * (x - 0.5)).toFixed(2); // rotateY

            el.style.transform = `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(${scale},${scale},${scale})`;
        },
        [max, perspective, scale],
    );

    const handleLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    }, [perspective]);

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{
                transformStyle: 'preserve-3d',
                transition: `transform ${speed}ms cubic-bezier(.03,.98,.52,.99)`,
                willChange: 'transform',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
