type Project = {
  name: string
  description: string
  link: string
  image: string // changed from video to image
  id: string
}

type WorkExperience = {
  company: string
  title: string
  start: string
  end: string
  link: string
  id: string
}

type BlogPost = {
  title: string
  description: string
  link: string
  uid: string
}

type SocialLink = {
  label: string
  link: string
}

export type AppStoreApp = {
  image: string
  name: string
  tagline: string
  description: string
  features: string[]
  appStoreUrl?: string
  id: string
}

export const PROJECTS: Project[] = [
  {
    name: 'Motion Primitives Pro',
    description:
      'Advanced components and templates to craft beautiful websites.',
    link: 'https://pro.motion-primitives.com/',
    image: '/motion-primitives-pro.png', // <-- update to your image path
    id: 'project1',
  },
  {
    name: 'Motion Primitives',
    description: 'UI kit to make beautiful, animated interfaces.',
    link: 'https://motion-primitives.com/',
    image: '/motion-primitives.png', // <-- update to your image path
    id: 'project2',
  },
  {
    name: 'Fake Project One',
    description: 'A sample project for demonstration purposes.',
    link: 'https://example.com/fake1',
    image: '/fake1.png', // <-- update to your image path
    id: 'project3',
  },
  {
    name: 'Fake Project Two',
    description: 'Another sample project for the infinite slider.',
    link: 'https://example.com/fake2',
    image: '/fake2.png', // <-- update to your image path
    id: 'project4',
  },
]

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: 'Reglazed Studio',
    title: 'CEO',
    start: '2024',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work1',
  },
  {
    company: 'Freelance',
    title: 'Design Engineer',
    start: '2022',
    end: '2024',
    link: 'https://ibelick.com',
    id: 'work2',
  },
  {
    company: 'Freelance',
    title: 'Front-end Developer',
    start: '2017',
    end: 'Present',
    link: 'https://ibelick.com',
    id: 'work3',
  },
]

export const BLOG_POSTS: BlogPost[] = [
  {
    title: 'Exploring the Intersection of Design, AI, and Design Engineering',
    description: 'How AI is changing the way we design',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-1',
  },
  {
    title: 'Why I left my job to start my own company',
    description:
      'A deep dive into my decision to leave my job and start my own company',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-2',
  },
  {
    title: 'What I learned from my first year of freelancing',
    description:
      'A look back at my first year of freelancing and what I learned',
    link: '/blog/exploring-the-intersection-of-design-ai-and-design-engineering',
    uid: 'blog-3',
  },
  {
    title: 'How to Export Metadata from MDX for Next.js SEO',
    description: 'A guide on exporting metadata from MDX files to leverage Next.js SEO features.',
    link: '/blog/example-mdx-metadata',
    uid: 'blog-4',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Github',
    link: 'https://github.com/Githubense',
  },
  {
    label: 'LinkedIn',
    link: 'https://www.linkedin.com/in/angelpimienta',
  },
]

export const EMAIL = 'pimientangel@outlook.com'

export const APP_STORE_APPS: AppStoreApp[] = [
  {
    id: 'ratingo',
    image: '/ratingoBanner.png',
    name: 'Ratingo',
    tagline: 'Block distractions. Build better habits.',
    description:
      'Ratingo is a unique porn-blocking app that uses CBT friction methods and gamification to help you take control of your digital habits. Designed for privacy and effectiveness, Ratingo empowers you to break unwanted patterns and build a healthier relationship with technology.',
    features: [
      'Advanced blocking for adult content',
      'CBT-inspired friction and habit tracking',
      'Gamified rewards to keep you motivated',
      'Minimal, privacy-first design',
    ],
    appStoreUrl: 'https://apps.apple.com/us/app/no-nut-porn-blocker-ratingo/id6746169519', // Add App Store URL if available
  },
]

type Education = {
  institution: string;
  degree: string;
  expectedGraduation: string;
  location: string;
  relevantCoursework: string;
  id: string;
};

export const EDUCATION: Education[] = [
  {
    institution: 'Apple Developer Academy @ Unina Federico II',
    degree: 'Apple Developer Academy Student',
    expectedGraduation: 'Expected to Graduate in June 2025',
    location: 'Napoli, IT',
    relevantCoursework: 'Coding, Graphical User Interface Design, Business.',
    id: 'edu1',
  },
  {
    institution: 'Universidad de las Américas Puebla',
    degree: 'Bachelor of Engineering in Computer Systems Engineering',
    expectedGraduation: 'Expected to Graduate in June 2025',
    location: 'Puebla, MX',
    relevantCoursework: 'App Development, Machine Learning, Cloud Computing, Artificial Intelligence.',
    id: 'edu2',
  },
  {
    institution: 'Universidad de las Américas Puebla',
    degree: 'Bachelor of Engineering in Robotics and Telecommunications Engineering',
    expectedGraduation: 'Expected to Graduate in June 2025',
    location: 'Puebla, MX',
    relevantCoursework: 'Robotics Vision, Kinematics and Dynamics of Robots, Wireless and Mobile Networks.',
    id: 'edu3',
  },
];
