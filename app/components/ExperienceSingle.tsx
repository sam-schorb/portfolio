// ExperienceSingle.tsx
'use client';

import React, { useRef, useEffect, useState } from 'react';

interface ExperienceSingleProps {
  date: string;
  title: string;
  description: string;
  setHeight: (height: number) => void;
  isLastItem: boolean;
  style: React.CSSProperties & { '--line-height'?: string };
  hoveredExperience: string | null;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const ExperienceSingle: React.FC<ExperienceSingleProps> = ({
  date, title, description, isLastItem, setHeight, style, hoveredExperience, onMouseEnter, onMouseLeave
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [currentHeight, setCurrentHeight] = useState<number>(0);

  useEffect(() => {
    if (ref.current) {
      const newHeight = ref.current.getBoundingClientRect().height;
      if (newHeight !== currentHeight) {
        setCurrentHeight(newHeight);
        setHeight(newHeight);
      }
    }
  }, [ref.current, currentHeight, setHeight]);


  const isHovered = title === hoveredExperience;
  const applyMasking = hoveredExperience !== null && !isHovered;

  return (
    <div ref={ref} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className="relative pl-16 " style={style}>
      <div className="absolute left-0 top-2 ">
        {/* Change circle color based on hover state */}
        <div className={`h-6 w-6 rounded-full ${isHovered ? 'bg-litPink' : 'bg-textPink'}`} />
        {!isLastItem && (
          <div 
            className="w-0.5 bg-fadeGray absolute left-[45%] top-[100%]" 
            style={{ height: 'var(--line-height)' }}
          />
        )}
      </div>

      <div className="flex items-center mb-2">
        <h3 className="text-lg text-mediumGray">{date}</h3>
      </div>
      <h2 className={`text-xl mt-4 mb-4 font-semibold ${isHovered ? 'text-textPink' : 'text-customWhite'}`}>{title}</h2>
      <p className="text-md text-mediumGray">{description}</p>
      {applyMasking && (
        <div 
          className="absolute top-0  w-full h-full bg-darkGray opacity-50 rounded-lg transition-colors duration-500" 
          style={{ zIndex: 0 }}
        ></div>
      )}
      <br/><br/><br/><br/>
    </div>
  );
};

export default ExperienceSingle;


