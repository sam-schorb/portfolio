
'use client'

import React, { useState, useEffect } from 'react';
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

interface IconBarProps {
  scrollToSection: (section: keyof IconLabels) => void;
  activeSection: string; 
}


const IconBar: React.FC<IconBarProps & { activeSection: string }> = ({ scrollToSection, activeSection }) => {
  const [selectedIcon, setSelectedIcon] = useState<keyof IconLabels>('about');
  const [hoveredIcon, setHoveredIcon] = useState<keyof IconLabels | null>(null);

  const icons = {
    about: FaceSmileIcon,
    experience: BriefcaseIcon,
    stack: WrenchScrewdriverIcon,
    projects: CodeBracketIcon,
    contact: EnvelopeIcon,
  };

  const IconWrapper = ({ iconName, IconComponent }: { iconName: keyof IconLabels; IconComponent: React.ElementType }) => {
    const isSelected = selectedIcon === iconName;
    const isHovered = hoveredIcon === iconName;
    const baseClasses = "text-2xl cursor-pointer p-3 rounded-md flex items-center transition-colors duration-500 relative";
    const hoverClasses = isHovered && !isSelected ? "hover:bg-fadeGray hover:text-customWhite" : "";
    const selectedClasses = isSelected ? "bg-customWhite text-darkGray z-10" : "text-mediumGray";

    useEffect(() => {
      // Use type assertion to ensure activeSection is treated as keyof IconLabels
      const sectionKey = activeSection as keyof IconLabels;
      if (Object.keys(iconLabels).includes(activeSection)) {
        setSelectedIcon(sectionKey);
      }
    }, [activeSection]);  

    return (
      <div className={`${baseClasses} ${hoverClasses} ${selectedClasses}`}
           onClick={() => {
             setSelectedIcon(iconName);
             scrollToSection(iconName);
           }}
           onMouseEnter={() => setHoveredIcon(iconName)}
           onMouseLeave={() => setHoveredIcon(null)}>
        <IconComponent className="h-6 w-6" />
        <span className={`absolute left-full transform translate-x-1/4 p-1 bg-customWhite text-gray-800 text-sm rounded z-30 ${isHovered ? 'block' : 'hidden'}`}>
          {iconLabels[iconName]}
        </span>
      </div>
    );
  };

  return (
    <div className='hidden md:block' >
    <img src="/clamicon1.png" alt="Clam Icon" className="fixed top-5 left-6 w-12" style={{ width: '48px', height: 'auto' }} />
    <div className="fixed top-0 left-0 h-full bg-[rgba(143,143,143,0.1)] border-r border-fadeGray flex flex-col items-center justify-center p-6 space-y-5">
        {Object.entries(icons).map(([iconName, IconComponent]) => (
          <IconWrapper key={iconName} iconName={iconName as keyof IconLabels} IconComponent={IconComponent} />
        ))}
      </div>
    </div>
  );
};

export default IconBar;