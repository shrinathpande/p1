'use client';

import { useState } from 'react';

interface ExperienceItem {
    badge: string;
    badgeColor: string;
    title: string;
    subtitle: string;
}

const experienceItems: ExperienceItem[] = [
    {
        badge: 'Currently',
        badgeColor: 'bg-red-400',
        title: 'Freelance Designer',
        subtitle: 'UI/UX & Drone Shows',
    },
    {
        badge: '2020 - 2024',
        badgeColor: 'bg-gray-500/50',
        title: 'Design Lead',
        subtitle: 'Creative Agency',
    },
];

export default function ProfileCard({ className = '' }: { className?: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bg-[#f8a5a5] pill-shadow-pink rounded-3xl p-6 min-w-[320px] transition-all duration-300 animate-float-subtle ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="w-full flex items-center justify-center text-3xl md:text-4xl font-bold text-black">
                <span>Shrinath Pande</span>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                <div className="space-y-4">
                    {experienceItems.map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/20 rounded-xl p-4 transition-all duration-200 hover:bg-white/30"
                        >
                            <span className={`${item.badgeColor} text-white text-xs font-semibold px-3 py-1 rounded-full`}>
                                {item.badge}
                            </span>
                            <h4 className="text-gray-800 font-bold text-lg mt-2">{item.title}</h4>
                            <p className="text-gray-700 text-sm">{item.subtitle}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
