import { useEffect, useRef, useState, useCallback, type CSSProperties } from 'react';

interface ScrollTextRevealProps {
    /** The text lines to reveal. Each line is an array element. */
    lines: string[];
    /** Base text styles to apply to the heading */
    style?: CSSProperties;
    /** Tag to render: h1, h2, h3, etc. */
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    /** Opacity for unrevealed characters (default 0.05) */
    dimOpacity?: number;
    /** Opacity for revealed characters (default 1) */
    fullOpacity?: number;
    /** Scroll distance (in px) over which the full text reveals (default 400) */
    scrollRange?: number;
}

export function ScrollTextReveal({
    lines,
    style = {},
    tag: Tag = 'h2',
    dimOpacity = 0.05,
    fullOpacity = 1,
    scrollRange = 400,
}: ScrollTextRevealProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    // Flatten all characters across lines for counting
    const allChars = lines.join('\n').split('');
    const totalChars = allChars.length;

    const handleScroll = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;

        const rect = el.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Start revealing when element enters bottom 80% of viewport
        const triggerPoint = windowHeight * 0.8;
        const startY = triggerPoint;

        if (rect.top > startY) {
            // Not yet in view
            setProgress(0);
        } else if (rect.top < startY - scrollRange) {
            // Fully revealed
            setProgress(1);
        } else {
            // Partially revealed
            const p = (startY - rect.top) / scrollRange;
            setProgress(Math.max(0, Math.min(1, p)));
        }
    }, [scrollRange]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    // How many characters should be fully visible
    const revealedCount = Math.floor(progress * totalChars);

    let charIndex = 0;

    return (
        <div ref={containerRef}>
            <Tag style={{ ...style, margin: 0 }}>
                {lines.map((line, lineIdx) => (
                    <span key={lineIdx}>
                        {lineIdx > 0 && <br />}
                        {line.split('').map((char, ci) => {
                            const currentIndex = charIndex++;
                            const isRevealed = currentIndex < revealedCount;
                            return (
                                <span
                                    key={`${lineIdx}-${ci}`}
                                    style={{
                                        opacity: isRevealed ? fullOpacity : dimOpacity,
                                        transition: 'opacity 0.15s ease',
                                    }}
                                >
                                    {char}
                                </span>
                            );
                        })}
                    </span>
                ))}
            </Tag>
        </div>
    );
}
