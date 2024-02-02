'use client'

import React from 'react';

export default function Profile() {
    return (
        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start relative"> {/* Adjusted for responsive padding and flex direction */}
            <div className="md:absolute md:top-[-100px] md:left-1/2  md:mb-0 mb-10"> {/* Responsive image container */}
                <img 
                    src="/clamhead1.png" 
                    alt="Sam Schorb" 
                    className="w-full h-80"  // Adjusted for responsive height
                />
            </div>
            <div className="text-center md:text-left"> {/* Text container with responsive text alignment */}
                <h1 className="text-6xl text-customWhite">Hi! I'm 
                <br/>
                <span className="font-bold text-textPink">Sam Schorb</span></h1>
                <h2 className="text-3xl font-semibold text-customWhite mt-16 lg:mt-32">A Bit About Me</h2> {/* Adjusted margin for responsive layout */}
                <p className="text-lg text-gray-400 mt-4">
                    As a Full-Stack Developer, my programming journey began 5 years ago, and the self-directed learning continues every day.
                    <br/><br/>
                    I am passionate about developing interesting and memorable experiences that captivate users. I believe that the best way to engage people is by stimulating their imaginations. Whether it's motivating and teaching young people or building inspiring artistic tools, creative problem-solving is at the heart of everything I do.
                    <br/><br/>
                    After initially learning programming through Digital Signal Processing, I soon taught myself to build innovative musical instruments on embedded systems. My enthusiasm for sharing creative tools with a wider audience led me to Full-Stack Web Development, where I now challenge myself to find inventive uses for every new tool I learn.
                    <br/><br/>
                    Outside the IDE, I love playing with my kids, cooking, hiking, and indulging my passion for music—I’ve recently managed recording labels, scored a film, and performed live-coded music at the Glastonbury Festival.
                    <br/><br/>
                    I’m currently looking to expand my development skills as part of an ambitious team. Let’s build something amazing together!
                </p>
            </div>
        </div>
    );
}
