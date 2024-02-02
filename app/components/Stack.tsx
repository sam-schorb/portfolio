'use client';

import React from 'react'; // Import statement for JSX syntax support

// URL mapping for Stack
const stackUrls: { [key: string]: string } = {
  'JavaScript': 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  'TypeScript': 'https://www.typescriptlang.org/',
  'HTML5': 'https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5',
  'CSS3': 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  'Python': 'https://www.python.org/',
  'C++': 'https://www.cplusplus.com/',
  'React.js': 'https://reactjs.org/',
  'Next.js': 'https://nextjs.org/',
  'Tailwind CSS': 'https://tailwindcss.com/',
  'Jest': 'https://jestjs.io/',
  'ESLint': 'https://eslint.org/',
  'Prettier': 'https://prettier.io/',
  'Express': 'https://expressjs.com/',
  'Node.js': 'https://nodejs.org/',
  'NexusUI': 'http://nexus-js.github.io/ui/',
  'Interact.js': 'https://interactjs.io/',
  'Git': 'https://git-scm.com/',
  'Visual Studio Code': 'https://code.visualstudio.com/',
  'MongoDB': 'https://www.mongodb.com/',
  'npm': 'https://www.npmjs.com/',
  'PostgreSQL': 'https://www.postgresql.org/',
  'Photoshop': 'https://www.adobe.com/products/photoshop.html',
  'Illustrator': 'https://www.adobe.com/products/illustrator.html',
  'GIMP': 'https://www.gimp.org/',
  'Github': 'https://github.com/',
  'Vercel': 'https://vercel.com/',
  'Heroku': 'https://www.heroku.com/',
  'Wordpress': 'https://wordpress.com/',
  'Mailjet': 'https://www.mailjet.com/'
};

// StackItem component
const StackItem = ({ stackName }: { stackName: string }) => {
  // Retrieve URL by stackName, fallback to '#' if not found to avoid dead links
  const url = stackUrls[stackName] || '#';

  return (
    <div className="flex items-center text-md text-mediumGray hover:text-textPink">
      <CheckIcon className="text-textPink mr-2" />
      {/* Wrap stackName in an anchor (a) element */}
      <a href={url} target="_blank" rel="noopener noreferrer" className="hover:underline">{stackName}</a>
    </div>
  );
};

// Stack component
export default function Stack() {
  // List of programming languages, frameworks, software and applications, and third-party services
  const programmingLanguages = ['JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'C++'];
  const frameworksAndLibraries = ['React.js', 'Next.js', 'Tailwind CSS', 'Jest', 'ESLint', 'Prettier', 'Express', 'Node.js', 'NexusUI', 'Interact.js'];
  const softwareAndApplications = ['Git', 'Node.js', 'Visual Studio Code', 'MongoDB', 'npm', 'PostgreSQL', 'Photoshop', 'Illustrator', 'GIMP'];
  const thirdPartyServices = ['Github', 'Vercel', 'Heroku', 'Wordpress', 'Mailjet'];

  const renderStackSection = (title: string, stack: string[]) => (
    <div>
      <h3 className="text-2xl font-semibold mb-4 text-customWhite">{title}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {stack.map(stack => (
          <StackItem key={stack} stackName={stack} />
        ))}
      </div>
    </div>
  );

  return (
    <div>
      <h2 className="text-3xl font-semibold text-customWhite">Stack & Tools</h2>
      <p className="text-xl mt-4 mb-12 text-mediumGray">The complete toolkit that powers my work.</p>
      <div className="space-y-16">
        {renderStackSection('Programming Languages', programmingLanguages)}
        {renderStackSection('Frameworks & Libraries', frameworksAndLibraries)}
        {renderStackSection('Software & Applications', softwareAndApplications)}
        {renderStackSection('Third Party Services', thirdPartyServices)}
      </div>
    </div>
  );
}

// CheckIcon component
function CheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}