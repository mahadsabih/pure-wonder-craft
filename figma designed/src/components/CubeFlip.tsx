import { type ReactNode, type CSSProperties } from 'react';

interface CubeFlipProps {
    /** Content shown by default */
    front: ReactNode;
    /** Content shown on hover */
    back: ReactNode;
    /** Flip axis: 'x' or 'y' (default 'x') */
    axis?: 'x' | 'y';
    /** Transition duration in ms (default 600) */
    duration?: number;
    /** Height of the cube container */
    height?: string | number;
    style?: CSSProperties;
    className?: string;
}

/**
 * 3D cube-flip effect — front face visible by default, flips to reveal
 * back face on hover, like turning a physical cube.
 */
export function CubeFlip({
    front,
    back,
    axis = 'x',
    duration = 600,
    height = 'auto',
    style,
    className = '',
}: CubeFlipProps) {
    const rotateFrom = axis === 'x' ? 'rotateX(-90deg)' : 'rotateY(90deg)';
    const rotateTo = axis === 'x' ? 'rotateX(90deg)' : 'rotateY(-90deg)';

    return (
        <div
            className={`cube-flip-container ${className}`}
            style={{
                perspective: '800px',
                height,
                ...style,
            }}
        >
            <style>{`
                .cube-flip-container:hover .cube-flip-inner {
                    transform: ${rotateFrom};
                }
                .cube-flip-container:hover .cube-flip-back {
                    opacity: 1;
                }
                .cube-flip-container:hover .cube-flip-front {
                    opacity: 0;
                }
            `}</style>
            <div
                className="cube-flip-inner"
                style={{
                    width: '100%',
                    height: '100%',
                    transition: `transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
                    transformStyle: 'preserve-3d',
                    position: 'relative',
                }}
            >
                {/* Front face */}
                <div
                    className="cube-flip-front"
                    style={{
                        width: '100%',
                        height: '100%',
                        backfaceVisibility: 'hidden',
                        transition: `opacity ${duration * 0.5}ms ease`,
                    }}
                >
                    {front}
                </div>

                {/* Back face */}
                <div
                    className="cube-flip-back"
                    style={{
                        position: 'absolute',
                        inset: 0,
                        backfaceVisibility: 'hidden',
                        transform: rotateTo,
                        opacity: 0,
                        transition: `opacity ${duration * 0.5}ms ease ${duration * 0.3}ms`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    {back}
                </div>
            </div>
        </div>
    );
}
