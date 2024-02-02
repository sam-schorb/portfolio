'use client'

import React, { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import IconBar from './components/IconBar';
import LinksBar from './components/LinksBar';
import MainContent from './components/MainContent';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { ref: aboutRef, name: 'about' },
        { ref: experienceRef, name: 'experience' },
        { ref: stackRef, name: 'stack' },
        { ref: projectsRef, name: 'projects' },
        { ref: contactRef, name: 'contact' },
      ];

      const currentSection = sections.find(section => {
        const rect = section.ref.current?.getBoundingClientRect();
        return rect && rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection && activeSection !== currentSection.name) {
        setActiveSection(currentSection.name);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  return (
    <React.StrictMode>
      <div className="min-h-screen flex">
        <Head>
          <title>Sam Schorb - Full Stack Developer</title>
          <link rel="icon" href="/clamicon1.png" />
        </Head>
        <div className="relative w-full">
          <IconBar scrollToSection={scrollToSection} activeSection={activeSection} />
          <LinksBar scrollToSection={scrollToSection}/>
          <MainContent
            aboutRef={aboutRef}
            experienceRef={experienceRef}
            stackRef={stackRef}
            projectsRef={projectsRef}
            contactRef={contactRef}
          />
        </div>
      </div>
    </React.StrictMode>
  );
}
