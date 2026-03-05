'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PillTag from '@/components/PillTag';
import ProfileCard from '@/components/ProfileCard';
import ContactCard from '@/components/ContactCard';
import Magnetic from '@/components/Magnetic';

export default function Home() {
  const [clickedPill, setClickedPill] = useState<string | null>(null);

  const handlePillClick = (name: string) => {
    setClickedPill(name);
    setTimeout(() => setClickedPill(null), 300);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#e8e8e8]">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center relative w-full max-w-2xl mx-auto py-20">

        {/* Name/Profile Card - Top */}
        <div className="z-50 hover:z-[60] transition-all duration-300">
          <Magnetic>
            <ProfileCard className="-rotate-2 hover:rotate-0" />
          </Magnetic>
        </div>

        {/* Role Pill - Second */}
        <div className="z-40 hover:z-[60] transition-all duration-300 -mt-6">
          <Magnetic>
            <PillTag
              text="Design ⊕ Development"
              color="blue"
              onClick={() => handlePillClick('design')}
              className={`
                rotate-2 hover:rotate-0
                ${clickedPill === 'design' ? 'ring-4 ring-white/50' : ''}
              `}
            />
          </Magnetic>
        </div>

        {/* Hobby/Fun Pill - Third */}
        <div className="z-30 hover:z-[60] transition-all duration-300 -mt-6">
          <Magnetic>
            <PillTag
              text="Pokemon Trainer"
              color="orange"
              onClick={() => handlePillClick('pokemon')}
              className={`
                -rotate-1 hover:rotate-0
                ${clickedPill === 'pokemon' ? 'ring-4 ring-white/50' : ''}
              `}
            />
          </Magnetic>
        </div>

        {/* Drone Show Design - Fourth */}
        <div className="z-20 hover:z-[60] transition-all duration-300 -mt-6">
          <Magnetic>
            <a href="https://shrinathpande.webflow.io/" target="_blank" rel="noopener noreferrer" className="block">
              <PillTag
                text="Drone Show Design"
                color="purple"
                onClick={() => handlePillClick('drone')}
                className={`
                  rotate-1 hover:rotate-0
                  ${clickedPill === 'drone' ? 'ring-4 ring-white/50' : ''}
                `}
              />
            </a>
          </Magnetic>
        </div>

        {/* Contact Card - Bottom */}
        <div className="z-10 hover:z-[60] transition-all duration-300 -mt-6">
          <Magnetic>
            <ContactCard
              className="-rotate-1 hover:rotate-0 origin-top"
            />
          </Magnetic>
        </div>

      </main>

      <Footer />
    </div>
  );
}
