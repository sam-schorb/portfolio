'use client';

import React, { useState } from 'react';
import ExperienceSingle from './ExperienceSingle';
import experienceData from '../data/ExperienceData';

const Experience: React.FC = () => {
  const [heights, setHeights] = useState<number[]>([]);
  const [hoveredExperience, setHoveredExperience] = useState<string | null>(null);

  const setHeight = (index: number) => (height: number) => {
    setHeights(heights => {
      const newHeights = [...heights];
      newHeights[index] = height;
      return newHeights;
    });
  };

  return (
    <div className=" mx-auto rounded-lg">
              <h2 className="text-3xl text-customWhite font-semibold">Experience</h2>
        <p className="text-xl text-mediumGray mt-4 mb-8">The landmarks of my career, one role at a time.</p>
      <div className="">
        {experienceData.map((exp, index) => (
          <ExperienceSingle
            key={index}
            {...exp}
            setHeight={setHeight(index)}
            isLastItem={index === experienceData.length - 1}
            style={{ '--line-height': heights[index] ? `${heights[index]}px` : 'auto' }}
            hoveredExperience={hoveredExperience}
            onMouseEnter={() => setHoveredExperience(exp.title)}
            onMouseLeave={() => setHoveredExperience(null)}
          />

        ))}
      </div>
    </div>
  );
};

export default Experience;
