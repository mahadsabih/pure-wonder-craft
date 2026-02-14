import { useEffect, useRef, useState, useCallback } from 'react';

interface AnimatedCounterProps {
    /** Target number to count up to */
    value: number;
    /** Duration of the animation in ms (default 2000) */
    duration?: number;
    /** Easing function — 'easeOut' decelerates toward end */
    easing?: 'linear' | 'easeOut';
}

export function AnimatedCounter({
    value,
    duration = 2000,
    easing = 'easeOut',
}: AnimatedCounterProps) {
    const [displayValue, setDisplayValue] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    const animate = useCallback(() => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;

        const start = performance.now();
        const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);

            // Apply easing
            const easedProgress =
                easing === 'easeOut'
                    ? 1 - Math.pow(1 - progress, 3) // cubic ease-out
                    : progress;

            setDisplayValue(Math.floor(easedProgress * value));

            if (progress < 1) {
                requestAnimationFrame(step);
            } else {
                setDisplayValue(value);
            }
        };

        requestAnimationFrame(step);
    }, [value, duration, easing]);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animate();
                    observer.unobserve(el);
                }
            },
            { threshold: 0.3 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [animate]);

    return <span ref={ref}>{displayValue}</span>;
}
