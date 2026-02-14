import { useRef, useEffect, useCallback, type ReactNode, type CSSProperties } from 'react';

interface SocialLink {
    icon: ReactNode;
    href: string;
    label?: string;
}

interface SocialRadialBurstProps {
    /** The card content */
    children: ReactNode;
    /** Social links to burst in */
    links: SocialLink[];
    style?: CSSProperties;
    className?: string;
}

/**
 * On hover over the parent, social icons fly in from random directions.
 * On leave they fly back out to new random positions.
 */
export function SocialRadialBurst({
    children,
    links,
    style,
    className = '',
}: SocialRadialBurstProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const iconsRef = useRef<(HTMLAnchorElement | null)[]>([]);

    const randomOffset = () => {
        const dirs = [
            { x: '-120%', y: '0%' },
            { x: '120%', y: '0%' },
            { x: '0%', y: '-120%' },
            { x: '0%', y: '120%' },
        ];
        return dirs[Math.floor(Math.random() * dirs.length)];
    };

    // Set initial off-screen positions
    useEffect(() => {
        iconsRef.current.forEach((icon) => {
            if (!icon) return;
            const { x, y } = randomOffset();
            icon.style.transform = `translate(${x}, ${y})`;
            icon.style.opacity = '0';
        });
    }, []);

    const handleEnter = useCallback(() => {
        iconsRef.current.forEach((icon) => {
            if (!icon) return;
            icon.style.transition = 'transform 0.35s cubic-bezier(0.16,1,0.3,1), opacity 0.25s ease';
            icon.style.transform = 'translate(0, 0)';
            icon.style.opacity = '1';
        });
    }, []);

    const handleLeave = useCallback(() => {
        iconsRef.current.forEach((icon) => {
            if (!icon) return;
            const { x, y } = randomOffset();
            icon.style.transition = 'transform 0.3s ease-in, opacity 0.2s ease';
            icon.style.transform = `translate(${x}, ${y})`;
            icon.style.opacity = '0';
        });
    }, []);

    return (
        <div
            ref={containerRef}
            className={className}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            style={{ position: 'relative', ...style }}
        >
            {children}

            {/* Social icons overlay */}
            <div
                style={{
                    position: 'absolute',
                    bottom: '16px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    gap: '8px',
                    zIndex: 5,
                }}
            >
                {links.map((link, i) => (
                    <a
                        key={i}
                        ref={(el) => { iconsRef.current[i] = el; }}
                        href={link.href}
                        aria-label={link.label ?? `Social link ${i + 1}`}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '40px',
                            height: '40px',
                            borderRadius: '50%',
                            backgroundColor: '#FF6B35',
                            color: 'white',
                            textDecoration: 'none',
                            fontSize: '16px',
                            opacity: 0,
                        }}
                    >
                        {link.icon}
                    </a>
                ))}
            </div>
        </div>
    );
}
