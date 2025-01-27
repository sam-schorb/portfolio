// ProjectData.ts

const projectData = [
  {
    link: 'https://toolsmith-talbots.vercel.app/',
    src: '/toolsmithScreen.webp',
    title: 'Toolsmith',
    description:
      'Toolsmith is a custom-built application created in collaboration with a large local upholstery business to streamline their workflow and consolidate their tools. Previously reliant on multiple software-as-a-service platforms like Fresha and Asana, the business faced inefficiencies due to overlapping and unnecessary features. Toolsmith integrates the essential functionalities of these platforms into a single, user-friendly solution tailored to their specific needs. The application automates invoicing, customer onboarding, sales processing, and enquiry management. It also features an interactive Kanban board to track jobs in progress and manage workflows effectively. The user interface, built with React and ShadCN UI, provides a polished and intuitive experience, while the backend utilises Prisma for object-relational mapping, Supabase for database management, and SWR to ensure a responsive interface.',
  },
  {
    link: 'https://visions.iimaginary.com/',
    src: '/visionsLogo.png',
    title: 'Visions',
    description:
      'Visions is an innovative platform designed to democratize generative art creation through artificial intelligence. It enables users to craft and customize visual sketches using simple text descriptions, without requiring coding expertise. By leveraging advanced AI models like GPT-4 and Google Gemini, Visions transforms natural language inputs into executable code for generating unique artworks. The platform features an intuitive interface where users can dynamically adjust parameters via auto-generated sliders, fine-tuning aspects such as colors, sizes, and speeds in real-time. For more advanced users, Visions offers an interactive code editor with live preview functionality, allowing direct manipulation of the underlying code. The application includes a flexible API management system, enabling seamless integration with various AI service providers. Visions aims to bridge the gap between natural language and visual creativity, making generative art accessible to both novices and experienced creators alike.',
  },
  {
    link: 'https://github.com/sam-schorb/typesetter',
    src: '/typesetterScreen.webp',
    title: 'Typesetter',
    description:
      'This typesetter was built as part of an interview process. It is a sophisticated tool designed to typeset a plaintext file into a novel-formatted PDF. The application takes a raw text file and intelligently processes the content to create a professionally styled book layout. It automatically detects chapter breaks, applies appropriate formatting, and handles typography details such as justification, line spacing, and paragraph indentation. One of the key features of this typesetter is its ability to create a visually pleasing and reader-friendly layout. It carefully considers the placement of text on each page, ensuring that there are no awkward line breaks or orphaned words. The application also incorporates stylistic elements, such as capitalizing chapter titles and adding elegant page numbers, to enhance the overall presentation of the book. By automating the typesetting process, this tool streamlines the workflow of converting a plain text manuscript into a polished, print-ready PDF. It combines the power of advanced text processing algorithms with the principles of professional book design, resulting in a high-quality output that rivals traditionally typeset novels.',
  },
  {
    link: 'https://raincloud.iimaginary.com/',
    src: '/raincloudScreen.webp',
    title: 'Raincloud',
    description:
      "RainCloud is an innovative application designed to transform RNBO patches from Max MSP into fully hosted websites. It leverages RNBO's capability to export web assembly code, enabling web audio generation in browsers on desktop or mobile. RainCloud simplifies the process of converting RNBO patch files into interactive web interfaces. Users upload their JSON file, select UI controls for each parameter, and generate a user interface, which is then hosted online for global accessibility. The application also includes an explorer for browsing and interacting with the patch library. It allows for extensive customization of UI controls and layout, so each patch is user-friendly and true to the creator's vision. RainCloud aims to be a community platform for creators to share their work.",
  },
  {
    link: 'https://polygon.iimaginary.com/',
    src: '/polygonScreen.webp',
    title: 'Polygon',
    description:
      "Polygon is a web-based drum sequencing machine that utilizes spatial computing principles to create unconventional, asymmetrical drum sequences. Unlike traditional grid-bound sequencers, Polygon allows users to place nodes  anywhere on a blank canvas, each representing different drum sounds like kicks, snares, and hi-hats. The spatial arrangement of nodes dictates the rhythm's timing and sequence, with larger gaps altering tempo and groove. Users can control sound synthesis by rotating squares to adjust volume, and moving them along X and Y axes to change tuning and sound length.",
  },
  {
    link: 'https://droplets.iimaginary.com/',
    src: '/dropletsScreen.webp',
    title: 'Droplets',
    description:
      "Droplets is a web application developed using RNBO which features an intuitive interface similar to platforms like Spotify. Designed to allow MaxMSP users to upload and host audio-only versions of their patches on the web. Droplets provides a streamlined process for embedding Max patches into websites, thereby making projects more accessible to a global audience. Droplets leverages RNBO's web assembly feature to create web audio contexts, enabling the integration of synthesized sounds and random seed parameters for generating unique, ever-changing audio patterns.",
  },
  {
    link: 'https://orbits.iimaginary.com/',
    src: '/orbitsScreen.webp',
    title: 'Orbits',
    description:
      'Orbits is a stochastic drum machine and sequencer that operates directly in a web browser. Orbits is unique in its approach to drum sequencing; it randomizes patterns but allows users to control macro parameters like pattern density, offering a distinct and playful experience in drum sequencing.',
  },
];

export default projectData;
