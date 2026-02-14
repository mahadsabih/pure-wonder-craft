import { useRef, useCallback, type ReactNode, type CSSProperties } from 'react';

interface MagneticButtonProps {
    children: ReactNode;
    /** How strongly the button follows the cursor (0–1, default 0.3) */
    intensity?: number;
    /** Additional styles for the outer wrapper */
    style?: CSSProperties;
    /** Extra class name for the outer wrapper */
    className?: string;
}

export function MagneticButton({
    children,
    intensity = 0.3,
    style,
    className,
}: MagneticButtonProps) {
    const wrapperRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = wrapperRef.current;
            if (!el) return;

            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            el.style.transform = `translate(${x * intensity}px, ${y * intensity}px)`;
        },
        [intensity]
    );

    const handleMouseLeave = useCallback(() => {
        const el = wrapperRef.current;
        if (!el) return;
        el.style.transform = 'translate(0px, 0px)';
    }, []);

    return (
        <div
            ref={wrapperRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className={className}
            style={{
                display: 'inline-block',
                transition: 'transform 0.25s cubic-bezier(0.33, 1, 0.68, 1)',
                willChange: 'transform',
                ...style,
            }}
        >
            {children}
        </div>
    );
}
