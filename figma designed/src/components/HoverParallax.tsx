import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface HoverParallaxProps {
    children: ReactNode;
    /** Movement intensity multiplier (default 0.05) */
    intensity?: number;
    /** Transition duration in seconds (default 0.3) */
    duration?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * Container where `.parallax-item` children shift toward the cursor
 * with a bounce-like easing, creating a floating parallax effect.
 *
 * Add `data-parallax-depth="2"` to children for deeper movement.
 */
export function HoverParallax({
    children,
    intensity = 0.05,
    duration = 0.3,
    style,
    className = '',
}: HoverParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = ref.current;
            if (!el) return;

            const { left, top, width, height } = el.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const moveX = (x - width / 2) * intensity;
            const moveY = (y - height / 2) * intensity;

            const items = el.querySelectorAll<HTMLElement>('.parallax-item');
            items.forEach((item) => {
                const depth = parseFloat(item.dataset.parallaxDepth || '1');
                item.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
                item.style.transform = `translate(${moveX * depth}px, ${moveY * depth}px)`;
            });
        },
        [intensity, duration],
    );

    const handleLeave = useCallback(() => {
        const el = ref.current;
        if (!el) return;

        const items = el.querySelectorAll<HTMLElement>('.parallax-item');
        items.forEach((item) => {
            item.style.transition = `transform ${duration}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`;
            item.style.transform = 'translate(0, 0)';
        });
    }, [duration]);

    return (
        <div
            ref={ref}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ position: 'relative', ...style }}
        >
            {children}
        </div>
    );
}
