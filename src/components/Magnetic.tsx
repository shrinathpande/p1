'use client';

import { useRef, useState, useEffect } from 'react';

export default function Magnetic({ children, className = '' }: { children: React.ReactNode; className?: string }) {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current!.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Magnetic strength - adjust divisor to make it stronger/weaker
        setPosition({ x: middleX / 8, y: middleY / 8 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <div
            ref={ref}
            className={`relative transition-transform duration-200 ease-out ${className}`}
            style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
        >
            {children}
        </div>
    );
}
