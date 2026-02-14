import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react';

interface TextFadeInProps {
    children: ReactNode;
    /** Direction to fade in from */
    direction?: 'up' | 'down' | 'left' | 'right';
    /** Distance to travel (px) */
    distance?: number;
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
 * Directional fade-in text animation.
 * Text slides in from a direction with opacity fade,
 * triggered when scrolled into view.
 */
export function TextFadeIn({
    children,
    direction = 'up',
    distance = 40,
    duration = 700,
    delay = 0,
    style,
    className,
}: TextFadeInProps) {
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
            { threshold: 0.15 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const getTransform = () => {
        if (isVisible) return 'translate3d(0, 0, 0)';
        switch (direction) {
            case 'up':
                return `translate3d(0, ${distance}px, 0)`;
            case 'down':
                return `translate3d(0, -${distance}px, 0)`;
            case 'left':
                return `translate3d(-${distance}px, 0, 0)`;
            case 'right':
                return `translate3d(${distance}px, 0, 0)`;
        }
    };

    return (
        <div
            ref={ref}
            className={className}
            style={{
                transform: getTransform(),
                opacity: isVisible ? 1 : 0,
                transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
                willChange: 'transform, opacity',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
