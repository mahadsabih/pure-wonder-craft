import { useEffect, useRef, useState, type ReactNode } from 'react';

interface ScrollRevealProps {
    children: ReactNode;
    /** Animation direction: 'up' slides from below, 'left'/'right' from sides */
    direction?: 'up' | 'left' | 'right';
    /** Delay before animation starts (ms) */
    delay?: number;
    /** Animation duration (ms) */
    duration?: number;
    /** How far the element travels (px) */
    distance?: number;
    /** Trigger threshold (0-1) — fraction of element visible before triggering */
    threshold?: number;
    /** Starting opacity (default 0) */
    fromOpacity?: number;
    /** Ending opacity (default 1) */
    toOpacity?: number;
}

export function ScrollReveal({
    children,
    direction = 'up',
    delay = 0,
    duration = 900,
    distance = 50,
    threshold = 0.1,
    fromOpacity = 0,
    toOpacity = 1,
}: ScrollRevealProps) {
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
            { threshold }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [threshold]);

    const getTransform = () => {
        if (isVisible) return 'translate3d(0, 0, 0)';
        switch (direction) {
            case 'up':
                return `translate3d(0, ${distance}px, 0)`;
            case 'left':
                return `translate3d(-${distance}px, 0, 0)`;
            case 'right':
                return `translate3d(${distance}px, 0, 0)`;
        }
    };

    return (
        <div
            ref={ref}
            style={{
                transform: getTransform(),
                opacity: isVisible ? toOpacity : fromOpacity,
                transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, opacity ${duration}ms ease ${delay}ms`,
                willChange: 'transform, opacity',
            }}
        >
            {children}
        </div>
    );
}
