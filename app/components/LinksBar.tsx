'use client';

import React, { useState, FunctionComponent } from 'react';
import { FaEnvelope, FaDownload } from 'react-icons/fa';
import { AiOutlineGithub, AiOutlineLinkedin, AiOutlineGlobal } from 'react-icons/ai';
import { EnvelopeIcon } from '@heroicons/react/24/outline';


interface LinksBarProps {
  scrollToSection: (section: string) => void;
}

const LinksBar: React.FC<LinksBarProps> = ({ scrollToSection }) => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);
  const [isBtnHovered, setIsBtnHovered] = useState(false); 


  const renderIcon = (IconComponent: FunctionComponent, iconName: string, link: string) => (
    <a href={link} target="_blank" rel="noopener noreferrer"
       onMouseEnter={() => setHoveredIcon(iconName)}
       onMouseLeave={() => setHoveredIcon(null)}
       className={`group text-mediumGray hover:text-customWhite transition-colors duration-300 ${hoveredIcon === iconName ? 'text-customWhite' : 'text-shadowGray'}`}>
      <div className="text-3xl">
        <IconComponent />
      </div>
      <span className="hidden group-hover:block absolute transform -translate-x-1/4 mt-2 p-1 bg-customWhite text-gray-800 text-sm rounded">
        {iconName.charAt(0).toUpperCase() + iconName.slice(1)}
      </span>
    </a>
  );
  
    
    const renderButtonIcon = (IconComponent: FunctionComponent, iconName: string) => (
        <div className="text-base p-3">
            <div>
                <IconComponent />
            </div>
        </div>
    );


    return (
        <div className='hidden xl:block' >
        <div className=" fixed top-0 left-24 h-full w-80 bg-[rgba(143,143,143,0.05)] p-5  border-r border-fadeGray flex flex-col items-center space-y-10">
            <img src="/headshot5.jpg" alt="Sam Schorb" className="rounded-full mt-4" style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover' }} />

            <div className='p-4'>
                <h2 className="text-customWhite font-semibold text-xl text-center">Sam Schorb</h2>
                <span className="text-center text-mediumGray text-lg">Full Stack Developer</span>
            </div>
            <div className="flex p-4 mt-10 space-x-8">
                {renderIcon(AiOutlineLinkedin, 'linkedin', 'https://www.linkedin.com/in/sam-schorb')}
                {renderIcon(AiOutlineGithub, 'github', 'https://github.com/sam-schorb')}
                {renderIcon(AiOutlineGlobal, 'blog', 'https://www.iimaginary.com/')}
            </div>
            <p className="text-mediumGray pb-2 text-center text-sm">
                Innovative Full Stack Developer and self-taught engineer with 4 years of expertise, specializing in NextJS & React. With a background in teaching and music production, my approach is innovative and self-directed, ready to grow with a dynamic tech team. </p>
                <div className="flex flex-col pt-8 space-y-4 w-full">
                <a href="/CV-Sam-Schorb.pdf" download className="block w-full">
                    <button 
                        className="border border-shadowGray px-4 flex items-center justify-center rounded-md bg-darkGray text-customWhite hover:bg-fadeGray transition-colors duration-300 w-full"
                        onMouseEnter={() => setIsBtnHovered(true)}
                        onMouseLeave={() => setIsBtnHovered(false)}>
                        {renderButtonIcon(FaDownload, 'download')} Download CV 
                    </button>
                </a>
                <button 
                    className="bg-customWhite text-gray-800 px-4 flex items-center justify-center rounded-md w-full"
                    onClick={() => scrollToSection('contact')}>
                    {renderButtonIcon(FaEnvelope, 'email')} Get in Touch
                </button>
            </div>
        </div>
        </div>
    );
};

export default LinksBar;
