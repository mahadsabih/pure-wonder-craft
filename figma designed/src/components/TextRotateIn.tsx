import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface TextRotateInProps {
    children: ReactNode;
    /** Animation duration in ms */
    duration?: number;
    /** Delay before animation starts (ms) */
    delay?: number;
    /** Rotation axis: 'x' or 'y' */
    axis?: 'x' | 'y';
    /** Extra styles for the wrapper */
    style?: CSSProperties;
    /** Extra className */
    className?: string;
}

/**
 * 3D rotate-in text animation.
 * Text rotates in from -90° on the chosen axis with scale and opacity,
 * triggered when scrolled into view.
 */
export function TextRotateIn({
    children,
    duration = 800,
    delay = 0,
    axis = 'x',
    style,
    className,
}: TextRotateInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(el);
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const rotateFrom = axis === 'x' ? 'rotateX(-90deg)' : 'rotateY(-90deg)';

    return (
        <div
            ref={ref}
            className={className}
            style={{
                perspective: '800px',
                ...style,
            }}
        >
            <div
                style={{
                    transform: isVisible ? 'rotateX(0deg) rotateY(0deg) scale(1)' : `${rotateFrom} scale(0.85)`,
                    opacity: isVisible ? 1 : 0,
                    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration * 0.6}ms ease ${delay}ms`,
                    transformOrigin: 'center bottom',
                    willChange: 'transform, opacity',
                }}
            >
                {children}
            </div>
        </div>
    );
}
