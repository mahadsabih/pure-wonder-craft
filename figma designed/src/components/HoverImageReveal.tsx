import { useRef, useCallback, type CSSProperties } from 'react';

interface HoverImageRevealProps {
    /** Content displayed normally */
    children: React.ReactNode;
    /** URL of the image to reveal on hover */
    imageUrl: string;
    /** Width of the floating image (default 280) */
    imageWidth?: number;
    /** Height of the floating image (default 200) */
    imageHeight?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * On hover, a floating preview image follows the cursor with smooth easing.
 * The image scales in from 0 and fades out on leave.
 */
export function HoverImageReveal({
    children,
    imageUrl,
    imageWidth = 280,
    imageHeight = 200,
    style,
    className = '',
}: HoverImageRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const imgRef = useRef<HTMLDivElement>(null);

    const handleMove = useCallback(
        (e: React.MouseEvent<HTMLDivElement>) => {
            const el = containerRef.current;
            const img = imgRef.current;
            if (!el || !img) return;

            const { left, top } = el.getBoundingClientRect();
            const x = e.clientX - left - imageWidth / 2;
            const y = e.clientY - top - imageHeight / 2;

            img.style.transform = `translate(${x}px, ${y}px) scale(1)`;
            img.style.opacity = '1';
        },
        [imageWidth, imageHeight],
    );

    const handleLeave = useCallback(() => {
        const img = imgRef.current;
        if (!img) return;
        img.style.opacity = '0';
        img.style.transform = img.style.transform.replace('scale(1)', 'scale(0.8)');
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            onMouseMove={handleMove}
            onMouseLeave={handleLeave}
            style={{ position: 'relative', ...style }}
        >
            {children}
            <div
                ref={imgRef}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: `${imageWidth}px`,
                    height: `${imageHeight}px`,
                    backgroundImage: `url(${imageUrl})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: '12px',
                    pointerEvents: 'none',
                    opacity: 0,
                    transform: 'translate(0,0) scale(0.8)',
                    transition: 'transform 0.3s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease',
                    zIndex: 10,
                    boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
                }}
            />
        </div>
    );
}
