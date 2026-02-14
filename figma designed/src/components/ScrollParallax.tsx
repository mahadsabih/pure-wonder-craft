import { useRef, useEffect, type ReactNode, type CSSProperties } from 'react';

interface ScrollParallaxProps {
    children: ReactNode;
    /** Parallax speed factor. Positive values scroll slower, negative values scroll faster (default 0.3) */
    speed?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * Translates its children along Y based on scroll position,
 * creating a depth/parallax effect as the user scrolls.
 */
export function ScrollParallax({
    children,
    speed = 0.3,
    style,
    className = '',
}: ScrollParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let raf: number;
        const el = ref.current;
        if (!el) return;

        const onScroll = () => {
            raf = requestAnimationFrame(() => {
                const rect = el.getBoundingClientRect();
                const scrollY = window.scrollY;
                const elTop = rect.top + scrollY;
                const viewH = window.innerHeight;

                // Only animate when element is in viewport
                if (rect.bottom > 0 && rect.top < viewH) {
                    const offset = (scrollY - elTop) * speed;
                    el.style.transform = `translateY(${offset}px)`;
                }
            });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(raf);
        };
    }, [speed]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ willChange: 'transform', ...style }}
        >
            {children}
        </div>
    );
}
