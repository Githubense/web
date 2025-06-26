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
    name: "HandDrop: Share anything in a pinch",
    description: "Utilize your hand to share content accross devices with a simple pinch gesture.",
    link: "https://github.com/Githubense/HandDrop",
    image: process.env.NODE_ENV === 'production' ? '/web/HandDrop - Banner.png' : '/HandDrop - Banner.png',
    id: "project1",
  },
  {
    name: "Smart Vivarium: Irrigation System",
    description: "Solution for a self irrigation system with a high scale cartesian robot",
    link: "https://github.com/Githubense/cartesian_irrigator",
    image: process.env.NODE_ENV === 'production' ? '/web/SmartVivarium - Banner.png' : '/SmartVivarium - Banner.png',
    id: "project3",
  },
  {
    name: "Molly's Canvas",
    description: "Unity-based game bringing awareness to eating disorders.",
    link: "https://github.com/Githubense/mollysCanvas-iOS",
    image: process.env.NODE_ENV === 'production' ? '/web/MollysCanvas - Banner.png' : '/MollysCanvas - Banner.png',
    id: "project2",
  },
  {
    name: "ParkiUDLAP: UDLAP Parking App",
    description: "Optimization for parking with Computer Vision for smart car allocation.",
    link: "https://github.com/Githubense/ParkiUDLAPv2",
    image: process.env.NODE_ENV === 'production' ? '/web/ParkiUDLAP - Banner.png' : '/ParkiUDLAP - Banner.png',
    id: "project4",
  },
  {
    name: "BeHappy: One smile at a time",
    description: "Photo tracker of your daily smiles",
    link: "https://github.com/Githubense/behappy",
    image: process.env.NODE_ENV === 'production' ? '/web/BeHappy - Banner.png' : '/BeHappy - Banner.png',
    id: "project3",
  },
  // {
  //   name: "RelaxWeather: Transport to any weather",
  //   description: "A weather app that provides a sensory user experience.",
  //   link: "https://github.com/Githubense/LowPolyWeather",
  //   image: process.env.NODE_ENV === 'production' ? '/web/RelaxWeather - Banner.png' : '/RelaxWeather - Banner.png',
  //   id: "project5",
  // },

  // {


  //   name: 'Motion Primitives',
  //   description: 'UI kit to make beautiful, animated interfaces.',
  //   link: 'https://motion-primitives.com/',
  //   video:
  //     'https://res.cloudinary.com/read-cv/video/upload/t_v_b/v1/1/profileItems/W2azTw5BVbMXfj7F53G92hMVIn32/XSfIvT7BUWbPRXhrbLed/ee6871c9-8400-49d2-8be9-e32675eabf7e.mp4?_a=DATAdtAAZAA0',
  //   id: 'project2',
  // },
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
    image: process.env.NODE_ENV === 'production' ? '/web/Ratingo - Banner.png' : '/Ratingo - Banner.png', // Use correct path for GitHub Pages
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
    appStoreUrl: 'https://apps.apple.com/us/app/no-nut-porn-blocker-ratingo/id6746169519',
  },
]

type Education = {
  school: string
  degree: string
  location: string
  graduation: string
  coursework: string[]
  id: string
}

export const EDUCATION: Education[] = [
  {
    id: 'edu1',
    school: 'Apple Developer Academy @ Unina Federico II',
    degree: 'Apple Developer Academy Student',
    location: 'Napoli, IT',
    graduation: 'Expected to Graduate in June 2025',
    coursework: [
      'Coding',
      'Graphical User Interface Design',
      'Business',
    ],
  },
  {
    id: 'edu2',
    school: 'Universidad de las Américas Puebla',
    degree: 'Bachelor of Engineering in Computer Systems Engineering',
    location: 'Puebla, MX',
    graduation: 'June 2025',
    coursework: [
      'App Development',
      'Machine Learning',
      'Cloud Computing',
      'Artificial Intelligence',
    ],
  },
  {
    id: 'edu3',
    school: 'Universidad de las Américas Puebla',
    degree: 'Bachelor of Engineering in Robotics and Telecommunications Engineering',
    location: 'Puebla, MX',
    graduation: 'June 2025',
    coursework: [
      'Robotics Vision',
      'Kinematics and Dynamics of Robots',
      'Wireless and Mobile Networks',
    ],
  },
]
