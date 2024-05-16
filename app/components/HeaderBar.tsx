'use client';

import React, { useState, useEffect } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { FaceSmileIcon, BriefcaseIcon, CodeBracketIcon, WrenchScrewdriverIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface IconLabels {
  about: string;
  experience: string;
  stack: string;
  projects: string;
  contact: string;
}

const iconLabels: IconLabels = {
  about: 'About',
  experience: 'Experience',
  stack: 'Stack',
  projects: 'Projects',
  contact: 'Contact',
};

interface HeaderBarProps {
  scrollToSection: (section: keyof IconLabels) => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { 
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const iconComponents = {
    about: FaceSmileIcon,
    experience: BriefcaseIcon,
    stack: WrenchScrewdriverIcon,
    projects: CodeBracketIcon,
    contact: EnvelopeIcon,
  };

  return (
    <>
      <div className={`fixed top-0 left-0 w-full ${isOpen ? 'h-screen' : 'h-20'} md:hidden flex items-center justify-between bg-[rgba(143,143,143,0.1)] backdrop-blur-md border-b border-fadeGray p-3 z-50 transition-all duration-300 ease-in-out`}>
        <img src="/clamicon1.png" alt="Clam Icon" className="w-12 h-auto absolute top-5 left-6" />
        <button onClick={toggleOpen} className="p-2 absolute top-5 right-6">
          {isOpen ? <XMarkIcon className="h-6 w-6 text-customWhite" /> : <Bars3Icon className="h-6 w-6 text-customWhite" />}
        </button>
        {isOpen && (
          <div className="absolute top-1/2 left-6 -translate-y-1/2 space-y-8">
            {Object.entries(iconComponents).map(([key, Icon]) => (
              <div key={key} className="flex items-center cursor-pointer" onClick={() => { scrollToSection(key as keyof IconLabels); toggleOpen(); }}>
                <Icon className="h-8 w-8 text-customWhite mr-4" />
                <span className="text-customWhite text-lg">{iconLabels[key as keyof IconLabels]}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default HeaderBar;
