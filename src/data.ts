import { Project, SocialLink, Section } from './types';

export const PROFILE_PHOTO = "src/assets/images/yuriaciole.svg";

export const SECTIONS: Section[] = [
  { id: 'hero', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'web', title: 'Projects' },
  { id: 'contact', title: 'Contact' },
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
}

export const EXPERIENCES: Experience[] = [
  {
    id: 'sobre-mim',
    company: 'About Yuri',
    role: 'Full Stack Developer',
    period: 'Software Engineering Student',
    description: 'Full Stack Developer with hands-on experience in C#, .NET, Angular, Python, and JS. Active in development, technical support, and automation. Focused on continuous improvement, modernization, and problem solving.',
    bullets: [
      'Main Stack: C#, .NET, Angular, Python, JavaScript, Java, SQL',
      'Tools & Infra: Git, Postman, SharePoint, Office 365, Agile Methodologies',
      'Support & Hardware: Technical configuration, maintenance, and logical formatting'
    ]
  },
  {
    id: 'eletronuclear',
    company: 'Eletronuclear',
    role: 'Systems Analysis Intern',
    period: 'Dec/24 – Jun/25',
    description: 'Worked in a critical corporate technology environment with a total focus on stability, operational security, and information systems efficiency.',
    bullets: [
      'Development and maintenance of critical corporate systems using C#, .NET, SQL Server, and Angular.',
      'Technical support and advanced optimization of internal applications, including support for SharePoint and Office 365.',
      'Active participation in software modernization and continuous improvement projects, following development best practices.'
    ]
  },
  {
    id: 'vcnaosabia',
    company: 'vcnaosabia.com.br',
    role: 'Web Developer',
    period: '2014 – 2016',
    description: 'Creation and maintenance of an entertainment and curiosities portal with a high daily flow of user data.',
    bullets: [
      'Full-stack creation of the information website and maintenance of its operational integrity.',
      'Conception and implementation of visual and functional improvements, layout optimizations, and general usability.'
    ]
  },
  {
    id: 'freelancer',
    company: 'Freelancer',
    role: 'Freelance Developer & Support',
    period: '2020 – Present',
    description: 'Independent web developer specializing in custom solutions, automation, advanced IT support, and maintenance of official platforms.',
    bullets: [
      'Web Support & Maintenance - STIEPAR (2022 – 2023): Security maintenance and updates for the institutional website (stiepar.org.br), fixing technical issues, and ongoing infrastructure support.',
      'Strategic development and maintenance of interactive automated Discord bots using JavaScript.',
      'General infrastructure and hardware services: detailed physical cleaning, full system formatting, and operating system / driver installation.',
      'Attentive and agile technical support to simplify the end-user experience.'
    ]
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/yuri_aciole/',
    icon: 'Instagram',
    handle: '@yuri_aciole'
  },
  {
    name: 'GitHub',
    url: 'https://github.com/AmilIruy',
    icon: 'Github',
    handle: 'github.com/AmilIruy'
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/yuri-aciole-86417a295/',
    icon: 'Linkedin',
    handle: 'linkedin.com/in/yuri-aciole-86417a295'
  },
  {
    name: 'WhatsApp',
    url: 'https://wa.me/5524999593389',
    icon: 'MessageCircle',
    handle: 'WhatsApp'
  }
];

export const PROJECTS: Project[] = [
  // --- WEB DEVELOPMENT PROJECTS ---
  {
    id: 'web-1',
    title: 'Demonstration API',
    subtitle: 'Technology / API Development',
    category: 'web',
    description: 'Demonstration API developed as part of a modernization initiative for an internal system, transitioning from a legacy architecture based on AngularJS and VB.NET to a modern stack using Angular, .NET, and SQL Server. The project aimed to demonstrate improvements in scalability, maintainability, performance, and application structure, serving as a reference for future system enhancements.',
    image: 'src\\assets\\images\\GACT.png',
    tags: ['Angular', '.NET', 'C#', 'TypeScript'],
    link: '#',
    highlighted: true
  },
  {
    id: 'web-2',
    title: 'Interactive 3D Navigation Totem',
    subtitle: '3D Design/ Front-End Development',
    category: 'web',
    description: 'Development of a 3D navigation application using Three.js for an interactive totem, allowing users to locate rooms and visualize routes through corridors with directional guidance. The solution aimed to improve internal navigation through an intuitive and immersive experience.',
    image: 'src\\assets\\images\\SOON.png',
    tags: ['React', 'Three.js CSS3D'],
    link: '#',
    highlighted: true
  },
  {
    id: 'web-3',
    title: 'SOON',
    subtitle: 'SOON / SOON',
    category: 'web',
    description: 'SOON',
    image: 'src\\assets\\images\\SOON.png',
    tags: ['...', '...', '...'],
    link: '#'
  },
  {
    id: 'web-4',
    title: 'SOON',
    subtitle: 'SOON / SOON',
    category: 'web',
    description: 'SOON',
    image: 'src\\assets\\images\\SOON.png',
    tags: ['...', '...', '...'],
    link: '#'
  },
  {
    id: 'web-5',
    title: 'SOON',
    subtitle: 'SOON / SOON',
    category: 'web',
    description: 'SOON',
    image: 'src\\assets\\images\\SOON.png',
    tags: ['...', '...', '...'],
    link: '#'
  }
];
