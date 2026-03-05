'use client';

import { useState } from 'react';

interface ContactItem {
    label: string;
    icon: React.ReactNode;
    href: string;
}

const contactItems: ContactItem[] = [
    {
        label: 'E-mail',
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        href: 'mailto:hello@shrinathpande.com',
    },
    {
        label: 'LinkedIn',
        icon: (
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
        ),
        href: 'https://www.linkedin.com/in/shrinathpande/',
    },
    {
        label: 'Behance',
        icon: (
            <div className="w-5 h-5 flex items-center justify-center">
                <img src="/behance-icon.png" alt="Behance" className="w-full h-full object-contain" />
            </div>
        ),
        href: 'https://www.behance.net/shrinathpande',
    },
];

export default function ContactCard({ className = '' }: { className?: string }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`bg-[#ffc526] pill-shadow-yellow rounded-2xl p-6 min-w-[280px] transition-all duration-300 ${className}`}
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <div className="w-full flex items-center justify-center text-3xl md:text-4xl font-bold text-black">
                <span>Contact</span>
            </div>

            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 mt-4 opacity-100' : 'max-h-0 mt-0 opacity-0'}`}>
                <div className="space-y-2">
                    {contactItems.map((item, index) => (
                        <a
                            key={item.label}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`
                                contact-item
                                flex items-center justify-between
                                px-4 py-3 rounded-xl
                                text-gray-800 font-medium
                                ${hoveredIndex === index ? 'bg-white/30' : 'bg-white/10'}
                            `}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <span>{item.label}</span>
                            <span className={`transition-transform duration-200 ${hoveredIndex === index ? 'scale-110' : ''}`}>
                                {item.icon}
                            </span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}
