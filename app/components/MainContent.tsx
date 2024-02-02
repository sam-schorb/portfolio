'use client'

import React from 'react';
import Profile from './Profile';
import Experience from './Experience';
import Stack from './Stack';
import Projects from './Projects';
import Contact from './Contact';
import LinksBlock from './LinksBlock';
import HeaderBar from './HeaderBar';

interface MainContentProps {
  aboutRef: React.RefObject<HTMLDivElement>;
  experienceRef: React.RefObject<HTMLDivElement>;
  stackRef: React.RefObject<HTMLDivElement>;
  projectsRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const MainContent: React.FC<MainContentProps> = ({ aboutRef, experienceRef, stackRef, projectsRef, contactRef }) => {

    const scrollToSection = (section: string) => {
        switch (section) {
          case 'about':
            aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'experience':
            experienceRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'stack':
            stackRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'projects':
            projectsRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
          case 'contact':
            contactRef.current?.scrollIntoView({ behavior: 'smooth' });
            break;
        }
      };


    return (
        <div className="flex flex-col lg:flex-row min-h-screen xl:ml-[30%] md:ml-[10%]">
            <div className="xl:max-w-6xl max-w-full mx-[10%] xl:mx-[10%]">
            <div><HeaderBar scrollToSection={scrollToSection}/></div>
          <div ref={aboutRef} id="about" className="pt-16 md:pt-40 pb-40"><Profile /></div>
          <div ref={experienceRef} id="experience" className="pt-16 pb-16"><Experience /></div>
          <div ref={stackRef} id="stack" className="pt-16 pb-16"><Stack /></div>
          <div ref={projectsRef} id="projects" className="pt-16 pb-16"><Projects /></div>
          <div ref={contactRef} id="contact" className="pt-16 pb-16"><Contact /></div>
          <div className=" py-40"><LinksBlock scrollToSection={scrollToSection} /></div>
        </div>
      </div>
    );
  };

export default MainContent;
