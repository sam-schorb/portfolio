'use client';

import React, { useState } from 'react';
import ProjectSingle from './ProjectSingle';
import projectData from '../data/projectData';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  return (
    <div className="">
      <h1 className="text-3xl font-semibold text-customWhite">From Ideas to Reality</h1>
      <p className="text-xl mt-2 mb-8 text-mediumGray">A spectrum of projects: All unique, all open-source.</p>
      <h2 className="text-2xl font-semibold mb-8 text-customWhite">Featured Work Projects</h2>
      <div className="grid gap-6">
        {projectData.map(project => (
          <ProjectSingle
            key={project.title}
            {...project}
            hoveredProject={hoveredProject} 
            onMouseEnter={() => setHoveredProject(project.title)}
            onMouseLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
