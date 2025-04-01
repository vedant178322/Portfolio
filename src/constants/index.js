export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Teachnook',
    position: 'Web `developer',
    img: 'assets/review1.png',
    review:
      'Working with Vedant was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Velotio',
    position: 'Intern Software-developer',
    img: 'assets/review2.jpg',
    review:
      "Vedant has shown exceptional dedication and strong performance throughout the internship. He consistently delivered quality work, demonstrated a great willingness to learn, and made valuable contributions to the team.",
  }
]

export const myProjects = [
  {
    title: 'RealEstate-Ecommerce',
    desc: 'This real estate website is designed to help users easily browse, buy, sell, or rent properties. With an intuitive interface, visitors can filter listings by location, price, and property type. Each listing includes detailed descriptions, high-quality images, and contact options for agents. The site may also feature interactive maps, mortgage calculators, and other tools to enhance the user experience, offering a seamless and informative journey for prospective buyers and sellers.',
    subdesc:
      'Built as a unique Software-as-a-Service app with React.js 14, Tailwind CSS, TypeScript, Framer Motion.',
    href: 'https://realestate23-front.vercel.app/',
    texture: '/public/assets/1video.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'OSMS',
    desc: 'An Online Service Management System is a platform designed to manage and streamline the delivery of services. It typically allows businesses to track service requests, manage customer inquiries, assign tasks to service agents, and monitor service performance. This system helps ensure efficient service delivery, improves customer satisfaction, and provides a centralized platform for managing all service-related processes, such as ticketing, scheduling, and reporting.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://github.com/vedant178322/OSMS',
    texture: '/public/assets/2video.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },

  {
    title: 'AI-Transcripter',
    desc: 'An AI Transcriber is a tool or software that uses artificial intelligence to convert audio or video content into written text (transcription). This technology is commonly used for transcribing interviews, meetings, podcasts, lectures, or any other type of spoken content.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://github.com/Parthw33/Voice-Dubber',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'NPTEL',
    pos: 'IOT 4.0',
    duration: '2023-2024',
    title: "I completed the NPTEL Certificate course on IoT 4.0 with a score of 84.4%. This course covered key concepts in the Internet of Things (IoT), including its architecture, technologies, and applications, with a focus on Industry 4.0 integration. My strong performance reflects my understanding and proficiency in these areas.",
    icon: '/assets/NPTEL.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Teachnook Internship',
    pos: 'Web Developer',
    duration: '2022 - 2023',
    title: "Done with the Web devolpment learning IInternship where I learned the devlopement and devlop the website ",
    icon: '/assets/review1.png',
    animation: 'clapping',
  }

];
