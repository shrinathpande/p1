'use client';

import { useState } from 'react';

interface PillTagProps {
    text: string;
    color: 'pink' | 'blue' | 'orange' | 'yellow' | 'purple';
    className?: string;
    onClick?: () => void;
    icon?: React.ReactNode;
}

const colorClasses = {
    pink: {
        bg: 'bg-[#f8a5a5]',
        shadow: 'pill-shadow-pink',
        text: 'text-gray-800',
    },
    blue: {
        bg: 'bg-[#4da6ff]',
        shadow: 'pill-shadow-blue',
        text: 'text-gray-800',
    },
    orange: {
        bg: 'bg-[#ff6b35]',
        shadow: 'pill-shadow-orange',
        text: 'text-white',
    },
    yellow: {
        bg: 'bg-[#ffc526]',
        shadow: 'pill-shadow-yellow',
        text: 'text-gray-800',
    },
    purple: {
        bg: 'bg-[#a855f7]',
        shadow: 'pill-shadow-purple',
        text: 'text-white',
    },
};

export default function PillTag({ text, color, className = '', onClick, icon }: PillTagProps) {
    const [isPressed, setIsPressed] = useState(false);
    const colors = colorClasses[color];

    return (
        <div
            className={`
        ${colors.bg} ${colors.shadow} text-black
        px-10 py-6 rounded-3xl cursor-pointer select-none
        font-bold text-3xl md:text-3xl lg:text-4xl text-center leading-normal whitespace-nowrap
        transition-all duration-300 ease-out
        pill-hover animate-float-subtle
        ${isPressed ? 'scale-95' : ''}
        ${className}
      `}
            onClick={onClick}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            onMouseLeave={() => setIsPressed(false)}
        >
            <div className="flex items-center gap-3">
                {icon && <span>{icon}</span>}
                <span>{text}</span>
            </div>
        </div>
    );
}
