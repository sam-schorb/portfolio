'use client';
import Image from 'next/image';
import React from 'react';

interface ProjectSingleProps {
  link: string;
  src: string;
  title: string;
  description: string;
  hoveredProject: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ProjectSingle: React.FC<ProjectSingleProps> = ({
  link,
  src,
  title,
  description,
  hoveredProject,
  onMouseEnter,
  onMouseLeave,
}) => {
  const isHovered = title === hoveredProject;
  const applyMasking = hoveredProject !== null && !isHovered;

  const projectClass = isHovered
    ? 'bg-fadeGray border-shadowGray border-textPink'
    : 'border-transparent';
  const titleClass = isHovered ? 'text-textPink' : 'text-customWhite';
  const descriptionClass = isHovered ? 'text-mediumGray' : 'text-mediumGray';

  return (
    <div
      className={`relative md:flex-row flex-col items-start p-6 md:-ml-6 rounded-md border-2 transition-transform duration-300 ${projectClass} md:flex`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="md:mr-6  md:w-40 w-full mb-8 md:mb-0 flex-none">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <Image
            alt={title}
            src={src}
            width={1024} // Set an appropriate max width
            height={768} // Set an appropriate height
            className={`rounded-md transition-transform duration-300 ${
              isHovered ? 'scale-110' : ''
            }`}
            style={{
              objectFit: 'cover',
              transformOrigin: 'top',
              height: 'auto',
            }}
          />
        </a>
      </div>
      <div className="flex-grow">
        <h3 className={`text-lg font-semibold mb-2 ${titleClass}`}>{title}</h3>
        <p className={`text-md ${descriptionClass}`}>{description}</p>
      </div>
      {applyMasking && (
        <div className="absolute top-0 left-0 w-full h-full bg-darkGray opacity-50 rounded-md"></div>
      )}
    </div>
  );
};

export default ProjectSingle;
