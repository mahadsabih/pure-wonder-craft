import React, { useEffect, useState } from 'react';

interface ResponsiveWrapperProps {
    children: React.ReactNode;
    designWidth?: number;
    designHeight?: number;
}

export function ResponsiveWrapper({
    children,
    designWidth = 1920,
    designHeight = 12172,
}: ResponsiveWrapperProps) {
    const [scale, setScale] = useState(1);
    const [leftOffset, setLeftOffset] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            // Calculate scale based on viewport width
            // We limit scale to 1 to prevent upscaling on huge screens if desired, 
            // but for "responsive" we usually just care about shrinking. 
            // User said "don't change design", so we might want to let it scale up too if they have a 4k monitor?
            // Usually standard is to cap at 1 (max-width behavior) or just let it scale. 
            // Given the request, I'll allow it to scale down perfectly.
            const viewportWidth = window.innerWidth;
            const newScale = Math.min(viewportWidth / designWidth, 1);
            setScale(newScale);

            // Center content if viewport is wider than design
            if (viewportWidth > designWidth) {
                setLeftOffset((viewportWidth - designWidth) / 2);
            } else {
                setLeftOffset(0);
            }
        };

        // Initial calculation
        handleResize();

        // Event listener
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [designWidth]);

    return (
        <div
            style={{
                width: '100%',
                height: designHeight * scale, // Scale the height of the container
                position: 'relative',
                overflow: 'hidden', // Hide any potential artifacts
                backgroundColor: 'white', // Ensure background on wide screens
            }}
        >
            <div
                style={{
                    transform: `scale(${scale})`,
                    transformOrigin: 'top left',
                    width: designWidth,
                    height: designHeight,
                    position: 'absolute',
                    top: 0,
                    left: leftOffset,
                }}
            >
                {children}
            </div>
        </div>
    );
}
