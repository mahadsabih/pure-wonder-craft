import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface TextSlideInProps {
    children: ReactNode;
    /** Direction to slide in from */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Animation duration in ms */
    duration?: number;
    /** Delay before animation starts (ms) */
    delay?: number;
    /** Extra styles */
    style?: CSSProperties;
    /** Extra className */
    className?: string;
}

/**
 * Masked slide-in text animation.
 * Text slides into view from outside a clipping mask,
 * creating a "curtain" reveal effect.
 */
export function TextSlideIn({
    children,
    direction = 'up',
    duration = 700,
    delay = 0,
    style,
    className,
}: TextSlideInProps) {
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

    const getTransform = () => {
        if (isVisible) return 'translate3d(0, 0, 0)';
        switch (direction) {
            case 'up':
                return 'translate3d(0, 110%, 0)';
            case 'down':
                return 'translate3d(0, -110%, 0)';
            case 'left':
                return 'translate3d(-110%, 0, 0)';
            case 'right':
                return 'translate3d(110%, 0, 0)';
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                overflow: 'hidden',
                ...style,
            }}
        >
            <div
                style={{
                    transform: getTransform(),
                    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
                    willChange: 'transform',
                }}
            >
                {children}
            </div>
        </div>
    );
}
