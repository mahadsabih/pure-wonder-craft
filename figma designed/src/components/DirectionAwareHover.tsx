import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface DirectionAwareHoverProps {
    children: ReactNode;
    /** Overlay content shown on hover */
    overlay?: ReactNode;
    /** Overlay background color */
    overlayColor?: string;
    style?: CSSProperties;
    className?: string;
}

/**
 * Detects which edge the mouse enters from (top/right/bottom/left) and
 * slides an overlay in from that direction. On leave it slides out to the
 * exit edge.
 */
export function DirectionAwareHover({
    children,
    overlay,
    overlayColor = 'rgba(255, 107, 53, 0.85)',
    style,
    className = '',
}: DirectionAwareHoverProps) {
    const ref = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);

    const getDirection = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const el = ref.current;
        if (!el) return 'top';
        const { left, top, width, height } = el.getBoundingClientRect();
        const x = e.clientX - left - width / 2;
        const y = e.clientY - top - height / 2;
        const d = Math.round(Math.atan2(y, x) / 1.57079633 + 5) % 4;
        return (['top', 'right', 'bottom', 'left'] as const)[d];
    }, []);

    const getTransform = (dir: string, out: boolean) => {
        const dist = out ? '100%' : '0%';
        switch (dir) {
            case 'top':
                return `translateY(${out ? '-100%' : dist})`;
            case 'bottom':
                return `translateY(${out ? '100%' : dist})`;
            case 'left':
                return `translateX(${out ? '-100%' : dist})`;
            case 'right':
                return `translateX(${out ? '100%' : dist})`;
            default:
                return 'translate(0,0)';
        }
    };

    const handleEnter = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const ov = overlayRef.current;
            if (!ov) return;
            const dir = getDirection(e);
            // Instantly position from entry edge
            ov.style.transition = 'none';
            ov.style.transform = getTransform(dir, true);
            // Force reflow
            void ov.offsetHeight;
            // Animate to center
            ov.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1)';
            ov.style.transform = 'translate(0,0)';
        },
        [getDirection],
    );

    const handleLeave = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const ov = overlayRef.current;
            if (!ov) return;
            const dir = getDirection(e);
            ov.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1)';
            ov.style.transform = getTransform(dir, true);
        },
        [getDirection],
    );

    return (
        <div
            ref={ref}
            className={className}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{ position: 'relative', overflow: 'hidden', ...style }}
        >
            {children}
            <div
                ref={overlayRef}
                style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundColor: overlayColor,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transform: 'translateY(-100%)',
                    pointerEvents: 'none',
                    zIndex: 2,
                }}
            >
                {overlay}
            </div>
        </div>
    );
}
