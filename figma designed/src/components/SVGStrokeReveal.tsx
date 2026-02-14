import { useRef, useEffect, type CSSProperties } from 'react';

interface SVGStrokeRevealProps {
    /** The SVG text string or path data */
    text: string;
    /** Font size (default 120) */
    fontSize?: number;
    /** Font family (default 'Teko') */
    fontFamily?: string;
    /** Stroke color (default '#D5D5D5') */
    strokeColor?: string;
    /** Fill color after reveal (default 'transparent') */
    fillColor?: string;
    /** Stroke width (default 1) */
    strokeWidth?: number;
    style?: CSSProperties;
    className?: string;
}

/**
 * Renders text as an SVG with a stroke that draws itself in as the user
 * scrolls the element into view. Based on the P2 dynamicSvg effect.
 */
export function SVGStrokeReveal({
    text,
    fontSize = 120,
    fontFamily = "'Teko', sans-serif",
    strokeColor = '#D5D5D5',
    fillColor = 'transparent',
    strokeWidth = 1,
    style,
    className = '',
}: SVGStrokeRevealProps) {
    const svgRef = useRef<SVGSVGElement>(null);
    const textRef = useRef<SVGTextElement>(null);

    useEffect(() => {
        const svg = svgRef.current;
        const textEl = textRef.current;
        if (!svg || !textEl) return;

        // Get total stroke length
        const length = textEl.getComputedTextLength() * 2.5; // Approximate stroke length
        textEl.style.strokeDasharray = `${length}`;
        textEl.style.strokeDashoffset = `${length}`;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animate stroke drawing
                        textEl.style.transition = 'stroke-dashoffset 2s ease-out';
                        textEl.style.strokeDashoffset = '0';
                    }
                });
            },
            { threshold: 0.2 },
        );

        observer.observe(svg);

        return () => observer.disconnect();
    }, [text]);

    return (
        <svg
            ref={svgRef}
            className={className}
            style={{ width: '100%', overflow: 'visible', ...style }}
            viewBox={`0 0 1000 ${fontSize * 1.3}`}
            preserveAspectRatio="xMinYMid meet"
        >
            <text
                ref={textRef}
                x="0"
                y={fontSize}
                style={{
                    fontFamily,
                    fontSize: `${fontSize}px`,
                    fontWeight: 600,
                    fill: fillColor,
                    stroke: strokeColor,
                    strokeWidth,
                    strokeLinecap: 'round',
                    strokeLinejoin: 'round',
                }}
            >
                {text}
            </text>
        </svg>
    );
}
